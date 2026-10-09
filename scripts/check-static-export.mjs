import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../out");
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://qurancademy.vercel.app").origin;
function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
}
const htmlFiles = files(root).filter(file => file.endsWith(".html") && !file.includes("_not-found") && path.basename(file) !== "404.html");
const titles = new Set();
let linksChecked = 0;
let imagesChecked = 0;
let articlesChecked = 0;

function exportedFile(urlPath) {
  const target = path.join(root, decodeURIComponent(urlPath));
  return [target, `${target}.html`, path.join(target, "index.html")].find(file => fs.existsSync(file) && fs.statSync(file).isFile());
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file).split(path.sep).join("/");
  const route = relative === "index.html" ? "/" : `/${relative.replace(/\.html$/, "")}`;
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${route}`);
  titles.add(title);
  const canonical = html.match(/<link\b(?=[^>]*rel="canonical")[^>]*href="([^"]+)"/)?.[1];
  assert.ok(canonical, `Missing canonical: ${route}`);
  assert.equal(new URL(canonical).href, new URL(`${siteUrl}${route}`).href, `Wrong canonical: ${route}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Expected one main heading: ${route}`);
  assert.ok(!/googletagmanager|Message Received!|dummy@dummy|Placeholder Image|Cover Image Placeholder/.test(html), `Outdated content: ${route}`);
  for (const tag of html.matchAll(/<(a|img)\b[^>]*>/g)) {
    const url = tag[0].match(/(?:href|src)="([^"]+)"/)?.[1];
    if (!url?.startsWith("/") || url.startsWith("//")) continue;
    const pathname = url.split(/[?#]/)[0] || "/";
    assert.ok(exportedFile(pathname), `Broken ${tag[1]} target ${pathname} on ${route}`);
    if (tag[1] === "img") imagesChecked++; else linksChecked++;
  }
  for (const script of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(script[1]);
    assert.equal(schema["@context"], "https://schema.org");
    if (schema["@type"] === "BlogPosting") {
      assert.equal(schema.mainEntityOfPage, canonical);
      assert.equal(schema.author["@type"], "Organization");
      assert.ok(!Number.isNaN(Date.parse(schema.datePublished)));
      assert.ok(!Number.isNaN(Date.parse(schema.dateModified)));
      articlesChecked++;
    }
  }
}
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(locations.length, htmlFiles.length, "Sitemap and public page counts differ");
assert.equal(new Set(locations).size, locations.length, "Duplicate sitemap URLs");
for (const location of locations) {
  const url = new URL(location);
  assert.equal(url.origin, siteUrl);
  assert.ok(exportedFile(url.pathname), `Sitemap target missing: ${url.pathname}`);
}
assert.ok(fs.readFileSync(path.join(root, "robots.txt"), "utf8").includes(`Sitemap: ${siteUrl}/sitemap.xml`));
assert.equal(articlesChecked, 6, "Expected six article schemas");
assert.ok(fs.existsSync(path.join(root, "404.html")));
console.log(`Passed: ${htmlFiles.length} public pages, ${linksChecked} internal links, ${imagesChecked} image references, six article schemas, canonical URLs, sitemap and robots.`);

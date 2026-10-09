// Local preview of the existing static export. No new hosting service is required.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../out");
const port = Number(process.argv[2] || process.env.PORT || 3100);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2", ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8" };

if (!fs.existsSync(path.join(root, "index.html"))) {
  console.error("Run npm run build before previewing the site.");
  process.exit(1);
}

http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname); }
  catch { response.writeHead(400); response.end("Invalid URL"); return; }
  const candidate = path.resolve(root, `.${pathname}`);
  const relative = path.relative(root, candidate);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    response.writeHead(403); response.end("Forbidden"); return;
  }
  const file = [candidate, `${candidate}.html`, path.join(candidate, "index.html")].find(item => fs.existsSync(item) && fs.statSync(item).isFile());
  const selected = file || path.join(root, "404.html");
  response.writeHead(file ? 200 : 404, { "Content-Type": mime[path.extname(selected)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
  if (request.method === "HEAD") { response.end(); return; }
  fs.createReadStream(selected).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`Static preview: http://localhost:${port}`));

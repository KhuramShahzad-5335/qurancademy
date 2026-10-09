import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { siteConfig } from "./content/site.config";
import { blogsData } from "./content/blogs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/courses", "/pricing", "/contact", "/faqs", "/blog", "/safety", "/privacy", "/terms"];
  return [
    ...routes.map(path => ({ url: `${siteUrl}${path}` })),
    ...siteConfig.courses.map(course => ({ url: `${siteUrl}/courses/${course.slug}` })),
    ...blogsData.map(post => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: post.updatedAt || post.publishedAt })),
  ];
}

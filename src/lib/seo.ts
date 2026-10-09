import type { Metadata } from "next";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qurancademy.vercel.app";
const parsedUrl = new URL(configuredUrl);
if (!["https:", "http:"].includes(parsedUrl.protocol)) throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL.");
export const siteUrl = parsedUrl.origin;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | Qurancademy`;
  return {
    title: fullTitle, description, alternates: { canonical: url },
    openGraph: {
      title: fullTitle, description, url, siteName: "Qurancademy", type: "website", locale: "en_US",
      images: [{ url: `${siteUrl}/social-preview.png`, width: 1200, height: 630, alt: "Qurancademy - Online Quran learning" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [`${siteUrl}/social-preview.png`] },
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import FloatingSupportWidget from "./components/common/floatingWidget";
import MotionEffects from "./components/story/motionEffects";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { jsonLd, siteUrl } from "@/lib/seo";
import { siteConfig } from "./content/site.config";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Qurancademy",
  description: siteConfig.tagline,
  robots: { index: true, follow: true },
  other: { "theme-color": "#04151f" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <a href="#main-content" className="fixed top-2.5 left-2.5 z-[300] -translate-y-[160%] rounded-lg bg-blue-bell-200 px-[18px] py-3 font-bold text-blue-bell-900 focus:translate-y-0">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
          "@context": "https://schema.org", "@type": "EducationalOrganization",
          "@id": `${siteUrl}/#organization`, name: siteConfig.name, url: siteUrl,
          logo: `${siteUrl}/icon.png`, description: siteConfig.tagline,
          telephone: siteConfig.whatsappNumber,
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
          ...(siteConfig.email ? { email: siteConfig.email } : {}),
        }) }} />
        {analyticsEnabled && <><Analytics /><SpeedInsights /></>}
        <MotionEffects />
        <Header />
        <div id="main-content" tabIndex={-1} className="relative z-[1] flex-1">{children}</div>
        <Footer />
        <FloatingSupportWidget />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import ConditionalReviewsSlider from "./components/common/conditionalReviewsSlider";
import FloatingSupportWidget from "./components/common/floatingWidget";
import BookLoader from "./components/common/bookLoader";
import IslamicAmbientBackground from "./components/common/islamicAmbientBackground";
import CustomCursor from "./components/common/customCursor";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

const googleAdsId = "AW-18438605125";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qurancademy",
  description: "Learn Quran Online with Certified Male & Female Teachers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
        `}
      </Script>
      <body className="min-h-full flex flex-col bg-transparent text-neutral-100">
        <SpeedInsights />
        <Analytics />
        <CustomCursor />
        <BookLoader />
        <IslamicAmbientBackground />
        <Header />
        <div className="relative z-[1] flex-1">{children}</div>
        <ConditionalReviewsSlider />
        <Footer />
        <FloatingSupportWidget />
      </body>
    </html>
  );
}
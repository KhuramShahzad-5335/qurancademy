import Link from "next/link";
import PageHero from "../components/common/pageHero";
import EnquiryForm from "../components/contact/enquiryForm";
import { siteConfig } from "../content/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Us and Request a Free Trial", "Ask about Quran courses, teacher availability, fees and a free trial. Prepare an enquiry and send it directly through WhatsApp.", "/contact");

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
      <PageHero eyebrow="Talk to us" title="Let’s find the right starting point" description="Ask about a course, request a free trial, or share the times that suit your family. Confirm your teacher, language, schedule and fees before booking." asideValue="1:1" asideLabel="personal learning" />
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-6">
          <div className="bw-card space-y-4 p-6">
            <h2 className="text-2xl font-bold">Message Qurancademy</h2>
            <p className="text-neutral-300 leading-7">Prefer to chat directly? Use our existing WhatsApp contact.</p>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bw-button-primary">Open WhatsApp · {siteConfig.whatsappNumber}</a>
            {siteConfig.email && <p><a href={`mailto:${siteConfig.email}`} className="text-emerald-300 underline">{siteConfig.email}</a></p>}
            <p className="text-sm text-neutral-400">Based in {siteConfig.address}. Online lesson availability is agreed with your teacher.</p>
          </div>
          <div className="bw-card space-y-3 p-6">
            <h2 className="text-xl font-bold">Planning around school?</h2>
            <p className="text-sm leading-7 text-neutral-300">If you are in the UK, US or Canada, include your city, preferred days and local time. We will discuss available options rather than promise a slot before checking.</p>
            <Link href="/pricing" className="text-emerald-300 underline">What to ask about fees</Link>
            <p><Link href="/safety" className="text-emerald-300 underline">Parent guidance for online lessons</Link></p>
          </div>
        </section>
        <section className="bw-card p-6 sm:p-8" aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading" className="mb-4 text-2xl font-bold">Prepare an enquiry</h2>
          <EnquiryForm />
          <p className="mt-5 text-xs text-neutral-400">Read our <Link href="/privacy" className="underline">privacy policy</Link> before sharing information.</p>
        </section>
      </div>
    </main>
  );
}

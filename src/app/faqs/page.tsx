import FAQAccordion from "../components/faq/faqAccordion";
import { faqsData } from "../content/faqs";
import PageHero from "../components/common/pageHero";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Online Quran Classes: Frequently Asked Questions", "Answers about choosing a course, requesting a free trial, teacher preferences, lesson times, fees and sending an enquiry.", "/faqs");

export default function FAQsPage() {
  return <main className="mx-auto max-w-4xl space-y-12 px-4 py-16"><PageHero eyebrow="Help and support" title="Your questions, answered" description="A clear starting point for courses, trials and lesson planning. Ask us about anything specific to your family before booking." asideValue="1:1" asideLabel="personal planning" /><FAQAccordion faqs={faqsData} /><p className="text-neutral-300">Still have a question? <Link href="/contact" className="text-emerald-300 underline">Prepare an enquiry</Link> or read our <Link href="/pricing" className="text-emerald-300 underline">fee checklist</Link>.</p></main>;
}

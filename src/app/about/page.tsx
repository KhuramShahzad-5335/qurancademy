import Link from "next/link";
import PageHero from "../components/common/pageHero";
import { siteConfig } from "../content/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Our Online Quran Learning Approach", "Meet Qurancademy's approach to one-on-one learning. Discuss your starting level, teacher preferences and family routine before booking.", "/about");

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-16">
      <PageHero eyebrow="About Qurancademy" title="Learning built around your family" description="Our aim is to make Quran learning from home approachable, personal and consistent. Qurancademy is based in Lahore, Pakistan, with lessons arranged online." asideValue="1:1" asideLabel="live lessons" />
      <section className="grid gap-6 md:grid-cols-2">
        <div className="bw-card p-8"><h2 className="text-2xl font-bold">A thoughtful starting point</h2><p className="mt-4 text-neutral-300 leading-8">A child recognising their first Arabic letters and an adult returning to reading may need very different support. Start with a conversation about the learner’s experience, the course you are considering and the time available for practice.</p><p className="mt-4 text-neutral-300 leading-8">Families new to Islam are welcome to ask basic questions and discuss a suitable starting level. There is no need to arrive with a complete learning plan.</p></div>
        <div className="bw-card p-8"><h2 className="text-2xl font-bold">A routine you can sustain</h2><p className="mt-4 text-neutral-300 leading-8">For families in the UK, US and Canada, school hours and time differences matter. Include your city and local lesson preferences when you enquire. Teaching language, teacher availability and a regular timetable are agreed before lessons start.</p><p className="mt-4 text-neutral-300 leading-8">We do not promise a specific completion time. Learning goals should be realistic for the learner’s starting level and available practice.</p></div>
      </section>
      <section className="bw-card p-8"><h2 className="text-2xl font-bold">Get to know your proposed teacher</h2><p className="mt-4 text-neutral-300 leading-8">Tell us if you prefer a male or female teacher, and ask about the available teacher’s relevant qualifications, teaching experience and language. Use the trial to see how explanations and feedback work for your learner. Availability must be confirmed before a booking.</p><Link href="/safety" className="mt-5 inline-block text-emerald-300 underline">Questions parents should ask →</Link></section>
      <section><h2 className="mb-6 text-3xl font-bold">How to get started</h2><div className="grid gap-6 md:grid-cols-3">{siteConfig.steps.map(step => <div key={step.step} className="bw-card p-6"><p className="text-emerald-300">{step.step}</p><h3 className="mt-3 text-xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-300">{step.desc}</p></div>)}</div></section>
      <Link href="/contact" className="bw-button-primary">Ask about a free trial →</Link>
    </main>
  );
}

import FAQAccordion from "../components/faq/faqAccordion";
import { faqsData } from "../content/faqs";
import { siteConfig } from "../content/site.config";


export const metadata = {
  title: "Frequently Asked Questions | eTutors Quran Academy",
  description: "Find answers about our 1-on-1 online Quran classes, teachers, and scheduling.",
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16 border-b border-neutral-800 pb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
          Help & Support
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-neutral-400 text-sm md:text-base mt-3 max-w-xl mx-auto">
          Everything you need to know about starting online Quran classes, booking free demos, and scheduling sessions.
        </p>
      </div>

      <section className="mb-16">
        <FAQAccordion faqs={faqsData} />
      </section>

      <section className="bw-card text-center p-10 bg-neutral-900 border border-neutral-800">
        <h3 className="text-2xl font-bold text-white">Have More Questions?</h3>
        <p className="text-neutral-400 text-sm mt-2 max-w-md mx-auto">
          Message us directly on WhatsApp to get immediate assistance regarding class timings or teacher availability.
        </p>
        <a
          href={`${siteConfig
              .whatsappLink}&text=${encodeURIComponent("Assalamu Alaikum! I have a question about your Quran classes.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bw-button-primary mt-6 inline-flex"
        >
          Ask Us on WhatsApp →
        </a>
      </section>
    </main>
  );
}
import FAQAccordion from "../components/faq/faqAccordion";
import { faqsData } from "../content/faqs";
import { siteConfig } from "../content/site.config";
import PageHero from "../components/common/pageHero";


export const metadata = {
  title: "Frequently Asked Questions | Qurancademy",
  description: "Find answers about our 1-on-1 online Quran classes, teachers, and scheduling.",
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <PageHero
        eyebrow="Help & Support"
        title="Frequently Asked Questions"
        description="Everything you need to know about starting online Quran classes, booking free demos, and scheduling sessions."
        asideValue="1:1"
        asideLabel="clear answers"
      />

      <section className="my-16">
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
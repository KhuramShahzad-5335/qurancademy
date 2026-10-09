import type { FAQItem } from "@/app/content/faqs";

export default function FAQAccordion({ faqs = [] }: { faqs?: FAQItem[] }) {
  return <div className="space-y-4">{faqs.map(faq => <details key={faq.id} className="bw-card p-5"><summary className="cursor-pointer text-base font-semibold text-white">{faq.question}</summary><p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-neutral-300">{faq.answer}</p></details>)}</div>;
}

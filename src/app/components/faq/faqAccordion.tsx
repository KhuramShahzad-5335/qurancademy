import type { FAQItem } from "@/app/content/faqs";
export default function FAQAccordion({ faqs = [] }: { faqs?: FAQItem[] }) {
  return <div>{faqs.map(faq => <details key={faq.id} className="faq-card"><summary>{faq.question}<span className="faq-toggle" aria-hidden="true" /></summary><div className="faq-answer"><p>{faq.answer}</p></div></details>)}</div>;
}

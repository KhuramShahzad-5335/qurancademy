import type { FAQItem } from "@/app/content/faqs";
export default function FAQAccordion({ faqs = [] }: { faqs?: FAQItem[] }) {
  return <div>{faqs.map(faq => <details key={faq.id} className="group border-t border-[var(--line)] py-[22px] last:border-b">
    <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-medium leading-[1.7] [&::-webkit-details-marker]:hidden">{faq.question}<span className="ml-auto shrink-0 text-[23px] font-light text-[var(--marker)]" aria-hidden="true"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span></summary>
    <p className="mt-[15px] animate-answer-arrival text-sm leading-[1.95] text-[var(--muted)] motion-reduce:animate-none">{faq.answer}</p>
  </details>)}</div>;
}

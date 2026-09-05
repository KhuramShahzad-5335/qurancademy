'use client';

import { FAQItem } from '@/app/content/faqs';
import { useState } from 'react';

interface FAQAccordionProps {
  faqs?: FAQItem[];
}

export default function FAQAccordion({ faqs = [] }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs?.[0]?.id ?? null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (!faqs || faqs.length === 0) {
    return <p className="text-neutral-400 text-sm">No FAQs available.</p>;
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="bw-card transition-all duration-200">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-white pr-4">
                {faq.question}
              </span>
              <span className="text-xl font-mono text-neutral-400 shrink-0">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className="mt-4 pt-4 border-t border-neutral-800 text-sm text-neutral-400 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
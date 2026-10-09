"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import EnquiryForm from "../contact/enquiryForm";
import { siteConfig } from "@/app/content/site.config";
import { faqsData } from "@/app/content/faqs";

export default function FloatingSupportWidget() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return (
    <>
      <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="support-dialog" className="fixed bottom-5 right-5 z-40 rounded-full bg-emerald-300 px-5 py-3 font-bold text-[#07100e] shadow-lg">Need help?</button>
      <dialog ref={dialog} id="support-dialog" aria-labelledby="support-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} className="m-auto max-h-[85svh] w-[min(92vw,32rem)] overflow-y-auto rounded-2xl border border-white/15 bg-[#07100e] p-6 text-white backdrop:bg-black/70">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 id="support-title" className="text-xl font-bold">Qurancademy help</h2>
          <button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-white/20 px-3 py-2" aria-label="Close help">Close</button>
        </div>
        <p className="mb-4 text-sm text-neutral-300">Quick answers and a direct enquiry. This panel is not a live chat.</p>
        <div className="mb-6 space-y-2">
          {faqsData.filter(item => item.category === "Schedules & Fees" || item.id === "2").map(item => (
            <details key={item.id} className="rounded-xl border border-white/10 p-3">
              <summary className="cursor-pointer text-sm font-semibold">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{item.answer}</p>
            </details>
          ))}
        </div>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="mb-6 block text-emerald-300 underline">Open WhatsApp directly</a>
        <EnquiryForm />
        <Link href="/privacy" onClick={() => setOpen(false)} className="mt-5 block text-xs text-neutral-400 underline">Privacy and your enquiry</Link>
      </dialog>
    </>
  );
}

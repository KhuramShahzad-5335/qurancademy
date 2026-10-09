"use client";

import { useId, useState, type FormEvent } from "react";
import { siteConfig } from "@/app/content/site.config";
import { enquiryMessage, whatsappUrl } from "@/lib/contact";

const fieldClass = "block min-h-12 w-full rounded-md border border-blue-bell-200/17 bg-blue-bell-900 px-3.5 py-3 text-[13px] text-blue-bell-50 transition-all duration-250 placeholder:text-blue-bell-400 focus:border-blue-bell-200 focus:outline-none focus:ring-3 focus:ring-blue-bell-200/10 [&_option]:bg-blue-bell-900";

export default function EnquiryForm() {
  const id = useId();
  const [name, setName] = useState("");
  const [course, setCourse] = useState(siteConfig.courses[0].title);
  const [timeZone, setTimeZone] = useState("");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDraft(enquiryMessage({ name, course, timeZone, message }));
    setCopyStatus("");
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Draft copied. Paste it into WhatsApp and press Send.");
    } catch {
      setCopyStatus("Copy is unavailable. Select the message below and copy it manually.");
    }
  }

  return (
    <div className="grid gap-[22px]">
      <p className="mb-[25px] text-xs leading-[1.9] text-blue-bell-300">Prepare your enquiry, then review and send it in WhatsApp. Nothing is sent or saved by this form. A parent or guardian should enquire for a child.</p>
      <form onSubmit={prepareDraft} className="grid gap-5">
        <div>
          <label htmlFor={`${id}-name`} className="mb-[9px] block text-[11px] text-blue-bell-100">Your name <span className="text-[10px] text-blue-bell-400">(required)</span></label>
          <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={80} pattern=".*\S.*" title="Enter a name containing at least one non-space character." value={name} onChange={e => { setName(e.target.value); setDraft(""); }} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${id}-course`} className="mb-[9px] block text-[11px] text-blue-bell-100">Course</label>
          <select id={`${id}-course`} name="course" value={course} onChange={e => { setCourse(e.target.value); setDraft(""); }} className={fieldClass}>
            {siteConfig.courses.map(item => <option key={item.code}>{item.title}</option>)}
            <option>Help me choose</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-zone`} className="mb-[9px] block text-[11px] text-blue-bell-100">City or time zone <span className="text-[10px] text-blue-bell-400">(optional)</span></label>
          <input id={`${id}-zone`} name="timeZone" maxLength={80} placeholder="For example, London or Toronto" value={timeZone} onChange={e => { setTimeZone(e.target.value); setDraft(""); }} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="mb-[9px] block text-[11px] text-blue-bell-100">Questions or preferred times <span className="text-[10px] text-blue-bell-400">(optional)</span></label>
          <textarea id={`${id}-message`} name="message" maxLength={1200} rows={3} placeholder="Tell us what you would like to learn. Avoid private details about your child." value={message} onChange={e => { setMessage(e.target.value); setDraft(""); }} className={fieldClass} />
        </div>
        <button type="submit" className="group inline-flex items-center justify-center gap-6 rounded-full border px-6 py-3.5 text-center text-xs font-semibold leading-[1.4] transition-all duration-250 ease-story hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.15)] motion-reduce:transform-none min-h-[50px] border-transparent bg-[var(--action-bg)] text-[var(--action-ink)] hover:bg-[var(--action-hover)] w-full">Prepare WhatsApp message</button>
      </form>
      <noscript><p>To enquire, use the direct WhatsApp link on this page.</p></noscript>
      {draft && (
        <section aria-label="Your enquiry draft" className="mt-[26px] space-y-4 rounded-lg border border-blue-bell-200/35 bg-blue-bell-800 p-[22px] [&_pre]:whitespace-pre-wrap [&_pre]:break-words [&_pre]:font-sans [&_pre]:text-xs [&_pre]:leading-[1.9] [&_pre]:text-blue-bell-200">
          <p role="status" className="text-sm">Your draft is ready. It has not been sent.</p>
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-6 text-blue-bell-200">{draft}</pre>
          <a href={whatsappUrl(draft)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-6 rounded-full border px-6 py-3.5 text-center text-xs font-semibold leading-[1.4] transition-all duration-250 ease-story hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.15)] motion-reduce:transform-none min-h-[50px] border-transparent bg-[var(--action-bg)] text-[var(--action-ink)] hover:bg-[var(--action-hover)] w-full">Review and send in WhatsApp</a>
          <button type="button" onClick={copyDraft} className="group inline-flex items-center justify-center gap-6 rounded-full border px-6 py-3.5 text-center text-xs font-semibold leading-[1.4] transition-all duration-250 ease-story hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.15)] motion-reduce:transform-none min-h-[50px] border-[var(--line)] bg-transparent text-[var(--ink)] hover:bg-blue-bell-500/10 w-full">Copy message instead</button>
          <p className="text-xs leading-5 text-blue-bell-400">WhatsApp opens in another tab. Press Send there to deliver your enquiry. If it does not open, copy the draft and message {siteConfig.whatsappNumber}.</p>
          {copyStatus && <p role="status" className="text-sm text-blue-bell-200">{copyStatus}</p>}
        </section>
      )}
    </div>
  );
}

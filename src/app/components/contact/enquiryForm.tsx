"use client";

import { useId, useState, type FormEvent } from "react";
import { siteConfig } from "@/app/content/site.config";
import { enquiryMessage, whatsappUrl } from "@/lib/contact";

const fieldClass = "form-field";

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
    <div className="enquiry-form">
      <p className="form-intro">Prepare your enquiry, then review and send it in WhatsApp. Nothing is sent or saved by this form. A parent or guardian should enquire for a child.</p>
      <form onSubmit={prepareDraft} className="form-fields">
        <div>
          <label htmlFor={`${id}-name`} className="form-label">Your name <span className="form-optional">(required)</span></label>
          <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={80} pattern=".*\S.*" title="Enter a name containing at least one non-space character." value={name} onChange={e => { setName(e.target.value); setDraft(""); }} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${id}-course`} className="form-label">Course</label>
          <select id={`${id}-course`} name="course" value={course} onChange={e => { setCourse(e.target.value); setDraft(""); }} className={fieldClass}>
            {siteConfig.courses.map(item => <option key={item.code}>{item.title}</option>)}
            <option>Help me choose</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-zone`} className="form-label">City or time zone <span className="form-optional">(optional)</span></label>
          <input id={`${id}-zone`} name="timeZone" maxLength={80} placeholder="For example, London or Toronto" value={timeZone} onChange={e => { setTimeZone(e.target.value); setDraft(""); }} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="form-label">Questions or preferred times <span className="form-optional">(optional)</span></label>
          <textarea id={`${id}-message`} name="message" maxLength={1200} rows={3} placeholder="Tell us what you would like to learn. Avoid private details about your child." value={message} onChange={e => { setMessage(e.target.value); setDraft(""); }} className={fieldClass} />
        </div>
        <button type="submit" className="story-button form-submit">Prepare WhatsApp message</button>
      </form>
      <noscript><p>To enquire, use the direct WhatsApp link on this page.</p></noscript>
      {draft && (
        <section aria-label="Your enquiry draft" className="form-draft">
          <p role="status" className="draft-status">Your draft is ready. It has not been sent.</p>
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-6 text-graphite-200">{draft}</pre>
          <a href={whatsappUrl(draft)} target="_blank" rel="noopener noreferrer" className="story-button form-submit">Review and send in WhatsApp</a>
          <button type="button" onClick={copyDraft} className="story-button story-button--secondary form-submit">Copy message instead</button>
          <p className="text-xs leading-5 text-graphite-400">WhatsApp opens in another tab. Press Send there to deliver your enquiry. If it does not open, copy the draft and message {siteConfig.whatsappNumber}.</p>
          {copyStatus && <p role="status" className="text-sm text-graphite-200">{copyStatus}</p>}
        </section>
      )}
    </div>
  );
}

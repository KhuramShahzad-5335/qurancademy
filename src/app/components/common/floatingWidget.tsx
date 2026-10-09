"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import EnquiryForm from "../contact/enquiryForm";
import { siteConfig } from "@/app/content/site.config";
import { faqsData } from "@/app/content/faqs";

type Message = { role: "user" | "assistant"; content: string };

function getAssistantReply(query: string) {
  const normalized = query.toLowerCase();
  if (normalized.includes("fee") || normalized.includes("price") || normalized.includes("cost")) {
    return "Fees depend on the course, lesson length, frequency and teacher availability. We do not publish unconfirmed prices. Please ask for a written quote in your currency before booking.";
  }
  if (normalized.includes("time") || normalized.includes("schedule") || normalized.includes("when")) {
    return "Share your city or time zone and preferred local days and times. We can then discuss availability with a teacher; a time is only confirmed after both sides agree.";
  }
  if (normalized.includes("trial")) {
    return "You can request a free trial enquiry. Tell us the course, learner's starting level, city or time zone and preferred times. The trial details should be confirmed before the session.";
  }
  if (normalized.includes("course") || normalized.includes("class") || normalized.includes("tajweed") || normalized.includes("hifz") || normalized.includes("qaida")) {
    return `We currently offer ${siteConfig.courses.map(course => course.title).join(", ")}. Each course is discussed around the learner's starting level and routine before regular lessons begin.`;
  }
  return "I can help with courses, trial enquiries, lesson times and fee questions. Tell me what you would like to know, or use WhatsApp for a direct conversation.";
}

export default function FloatingSupportWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"chat" | "contact">("chat");
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Assalamu Alaikum! I can help with courses, trial enquiries, lesson times and fee questions. What would you like to know?" },
  ]);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const chatEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, thinking]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const content = input.trim();
    if (!content || thinking) return;
    const nextMessages = [...messages, { role: "user" as const, content }];
    setMessages(nextMessages);
    setInput("");
    setThinking(true);
    await new Promise(resolve => setTimeout(resolve, 650));
    setMessages(current => [...current, { role: "assistant", content: getAssistantReply(content) }]);
    setThinking(false);
  }

  return (
    <>
      <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="support-dialog" className="help-trigger">Ask us</button>
      <dialog ref={dialog} id="support-dialog" aria-labelledby="support-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} className="site-dialog help-dialog">
        <div className="dialog-header">
          <div><p className="eyebrow">A thoughtful first step</p><h2 id="support-title" className="help-title">Qurancademy assistant</h2></div>
          <button type="button" onClick={() => setOpen(false)} className="dialog-close" aria-label="Close assistant">×</button>
        </div>
        <div className="support-tabs" role="tablist" aria-label="Support options">
          <button type="button" role="tab" aria-selected={tab === "chat"} onClick={() => setTab("chat")} className={tab === "chat" ? "is-active" : ""}>AI assistant</button>
          <button type="button" role="tab" aria-selected={tab === "contact"} onClick={() => setTab("contact")} className={tab === "contact" ? "is-active" : ""}>Send an enquiry</button>
        </div>
        {tab === "chat" ? (
          <div className="support-chat">
            <p className="support-note">Answers are based on Qurancademy&apos;s published course and planning information.</p>
            <div className="support-messages" aria-live="polite">
              {messages.map((message, index) => <p key={`${message.role}-${index}`} className={`support-message support-message--${message.role}`}>{message.content}</p>)}
              {thinking && <p className="support-message support-message--assistant">Thinking…</p>}
              <div ref={chatEnd} />
            </div>
            <form onSubmit={sendMessage} className="support-form">
              <label htmlFor="support-question" className="sr-only">Ask a question</label>
              <input id="support-question" value={input} onChange={event => setInput(event.target.value)} maxLength={1000} placeholder="Ask about courses, fees or timings…" />
              <button type="submit" disabled={thinking || !input.trim()}>Send</button>
            </form>
          </div>
        ) : (
          <div className="support-contact">
            <p className="support-note">Prefer a direct answer? Send the details your family would like us to discuss.</p>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="help-direct-link">Open WhatsApp directly</a>
            <EnquiryForm />
            <Link href="/privacy" onClick={() => setOpen(false)} className="support-privacy">Privacy and your enquiry</Link>
          </div>
        )}
        {tab === "chat" && <div className="support-faqs">{faqsData.filter(item => item.category === "Schedules & Fees" || item.id === "2").slice(0, 2).map(item => <details key={item.id}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>}
      </dialog>
    </>
  );
}

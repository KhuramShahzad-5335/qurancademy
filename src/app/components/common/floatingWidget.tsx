"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import EnquiryForm from "../contact/enquiryForm";
import LineIcon from "./lineIcon";
import { siteConfig } from "@/app/content/site.config";
import { faqsData } from "@/app/content/faqs";
import { answerQuestion, type AnswerBlock, type SupportContext } from "@/lib/supportAssistant";

type Message = { id: number; role: "user" | "assistant"; content?: string; blocks?: AnswerBlock[] };
const welcome: Message = {
  id: 0, role: "assistant", content: "Assalamu Alaikum! Where would you like to begin? I can help compare courses, prepare a trial enquiry or explain the questions to ask before booking."
};
const initialSuggestions = ["Help me choose a course", "How do I request a free trial?", "What should I ask about fees?"];
const knowledge = { courses: siteConfig.courses, faqs: faqsData, contactUrl: siteConfig.whatsappLink };

function SupportAnswerLink({ block, onNavigate }: { block: AnswerBlock; onNavigate: () => void }) {
  const children = <>{block.label} <span aria-hidden="true">↗</span></>;
  return block.href.startsWith("https://")
    ? <a href={block.href} target="_blank" rel="noopener noreferrer" className="mt-3.5 inline-flex items-center gap-[15px] border-b border-[var(--line)] pb-1 text-xs text-blue-bell-200">{children}</a>
    : <Link href={block.href} className="mt-3.5 inline-flex items-center gap-[15px] border-b border-[var(--line)] pb-1 text-xs text-blue-bell-200" onClick={onNavigate}>{children}</Link>;
}

export default function FloatingSupportWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"chat" | "contact">("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const context = useRef<SupportContext>({});
  const nextId = useRef(1);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const question = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) dialog.current?.showModal(); else dialog.current?.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  useEffect(() => {
    if (!open || view !== "chat") return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    list.current?.scrollTo({ top: list.current.scrollHeight, behavior: preference.matches ? "instant" : "smooth" });
  }, [messages, open, view]);

  function ask(content: string) {
    const trimmed = content.trim().slice(0,1000);
    if (!trimmed) return;
    const reply = answerQuestion(trimmed, context.current, knowledge);
    context.current = reply.context;
    const userMessage: Message = { id: nextId.current++, role: "user", content: trimmed };
    const answerMessage: Message = { id: nextId.current++, role: "assistant", blocks: reply.blocks };
    setMessages(current => [...current, userMessage, answerMessage].slice(-40));
    setSuggestions(reply.suggestions);
    setInput("");
    question.current?.focus();
  }

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); ask(input); }
  function reset() {
    context.current = {};
    setMessages([welcome]);
    setSuggestions(initialSuggestions);
    setInput("");
    question.current?.focus();
  }


  return <>
    <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="support-dialog" className="fixed right-[15px] bottom-[15px] z-45 flex min-h-12 items-center gap-2.5 rounded-full border border-blue-bell-200/40 bg-blue-bell-950 px-[19px] py-3 text-[11px] text-blue-bell-50 shadow-[0_8px_30px_rgba(0,0,0,.2)] transition-transform duration-250 hover:-translate-y-[3px] min-[481px]:right-[22px] min-[481px]:bottom-[22px] [&_svg]:size-[17px] [&_svg]:text-blue-bell-200"><LineIcon kind="message" />Ask Qurancademy</button>
    <dialog ref={dialog} id="support-dialog" aria-labelledby="support-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} className="border border-[var(--line)] bg-blue-bell-950 p-5 text-blue-bell-50 backdrop:bg-blue-bell-950/75 backdrop:backdrop-blur-[6px] m-auto max-h-[90svh] w-[min(94vw,600px)] overflow-y-auto rounded-xl min-[761px]:max-h-[86svh] min-[761px]:p-6 [&>div:first-child]:mb-5">
      <div className="mb-[30px] flex items-center justify-between gap-5 [&_h2]:font-editorial [&_h2]:text-[25px]"><div><p className="eyebrow">A little guidance</p><h2 id="support-title">Your learning guide.</h2></div><button type="button" onClick={() => setOpen(false)} className="grid min-h-11 min-w-[68px] shrink-0 place-items-center rounded-full border border-[var(--line)] px-3 text-xs" aria-label="Close learning guide">Close ×</button></div>
      <div className="mb-[18px] grid grid-cols-2 gap-1 rounded-lg border border-[var(--line)] bg-white/4 p-1 [&_button]:rounded-md [&_button]:px-2 [&_button]:py-2.5 [&_button]:text-xs [&_button]:font-semibold [&_button]:text-[var(--muted)] [&_button[aria-pressed=true]]:bg-blue-bell-200 [&_button[aria-pressed=true]]:text-blue-bell-950" role="group" aria-label="Choose support option">
        <button type="button" aria-pressed={view === "chat"} onClick={() => setView("chat")}>Ask a question</button>
        <button type="button" aria-pressed={view === "contact"} onClick={() => setView("contact")}>Prepare an enquiry</button>
      </div>
      {view === "chat" ? <section aria-label="Learning questions">
        <p className="mb-[15px] text-[13px] leading-[1.65] text-[var(--muted)]">Instant guidance from our published information. Quotes, teacher availability and bookings are confirmed directly on WhatsApp.</p>
        <div ref={list} className="grid max-h-[min(36svh,360px)] gap-4 overflow-y-auto overscroll-contain px-0.5 pt-1 pb-3 [scrollbar-color:var(--color-blue-bell-700)_var(--color-blue-bell-950)] [scrollbar-width:thin]" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" tabIndex={0}>
          {messages.map(message => <div key={message.id} className={`animate-answer-arrival break-words rounded-[10px] p-4 text-[13px] leading-[1.6] motion-reduce:animate-none [&_p]:whitespace-pre-line [&_p]:leading-[1.85] ${message.role === "user" ? "max-w-[86%] justify-self-end bg-blue-bell-200 text-blue-bell-950" : "max-w-[96%] justify-self-start border border-[var(--line)] bg-white/4 text-blue-bell-200"}`}>
            <span className="mb-[9px] block text-[10px] tracking-[.12em] uppercase opacity-70">{message.role === "user" ? "You" : "Qurancademy guide"}</span>
            {message.content && <p>{message.content}</p>}
            {message.blocks?.map((block,index) => <div className="[&+div]:mt-[22px] [&+div]:border-t [&+div]:border-[var(--line)] [&+div]:pt-[18px] [&_h3]:mb-[9px] [&_h3]:font-editorial [&_h3]:text-[21px] [&_h3]:leading-tight [&_h3]:text-blue-bell-50" key={block.title + index}><h3>{block.title}</h3><p>{block.body}</p><SupportAnswerLink block={block} onNavigate={() => setOpen(false)} /></div>)}
          </div>)}
        </div>
        <div className="flex flex-wrap gap-[7px] py-4 [&_button]:inline-flex [&_button]:gap-[9px] [&_button]:rounded-full [&_button]:border [&_button]:border-[var(--line)] [&_button]:px-3 [&_button]:py-2 [&_button]:text-left [&_button]:text-[11px] [&_button]:leading-[1.6] [&_button]:transition-colors [&_button]:duration-200 [&_button]:hover:border-blue-bell-400 [&_button]:hover:bg-blue-bell-900" aria-label="Suggested questions">{suggestions.map(item => <button type="button" key={item} onClick={() => ask(item)}>{item}<span aria-hidden="true">↗</span></button>)}</div>
        <form onSubmit={submit} className="flex gap-2 border-t border-[var(--line)] pt-3 max-[480px]:flex-wrap [&_input]:min-h-12 [&_input]:min-w-0 [&_input]:flex-1 [&_input]:rounded-[7px] [&_input]:border [&_input]:border-[var(--line)] [&_input]:bg-blue-bell-900 [&_input]:px-3 [&_input]:py-[11px] [&_input]:text-[13px] [&_input]:text-blue-bell-50 max-[480px]:[&_input]:basis-full [&_button]:inline-flex [&_button]:min-h-12 [&_button]:items-center [&_button]:gap-2.5 [&_button]:rounded-[7px] [&_button]:bg-blue-bell-200 [&_button]:px-3.5 [&_button]:text-xs [&_button]:font-bold [&_button]:text-blue-bell-950 [&_button]:disabled:cursor-not-allowed [&_button]:disabled:opacity-50 max-[480px]:[&_button]:flex-1"><label htmlFor="support-question" className="sr-only">Your question</label><input ref={question} id="support-question" value={input} onChange={event => setInput(event.target.value)} maxLength={1000} placeholder="Ask about courses, fees or lesson times…" autoComplete="off" /><button type="submit" disabled={!input.trim()} aria-label="Ask your question">Ask <span aria-hidden="true">↗</span></button></form>
        <div className="mt-[15px] flex flex-wrap justify-between gap-[15px] text-[11px] text-blue-bell-300 [&_button]:py-2 [&_button]:underline [&_button]:underline-offset-4 [&_a]:py-2 [&_a]:underline [&_a]:underline-offset-4"><button type="button" onClick={reset}>Start a new conversation</button><a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">Talk to the team ↗</a></div>
      </section> : <section aria-label="Prepare a direct enquiry"><p className="mb-[15px] text-[13px] leading-[1.65] text-[var(--muted)]">Share the questions your family would like to discuss. Review your draft before sending it on WhatsApp.</p><a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="mb-6 inline-block text-[13px] text-blue-bell-100 underline">Open WhatsApp directly</a><EnquiryForm /><Link href="/privacy" onClick={() => setOpen(false)} className="mt-[18px] block text-xs text-[var(--muted)] underline">Privacy and your enquiry</Link></section>}
    </dialog>
  </>;
}

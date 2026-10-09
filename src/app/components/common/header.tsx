"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/app/content/site.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (query.matches) setOpen(false); };
    query.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      query.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07100e]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-xl font-bold" aria-label="Qurancademy home">
           <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300 text-sm font-black text-[#07100e] shadow-[0_0_30px_rgba(52,211,153,0.28)] transition-transform hover:rotate-6">
            <Image src="/icon.png" alt="" width={38} height={38} className="rounded-full"/>
            </span>
          <span>Qurancademy<span className="text-emerald-300">.</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm lg:flex">
          {siteConfig.navLinks.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={pathname === link.href ? "text-emerald-300" : "text-neutral-300 hover:text-white"}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden rounded-full bg-emerald-300 px-4 py-2.5 text-sm font-bold text-[#07100e] lg:inline-flex">Request a free trial</Link>
        <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={open} className="rounded-xl border border-white/20 px-3 py-2 text-sm lg:hidden">Menu</button>
      </div>
      <dialog ref={dialog} id="mobile-navigation" aria-labelledby="navigation-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} className="ml-auto mr-0 h-dvh max-h-none w-[min(88vw,24rem)] max-w-none border-l border-white/15 bg-[#07100e] p-6 text-white backdrop:bg-black/70">
        <div className="mb-8 flex items-center justify-between">
          <h2 id="navigation-title" className="font-bold">Navigation</h2>
          <button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-white/20 px-3 py-2" aria-label="Close navigation menu">Close</button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {siteConfig.navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className="border-b border-white/10 py-4">{link.label}</Link>)}
          <Link href="/safety" onClick={() => setOpen(false)} className="py-4">Parent guidance</Link>
        </nav>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bw-button-primary mt-8 w-full">Ask on WhatsApp</a>
      </dialog>
      <noscript><nav aria-label="Navigation without JavaScript" className="flex flex-wrap justify-center gap-4 px-4 pb-4 lg:hidden">{siteConfig.navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav></noscript>
    </header>
  );
}

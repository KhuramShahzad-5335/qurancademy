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
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  useEffect(() => {
    if (open) dialog.current?.showModal(); else dialog.current?.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (query.matches) setOpen(false); };
    query.addEventListener("change", closeOnDesktop);
    return () => { document.body.style.overflow = previousOverflow; query.removeEventListener("change", closeOnDesktop); };
  }, [open]);
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" aria-label="Qurancademy home"><span className="brand-mark"><Image src="/icon.png" alt="" width={40} height={40} className="" /></span><span>Qurancademy<small>Learning, with intention.</small></span></Link>
    <nav aria-label="Main navigation" className="desktop-nav">{siteConfig.navLinks.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
    <Link href="/contact" className="story-button header-cta">Start your journey <span aria-hidden="true">↗</span></Link>
    <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={open} className="menu-trigger">Menu <span aria-hidden="true">☰</span></button>
  </div>
    <dialog ref={dialog} id="mobile-navigation" aria-labelledby="navigation-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} className="site-dialog nav-dialog">
      <div className="dialog-header"><h2 id="navigation-title">Explore Qurancademy</h2><button type="button" onClick={() => setOpen(false)} className="dialog-close" aria-label="Close navigation menu">Close ×</button></div>
      <nav aria-label="Mobile navigation" className="mobile-nav">{siteConfig.navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={active(link.href) ? "page" : undefined}>{link.label}<span aria-hidden="true">↗</span></Link>)}<Link href="/safety" onClick={() => setOpen(false)}>Parent guidance <span aria-hidden="true">↗</span></Link></nav>
      <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="story-button">Ask on WhatsApp <span aria-hidden="true">↗</span></a>
    </dialog>
    <noscript><nav aria-label="Navigation without JavaScript" className="nojs-nav">{siteConfig.navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav></noscript>
  </header>;
}

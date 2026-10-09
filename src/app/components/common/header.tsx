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
  const active = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      query.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-blue-bell-950/92 text-blue-bell-50 backdrop-blur-[16px]">
      <div className="mx-auto flex h-[80px] w-[calc(100%_-_36px)] max-w-[1300px] items-center justify-between gap-3 min-[481px]:gap-[26px] min-[761px]:w-[calc(100%_-_48px)] min-[901px]:h-[84px]">
        <Link
          href="/"
          className="flex items-center gap-2 font-editorial text-xl tracking-[-.04em] min-[481px]:gap-2.5 min-[481px]:text-[22px] min-[761px]:text-2xl [&_small]:mt-[5px] [&_small]:block [&_small]:font-sans [&_small]:text-[10px] [&_small]:leading-none [&_small]:tracking-[.2em] [&_small]:text-blue-bell-200 [&_small]:uppercase"
          aria-label="Qurancademy home"
        >
          <span className=" p-1.5 border rounded-full border-white bg-blue-bell-50">
            <Image src="/icon.png" alt="" width={40} height={40} className="p-0" />
          </span>
          <span>
            Qurancademy<small>Learning, with intention.</small>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-[17px] text-[13px] min-[901px]:flex min-[1101px]:gap-[25px] [&_a]:relative [&_a]:py-3 [&_a]:text-blue-bell-300 [&_a]:after:absolute [&_a]:after:inset-x-0 [&_a]:after:bottom-[5px] [&_a]:after:h-px [&_a]:after:origin-left [&_a]:after:scale-x-0 [&_a]:after:bg-blue-bell-200 [&_a]:after:transition-transform [&_a]:after:duration-250 [&_a:hover]:after:scale-x-100 [&_a[aria-current=page]]:after:scale-x-100 [&_a[aria-current=page]]:text-blue-bell-50"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden min-h-[42px] items-center justify-center gap-6 rounded-full border border-transparent bg-blue-bell-200 px-[18px] py-[11px] text-[12px] font-semibold text-blue-bell-950 transition-all hover:bg-blue-bell-50 min-[1101px]:inline-flex"
        >
          Start your journey <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={trigger}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          className="inline-flex min-h-11 items-center justify-center rounded-full p-2.5 text-xl min-[901px]:hidden"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-labelledby="navigation-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="border border-[var(--line)] bg-blue-bell-950 p-7 text-blue-bell-50 backdrop:bg-blue-bell-950/75 backdrop:backdrop-blur-[6px] mt-0 mr-0 mb-0 ml-auto h-dvh max-h-none w-[min(90vw,420px)] max-w-none"
      >
        <div className="mb-[30px] flex items-center justify-between gap-5 [&_h2]:font-editorial [&_h2]:text-[25px]">
          <h2 id="navigation-title" className="font-editorial text-[18px]">
            Explore Qurancademy
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 items-center justify-center rounded-full p-2.5 text-[30px]"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="mb-[35px] flex flex-col [&_a]:flex [&_a]:justify-between [&_a]:gap-[15px] [&_a]:border-b [&_a]:border-[var(--line)] [&_a]:py-4 [&_a]:font-editorial [&_a]:text-[30px] [&_a[aria-current=page]]:text-blue-bell-200 [&_span]:text-lg"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active(link.href) ? "page" : undefined}
              className="!text-[14px]"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link
            href="/safety"
            onClick={() => setOpen(false)}
            className="!text-[14px]"
          >
            Parent guidance <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-6 rounded-full border px-6 py-3.5 text-center text-xs font-semibold leading-[1.4] transition-all duration-250 ease-story hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.15)] motion-reduce:transform-none min-h-[50px] border-transparent bg-[var(--action-bg)] text-[var(--action-ink)] hover:bg-[var(--action-hover)]"
        >
          Ask on WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </dialog>
      <noscript>
        <nav
          aria-label="Navigation without JavaScript"
          className="flex flex-wrap justify-center gap-[18px] px-[18px] py-3 text-[13px] min-[901px]:hidden"
        >
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </noscript>
    </header>
  );
}

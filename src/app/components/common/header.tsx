'use client';

import { useState } from 'react';
import { siteConfig } from '@/app/content/site.config';
import Link from 'next/link';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/10 bg-black text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-xl font-bold tracking-tight text-white"
          onClick={closeDrawer}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300 text-sm font-black text-[#07100e] shadow-[0_0_30px_rgba(52,211,153,0.28)] transition-transform group-hover:rotate-6">QA</span>
          <span>Qurancademy<span className="text-emerald-300">.</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300 px-5 py-2.5 text-sm font-bold text-[#07100e] shadow-lg shadow-emerald-950/40 transition-all hover:bg-emerald-200"
          >
            <WhatsAppIcon style={{ fontSize: 18 }} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDrawer}
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 p-2.5 text-neutral-200 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {isDrawerOpen ? (
              <CloseIcon style={{ fontSize: 24 }} />
            ) : (
              <MenuIcon style={{ fontSize: 24 }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(88vw,22rem)] flex-col justify-between border-l border-emerald-200/10 bg-[#07100e] p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Navigation Links List */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            Navigation
          </span>
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="border-b border-white/10 py-3 text-base font-medium text-neutral-300 transition-colors hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-neutral-900 space-y-4">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
          >
            <WhatsAppIcon style={{ fontSize: 20 }} />
            <span>Chat on WhatsApp</span>
          </a>

          <p className="text-center text-xs text-neutral-500 font-mono">
            {siteConfig.tagline || 'Online Quran Academy'}
          </p>
        </div>
      </div>
    </header>
  );
}
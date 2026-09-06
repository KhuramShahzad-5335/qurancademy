import { siteConfig } from '@/app/content/site.config';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="bg-white text-black px-2 py-0.5 rounded font-mono">QA</span>
          Qurancademy
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bw-button-primary text-sm">
            Whatsapp Us
          </a>
        </div>
      </div>
    </header>
  );
}
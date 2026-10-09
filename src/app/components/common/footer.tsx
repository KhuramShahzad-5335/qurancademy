import { siteConfig } from "@/app/content/site.config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer relative z-[1] border-t border-white/10 text-sm text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div><Link href="/" className="text-xl font-bold text-white">{siteConfig.name}</Link><p className="mt-3 text-sm leading-6">{siteConfig.tagline}.</p></div>
          <nav aria-label="Footer navigation"><h2 className="mb-3 font-bold text-white">Explore</h2><ul className="space-y-2">{siteConfig.navLinks.map(link => <li key={link.href}><Link href={link.href} className="hover:text-emerald-300">{link.label}</Link></li>)}</ul></nav>
          <nav aria-label="Quran courses"><h2 className="mb-3 font-bold text-white">Courses</h2><ul className="space-y-2">{siteConfig.courses.map(course => <li key={course.slug}><Link href={`/courses/${course.slug}`} className="hover:text-emerald-300">{course.title}</Link></li>)}</ul></nav>
          <div><h2 className="mb-3 font-bold text-white">Contact</h2><a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline">{siteConfig.whatsappNumber}</a>{siteConfig.email && <p className="mt-3"><a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a></p>}<p className="mt-3">{siteConfig.address}</p><p className="mt-2 text-xs text-neutral-400">Confirm lesson times, teacher availability and fees before booking.</p></div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
          <nav aria-label="Policies" className="flex flex-wrap gap-4"><Link href="/safety">Parent guidance</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
        </div>
      </div>
    </footer>
  );
}

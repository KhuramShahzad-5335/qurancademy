import { siteConfig } from "@/app/content/site.config";
import Link from "next/link";
const headingClass = "mb-[25px] text-[11px] font-medium uppercase tracking-[.16em] text-blue-bell-200";
export default function Footer() {
  return <footer className="bg-blue-bell-950 pt-[70px] text-blue-bell-300 [&_a]:hover:text-blue-bell-50">
    <div className="relative z-[1] mx-auto w-[calc(100%_-_36px)] min-[761px]:w-[min(1180px,calc(100%_-_clamp(2rem,8vw,7rem)))]">
      <div className="grid grid-cols-2 gap-x-5 gap-y-[35px] pb-[60px] min-[481px]:grid-cols-[1.4fr_1fr] min-[481px]:gap-10 min-[901px]:grid-cols-[1.4fr_1fr_1fr_1.1fr] min-[901px]:gap-[50px]">
        <div className="max-[480px]:col-span-full"><Link href="/" className="font-editorial text-[32px] leading-[1.12] text-blue-bell-50">Learning,<br /><em className="text-blue-bell-300">with intention.</em></Link><p className="mt-[22px] max-w-[230px] text-xs leading-[1.9]">{siteConfig.tagline}. A thoughtful beginning, from your home.</p></div>
        <nav aria-label="Footer navigation"><h2 className={headingClass}>Explore</h2><ul className="grid gap-3 text-xs leading-[1.7]">{siteConfig.navLinks.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></nav>
        <nav aria-label="Quran courses"><h2 className={headingClass}>Learning paths</h2><ul className="grid gap-3 text-xs leading-[1.7]">{siteConfig.courses.map(course => <li key={course.slug}><Link href={`/courses/${course.slug}`}>{course.title}</Link></li>)}</ul></nav>
        <div className="max-[480px]:col-span-full"><h2 className={headingClass}>Let’s talk</h2><a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[13px] text-blue-bell-50">{siteConfig.whatsappNumber} ↗</a>{siteConfig.email && <p className="mt-3.5 text-xs leading-[1.9]"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>}<p className="mt-3.5 text-xs leading-[1.9]">{siteConfig.address}</p><small className="mt-3.5 block text-[11px] leading-[1.8]">Confirm your teacher, lesson times and fees before booking.</small></div>
      </div>
      <div className="border-b border-[var(--line)] pb-8 text-center font-editorial text-[clamp(44px,11vw,150px)] leading-none tracking-[-.07em] text-blue-bell-200/10 select-none" aria-hidden="true">Qurancademy.</div>
      <div className="flex flex-col justify-between gap-[15px] pt-[25px] pb-20 text-xs text-blue-bell-400 min-[481px]:flex-row min-[481px]:gap-5"><p>© {new Date().getFullYear()} Qurancademy.</p><nav aria-label="Policies" className="flex flex-wrap gap-5"><Link href="/safety">Parent guidance</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></div>
    </div>
  </footer>;
}

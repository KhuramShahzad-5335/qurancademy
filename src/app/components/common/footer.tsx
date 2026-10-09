import { siteConfig } from "@/app/content/site.config";
import Link from "next/link";
export default function Footer() {
  return <footer className="site-footer"><div className="story-container">
    <div className="footer-top"><div className="footer-brand"><Link href="/">Learning,<br /><em>with intention.</em></Link><p>{siteConfig.tagline}. A thoughtful beginning, from your home.</p></div>
      <nav aria-label="Footer navigation"><h2>Explore</h2><ul>{siteConfig.navLinks.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></nav>
      <nav aria-label="Quran courses"><h2>Learning paths</h2><ul>{siteConfig.courses.map(course => <li key={course.slug}><Link href={`/courses/${course.slug}`}>{course.title}</Link></li>)}</ul></nav>
      <div className="footer-contact"><h2>Let’s talk</h2><a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappNumber} ↗</a>{siteConfig.email && <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>}<p>{siteConfig.address}</p><small>Confirm your teacher, lesson times and fees before booking.</small></div>
    </div><div className="footer-wordmark" aria-hidden="true">Qurancademy.</div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Qurancademy.</p><nav aria-label="Policies"><Link href="/safety">Parent guidance</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></div>
  </div></footer>;
}

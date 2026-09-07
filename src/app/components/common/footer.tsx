import { siteConfig } from '@/app/content/site.config';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-[1] bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & About */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mb-3">
              <span className="bg-white text-black px-2 py-0.5 rounded font-mono text-sm">QA</span>
              {siteConfig.name}
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {siteConfig.tagline}. Dedicated to providing 1-on-1 personalized Quran learning for students worldwide.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Offered */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-mono">
              Our Courses
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.courses.map((course) => (
                <li key={course.code}>
                  <a 
                    href={`${siteConfig.whatsappLink}&text=Assalamu%20Alaikum%21%20I%20want%20to%20ask%20about%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <span className="text-neutral-500">WhatsApp: </span>
                <a 
                  href={siteConfig.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-200 underline underline-offset-2 hover:text-white"
                >
                  {siteConfig.whatsappNumber}
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Email: </span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Location: </span>
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
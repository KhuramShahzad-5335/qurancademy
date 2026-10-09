import Link from "next/link";
import PageHero from "../components/common/pageHero";
import EnquiryForm from "../components/contact/enquiryForm";
import { siteConfig } from "../content/site.config";
import { pageMetadata } from "@/lib/seo";
import { ActionLink, Feature, StorySection } from "../components/story/primitives";
export const metadata = pageMetadata("Contact Us and Request a Free Trial", "Ask about Quran courses, teacher availability, fees and a free trial. Prepare an enquiry and send it directly through WhatsApp.", "/contact");
export default function ContactPage() {
  return <main className="site-main"><PageHero image="family" eyebrow="Your next chapter starts here" title={<>Let’s find<br /><em>your starting point.</em></>} description="Tell us a little about your learner and what you hope to work towards. Ask about a course, a free trial or a timetable that fits your family." asideValue="A conversation first." asideLabel="The details, agreed together."><div className="hero-actions"><ActionLink href="#enquiry">Prepare an enquiry</ActionLink></div></PageHero>
    <StorySection theme="paper" id="enquiry"><div className="contact-layout"><div><p className="eyebrow">Hello, Qurancademy</p><h2 className="editorial-title">A little about you.<br /><em>A plan we can discuss.</em></h2><div className="story-prose"><p>Prefer to chat directly? Use our existing WhatsApp contact. We are based in {siteConfig.address}, with lessons arranged online.</p></div><ActionLink href={siteConfig.whatsappLink}>Open WhatsApp</ActionLink><p className="contact-number">{siteConfig.whatsappNumber}</p>{siteConfig.email && <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>}
      <div className="contact-note"><Feature icon="clock" title="Plan around your day">Include your city, preferred days and local times. Availability needs to be checked, including daylight saving changes.</Feature><Feature icon="message" title="Agree the details">Ask about your teacher, teaching language, trial, lesson length and full fee before booking.</Feature></div><div className="story-prose"><Link href="/pricing">Fee checklist ↗</Link><br /><Link href="/safety">Parent guidance ↗</Link></div>
    </div><section className="enquiry-shell" aria-labelledby="enquiry-heading"><p className="eyebrow">01 / Prepare · 02 / Review · 03 / Send</p><h2 id="enquiry-heading">Start the conversation.</h2><EnquiryForm /><p className="form-hint">Read our <Link href="/privacy">privacy policy</Link> before sharing information.</p></section></div></StorySection>
  </main>;
}

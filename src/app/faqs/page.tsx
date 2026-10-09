import FAQAccordion from "../components/faq/faqAccordion";
import { faqsData } from "../content/faqs";
import PageHero from "../components/common/pageHero";
import { pageMetadata } from "@/lib/seo";
import { ActionLink, CallToAction, StorySection } from "../components/story/primitives";
export const metadata = pageMetadata("Online Quran Classes: Frequently Asked Questions", "Answers about choosing a course, requesting a free trial, teacher preferences, lesson times, fees and sending an enquiry.", "/faqs");
export default function FAQsPage() {
  const categories = [...new Set(faqsData.map(item => item.category))];
  return <main className="site-main"><PageHero eyebrow="A little clarity, before you begin" title={<>Good journeys<br /><em>begin with questions.</em></>} description="Choosing a course, meeting a teacher or planning around school? Here are the details to discuss before taking the next step." asideValue="Ask freely." asideLabel="Your family’s questions belong here." />
    <StorySection theme="paper"><div className="faq-layout"><nav className="reading-aside" aria-label="Question categories"><p className="eyebrow">Find an answer</p>{categories.map((category,index) => <a key={category} href={`#faq-group-${index}`}>{category}</a>)}<ActionLink href="/contact" secondary>Ask your own question</ActionLink></nav><div>{categories.map((category,index) => <section className="faq-group" key={category} id={`faq-group-${index}`}><p className="eyebrow">0{index + 1}</p><h2>{category}</h2><FAQAccordion faqs={faqsData.filter(item => item.category === category)} /></section>)}</div></div></StorySection>
    <CallToAction title="Your question is a good place to start." description="Share the details that matter to your family. Ask about a starting level, teacher preference, timetable or fee before arranging a trial." label="Prepare your question" />
  </main>;
}

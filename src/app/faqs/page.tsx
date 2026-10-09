import FAQAccordion from "../components/faq/faqAccordion";
import { faqsData } from "../content/faqs";
import PageHero from "../components/common/pageHero";
import { pageMetadata } from "@/lib/seo";
import { ActionLink, CallToAction, StorySection } from "../components/story/primitives";
export const metadata = pageMetadata("Online Quran Classes: Frequently Asked Questions", "Answers about choosing a course, requesting a free trial, teacher preferences, lesson times, fees and sending an enquiry.", "/faqs");
export default function FAQsPage() {
  const categories = [...new Set(faqsData.map(item => item.category))];
  return <main className="min-h-[60vh] overflow-clip"><PageHero image="tajweed" eyebrow="A little clarity, before you begin" title={<>Good journeys<br /><em>begin with questions.</em></>} description="Choosing a course, meeting a teacher or planning around school? Here are the details to discuss before taking the next step." asideValue="Ask freely." asideLabel="Your family’s questions belong here." />
    <StorySection theme="paper"><div className="grid items-start gap-[35px] min-[761px]:grid-cols-[210px_minmax(0,1fr)] min-[761px]:gap-[38px] min-[1101px]:grid-cols-[240px_minmax(0,1fr)] min-[1101px]:gap-[70px]"><nav className="grid gap-[17px] border-t border-[var(--line)] pt-5 text-xs leading-[1.8] text-[var(--muted)] min-[761px]:sticky min-[761px]:top-[110px] [&>a:not([data-action])]:border-b [&>a:not([data-action])]:border-[var(--line)] [&>a:not([data-action])]:pb-3 [&>a]:hover:text-[var(--ink)] [&>[data-action]]:mt-4" aria-label="Question categories"><p className="eyebrow">Find an answer</p>{categories.map((category,index) => <a key={category} href={`#faq-group-${index}`}>{category}</a>)}<ActionLink href="/contact" secondary>Ask your own question</ActionLink></nav><div>{categories.map((category,index) => <section className="scroll-mt-[110px] [&+section]:mt-[55px] [&>h2]:mb-[22px] [&>h2]:font-editorial [&>h2]:text-[30px]" key={category} id={`faq-group-${index}`}><p className="eyebrow">0{index + 1}</p><h2>{category}</h2><FAQAccordion faqs={faqsData.filter(item => item.category === category)} /></section>)}</div></div></StorySection>
    <CallToAction title="Your question is a good place to start." description="Share the details that matter to your family. Ask about a starting level, teacher preference, timetable or fee before arranging a trial." label="Prepare your question" />
  </main>;
}

import Link from "next/link";
import { learnerPaths, lessonStages, landingFaqs } from "@/app/content/landing";
import { siteConfig } from "@/app/content/site.config";
import { whatsappUrl } from "@/lib/contact";
import FAQAccordion from "../faq/faqAccordion";
import LineIcon from "../common/lineIcon";
import ReviewGallery from "./reviewGallery";
import { ActionLink, SectionHeading, StorySection } from "./primitives";

export function LandingExploreNav() {
  const links = [
    { href: "#courses", label: "Courses" },
    { href: "#your-starting-point", label: "Your starting point" },
    { href: "#inside-a-lesson", label: "Inside a lesson" },
    { href: "#family-stories", label: "Family stories" },
    { href: "#home-faqs", label: "FAQs" },
  ];
  return (
    <nav aria-label="Explore this page" className="border-b border-blue-bell-200/15 bg-blue-bell-950 px-[18px] py-3">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span className="mr-1 text-[10px] tracking-[.14em] text-blue-bell-400 uppercase">Explore your journey</span>
        {links.map(link => <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center gap-2 text-[11px] text-blue-bell-200 transition-colors hover:text-blue-bell-50">{link.label}<span aria-hidden="true">↓</span></a>)}
      </div>
    </nav>
  );
}

export function LearnerPathsSection() {
  return (
    <StorySection id="your-starting-point" theme="paper">
      <SectionHeading eyebrow="A place for your story" title={<>Different beginnings.<br /><em>The same room to grow.</em></>} description="Age is only part of the picture. Start with what feels familiar, what feels difficult and what you would like to learn next." />
      <div className="grid gap-5 min-[761px]:grid-cols-3">
        {learnerPaths.map(path => (
          <article key={path.label} className="group flex flex-col rounded-2xl border border-[var(--line)] bg-blue-bell-100/35 p-6 transition-colors duration-300 hover:bg-blue-bell-100 min-[1101px]:p-8" data-reveal>
            <span className="mb-8 grid size-12 place-items-center rounded-full border border-blue-bell-600/20 text-blue-bell-600"><LineIcon kind={path.icon} /></span>
            <p className="eyebrow text-[9px]">{path.label}</p>
            <h3 className="mt-3 font-editorial text-[30px] font-normal leading-tight tracking-[-.035em]">{path.title}</h3>
            <p className="mt-5 flex-1 text-sm leading-[1.9] text-[var(--muted)]">{path.description}</p>
            <p className="mt-6 border-t border-[var(--line)] pt-5 text-[11px] leading-[1.8] text-blue-bell-700">{path.note}</p>
            <Link href={path.href} className="mt-5 inline-flex min-h-11 items-center justify-between gap-3 text-xs font-semibold">{path.linkLabel}<span className="text-xl transition-transform duration-250 group-hover:translate-x-1 motion-reduce:translate-x-0" aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[var(--muted)]"><p>Already thinking about memorization?</p><Link href="/courses/quran-memorization" className="inline-flex min-h-11 items-center gap-3 font-semibold text-[var(--ink)] underline underline-offset-4">Explore a revision-led Hifz plan <span aria-hidden="true">↗</span></Link></div>
    </StorySection>
  );
}

export function LessonExperienceSection() {
  return (
    <StorySection id="inside-a-lesson" motif="star">
      <div className="grid items-center gap-10 min-[901px]:grid-cols-[.9fr_1.1fr] min-[1101px]:gap-20">
        <div data-reveal>
          <p className="eyebrow">Inside a reading lesson</p>
          <h2 className="editorial-title">Listen. Try. Ask.<br /><em>Find your own rhythm.</em></h2>
          <div className="story-prose"><p>A lesson gives you room to hear a teacher, try something yourself and talk about what needs more practice. The exact flow depends on your course and starting level.</p><p>Use your trial to see how the proposed teacher explains, responds to questions and helps you decide what to practise at home.</p></div>
          <ActionLink href="/contact" secondary>Experience a free trial</ActionLink>
          <p className="mt-5 text-[11px] leading-[1.8] text-blue-bell-300">Discuss the platform, lesson length and teaching language before joining.</p>
        </div>
        <div className="relative rounded-2xl border border-blue-bell-200/20 bg-[linear-gradient(145deg,var(--color-blue-bell-800),var(--color-blue-bell-950))] p-5 shadow-[0_24px_60px_rgba(0,0,0,.15)] min-[481px]:p-8" data-reveal>
          <div className="mb-7 flex items-center justify-between gap-4 border-b border-blue-bell-200/15 pb-5"><p className="font-editorial text-[25px] tracking-[-.025em]">A little learning, together.</p><LineIcon kind="book" className="text-blue-bell-300" /></div>
          <ol className="grid gap-4">
            {lessonStages.map((stage, index) => (
              <li key={stage.title} className="relative flex gap-4 rounded-xl border border-blue-bell-200/12 bg-blue-bell-50/4 p-4 min-[481px]:p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-blue-bell-200/25 font-mono text-[11px] text-blue-bell-200">0{index + 1}</span>
                <div className="min-w-0"><h3 className="font-editorial text-[23px] leading-tight">{stage.title}</h3><p className="mt-2 text-xs leading-[1.9] text-blue-bell-200/85">{stage.description}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 text-[10px] leading-[1.8] text-blue-bell-300"><span className="size-1.5 shrink-0 rounded-full bg-blue-bell-300" />An example flow to discuss with your teacher.</p>
        </div>
      </div>
    </StorySection>
  );
}

export function CommunityReviewsSection() {
  const feedbackLink = whatsappUrl("Assalamu Alaikum! I would like to share feedback about my Qurancademy trial or lessons. Please tell me how to share my experience and agree whether it can be published.");
  return (
    <StorySection id="family-stories" theme="soft" motif="lantern">
      <SectionHeading eyebrow="Voices from the journey" title={<>Your experience.<br /><em>Part of our story.</em></>} description={siteConfig.reviews.length ? "Experiences shared by learners and parents, published with permission. Every family's starting point and progress are their own." : "The questions, little breakthroughs and everyday challenges all matter. There is room here for your honest experience."} />
      <ReviewGallery />
      <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-blue-bell-800/15 bg-blue-bell-50/35 p-5 min-[761px]:flex-row min-[761px]:items-center min-[761px]:p-6"><div><h3 className="font-editorial text-[25px] tracking-[-.025em]">Have a story to share?</h3><p className="mt-2 max-w-[500px] text-xs leading-[1.9] text-[var(--muted)]">Tell us what helped and what could be better. We will ask your permission before publishing your words.</p></div><ActionLink href={feedbackLink} className="shrink-0">Share your experience</ActionLink></div>
    </StorySection>
  );
}

export function LandingFAQSection() {
  return (
    <StorySection id="home-faqs">
      <div className="grid items-start gap-10 min-[901px]:grid-cols-[.8fr_1.2fr] min-[1101px]:gap-20">
        <div data-reveal>
          <p className="eyebrow">A little clarity</p>
          <h2 className="editorial-title">Good questions.<br /><em>Clearer beginnings.</em></h2>
          <p className="max-w-[370px] text-sm leading-[1.9] text-[var(--muted)]">Wondering about your level, lesson times or the first trial? Start here, then ask us about the details that matter to your family.</p>
          <div className="mt-7"><ActionLink href="/faqs" secondary>Explore all FAQs</ActionLink></div>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-3 text-xs text-blue-bell-200 underline underline-offset-4">Ask a different question <span aria-hidden="true">↗</span></a>
        </div>
        <div data-reveal><FAQAccordion faqs={landingFaqs} /></div>
      </div>
    </StorySection>
  );
}

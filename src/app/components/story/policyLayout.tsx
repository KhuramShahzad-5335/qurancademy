import type { ReactNode } from "react";
import PageHero from "../common/pageHero";
import { ActionLink, StorySection } from "./primitives";
export default function PolicyLayout({ eyebrow, title, description, sections, children }: { eyebrow: string; title: string; description: string; sections: string[]; children: ReactNode }) {
  return <main className="min-h-[60vh] overflow-clip"><PageHero eyebrow={eyebrow} title={title} description={description} asideValue="Clear expectations." asideLabel="A little clarity before your next step." />
    <StorySection theme="paper"><div className="grid items-start gap-[35px] min-[761px]:grid-cols-[210px_minmax(0,1fr)] min-[761px]:gap-[38px] min-[1101px]:grid-cols-[250px_minmax(0,1fr)] min-[1101px]:gap-[70px]"><nav className="grid gap-[17px] border-t border-[var(--line)] pt-5 text-xs leading-[1.8] text-[var(--muted)] min-[761px]:sticky min-[761px]:top-[110px] [&>a:not([data-action])]:border-b [&>a:not([data-action])]:border-[var(--line)] [&>a:not([data-action])]:pb-3 [&>a]:hover:text-[var(--ink)] [&>[data-action]]:mt-4" aria-label="On this page"><p className="eyebrow">On this page</p>{sections.map((heading,index) => <a href={`#policy-section-${index+1}`} key={heading}>{heading}</a>)}<ActionLink href="/contact" secondary>Ask a question</ActionLink></nav><div className="reading-body">{children}</div></div></StorySection>
  </main>;
}

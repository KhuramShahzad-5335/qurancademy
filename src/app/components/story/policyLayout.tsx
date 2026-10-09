import type { ReactNode } from "react";
import PageHero from "../common/pageHero";
import { ActionLink, StorySection } from "./primitives";
export default function PolicyLayout({ eyebrow, title, description, sections, children }: { eyebrow: string; title: string; description: string; sections: string[]; children: ReactNode }) {
  return <main className="site-main"><PageHero eyebrow={eyebrow} title={title} description={description} asideValue="Clear expectations." asideLabel="A little clarity before your next step." />
    <StorySection theme="paper"><div className="reading-layout"><nav className="reading-aside" aria-label="On this page"><p className="eyebrow">On this page</p>{sections.map((heading,index) => <a href={`#policy-section-${index+1}`} key={heading}>{heading}</a>)}<ActionLink href="/contact" secondary>Ask a question</ActionLink></nav><div className="reading-body">{children}</div></div></StorySection>
  </main>;
}

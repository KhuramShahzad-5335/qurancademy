import Link from "next/link";
import Image from "next/image";
import { blogsData, readingTime } from "../content/blogs";
import PageHero from "../components/common/pageHero";
import { pageMetadata } from "@/lib/seo";
import ArticleCard from "../components/story/articleCard";
import { ActionLink, CallToAction, SectionHeading, StorySection } from "../components/story/primitives";
export const metadata = pageMetadata("Parent Guides for Online Quran Learning", "Practical guides for choosing a teacher, preparing for a first lesson and building a manageable Quran learning routine at home.", "/blog");
export default function BlogPage() {
  const featured = blogsData.find(post => post.slug === "preparing-for-first-online-quran-class") || blogsData[0];
  return <main className="min-h-[60vh] overflow-clip"><PageHero image="hifz" eyebrow="Notes for the learning journey" title={<>Small ideas.<br /><em>A steadier routine.</em></>} description="Practical questions, thoughtful preparation and everyday habits. Find a guide for the part of your family’s learning journey you are navigating today." asideValue="A little reading helps." asideLabel="Preparation, one useful question at a time." />
    <StorySection theme="paper"><div className="grid items-center gap-[55px] min-[761px]:grid-cols-[1.15fr_1fr] [&_h2]:my-5 [&_h2]:font-editorial [&_h2]:text-[clamp(34px,4vw,48px)] [&_h2]:font-normal [&_h2]:leading-[1.14] [&_h2]:tracking-[-.035em] [&_img]:w-full [&_img]:rounded-[10px]" data-reveal><Link href={`/blog/${featured.slug}`}><Image src={featured.coverImage} alt={featured.coverAlt} width={1200} height={630} sizes="(max-width:760px) 100vw, 50vw" /></Link><div><p className="eyebrow">A good place to begin · {readingTime(featured)}</p><h2>{featured.title}</h2><p className="max-w-[430px] text-[15px] leading-[1.9] text-[var(--muted)]">{featured.excerpt}</p><ActionLink href={`/blog/${featured.slug}`} secondary>Read the guide</ActionLink></div></div></StorySection>
    <StorySection><SectionHeading eyebrow="The parent’s notebook" title={<>Useful guidance.<br /><em>At every stage.</em></>} description="Explore the foundations, plan practice, ask about a teacher or prepare for lesson times across time zones." /><div className="grid gap-7 min-[481px]:grid-cols-2 min-[1101px]:grid-cols-3">{blogsData.filter(post => post.slug !== featured.slug).map(post => <ArticleCard key={post.slug} post={post} />)}</div></StorySection>
    <CallToAction title="Turn a question into a conversation." description="Our guides help you prepare. For a learner’s level, teacher match or timetable, share your questions directly before agreeing a plan." />
  </main>;
}

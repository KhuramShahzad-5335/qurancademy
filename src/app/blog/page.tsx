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
  return <main className="site-main"><PageHero image="family" eyebrow="Notes for the learning journey" title={<>Small ideas.<br /><em>A steadier routine.</em></>} description="Practical questions, thoughtful preparation and everyday habits. Find a guide for the part of your family’s learning journey you are navigating today." asideValue="A little reading helps." asideLabel="Preparation, one useful question at a time." />
    <StorySection theme="paper"><div className="featured-journal" data-reveal><Link href={`/blog/${featured.slug}`}><Image src={featured.coverImage} alt={featured.coverAlt} width={1200} height={630} sizes="(max-width:760px) 100vw, 50vw" /></Link><div><p className="eyebrow">A good place to begin · {readingTime(featured)}</p><h2>{featured.title}</h2><p className="section-intro">{featured.excerpt}</p><ActionLink href={`/blog/${featured.slug}`} secondary>Read the guide</ActionLink></div></div></StorySection>
    <StorySection><SectionHeading eyebrow="The parent’s notebook" title={<>Useful guidance.<br /><em>At every stage.</em></>} description="Explore the foundations, plan practice, ask about a teacher or prepare for lesson times across time zones." /><div className="journal-grid">{blogsData.filter(post => post.slug !== featured.slug).map(post => <ArticleCard key={post.slug} post={post} />)}</div></StorySection>
    <CallToAction title="Turn a question into a conversation." description="Our guides help you prepare. For a learner’s level, teacher match or timetable, share your questions directly before agreeing a plan." />
  </main>;
}

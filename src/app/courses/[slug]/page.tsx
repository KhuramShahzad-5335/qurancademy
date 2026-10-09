import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/app/content/site.config";
import { blogsData } from "@/app/content/blogs";
import { courseStories } from "@/app/content/courseStories";
import PageHero from "@/app/components/common/pageHero";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";
import { getCourseChapter } from "@/app/components/story/design";
import { ActionLink, CallToAction, Feature, SectionHeading, StoryImage, StorySection } from "@/app/components/story/primitives";
import ArticleCard from "@/app/components/story/articleCard";
export const dynamicParams = false;
export function generateStaticParams() { return siteConfig.courses.map(course => ({ slug: course.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = siteConfig.courses.find(item => item.slug === slug);
  return course ? pageMetadata(course.title, course.description, `/courses/${slug}`) : { title: "Course not found", robots: { index: false } };
}
export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = siteConfig.courses.find(item => item.slug === slug);
  if (!course) notFound();
  const chapter = getCourseChapter(slug);
  const guides = blogsData.filter(post => post.courseSlug === slug).slice(0,3);
  const enquiry = whatsappUrl(`Assalamu Alaikum! I would like to ask about ${course.title}. Please confirm teacher availability, teaching language, trial details and fees.`);
  return <main className="site-main">
    <div className="story-container breadcrumb"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/courses">Courses</Link><span>/</span><span aria-current="page">{course.title}</span></nav></div>
    <PageHero eyebrow={chapter.chapter} title={course.title} description={course.description} image={slug === "noorani-qaida" ? "family" : "study"} asideValue={chapter.note} asideLabel="Your starting level, discussed together."><div className="hero-actions"><ActionLink href={enquiry}>Ask about this course</ActionLink><ActionLink href="#course-approach" secondary>Explore the approach</ActionLink></div></PageHero>
    <StorySection theme="paper" id="course-approach"><div className="story-split"><div data-reveal><p className="eyebrow">Begin where you are</p><h2 className="editorial-title">A starting point.<br /><em>A direction to explore.</em></h2><div className="story-prose"><p>{course.audience}</p><p>{course.approach}</p><p>Use the first conversation to share previous learning and ask how the teacher would assess your starting level. A plan should leave room to revisit something that needs more practice.</p></div></div><StoryImage kind={slug === "noorani-qaida" ? "family" : "study"} caption="Learning goals should fit the learner, not a fixed deadline." /></div></StorySection>
    <StorySection><SectionHeading eyebrow="Inside this chapter" title={<>What you can<br /><em>discuss and work towards.</em></>} description="These are course topics to explore with your proposed teacher. The sequence, resources and pace should be agreed for your learner." /><div className="story-grid--three">{(courseStories[slug] ?? course.topics.map(title => ({ title, description: "Ask the proposed teacher how this topic will be approached for your learner’s current level." }))).map((stage,index) => <Feature key={stage.title} icon={chapter.icon} number={`0${index+1}`} title={stage.title}>{stage.description}</Feature>)}</div></StorySection>
    <StorySection theme="soft"><div className="story-split"><div><p className="eyebrow">Before the first lesson</p><h2 className="editorial-title">A little preparation.<br /><em>A calmer beginning.</em></h2><div className="story-prose"><p>A clear space, usable audio and a few questions can make the first meeting easier. For a child, agree how a parent will stay involved.</p></div><ActionLink href="/safety" secondary>Parent guidance</ActionLink></div><ul className="checklist">{course.preparation.map(item => <li key={item}>{item}</li>)}</ul></div></StorySection>
    <StorySection><div className="story-split"><div><p className="eyebrow">Make room in your week</p><h2 className="editorial-title">The right course.<br /><em>A workable routine.</em></h2></div><div className="story-prose"><p>Share your city, preferred local times, teaching language and any teacher preference. Ask for lesson length, weekly frequency and the full fee in your currency.</p><p>Your teacher and schedule need to be confirmed before booking. Learning outcomes and completion dates depend on the learner, practice and circumstances.</p><ActionLink href="/pricing" secondary>Your fee checklist</ActionLink></div></div></StorySection>
    {guides.length > 0 && <StorySection theme="paper"><SectionHeading eyebrow="A little further reading" title={<>Support for<br /><em>the learning at home.</em></>} /><div className="journal-grid">{guides.map(post => <ArticleCard key={post.slug} post={post} />)}</div></StorySection>}
    <CallToAction title="Let’s discuss your next step." description={`Ask about ${course.title}, your learner’s level and the details of a free trial. Start with the questions that matter to your family.`} href={enquiry} label="Ask about this course" />
  </main>;
}

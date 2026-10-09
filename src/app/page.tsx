import PageHero from "./components/common/pageHero";
import LineIcon from "./components/common/lineIcon";
import { siteConfig } from "./content/site.config";
import { blogsData } from "./content/blogs";
import { pageMetadata } from "@/lib/seo";
import { ActionLink, CallToAction, SectionHeading, StoryImage, StorySection } from "./components/story/primitives";
import CourseCard from "./components/story/courseCard";
import JourneySteps from "./components/story/journeySteps";
import ArticleCard from "./components/story/articleCard";

export const metadata = pageMetadata("Online Quran Classes for Kids and Families", "Explore one-on-one Quran learning, Noorani Qaida, Tajweed and Hifz. Ask about a free trial and lesson times that fit your family.", "/");
export default function HomePage() {
  return <main className="site-main">
    <PageHero home image="family" eyebrow="Quran learning. A little closer to home." title={<>Small steps.<br />Steady learning.<br /><em>A lasting connection.</em></>} description="Live, one-on-one online Quran classes for kids and families. From a first Arabic letter to a regular reading routine, begin with guidance that considers your learner." asideValue="Together, from home." asideLabel="One learner. One thoughtful starting point.">
      <div className="hero-actions"><ActionLink href="/contact">Request a free trial</ActionLink><ActionLink href="/courses" secondary>Explore the courses</ActionLink></div>
      <p className="hero-small-note">Share your city and local times. Teacher availability, language and fees are discussed before booking.</p>
    </PageHero>
    <div className="chapter-ribbon"><div className="story-container story-grid--four">
      <div className="ribbon-item"><LineIcon kind="message" /><div><strong>One-to-one</strong><span>Space to ask and practise</span></div></div>
      <div className="ribbon-item"><LineIcon kind="home" /><div><strong>From your home</strong><span>A familiar place to learn</span></div></div>
      <div className="ribbon-item"><LineIcon kind="path" /><div><strong>At your level</strong><span>Discuss a suitable starting point</span></div></div>
      <div className="ribbon-item"><LineIcon kind="spark" /><div><strong>A free trial</strong><span>Meet before you decide</span></div></div>
    </div></div>
    <StorySection theme="paper"><div className="story-split"><StoryImage kind="study" caption="Make a little room for a meaningful routine." /><div data-reveal><p className="eyebrow">First, a place to begin</p><h2 className="editorial-title">More than a lesson.<br /><em>A rhythm for your family.</em></h2><div className="story-prose"><p>Learning can start with a curious child, an adult returning to reading, or a family finding its feet. You do not need a finished plan to take the first step.</p><p>Talk about what the learner knows, what feels difficult and how much practice fits into everyday life. A manageable routine gives lessons a place alongside school, work and family time.</p></div><ActionLink href="/about" secondary>Our approach to learning</ActionLink></div></div></StorySection>
    <StorySection id="courses"><SectionHeading eyebrow="Choose your next chapter" title={<>A starting point<br /><em>for every stage.</em></>} description="Build foundations, develop reading, discuss memorization or explore meaning. Each course is a conversation about where you are today." /><div className="course-grid">{siteConfig.courses.map(course => <CourseCard key={course.slug} course={course} />)}</div></StorySection>
    <StorySection theme="soft"><SectionHeading eyebrow="From wondering to beginning" title={<>A simple path.<br /><em>A personal conversation.</em></>} description="Start with an enquiry. Use the trial to ask questions. Agree the details before beginning regular lessons." /><JourneySteps /></StorySection>
    <StorySection><div className="story-split"><div data-reveal><p className="eyebrow">Parents belong in the story</p><h2 className="editorial-title">A connection you<br /><em>can be part of.</em></h2><div className="story-prose"><p>A child’s learning is a shared conversation. Speak with the proposed teacher, observe how explanations work and agree how you will stay involved.</p><p>Ask about experience, supervision, communication and recording before joining. Feeling comfortable enough to ask questions matters from the very beginning.</p></div><ActionLink href="/safety" secondary>Read parent guidance</ActionLink></div><StoryImage kind="family" className="story-photo--arch" caption="A conceptual illustration of learning together." /></div></StorySection>
    <StorySection theme="paper"><SectionHeading eyebrow="Notes for the journey" title={<>Little things that make<br /><em>learning feel easier.</em></>} description="Practical guides for preparing a lesson, choosing the right questions and building a routine at home." /><div className="journal-grid">{blogsData.slice(0,3).map(post => <ArticleCard key={post.slug} post={post} />)}</div><div className="section-action"><ActionLink href="/blog" secondary>Explore all parent guides</ActionLink></div></StorySection>
    <CallToAction />
  </main>;
}

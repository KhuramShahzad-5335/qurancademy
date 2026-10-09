import Link from "next/link";
import { siteConfig } from "./content/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Online Quran Classes for Kids and Families", "Explore one-on-one Quran learning, Noorani Qaida, Tajweed and Hifz. Ask about a free trial and lesson times that fit your family.", "/");

export default function HomePage() {
  return (
    <main className="home-page text-neutral-100">
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">Personal learning. A thoughtful start.</p>
            <h1>Online Quran classes for kids<span> and families.</span></h1>
            <p className="home-hero__lead">Build a steady learning routine from home with live, one-on-one lessons. Explore a course, discuss your needs and arrange a free trial before deciding.</p>
            <div className="home-hero__actions"><Link href="/contact" className="bw-button-primary">Request a free trial →</Link><Link href="/courses" className="bw-button-secondary">Explore courses</Link></div>
            <p className="home-hero__note">For families in the UK, US, Canada and beyond: share your city and preferred local times so we can discuss availability.</p>
          </div>
          <div className="home-hero__panel">
            <p className="eyebrow">A plan that starts with you</p>
            <p className="home-hero__number">1:1</p>
            <p className="home-hero__panel-title">Room to ask. Time to practise.</p>
            <ul><li>Start at the learner’s current level</li><li>Discuss your teacher and language preferences</li><li>Agree a schedule and fees before regular lessons</li></ul>
            <Link href="/pricing" className="text-link">Questions to ask about fees →</Link>
          </div>
        </div>
      </section>
      <section className="home-stats" aria-label="Learning approach">
        {siteConfig.stats.map(stat => <div key={stat.label} className="home-stat"><p>{stat.value}</p><span>{stat.label}</span></div>)}
      </section>
      <section id="courses" className="home-section">
        <div className="section-heading"><div><p className="eyebrow">Learn with intention</p><h2>Find your starting point</h2></div><p>Learn what each course involves before discussing the right fit.</p></div>
        <div className="home-course-grid">{siteConfig.courses.map(course => <article key={course.code} className="bw-card home-course-card"><span className="card-kicker">Course {course.code}</span><h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3><p className="home-course-card__description">{course.description}</p><ul className="home-topics">{course.topics.map(topic => <li key={topic}>{topic}</li>)}</ul><Link href={`/courses/${course.slug}`} className="text-link">Explore this course →</Link></article>)}</div>
      </section>
      <section className="home-section home-steps"><div className="section-heading"><div><p className="eyebrow">A simple beginning</p><h2>Three steps to get started</h2></div></div><div className="home-step-grid">{siteConfig.steps.map(step => <div key={step.step} className="bw-card home-step"><p className="step-number">{step.step}</p><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div></section>
      <section className="home-section home-guidance"><div className="bw-card guidance-card"><p className="eyebrow">For parents</p><h2>Parents are part of the conversation</h2><p>Ask about your proposed teacher’s background, agree how you will stay involved and discuss lesson boundaries before starting.</p><Link href="/safety" className="text-link">Read parent guidance →</Link></div><div className="bw-card guidance-card guidance-card--accent"><p className="eyebrow">Helpful reading</p><h2>Practical guidance for home learning</h2><p>Prepare for a first lesson, plan a manageable routine and choose the questions that matter for your family.</p><Link href="/blog" className="text-link">Explore parent guides →</Link></div></section>
    </main>
  );
}

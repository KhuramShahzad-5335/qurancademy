import Link from "next/link";
import PageHero from "../components/common/pageHero";
import { siteConfig } from "../content/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Online Quran Courses: Qaida, Tajweed and Hifz", "Compare our Quran learning courses, starting levels, lesson approaches and preparation. Discuss the right course before booking a trial.", "/courses");

export default function CoursesPage() {
  return <main className="mx-auto max-w-6xl space-y-12 px-4 py-16"><PageHero eyebrow="Choose a starting point" title="Quran learning, at your level" description="Explore each course and the questions to discuss with your teacher. Lesson plans, language, times and fees are agreed before booking." asideValue="1:1" asideLabel="individual pace" /><section className="grid gap-6 md:grid-cols-2">{siteConfig.courses.map(course => <article key={course.slug} className="bw-card flex flex-col p-8"><p className="text-sm text-emerald-300">Course {course.code}</p><h2 className="mt-3 text-2xl font-bold"><Link href={`/courses/${course.slug}`}>{course.title}</Link></h2><p className="mt-4 flex-1 text-neutral-300 leading-7">{course.description}</p><p className="mt-4 text-sm text-neutral-400">{course.audience}</p><Link href={`/courses/${course.slug}`} className="mt-6 text-emerald-300 underline">Course details and preparation →</Link></article>)}</section><Link href="/contact" className="bw-button-primary">Not sure? Ask about your starting level →</Link></main>;
}

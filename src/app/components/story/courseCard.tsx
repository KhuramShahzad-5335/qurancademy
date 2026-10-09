import Link from "next/link";
import type { Course } from "@/app/content/site.config";
import LineIcon from "../common/lineIcon";
import { getCourseChapter } from "./design";

export default function CourseCard({ course }: { course: Course }) {
  const chapter = getCourseChapter(course.slug);
  return <article className="course-story-card" data-reveal><div className="course-card-top"><span className="chapter-number">{course.code}</span><LineIcon kind={chapter.icon} /></div><p className="card-kicker">{chapter.chapter}</p><h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3><p className="course-card-description">{course.description}</p><ul className="topic-list">{course.topics.map(topic => <li key={topic}>{topic}</li>)}</ul><Link href={`/courses/${course.slug}`} className="story-text-link">Explore this chapter <span aria-hidden="true">↗</span></Link></article>;
}

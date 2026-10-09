import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/app/content/site.config";
import LineIcon from "../common/lineIcon";
import { artwork, getCourseChapter } from "./design";
export default function CourseCard({ course }: { course: Course }) {
  const chapter = getCourseChapter(course.slug);
  return <article className="group flex min-w-0 flex-col rounded-[10px] border border-[var(--line)] px-[22px] py-[26px] transition-all duration-350 ease-story hover:-translate-y-1.5 hover:border-blue-bell-200/45 hover:bg-[var(--card-hover)] motion-reduce:transform-none" data-reveal>
    <Link href={`/courses/${course.slug}`} className="mb-[22px] block overflow-hidden rounded-[7px] bg-blue-bell-800" aria-label={`Explore ${course.title}`}><Image src={artwork[chapter.image].src} alt="" width={1440} height={960} sizes="(max-width:480px) 100vw, (max-width:1100px) 50vw, 25vw" className="block aspect-[1.3] w-full object-cover transition-transform duration-700 ease-story group-hover:scale-[1.06] motion-reduce:transform-none" /></Link>
    <div className="flex items-center justify-between pb-5 text-[var(--marker)]"><span className="font-editorial text-[35px] text-[var(--muted)] opacity-55">{course.code}</span><LineIcon kind={chapter.icon} /></div>
    <p className="eyebrow min-h-[34px] text-[9px]">{chapter.chapter}</p><h3 className="mt-3 mb-[18px] font-editorial text-[27px] leading-[1.18] tracking-[-.025em]"><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
    <p className="flex-1 text-sm leading-[1.9] text-[var(--muted)]">{course.description}</p><ul className="my-[22px] flex flex-wrap gap-1.5">{course.topics.map(topic => <li key={topic} className="border-b border-[var(--line)] pb-[3px] text-[9px] leading-[1.6] text-[var(--muted)]">{topic}</li>)}</ul>
    <Link href={`/courses/${course.slug}`} className="flex items-center justify-between gap-2.5 border-b border-[var(--line)] py-3 text-[13px] font-semibold text-[var(--ink)] transition-colors hover:text-blue-bell-500">Explore this chapter <span aria-hidden="true" className="text-xl">↗</span></Link>
  </article>;
}

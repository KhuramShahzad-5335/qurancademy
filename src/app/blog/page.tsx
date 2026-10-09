import Link from "next/link";
import Image from "next/image";
import { blogsData, formatDate, readingTime } from "../content/blogs";
import PageHero from "../components/common/pageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Parent Guides for Online Quran Learning", "Practical guides for choosing a teacher, preparing for a first lesson and building a manageable Quran learning routine at home.", "/blog");

export default function BlogPage() {
  return <main className="mx-auto max-w-6xl space-y-12 px-4 py-16"><PageHero eyebrow="Guidance for parents" title="Small steps for a steady learning routine" description="Useful questions, lesson preparation and family planning. Start with a guide that answers what you need today." asideValue="Home" asideLabel="learning starts here" /><section className="grid gap-6 md:grid-cols-2">{blogsData.map(post => <article key={post.slug} className="bw-card flex flex-col overflow-hidden p-0"><Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><Image src={post.coverImage} alt="" width={1200} height={630} className="aspect-[1200/630] w-full object-cover" /></Link><div className="flex flex-1 flex-col p-6"><p className="text-xs uppercase tracking-wider text-emerald-300">{post.category} · {readingTime(post)}</p><h2 className="mt-3 text-2xl font-bold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p className="mt-3 flex-1 text-sm leading-7 text-neutral-300">{post.excerpt}</p><p className="mt-5 text-xs text-neutral-400">{post.updatedAt ? "Updated" : "Published"} <time dateTime={post.updatedAt || post.publishedAt}>{formatDate(post.updatedAt || post.publishedAt)}</time></p><Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-emerald-300">Read the guide →</Link></div></article>)}</section><section className="bw-card p-8"><h2 className="text-2xl font-bold">Ready to discuss your learner’s starting point?</h2><p className="mt-3 text-neutral-300 leading-7">Ask about the right course, teacher, language and timetable before arranging regular lessons.</p><Link href="/contact" className="bw-button-primary mt-6">Prepare an enquiry →</Link></section></main>;
}

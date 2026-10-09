import Link from "next/link";
import Image from "next/image";
import { formatDate, readingTime, type BlogPost } from "@/app/content/blogs";
export default function ArticleCard({ post }: { post: BlogPost }) {
  return <article className="group flex min-w-0 flex-col" data-reveal>
    <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg bg-blue-bell-800" aria-label={`Read ${post.title}`}><Image src={post.coverImage} alt="" width={1200} height={630} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" className="block aspect-[1200/630] w-full object-cover transition-transform duration-600 ease-story group-hover:scale-[1.035] motion-reduce:transform-none" /></Link>
    <div className="flex flex-1 flex-col pt-[22px]"><p className="eyebrow text-[9px]">{post.category} <span className="tracking-[.025em] text-[var(--muted)]">· {readingTime(post)}</span></p><h3 className="mt-[13px] font-editorial text-[26px] leading-tight tracking-[-.03em] max-[760px]:text-2xl"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="mt-[13px] flex-1 text-sm leading-[1.9] text-[var(--muted)]">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between border-b border-[var(--line)] pb-5 text-[10px] text-[var(--muted)]"><time dateTime={post.updatedAt || post.publishedAt}>{formatDate(post.updatedAt || post.publishedAt)}</time><Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="grid size-9 place-items-center rounded-full border border-[var(--line)] text-xl text-[var(--ink)] transition-all duration-250 hover:-rotate-12 hover:bg-blue-bell-200 hover:text-blue-bell-950 motion-reduce:transform-none"><span aria-hidden="true">↗</span></Link></div>
    </div>
  </article>;
}

import Link from "next/link";
import Image from "next/image";
import { formatDate, readingTime, type BlogPost } from "@/app/content/blogs";

export default function ArticleCard({ post }: { post: BlogPost }) {
  return <article className="journal-card" data-reveal><Link href={`/blog/${post.slug}`} className="journal-card-image" aria-label={`Read ${post.title}`}><Image src={post.coverImage} alt="" width={1200} height={630} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link><div className="journal-card-content"><p className="eyebrow">{post.category} <span>· {readingTime(post)}</span></p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="journal-card-foot"><time dateTime={post.updatedAt || post.publishedAt}>{formatDate(post.updatedAt || post.publishedAt)}</time><Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><span aria-hidden="true">↗</span></Link></div></div></article>;
}

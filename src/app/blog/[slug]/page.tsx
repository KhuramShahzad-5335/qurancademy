import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogsData, blogAuthor, formatDate, readingTime } from "@/app/content/blogs";
import { siteConfig } from "@/app/content/site.config";
import { jsonLd, pageMetadata, siteUrl } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return blogsData.map(post => ({ slug: post.slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find(item => item.slug === slug);
  if (!post) return { title: "Guide not found", robots: { index: false } };
  const metadata = pageMetadata(post.title, post.excerpt, `/blog/${slug}`);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article" as const,
      publishedTime: post.publishedAt, modifiedTime: post.updatedAt || post.publishedAt,
      authors: [`${siteUrl}/about`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find(item => item.slug === slug);
  if (!post) notFound();
  const related = blogsData.filter(item => post.relatedSlugs.includes(item.slug));
  const course = siteConfig.courses.find(item => item.slug === post.courseSlug);
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: post.title, description: post.excerpt,
        mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        image: [`${siteUrl}${post.coverImage}`],
        datePublished: post.publishedAt, dateModified: post.updatedAt || post.publishedAt,
        author: { "@type": "Organization", name: blogAuthor.name, url: `${siteUrl}/about` },
        publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en",
      }) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-400"><Link href="/">Home</Link> / <Link href="/blog">Parent guides</Link> / <span aria-current="page">This guide</span></nav>
      <header><p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">{post.category} · {readingTime(post)}</p><h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-neutral-300">{post.excerpt}</p><p className="mt-5 text-sm text-neutral-400">By <Link href="/about" className="text-emerald-300 underline">{blogAuthor.name}</Link> · Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{post.updatedAt && <> · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></>}</p></header>
      <Image src={post.coverImage} alt={post.coverAlt} width={1200} height={630} className="w-full rounded-2xl border border-white/10" />
      <nav aria-label="In this guide" className="bw-card p-6"><h2 className="text-lg font-bold">In this guide</h2><ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-emerald-300">{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`} className="underline underline-offset-4">{section.heading}</a></li>)}</ol></nav>
      <article className="space-y-10">{post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading} className="scroll-mt-28"><h2 className="text-2xl font-bold">{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 text-base leading-8 text-neutral-300">{paragraph}</p>)}{section.tips && <ul className="mt-5 list-disc space-y-3 pl-5 text-neutral-300 leading-7">{section.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>}</section>)}</article>
      <aside className="rounded-2xl border border-white/10 p-6" aria-label="About the author"><h2 className="text-lg font-bold">About this guide</h2><p className="mt-3 text-sm leading-7 text-neutral-300">{blogAuthor.bio}</p><Link href="/about" className="mt-3 inline-block text-sm text-emerald-300 underline">About Qurancademy</Link></aside>
      <section className="bw-card p-8"><h2 className="text-2xl font-bold">Discuss your next step</h2><p className="mt-3 text-neutral-300 leading-7">Ask about the learner’s level, available teachers, language, local times and a free trial before booking.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="bw-button-primary">Prepare an enquiry →</Link>{course && <Link href={`/courses/${course.slug}`} className="self-center text-emerald-300 underline">{course.title} course</Link>}</div></section>
      <section><h2 className="text-2xl font-bold">Keep exploring</h2><ul className="mt-5 space-y-3">{related.map(item => <li key={item.slug}><Link href={`/blog/${item.slug}`} className="text-emerald-300 underline underline-offset-4">{item.title}</Link></li>)}</ul></section>
    </main>
  );
}

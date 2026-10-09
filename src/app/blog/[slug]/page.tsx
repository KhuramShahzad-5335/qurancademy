import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogsData, blogAuthor, formatDate, readingTime } from "@/app/content/blogs";
import { siteConfig } from "@/app/content/site.config";
import { jsonLd, pageMetadata, siteUrl } from "@/lib/seo";
import { ActionLink, CallToAction, SectionHeading, StorySection } from "@/app/components/story/primitives";
import ArticleCard from "@/app/components/story/articleCard";
export const dynamicParams = false;
export function generateStaticParams() { return blogsData.map(post => ({ slug: post.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find(item => item.slug === slug);
  if (!post) return { title: "Guide not found", robots: { index: false } };
  const metadata = pageMetadata(post.title, post.excerpt, `/blog/${slug}`);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article" as const, publishedTime: post.publishedAt, modifiedTime: post.updatedAt || post.publishedAt, authors: [`${siteUrl}/about`] } };
}
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find(item => item.slug === slug);
  if (!post) notFound();
  const related = blogsData.filter(item => post.relatedSlugs.includes(item.slug));
  const course = siteConfig.courses.find(item => item.slug === post.courseSlug);
  return <main className="site-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
      "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt,
      mainEntityOfPage: `${siteUrl}/blog/${post.slug}`, image: [`${siteUrl}${post.coverImage}`],
      datePublished: post.publishedAt, dateModified: post.updatedAt || post.publishedAt,
      author: { "@type": "Organization", name: blogAuthor.name, url: `${siteUrl}/about` },
      publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en"
    }) }} />
    <div className="story-container"><nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Parent guides</Link><span>/</span><span aria-current="page">This guide</span></nav>
      <header className="article-header"><p className="eyebrow">{post.category} · {readingTime(post)}</p><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><p className="article-meta">By <Link href="/about">{blogAuthor.name}</Link> · Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{post.updatedAt && <> · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></>}</p></header>
      <Image src={post.coverImage} alt={post.coverAlt} width={1200} height={630} sizes="(max-width:760px) 100vw, 1180px" priority className="article-cover" />
    </div>
    <StorySection theme="paper"><div className="reading-layout"><nav aria-label="In this guide" className="reading-aside"><p className="eyebrow">In this guide</p>{post.sections.map((section,index) => <a key={section.heading} href={`#section-${index+1}`}>{section.heading}</a>)}{course && <ActionLink href={`/courses/${course.slug}`} secondary>Explore the course</ActionLink>}</nav>
      <div className="reading-body"><article>{post.sections.map((section,index) => <section id={`section-${index+1}`} key={section.heading}><p className="eyebrow">0{index+1} / The guide</p><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.tips && <ul className="checklist">{section.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>}</section>)}</article>
        <aside className="author-note" aria-label="About the author"><p className="eyebrow">About this guide</p><h2>A note from Qurancademy.</h2><p>{blogAuthor.bio}</p><Link href="/about">Our approach to learning ↗</Link></aside>
      </div></div></StorySection>
    <StorySection><SectionHeading eyebrow="Keep exploring" title={<>Another useful question.<br /><em>Another small step.</em></>} /><div className="journal-grid">{related.map(item => <ArticleCard key={item.slug} post={item} />)}</div></StorySection>
    <CallToAction title="Discuss your learner’s next step." description="Ask about the starting level, available teachers, teaching language and local times. Agree the details of a free trial before booking." />
  </main>;
}

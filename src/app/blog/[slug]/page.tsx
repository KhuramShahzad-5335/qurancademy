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
  return <main className="min-h-[60vh] overflow-clip">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
      "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt,
      mainEntityOfPage: `${siteUrl}/blog/${post.slug}`, image: [`${siteUrl}${post.coverImage}`],
      datePublished: post.publishedAt, dateModified: post.updatedAt || post.publishedAt,
      author: { "@type": "Organization", name: blogAuthor.name, url: `${siteUrl}/about` },
      publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en"
    }) }} />
    <div className="relative z-[1] mx-auto w-[calc(100%_-_36px)] min-[761px]:w-[min(1180px,calc(100%_-_clamp(2rem,8vw,7rem)))]"><nav aria-label="Breadcrumb" className="flex flex-wrap gap-[9px] pt-7 text-[11px] text-[var(--muted)] [&_nav]:flex [&_nav]:flex-wrap [&_nav]:gap-[9px] [&_a]:border-b [&_a]:border-[var(--line)]"><Link href="/">Home</Link><span>/</span><Link href="/blog">Parent guides</Link><span>/</span><span aria-current="page">This guide</span></nav>
      <header className="max-w-[890px] pt-4 [&_h1]:mt-5 [&_h1]:text-balance [&_h1]:font-editorial [&_h1]:text-[clamp(38px,5vw,64px)] [&_h1]:font-normal [&_h1]:leading-[1.12] [&_h1]:tracking-[-.045em]"><p className="eyebrow">{post.category} · {readingTime(post)}</p><h1>{post.title}</h1><p className="mt-[25px] max-w-[700px] text-base leading-[1.9] text-[var(--muted)]">{post.excerpt}</p><p className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 text-xs leading-[1.9] text-[var(--muted)]">By <Link href="/about">{blogAuthor.name}</Link> · Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{post.updatedAt && <> · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></>}</p></header>
      <Image src={post.coverImage} alt={post.coverAlt} width={1200} height={630} sizes="(max-width:760px) 100vw, 1180px" priority className="mt-[45px] mb-[60px] block max-h-[440px] w-full rounded-xl object-cover" />
    </div>
    <StorySection theme="paper"><div className="grid items-start gap-[35px] min-[761px]:grid-cols-[210px_minmax(0,1fr)] min-[761px]:gap-[38px] min-[1101px]:grid-cols-[250px_minmax(0,1fr)] min-[1101px]:gap-[70px]"><nav aria-label="In this guide" className="grid gap-[17px] border-t border-[var(--line)] pt-5 text-xs leading-[1.8] text-[var(--muted)] min-[761px]:sticky min-[761px]:top-[110px] [&>a:not([data-action])]:border-b [&>a:not([data-action])]:border-[var(--line)] [&>a:not([data-action])]:pb-3 [&>a]:hover:text-[var(--ink)] [&>[data-action]]:mt-4"><p className="eyebrow">In this guide</p>{post.sections.map((section,index) => <a key={section.heading} href={`#section-${index+1}`}>{section.heading}</a>)}{course && <ActionLink href={`/courses/${course.slug}`} secondary>Explore the course</ActionLink>}</nav>
      <div className="reading-body"><article>{post.sections.map((section,index) => <section id={`section-${index+1}`} key={section.heading}><p className="eyebrow">0{index+1} / The guide</p><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.tips && <ul className="checklist">{section.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>}</section>)}</article>
        <aside className="mt-[50px] rounded-lg border border-[var(--line)] p-[30px] [&_h2]:mb-3 [&_h2]:text-[22px]" aria-label="About the author"><p className="eyebrow">About this guide</p><h2>A note from Qurancademy.</h2><p>{blogAuthor.bio}</p><Link href="/about">Our approach to learning ↗</Link></aside>
      </div></div></StorySection>
    <StorySection><SectionHeading eyebrow="Keep exploring" title={<>Another useful question.<br /><em>Another small step.</em></>} /><div className="grid gap-7 min-[481px]:grid-cols-2 min-[1101px]:grid-cols-3">{related.map(item => <ArticleCard key={item.slug} post={item} />)}</div></StorySection>
    <CallToAction title="Discuss your learner’s next step." description="Ask about the starting level, available teachers, teaching language and local times. Agree the details of a free trial before booking." />
  </main>;
}

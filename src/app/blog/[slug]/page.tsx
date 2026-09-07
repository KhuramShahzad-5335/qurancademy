import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogsData } from '@/app/content/blogs';
import { siteConfig } from '@/app/content/site.config';
import PageHero from "@/app/components/common/pageHero";

// Pre-render static paths at build time
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Qurancademy`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
      {/* Back Navigation */}
      <Link href="/blog" className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1 mb-8">
        ← Back to All Articles
      </Link>

      <PageHero
        eyebrow={`${post.category} / ${post.readTime}`}
        title={post.title}
        description={post.excerpt}
        asideValue={post.date.split(" ")[0]}
        asideLabel={`by ${post.author}`}
      />

      {/* Main Image Placeholder */}
      <div className="bg-neutral-800 h-64 md:h-80 rounded-xl flex items-center justify-center text-neutral-500 font-mono text-xs mb-10 border border-neutral-800">
        [ Cover Image Placeholder ]
      </div>

      {/* Article Typography Body */}
      <article className="space-y-6 text-neutral-300 text-base leading-relaxed">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      {/* CTA Box inside Blog Post */}
      <div className="mt-12 bw-card p-8 text-center bg-neutral-900 border border-neutral-800">
        <h3 className="text-xl font-bold text-white">Ready to Put This into Practice?</h3>
        <p className="text-neutral-400 text-xs mt-2">
          Enroll in our 1-on-1 online classes with certified Male or Female teachers.
        </p>
        <a
          href={`${siteConfig.whatsappLink}&text=Assalamu%20Alaikum%21%20I%20read%20your%20blog%20post%20"${encodeURIComponent(post.title)}"%20and%20want%20to%20book%20a%20free%20demo.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bw-button-primary mt-4 inline-flex text-xs py-2.5 px-5"
        >
          Book Free Trial Class via WhatsApp →
        </a>
      </div>
    </main>
  );
}
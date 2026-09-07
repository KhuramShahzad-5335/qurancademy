import Link from 'next/link';
import { blogsData } from '../content/blogs';
import { siteConfig } from '../content/site.config';
import PageHero from "../components/common/pageHero";

export const metadata = {
  title: "Quran Learning Blog & Guides | Qurancademy",
  description: "Read expert articles on Tajweed, Noorani Qaida, Quran memorization, and online Islamic education.",
};

export default function BlogListingPage() {
  const featuredPost = blogsData[0];
  const remainingPosts = blogsData.slice(1);

  return (
    <main className="min-h-screen py-16 px-4 max-w-6xl mx-auto">
      <PageHero
        eyebrow="Knowledge Base"
        title="Quran Learning & Tajweed Blog"
        description="Guides, tips, and insights on mastering Quran recitation, Tajweed rules, and Hifz from home."
        asideValue="5+"
        asideLabel="learning guides"
      />

      {/* Featured Blog Post (Large Card) */}
      {featuredPost && (
        <section className="my-16">
          <div className="bw-card p-0 overflow-hidden md:grid md:grid-cols-12 items-center gap-6">
            {/* Image Placeholder */}
            <div className="md:col-span-6 bg-neutral-800 h-64 md:h-full flex items-center justify-center text-neutral-500 font-mono text-xs border-b md:border-b-0 md:border-r border-neutral-800">
              [ Placeholder Cover Image ]
            </div>

            {/* Post Info */}
            <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mb-3">
                  <span className="bg-neutral-800 text-neutral-200 px-2 py-0.5 rounded">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-white hover:text-neutral-300 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400 font-mono">By {featuredPost.author}</span>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-xs font-semibold text-white underline underline-offset-4 hover:text-neutral-300"
                >
                  Read Full Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid for Remaining Posts */}
      <section className="grid md:grid-cols-2 gap-8">
        {remainingPosts.map((post) => (
          <article key={post.slug} className="bw-card flex flex-col justify-between">
            <div>
              {/* Image Placeholder */}
              <div className="bg-neutral-800 h-48 rounded-lg flex items-center justify-center text-neutral-500 font-mono text-xs mb-6">
                [ Placeholder Image ]
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mb-3">
                <span className="bg-neutral-800 text-neutral-200 px-2.5 py-0.5 rounded">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white hover:text-neutral-300 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-mono">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-semibold text-neutral-200 underline underline-offset-4 hover:text-white"
              >
                Read Article →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Direct WhatsApp Callout Banner */}
      <section className="mt-20 bw-card text-center p-10 bg-neutral-900 border border-neutral-800">
        <h3 className="text-2xl font-bold text-white">Want Individual Guidance for Your Child?</h3>
        <p className="text-neutral-400 text-sm mt-2 max-w-xl mx-auto">
          Start with a free 1-on-1 trial class with our certified Male or Female Quran teachers today.
        </p>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bw-button-primary mt-6 inline-flex"
        >
          Book Free Trial on WhatsApp →
        </a>
      </section>
    </main>
  );
}
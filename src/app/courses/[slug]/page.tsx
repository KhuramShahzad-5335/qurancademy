import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/app/content/site.config";
import PageHero from "@/app/components/common/pageHero";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";

export const dynamicParams = false;
export function generateStaticParams() { return siteConfig.courses.map(course => ({ slug: course.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = siteConfig.courses.find(item => item.slug === slug);
  return course ? pageMetadata(course.title, course.description, `/courses/${slug}`) : { title: "Course not found", robots: { index: false } };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = siteConfig.courses.find(item => item.slug === slug);
  if (!course) notFound();
  return <main className="mx-auto max-w-5xl space-y-10 px-4 py-16"><nav aria-label="Breadcrumb" className="text-sm text-neutral-400"><Link href="/">Home</Link> / <Link href="/courses">Courses</Link> / <span aria-current="page">{course.title}</span></nav><PageHero eyebrow="Course guide" title={course.title} description={course.description} asideValue="1:1" asideLabel="guided learning" /><div className="grid gap-6 md:grid-cols-2"><section className="bw-card p-8"><h2 className="text-2xl font-bold">Who is this for?</h2><p className="mt-4 text-neutral-300 leading-8">{course.audience}</p><h2 className="mt-8 text-xl font-bold">What to discuss</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-neutral-300">{course.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></section><section className="bw-card p-8"><h2 className="text-2xl font-bold">How learning is approached</h2><p className="mt-4 text-neutral-300 leading-8">{course.approach}</p></section></div><section className="bw-card p-8"><h2 className="text-2xl font-bold">Prepare for the first lesson</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-neutral-300">{course.preparation.map(item => <li key={item}>{item}</li>)}</ul></section><section className="bw-card p-8"><h2 className="text-2xl font-bold">Timings, fees and your free trial</h2><p className="mt-4 leading-8 text-neutral-300">Tell us your city, preferred local times, teaching language and any teacher preference. Ask for the lesson length, frequency and full fee in your currency. Your teacher and schedule need to be confirmed before booking; learning outcomes and completion dates depend on the learner.</p><div className="mt-6 flex flex-wrap gap-4"><a href={whatsappUrl(`Assalamu Alaikum! I would like to ask about ${course.title}. Please confirm teacher availability, teaching language, trial details and fees.`)} target="_blank" rel="noopener noreferrer" className="bw-button-primary">Ask about this course →</a><Link href="/pricing" className="self-center text-emerald-300 underline">Fee checklist</Link></div></section><section><h2 className="text-xl font-bold">Useful next steps</h2><div className="mt-4 flex flex-wrap gap-5"><Link href="/blog" className="text-emerald-300 underline">Parent learning guides</Link><Link href="/safety" className="text-emerald-300 underline">Before your child joins a lesson</Link><Link href="/courses" className="text-emerald-300 underline">Compare courses</Link></div></section></main>;
}

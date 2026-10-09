import type { Review } from "@/app/content/site.config";
import { siteConfig } from "@/app/content/site.config";
import { reviewPrompts } from "@/app/content/landing";
import LineIcon from "../common/lineIcon";

const starPath = "m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.3-.9L12 3Z";

function ReviewRating({ review }: { review: Review }) {
  return (
    <div className="flex items-center gap-1 text-blue-bell-700" role="img" aria-label={`${review.rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fraction = Math.min(1, Math.max(0, review.rating - index));
        const clipId = `review-rating-${review.id}-${index}`;
        return (
          <svg key={index} viewBox="0 0 24 24" className="size-4" aria-hidden="true">
            <defs><clipPath id={clipId}><rect width={24 * fraction} height={24} /></clipPath></defs>
            <path d={starPath} fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".35" />
            <path d={starPath} fill="currentColor" clipPath={`url(#${clipId})`} />
          </svg>
        );
      })}
      <span className="ml-2 font-mono text-xs">{review.rating.toFixed(1)}</span>
    </div>
  );
}

function reviewDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(parsed);
}

// Pass approved reviews here when the feedback feature is connected.
// Until then, the manually approved siteConfig list is the source of truth.
export default function ReviewGallery({ reviews = siteConfig.reviews }: { reviews?: Review[] }) {
  const publishedReviews = reviews.filter(review => review.name.trim() && review.review.trim() && Number.isFinite(review.rating) && review.rating >= 0 && review.rating <= 5);

  if (!publishedReviews.length) {
    return (
      <div>
        <div className="grid gap-4 min-[761px]:grid-cols-3">
          {reviewPrompts.map((prompt, index) => (
            <article key={prompt.label} className="relative flex flex-col overflow-hidden rounded-2xl border border-blue-bell-800/15 bg-blue-bell-50/55 p-6 min-[1101px]:p-8" data-reveal>
              <span className="pointer-events-none absolute -top-5 right-3 font-editorial text-[140px] leading-none text-blue-bell-600/10" aria-hidden="true">“</span>
              <div className="relative mb-8 flex items-center justify-between text-blue-bell-700"><LineIcon kind="message" /><span className="font-mono text-[10px]">0{index + 1}</span></div>
              <p className="eyebrow text-[9px]">{prompt.label}</p>
              <h3 className="relative mt-3 font-editorial text-[29px] font-normal leading-tight tracking-[-.035em]">{prompt.title}</h3>
              <p className="relative mt-4 flex-1 text-sm leading-[1.9] text-blue-bell-800">{prompt.description}</p>
              <span className="mt-8 flex items-center gap-2 border-t border-blue-bell-800/15 pt-4 text-[10px] text-blue-bell-700"><span className="size-1.5 rounded-full bg-blue-bell-600" />A prompt for your story</span>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-[640px] text-xs leading-[1.85] text-[var(--muted)]">Our first published stories are still to come. These are conversation prompts; every review shared here will come from a real learner or parent, with their permission.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 min-[761px]:grid-cols-2 min-[1101px]:grid-cols-3">
      {publishedReviews.map(review => (
        <figure key={review.id} className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-blue-bell-800/15 bg-blue-bell-50/70 p-6 min-[1101px]:p-8" data-reveal>
          <span className="pointer-events-none absolute top-12 right-4 font-editorial text-[140px] leading-none text-blue-bell-600/10" aria-hidden="true">“</span>
          <div className="relative flex flex-wrap items-center justify-between gap-3"><ReviewRating review={review} /><span className="text-[10px] text-blue-bell-700">{reviewDate(review.date)}</span></div>
          <blockquote className="relative my-8 flex-1 whitespace-pre-line break-words font-editorial text-[23px] leading-[1.6] tracking-[-.025em]">{review.review}</blockquote>
          <figcaption className="relative border-t border-blue-bell-800/15 pt-5">
            <div className="flex items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-bell-200 font-editorial text-xl text-blue-bell-800" aria-hidden="true">{review.name.trim().slice(0, 1).toUpperCase()}</span><div><p className="text-sm font-semibold">{review.name}</p>{review.location && <p className="mt-1 text-[11px] text-blue-bell-700">{review.location}</p>}</div></div>
            {review.course && <p className="mt-5 text-[10px] leading-[1.7] text-blue-bell-700">{review.course}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

import type { ComponentProps } from "react";
import type LineIcon from "../common/lineIcon";

export type IconKind = ComponentProps<typeof LineIcon>["kind"];

export const artwork = {
  family: { src: "/images/family-learning.webp", alt: "Editorial illustration of a parent and child learning together at home" },
  study: { src: "/images/study-scene.webp", alt: "Editorial illustration of a sunlit study desk with an open book and notebook" },
};

export const courseChapters: Record<string, { icon: IconKind; chapter: string; note: string }> = {
  "noorani-qaida": { icon: "book", chapter: "Begin with the foundations", note: "For the first letters, sounds and little discoveries." },
  "quran-reading-tajweed": { icon: "spark", chapter: "Grow in careful reading", note: "For the confidence to listen, try and read again." },
  "quran-memorization": { icon: "path", chapter: "Build a lasting routine", note: "For steady new learning, with revision woven in." },
  "quran-meaning-tafseer": { icon: "question", chapter: "Make space for understanding", note: "For thoughtful questions and guided discussion." },
};

export function getCourseChapter(slug: string) {
  return courseChapters[slug] ?? { icon: "book" as const, chapter: "Explore your next chapter", note: "A starting point to discuss together." };
}

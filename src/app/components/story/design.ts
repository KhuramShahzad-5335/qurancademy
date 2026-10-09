import type { ComponentProps } from "react";
import type LineIcon from "../common/lineIcon";
export type IconKind = ComponentProps<typeof LineIcon>["kind"];
export const artwork = {
  family: { src: "/images/family-blue.webp", alt: "Conceptual blue illustration of a parent and child learning at home" },
  study: { src: "/images/study-blue.webp", alt: "Blue illustration of a quiet study nook with a book and notebook" },
  qaida: { src: "/images/qaida-blue.webp", alt: "Illustrated beginner learning desk with a primer and wooden learning tiles" },
  tajweed: { src: "/images/tajweed-blue.webp", alt: "Illustrated reading desk with a book, headphones and microphone" },
  hifz: { src: "/images/hifz-blue.webp", alt: "Illustrated revision desk with a bookmarked book, notebook and prayer beads" },
  meaning: { src: "/images/meaning-blue.webp", alt: "Illustrated study books and notebook beside a blue vase" },
  planning: { src: "/images/planning-blue.webp", alt: "Illustrated lesson planning desk with a clock and calendar" },
  courtyard: { src: "/images/courtyard-blue.webp", alt: "Conceptual illustration of a serene blue courtyard with geometric arches" },
};
export type ArtworkKind = keyof typeof artwork;
export const courseChapters: Record<string, { icon: IconKind; chapter: string; note: string; image: ArtworkKind }> = {
  "noorani-qaida": { icon: "book", chapter: "Begin with the foundations", note: "For the first letters, sounds and little discoveries.", image: "qaida" },
  "quran-reading-tajweed": { icon: "spark", chapter: "Grow in careful reading", note: "For the confidence to listen, try and read again.", image: "tajweed" },
  "quran-memorization": { icon: "path", chapter: "Build a lasting routine", note: "For steady new learning, with revision woven in.", image: "hifz" },
  "quran-meaning-tafseer": { icon: "question", chapter: "Make space for understanding", note: "For thoughtful questions and guided discussion.", image: "meaning" },
};
export function getCourseChapter(slug: string) {
  return courseChapters[slug] ?? { icon: "book" as const, chapter: "Explore your next chapter", note: "A starting point to discuss together.", image: "study" as const };
}

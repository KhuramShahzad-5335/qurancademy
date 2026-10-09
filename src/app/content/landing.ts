import { faqsData } from "./faqs";
import type { IconKind } from "../components/story/design";

export const learnerPaths: {
  title: string; label: string; description: string; note: string;
  href: string; linkLabel: string; icon: IconKind;
}[] = [
  {
    title: "Their first little steps.", label: "For children & beginners",
    description: "Begin with letters, sounds and a little curiosity. Discuss a pace that suits the learner, with a parent close enough to stay involved.",
    note: "A possible starting point: Noorani Qaida.",
    href: "/courses/noorani-qaida", linkLabel: "Explore the foundations", icon: "spark",
  },
  {
    title: "A return to reading.", label: "For adults & returning learners",
    description: "Bring the passages you find difficult and the questions you have held onto. Revisit foundations or discuss guided reading with Tajweed.",
    note: "Your current reading guides the starting point.",
    href: "/courses/quran-reading-tajweed", linkLabel: "Explore guided reading", icon: "book",
  },
  {
    title: "Room for your questions.", label: "For families exploring meaning",
    description: "Discuss an introduction to Quran meanings, the language you prefer and suitable resources. There is room to ask where to begin.",
    note: "Agree the level and resources with a teacher.",
    href: "/courses/quran-meaning-tafseer", linkLabel: "Explore meaning & context", icon: "question",
  },
];

export const lessonStages: { title: string; description: string; icon: IconKind }[] = [
  { title: "Listen & notice", description: "Hear a teacher model a sound or passage. Notice the pronunciation and ask about anything unfamiliar.", icon: "book" },
  { title: "Try a little at a time", description: "Practise a manageable piece, receive feedback and try again. Leave room for repetition rather than rushing ahead.", icon: "path" },
  { title: "Ask & carry it forward", description: "Talk through what felt difficult and agree useful practice before the next lesson. Parents can ask how to stay involved.", icon: "message" },
];

// Use the full FAQ page's answers so the landing page stays consistent.
const landingFaqIds = ["4", "1", "2", "6", "7", "3"];
export const landingFaqs = landingFaqIds.flatMap(id => {
  const faq = faqsData.find(item => item.id === id);
  return faq ? [faq] : [];
});

export const reviewPrompts = [
  { label: "The first step", title: "What helped you begin?", description: "A question answered, a welcoming trial, or simply finding the right starting point." },
  { label: "The everyday rhythm", title: "How did learning fit in?", description: "Tell us about the lesson routine, practice at home and what could work better." },
  { label: "The next learner", title: "What would you share?", description: "Your honest experience can help another family ask the right questions." },
];

import { whatsappNumber, whatsappUrl } from "@/lib/contact";

export interface Teacher {
  id: string; name: string; qualification: string; specialization: string;
  gender: "Male" | "Female"; experience: string;
}
export interface Course {
  title: string; code: string; slug: string; description: string; topics: string[];
  audience: string; approach: string; preparation: string[];
}
export interface Review {
  id: string; name: string; location: string; rating: number; date: string; review: string; course: string;
}

export const siteConfig = {
  name: "Qurancademy",
  tagline: "Live, one-on-one online Quran learning for children and families",
  whatsappNumber,
  whatsappLink: whatsappUrl(),
  // Add a real, checked mailbox when available. Do not publish a placeholder.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  address: "Lahore, Pakistan",
  navLinks: [
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Fees", href: "/pricing" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    { label: "Lesson format", value: "1-on-1" },
    { label: "Learning from", value: "Home" },
    { label: "First step", value: "Free trial" },
    { label: "Learning pace", value: "Individual" },
  ],
  courses: [
    {
      title: "Noorani Qaida", code: "01", slug: "noorani-qaida",
      description: "A starting point for Arabic letters, vowel marks and reading practice, with pronunciation guidance from a teacher.",
      topics: ["Arabic letters", "Vowel marks", "Reading practice"],
      audience: "Children and other beginners who are building a foundation before reading connected Quran text.",
      approach: "Start with an assessment of what the learner recognises. Work through manageable exercises and ask the teacher to demonstrate pronunciation before practice. Move on when the learner is ready rather than according to a fixed completion date.",
      preparation: ["A readable copy of the teacher's recommended Qaida", "A quiet space and reliable audio", "A parent nearby for younger learners"],
    },
    {
      title: "Quran Reading with Tajweed", code: "02", slug: "quran-reading-tajweed",
      description: "Guided reading practice with attention to pronunciation, pacing and Tajweed, matched to the learner's starting level.",
      topics: ["Teacher-led recitation", "Pronunciation", "Reading fluency"],
      audience: "Learners who recognise Arabic letters and want help reading more carefully and consistently.",
      approach: "A teacher listens to the learner and selects an appropriate passage. Lessons combine modelling, short attempts and feedback. Ask which reading text and recitation approach your assigned teacher will use.",
      preparation: ["A Quran copy agreed with the teacher", "Clear microphone and headphones if helpful", "A note of passages or sounds that feel difficult"],
    },
    {
      title: "Quran Memorization (Hifz)", code: "03", slug: "quran-memorization",
      description: "A discussion-led memorization plan that balances new learning with revision and fits the learner's routine.",
      topics: ["Manageable goals", "Revision", "Teacher feedback"],
      audience: "Learners ready to discuss a sustained memorization routine and the time available for practice and revision.",
      approach: "Agree goals with a teacher after checking reading readiness. Plan revision alongside new material, and adjust the workload around school, energy and retention. No completion date or memorization result is guaranteed.",
      preparation: ["An honest estimate of daily practice time", "A consistent Quran copy", "Parent support and a simple revision log"],
    },
    {
      title: "Quran Meaning and Tafseer", code: "04", slug: "quran-meaning-tafseer",
      description: "Discuss a suitable introduction to Quran meanings and context, with teaching language and resources agreed in advance.",
      topics: ["Meanings", "Context", "Questions and discussion"],
      audience: "Families and learners looking for an appropriate introduction to meanings with a teacher, rather than independent interpretation.",
      approach: "Ask about the teacher's relevant background, the language of instruction and the books used. Agree the learner's level and learning goals before starting. Questions about religious rulings should be taken to an appropriately qualified scholar.",
      preparation: ["Questions and learning goals", "Preferred teaching language", "Age-appropriate resources agreed with the teacher"],
    },
  ] as Course[],
  // Publish profiles and reviews only after the owner verifies facts and permission.
  teachers: [] as Teacher[],
  reviews: [] as Review[],
  steps: [
    { step: "01", title: "Tell us what you need", desc: "Send a WhatsApp enquiry with the course you are considering, your city or time zone and preferred lesson times." },
    { step: "02", title: "Arrange a free trial", desc: "Ask about teacher availability, teaching language and the trial details before agreeing a session." },
    { step: "03", title: "Agree a plan together", desc: "Confirm the course, teacher, weekly schedule and fees before starting regular lessons." },
  ],
};

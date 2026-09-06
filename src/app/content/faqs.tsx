export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "1",
    category: "General & Classes",
    question: "How are online Quran classes conducted?",
    answer: "All classes are conducted live and 1-on-1 via Zoom, Skype, or Whatsapp video call. You can join your sessions from any device — laptop, tablet, or smartphone — from anywhere in the world."
  },
  {
    id: "2",
    category: "General & Classes",
    question: "Is the first demo class really free?",
    answer: "Yes, absolutely. Every student gets a complimentary 1-on-1 demo trial session with an assigned teacher. This allows you to evaluate the teaching style and fit before making any commitment."
  },
  {
    id: "3",
    category: "Teachers & Staff",
    question: "Do you have female Quran teachers for female students and kids?",
    answer: "Yes, we have a dedicated team of certified Female Aalima and Qariyah staff available for sisters and young children, as well as qualified Male Qari and Hafiz teachers."
  },
  {
    id: "4",
    category: "Courses & Levels",
    question: "Which courses do you offer for complete beginners?",
    answer: "For beginners and young kids, we start with the Noorani Qaida course. It builds a solid foundation in Arabic letters, vowel marks (Harakaat), and basic pronunciation rules (Makharij) before moving to Quran Nazra."
  },
  {
    id: "5",
    category: "Courses & Levels",
    question: "Can I enroll in online Hifz (Quran Memorization)?",
    answer: "Yes. Our online Hifz program follows a structured daily system: Sabaq (new daily lesson), Sabqi (recent revisions), and Manzil (older Juz revision) to ensure retention with proper Tajweed."
  },
  {
    id: "6",
    category: "Schedules & Fees",
    question: "What are the class timings and days?",
    answer: "We offer 24/7 flexible scheduling. You can choose specific days and time slots that fit your daily schedule, school hours, or international time zone."
  },
  {
    id: "7",
    category: "Schedules & Fees",
    question: "How do I register or discuss fee packages?",
    answer: "You can click any 'Chat on Whatsapp' button on our website to message us directly. We will provide full details on flexible monthly packages and schedule your free demo class within 24 hours."
  }
];
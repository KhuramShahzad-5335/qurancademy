export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  coverImage: string;
  content: string[]; // Array of paragraphs
}

export const blogsData: BlogPost[] = [
  {
    slug: "benefits-of-learning-noorani-qaida-online-for-kids",
    title: "5 Key Benefits of Starting Kids with Noorani Qaida Online",
    excerpt: "Discover why Noorani Qaida is the fundamental stepping stone for children learning proper Quran recitation and Tajweed rules from home.",
    date: "Sep 01, 2026",
    readTime: "4 min read",
    category: "Beginners",
    author: "Qari Tayyab",
    coverImage: "/images/blog-placeholder-1.jpg",
    content: [
      "Learning to read the Quran begins with establishing a strong foundation in Arabic alphabets and pronunciation. Noorani Qaida serves as the essential primer for young learners and beginners worldwide.",
      "With 1-on-1 online classes, children receive dedicated attention from qualified teachers who correct Makharij (points of articulation) in real time, ensuring students develop accurate pronunciation from day one.",
      "Additionally, flexible scheduling allows parents to integrate Quran lessons smoothly into school routines without the hassle of daily commutes."
    ]
  },
  {
    slug: "how-to-memorize-quran-at-home-effectively",
    title: "How to Memorize the Quran at Home: Practical Daily Routines",
    excerpt: "A structured guide on managing daily Sabaq, Sabqi, and Manzil revisions for students pursuing online Hifz-ul-Quran.",
    date: "Aug 24, 2026",
    readTime: "6 min read",
    category: "Hifz Guide",
    author: "Hafiz Azizullah",
    coverImage: "/images/blog-placeholder-2.jpg",
    content: [
      "Memorizing the Quran (Hifz) requires consistency, discipline, and a well-structured daily revision routine. Practicing at home with a certified tutor ensures that progress remains steady and accurate.",
      "The classic three-part method consists of Sabaq (new daily lesson), Sabqi (recent revisions from the past 5-10 days), and Manzil (older Juz revision). Balancing all three prevents forgetting previously memorized Surahs.",
      "Reciting your daily Sabaq to an experienced teacher before memorization prevents fixing incorrect pronunciations into long-term memory."
    ]
  },
  {
    slug: "understanding-basic-rules-of-tajweed-for-beginners",
    title: "Understanding Basic Tajweed Rules: A Beginner's Overview",
    excerpt: "Learn why applying basic Tajweed rules like Ghunnah, Ikhfa, and Madd transforms your Quran recitation quality.",
    date: "Aug 10, 2026",
    readTime: "5 min read",
    category: "Tajweed",
    author: "Aalima Sadia",
    coverImage: "/images/blog-placeholder-3.jpg",
    content: [
      "Tajweed literally means 'beautification' or 'doing something well'. In the context of Quran recitation, it refers to giving every Arabic letter its proper rights and rules of pronunciation.",
      "Key foundational concepts include Ghunnah (nasal sound), Ikhfa (hidden sound), and Madd (elongation of vowel sounds). Mastering these rules ensures that the meaning of divine words remains uncorrupted.",
      "Our 1-on-1 online Tajweed courses break down complex phonetic rules into simple daily exercises suited for all ages."
    ]
  }
];
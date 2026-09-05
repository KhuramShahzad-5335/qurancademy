export interface Teacher {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  gender: "Male" | "Female";
  experience: string;
}

export interface Course {
  title: string;
  code: string;
  description: string;
  topics: string[];
}

export const siteConfig = {
  name: "eTutors Quran Academy",
  tagline: "Learn Quran Online with Certified Male & Female Teachers",
  whatsappNumber: "+92 347 1713760",
  whatsappLink:
    "https://wa.me/923471713760?text=Assalamu%20Alaikum%21%20I%20want%20to%20book%20a%20free%20demo%20Quran%20class.",
  email: "info@etutors.pk",
  address: "Islamabad, Pakistan",

  navLinks: [
    // { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
  ],

  stats: [
    { label: "Certified Teachers", value: "Male & Female" },
    { label: "Active Students", value: "500+" },
    { label: "Free Demo Class", value: "1-on-1" },
    { label: "Flexible Hours", value: "24/7" },
  ],

  courses: [
    {
      title: "Noorani Qaida",
      code: "01",
      description:
        "Basics of Arabic letters, pronunciation, and fundamental rules for beginners and children.",
      topics: ["Arabic Alphabets", "Harakaat & Tanween", "Basic Makharij"],
    },
    {
      title: "Quran Nazra with Tajweed",
      code: "02",
      description:
        "Fluent Quran recitation focusing on proper Tajweed rules, letters origin, and correct stops.",
      topics: ["Ghunnah & Ikhfa", "Madd Rules", "Fluency Practice"],
    },
    {
      title: "Hifz-ul-Quran",
      code: "03",
      description:
        "Step-by-step Quran memorization with daily new lesson (Sabaq), revision (Sabqi), and Manzil.",
      topics: ["Daily Sabaq", "Revision Schedules", "Individual Pace"],
    },
    {
      title: "Tarjuma & Tafseer",
      code: "04",
      description:
        "Word-by-word Urdu or English translation and detailed context understanding of Quranic verses.",
      topics: ["Word Meanings", "Context & History", "Practical Lessons"],
    },
  ] as Course[],

  teachers: [
    {
      id: "1",
      name: "Qari Muhammad Tayyab",
      qualification: "Aalim & Hafiz-e-Quran",
      specialization: "Tajweed & Hifz",
      gender: "Male",
      experience: "8+ Years Experience",
    },
    {
      id: "2",
      name: "Aalima Sadia Bibi",
      qualification: "Aalima & Qariyah",
      specialization: "Noorani Qaida & Nazra",
      gender: "Female",
      experience: "6+ Years Experience",
    },
    {
      id: "3",
      name: "Qari Hafiz Azizullah",
      qualification: "M.A. Islamic Studies & Hafiz",
      specialization: "Tarjuma & Tafseer",
      gender: "Male",
      experience: "10+ Years Experience",
    },
  ] as Teacher[],

  steps: [
    {
      step: "01",
      title: "Contact Us on WhatsApp",
      desc: "Send us a direct message on WhatsApp with your child's age, course interest, and preferred timing.",
    },
    {
      step: "02",
      title: "Take a Free 1-on-1 Demo",
      desc: "Attend a free trial class via Zoom or WhatsApp video call with an assigned Male or Female teacher.",
    },
    {
      step: "03",
      title: "Finalize Schedule & Start",
      desc: "Choose flexible days and timings that fit your schedule and start regular 1-on-1 live sessions.",
    },
  ],
};

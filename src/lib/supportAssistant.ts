export type Topic = "courses" | "trial" | "fees" | "schedule" | "teacher" | "beginner" | "duration" | "format" | "safety" | "privacy" | "delivery" | "changes" | "equipment" | "audience";
export interface CourseInfo {
  slug: string; title: string; description: string; audience: string; approach: string;
}
export interface SupportKnowledge {
  courses: CourseInfo[];
  faqs: { id: string; question: string; answer: string }[];
  contactUrl: string;
}
export interface SupportContext { courseSlug?: string; lastTopic?: Topic; }
export interface AnswerBlock { title: string; body: string; href: string; label: string; }
export interface SupportAnswer { blocks: AnswerBlock[]; suggestions: string[]; context: SupportContext; }

const patterns: [Topic, RegExp][] = [
  ["delivery", /\b(sent|send my|delivered|delivery|received|submit|submitted|booked|booking confirmed)\b/],
  ["privacy", /\b(privacy|data|save|saved|storage|delete|deletion|personal information)\b/],
  ["safety", /\b(safe|safety|safeguard|supervis|record|recording|concern|uncomfortable|parent involvement)\b/],
  ["changes", /\b(cancel|cancellation|refund|reschedul|missed|miss a|change a lesson|change my time)/],
  ["fees", /\b(fee|fees|price|prices|pricing|cost|costs|charge|charges|payment|pay|quote|currency|afford|expensive)\b/],
  ["trial", /\b(trial|try a lesson|try it|demo|taster|test class)\b/],
  ["schedule", /\b(time|times|when|days|time zone|timezone|timezones|schedule|timing|timings|available|availability|weekend|weekends|school hours|local time|london|toronto|canada|usa|uk|daylight|evening|morning|slot|slots)\b/],
  ["teacher", /\b(teacher|teachers|female|male|woman|women|qualifications|qualified|experience|language|languages|urdu|english)\b/],
  ["audience", /\b(age|ages|child|children|kids|adult|adults)\b/],
  ["beginner", /\b(beginner|beginners|start|starting|new to|cannot read|cant read|can't read|first letters|never learned|which course|help me choose)\b/],
  ["duration", /\b(how long|duration|minutes|finish|completion|complete the|length|months|years|weeks)\b/],
  ["equipment", /\b(device|internet|connection|microphone|audio|headphones|equipment|laptop|phone|zoom|skype|platform|technology)\b/],
  ["format", /\b(how.*work|one to one|one on one|1:1|group|online lesson|lesson format|class format|how.*learn)\b/],
  ["courses", /\b(course|courses|classes|learn|learning|offer|options|quran|koran)\b/],
];
const coursePatterns: [string, RegExp][] = [
  ["noorani-qaida", /\b(qaida|qayda|qaidah|noorani|nurani|letters|alphabet)\b/],
  ["quran-reading-tajweed", /\b(tajweed|tajwid|pronunciation|recitation|reading)\b/],
  ["quran-memorization", /\b(hifz|hifdh|memorization|memorisation|memorize|memorise|revision)\b/],
  ["quran-meaning-tafseer", /\b(tafsir|tafseer|meaning|translation|understanding)\b/],
];

export function answerQuestion(query: string, previous: SupportContext, knowledge: SupportKnowledge): SupportAnswer {
  const q = query.toLowerCase().normalize("NFKC").replace(/[’‘]/g, "'").replace(/[-–]/g, " ").trim();
  const mentions = coursePatterns.filter(([,pattern]) => pattern.test(q));
  const comparing = mentions.length > 1 || /\b(compare|difference|versus|vs)\b/.test(q);
  const courseSlug = mentions.length === 1 ? mentions[0][0] : comparing ? undefined : previous.courseSlug;
  const course = knowledge.courses.find(item => item.slug === courseSlug);
  const faq = (id: string) => knowledge.faqs.find(item => item.id === id)?.answer ?? "Please discuss the details directly with Qurancademy.";
  const blocks: AnswerBlock[] = [];
  const add = (title: string, body: string, href: string, label: string) => blocks.push({ title, body, href, label });
  if (/\b(human|person|agent|coordinator|contact|whatsapp|phone number|team)\b/.test(q) && !/\b(draft|sent|send|save|privacy|delivery)\b/.test(q)) {
    add("Speak with Qurancademy", "Use our published WhatsApp contact to discuss your learner, ask for a written quote or confirm a trial. Send your question there; this guide does not send messages or confirm bookings.", knowledge.contactUrl, "Open WhatsApp");
    return { blocks, context: previous, suggestions: ["How do I request a trial?", "What should I ask about fees?"] };
  }
  const matched = patterns.filter(([,pattern]) => pattern.test(q));
  let topics = matched.map(([topic]) => topic);

  if (/^(hi|hello|hey|salaam|salam|assalamu alaikum|assalamualaikum|assalam o alaikum|aoa|thanks|thank you)[!.?\s]*$/.test(q)) {
    add("Assalamu Alaikum", "Tell me what you would like to explore. I can help compare courses, explain the trial enquiry, share the fee checklist or help plan lesson questions.", "/courses", "Explore the courses");
    return { blocks, context: previous, suggestions: ["Help me choose a course", "How do I request a trial?", "What should I ask about fees?"] };
  }
  if (topics.length === 0 && /^(and |what about |how about )?(that|it|this|more|tell me more|yes|please)[?.!\s]*$/.test(q)) {
    topics = [previous.lastTopic ?? (course ? "courses" : "beginner")];
  }

  if (mentions.length > 0 && (comparing || topics.length === 0 || topics.includes("courses") || topics.includes("beginner"))) {
    const selected = comparing ? knowledge.courses.filter(item => mentions.length === 0 || mentions.some(([slug]) => slug === item.slug)) : course ? [course] : [];
    for (const item of selected) add(item.title, item.description + " " + item.audience, "/courses/" + item.slug, "Course approach and preparation");
    topics = topics.filter(topic => topic !== "courses" && topic !== "beginner" && topic !== "format");
  } else if (topics.includes("courses")) {
    // A specific topic should be answered before broad words such as "classes".
    if (topics.length > 1 && !/what.*(courses|classes)|which courses|what do you offer/.test(q)) topics = topics.filter(topic => topic !== "courses");
  }

  if (/\bfree\b/.test(q) && !topics.includes("trial") && !topics.includes("fees")) topics.unshift("fees");
  for (const topic of topics.slice(0,4)) {
    switch(topic) {
      case "fees": add(course ? "Fees for " + course.title : "A written quote, before you book", faq("7"), "/pricing", "Open the fee checklist"); break;
      case "trial": add(course ? "Try " + course.title : "Requesting a free trial", faq("2") + " Include the learner’s current level, your city and preferred local times.", "/contact", "Prepare a trial enquiry"); break;
      case "schedule": add("Planning lesson times", faq("6"), "/blog/planning-quran-lessons-across-time-zones", "Plan across time zones"); break;
      case "teacher": add("Discuss the proposed teacher", faq("3") + " The trial is an opportunity to ask how explanations, practice and feedback will work.", "/safety", "Questions to ask before a lesson"); break;
      case "audience": add(course ? "Who this course is for" : "A starting point for children and adults", course ? course.audience : "Discuss the learner’s current level, confidence and available practice time. Children and adults may need different pacing; ask the proposed teacher to assess a suitable starting point rather than choosing only by age.", course ? "/courses/" + course.slug : "/courses", "Discuss a suitable course"); break;
      case "beginner": add("Finding the starting level", faq("4") + " Share what the learner can already do and any previous lessons. Age alone does not decide the course.", "/courses/noorani-qaida", "Explore Noorani Qaida"); break;
      case "duration": add("Lesson length and learning pace", "Lesson length and weekly frequency need to be agreed before booking. There is no fixed completion date: progress depends on the starting level, practice and circumstances." + (course ? " For " + course.title + ", ask how manageable goals and review will be planned." : ""), "/pricing", "Agree lesson length and frequency"); break;
      case "format": case "equipment": add("Preparing for an online lesson", faq("1") + " Test the microphone and speaker before joining, and ask which platform and resources the proposed teacher uses.", "/blog/preparing-for-first-online-quran-class", "Prepare for the first lesson"); break;
      case "safety": add("Parents remain part of the conversation", faq("9") + " Ask whether recording occurs, who can access it and how consent is handled. Pause a lesson and contact the coordinator if you have a concern.", "/safety", "Read parent guidance"); break;
      case "privacy": add("Your information and enquiry", "Questions in this guide stay in the current page session. The enquiry form prepares a draft without saving or submitting it. When you open a WhatsApp draft, the URL containing that message is shared with WhatsApp; you decide whether to press Send.", "/privacy", "Privacy and your enquiry"); break;
      case "delivery": add("A draft is not a confirmed enquiry or booking", faq("8") + " Ask Qurancademy directly to confirm a teacher, trial or regular booking.", "/contact", "Contact Qurancademy"); break;
      case "changes": add("Agree changes before booking", "Ask for written arrangements for cancellations, refunds, missed lessons and rescheduling before paying. These terms must be agreed directly; the website does not set a refund policy or confirm a changed time.", "/terms", "Review lesson terms"); break;
      case "courses":
        if (course) add(course.title, course.description + " " + course.approach, "/courses/" + course.slug, "Explore this course");
        else add("Four learning paths", knowledge.courses.map(item => item.title + ": " + item.description).join("\n\n"), "/courses", "Compare the courses");
        break;
    }
  }
  if (blocks.length === 0) {
    add("Let’s get your question to the right person", "I could not find a specific answer in our published course and planning information. Rephrase your question, choose a topic below or contact Qurancademy for a direct answer. Teacher availability, individual assessments and booking details need direct confirmation.", knowledge.contactUrl, "Ask on WhatsApp");
  }
  const lastTopic = topics.find(topic => topic !== "courses") ?? (blocks[0]?.href.startsWith("/courses") ? "courses" : previous.lastTopic);
  const suggestions = course
    ? ["What are the fees?", "How do I arrange a trial?", "How long does it take?"]
    : ["Help me choose a course", "Can I request a female teacher?", "What times are available?"];
  return { blocks, suggestions, context: { courseSlug, lastTopic } };
}


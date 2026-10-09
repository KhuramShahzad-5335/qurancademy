export interface BlogSection { heading: string; paragraphs: string[]; tips?: string[]; }
export interface BlogPost {
  slug: string; title: string; excerpt: string; publishedAt: string; updatedAt?: string;
  category: string; coverImage: string; coverAlt: string; courseSlug: string;
  relatedSlugs: string[]; sections: BlogSection[];
}
export const blogAuthor = {
  name: "Qurancademy",
  bio: "Practical guides to help parents prepare for online lessons, ask useful questions and organise learning at home. These articles do not replace a teacher's assessment or specialist religious guidance.",
};
export const blogsData: BlogPost[] = [
  {
    "slug": "benefits-of-learning-noorani-qaida-online-for-kids",
    "title": "Starting Noorani Qaida Online: A Practical Guide for Parents",
    "excerpt": "What to ask before a beginner starts, how to set up a lesson, and how to support short practice sessions without rushing your child.",
    "publishedAt": "2026-09-01",
    "updatedAt": "2026-10-09",
    "category": "Getting started",
    "coverImage": "/images/qaida-blue.webp",
    "coverAlt": "Conceptual illustration of a beginner learning desk",
    "courseSlug": "noorani-qaida",
    "relatedSlugs": [
      "choosing-an-online-quran-teacher",
      "preparing-for-first-online-quran-class"
    ],
    "sections": [
      {
        "heading": "Start with what your child can already do",
        "paragraphs": [
          "Before choosing a lesson plan, describe your child's experience honestly. Have they seen Arabic letters before? Can they recognise some independently, or do they remember a page because someone has read it many times? Both observations help a teacher choose a starting point. A child does not need to perform well in an enquiry or trial; the purpose is to understand what support they need.",
          "Avoid comparing your child with a sibling or a friend's child. Age is only part of readiness. Attention, confidence, familiarity with the learning material and comfort speaking to a new adult can all affect a first lesson. Tell the teacher if your child needs extra time to answer or is hesitant to speak on camera."
        ]
      },
      {
        "heading": "Ask what the beginner course will actually involve",
        "paragraphs": [
          "Ask which Qaida the teacher recommends and whether the child needs a printed copy. Check how pages will be shown and how the teacher will hear individual attempts. A one-on-one lesson should give the learner opportunities to try, listen and ask questions, rather than only watch someone read.",
          "You do not need to become a pronunciation expert before helping your child. Ask the teacher for one clear practice task after each lesson and an example of how it should sound. If you are unsure about a sound or correction, note the question for the next lesson instead of guessing."
        ],
        "tips": [
          "Confirm the teaching language and the words the teacher uses for instructions.",
          "Agree a lesson length your child can manage.",
          "Ask how the teacher decides when a page is ready to move on."
        ]
      },
      {
        "heading": "Make the first lesson comfortable",
        "paragraphs": [
          "Check the microphone and speaker before the call. Place the device where your child can see the page and the teacher can hear them without you holding it throughout the lesson. Keep the book, a pencil and a little water nearby. A quiet, familiar space is usually more useful than a complicated setup.",
          "Stay nearby for a younger learner and agree your role with the teacher. You may need to help with the device, but answering every question for your child makes it harder to see what they know. Give them time to try and tell the teacher when a break is needed."
        ]
      },
      {
        "heading": "Support practice without adding pressure",
        "paragraphs": [
          "Use the specific task agreed with the teacher. A short, calm session that your family can repeat is more helpful than an ambitious schedule that causes daily arguments. Try linking practice to an existing routine, such as after a snack, while leaving room for tired days.",
          "Praise something observable: sitting down willingly, attempting a difficult line or asking for help. Avoid promising a reward only for finishing a whole book. Progress can include recognising a new letter independently or feeling less worried about making a mistake."
        ]
      },
      {
        "heading": "Review the fit after a few lessons",
        "paragraphs": [
          "Notice whether instructions are understandable and whether your child gets a chance to respond. Ask what has become easier, what remains difficult and what the next small goal is. If the pace feels too quick, discuss reducing new material. If the sessions repeat without explanation, ask how the teacher is assessing progress.",
          "Before regular lessons, confirm the teacher, timetable, fee and missed-lesson arrangements in writing. Our Noorani Qaida course page gives you questions to start that conversation. This guide is about preparing and supporting learning; pronunciation and reading readiness should be assessed by your teacher."
        ]
      }
    ]
  },
  {
    "slug": "how-to-memorize-quran-at-home-effectively",
    "title": "Planning a Quran Memorization Routine Around School",
    "excerpt": "Build a realistic family routine for Hifz discussions, revision and teacher feedback, without promising a completion date or overloading the school week.",
    "publishedAt": "2026-08-24",
    "updatedAt": "2026-10-09",
    "category": "Learning routines",
    "coverImage": "/images/hifz-blue.webp",
    "coverAlt": "Conceptual illustration of a quiet revision desk",
    "courseSlug": "quran-memorization",
    "relatedSlugs": [
      "planning-quran-lessons-across-time-zones",
      "choosing-an-online-quran-teacher"
    ],
    "sections": [
      {
        "heading": "Begin with an honest picture of the week",
        "paragraphs": [
          "Map the learner's existing commitments before adding a memorization target. Include school, travel, homework, meals, rest and other activities. The remaining gaps are not all equal: a child may technically be free after homework but too tired for careful practice. Ask when they usually feel alert and able to concentrate.",
          "Discuss reading readiness with a teacher rather than choosing a memorization programme only because of age or enthusiasm. Explain previous learning and any passages already practised. A teacher can help decide whether reading support should come first or continue alongside memorization."
        ]
      },
      {
        "heading": "Agree goals and revision together",
        "paragraphs": [
          "Ask the teacher how new learning and older material will be balanced. A plan should explain what to practise between lessons and how recall will be checked. The amount of new material needs to be manageable alongside revision, not treated as the only measure of progress.",
          "If the teacher uses terms such as Sabaq, Sabqi or Manzil, ask them to explain what each means in your learner's particular plan. Do not assume every teacher uses the same intervals or workload. Write down the task in plain language so the learner and parent know what to do."
        ],
        "tips": [
          "Agree a small initial goal and a date to review whether it is realistic.",
          "Ask what to do if the learner cannot recall the assigned material.",
          "Make room for revision before increasing new work."
        ]
      },
      {
        "heading": "Keep a simple practice record",
        "paragraphs": [
          "A notebook is enough. Record the date, the passage agreed with the teacher, what was practised and one question to bring to the next lesson. The purpose is to make feedback easier, not to create a public scorecard or compare children.",
          "Let the learner describe what felt difficult. Perhaps they lose their place, struggle with a transition or need another demonstration. These observations are more useful than marking the whole session as good or bad. Ask the teacher which difficulties need a change in the plan."
        ]
      },
      {
        "heading": "Plan for school pressure and missed days",
        "paragraphs": [
          "Exam weeks, illness and family events will interrupt routines. Ask the teacher how to adjust the workload in advance. A lighter week or a revision-focused lesson may be more sustainable than trying to recover missed work in a long, tiring session.",
          "Avoid setting a fixed completion date before you understand the learner's pace. A teacher can discuss goals, but retention and careful recitation vary between learners. Celebrate consistency and honest feedback instead of treating every slower week as failure."
        ]
      },
      {
        "heading": "Make parent support practical",
        "paragraphs": [
          "For a child, agree when a parent will be nearby and how questions go to the teacher. Parents can help organise materials and protect practice time without pretending to judge every pronunciation detail. Ask the teacher for approved guidance when you are unsure.",
          "Before paying for a regular schedule, confirm class length, weekly frequency, available local times and cancellation terms. Use a trial to see whether the proposed routine fits your family. This guide helps with planning; your teacher should assess recitation, suitability and the memorization workload."
        ]
      }
    ]
  },
  {
    "slug": "understanding-basic-rules-of-tajweed-for-beginners",
    "title": "Starting Tajweed Lessons: What Parents Should Ask",
    "excerpt": "A parent-friendly checklist for reading assessment, teacher demonstrations, practice tasks and progress discussions before beginning Tajweed lessons.",
    "publishedAt": "2026-08-10",
    "updatedAt": "2026-10-09",
    "category": "Choosing a course",
    "coverImage": "/images/tajweed-blue.webp",
    "coverAlt": "Conceptual illustration of a book and listening equipment",
    "courseSlug": "quran-reading-tajweed",
    "relatedSlugs": [
      "benefits-of-learning-noorani-qaida-online-for-kids",
      "preparing-for-first-online-quran-class"
    ],
    "sections": [
      {
        "heading": "Ask for an assessment, not a label",
        "paragraphs": [
          "A learner who can read familiar passages may still need help with unfamiliar text. Before choosing the pace of a Tajweed course, ask the teacher to listen and explain the starting point. Share what the learner finds difficult, including sounds they hesitate over or places where they often lose their position.",
          "Try not to describe a child as a weak reader in front of them. Use specific observations instead: they recognise letters but need time joining them, or they read more comfortably when someone models the line first. That gives a teacher useful information without making the learner feel judged."
        ]
      },
      {
        "heading": "Check how the teacher demonstrates and responds",
        "paragraphs": [
          "During a trial, notice whether audio is clear enough to hear a demonstration. Ask how the teacher will correct an attempt and give the learner another chance. A lesson that names many rules without showing how to practise them can leave a beginner unsure what to do next.",
          "You can ask for explanations in language you and the learner understand. Agree the language of instruction, the reading text and the recitation approach. If specialised terms are introduced, ask for a plain explanation and a small example from the lesson rather than a long list to memorise."
        ]
      },
      {
        "heading": "Let the teacher choose a manageable practice task",
        "paragraphs": [
          "After a lesson, ask for a specific passage or exercise, how often to attempt it and what to pay attention to. The teacher should clarify which resources to use. Avoid mixing multiple online recordings or teaching approaches without asking whether they support the current lesson.",
          "A parent can listen, encourage and note questions. If you are not sure whether an attempt is correct, ask for feedback rather than repeatedly correcting the learner from memory. Written descriptions on a website cannot replace listening and individual pronunciation guidance."
        ],
        "tips": [
          "Keep the agreed book or text ready for every lesson.",
          "Test audio and reduce background noise.",
          "Bring one or two practice questions to the next session."
        ]
      },
      {
        "heading": "Talk about progress in concrete terms",
        "paragraphs": [
          "Ask what the learner can now do with less help and what the next goal is. Progress might include reading a line more steadily, noticing when they need to pause or attempting a sound more confidently. A named next step is more useful than a general promise of fluency.",
          "If the learner is becoming anxious about mistakes, discuss how feedback is delivered. If the pace is too fast, ask whether to reduce new material or return to foundational reading work. Course labels should support learning decisions rather than lock a child into an unsuitable level."
        ]
      },
      {
        "heading": "Confirm the practical arrangements",
        "paragraphs": [
          "Before regular lessons, agree the teacher, time, length, fee and missed-session policy. For children, discuss parent supervision and how communication will be handled. Use our course and parent guidance pages to prepare your questions.",
          "This article explains how to prepare for a course discussion. It does not teach pronunciation rules, issue religious rulings or claim specialist review. Ask an appropriately qualified teacher for recitation instruction and take questions about religious rulings to a suitable scholar."
        ]
      }
    ]
  },
  {
    "slug": "choosing-an-online-quran-teacher",
    "title": "How to Choose an Online Quran Teacher for Your Child",
    "excerpt": "Use a trial to ask useful questions, observe teaching style and agree communication, qualifications and lesson terms before committing.",
    "publishedAt": "2026-10-09",
    "category": "For parents",
    "coverImage": "/images/courtyard-blue.webp",
    "coverAlt": "Conceptual illustration of a courtyard with arches and books",
    "courseSlug": "noorani-qaida",
    "relatedSlugs": [
      "preparing-for-first-online-quran-class",
      "planning-quran-lessons-across-time-zones"
    ],
    "sections": [
      {
        "heading": "Start with your learner's needs",
        "paragraphs": [
          "Write down the learner's current level, preferred language and the kind of help you are seeking. A complete beginner, a child rebuilding confidence and an adult developing a memorization routine may need different teaching approaches. Explain any practical needs, such as a parent staying nearby or a shorter initial session.",
          "Teacher gender preferences, school schedules and language matter, but they do not replace a discussion about fit. Ask which teachers are actually available for your requested times. Avoid deciding solely from a badge, a stock photograph or a large student count."
        ]
      },
      {
        "heading": "Ask about relevant background",
        "paragraphs": [
          "Ask the proposed teacher to describe their relevant Quran learning and teaching experience. If qualifications are important to your decision, ask how they can be checked and whether they relate to the course you need. A title alone does not explain teaching style or experience with a particular age group.",
          "Ask which resources and teaching language will be used. If the course involves meanings or interpretation, discuss the teacher's appropriate background and the texts they follow. Do not assume every teacher is qualified to answer every religious question."
        ]
      },
      {
        "heading": "Observe the trial as a learning conversation",
        "paragraphs": [
          "Notice whether your child understands the instructions and has time to respond. A teacher should be able to explain the starting level and give an achievable next step. Look for patient feedback and an opportunity for the learner to try again, rather than judging the trial by how many pages were covered.",
          "After the session, ask your child what felt easy or difficult. If they were shy, consider whether another conversation would help before concluding the teacher is unsuitable. Share observations respectfully and ask how the teacher would adapt future sessions."
        ]
      },
      {
        "heading": "Agree communication and boundaries",
        "paragraphs": [
          "For a child, agree how messages go through a parent or guardian and who will be present during the call. Ask about recording, meeting-link access and how concerns can be raised. A platform choice alone does not establish that all safeguarding checks are in place.",
          "Keep arrangements through the published contact and do not share private documents or credentials casually. If you are uncomfortable with a request, pause and ask why it is needed. Read the parent guidance page and ask the coordinator what procedures actually apply."
        ]
      },
      {
        "heading": "Get the booking terms in writing",
        "paragraphs": [
          "Confirm lesson length, weekly frequency, teacher, language, local time, total fee, currency and cancellation or refund terms. Ask what happens if a teacher changes or either side cannot attend. Do not assume a trial request reserves a recurring slot.",
          "The goal is a workable agreement, not finding a perfect teacher from a checklist. Revisit the fit after the first few sessions and discuss specific concerns. You can use the website enquiry draft to organise questions before sending them through WhatsApp."
        ]
      }
    ]
  },
  {
    "slug": "preparing-for-first-online-quran-class",
    "title": "Preparing for Your Child’s First Online Quran Class",
    "excerpt": "A calm checklist for the device, learning materials, parent involvement and questions to discuss before and after a first online lesson.",
    "publishedAt": "2026-10-09",
    "category": "Getting started",
    "coverImage": "/images/family-blue.webp",
    "coverAlt": "Conceptual illustration of a parent and child at a learning desk",
    "courseSlug": "noorani-qaida",
    "relatedSlugs": [
      "choosing-an-online-quran-teacher",
      "benefits-of-learning-noorani-qaida-online-for-kids"
    ],
    "sections": [
      {
        "heading": "Confirm the session before preparing",
        "paragraphs": [
          "Ask for the agreed teacher, date, local time, platform and expected length. A trial enquiry is not a confirmed session until both sides agree. Check whether you need an account or app for the video platform and obtain the meeting details through the agreed contact.",
          "Tell the teacher that it is the learner's first online lesson and describe their previous experience. Ask which book or resource to have ready. Avoid buying additional materials before you know what the teacher recommends."
        ]
      },
      {
        "heading": "Check sound before the call",
        "paragraphs": [
          "Clear audio matters for a reading lesson. Try the microphone and speaker in the room you plan to use, and check that the device has enough power. If headphones help, choose a comfortable pair the child can use without constant adjustment.",
          "Place the screen where the learner can see it and sit comfortably. Keep notifications and unrelated activities away during the session. A stable device on a table is usually easier than a phone that needs to be held throughout the call."
        ]
      },
      {
        "heading": "Keep the setup simple",
        "paragraphs": [
          "Put the agreed book, a pencil and any questions nearby. Use a familiar shared space and avoid showing identifying documents in the camera view. A child may need a moment to meet the teacher before attempting a task; do not treat that time as wasted.",
          "Tell your child what will happen in simple language: a teacher will talk with them, listen and help decide a starting point. It is fine not to know an answer. The first lesson is not a test of how much the parent has taught them."
        ],
        "tips": [
          "Have the confirmed meeting link ready, but do not share it publicly.",
          "Join with enough time to check audio.",
          "Agree that a parent will stay nearby for a younger learner."
        ]
      },
      {
        "heading": "Support without taking over",
        "paragraphs": [
          "Ask the teacher what support they need from you. Help with the device when necessary, but allow your child time to attempt the teacher's question. Constantly prompting answers can hide where the learner needs help and make the session feel pressured.",
          "If the child is tired or upset, tell the teacher. A brief pause or simpler task may help. Note technical or teaching questions rather than interrupting every attempt. Agree an appropriate way to discuss feedback at the end."
        ]
      },
      {
        "heading": "Review what you learned from the trial",
        "paragraphs": [
          "Ask the teacher to explain the learner's starting level, suggested next step and any practice task. Ask your child which part felt comfortable and what was confusing. Notice the quality of communication, not only whether the session felt polished.",
          "Before arranging regular lessons, confirm the schedule, fee, language and cancellation terms. Take time to ask unresolved questions. A trial is a chance to explore the fit; it does not oblige you to pay or agree to a schedule you cannot maintain."
        ]
      }
    ]
  },
  {
    "slug": "planning-quran-lessons-across-time-zones",
    "title": "Planning Online Quran Lessons Across UK, US and Canadian Time Zones",
    "excerpt": "Avoid scheduling confusion by sharing your city, checking daylight saving changes and agreeing a routine that fits school and family life.",
    "publishedAt": "2026-10-09",
    "category": "Learning routines",
    "coverImage": "/images/planning-blue.webp",
    "coverAlt": "Conceptual illustration of lesson planning with a clock and calendar",
    "courseSlug": "quran-memorization",
    "relatedSlugs": [
      "how-to-memorize-quran-at-home-effectively",
      "preparing-for-first-online-quran-class"
    ],
    "sections": [
      {
        "heading": "Share a city, not just a country",
        "paragraphs": [
          "The US and Canada have multiple time zones, and a country name alone may not identify your local time. Include your city or a recognised time-zone name when asking about lessons. If you travel regularly, explain which location the routine normally follows.",
          "Write preferred times as local times and say whether you mean morning or evening. For example, a request for Tuesday at 6 pm in Toronto is clearer than asking for an evening class. Ask the coordinator to confirm the same appointment in both the learner's and teacher's local time."
        ]
      },
      {
        "heading": "Plan around energy as well as availability",
        "paragraphs": [
          "A free gap after school may coincide with hunger, travel or homework. Think about when the learner can concentrate, not only when a calendar is empty. Offer a few realistic options rather than committing to every weekday before you have tried the routine.",
          "Ask what lesson lengths and frequencies are available. Regularity is easier when the whole family understands the arrangement. Make a note of school clubs, weekend commitments and the time needed to set up the device."
        ]
      },
      {
        "heading": "Check changes to the clock",
        "paragraphs": [
          "Some locations change their clocks seasonally and others do not. Different countries may change on different dates, so a recurring local lesson can shift relative to a teacher elsewhere. Do not assume one fixed time difference works throughout the year.",
          "Use the calendar or time-zone tools already available on your device to check the actual session date. Ask the teacher to reconfirm around clock changes. This guide does not publish a universal conversion table because the correct answer depends on both locations and the date."
        ],
        "tips": [
          "Record the agreed time with a city or time-zone name.",
          "Check the next lesson after a clock change or trip.",
          "Ask which local time stays fixed if the two locations change differently."
        ]
      },
      {
        "heading": "Agree how missed lessons are handled",
        "paragraphs": [
          "Discuss holidays, travel, illness and school examinations before regular lessons start. Ask how much notice is needed, whether a replacement session is possible and how missed lessons affect the fee. These arrangements should be written down rather than assumed.",
          "If a proposed schedule feels too demanding, say so early. A sustainable routine leaves room for practice and rest. Teacher availability must be checked; a request for after-school or weekend lessons is not a guarantee of that slot."
        ]
      },
      {
        "heading": "Keep one clear record",
        "paragraphs": [
          "Save the confirmed timetable in a place the parent and learner can access. Include the teacher contact, platform, lesson length and any agreed practice time. Set a reminder with the correct location or time-zone setting if your calendar supports it.",
          "Use our enquiry form to prepare your city, course and preferred times for WhatsApp. Ask for a written confirmation of the schedule, teaching language and fees before booking. A clear starting agreement prevents more confusion than a complicated timetable built on unconfirmed availability."
        ]
      }
    ]
  }
];
export function readingTime(post: BlogPost) {
  const words = [post.excerpt, ...post.sections.flatMap(section => [section.heading, ...section.paragraphs, ...(section.tips || [])])].join(" ").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date));
}

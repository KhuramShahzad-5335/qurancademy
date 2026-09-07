import { siteConfig } from "../content/site.config";

// MUI Icons
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import GroupsIcon from '@mui/icons-material/Groups';
import BalanceIcon from '@mui/icons-material/Balance';
import PhoneWhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PageHero from "../components/common/pageHero";

export const metadata = {
  title: "About Us | Qurancademy",
  description: "Learn about Qurancademy — certified male and female Quran tutors delivering 1-on-1 Tajweed, Qaida, Hifz, and Islamic studies globally.",
};

const stats = [
  { label: "Active Students", value: "1,200+", icon: GroupsIcon },
  { label: "Certified Tutors", value: "50+", icon: SchoolIcon },
  { label: "Countries Served", value: "15+", icon: PublicIcon },
  { label: "Satisfaction Rate", value: "99%", icon: VerifiedUserIcon },
];

const values = [
  {
    title: "Authentic Tajweed & Makharij",
    description: "We prioritize precise Arabic pronunciation and classical Tajweed rules, taught directly by certified Hafiz and Aalima staff.",
    icon: MenuBookIcon,
  },
  {
    title: "1-on-1 Personalized Attention",
    description: "Every student learns at their own pace with tailored lesson plans instead of crowded group classrooms.",
    icon: SelfImprovementIcon,
  },
  {
    title: "24/7 Global Scheduling",
    description: "Flexible class hours suited for students across the UK, USA, Canada, Australia, and Middle East time zones.",
    icon: AccessTimeIcon,
  },
  {
    title: "Dedicated Female Tutors",
    description: "Qualified female Aalima tutors available for sisters and young children to ensure comfort and modesty.",
    icon: BalanceIcon,
  },
];

const teacherQualifications = [
  "Certified Sanad Holders and Hafiz-e-Quran",
  "Graduates from recognized Islamic institutes (Wifaq-ul-Madaris / Al-Azhar discipline)",
  "Fluent in English, Urdu, and Arabic communication",
  "Trained in online teaching tools (Zoom, Skype, Digital Quran Boards)",
  "Background verified for safe, child-friendly learning environments",
];

const processSteps = [
  { step: "01", title: "Book a Free Demo", desc: "Contact us on WhatsApp to schedule a complimentary 1-on-1 trial class." },
  { step: "02", title: "Teacher Allocation", desc: "We match you or your child with a male or female teacher based on preferences." },
  { step: "03", title: "Assessment & Schedule", desc: "The tutor evaluates starting levels and establishes a convenient weekly timetable." },
  { step: "04", title: "Begin Regular Lessons", desc: "Start regular online classes with monthly progress updates provided to parents." },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-20">
      
      <PageHero
        eyebrow="About Qurancademy"
        title="Empowering Quranic Learning Across the Globe"
        description="Qurancademy is a premier online Quran teaching platform dedicated to delivering authentic Quranic education with Tajweed, Hifz, and Islamic studies to students of all ages worldwide."
        asideValue="15+"
        asideLabel="countries served"
      />

      {/* 2. Key Metrics Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bw-card p-6 text-center bg-neutral-900/60 border border-neutral-800 rounded-xl">
              <Icon className="text-white text-3xl mb-2" />
              <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          );
        })}
      </section>

      {/* 3. Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bw-card p-8 bg-neutral-900/40 border border-neutral-800 rounded-2xl space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <MenuBookIcon className="text-neutral-300" />
            Our Mission
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            To make high-quality Quranic education accessible to every Muslim home, regardless of geographical location. We combine classical Tajweed principles with modern video conferencing tools to nurture spiritual growth and love for the Holy Quran.
          </p>
        </div>

        <div className="bw-card p-8 bg-neutral-900/40 border border-neutral-800 rounded-2xl space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <PublicIcon className="text-neutral-300" />
            Our Vision
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            To be the most trusted international online Islamic learning institute, known for certified tutors, flexible scheduling, structured curriculum, and child-safe interactive teaching techniques.
          </p>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Why Choose Qurancademy?</h2>
          <p className="text-neutral-400 text-sm mt-2">Built around quality, discipline, and student convenience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bw-card p-6 bg-neutral-900/80 border border-neutral-800 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-lg text-white shrink-0">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-neutral-400 text-sm mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Tutors & Staff Standards */}
      <section className="bw-card p-8 md:p-10 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <VerifiedUserIcon className="text-white" />
            Our Certified Faculty
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            We maintain strict selection standards when hiring male and female Quran instructors.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-4 pt-2">
          {teacherQualifications.map((qualification, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
              <TaskAltIcon className="text-neutral-400 shrink-0 text-lg mt-0.5" />
              <span>{qualification}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. How It Works (4 Steps) */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">How to Get Started</h2>
          <p className="text-neutral-400 text-sm mt-2">Start your online Quran learning journey in four simple steps.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bw-card p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl space-y-3 relative">
              <span className="text-xs font-mono font-bold text-neutral-500 bg-neutral-800/80 px-2.5 py-1 rounded">
                STEP {step.step}
              </span>
              <h3 className="text-lg font-bold text-white pt-1">{step.title}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Direct WhatsApp CTA Banner */}
      <section className="bw-card text-center p-10 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
        <h2 className="text-3xl font-extrabold text-white">Start Your Free Demo Class Today</h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
          Experience our 1-on-1 live teaching methodology firsthand. Message us on WhatsApp to book a complimentary trial session for you or your children.
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href={`${siteConfig.whatsappLink}&text=${encodeURIComponent("Assalamu Alaikum! I would like to book a free demo Quran class.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bw-button-primary inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg transition-transform active:scale-95"
          >
            <PhoneWhatsAppIcon />
            Book Free Demo on WhatsApp
            <ArrowForwardIcon className="text-sm" />
          </a>
        </div>
      </section>

    </main>
  );
}
import { siteConfig } from "./content/site.config";
import Link from "next/link";

// MUI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import AutoBooksIcon from "@mui/icons-material/AutoStories";
import TranslateIcon from "@mui/icons-material/Translate";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GoogleMap from "./components/contact/locationMap";

// Map course codes or index to relevant icons
const getCourseIcon = (code: string) => {
  switch (code) {
    case "01":
      return <MenuBookIcon className="text-text-white" />;
    case "02":
      return <RecordVoiceOverIcon className="text-text-white" />;
    case "03":
      return <AutoBooksIcon className="text-text-white" />;
    case "04":
      return <TranslateIcon className="text-text-white" />;
    default:
      return <SchoolIcon className="text-text-white" />;
  }
};

// Map step index to process icons
const getStepIcon = (index: number) => {
  switch (index) {
    case 0:
      return <ChatIcon className="text-text-white text-2xl" />;
    case 1:
      return <OndemandVideoIcon className="text-text-white text-2xl" />;
    case 2:
      return <EventAvailableIcon className="text-text-white text-2xl" />;
    default:
      return <SchoolIcon className="text-text-white text-2xl" />;
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[#07100e] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_38%,rgba(16,185,129,0.18),transparent_26%),radial-gradient(circle_at_15%_80%,rgba(45,212,191,0.09),transparent_24%),linear-gradient(120deg,#07100e_0%,#0b1714_52%,#07100e_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-7xl items-center gap-12 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-16 lg:pt-0">
          <div className="max-w-3xl animate-[fade-up_700ms_ease-out_both]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" />
              {siteConfig.tagline}
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Learn with purpose<span className="text-emerald-300">.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-emerald-50/65 sm:text-lg">
              Live, one-on-one Quran classes with trusted male and female teachers. Build a lasting connection with the Quran from wherever you are.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-bold text-[#07100e] shadow-[0_12px_40px_rgba(52,211,153,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-emerald-200">
                <WhatsAppIcon style={{ fontSize: 20 }} />
                Book a free class
                <ArrowForwardIcon style={{ fontSize: 18 }} />
              </a>
              <Link href="#courses" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:border-emerald-300/40 hover:text-white">
                Explore courses
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[390px] lg:block">
            <div className="absolute right-[12%] top-[12%] h-72 w-72 rounded-full border border-emerald-200/20 bg-emerald-200/[0.04] shadow-[0_0_100px_rgba(52,211,153,0.12)]" />
            <div className="absolute right-[25%] top-[25%] flex h-48 w-48 items-center justify-center rounded-full border border-emerald-200/25 bg-[#10231e]/80 text-center shadow-2xl backdrop-blur-sm">
              <div><span className="block text-5xl font-black tracking-tight text-emerald-200">1:1</span><span className="mt-1 block text-xs uppercase tracking-[0.2em] text-emerald-50/55">live learning</span></div>
            </div>
            <div className="absolute bottom-4 right-0 max-w-[230px] rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
              <p className="text-3xl font-black text-white">24/7</p>
              <p className="mt-1 text-sm leading-5 text-emerald-50/55">Flexible hours for every family and timezone.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-emerald-50/40 sm:left-8 lg:left-10">
          <span className="h-px w-10 bg-emerald-300/40" /> Scroll to discover
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="py-20 px-4 max-w-6xl mx-auto border-b border-neutral-800/80"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Quran Courses
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Tailored learning programs for all age groups and levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.courses.map((course) => (
            <div
              key={course.code}
              className="bw-card p-6 bg-neutral-900/40 border border-neutral-800/80 hover:border-emerald-500/40 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/10 group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neutral-800/80 border border-neutral-700/50 rounded-xl transition-transform duration-200">
                      {getCourseIcon(course.code)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white transition-colors">
                        {course.title}
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">
                        Course {course.code}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-950 border border-neutral-800/90 text-neutral-300 px-2.5 py-1 rounded-lg font-medium"
                    >
                      • {topic}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`${siteConfig.whatsappLink}&text=Assalamu%20Alaikum%21%20I%20want%20to%20ask%20about%20${encodeURIComponent(course.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 pt-4 border-t border-neutral-800/60 text-xs font-semibold text-text-white hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Inquire via WhatsApp</span>
                <ArrowForwardIcon className="text-sm transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Small Team of Teachers */}
      <section
        id="teachers"
        className="py-20 px-4 max-w-6xl mx-auto border-b border-neutral-800/80"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Meet Our Teachers
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Qualified, verified Hafiz & Aalima staff
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bw-card p-6 bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl text-center flex flex-col items-center transition-all duration-300"
            >
              {/* Teacher Avatar Container */}
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-400 shadow-inner">
                  {teacher.name[0]}
                </div>
                <div
                  className="absolute -bottom-1 -right-1 p-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-text-white"
                  title="Verified Teacher"
                >
                  <VerifiedUserIcon style={{ fontSize: 16 }} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                {teacher.qualification}
              </p>

              <div className="mt-3 py-1 px-3 bg-neutral-950/80 border border-neutral-800/80 rounded-lg text-xs text-neutral-300 font-medium">
                Specialist:{" "}
                <span className="text-text-white">
                  {teacher.specialization}
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs bg-neutral-800/60 border border-neutral-700/50 text-neutral-300 px-3 py-1.5 rounded-full font-medium">
                <PersonIcon
                  style={{ fontSize: 14 }}
                  className="text-neutral-400"
                />
                <span>
                  {teacher.gender} Teacher • {teacher.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Step Process */}
      <section id="how-it-works" className="py-20 px-4 max-w-6xl mx-auto border-b border-neutral-800/80">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            How to Get Started
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            No complicated forms — chat directly with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.steps.map((step, idx) => (
            <div
              key={step.step}
              className="bw-card p-6 bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl relative overflow-hidden transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="p-3 bg-neutral-800/80 border border-neutral-700/50 rounded-xl">
                  {getStepIcon(idx)}
                </div>
                <span className="text-3xl font-mono font-extrabold text-neutral-700/60">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-20 border-b border-neutral-800/80">
        <GoogleMap />
      </div>
    </main>
  );
}

import { siteConfig } from "./content/site.config";

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
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"; // Certified Teachers (Male & Female)
import GroupsIcon from "@mui/icons-material/Groups"; // Active Students
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; // 1-on-1 Free Demo
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // 24/7 Flexible Hours

const getStatIcon = (index: number) => {
  switch (index) {
    case 0:
      return <PeopleAltIcon className="text-emerald-400 text-2xl" />;
    case 1:
      return <GroupsIcon className="text-emerald-400 text-2xl" />;
    case 2:
      return <Person2OutlinedIcon className="text-emerald-400 text-2xl" />;
    case 3:
      return <AccessTimeIcon className="text-emerald-400 text-2xl" />;
    default:
      return null;
  }
};

// Map course codes or index to relevant icons
const getCourseIcon = (code: string) => {
  switch (code) {
    case "01":
      return <MenuBookIcon className="text-emerald-400" />;
    case "02":
      return <RecordVoiceOverIcon className="text-emerald-400" />;
    case "03":
      return <AutoBooksIcon className="text-emerald-400" />;
    case "04":
      return <TranslateIcon className="text-emerald-400" />;
    default:
      return <SchoolIcon className="text-emerald-400" />;
  }
};

// Map step index to process icons
const getStepIcon = (index: number) => {
  switch (index) {
    case 0:
      return <ChatIcon className="text-emerald-400 text-2xl" />;
    case 1:
      return <OndemandVideoIcon className="text-emerald-400 text-2xl" />;
    case 2:
      return <EventAvailableIcon className="text-emerald-400 text-2xl" />;
    default:
      return <SchoolIcon className="text-emerald-400 text-2xl" />;
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center border-b border-neutral-800/80">
        <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm">
          <span>🕌</span>
          <span>{siteConfig.tagline}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Learn Quran at Home with Certified Male & Female Teachers
        </h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Interactive 1-on-1 live classes for Noorani Qaida, Nazra with Tajweed,
          Hifz, and Islamic Studies. Start with a free trial class today.
        </p>

        {/* WhatsApp Direct Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto text-base py-3.5 px-8 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-200 shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="text-2xl text-white" />
            <span>Chat on WhatsApp to Book Free Demo</span>
            <ArrowForwardIcon className="text-lg opacity-80" />
          </a>
        </div>

        {/* Restyled Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 bg-neutral-900/50 border border-neutral-800/80 rounded-2xl text-center hover:border-neutral-700/80 hover:bg-neutral-900/80 transition-all duration-200 flex flex-col items-center justify-center group"
            >
              <div className="p-2.5 mb-3 bg-neutral-800/60 border border-neutral-700/40 rounded-xl group-hover:scale-110 transition-transform duration-200">
                {getStatIcon(i)}
              </div>
              <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
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
                    <div className="p-2.5 bg-neutral-800/80 border border-neutral-700/50 rounded-xl group-hover:scale-105 transition-transform duration-200">
                      {getCourseIcon(course.code)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
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
                className="mt-6 pt-4 border-t border-neutral-800/60 text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
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
                  className="absolute -bottom-1 -right-1 p-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400"
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
                <span className="text-emerald-400">
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
      <section id="how-it-works" className="py-20 px-4 max-w-6xl mx-auto">
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
    </main>
  );
}

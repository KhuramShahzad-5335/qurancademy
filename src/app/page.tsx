import { siteConfig } from "./content/site.config";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center border-b border-neutral-800">
        <div className="inline-block bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs px-4 py-1.5 rounded-full mb-6 font-medium">
          🕌 Online Quran Classes for Kids & Adults Worldwide
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Learn Quran at Home with Certified Male & Female Teachers
        </h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Interactive 1-on-1 live classes for Noorani Qaida, Nazra with Tajweed, Hifz, and Islamic Studies. Start with a free trial class today.
        </p>

        {/* WhatsApp Direct Action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bw-button-primary w-full sm:w-auto text-base py-3 px-6"
          >
            Chat on WhatsApp to Book Free Demo →
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="bw-card text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 max-w-6xl mx-auto border-b border-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Quran Courses</h2>
          <p className="text-neutral-400 text-sm mt-2">Tailored learning programs for all age groups and levels</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.courses.map((course) => (
            <div key={course.code} className="bw-card flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">
                    Course {course.code}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm">{course.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
                      • {topic}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={`${siteConfig.whatsappLink}&text=Assalamu%20Alaikum%21%20I%20want%20to%20ask%20about%20${encodeURIComponent(course.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-xs text-neutral-200 underline underline-offset-4 hover:text-white"
              >
                Inquire via WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Small Team of Teachers */}
      <section id="teachers" className="py-20 px-4 max-w-6xl mx-auto border-b border-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Meet Our Teachers</h2>
          <p className="text-neutral-400 text-sm mt-2">Qualified, verified Hafiz & Aalima staff</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.teachers.map((teacher) => (
            <div key={teacher.id} className="bw-card text-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto text-xl font-bold text-white mb-4">
                {teacher.name[0]}
              </div>
              <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">{teacher.qualification}</p>
              <p className="text-xs text-neutral-300 mt-2 font-semibold">Specialist: {teacher.specialization}</p>
              <div className="mt-4 inline-block text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full">
                {teacher.gender} Teacher • {teacher.experience}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Step Process */}
      <section id="how-it-works" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">How to Get Started</h2>
          <p className="text-neutral-400 text-sm mt-2">No complicated forms — chat directly with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.steps.map((step) => (
            <div key={step.step} className="bw-card">
              <span className="text-3xl font-mono font-bold text-neutral-500">{step.step}</span>
              <h3 className="text-lg font-semibold text-white mt-3">{step.title}</h3>
              <p className="text-sm text-neutral-400 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
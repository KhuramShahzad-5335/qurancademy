import PageHero from "../components/common/pageHero";
import { siteConfig } from "../content/site.config";

export const metadata = {
  title: "Terms of Service | Qurancademy",
  description: "The terms that apply to Qurancademy's online Quran classes and website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <PageHero
        eyebrow="Qurancademy Policies"
        title="Terms of Service"
        description="Clear expectations for respectful, flexible, and focused online Quran learning with Qurancademy."
        asideValue="01:1"
        asideLabel="learning terms"
      />

      <article className="bw-card max-w-6xl mx-auto mt-16 p-6 sm:p-10 md:p-12 space-y-10 bg-neutral-900/80 border border-neutral-800 rounded-2xl">
        <div className="border-b border-neutral-800 pb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">Last updated: September 8, 2026</p>
          <p className="mt-4 text-sm leading-7 text-neutral-400">
            These terms apply to the Qurancademy website, our online classes, and conversations used to arrange those classes.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-white">1. Using Qurancademy</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            By visiting our website or booking a class, you agree to use Qurancademy lawfully and respectfully. If you are booking for a child, you confirm that you are their parent or legal guardian and accept these terms on their behalf.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Our learning services</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Qurancademy connects students with online male and female teachers for 1-on-1 Quran and Islamic learning, including Noorani Qaida, Quran reading with Tajweed, Hifz, Tarjuma, and Tafseer. A free demo helps us understand a student&apos;s level and recommend a suitable course, teacher, and schedule. Course availability, teacher allocation, and timetables may change as we improve the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Booking, attendance, and communication</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Please provide accurate contact details and tell us about the learner&apos;s age, level, preferred teacher, and timing. Classes are arranged through the contact details you provide, including WhatsApp, email, or an agreed video platform. Students and guardians should give reasonable notice when they need to reschedule. Any fees, payment timing, or cancellation arrangements will be confirmed before regular lessons begin.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Respectful and safe conduct</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Students, guardians, and teachers must treat one another with respect. Harassment, abusive language, disruptive behavior, impersonation, or misuse of a class or communication channel is not allowed. We may pause or end access to our services when conduct puts a learner, teacher, or the Qurancademy community at risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Content and intellectual property</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Qurancademy&apos;s original lesson plans, written materials, graphics, and website content belong to Qurancademy or their respective owners. They are provided for the enrolled student&apos;s personal learning and may not be copied, sold, published, or redistributed without permission. Students retain ownership of materials they independently create.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Availability and updates</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Online learning depends on internet access and third-party tools, so we cannot guarantee that the website or every class channel will always be available. We may update these terms as Qurancademy grows. The latest version will remain on this page.
          </p>
        </section>

        <section className="border-t border-neutral-800 pt-8">
          <h2 className="text-xl font-semibold text-white">Questions about these terms?</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Contact us at <a className="text-emerald-300 underline underline-offset-4 hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or message us on WhatsApp before booking.
          </p>
        </section>
      </article>
    </main>
  );
}
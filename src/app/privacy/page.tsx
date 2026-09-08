import PageHero from "../components/common/pageHero";
import { siteConfig } from "../content/site.config";

export const metadata = {
  title: "Privacy Policy | Qurancademy",
  description: "How Qurancademy collects, uses, and protects information for online Quran learning.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <PageHero
        eyebrow="Qurancademy Policies"
        title="Privacy Policy"
        description="How we handle the information shared when you explore Qurancademy, book a demo, or arrange online lessons."
        asideValue="100%"
        asideLabel="careful handling"
      />

      <article className="bw-card max-w-4xl mx-auto mt-16 p-6 sm:p-10 md:p-12 space-y-10 bg-neutral-900/80 border border-neutral-800 rounded-2xl">
        <div className="border-b border-neutral-800 pb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">Last updated: September 8, 2026</p>
          <p className="mt-4 text-sm leading-7 text-neutral-400">
            This policy explains what we collect, why we need it, and the choices available to students and parents using Qurancademy.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-white">1. Information you share with us</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            When you contact us or request a demo, you may share your name, email address, WhatsApp or phone number, country or time zone, the learner&apos;s age and current level, preferred teacher, and course interests. We only request payment or billing information when it is needed for an agreed service, and we do not ask you to send passwords or sensitive account credentials through WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Information collected when you browse</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Our hosting and service providers may receive basic technical information such as browser type, device information, approximate location, pages visited, and access times. This helps us keep the website secure, understand which pages are useful, and improve the Qurancademy experience. We do not use this information to identify you personally unless needed to protect the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. How we use information</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            We use information to respond to enquiries, arrange free demos, match learners with suitable male or female teachers, coordinate class times, provide learning updates to a parent or guardian, send service messages, and maintain the safety and reliability of our website. We do not sell personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Children and parent or guardian consent</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            Qurancademy welcomes young learners, but a parent or legal guardian should make enquiries, provide consent, and supervise the child&apos;s account and communications. We do not knowingly collect information directly from a child without appropriate parent or guardian involvement. Please contact us if you believe a child has shared information without consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Sharing and protecting information</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            We share information only with people and providers who need it to deliver the requested service, such as an assigned teacher, hosting provider, communication platform, or payment provider. We use reasonable administrative and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Your choices</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            You may ask what personal information we hold about you, request a correction, ask us to delete information we no longer need, or withdraw from non-essential messages. Some records may need to be retained for service, safety, or legal reasons. We may also rely on third-party privacy settings for WhatsApp, email, video, hosting, and payment services.
          </p>
        </section>

        <section className="border-t border-neutral-800 pt-8">
          <h2 className="text-xl font-semibold text-white">Contact us about privacy</h2>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            For a privacy question or request, email <a className="text-emerald-300 underline underline-offset-4 hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and include enough detail for us to locate your enquiry.
          </p>
        </section>
      </article>
    </main>
  );
}
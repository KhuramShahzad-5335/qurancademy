import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-sm rounded-2xl border border-slate-100">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: September 8, 2026</p>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when registering, such as your name, email address, phone number, payment details, and student learning preferences, alongside standard web analytics data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">2. How We Use Your Information</h2>
            <p>
              Your data is used strictly to schedule classes, connect you with qualified instructors, process subscription payments, track educational progress, and send important service notifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Children&apos;s Privacy</h2>
            <p>
              Protecting the privacy of young learners is essential. We do not knowingly collect personal data from children under 13 without verifiable consent from a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
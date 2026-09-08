import React from 'react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-sm rounded-2xl border border-slate-100">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: September 8, 2026</p>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Quran Academy (quranacademy.vercel.app), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our platform or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">2. Educational Services</h2>
            <p>
              We provide online Islamic and Quranic educational instruction, including Tajweed, Hifz, Tafseer, and Arabic reading. Classes are delivered virtually by qualified instructors. We reserve the right to modify, suspend, or discontinue any course offering at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">3. User Accounts & Registration</h2>
            <p>
              You must provide accurate and complete information when creating an account. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Student Conduct & Minors</h2>
            <p>
              Students are expected to maintain respectful behavior during all sessions. Accounts for minors must be created and monitored by a parent or legal guardian. Disruptive conduct or harassment will result in immediate termination of services without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Intellectual Property</h2>
            <p>
              All curriculum content, videos, graphics, and source codes associated with Quran Academy are our exclusive property and are protected by applicable copyright and intellectual property laws.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
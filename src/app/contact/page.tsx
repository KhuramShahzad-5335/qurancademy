'use client';

import React, { useState, FormEvent } from 'react';

// MUI Icons
import PhoneWhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import { siteConfig } from '../content/site.config';
import GoogleMap from '../components/contact/locationMap';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  submittedAt: string;
}

const courseOptions = [
  "Noorani Qaida for Beginners",
  "Quran Nazra with Tajweed",
  "Quran Hifz (Memorization)",
  "Islamic Studies & Duas",
  "Arabic Language Basics",
  "Other / Inquiry",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: courseOptions[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newSubmission: ContactFormData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // Save submission to localStorage
    const existingData = localStorage.getItem('etutors_contact_submissions');
    const submissions: ContactFormData[] = existingData ? JSON.parse(existingData) : [];
    submissions.push(newSubmission);
    localStorage.setItem('etutors_contact_submissions', JSON.stringify(submissions));

    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: courseOptions[0],
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* 1. Header Section */}
      <div className="text-center border-b border-neutral-800 pb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full inline-block">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Contact eTutors Academy
        </h1>
        <p className="text-neutral-400 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
          Have questions about our 1-on-1 Quran classes or need to schedule a free trial demo? Send us a message or chat with us directly on WhatsApp.
        </p>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact Info & Quick CTAs */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bw-card p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h2>

            {/* WhatsApp */}
            <a
              href={`${siteConfig.whatsappLink}&text=${encodeURIComponent("Assalamu Alaikum! I would like to inquire about Quran classes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/60 rounded-lg transition-colors group"
            >
              <div className="p-2.5 bg-neutral-800 rounded-lg text-white group-hover:scale-105 transition-transform">
                <PhoneWhatsAppIcon />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">WhatsApp Support</span>
                <span className="text-sm font-semibold text-white">Instant Chat & Free Demo</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:support@etutors.pk"
              className="flex items-start gap-4 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/60 rounded-lg transition-colors group"
            >
              <div className="p-2.5 bg-neutral-800 rounded-lg text-white group-hover:scale-105 transition-transform">
                <EmailIcon />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">Email Address</span>
                <span className="text-sm font-semibold text-white">support@etutors.pk</span>
              </div>
            </a>

            {/* Support Hours */}
            <div className="flex items-start gap-4 p-3 border border-neutral-800 rounded-lg">
              <div className="p-2.5 bg-neutral-800/80 rounded-lg text-neutral-300">
                <AccessTimeIcon />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">Class Availability</span>
                <span className="text-sm font-semibold text-white">24/7 Global Flexible Schedules</span>
              </div>
            </div>

            {/* Coverage */}
            <div className="flex items-start gap-4 p-3 border border-neutral-800 rounded-lg">
              <div className="p-2.5 bg-neutral-800/80 rounded-lg text-neutral-300">
                <PublicIcon />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">Global Coverage</span>
                <span className="text-sm font-semibold text-white">UK, USA, Canada, Australia & Worldwide</span>
              </div>
            </div>
          </div>

          <div className="bw-card p-6 bg-neutral-900/40 border border-neutral-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <LocationOnIcon className="text-neutral-400 text-lg" />
              <span>Headquarters</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              eTutors Online Quran Academy, Pakistan & Global Distance Learning Operations.
            </p>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bw-card p-8 bg-neutral-900 border border-neutral-800 rounded-2xl">
            
            <h2 className="text-2xl font-bold text-white mb-1">Send Us a Message</h2>
            <p className="text-neutral-400 text-xs mb-6">
              Fill out the form below and our academic coordinator will contact you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-neutral-800/60 border border-neutral-700 rounded-xl text-center space-y-3">
                <CheckCircleIcon className="text-white text-4xl" />
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-neutral-300 text-xs leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. Your message has been saved. Our team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bw-button-primary text-xs px-4 py-2 mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Mohammad Ali"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7000 000000"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label htmlFor="course" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Course Interested In
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors"
                  >
                    {courseOptions.map((option, idx) => (
                      <option key={idx} value={option} className="bg-neutral-900 text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Message / Preferred Timings
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the student's age, preferred days, or time zone..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bw-button-primary w-full flex items-center justify-center gap-2 py-3 mt-2 text-sm font-semibold rounded-lg"
                >
                  <SendIcon className="text-base" />
                  Submit Inquiry
                </button>

              </form>
            )}

          </div>
        </div>


      </div>
        <GoogleMap />

    </main>
  );
}
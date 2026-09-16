"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/app/content/site.config";
import { reportContactConversion } from "./googleAds";

// Icons (Importing standard MUI icons as used in your codebase)
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SendIcon from "@mui/icons-material/Send";
import PhoneWhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const courseOptions = [
  "Noorani Qaida for Beginners",
  "Quran Reading with Tajweed",
  "Quran Memorization (Hifz)",
  "Islamic Studies & Duas",
  "Translation & Tafseer",
];

export default function FloatingSupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "contact">("chat");

  // AI Chat State
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; text: string }>
  >([
    {
      role: "assistant",
      text: "Assalamu Alaikum! I am the Qurancademy AI assistant. How can I help you today with our courses or schedules?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: courseOptions[0],
    message: "",
  });

  useEffect(() => {
    if (activeTab === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activeTab]);

  // Handle Form Change & Submit
  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reportContactConversion();
    setSubmitted(true);
  };

  // Simple automated free response simulator (can be wired to Google Gemini API free tier)
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isAiThinking) return;

    const userText = inputMessage;
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInputMessage("");
    setIsAiThinking(true);

    // Call free AI endpoint or generate response
    try {
      const responseText = await simulateFreeAiResponse(userText);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: responseText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I apologize, but I am unable to process your request right now. Please message us on WhatsApp for instant assistance!",
        },
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Support & AI Assistant"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        {isOpen ? (
          <CloseIcon className="text-2xl" />
        ) : (
          <ChatIcon className="text-2xl" />
        )}
        {/* <span className="hidden sm:inline font-semibold text-sm">Ask AI / Contact</span> */}
      </button>

      {/* Popover Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[460px] h-[580px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header & Tabs */}
          <div className="bg-neutral-900 border-b border-neutral-800 p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="bg-white text-black text-xs font-mono px-1.5 py-0.5 rounded font-bold">
                  QA
                </span>
                <span className="text-white font-bold text-sm">
                  Qurancademy Support
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <CloseIcon style={{ fontSize: 20 }} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="grid grid-cols-2 gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab("chat")}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                  activeTab === "chat"
                    ? "bg-neutral-800 text-white shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <SmartToyIcon style={{ fontSize: 16 }} />
                <span>AI Assistant</span>
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                  activeTab === "contact"
                    ? "bg-neutral-800 text-white shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <ContactSupportIcon style={{ fontSize: 16 }} />
                <span>Direct Contact</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Free AI Chat */}
          {activeTab === "chat" && (
            <div className="flex-1 flex flex-col justify-between overflow-hidden bg-neutral-950">
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-emerald-600 text-white rounded-br-none"
                          : "bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isAiThinking && (
                  <div className="flex justify-start">
                    <div className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-3.5 py-2 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-3 bg-neutral-900 border-t border-neutral-800 flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about courses, fees, or timing..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                <button
                  type="submit"
                  disabled={isAiThinking}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-xl text-xs font-semibold transition-colors disabled:opacity-50"
                >
                  <SendIcon style={{ fontSize: 16 }} />
                </button>
              </form>
            </div>
          )}

          {/* Tab 2: Direct Contact Channels & User Info Form */}
          {activeTab === "contact" && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-950">
              {/* Direct Channels */}
              <div className="space-y-2">
                <a
                  href={`${siteConfig.whatsappLink}&text=${encodeURIComponent(
                    "Assalamu Alaikum! I would like to inquire about Quran classes.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 rounded-xl transition-colors"
                >
                  <div className="p-2 bg-emerald-600/20 text-emerald-400 rounded-lg">
                    <PhoneWhatsAppIcon style={{ fontSize: 18 }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      WhatsApp Support
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Instant Chat & Free Demo
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:support@qurancademy.pk"
                  className="flex items-center gap-3 p-2.5 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 rounded-xl transition-colors"
                >
                  <div className="p-2 bg-neutral-800 text-neutral-300 rounded-lg">
                    <EmailIcon style={{ fontSize: 18 }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-xs font-semibold text-white">
                      support@qurancademy.pk
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-400 pt-1">
                  <div className="flex items-center gap-1.5 p-2 bg-neutral-900/40 border border-neutral-800/80 rounded-lg">
                    <AccessTimeIcon
                      style={{ fontSize: 14 }}
                      className="text-neutral-400"
                    />
                    <span>24/7 Global Classes</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 bg-neutral-900/40 border border-neutral-800/80 rounded-lg">
                    <PublicIcon
                      style={{ fontSize: 14 }}
                      className="text-neutral-400"
                    />
                    <span>UK, USA, Global</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-white mb-1">
                  Send Us a Message
                </h3>
                <p className="text-neutral-400 text-[11px] mb-3">
                  We will contact you within 24 hours.
                </p>

                {submitted ? (
                  <div className="py-4 text-center space-y-2">
                    <CheckCircleIcon className="text-emerald-500 text-3xl" />
                    <h4 className="text-sm font-bold text-white">
                      Message Received!
                    </h4>
                    <p className="text-neutral-400 text-[11px]">
                      Thank you for reaching out. Our team will get in touch
                      shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-emerald-400 underline pt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-2.5">
                    <div>
                      <label className="block text-[10px] font-mono text-neutral-300 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g. Mohammad Ali"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-mono text-neutral-300 uppercase mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="name@example.com"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-neutral-300 uppercase mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+44 7000 000000"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-neutral-300 uppercase mb-1">
                        Course
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleFormChange}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-neutral-600"
                      >
                        {courseOptions.map((opt, i) => (
                          <option
                            key={i}
                            value={opt}
                            className="bg-neutral-900 text-white"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-neutral-300 uppercase mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Age, preferred timings, time zone..."
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <SendIcon style={{ fontSize: 14 }} />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Footer Location Info */}
              <div className="flex items-center gap-2 text-neutral-400 text-[10px]">
                <LocationOnIcon style={{ fontSize: 14 }} />
                <span>Qurancademy Online.</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Quick keyword matcher (Zero-cost client-side assistant)
async function simulateFreeAiResponse(query: string): Promise<string> {
  const q = query.toLowerCase();
  await new Promise((res) => setTimeout(res, 800));

  if (q.includes("fee") || q.includes("price") || q.includes("cost")) {
    return "Our class packages start with a 3-day free trial! Flexible monthly plans are available depending on classes per week. Contact us on WhatsApp for exact pricing in your currency.";
  }
  if (
    q.includes("course") ||
    q.includes("class") ||
    q.includes("tajweed") ||
    q.includes("hifz")
  ) {
    return "We offer Noorani Qaida for beginners, Quran Tajweed, Hifz (Memorization), Islamic Studies, and Translation. All classes are 1-on-1 with live tutors!";
  }
  if (q.includes("timing") || q.includes("time") || q.includes("schedule")) {
    return "Classes are available 24/7! You can choose your preferred days and times according to your time zone.";
  }
  return "Thank you for asking! We provide 1-on-1 online Quran classes worldwide. You can request a 3-day free trial by submitting the Direct Contact form or messaging us on WhatsApp.";
}

"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Who is this course for?",
    a: "This masterclass is designed for underpaid professionals (like school teachers), ambitious undergraduates, and general freelance writers who want to break free from low-paying gigs and tap into a high-income digital skill. It's perfect for anyone who wants to build a profitable online income entirely behind the scenes — without becoming an influencer or showing their face.",
  },
  {
    q: "How long will I have access?",
    a: "You get Lifetime Access. Once you complete your one-time payment, the entire course library, video lessons, PDF templates, and all future updates are yours to keep forever. You can learn at your own pace and revisit the material whenever you need a refresher.",
  },
  {
    q: "Is there a refund policy?",
    a: "Due to the digital nature of this training and the immediate delivery of all downloadable scripts, pitch templates, and core strategies, all sales are final. We are fully confident that if you implement the step-by-step systems provided, you will have everything you need to see massive results.",
  },
  {
    q: "Do I need prior experience?",
    a: "Not at all. You don't need any prior experience in video editing, YouTube algorithms, or formal scriptwriting. As long as you have a basic grasp of the English language and a willingness to learn, this masterclass will take you from absolute beginner to an elite, highly paid scriptwriter.",
  },
  {
    q: "How long until I get my first client?",
    a: "While individual results depend entirely on your work ethic and implementation, the course includes a dedicated international outreach funnel designed to get you in front of global creators fast. Many dedicated students who consistently apply our direct-pitching frameworks begin securing responses and signing their first clients within 30 to 45 days of launching their system.",
  },
  {
    q: "Do I need a laptop?",
    a: "While you can easily watch all the video lessons and access the community on your mobile phone, having a laptop or computer is highly recommended for the actual writing, editing, and client management processes — to ensure you deliver the highest professional quality to your clients. But you can absolutely start with your phone, earn your first income, and then get yourself a laptop!",
  },
  {
    q: "Is there a community?",
    a: "Yes! When you enrol, you get immediate access to our private, dedicated community network. This is where you can connect with fellow scriptwriters, share winning pitches, get feedback on your work, and stay updated on the latest industry trends and opportunities.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Got Questions?{" "}
            <span className="text-red-600">We&apos;ve Got Answers.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal">
            <div
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-red-400 shadow-md shadow-red-100"
                  : "border-neutral-200 hover:border-red-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-red-50/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-neutral-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-neutral-300 text-neutral-400"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 border-t border-red-100 pt-4">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* Nudge to CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-neutral-500 text-sm mb-4">
            Still have questions? Join now and ask inside our private community.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-200"
          >
            GET ACCESS NOW — ₦17,999
          </a>
        </div>
      </div>
    </section>
  );
}

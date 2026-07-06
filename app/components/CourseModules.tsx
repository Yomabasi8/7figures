"use client";
import { useState } from "react";

const modules = [
  {
    num: "01",
    title: "The 7-Figure Mindset & Market Positioning",
    duration: "~45 min",
    desc: "Discover why YouTube scriptwriting is the highest-paid writing skill online today. Understand how the $500B+ creator economy works, where you fit in, and the exact mindset shift that separates six-figure writers from struggling freelancers.",
    lessons: [
      "The creator economy opportunity",
      "How YouTube scriptwriting actually works",
      "Setting your income targets",
      "The professional writer's mindset",
    ],
  },
  {
    num: "02",
    title: "Script Anatomy: What Makes Viewers Stay",
    duration: "~1 hour",
    desc: "Break down the science of high-retention scripts. Learn the exact structure top YouTube creators pay thousands for, and how to replicate it even as a complete beginner with no formal training.",
    lessons: [
      "Anatomy of a viral YouTube video",
      "The 4-part retention formula",
      "Pacing, tone & voice matching",
      "Your first beginner script exercise",
    ],
  },
  {
    num: "03",
    title: "The Hook Factory: Stop the Scroll",
    duration: "~1.5 hours",
    desc: "Master the art of writing irresistible YouTube hooks using 12 proven formulas used by channels with millions of subscribers. A powerful hook is the single most valuable skill in your scriptwriting toolkit.",
    lessons: [
      "12 hook formulas that drive views",
      "Reverse-engineering top-performing videos",
      "Writing hooks for different niches",
      "Hook testing & rapid iteration",
    ],
  },
  {
    num: "04",
    title: "Niche Mastery & Premium Positioning",
    duration: "~1 hour",
    desc: "Pick the most profitable YouTube niches, position yourself as a high-value specialist, and command rates of $200–$1,500+ per script. Generalists earn peanuts; positioned specialists earn a premium.",
    lessons: [
      "The top 5 highest-paying YouTube niches",
      "Building your specialist identity",
      "Crafting your signature service offer",
      "Rate-setting & pricing psychology",
    ],
  },
  {
    num: "05",
    title: "The Direct Outreach Blueprint",
    duration: "~2 hours",
    desc: "Use our proven cold DM and email templates to find, pitch, and close high-ticket YouTube creators, no portfolio, no prior credits, and no experience required. This single module has helped students land their first international client.",
    lessons: [
      "Where to find premium clients online",
      "Cold DM templates that get real responses",
      "Cold email frameworks that convert",
      "The follow-up sequence that closes deals",
      "Discovery call & closing techniques",
    ],
  },
  {
    num: "06",
    title: "How to use AI as your Co-writer and 5x your results!",
    duration: "~1.5 hours",
    desc: "Build automated workflows, confidently raise your rates, and create recurring client relationships that generate consistent 6–7 figure monthly income. Turn your freelance hustle into a scalable business.",
    lessons: [
      "Productizing your scriptwriting service",
      "Raising rates without losing clients",
      "Building recurring income streams",
      "Managing multiple clients efficiently",
      "Your personal 90-day scale roadmap",
    ],
  },
];

export default function CourseModules() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Course Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            6 Modules. One Transformation.
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto">
            Every module is designed to move you, step by step, from where
            you are right now to signing your first premium client.
          </p>
        </div>

        {/* Module accordion */}
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <div key={i} className="reveal">
            <div
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-red-400 shadow-lg shadow-red-100"
                  : "border-neutral-200 hover:border-red-200"
              }`}
            >
              <button
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-red-50/50 transition-colors group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-red-500 font-extrabold text-lg w-8 shrink-0">
                  {mod.num}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-neutral-900 group-hover:text-red-700 transition-colors text-sm sm:text-base">
                    {mod.title}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">{mod.duration}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-red-500 transition-transform duration-300 shrink-0 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-6 border-t border-red-100 pt-4">
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {mod.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {mod.lessons.map((lesson, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-neutral-600">
                        <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                          <svg
                            className="w-2.5 h-2.5 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {lesson}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* WhatsApp community callout */}
        <p className="reveal mt-8 text-neutral-500 text-sm text-center font-bold">
          Get instant access to our active WhatsApp community the moment you register, track your progress and get real support along the way.
        </p>
      </div>
    </section>
  );
}

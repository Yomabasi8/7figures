const details = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={1.5} />
        <path d="M10 9l5 3-5 3V9z" strokeWidth={1.5} strokeLinejoin="round" />
      </svg>
    ),
    title: "Pre-Recorded Video Lessons",
    body: "Self-paced video lessons you can watch anytime — perfectly designed for flexible, on-the-go learning on your phone or laptop.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 3h5l5 5v11a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z"
        />
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M13 3v5h5" />
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 12v5m0 0l-2-2m2 2l2-2" />
      </svg>
    ),
    title: "Downloadable PDF Templates",
    body: "Ready-to-use script frameworks, cold pitch templates, client onboarding checklists, and more — yours to keep forever.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        />
      </svg>
    ),
    title: "Private WhatsApp Community",
    body: "Immediate access to our exclusive community of fellow scriptwriters for peer support, feedback, and the latest industry updates.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.17 8.15C9.2 7.18 7.84 6.62 6.4 6.62 3.42 6.62 1 9.04 1 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l1.83-1.83 1.83 1.83c.97.97 2.33 1.53 3.77 1.53 2.98 0 5.4-2.42 5.4-5.38s-2.42-5.38-5.4-5.38zm-7.8 8.29c-.79.79-1.85 1.23-2.98 1.23-2.32 0-4.2-1.88-4.2-4.14 0-2.26 1.88-4.14 4.2-4.14 1.13 0 2.19.44 2.98 1.23L12.98 12l-2.18 2.91zM18.6 15.14c-1.13 0-2.19-.44-2.98-1.23L13.44 11l2.18-2.91c.79-.79 1.85-1.23 2.98-1.23 2.32 0 4.2 1.88 4.2 4.14 0 2.26-1.88 4.14-4.2 4.14z" />
      </svg>
    ),
    title: "Lifetime Access",
    body: "Pay once, access forever. All future course updates and added materials are included at no extra cost — ever.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth={1.5} />
        <path d="M11 18h2" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Fully Mobile-Friendly",
    body: "Every piece of content is designed to work beautifully on any device. Start learning and earning from your smartphone right now.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path d="M12 7v5l3 3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Complete in 14 Days",
    body: "Finish the entire program comfortably in just 14 days, dedicating only 3 focused hours of study per day.",
  },
];

export default function CourseDetails() {
  return (
    <section className="py-20 bg-red-50 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(220,38,38,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,38,38,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What&apos;s Inside
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Everything You Need to{" "}
            <span className="text-red-600">Succeed</span>
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg">
            This isn&apos;t just a course, it&apos;s a complete
            business-building system delivered straight to your device.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.map((d, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-6 border border-red-100 hover:border-red-300 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 [&_svg]:w-6 [&_svg]:h-6">
                {d.icon}
              </div>
              <h3 className="font-bold text-neutral-900 mb-1.5">{d.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

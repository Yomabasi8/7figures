const audiences = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.5V19a2 2 0 002 2h14a2 2 0 002-2v-5.5M3 13.5V10a2 2 0 012-2h3.5M3 13.5h18M21 13.5V10a2 2 0 00-2-2h-3.5M8.5 8V6a2 2 0 012-2h3a2 2 0 012 2v2M8.5 8h7"
        />
      </svg>
    ),
    title: "Struggling Teachers & Professionals",
    body: "Educated individuals earning capped salaries who want to transform their English, communication, and storytelling skills into a lucrative remote career.",
    tags: ["Teachers", "Lecturers", "HR Professionals", "Journalists"],
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A9 9 0 0121 12v3.5M12 14l-9-5m9 5v7m-9-12v6.5a9 9 0 006 2.5"
        />
      </svg>
    ),
    title: "Undergraduates & Freelancers",
    body: "Ambitious young adults and general writers ready to specialize in a highly profitable, low-competition niche that pays in strong international currencies.",
    tags: ["Students", "Bloggers", "Content Writers", "Copywriters"],
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 4h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
        />
      </svg>
    ),
    title: "Aspiring Digital Entrepreneurs",
    body: "Anyone who wants to run a profitable online service business from their laptop — no complex tech setups, no product inventory, no public-facing brand.",
    tags: ["Entrepreneurs", "Remote Workers", "Side Hustlers", "Creatives"],
  },
];

export default function WhoIsItFor() {
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
            Is This For You?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            This Masterclass Was Built{" "}
            <span className="text-red-600">Specifically For You</span>
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg">
            If you fall into any of these categories, you&apos;re exactly who
            this program was designed for.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-7 border border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-100/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 [&_svg]:w-6 [&_svg]:h-6">
                {a.icon}
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">{a.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">{a.body}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

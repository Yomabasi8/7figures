const audiences = [
  {
    icon: "👩‍🏫",
    title: "Struggling Teachers & Professionals",
    body: "Educated individuals earning capped salaries who want to transform their English, communication, and storytelling skills into a lucrative remote career.",
    tags: ["Teachers", "Lecturers", "HR Professionals", "Journalists"],
  },
  {
    icon: "🎓",
    title: "Undergraduates & Freelancers",
    body: "Ambitious young adults and general writers ready to specialize in a highly profitable, low-competition niche that pays in strong international currencies.",
    tags: ["Students", "Bloggers", "Content Writers", "Copywriters"],
  },
  {
    icon: "💻",
    title: "Aspiring Digital Entrepreneurs",
    body: "Anyone who wants to run a profitable online service business from their laptop — no complex tech setups, no product inventory, no public-facing brand.",
    tags: ["Entrepreneurs", "Remote Workers", "Side Hustlers", "Creatives"],
  },
];

const notFor = [
  "You're looking for a get-rich-quick scheme with zero effort",
  "You're unwilling to dedicate at least 3 focused hours per day for 14 days",
  "You want results without learning or implementing any new skills",
  "You already earn ₦1M+ monthly and are fully satisfied with your income",
];

export default function WhoIsItFor() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Is This For You?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            This Masterclass Was Built{" "}
            <span className="text-sky-600">Specifically For You</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            If you fall into any of these categories, you&apos;re exactly who
            this program was designed for.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-7 border border-sky-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {a.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{a.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.body}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-sky-50 text-sky-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-sky-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Not-for section */}
        <div className="reveal bg-white/70 border border-slate-200 rounded-2xl p-6">
          <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span>🚫</span> This is NOT for you if...
          </h4>
          <ul className="grid sm:grid-cols-2 gap-3">
            {notFor.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

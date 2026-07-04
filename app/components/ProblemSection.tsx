const problems = [
  {
    num: "01",
    title: "Trapped in a Low-Income Cycle",
    body: "You're grinding at a capped salary or taking low-paying writing gigs, watching your potential slip away while bills keep piling up.",
  },
  {
    num: "02",
    title: "No Idea How to Find Premium Clients",
    body: "You know talent isn't your problem — but you don't know where high-ticket clients are hiding or how to make them choose you over everyone else.",
  },
  {
    num: "03",
    title: "Don't Want to Be an Influencer",
    body: "You want serious online income but the thought of being on camera, building a personal brand, or chasing algorithms feels exhausting and unrealistic.",
  },
  {
    num: "04",
    title: "Overwhelmed by Complex Online Skills",
    body: "You've tried other online skills but they felt too technical, too expensive to start, or too saturated to break into as a newcomer.",
  },
];

export default function ProblemSection() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Does This Sound Familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            You&apos;re Working Hard,{" "}
            <span className="text-red-500">But Getting Nowhere</span>
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg">
            These are the real barriers holding talented writers and
            professionals back from the income they deserve.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal bg-white border border-neutral-200 rounded-2xl p-6 flex gap-4 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 group"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 font-extrabold flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                {p.num}
              </span>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-12 text-center reveal">
          <p className="text-red-700 font-semibold text-lg inline-flex items-center gap-2">
            There is a better way
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}

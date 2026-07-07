const problems = [
  {
    num: "01",
    title: "Trapped in a Low-Income Job",
    body: "You are working a 9-5 or juggling three remote jobs just to make a bit of money, but it's never enough to meet your bills and leaves you broke and depressed at the end of the month.",
  },
  {
    num: "02",
    title: "Don't Want to Post Content on Social Media or Be an Influencer",
    body: "You want to make money online but the thought of being on camera, building a personal brand, or chasing algorithms feels very exhausting and unrealistic.",
  },
  {
    num: "03",
    title: "Overwhelmed by Complex Online Skills",
    body: "You've tried other online skills but they felt too technical, too expensive to start, or too saturated to break into as a newcomer.",
  },
];

export default function ProblemSection() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14 reveal">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Does This Sound Familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            You&apos;re Working Hard but{" "}
            <span className="text-red-500">Your Bank Account Seems to be going Nowhere</span>
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg">
            You have tried many things in the past and don&apos;t know how to
            get the financial change you&apos;re looking for. It feels like
            your story is stuck between any of the three things below.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal bg-white border border-neutral-200 rounded-2xl p-7 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="inline-flex w-10 h-10 rounded-full bg-red-100 text-red-600 font-extrabold items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                {p.num}
              </span>
              <h3 className="font-bold text-neutral-900 text-lg mb-2 leading-snug">{p.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{p.body}</p>
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

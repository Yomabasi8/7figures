const outcomes = [
  "Master the exact script structure that makes YouTube creators pay premium rates",
  "Build a compelling portfolio that attracts international clients — from absolute scratch",
  "Use our direct outreach system to land your first paying client in 30–45 days",
  "Price your services confidently at ₦150,000–₦800,000+ per month",
  "Work from your phone or laptop, from anywhere in the world",
  "Escape low-paying gigs permanently and command what you&apos;re truly worth",
];

const metrics = [
  { label: "Avg. Script Rate", value: "$200–$1,500" },
  { label: "Market Demand", value: "Exploding" },
  { label: "Competition Level", value: "Very Low" },
  { label: "Tech Required", value: "Almost None" },
];

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="reveal-left">
            <span className="inline-block bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Introducing the{" "}
              <span className="text-sky-600">7-Figure YouTube</span>{" "}
              Scriptwriting Masterclass
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              A step-by-step training program that transforms your writing
              skills into a high-income digital business — without showing your
              face, building an audience, or learning complex technology.
            </p>
            <ul className="space-y-3">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual card */}
          <div className="reveal-right">
            <div className="relative bg-gradient-to-br from-sky-600 to-sky-800 rounded-3xl p-8 text-white overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">✍️</div>
                <h3 className="text-2xl font-extrabold mb-3 leading-snug">
                  One Skill.
                  <br />
                  Unlimited Income.
                </h3>
                <p className="text-sky-100 text-sm leading-relaxed mb-6">
                  YouTube creators worldwide are desperately searching for
                  skilled scriptwriters. The demand is massive, the competition
                  is low, and the pay is extraordinary.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {metrics.map((m) => (
                    <div key={m.label} className="bg-white/10 rounded-xl p-3">
                      <p className="text-sky-200 text-xs mb-0.5">{m.label}</p>
                      <p className="font-bold text-white text-sm">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

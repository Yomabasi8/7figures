const audiences = [
  "Struggling 9-5 Worker Looking to Earn Better Online",
  "Freelancers",
  "Undergraduates",
  "NYSC Corpers",
  "Aspiring Digital Entrepreneurs",
];

export default function WhoIsItFor() {
  return (
    <section className="py-12 sm:py-20 bg-red-50 relative overflow-hidden">
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
        <div className="text-center mb-8 sm:mb-14 reveal">
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

        {/* Audience pills */}
        <div className="reveal flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-center gap-3">
          {audiences.map((a, i) => (
            <span
              key={i}
              className="w-full sm:w-auto max-w-xs sm:max-w-none text-center bg-white text-neutral-800 font-semibold text-sm sm:text-base px-5 py-3 rounded-full border-2 border-red-200 hover:border-red-400 hover:shadow-lg hover:shadow-red-100/60 transition-all duration-300"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

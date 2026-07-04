export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Base vignette: soft red glow fading down into black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 560px at 50% 0%, rgba(220,38,38,0.35), transparent 70%)",
        }}
      />
      {/* Fine line grid, fading toward the bottom */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Your Time Is Now
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Your Scriptwriting Career
            <br />
            <span className="text-red-300">Starts With One Decision.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Creators worldwide are hiring right now. Every day you wait is a
            client, a paycheck, and a step toward financial freedom handed to
            someone else.
          </p>

          <a
            href="#pricing"
            className="pulse-cta inline-flex items-center gap-3 bg-white text-red-700 font-extrabold text-lg px-12 py-5 rounded-full transition-all duration-200 hover:bg-red-50 hover:scale-105 hover:shadow-2xl group mb-5"
          >
            YES! GET ACCESS NOW FOR ₦17,999
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

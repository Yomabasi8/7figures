export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 to-sky-800 relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-white/10 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Your Time Is Now
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Stop Watching Others Win.
            <br />
            <span className="text-sky-200">Start Writing Your Own Story.</span>
          </h2>
          <p className="text-sky-100 text-lg mb-4 leading-relaxed">
            For less than ₦18,000, you can unlock a skillset that professionals
            earn ₦300,000–₦1,000,000+ per month from. The only question is:
            are you ready to take action today?
          </p>
          <p className="text-sky-200/80 text-sm mb-10">
            ⚠️ Remember — this ₦17,999 launch price will return to ₦40,000
            once the timer runs out. Lock in your spot now.
          </p>

          <a
            href="#pricing"
            className="pulse-cta inline-flex items-center gap-3 bg-white text-sky-700 font-extrabold text-lg px-12 py-5 rounded-full transition-all duration-200 hover:bg-sky-50 hover:scale-105 hover:shadow-2xl group mb-5"
          >
            YES! GET ACCESS NOW — ₦17,999
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

          <p className="text-sky-200/70 text-sm">
            🔒 Secure Payment · ♾️ Lifetime Access · 📱 Mobile-Friendly
          </p>
        </div>
      </div>
    </section>
  );
}

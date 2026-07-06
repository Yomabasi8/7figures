import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-black pb-24">
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
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* Main hero */}
      <div className="relative z-10 px-4 pt-32 pb-16 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 rounded-full px-4 py-1.5 mb-7">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-200 text-sm font-medium">
              Enrolment Open — Limited Seats Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            How I Went From a{" "}
            <span className="text-white italic underline">₦31,000</span> Salary as a Teacher
            to Making{" "}
            <span className="text-amber-400 underline">14 million+ in 1 Year</span>{" "}
            With a Simple Writing Skill Most Nigerians Don&apos;t Know Exists!
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            And How You Can Use It to Earn Massively Online Without Showing
            Your Face, Creating Content, or Starting a Complicated Digital
            Business.
          </p>

          {/* Price + CTA */}
          <div id="hero-cta" className="animate-fade-up delay-500">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-white/40 text-xl line-through">₦40,000</span>
              <span className="bg-amber-400 text-neutral-900 text-xs font-extrabold px-3 py-1 rounded-full">
                SAVE ₦22,001
              </span>
            </div>
            <div className="text-white text-4xl sm:text-5xl font-extrabold mb-7">
              ₦17,999
              <span className="text-red-300 text-base font-semibold ml-2">
                one-time
              </span>
            </div>
            <a
              href="#pricing"
              className="pulse-cta inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-extrabold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/40 group"
            >
              GET ACCESS NOW
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

        {/* Flyer visual — big closing visual, bleeding past the section edge */}
        <div className="animate-scale-in delay-500 relative mt-16 max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-950/60 ring-1 ring-white/10">
            <Image
              src="/Images/youtube-scriptwriting-masterclass.png"
              alt="The 7-Figure YouTube Scriptwriting Masterclass"
              width={1080}
              height={1350}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

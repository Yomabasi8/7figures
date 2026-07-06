import Image from "next/image";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-neutral-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-amber-400/30">
            🔥 Limited-Time Launch Price
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get Lifetime Access Today
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto text-lg">
            Join the early wave of students securing this exclusive launch
            price before it disappears for good.
          </p>
        </div>

        {/* Flyer image — moved here from the Hero section */}
        <div className="reveal-scale relative max-w-md mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20 ring-1 ring-red-100">
            <Image
              src="/Images/youtube-scriptwriting-masterclass.png"
              alt="The 7-Figure YouTube Scriptwriting Masterclass"
              width={1080}
              height={1350}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-8 text-center">
          <a
            href="#"
            className="pulse-cta inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-extrabold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/40 group"
          >
            GET ACCESS NOW — ₦17,999
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

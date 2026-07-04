const included = [
  "6 core modules with step-by-step video lessons",
  "Downloadable script framework templates",
  "Cold pitch & outreach email templates",
  "Client onboarding checklists & guides",
  "Access to private WhatsApp community",
  "All future updates — free forever",
  "Lifetime, unlimited access on any device",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-amber-400/30">
            🔥 Limited-Time Launch Price
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get Lifetime Access Today
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            Join the early wave of students securing this exclusive launch
            price before it disappears for good.
          </p>
        </div>

        {/* Card */}
        <div className="reveal-scale bg-white rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/20">
          {/* Card top */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-500 p-8 text-center">
            <p className="text-sky-200 text-xs font-bold uppercase tracking-widest mb-3">
              The 7-Figure YouTube Scriptwriting Masterclass
            </p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-white/50 text-xl line-through">₦40,000</span>
              <span className="bg-amber-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full">
                55% OFF
              </span>
            </div>
            <div className="text-6xl font-extrabold text-white mb-1">₦17,999</div>
            <p className="text-sky-200 text-sm">One-time payment · No recurring fees</p>
          </div>

          {/* Card body */}
          <div className="p-8">
            <p className="font-bold text-slate-800 text-xs uppercase tracking-widest mb-5">
              Everything Included:
            </p>
            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center">
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
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="pulse-cta block w-full bg-sky-500 hover:bg-sky-600 text-white text-center font-extrabold text-lg py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-200 mb-4"
            >
              GET ACCESS NOW — ₦17,999
            </a>

            <div className="flex items-center justify-center gap-6 text-slate-400 text-xs mb-6">
              <span>🔒 Secure Checkout</span>
              <span>📱 Instant Access</span>
              <span>♾️ Lifetime Access</span>
            </div>

            {/* Urgency note */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <p className="text-amber-700 text-sm font-semibold">
                ⚠️ Price returns to ₦40,000 after the launch period ends.
              </p>
              <p className="text-amber-600 text-xs mt-1">
                Lock in your spot now while the ₦17,999 discount is still
                active.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

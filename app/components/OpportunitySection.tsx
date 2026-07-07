import Image from "next/image";

export default function OpportunitySection() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="reveal-left">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              The Opportunity
            </span>
            <h2 className="uppercase text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6 leading-tight">
              YouTube <span className="text-red-600">Scriptwriting</span>
            </h2>
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>
                YouTube has over 2.6 billion active users, and there are over
                100 million channels across hundreds of niches and
                sub-niches.
              </p>
              <p>
                Statistics show that about 75%–90% of these channels are
                powered by scriptwriters behind the scenes.
              </p>
              <p className="font-bold text-neutral-900">
                Why is this a thriving industry?
              </p>
              <p>
                YouTube pays creators through ad revenue, this is called
                YouTube monetization. The more views creators get, the more
                money they make.
              </p>
              <p>
                Creators are constantly trying to grow their channels to get
                more views and make more money, so they hire scriptwriters
                and pay them a premium price in dollars.
              </p>
              <p>
                And this is how you can get to earn{" "}
                <span className="font-extrabold text-red-600">MASSIVELY</span>{" "}
                with just the single skill of YouTube Scriptwriting.
              </p>
            </div>
          </div>

          {/* Right: testimonial image */}
          <div className="reveal-right flex justify-center">
            <div className="w-[92%] max-w-sm lg:max-w-[260px] rounded-2xl overflow-hidden shadow-xl shadow-red-100 ring-1 ring-red-100">
              <Image
                src="/Images/cyrus-dogo-payment-screenshot.jpg"
                alt="Real payment received by a scriptwriting client"
                width={540}
                height={1230}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

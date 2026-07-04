"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const DEADLINE = new Date("2026-07-07T23:59:59");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HeroSection() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = DEADLINE.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        mins: Math.floor((diff % 3_600_000) / 60_000),
        secs: Math.floor((diff % 60_000) / 1_000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.mins },
    { label: "Secs", value: time.secs },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      {/* Urgency top bar */}
      <div className="relative z-10 bg-amber-500/20 border-b border-amber-400/30 py-2.5 px-4 text-center">
        <p className="text-amber-300 text-sm font-semibold">
          🔥 EARLY BIRD OFFER — Save ₦22,001 Today! Spots Are Limited at ₦17,999
        </p>
      </div>

      {/* Main hero */}
      <div className="relative z-10 flex-1 flex items-center px-4 py-16 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-200 text-sm font-medium">
                Enrolment Open — Limited Seats Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Turn Your{" "}
              <span className="text-sky-300">Writing Skills</span> Into a{" "}
              <span className="relative inline-block">
                <span className="text-amber-400">7-Figure Income</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-amber-400/40 rounded-full" />
              </span>{" "}
              — Without Showing Your Face
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up delay-200 text-sky-100/90 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              The complete step-by-step masterclass that teaches you how to write
              high-paying YouTube scripts, command premium international rates,
              and land global clients — entirely from your laptop or phone.
            </p>

            {/* Bullets */}
            <div className="animate-fade-up delay-300 flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {[
                "✅ No prior experience needed",
                "✅ No face-showing required",
                "✅ Works from your smartphone",
              ].map((b) => (
                <div
                  key={b}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
                >
                  {b}
                </div>
              ))}
            </div>

            {/* Countdown */}
            <div className="animate-fade-up delay-400 mb-10">
              <p className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
                ⏰ Early Bird Price Expires In:
              </p>
              {mounted && (
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                  {units.map(({ label, value }, i) => (
                    <div key={label} className="flex items-center gap-2 sm:gap-4">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
                        <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums leading-none">
                          {pad(value)}
                        </div>
                        <div className="text-sky-300 text-[10px] font-bold uppercase tracking-widest mt-1.5">
                          {label}
                        </div>
                      </div>
                      {i < 3 && (
                        <span className="text-sky-300 text-2xl font-extrabold leading-none">
                          :
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price + CTA */}
            <div className="animate-fade-up delay-500">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <span className="text-white/40 text-xl line-through">₦40,000</span>
                <span className="bg-amber-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full">
                  SAVE ₦22,001
                </span>
              </div>
              <div className="text-white text-4xl sm:text-5xl font-extrabold mb-7">
                ₦17,999
                <span className="text-sky-300 text-base font-semibold ml-2">
                  one-time
                </span>
              </div>
              <a
                href="#pricing"
                className="pulse-cta inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/40 group"
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
              <p className="text-sky-300/60 text-sm mt-4">
                🔒 Secure one-time payment · Lifetime access · Instant delivery
              </p>
            </div>
          </div>

          {/* Flyer visual */}
          <div className="animate-scale-in delay-200 hidden lg:block">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
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
      </div>

      {/* Wave divider */}
      <div className="relative z-10 -mb-1">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 70 L1440 70 L1440 0 C1080 70 360 70 0 0 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

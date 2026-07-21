"use client";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const footer = document.querySelector("footer");
    if (!heroCta || !footer) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    const footerObserver = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { threshold: 0 }
    );
    heroObserver.observe(heroCta);
    footerObserver.observe(footer);
    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !atFooter;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-red-900/50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-2 sm:gap-3">
          <span className="text-white font-extrabold text-lg sm:text-2xl">₦17,999</span>
          <span className="text-white/40 text-sm line-through">₦40,000</span>
        </div>
        <a
          href="https://nestuge.com/youtubescriptwritingmasterclass"
          className="shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:scale-105"
        >
          GET ACCESS NOW
        </a>
      </div>
    </div>
  );
}

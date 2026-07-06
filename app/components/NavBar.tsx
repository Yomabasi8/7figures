"use client";
import { useState, useEffect } from "react";

const links = ["About", "Modules", "Pricing"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-red-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span
          className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${
            scrolled ? "text-red-700" : "text-white"
          }`}
        >
          7-Figure Scripts™
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-200 hover:text-red-400 ${
                scrolled ? "text-neutral-600" : "text-white/85"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-neutral-800 hover:bg-neutral-100" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-white/97 backdrop-blur-md border-t border-red-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 shadow-lg" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-700 font-medium py-1 hover:text-red-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

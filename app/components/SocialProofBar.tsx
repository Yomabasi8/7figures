"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 500, suffix: "+", label: "Scripts Written by Alumni" },
  { end: 14, suffix: " Days", label: "To Complete the Program" },
  { end: 6, suffix: "", label: "Power-Packed Modules" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const duration = 1600;
          const steps = 60;
          const step = end / steps;
          let cur = 0;
          const id = setInterval(() => {
            cur += step;
            if (cur >= end) {
              setCount(end);
              clearInterval(id);
            } else {
              setCount(Math.floor(cur));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-extrabold text-red-600">
      {count}
      {suffix}
    </div>
  );
}

export default function SocialProofBar() {
  return (
    <section className="py-14 bg-white border-b border-red-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="group">
              <Counter end={s.end} suffix={s.suffix} />
              <p className="text-neutral-500 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

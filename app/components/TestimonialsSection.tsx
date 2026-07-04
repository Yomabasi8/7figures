const placeholders = [
  { initials: "A.O.", label: "Student Result · Lagos, Nigeria" },
  { initials: "B.C.", label: "Student Result · Abuja, Nigeria" },
  { initials: "E.N.", label: "Student Result · Port Harcourt, Nigeria" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Student Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Real People.{" "}
            <span className="text-sky-600">Real Results.</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Here&apos;s what students are saying after implementing what they
            learned inside the masterclass.
          </p>
        </div>

        {/* Testimonial slots — replace with screenshots/videos when ready */}
        <div className="grid sm:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className="reveal bg-sky-50 border border-sky-100 rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Media placeholder */}
              <div className="flex-1 min-h-[120px] bg-sky-100 rounded-xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-sky-200 text-sky-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium text-center leading-tight px-2">
                  Testimonial screenshot / video
                  <br />
                  coming soon
                </span>
              </div>

              {/* Student info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {p.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{p.initials}</p>
                  <p className="text-slate-400 text-xs">{p.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-6 reveal">
          📸 Screenshots &amp; video testimonials will be added here shortly.
        </p>
      </div>
    </section>
  );
}

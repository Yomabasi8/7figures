import VideoWithPlayButton from "./VideoWithPlayButton";

const outcomes = [
  "Master the exact script structure that makes YouTube creators pay premium rates",
  "Build a compelling portfolio that attracts international clients",
  "How to use AI as your Co-writer and 5x your results",
  "Use our direct outreach system to land your first paying client in 30–45 days",
  "Work from your phone or laptop, from anywhere in the world",
];

export default function SolutionSection() {
  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="reveal-left">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6 leading-tight">
              Introducing the{" "}
              <span className="text-red-600">7-Figure YouTube</span>{" "}
              Scriptwriting Masterclass
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              A step-by-step training program that takes you from little or
              zero writing experience into a highly skilled scriptwriter,
              earning 6-7 figures, without showing your face, building an
              audience, or learning complex technology.
            </p>
            <ul className="space-y-3">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
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
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: testimonial video */}
          <div className="reveal-right flex flex-col items-center">
            <p className="mb-5 text-neutral-900 text-base font-bold max-w-[280px] leading-relaxed">
              Listen to <span className="text-red-600">Eno</span> share how he
              went from <span className="text-red-600">zero to 3M</span> in{" "}
              <span className="text-red-600">7 months</span> as a student.
            </p>
            <div className="relative w-[92%] max-w-sm lg:max-w-[280px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl shadow-red-100 ring-1 ring-red-100 bg-black">
              <VideoWithPlayButton
                src="/Videos/enobasi-testimonial.mp4"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

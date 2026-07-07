import VideoWithPlayButton from "./VideoWithPlayButton";

export default function OgeTestimonial() {
  return (
    <section className="relative py-14 sm:py-24 bg-neutral-950 overflow-hidden">
      {/* Cinematic red spotlight glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 100%, rgba(220,38,38,0.3), transparent 70%)",
        }}
      />
      {/* Fine line grid, fading toward the center */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            From Struggling Nurse to{" "}
            <span className="text-red-400">₦2 Million+</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg">
            Listen to Oge, who went from a struggling nurse to making 2 million+
            with YouTube scriptwriting.
          </p>
        </div>

        {/* Video */}
        <div className="reveal-scale relative mt-10 max-w-md mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black ring-1 ring-red-500/30">
            <VideoWithPlayButton
              src="/Videos/oge-testimonial.mp4"
              poster="/Images/oge-testimonial-poster.jpg"
              className="w-full h-auto aspect-[9/16] bg-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

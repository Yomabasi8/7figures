"use client";
import { useRef, useState } from "react";
import Image from "next/image";

type TestimonialItem =
  | { type: "image"; src: string; width: number; height: number; alt: string }
  | { type: "video"; src: string; width: number; height: number };

const testimonials: TestimonialItem[] = [
  {
    type: "image",
    src: "/Images/testimonial-1m-payment.jpg",
    width: 903,
    height: 889,
    alt: "Student testimonial: ₦1m payment received for a month of work",
  },
  {
    type: "image",
    src: "/Images/testimonial-500k-part-payment.jpg",
    width: 1080,
    height: 2460,
    alt: "Student testimonial: ₦500k part-payment for a scriptwriting job",
  },
  {
    type: "video",
    src: "/Videos/enobasi-testimonial.mp4",
    width: 1080,
    height: 1920,
  },
  {
    type: "image",
    src: "/Images/testimonial-600-bonus-payment.jpg",
    width: 1080,
    height: 902,
    alt: "Student testimonial: $600 payment plus a $50 bonus from a client",
  },
  {
    type: "image",
    src: "/Images/testimonial-800k-payment.jpg",
    width: 540,
    height: 1230,
    alt: "Student testimonial: ₦800k payment for a script",
  },
  {
    type: "image",
    src: "/Images/testimonial-genesis-recommendation.jpg",
    width: 499,
    height: 1080,
    alt: "Genesis being recommended by a client, going on to earn thousands of dollars",
  },
  {
    type: "image",
    src: "/Images/cyrus-dogo-payment-screenshot.jpg",
    width: 540,
    height: 1230,
    alt: "Real payment received by a scriptwriting client",
  },
  {
    type: "image",
    src: "/Images/testimonial-client-recommendation-request.jpg",
    width: 499,
    height: 1080,
    alt: "A client asking for recommendations for more scriptwriters",
  },
  {
    type: "image",
    src: "/Images/testimonial-script-review.jpg",
    width: 708,
    height: 1080,
    alt: "Helping to review a script written by a student",
  },
  {
    type: "video",
    src: "/Videos/oge-testimonial.mp4",
    width: 720,
    height: 1280,
  },
];

function TestimonialCard({ item, hidden }: { item: TestimonialItem; hidden?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <div
      aria-hidden={hidden}
      className="relative w-[92%] max-w-sm h-auto sm:w-auto sm:max-w-none sm:h-[26rem] md:h-[32rem] lg:h-[36rem] shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-red-100 ring-1 ring-red-100 bg-neutral-950"
    >
      {item.type === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto sm:w-auto sm:h-full object-contain"
          />
          {!hidden && (
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            >
              {muted ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 9l-6 6M17 9l6 6" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"
                  />
                </svg>
              )}
            </button>
          )}
        </>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="w-full h-auto sm:w-auto sm:h-full object-contain"
        />
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Student Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Real People. <span className="text-red-600">Real Results.</span>
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg">
            Here&apos;s what students are saying after implementing what they
            learned inside the masterclass.
          </p>
        </div>
      </div>

      {/* Testimonial strip: static vertical stack on mobile, infinite scrolling marquee from sm up */}
      <div className="reveal">
        <div className="animate-ticker flex flex-col items-center sm:items-start sm:flex-row w-full sm:w-max gap-6 sm:gap-10 px-4 sm:px-6">
          {testimonials.map((item, i) => (
            <TestimonialCard key={`a-${i}`} item={item} />
          ))}
          <div className="hidden sm:contents">
            {testimonials.map((item, i) => (
              <TestimonialCard key={`b-${i}`} item={item} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

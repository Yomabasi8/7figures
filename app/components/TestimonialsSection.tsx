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
  return (
    <div
      aria-hidden={hidden}
      className="h-64 sm:h-80 shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-red-100 ring-1 ring-red-100 bg-neutral-950"
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-auto object-contain"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="h-full w-auto object-contain"
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

      {/* Infinite scrolling testimonial strip */}
      <div className="reveal">
        <div className="flex w-max gap-6 px-4 sm:px-6 animate-ticker">
          {testimonials.map((item, i) => (
            <TestimonialCard key={`a-${i}`} item={item} />
          ))}
          {testimonials.map((item, i) => (
            <TestimonialCard key={`b-${i}`} item={item} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}

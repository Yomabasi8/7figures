import Image from "next/image";
import VideoWithPlayButton from "./VideoWithPlayButton";

type TestimonialItem = {
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  poster?: string;
};

const testimonials: TestimonialItem[] = [
  {
    type: "image",
    src: "/Images/testimonial-suleiman-top-1-percent.jpg",
    width: 737,
    height: 1080,
    alt: "Suleiman awarded as Top 1% of YouTube scriptwriters in 2025",
    caption: "Suleiman, awarded Top 1% of YouTube scriptwriters in 2025.",
  },
  {
    type: "image",
    src: "/Images/testimonial-skill-changed-my-life-1.jpg",
    width: 1075,
    height: 1443,
    alt: "Student testimonial: this skill changed my life",
    caption: "This student says the skill completely changed her life.",
  },
  {
    type: "image",
    src: "/Images/testimonial-skill-changed-my-life-2.jpg",
    width: 1080,
    height: 1299,
    alt: "Student testimonial: this skill changed my life",
    caption: "Another student on how this skill changed everything for him.",
  },
  {
    type: "image",
    src: "/Images/testimonial-1m-payment.jpg",
    width: 903,
    height: 889,
    alt: "Student testimonial: ₦1m payment received for a month of work",
    caption: "A student got paid ₦1M for a single month of scriptwriting work.",
  },
  {
    type: "image",
    src: "/Images/testimonial-500k-part-payment.jpg",
    width: 1080,
    height: 2460,
    alt: "Student testimonial: ₦500k part-payment for a scriptwriting job",
    caption: "₦500k part-payment received for a scriptwriting job, more to come.",
  },
  {
    type: "image",
    src: "/Images/testimonial-600-bonus-payment.jpg",
    width: 1080,
    height: 902,
    alt: "Student testimonial: $600 payment plus a $50 bonus from a client",
    caption: "$600 payment plus a $50 bonus from a happy international client.",
  },
  {
    type: "image",
    src: "/Images/testimonial-800k-payment.jpg",
    width: 540,
    height: 1230,
    alt: "Student testimonial: ₦800k payment for a script",
    caption: "₦800k payment received for a single script.",
  },
  {
    type: "image",
    src: "/Images/testimonial-genesis-recommendation.jpg",
    width: 499,
    height: 1080,
    alt: "Genesis being recommended by a client, going on to earn thousands of dollars",
    caption: "Genesis, recommended by a client, went on to earn thousands of dollars.",
  },
  {
    type: "image",
    src: "/Images/cyrus-dogo-payment-screenshot.jpg",
    width: 540,
    height: 1230,
    alt: "Real payment received by a scriptwriting client",
    caption: "Cyrus receiving a real payment from one of his scriptwriting clients.",
  },
  {
    type: "image",
    src: "/Images/testimonial-client-recommendation-request.jpg",
    width: 499,
    height: 1080,
    alt: "A client asking for recommendations for more scriptwriters",
    caption: "A client asking for more recommended scriptwriters after a great experience.",
  },
  {
    type: "image",
    src: "/Images/testimonial-script-review.jpg",
    width: 708,
    height: 1080,
    alt: "Helping to review a script written by a student",
    caption: "Reviewing and polishing a student's script before it's delivered to the client.",
  },
  {
    type: "video",
    src: "/Videos/genesis-testimonial.mp4",
    width: 720,
    height: 1248,
    alt: "Genesis video testimonial",
    caption: "Genesis shares how she went from $1k to $2k monthly as a scriptwriter.",
    poster: "/Images/genesis-testimonial-poster.jpg",
  },
];

function TestimonialCard({ item, hidden }: { item: TestimonialItem; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="shrink-0 w-[92%] max-w-sm sm:w-auto sm:max-w-none flex flex-col items-center sm:items-start gap-2"
    >
      <div className="relative w-full h-auto sm:w-auto sm:h-[26rem] md:h-[32rem] lg:h-[36rem] rounded-2xl overflow-hidden shadow-xl shadow-red-100 ring-1 ring-red-100 bg-neutral-950">
        {item.type === "video" ? (
          hidden ? (
            <video
              src={item.src}
              poster={item.poster}
              muted
              playsInline
              preload="none"
              className="w-full h-auto sm:w-auto sm:h-full object-contain"
            />
          ) : (
            <VideoWithPlayButton
              src={item.src}
              poster={item.poster}
              className="w-full h-auto sm:w-auto sm:h-full object-contain"
            />
          )
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
      <p className="text-sm text-neutral-600 text-center sm:text-left max-w-[280px]">
        {item.caption}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14 reveal">
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

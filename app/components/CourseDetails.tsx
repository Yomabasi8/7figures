const details = [
  {
    icon: "🎬",
    title: "Pre-Recorded Video Lessons",
    body: "Self-paced video lessons you can watch anytime — perfectly designed for flexible, on-the-go learning on your phone or laptop.",
  },
  {
    icon: "📄",
    title: "Downloadable PDF Templates",
    body: "Ready-to-use script frameworks, cold pitch templates, client onboarding checklists, and more — yours to keep forever.",
  },
  {
    icon: "💬",
    title: "Private WhatsApp Community",
    body: "Immediate access to our exclusive community of fellow scriptwriters for peer support, feedback, and the latest industry updates.",
  },
  {
    icon: "♾️",
    title: "Lifetime Access",
    body: "Pay once, access forever. All future course updates and added materials are included at no extra cost — ever.",
  },
  {
    icon: "📱",
    title: "Fully Mobile-Friendly",
    body: "Every piece of content is designed to work beautifully on any device. Start learning and earning from your smartphone right now.",
  },
  {
    icon: "⏱️",
    title: "Complete in 14 Days",
    body: "Finish the entire program comfortably in just 14 days, dedicating only 3 focused hours of study per day.",
  },
];

export default function CourseDetails() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What&apos;s Inside
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Everything You Need to{" "}
            <span className="text-sky-600">Succeed</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            This isn&apos;t just a course — it&apos;s a complete
            business-building system delivered straight to your device.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.map((d, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-6 border border-sky-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {d.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">{d.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const message = "🏆 Officially Recognized as Top 1% of YouTube Scriptwriters Globally";
const items = Array.from({ length: 8 });

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-9 bg-black overflow-hidden border-b border-amber-400/30">
      <div className="animate-ticker-fast flex h-9 w-max items-center gap-10 whitespace-nowrap px-4">
        {items.map((_, i) => (
          <span key={i} className="text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}

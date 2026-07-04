export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white font-extrabold text-xl mb-3">7-Figure Scripts™</p>
        <p className="text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          The 7-Figure YouTube Scriptwriting Masterclass — empowering African
          writers and professionals to build world-class digital careers from
          anywhere.
        </p>
        <div className="flex justify-center gap-6 text-xs mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Enrol Now
          </a>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          © {new Date().getFullYear()} 7-Figure Scripts™. All rights reserved.
          <br />
          <span className="italic">
            Earnings Disclaimer: Results are not guaranteed and will vary based
            on individual effort, dedication, and implementation of the
            material provided.
          </span>
        </p>
      </div>
    </footer>
  );
}

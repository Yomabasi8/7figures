export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-500 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
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
        <p className="text-xs text-neutral-700 leading-relaxed">
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

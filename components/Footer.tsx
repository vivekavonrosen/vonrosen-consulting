import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0420] text-white">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#DFB24A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl tracking-[0.2em] text-white mb-4">
              VON ROSEN <span className="text-[#DFB24A]">CONSULTING</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Strategic consulting, coaching, and speaking for executives, founders, and leaders 50+ who are building what comes next.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-heading text-lg text-[#DFB24A] tracking-widest mb-6">NAVIGATE</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Work With Me", href: "/#coaching" },
                { label: "Speaking", href: "/speaking" },
                { label: "LinkedIn Strategy", href: "/linkedin" },
                { label: "Apply for Coaching", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-[#DFB24A] text-sm tracking-wider transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources & Connect */}
          <div>
            <p className="font-heading text-lg text-[#DFB24A] tracking-widest mb-6">RESOURCES</p>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://legacy-business-roadmap.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#DFB24A] text-sm tracking-wider transition-colors"
              >
                Free Legacy Roadmap
              </a>
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7150574751634079744"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#DFB24A] text-sm tracking-wider transition-colors"
              >
                LinkedIn Newsletter
              </a>
              <a
                href="https://vivekavonrosen.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#DFB24A] text-sm tracking-wider transition-colors"
              >
                Substack
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Von Rosen Consulting · Always Extraordinary, LLC · All Rights Reserved
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            vonrosenconsulting.com
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/#coaching" },
  { label: "Speaking", href: "/speaking" },
  { label: "LinkedIn", href: "/linkedin" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0420]/98 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-[#0d0420]/90 backdrop-blur-sm"
      }`}
    >
      {/* Thin gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#DFB24A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl md:text-2xl tracking-[0.2em] text-white hover:text-[#DFB24A] transition-colors"
        >
          VON ROSEN{" "}
          <span className="text-[#DFB24A]">CONSULTING</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-widest uppercase transition-colors ${
                isActive(link.href)
                  ? "text-[#DFB24A]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
              className="font-body text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors flex items-center gap-1"
            >
              Resources{" "}
              <span className="text-[#DFB24A] text-xs">{resourcesOpen ? "▲" : "▼"}</span>
            </button>
            {resourcesOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1a0a2e] border border-[#DFB24A]/20 min-w-[180px] py-2">
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7150574751634079744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-sm text-white/80 hover:text-[#DFB24A] hover:bg-white/5 tracking-wider uppercase transition-colors"
                >
                  Newsletter
                </a>
                <a
                  href="https://vivekavonrosen.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-sm text-white/80 hover:text-[#DFB24A] hover:bg-white/5 tracking-wider uppercase transition-colors"
                >
                  Substack
                </a>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-[#DFB24A] text-[#0d0420] px-6 py-3 font-body font-bold text-sm tracking-widest uppercase hover:bg-[#eac66e] transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d0420] border-t border-[#DFB24A]/20 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-3xl text-white hover:text-[#DFB24A] transition-colors tracking-widest"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7150574751634079744"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-3xl text-white/60 hover:text-[#DFB24A] transition-colors tracking-widest"
          >
            Newsletter
          </a>
          <a
            href="https://vivekavonrosen.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-3xl text-white/60 hover:text-[#DFB24A] transition-colors tracking-widest"
          >
            Substack
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#DFB24A] text-[#0d0420] px-8 py-4 font-body font-bold text-center tracking-widest uppercase"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}

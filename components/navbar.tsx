"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: pathname === "/" ? "#skills" : "/#skills" },
    { name: "Experience", href: pathname === "/" ? "#experience" : "/#experience" },
    { name: "Contact", href: pathname === "/" ? "#contact" : "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled ? "bg-black/95 backdrop-blur-xl border-b border-zinc-900 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-zinc-500 transition-all duration-500">
              Ranjit.
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <a
              href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-zinc-400 p-2 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-t border-zinc-900 p-8 h-screen space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-4xl font-bold tracking-tighter text-zinc-700 hover:text-white transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-12">
            <a
              href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d"
              className="block w-full text-center py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
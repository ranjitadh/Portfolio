"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ranjit Adhikari
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform inline-block"
                >
                  {link.name}
                </a>
              ))}

              <Button asChild className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 border border-white/10 transition-all">
                <a
                  href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire me on Upwork
                </a>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/10">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-medium shadow-lg"
                onClick={toggleMenu}
              >
                Hire me on Upwork
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
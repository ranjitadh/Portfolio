'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
          isScrolled 
            ? 'bg-zinc-950/80 backdrop-blur-2xl border-zinc-800 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
               <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">RA.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            
            <a 
              href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-900 border border-zinc-800 text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"
            >
              Hire Me
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="bg-zinc-950/95 backdrop-blur-3xl border border-zinc-800 rounded-[2rem] p-8 shadow-3xl space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-bold text-zinc-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-zinc-900">
                <a
                  href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2"
                >
                  Hire Me
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
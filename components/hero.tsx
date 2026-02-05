'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone, MapPin, Download } from 'lucide-react';
import Navbar from "@/components/navbar";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      <Navbar />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

      {/* Floating Glass Panels (Background) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-[20%] left-[10%] w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/5"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent backdrop-blur-sm border border-white/5"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="relative rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 shadow-2xl shadow-blue-900/20"
        >
          {/* Header Text */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md"
            >
              <span className="text-blue-300 font-medium tracking-wide text-sm uppercase">Available for work</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white mb-2">
              <span className="block drop-shadow-lg">Ranjit</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg pb-2">
                Adhikari
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto font-sans">
              Use code to craft the future. <span className="text-white font-medium">Web & Mobile Expert.</span>
            </h2>

            {/* Tech Stack Pills (Decorative) */}
            <div className="flex flex-wrap justify-center gap-3 opacity-60">
              {['React', 'Next.js', 'React Native', 'Three.js'].map((tech, i) => (
                <span key={i} className="text-xs font-mono text-blue-200 px-2 py-1 bg-white/5 rounded border border-white/5">{tech}</span>
              ))}
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center gap-6 py-4">
              <a href="mailto:ranzeet60@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">ranzeet60@gmail.com</span>
              </a>
              <a href="tel:+9779809517297" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">+977 9809517297</span>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk <Mail className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#projects"
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work <ArrowDown className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
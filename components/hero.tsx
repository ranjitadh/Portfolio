'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Mail, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "circOut" 
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full text-center space-y-16 relative z-10"
      >
        {/* Main Heading */}
        <div className="space-y-8">
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-[10rem] font-heading font-bold tracking-tighter text-white leading-[0.85]"
          >
            Ranjit <span className="text-zinc-600 underline decoration-zinc-900 underline-offset-[1.5rem] decoration-4">Adhikari</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-zinc-500 font-light max-w-4xl mx-auto leading-relaxed tracking-tight"
          >
            Engineering <span className="text-white font-medium">Fullstack</span> solutions 
            with a focus on high-performance architecture and <span className="text-zinc-200 italic">visionary</span> design.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className="group px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-4 shadow-2xl shadow-white/10"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-10 py-5 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold hover:bg-zinc-800 transition-all flex items-center gap-4 hover:border-zinc-700"
          >
            Contact
            <Mail className="w-5 h-5 text-zinc-500" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
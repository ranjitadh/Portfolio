'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center space-y-12 relative z-10"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] sm:text-xs font-medium tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Fullstack Engineering & Design
        </motion.div>

        {/* Main Heading */}
        <div className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-9xl font-heading font-bold tracking-tight text-white leading-tight"
          >
            Ranjit <span className="text-zinc-500 underline decoration-zinc-800 underline-offset-8">Adhikari</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed"
          >
            A <span className="text-white font-medium">Fullstack Developer</span> architecting robust backends and 
            <span className="text-zinc-100 italic"> fluid</span> frontend experiences that push the boundaries of the modern web.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 pt-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-3 shadow-xl shadow-white/5"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold hover:bg-zinc-800 transition-all"
          >
            Get in Touch
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
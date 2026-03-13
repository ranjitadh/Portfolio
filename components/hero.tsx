'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-medium tracking-wider uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading font-bold tracking-tight text-white"
          >
            Ranjit Adhikari
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A frontend developer dedicated to crafting <span className="text-zinc-100 italic">minimalist</span>, 
            high-performance digital experiences with code as an art form.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-zinc-900 text-white border border-zinc-800 rounded-full font-semibold hover:bg-zinc-800 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Quick Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 pt-12 border-t border-zinc-900"
        >
          <a href="mailto:ranzeet60@gmail.com" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm">
            <Mail className="w-4 h-4" />
            ranzeet60@gmail.com
          </a>
          <a href="tel:+9779809517297" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm">
            <Phone className="w-4 h-4" />
            +977 9809517297
          </a>
          <span className="flex items-center gap-2 text-zinc-500 text-sm">
            Kathmandu, Nepal
          </span>
        </motion.div>
      </div>
    </section>
  );
}
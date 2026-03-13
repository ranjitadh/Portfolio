'use client';

import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress as any, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative w-full min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-zinc-800">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white z-[101] origin-left" style={{ scaleX }} />

      {/* Refined Background */}
      <div className="fixed inset-0 z-0 bg-zinc-950">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      </div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Projects featuredOnly={true} />
          <div className="section-divider" />
          <Education />
          <div className="section-divider" />
          <Contact />
        </motion.div>
      </div>
      
      {/* Grainy Texture Overlay */}
      <div className="noise-texture" />
    </main>
  );
}



'use client';

import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-zinc-800">
      {/* Refined Background */}
      <div className="fixed inset-0 z-0 bg-zinc-950">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.1]" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      </div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </div>
      
      {/* Noise Texture Overlay for an organic feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}


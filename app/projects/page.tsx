'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navbar';
import { ALL_PROJECTS } from '@/components/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-zinc-800">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl"> All <span className="text-zinc-500 italic">Engineering</span> <br/> Showcases.</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            A comprehensive look into my technical journey, from complex fullstack architectures to experimental visual interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-32">
          {ALL_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
              className="group space-y-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-zinc-900 bg-zinc-900 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute bottom-10 left-10 z-20 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  <a href="#" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Github size={20} /></a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <div className="absolute top-10 right-10 z-20">
                   <div className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                      {project.tags[0]}
                   </div>
                </div>
              </div>

              <div className="space-y-6 px-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
                  <div className="h-px flex-1 bg-zinc-900 mx-10 hidden md:block" />
                  <span className="text-zinc-600 font-mono italic">#{index + 1}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-xl max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                   {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors cursor-default">
                         {tag}
                      </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="border-t border-zinc-900 py-24 text-center mt-24">
        <p className="text-zinc-600 text-sm mb-8 italic">Interested in collaborating?</p>
        <a 
          href="mailto:ranzeet60@gmail.com" 
          className="text-3xl md:text-5xl font-bold hover:text-zinc-400 transition-colors underline decoration-zinc-800 underline-offset-8"
        >
          Let's talk business.
        </a>
      </footer>
    </main>
  );
}

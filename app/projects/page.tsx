'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Multi-Tube',
    description: 'A high-performance video streaming platform built for content creators. Features include real-time analytics, glassmorphism UI, and seamless media delivery.',
    link: 'https://dev.multi-tube.com/',
    image: '/project_multi_tube.png',
    tags: ['Next.js', 'WebRTC', 'TurboRepo', 'Tailwind'],
  },
  {
    title: 'DataBrakes Web',
    description: 'Engineered a complex data visualization portal for systems analytics. High-throughput data streaming with interactive node-graph visualizers.',
    link: 'https://dev.data-brakes.com/',
    image: '/project_databrakes.png',
    tags: ['React', 'D3.js', 'PostgreSQL', 'WebSockets'],
  },
  {
    title: 'Cafe Connect',
    description: 'Bespoke mobile ordering solution for boutique cafes. Focused on visual elegance, fluid transitions, and a premium ordering experience.',
    link: 'https://my-3j553mqd5-ranjitadhs-projects.vercel.app',
    image: '/project_cafeconnect.png',
    tags: ['React Native', 'Expo', 'Framer Motion', 'Stripe'],
  },
  {
    title: 'SignBridge',
    description: 'Bridging the gap for the deaf community. An AI-powered tool that translates English speech/text into real-time sign language animations.',
    image: '/project_multi_tube.png', // Placeholder for now
    tags: ['Python', 'TensorFlow', 'OpenCV', 'React'],
  },
];

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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"> Selected <br/> <span className="text-zinc-500 italic">Works.</span></h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            A deep dive into the engineering and design process behind some of my most challenging and rewarding projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group space-y-8"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-900 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* 
                  Note: Using standard img tags or Image from next/image. 
                  In this environment, I'll use standard img for robustness with the generated paths.
                */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute bottom-6 left-6 z-20 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <Github className="w-5 h-5 text-white hover:text-zinc-300 cursor-pointer" />
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-white hover:text-zinc-300" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                  <div className="h-px flex-1 bg-zinc-900 mx-6 hidden md:block" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.description}
                </p>
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

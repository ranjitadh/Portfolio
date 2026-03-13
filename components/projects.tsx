'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ALL_PROJECTS = [
  {
    title: 'Multi-Tube',
    description: 'High-performance video streaming platform with real-time analytics and global content delivery.',
    link: 'https://dev.multi-tube.com/',
    image: '/project_multi_tube.png',
    tags: ['Next.js', 'Redux', 'WebRTC'],
  },
  {
    title: 'DataBrakes Web',
    description: 'Sophisticated systems analytics portal featuring complex 3D data visualizations and real-time monitoring.',
    link: 'https://dev.data-brakes.com/',
    image: '/project_databrakes.png',
    tags: ['React', 'D3.js', 'PostgreSQL'],
  },
  {
    title: 'Cosmic Dashboard',
    description: 'Interactive space exploration interface with real-time galaxy resource tracking and fleet management.',
    image: '/project_cosmic.png',
    tags: ['Three.js', 'React', 'Motion'],
  },
  {
    title: 'Neural Network',
    description: 'Deep diving into AI behavior through an interactive, pulsating visualization of deep learning layers.',
    image: '/project_neural.png',
    tags: ['AI/ML', 'Pytorch', 'Canvas'],
  },
  {
    title: 'Quantum Interface',
    description: 'Next-gen UX experimentation using liquid glass elements and chromatic aberration for immersive depth.',
    image: '/project_quantum.png',
    tags: ['UX/UI', 'Framer', 'GLSL'],
  },
  {
    title: 'Cafe Connect',
    description: 'Bespoke mobile ordering solution for premium coffee brands, featuring fluid glass-morphism UI.',
    link: 'https://my-3j553mqd5-ranjitadhs-projects.vercel.app',
    image: '/project_cafeconnect.png',
    tags: ['React Native', 'Expo', 'Stripe'],
  },
  {
    title: 'Particle System',
    description: 'A massive-scale particle physics simulation running in the browser using custom GPU shaders.',
    image: '/project_particle.png',
    tags: ['WebGL', 'Compute Shaders'],
  },
  {
    title: 'Virtual Worlds',
    description: 'Professional world-building toolset for low-poly environments with high-fidelity lighting.',
    image: '/project_virtual.png',
    tags: ['Unity', 'C#', 'WebAssembly'],
  },
  {
    title: 'SignBridge',
    description: 'Accessibility tool translating real-time speech into sign language animations using computer vision.',
    image: '/project_multi_tube.png',
    tags: ['Python', 'OpenCV', 'TensorFlow'],
  },
  {
    title: 'Holographic UI',
    description: 'Experimental futuristic interface design for industrial control systems and HUD visualizations.',
    image: '/project_holographic.png',
    tags: ['Sci-Fi UI', 'Blender', 'React'],
  },
];

export default function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const displayedProjects = featuredOnly ? ALL_PROJECTS.slice(0, 4) : ALL_PROJECTS;

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Selected <span className="text-zinc-500 italic">Work.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Merging technical complexity with visual elegance to build products that define the modern web.
            </p>
          </motion.div>
          
          {featuredOnly && (
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <Link 
                href="/projects" 
                className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full text-white font-bold hover:bg-zinc-800 transition-all active:scale-95"
              >
                View full catalog
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] border border-zinc-900 bg-zinc-900 shadow-2xl mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center gap-6">
                   <a href="#" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"><Github size={24} /></a>
                   {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                       <ExternalLink size={24} />
                     </a>
                   )}
                </div>
                
                <div className="absolute top-8 left-8 flex flex-wrap gap-2 pointer-events-none">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white/70 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 px-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="h-px flex-1 bg-zinc-900 mx-8 hidden lg:block" />
                  <span className="text-zinc-700 font-mono text-sm hidden lg:block">0{index + 1}</span>
                </div>
                <p className="text-zinc-500 leading-relaxed text-lg max-w-md">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
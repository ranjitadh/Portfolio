'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Multi-Tube',
    description: 'Advanced video streaming platform built for high-performance content delivery and seamless user interaction.',
    link: 'https://dev.multi-tube.com/',
    image: '/project_multi_tube.png',
    tags: ['Next.js', 'TypeScript', 'WebRTC'],
  },
  {
    title: 'DataBrakes Web',
    description: 'Interactive data management dashboard featuring complex visualizations and real-time state synchronization.',
    link: 'https://dev.data-brakes.com/',
    image: '/project_databrakes.png',
    tags: ['React', 'D3.js', 'Tailwind'],
  },
  {
    title: 'Cafe Connect',
    description: 'Bespoke digital menu and ordering experience for boutique cafes, focused on elegant UI and smooth transitions.',
    link: 'https://my-3j553mqd5-ranjitadhs-projects.vercel.app',
    image: '/project_cafeconnect.png',
    tags: ['Framer Motion', 'React', 'E-commerce'],
  },
  {
    title: 'SignBridge',
    description: 'Innovative accessibility tool translating English text to Sign Language using advanced machine learning models.',
    image: '/project_multi_tube.png',
    tags: ['Python', 'OpenCV', 'React'],
  },
];

export default function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const displayedProjects = featuredOnly ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              {featuredOnly ? 'Featured Projects' : 'Projects'}
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              A curated selection of my work across web and mobile platforms, emphasizing fullstack architecture.
            </p>
          </div>
          {featuredOnly && (
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white font-medium transition-colors"
            >
              View all work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col space-y-6"
            >
              <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-zinc-900 bg-zinc-900 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                   <a href="#" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><Github size={20} /></a>
                   {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                       <ExternalLink size={20} />
                     </a>
                   )}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-md line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-900">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
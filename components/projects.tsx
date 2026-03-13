'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Tube',
    description: 'Advanced video streaming platform built for high-performance content delivery and seamless user interaction.',
    link: 'https://dev.multi-tube.com/',
    tags: ['Next.js', 'TypeScript', 'WebRTC'],
  },
  {
    title: 'DataBrakes Web',
    description: 'Interactive data management dashboard featuring complex visualizations and real-time state synchronization.',
    link: 'https://dev.data-brakes.com/',
    tags: ['React', 'D3.js', 'Tailwind'],
  },
  {
    title: 'Cafe Connect',
    description: 'Bespoke digital menu and ordering experience for boutique cafes, focused on elegant UI and smooth transitions.',
    link: 'https://my-3j553mqd5-ranjitadhs-projects.vercel.app',
    tags: ['Framer Motion', 'React', 'E-commerce'],
  },
  {
    title: 'SignBridge',
    description: 'Innovative accessibility tool translating English text to Sign Language using advanced machine learning models.',
    tags: ['Python', 'OpenCV', 'React'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-zinc-400">
            A curated selection of my work across web and mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-zinc-900/50 border border-zinc-900 rounded-3xl p-8 hover:bg-zinc-900 hover:border-zinc-800 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-zinc-500">
                    <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-zinc-500 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
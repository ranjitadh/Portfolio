'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Tube',
    description: 'Advanced video streaming platform',
    color: 'from-red-600 to-pink-600',
    link: 'https://dev.multi-tube.com/',
    tags: ['Next.js', 'React', 'Video Streaming'],
  },
  {
    title: 'DataBrakes Web',
    description: 'Responsive, interactive data management dashboard. Uses component-based architecture and RESTful APIs.',
    color: 'from-blue-600 to-cyan-600',
    link: 'https://dev.data-brakes.com/',
    tags: ['React.js', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce site with product listing, filtering, cart functionality, and secure checkout.',
    color: 'from-violet-600 to-purple-600',
    tags: ['React.js', 'Next.js', 'SEO'],
  },
  {
    title: 'Cafe Website',
    description: 'Modern, visually appealing café website with custom animations for menu browsing.',
    color: 'from-orange-500 to-amber-500',
    link: 'https://my-3j553mqd5-ranjitadhs-projects.vercel.app',
    tags: ['React.js', 'CSS3', 'Animations'],
  },
  {
    title: 'English → Sign Language',
    description: 'Translation system converting text into sign language videos using NLP and OpenCV.',
    color: 'from-emerald-600 to-teal-600',
    tags: ['OpenCV', 'NLP', 'Accessibility'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardContent = (
    <div
      className={`relative h-full rounded-3xl bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between overflow-hidden`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`,
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div style={{ transform: 'translateZ(50px)' }}>
        <motion.h3
          className="text-3xl font-heading font-bold text-white mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-white/90 text-md mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-white/20 rounded-md text-xs text-white font-medium backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ transform: 'translateZ(60px)' }}>
        {project.link ? (
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Site
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        ) : (
          <div className="flex gap-3">
            <motion.button
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm font-semibold hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo <ExternalLink className="w-3 h-3" />
            </motion.button>
            <motion.button
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-semibold hover:bg-black/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Code <Github className="w-3 h-3" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[400px] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        <div className="h-full">{cardContent}</div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web and mobile development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
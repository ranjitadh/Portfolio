'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        title: 'Multi-Tube',
        description: 'Advanced video streaming platform',
        color: 'from-red-600 to-pink-600',
        link: 'https://dev.multi-tube.com/',
    },
    {
        title: 'Cosmic Dashboard',
        description: '3D data visualization platform',
        color: 'from-violet-600 to-indigo-600',
    },
    {
        title: 'Neural Network',
        description: 'Interactive AI visualization',
        color: 'from-fuchsia-600 to-pink-600',
    },
    {
        title: 'Particle System',
        description: 'Real-time physics simulation',
        color: 'from-purple-600 to-violet-600',
    },
    {
        title: 'Quantum Interface',
        description: 'Next-gen user experience',
        color: 'from-pink-600 to-rose-600',
    },
    {
        title: 'Virtual Worlds',
        description: 'Immersive 3D environments',
        color: 'from-indigo-600 to-blue-600',
    },
    {
        title: 'Holographic UI',
        description: 'Future of interfaces',
        color: 'from-violet-600 to-purple-600',
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
            className={`relative h-full rounded-3xl bg-gradient-to-br ${project.color} p-8 flex flex-col justify-end overflow-hidden`}
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

            {/* Glowing Orb */}
            <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div style={{ transform: 'translateZ(50px)' }}>
                <motion.h3
                    className="text-3xl font-bold text-white mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {project.title}
                </motion.h3>
                <motion.p
                    className="text-white/90 text-lg mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {project.description}
                </motion.p>

                {project.link && (
                    <motion.button
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Visit Site
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </motion.button>
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
            className="relative h-80"
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
                    className="block h-full cursor-pointer"
                >
                    {cardContent}
                </a>
            ) : (
                <div className="cursor-pointer h-full">{cardContent}</div>
            )}
        </motion.div>
    );
}

export default function InteractiveGallery() {
    return (
        <section className="relative py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Hover and interact with each project to experience the magic
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Animated Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>
        </section>
    );
}

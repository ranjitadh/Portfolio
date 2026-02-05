'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
    {
        title: '3D Animations',
        description: 'Immersive three-dimensional experiences that captivate and engage',
        icon: '🎨',
        gradient: 'from-violet-500 to-purple-500',
    },
    {
        title: 'Smooth Interactions',
        description: 'Fluid animations and transitions that feel natural and responsive',
        icon: '✨',
        gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
        title: 'Modern Design',
        description: 'Cutting-edge aesthetics with glassmorphism and gradients',
        icon: '🚀',
        gradient: 'from-purple-500 to-indigo-500',
    },
    {
        title: 'Performance',
        description: 'Optimized rendering for smooth 60fps animations across devices',
        icon: '⚡',
        gradient: 'from-pink-500 to-rose-500',
    },
];

export default function FeaturesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">
                        Features
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Built with the latest web technologies for an unparalleled experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden"
                                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Gradient Background on Hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="text-6xl mb-6"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {feature.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Animated Border */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>
        </section>
    );
}

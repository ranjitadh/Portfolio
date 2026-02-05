'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                >
                    <motion.h1
                        className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundSize: '200% 200%',
                        }}
                    >
                        PORTFOLIO
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Experience the future of web design with immersive 3D animations
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <motion.button
                            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-semibold text-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Explore Projects</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>

                        <motion.button
                            className="group px-8 py-4 border-2 border-violet-500 rounded-full text-violet-300 font-semibold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.05, borderColor: '#d8b4fe' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Floating Cards */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-32 h-32 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-lg rounded-3xl border border-white/10"
                            style={{
                                left: `${20 + i * 30}%`,
                                top: `${30 + i * 20}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 10, 0],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

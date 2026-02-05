'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import AnimatedSphere from '@/components/showcase/AnimatedSphere';
import FloatingParticles from '@/components/showcase/FloatingParticles';
import HeroSection from '@/components/showcase/HeroSection';
import FeaturesSection from '@/components/showcase/FeaturesSection';
import InteractiveGallery from '@/components/showcase/InteractiveGallery';
import Link from 'next/link';

export default function ShowcasePage() {
    return (
        <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Back to Portfolio Link */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
            >
                ← Back to Portfolio
            </Link>

            {/* Three.js Background */}
            <div className="fixed inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <AnimatedSphere />
                    <FloatingParticles />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <HeroSection />
                <FeaturesSection />
                <InteractiveGallery />
            </div>

            {/* Gradient Overlay */}
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50 pointer-events-none z-5" />
        </main>
    );
}

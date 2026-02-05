'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AnimatedSphere from '@/components/showcase/AnimatedSphere';
import FloatingParticles from '@/components/showcase/FloatingParticles';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Three.js Background */}
      <div className="fixed inset-0 z-0 bg-slate-950">
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
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/80 pointer-events-none z-5" />
    </main>
  );
}

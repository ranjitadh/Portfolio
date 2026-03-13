'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import Navbar from '@/components/navbar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-zinc-800">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Engineering <br/> <span className="text-zinc-500 italic">Excellence.</span></h1>
        </motion.div>

        <section className="space-y-12 text-zinc-400 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I'm <span className="text-white font-medium">Ranjit Adhikari</span>, a Fullstack Developer based in Kathmandu, Nepal. My philosophy centers on the intersection of high-fidelity design and industrial-grade software engineering.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            With a core foundation in Computer Engineering, I've spent years mastering the full lifecycle of digital products. From conceptualizing intuitive user interfaces to architecting scalable backend systems, I build tools that are as reliable as they are beautiful.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-zinc-900">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Technical Stack</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="text-zinc-600">Frontend:</span> React, Next.js, TypeScript, Tailwind, Three.js</li>
                <li><span className="text-zinc-600">Backend:</span> Node.js, PostgreSQL, Supabase, Prisma, Python</li>
                <li><span className="text-zinc-600">Mobile:</span> React Native, Expo, App Store Ops</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Social Presence</h3>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Current Focus</h2>
            <p>
              I am currently focused on building AI-integrated workflows and enhancing accessibility for the global web. I believe that every line of code is an opportunity to solve a human problem.
            </p>
          </motion.div>
        </section>

        <section className="mt-32 p-12 bg-white text-black rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-2">
             <h2 className="text-4xl font-bold tracking-tighter">Have a vision?</h2>
             <p className="font-medium text-zinc-600">Let's build the future, one pixel at a time.</p>
           </div>
           <a 
             href="mailto:ranzeet60@gmail.com" 
             className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-2 group"
           >
             Get Started
             <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
        </section>
      </div>
    </main>
  );
}

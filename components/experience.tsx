'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-white/10 ml-4 md:ml-0"
        >
          {/* Experience Item */}
          <div className="relative mb-12 group">
            <div className="absolute -left-[41px] top-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50">
              <Briefcase className="h-5 w-5 text-white" />
            </div>

            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-900/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Mobile App Developer</h3>
                  <p className="text-blue-400 font-medium text-lg">Khatra Tech</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/10 text-gray-300 text-sm mt-2 md:mt-0 w-fit">
                  Jan 2023 – Aug 2025
                </span>
              </div>

              <ul className="space-y-4 text-gray-300">
                {[
                  "Maintained and enhanced the company mobile application across iOS and Android, ensuring stability and performance.",
                  "Identified and resolved bugs, optimized app load times, and improved UX via efficient state management and performance tuning.",
                  "Implemented AI automation features to streamline workflows and enhance app intelligence.",
                  "Collaborated using Git-based workflows, ensured clean commits and smooth deployments, and performed QA testing."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400">
                  <span className="text-purple-400 font-medium">Key Skills:</span> Mobile App Development · Bug Fixing · AI Automation · Performance Optimization · Quality Assurance · Git · React Native · Supabase · Next.js
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Professional History
          </h2>
          <p className="text-lg text-zinc-400">
            A journey through building high-impact mobile and web applications.
          </p>
        </div>

        <div className="space-y-12">
          {/* Khatra Tech Experience */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 border-l border-zinc-800"
          >
            <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-zinc-400" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6 gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">Mobile App Developer</h3>
                <p className="text-zinc-500">Khatra Tech</p>
              </div>
              <span className="text-sm font-mono text-zinc-500">
                Jan 2023 – Aug 2025
              </span>
            </div>

            <ul className="space-y-4 text-zinc-400 leading-relaxed max-w-2xl">
              {[
                "Engineered cross-platform mobile experiences for iOS and Android.",
                "Optimized application performance and improved user retention via state-management tuning.",
                "Integrated automated intelligence features to enhance internal and external workflows.",
                "Maintained rigorous testing and quality assurance standards within a Git-driven environment."
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 rounded-full bg-zinc-700 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-xs uppercase tracking-widest text-zinc-600 font-bold">Stack</span>
              <div className="flex flex-wrap gap-3">
                {['React Native', 'Supabase', 'Next.js', 'QA'].map((skill) => (
                  <span key={skill} className="text-xs text-zinc-400">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "C++", "Python"],
  },
  {
    title: "Frameworks & UI",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Engineering & Tools",
    skills: ["Docker", "Git", "PostgreSQL", "Supabase", "Prisma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Abilities
          </h2>
          <p className="text-lg text-zinc-400">
            A technical foundation built on performance, accessibility, and modern standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl text-sm transition-colors hover:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-zinc-100 font-medium mb-4">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['Algorithms', 'Data Structures', 'DBMS'].map((course) => (
                <span key={course} className="text-zinc-500 text-sm italic">{course}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-zinc-100 font-medium mb-4">Focus</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Performance Optimization · Accessibility (a11y) · SEO Best Practices · CI/CD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


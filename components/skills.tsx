'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "C", "C++"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "React Native", "Expo", "Next.js", "Tailwind CSS", "Bootstrap"],
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Tools & Services",
    skills: ["Git", "Webpack", "Babel", "npm/Yarn", "Docker", "Postman", "Supabase"],
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`} />
              <div className="p-6 h-full bg-black/20 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-blue-100 rounded-full text-sm border border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">Relevant Coursework</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['Web Development', 'Data Structures and Algorithms', 'DBMS'].map((course, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl text-center border border-white/5 hover:bg-white/10 transition-colors text-gray-300">
                {course}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            <span className="text-purple-400 font-semibold">Additional Focus:</span> AI Automation · Performance Optimization · Accessibility · SEO best practices
          </p>
        </motion.div>
      </div>
    </section>
  );
}

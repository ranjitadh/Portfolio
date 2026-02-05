'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: "National College of Engineering",
    degree: "Bachelor in Computer Engineering",
    period: "April 2022 - Present",
  },
  {
    institution: "Gorkha International Public Secondary",
    degree: "Higher Secondary",
    period: "2019",
  },
  {
    institution: "Takshashila Academy Kohapur",
    degree: "Secondary",
    period: "2019",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{item.institution}</h3>
              <p className="text-blue-300 font-medium mb-4">{item.degree}</p>
              <div className="mt-auto pt-4 border-t border-white/10 w-full">
                <span className="text-sm text-gray-400">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

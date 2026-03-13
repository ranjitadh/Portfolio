'use client';

import { motion } from 'framer-motion';

const education = [
  {
    institution: "National College of Engineering",
    degree: "Bachelor in Computer Engineering",
    period: "2022 - Present",
  },
  {
    institution: "Gorkha International Public Secondary",
    degree: "Higher Secondary",
    period: "2019 - 2021",
  },
  {
    institution: "Takshashila Academy",
    degree: "Secondary",
    period: "2019",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Academic Background
          </h2>
          <p className="text-lg text-zinc-400">
            A formal education in computer engineering and core foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-900 transition-all hover:border-zinc-800"
            >
              <span className="text-xs font-mono text-zinc-600 mb-6 block uppercase tracking-widest">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                {item.institution}
              </h3>
              <p className="text-zinc-500 text-sm">
                {item.degree}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


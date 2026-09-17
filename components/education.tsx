"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const education = [
  {
    institution: "National College of Engineering",
    degree: "Bachelor in Computer Engineering",
    period: "2022 — Present",
  },
  {
    institution: "Gorkha International Public Secondary",
    degree: "Higher Secondary",
    period: "2019 — 2021",
  },
  {
    institution: "Takshashila Academy",
    degree: "Secondary",
    period: "2019",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p
            className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "hsl(0 0% 60%)" }}
          >
            Education
          </p>
          <h2
            className="text-3xl md:text-4xl font-heading font-bold tracking-tight"
            style={{ color: "hsl(0 0% 10%)" }}
          >
            Academic background.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-6"
              style={{ borderTop: "1px solid hsl(30 15% 85%)" }}
            >
              <p
                className="font-mono text-[10px] tracking-wider mb-4"
                style={{ color: "hsl(0 0% 60%)" }}
              >
                {item.period}
              </p>
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: "hsl(0 0% 10%)" }}
              >
                {item.institution}
              </h3>
              <p
                className="text-sm"
                style={{ color: "hsl(0 0% 50%)" }}
              >
                {item.degree}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

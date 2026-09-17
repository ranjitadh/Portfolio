"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Skill {
  name: string
  description: string
}

const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Core",
    items: [
      { name: "JavaScript", description: "The language of the web" },
      { name: "TypeScript", description: "Type-safe JavaScript at scale" },
      { name: "HTML/CSS", description: "Structure and style, fundamentals" },
      { name: "Python", description: "Scripting, automation, and ML" },
      { name: "C++", description: "Systems-level programming" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", description: "Building interactive interfaces" },
      { name: "Next.js", description: "Performance + full-stack architecture" },
      { name: "React Native", description: "Cross-platform mobile experiences" },
      { name: "Tailwind CSS", description: "Utility-first design systems" },
      { name: "Framer Motion", description: "Physics-based UI animation" },
    ],
  },
  {
    title: "Engineering",
    items: [
      { name: "Docker", description: "Containerized deployments" },
      { name: "Git", description: "Version control and collaboration" },
      { name: "PostgreSQL", description: "Relational database design" },
      { name: "Supabase", description: "Backend-as-a-service, real-time" },
      { name: "Prisma", description: "Type-safe database access" },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Section header */}
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
            Capabilities
          </p>
          <h2
            className="text-3xl md:text-4xl font-heading font-bold tracking-tight"
            style={{ color: "hsl(0 0% 10%)" }}
          >
            What I work with.
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {skillGroups.map((group, gi) => (
            <div key={group.title}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gi * 0.1, duration: 0.6 }}
                className="text-xs uppercase tracking-[0.15em] font-medium mb-8"
                style={{ color: "hsl(0 0% 55%)" }}
              >
                {group.title}
              </motion.p>

              <div className="space-y-1">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: gi * 0.1 + si * 0.04,
                      duration: 0.5,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}

                    className="group relative py-2.5 px-3 -mx-3 rounded-md transition-colors duration-200"
                    style={{
                      backgroundColor:
                        hoveredSkill === skill.name
                          ? "hsl(30 15% 90%)"
                          : "transparent",
                    }}
                  >
                    <div className="flex items-baseline justify-between">
                      <span
                        className="text-base md:text-lg font-medium transition-all duration-300"
                        style={{
                          color:
                            hoveredSkill === skill.name
                              ? "hsl(0 0% 10%)"
                              : "hsl(0 0% 30%)",
                        }}
                      >
                        {skill.name}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{
                          opacity: hoveredSkill === skill.name ? 1 : 0,
                          x: hoveredSkill === skill.name ? 0 : -8,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-xs font-mono hidden md:block"
                        style={{ color: "hsl(0 0% 55%)" }}
                      >
                        {skill.description}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Focus areas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 md:mt-24 pt-8 border-t grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ borderColor: "hsl(30 15% 85%)" }}
        >
          <div>
            <p
              className="text-xs uppercase tracking-[0.15em] font-medium mb-3"
              style={{ color: "hsl(0 0% 55%)" }}
            >
              Coursework
            </p>
            <p
              className="text-sm"
              style={{ color: "hsl(0 0% 45%)" }}
            >
              Algorithms · Data Structures · DBMS
            </p>
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-[0.15em] font-medium mb-3"
              style={{ color: "hsl(0 0% 55%)" }}
            >
              Focus
            </p>
            <p
              className="text-sm"
              style={{ color: "hsl(0 0% 45%)" }}
            >
              Performance Optimization · Accessibility · SEO · CI/CD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const responsibilities = [
  "Engineered cross-platform mobile experiences for iOS and Android.",
  "Optimized application performance and improved user retention via state-management tuning.",
  "Integrated automated intelligence features to enhance internal and external workflows.",
  "Maintained rigorous testing and quality assurance standards within a Git-driven environment.",
]

const stack = ["React Native", "Supabase", "Next.js", "QA"]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scaleY = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  })

  const lineScale = useTransform(scaleY.scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p
            className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "hsl(0 0% 60%)" }}
          >
            Experience
          </p>
          <h2
            className="text-3xl md:text-4xl font-heading font-bold tracking-tight"
            style={{ color: "hsl(0 0% 10%)" }}
          >
            Where I&apos;ve built.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-24 top-0 bottom-0 w-px"
            style={{ backgroundColor: "hsl(30 15% 85%)" }}
          />
          {/* Animated draw-on line */}
          <motion.div
            className="absolute left-0 md:left-24 top-0 bottom-0 w-px origin-top"
            style={{
              scaleY: lineScale,
              backgroundColor: "hsl(0 0% 10%)",
            }}
          />

          {/* Experience entry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8 md:pl-36"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 18 }}
              className="absolute left-0 md:left-24 top-2 -translate-x-[3.5px]"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "hsl(0 0% 10%)" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "hsl(0 0% 10% / 0.2)" }}
                animate={
                  isInView
                    ? { scale: [1, 2.4], opacity: [0.6, 0] }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* Date */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-xs tracking-wide mb-6"
              style={{ color: "hsl(0 0% 55%)" }}
            >
              Jan 2023 — Aug 2025
            </motion.p>

            {/* Title & Company */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h3
                className="text-2xl md:text-3xl font-heading font-bold tracking-tight mb-1"
                style={{ color: "hsl(0 0% 10%)" }}
              >
                Mobile App Developer
              </h3>
              <p
                className="text-lg font-medium"
                style={{ color: "hsl(0 0% 40%)" }}
              >
                Khatra Tech
              </p>
            </motion.div>

            {/* Responsibilities */}
            <ul className="space-y-4 mb-10 max-w-2xl">
              {responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.45 + i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-4 text-base leading-relaxed"
                  style={{ color: "hsl(0 0% 40%)" }}
                >
                  <motion.span
                    className="mt-2.5 h-[3px] w-[3px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: "hsl(0 0% 70%)" }}
                    animate={isInView ? { scale: [1, 1.4, 1] } : {}}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      duration: 0.6,
                      repeat: i === responsibilities.length - 1 ? Infinity : 0,
                      repeatDelay: 1.6,
                    }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <span
                className="text-[10px] uppercase tracking-[0.15em] font-medium mr-2"
                style={{ color: "hsl(0 0% 60%)" }}
              >
                Stack
              </span>
              {stack.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.8 + i * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="px-3 py-1 text-xs font-mono rounded-full"
                  style={{
                    backgroundColor: "hsl(30 15% 92%)",
                    color: "hsl(0 0% 40%)",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

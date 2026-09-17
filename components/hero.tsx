"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const headingY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), {
    stiffness: 100,
    damping: 30,
  })

  const headingScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const subtitleY = useTransform(scrollYProgress, [0, 0.3], [0, 30])

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const firstName = "Ranjit"
  const lastName = "Adhikari"

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <motion.div
        style={{ y: headingY, scale: headingScale }}
        className="text-center relative z-10"
      >
        {/* First name */}
        <h1 className="font-heading font-bold tracking-[-0.04em] leading-[0.9] select-none">
          <span className="block text-[clamp(3.5rem,12vw,10rem)]">
            {firstName.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={{
                  color: "hsl(0 0% 10%)",
                }}
                animate={
                  !isTouch
                    ? {
                        x: mousePos.x * (2 + (i % 3)),
                        y: mousePos.y * (1 + (i % 2)),
                      }
                    : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* Last name */}
          <span className="block text-[clamp(3.5rem,12vw,10rem)]">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={{
                  color: "hsl(0 0% 10%)",
                }}
                animate={
                  !isTouch
                    ? {
                        x: mousePos.x * (2 + (i % 3)),
                        y: mousePos.y * (1 + (i % 2)),
                      }
                    : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.div
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="mt-10 md:mt-14"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl font-light tracking-wide"
            style={{ color: "hsl(0 0% 45%)" }}
          >
            Frontend / Full-Stack Developer
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="/projects"

            className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "hsl(0 0% 10%)",
              color: "hsl(40 20% 95%)",
            }}
          >
            View Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d"
            target="_blank"
            rel="noopener noreferrer"

            className="inline-flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-wide border transition-all duration-300"
            style={{
              borderColor: "hsl(30 15% 82%)",
              color: "hsl(0 0% 10%)",
            }}
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] uppercase tracking-[0.2em] font-medium"
          style={{ color: "hsl(0 0% 65%)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-8 origin-top"
          style={{ backgroundColor: "hsl(0 0% 80%)" }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}

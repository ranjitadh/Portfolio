"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import Link from "next/link"

export default function AboutPage() {
  const headerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  })

  const headerY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), {
    stiffness: 100,
    damping: 30,
  })
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <LoadingScreen />
      <SmoothScrollProvider>
        <main
          className="min-h-screen overflow-x-hidden"
          style={{
            backgroundColor: "hsl(40 20% 95%)",
            color: "hsl(0 0% 10%)",
          }}
        >
          <Navbar />

          <div className="max-w-[800px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
            <motion.div
              ref={headerRef}
              style={{ y: headerY, scale: headerScale, opacity: headerOpacity }}
              className="mb-16"
            >
              <Link
                href="/"

                className="inline-flex items-center gap-2 text-sm mb-12 group"
                style={{ color: "hsl(0 0% 55%)" }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  &larr;
                </span>
                Home
              </Link>
              <h1
                className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-[1.1]"
                style={{ color: "hsl(0 0% 10%)" }}
              >
                Engineering
                <br />
                <span style={{ color: "hsl(0 0% 50%)" }}>
                  with intention.
                </span>
              </h1>
            </motion.div>

            <div className="space-y-8 text-lg leading-relaxed" style={{ color: "hsl(0 0% 40%)" }}>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                I&apos;m <strong className="font-semibold" style={{ color: "hsl(0 0% 15%)" }}>Ranjit Adhikari</strong>, a
                Fullstack Developer based in Lalitpur, Nepal. My work centers
                on the intersection of thoughtful design and reliable engineering.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                With a foundation in Computer Engineering, I build digital
                products from concept to deployment — intuitive interfaces,
                scalable backends, and everything in between. I care about
                performance, accessibility, and the small details that make
                software feel right.
              </motion.p>

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10"
                style={{ borderTop: "1px solid hsl(30 15% 85%)" }}
              >
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.15em] font-medium mb-4"
                    style={{ color: "hsl(0 0% 55%)" }}
                  >
                    Frontend
                  </p>
                  <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>
                    React, Next.js, TypeScript, Tailwind CSS, Three.js, Framer
                    Motion
                  </p>
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.15em] font-medium mb-4"
                    style={{ color: "hsl(0 0% 55%)" }}
                  >
                    Backend & Mobile
                  </p>
                  <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>
                    Node.js, PostgreSQL, Supabase, Prisma, Python, React
                    Native, Expo
                  </p>
                </div>
              </motion.div>

              {/* Focus */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-10"
                style={{ borderTop: "1px solid hsl(30 15% 85%)" }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.15em] font-medium mb-4"
                  style={{ color: "hsl(0 0% 55%)" }}
                >
                  Current Focus
                </p>
                <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>
                  Building AI-integrated workflows and enhancing web
                  accessibility. Every line of code is an opportunity to solve a
                  human problem.
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 py-12 text-center"
              style={{ borderTop: "1px solid hsl(30 15% 85%)" }}
            >
              <p
                className="text-sm mb-4"
                style={{ color: "hsl(0 0% 50%)" }}
              >
                Have a vision?
              </p>
              <a
                href="mailto:ranzeet60@gmail.com"

                className="text-3xl md:text-4xl font-heading font-bold tracking-tight transition-opacity duration-300 hover:opacity-60"
                style={{ color: "hsl(0 0% 10%)" }}
              >
                Let&apos;s build it.
              </a>
            </motion.div>
          </div>

          <Footer />
          <div className="noise-texture" />
        </main>
      </SmoothScrollProvider>
    </>
  )
}

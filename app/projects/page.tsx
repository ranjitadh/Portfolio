"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ALL_PROJECTS } from "@/components/projects"
import ProjectGraphic from "@/components/project-graphic"
import LoadingScreen from "@/components/loading-screen"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import Link from "next/link"

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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

          <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 md:mb-24"
            >
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
                style={{ color: "hsl(0 0% 60%)" }}
              >
                All Work
              </p>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.05]"
                style={{ color: "hsl(0 0% 10%)" }}
              >
                Every project,
                <br />
                <span style={{ color: "hsl(0 0% 50%)" }}>
                  a different problem.
                </span>
              </h1>
            </motion.div>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
              {ALL_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group"

                >
                  <div className="relative aspect-[16/10] overflow-hidden mb-6">
                    <ProjectGraphic
                      project={project.title}
                      className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <motion.span
                      className="absolute top-4 left-4 font-mono text-[10px]"
                      style={{ color: "rgba(0,0,0,0.3)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor: "hsl(0 0% 10%)",
                          color: "hsl(40 20% 95%)",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-heading font-bold tracking-tight mb-2"
                        style={{ color: "hsl(0 0% 10%)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed max-w-md"
                        style={{ color: "hsl(0 0% 50%)" }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-[0.1em] px-2 py-0.5"
                        style={{
                          color: "hsl(0 0% 55%)",
                          backgroundColor: "hsl(30 15% 93%)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <section className="py-20 text-center px-6">
            <p
              className="text-sm mb-6 italic"
              style={{ color: "hsl(0 0% 55%)" }}
            >
              Interested in collaborating?
            </p>
            <a
              href="mailto:ranzeet60@gmail.com"

              className="text-3xl md:text-5xl font-heading font-bold tracking-tight transition-colors duration-300 hover:opacity-60"
              style={{ color: "hsl(0 0% 10%)" }}
            >
              Let&apos;s talk.
            </a>
          </section>

          <Footer />
          <div className="noise-texture" />
        </main>
      </SmoothScrollProvider>
    </>
  )
}

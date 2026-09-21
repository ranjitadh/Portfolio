"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"

import ProjectGraphic from "@/components/project-graphic"

export const ALL_PROJECTS = [
  {
    title: "CondeGlobal",
    description:
      "Mission support and workforce solutions website for Cond\u00e9 Global Solutions LLC, featuring structured capabilities, sectors, and careers exposure.",
    link: "https://www.condeglobal.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "GoHandsY",
    description:
      "Production marketplace platform connecting customers with craftsmen, built with multilingual support and full-stack integration.",
    link: "https://gohandsy.com",
    tags: ["React", "Next.js", "Django", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Multi-Tube",
    description:
      "High-performance video streaming platform with real-time analytics and global content delivery.",
    link: "https://dev.multi-tube.com/",
    tags: ["Next.js", "Redux", "WebRTC"],
  },
  {
    title: "DataBrakes Web",
    description:
      "Sophisticated systems analytics portal featuring complex data visualizations and real-time monitoring.",
    link: "https://dev.data-brakes.com/",
    tags: ["React", "D3.js", "PostgreSQL"],
  },
  {
    title: "Cosmic Dashboard",
    description:
      "Interactive space exploration interface with real-time galaxy resource tracking and fleet management.",
    tags: ["Three.js", "React", "Motion"],
  },
  {
    title: "Neural Network",
    description:
      "Deep diving into AI behavior through an interactive, pulsating visualization of deep learning layers.",
    tags: ["AI/ML", "Pytorch", "Canvas"],
  },
  {
    title: "Quantum Interface",
    description:
      "Next-gen UX experimentation using liquid glass elements and chromatic aberration for immersive depth.",
    tags: ["UX/UI", "Framer", "GLSL"],
  },
  {
    title: "Cafe Connect",
    description:
      "Bespoke mobile ordering solution for premium coffee brands, featuring fluid UI design.",
    link: "https://baddakoadda.ranjitadhikari.com.np",
    tags: ["React Native", "Expo", "Stripe"],
  },
  {
    title: "Particle System",
    description:
      "A massive-scale particle physics simulation running in the browser using custom GPU shaders.",
    tags: ["WebGL", "Compute Shaders"],
  },
  {
    title: "SignBridge",
    description:
      "Accessibility tool translating real-time speech into sign language animations using computer vision.",
    tags: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    title: "Minesweeper",
    description:
      "Classic minesweeper puzzle game reimagined with a clean, interactive interface and smooth gameplay.",
    link: "https://minesweeper.ranjitadhikari.com.np",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Holographic UI",
    description:
      "Experimental futuristic interface design for industrial control systems and HUD visualizations.",
    tags: ["Sci-Fi UI", "Blender", "React"],
  },
]

interface ProjectCardProps {
  project: (typeof ALL_PROJECTS)[number]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3])
  const imageScale = useTransform(smoothX, [-1, 0, 1], [1.03, 1, 1.03])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const paddedIndex = String(index + 1).padStart(2, "0")

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group"

    >
      <Link href={`/projects?project=${index}`} className="block">
        {/* Image container */}
        <motion.div
          className="relative aspect-[16/10] overflow-hidden mb-6"
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            perspective: 800,
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              scale: imageScale,
            }}
          >
            <ProjectGraphic
              project={project.title}
              className="w-full h-full"
            />
          </motion.div>

          {/* Subtle overlay on hover */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isHovered
                ? "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)"
                : "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 40%)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Project number on image */}
          <motion.span
            className="absolute top-5 left-5 font-mono text-xs"
            animate={{
              y: isHovered ? 0 : 5,
              opacity: isHovered ? 1 : 0.4,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {paddedIndex}
          </motion.span>
        </motion.div>

        {/* Text content */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className="text-xl md:text-2xl font-heading font-bold tracking-tight mb-2 transition-colors duration-300"
              style={{
                color: isHovered ? "hsl(0 0% 10%)" : "hsl(0 0% 20%)",
              }}
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

        {/* Tags */}
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
      </Link>
    </motion.div>
  )
}

export default function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const displayedProjects = featuredOnly
    ? ALL_PROJECTS.slice(0, 4)
    : ALL_PROJECTS
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
        >
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: "hsl(0 0% 60%)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-heading font-bold tracking-tight"
              style={{ color: "hsl(0 0% 10%)" }}
            >
              Things I&apos;ve built.
            </h2>
          </div>

          {featuredOnly && (
            <Link
              href="/projects"

              className="group inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "hsl(0 0% 40%)" }}
            >
              View all projects
            </Link>
          )}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

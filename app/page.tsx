"use client"

import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScrollProvider>
        <main
          className="relative w-full min-h-screen overflow-x-hidden"
          style={{
            backgroundColor: "hsl(40 20% 95%)",
            color: "hsl(0 0% 10%)",
          }}
        >
          <Navbar />

          <div className="relative z-10">
            <Hero />

            <div className="section-divider" />

            <Skills />

            <div className="section-divider" />

            <Experience />

            <div className="section-divider" />

            <Projects featuredOnly={true} />

            <div className="section-divider" />

            <Education />

            <div className="section-divider" />

            <Contact />
          </div>

          <Footer />

          {/* Subtle texture overlay */}
          <div className="noise-texture" />
        </main>
      </SmoothScrollProvider>
    </>
  )
}

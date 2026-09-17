"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 md:py-20 px-6 md:px-10">
      <div
        className="max-w-[1200px] mx-auto pt-10 border-t"
        style={{ borderColor: "hsl(30 15% 85%)" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Left */}
          <div className="space-y-3">
              <p
                className="text-sm font-medium"
                style={{ color: "hsl(0 0% 15%)" }}
              >
                Ranjit Adhikari
              </p>
              <p
                className="text-xs"
                style={{ color: "hsl(0 0% 55%)" }}
              >
                Fullstack Developer
              </p>
          </div>

          {/* Center */}
          <div className="text-xs" style={{ color: "hsl(0 0% 55%)" }}>
            <p>Lalitpur, Nepal</p>
            <a
              href="mailto:ranzeet60@gmail.com"

              className="hover:opacity-60 transition-opacity"
              style={{ color: "hsl(0 0% 40%)" }}
            >
              ranzeet60@gmail.com
            </a>
          </div>

          {/* Right - Back to top */}
          <motion.button
            onClick={scrollToTop}

            whileTap={{ scale: 0.92 }}
            className="group flex items-center gap-2 text-xs font-medium"
            style={{ color: "hsl(0 0% 55%)" }}
          >
            <span className="group-hover:translate-y-[-2px] transition-transform duration-300">
              Back to top
            </span>
            <span className="inline-block group-hover:translate-y-[-3px] transition-transform duration-300">
              &uarr;
            </span>
          </motion.button>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p
            className="text-[10px] font-mono"
            style={{ color: "hsl(0 0% 75%)" }}
          >
            &copy; {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.upwork.com/freelancers/~0193267b112e1a1b2d"
              target="_blank"
              rel="noopener noreferrer"

              className="text-[10px] font-mono uppercase tracking-wider hover:opacity-60 transition-opacity"
              style={{ color: "hsl(0 0% 60%)" }}
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const duration = 800
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(Math.round(p * 100))
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setIsVisible(false), 200)
      }
    }

    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ backgroundColor: "hsl(40 20% 95%)" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="font-heading text-2xl font-bold tracking-tight"
              style={{ color: "hsl(0 0% 10%)" }}
            >
              RA.
            </motion.span>
            <div className="w-16 h-px relative overflow-hidden" style={{ backgroundColor: "hsl(30 15% 88%)" }}>
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ backgroundColor: "hsl(0 0% 10%)" }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs tabular-nums"
              style={{ color: "hsl(0 0% 65%)" }}
            >
              {progress}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

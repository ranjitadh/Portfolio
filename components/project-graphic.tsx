"use client"

import React from "react"

interface ProjectGraphicProps {
  project: string
  className?: string
}

export default function ProjectGraphic({ project, className = "" }: ProjectGraphicProps) {
  const graphics: Record<string, React.ReactElement> = {
    "Multi-Tube": (
      <svg viewBox="0 0 800 500" fill="none" className={className} preserveAspectRatio="xMidYMid meet">
        <rect width="800" height="500" fill="#0F1117" />
        <image href="/multi-tube.png" x="0" y="0" width="800" height="500" preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),

    "CondeGlobal": (
      <svg viewBox="0 0 800 500" fill="none" className={className} preserveAspectRatio="xMidYMid meet">
        <rect width="800" height="500" fill="#0D1B2A" />
        <image href="/condeglobal.png" x="0" y="0" width="800" height="500" preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),

    "DataBrakes Web": (
      <svg viewBox="0 0 800 500" fill="none" className={className} preserveAspectRatio="xMidYMid meet">
        <rect width="800" height="500" fill="#FFFFFF" />
        <image href="/data-brakes.png" x="0" y="0" width="800" height="500" preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),

    "Cosmic Dashboard": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#1A1A1A" />
        {/* Stars */}
        {[
          [120, 80], [250, 40], [400, 60], [550, 90], [680, 50],
          [100, 180], [300, 150], [500, 170], [650, 140],
          [180, 320], [350, 350], [520, 310], [620, 360],
          [80, 420], [280, 440], [460, 400], [580, 430],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1} fill={i % 5 === 0 ? "#F0EDE6" : "#555"} />
        ))}
        {/* Planet */}
        <circle cx="400" cy="250" r="70" stroke="#F0EDE6" strokeWidth="1" fill="none" />
        <ellipse cx="400" cy="250" rx="110" ry="20" stroke="#555" strokeWidth="0.8" fill="none" transform="rotate(-15 400 250)" />
        {/* Orbit dots */}
        <circle cx="310" cy="240" r="4" fill="#F0EDE6" />
        <circle cx="500" cy="235" r="3" fill="#888" />
        {/* Dashboard elements */}
        <rect x="80" y="380" width="120" height="3" rx="1.5" fill="#333" />
        <rect x="80" y="390" width="80" height="3" rx="1.5" fill="#444" />
        <rect x="600" y="380" width="120" height="3" rx="1.5" fill="#333" />
        <rect x="600" y="390" width="90" height="3" rx="1.5" fill="#444" />
      </svg>
    ),

    "Neural Network": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F0EDE6" />
        {/* Input layer */}
        {[150, 210, 270, 330, 390].map((y, i) => (
          <circle key={`in-${i}`} cx="200" cy={y} r="8" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        ))}
        {/* Hidden layer 1 */}
        {[170, 230, 290, 350].map((y, i) => (
          <circle key={`h1-${i}`} cx="380" cy={y} r="8" stroke="#C8C4BC" strokeWidth="1.5" fill="none" />
        ))}
        {/* Hidden layer 2 */}
        {[190, 250, 310].map((y, i) => (
          <circle key={`h2-${i}`} cx="540" cy={y} r="8" stroke="#C8C4BC" strokeWidth="1.5" fill="none" />
        ))}
        {/* Output */}
        <circle cx="680" cy="250" r="10" fill="#1A1A1A" />
        {/* Connections - input to hidden1 */}
        {[150, 210, 270, 330, 390].map((y1) =>
          [170, 230, 290, 350].map((y2, j) => (
            <line key={`c1-${y1}-${j}`} x1="208" y1={y1} x2="372" y2={y2} stroke="#E5E2DC" strokeWidth="0.6" />
          ))
        )}
        {/* Connections - hidden1 to hidden2 */}
        {[170, 230, 290, 350].map((y1) =>
          [190, 250, 310].map((y2, j) => (
            <line key={`c2-${y1}-${j}`} x1="388" y1={y1} x2="532" y2={y2} stroke="#E5E2DC" strokeWidth="0.6" />
          ))
        )}
        {/* Connections - hidden2 to output */}
        {[190, 250, 310].map((y1) => (
          <line key={`c3-${y1}`} x1="548" y1={y1} x2="670" y2="250" stroke="#D4D0C8" strokeWidth="0.8" />
        ))}
      </svg>
    ),

    "GoHandsY": (
      <svg viewBox="0 0 800 500" fill="none" className={className} preserveAspectRatio="xMidYMid meet">
        <rect width="800" height="500" fill="#F7FAF7" />
        <image href="/gohandsy.png" x="0" y="0" width="800" height="500" preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),

    "Quantum Interface": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F0EDE6" />
        {/* Liquid wave forms */}
        <path d="M100 250 Q200 180 300 250 Q400 320 500 250 Q600 180 700 250" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <path d="M100 260 Q200 200 300 260 Q400 320 500 260 Q600 200 700 260" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        <path d="M100 270 Q200 220 300 270 Q400 320 500 270 Q600 220 700 270" stroke="#E5E2DC" strokeWidth="0.8" fill="none" />
        {/* Glass panel */}
        <rect x="250" y="100" width="300" height="180" rx="8" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        <rect x="260" y="110" width="280" height="160" rx="4" fill="white" fillOpacity="0.3" />
        {/* Interface elements inside */}
        <circle cx="310" cy="160" r="15" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        <rect x="350" y="150" width="140" height="3" rx="1.5" fill="#E5E2DC" />
        <rect x="350" y="162" width="100" height="2" rx="1" fill="#E5E2DC" />
        <rect x="280" y="200" width="240" height="2" rx="1" fill="#E5E2DC" />
        <rect x="280" y="215" width="180" height="2" rx="1" fill="#E5E2DC" />
        <rect x="280" y="230" width="200" height="2" rx="1" fill="#E5E2DC" />
        {/* Chromatic aberration lines */}
        <line x1="200" y1="350" x2="600" y2="350" stroke="#D4D0C8" strokeWidth="0.5" />
        <line x1="200" y1="352" x2="600" y2="352" stroke="#E5E2DC" strokeWidth="0.5" />
      </svg>
    ),

    "Cafe Connect": (
      <svg viewBox="0 0 800 500" fill="none" className={className} preserveAspectRatio="xMidYMid meet">
        <rect width="800" height="500" fill="#F0EDE6" />
        <image href="/baddakoadda.png" x="0" y="0" width="800" height="500" preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),

    "Particle System": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#1A1A1A" />
        {/* Grid of particles with varying sizes and opacities */}
        {Array.from({ length: 40 }).map((_, i) => {
          const x = 100 + (i % 8) * 80 + Math.sin(i * 1.3) * 20
          const y = 80 + Math.floor(i / 8) * 80 + Math.cos(i * 0.9) * 15
          const r = 1 + (i % 3) * 0.8
          const opacity = 0.2 + (i % 5) * 0.15
          return <circle key={i} cx={x} cy={y} r={r} fill={`rgba(240,237,230,${opacity})`} />
        })}
        {/* Connection lines between some particles */}
        <line x1="180" y1="160" x2="260" y2="155" stroke="#444" strokeWidth="0.5" />
        <line x1="260" y1="155" x2="340" y2="170" stroke="#444" strokeWidth="0.5" />
        <line x1="340" y1="170" x2="420" y2="150" stroke="#444" strokeWidth="0.5" />
        <line x1="500" y1="240" x2="580" y2="235" stroke="#444" strokeWidth="0.5" />
        <line x1="580" y1="235" x2="660" y2="250" stroke="#444" strokeWidth="0.5" />
        <line x1="180" y1="320" x2="260" y2="315" stroke="#333" strokeWidth="0.5" />
        <line x1="420" y1="310" x2="500" y2="320" stroke="#333" strokeWidth="0.5" />
        {/* Central bright particle */}
        <circle cx="400" cy="250" r="3" fill="#F0EDE6" />
        <circle cx="400" cy="250" r="8" stroke="#F0EDE6" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>
    ),

    "Virtual Worlds": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F0EDE6" />
        {/* Low-poly mountain */}
        <polygon points="200,380 350,180 500,380" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <polygon points="320,380 450,220 580,380" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        <polygon points="440,380 550,260 660,380" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        {/* Ground line */}
        <line x1="100" y1="380" x2="700" y2="380" stroke="#E5E2DC" strokeWidth="1" />
        {/* Sun */}
        <circle cx="600" cy="120" r="30" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        <circle cx="600" cy="120" r="40" stroke="#E5E2DC" strokeWidth="0.5" fill="none" />
        {/* Small trees */}
        <line x1="160" y1="380" x2="160" y2="350" stroke="#1A1A1A" strokeWidth="1.5" />
        <polygon points="140,360 160,330 180,360" stroke="#1A1A1A" strokeWidth="1" fill="none" />
        <line x1="640" y1="380" x2="640" y2="355" stroke="#C8C4BC" strokeWidth="1.5" />
        <polygon points="625,365 640,340 655,365" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        {/* Grid on ground */}
        <line x1="200" y1="400" x2="600" y2="400" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="250" y1="415" x2="550" y2="415" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="300" y1="430" x2="500" y2="430" stroke="#E5E2DC" strokeWidth="0.5" />
      </svg>
    ),

    "SignBridge": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F0EDE6" />
        {/* Speech bubble */}
        <rect x="140" y="140" width="200" height="100" rx="12" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        <polygon points="200,240 220,270 240,240" stroke="#1A1A1A" strokeWidth="1.5" fill="#F0EDE6" />
        {/* Sound waves inside */}
        <line x1="180" y1="180" x2="180" y2="210" stroke="#C8C4BC" strokeWidth="2" strokeLinecap="round" />
        <line x1="200" y1="170" x2="200" y2="220" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
        <line x1="220" y1="175" x2="220" y2="215" stroke="#C8C4BC" strokeWidth="2" strokeLinecap="round" />
        <line x1="240" y1="180" x2="240" y2="210" stroke="#D4D0C8" strokeWidth="2" strokeLinecap="round" />
        <line x1="260" y1="185" x2="260" y2="205" stroke="#E5E2DC" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arrow */}
        <line x1="370" y1="190" x2="430" y2="190" stroke="#1A1A1A" strokeWidth="1.5" />
        <polyline points="420,180 430,190 420,200" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        {/* Hand sign */}
        <circle cx="520" cy="170" r="25" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
        {/* Fingers */}
        <line x1="510" y1="148" x2="505" y2="130" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="520" y1="146" x2="520" y2="126" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="530" y1="148" x2="535" y2="130" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="538" y1="155" x2="550" y2="142" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Connection dots */}
        <circle cx="400" cy="340" r="4" fill="#D4D0C8" />
        <circle cx="440" cy="340" r="4" fill="#C8C4BC" />
        <circle cx="480" cy="340" r="4" fill="#D4D0C8" />
        <line x1="380" y1="340" x2="500" y2="340" stroke="#E5E2DC" strokeWidth="0.5" />
      </svg>
    ),

    "Holographic UI": (
      <svg viewBox="0 0 800 500" fill="none" className={className} preserveAspectRatio="xMidYMid meet">
        <rect width="800" height="500" fill="#F0EDE6" />
        <image href="/holographics-ui.png" x="0" y="0" width="800" height="500" preserveAspectRatio="xMidYMid meet" />
      </svg>
    ),
  }

  return graphics[project] || (
    <svg viewBox="0 0 800 500" fill="none" className={className}>
      <rect width="800" height="500" fill="#F0EDE6" />
      <rect x="300" y="180" width="200" height="140" rx="4" stroke="#D4D0C8" strokeWidth="1" fill="none" />
    </svg>
  )
}

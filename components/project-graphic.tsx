"use client"

import React from "react"

interface ProjectGraphicProps {
  project: string
  className?: string
}

export default function ProjectGraphic({ project, className = "" }: ProjectGraphicProps) {
  const graphics: Record<string, React.ReactElement> = {
    "Multi-Tube": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#0F1117" />
        {/* Actual Multi-Tube logo */}
        <image href="https://play-lh.googleusercontent.com/Kt3Z-JrFk8Ui0yWOSTYMRdCwBUbkHfqJLh5efMjvEPfFTTjTux8GuUqMpIFh6ymw-w2AhP83IyahgJJ4-9q22Q=w480-h960-rw" x="310" y="40" width="180" height="180" preserveAspectRatio="xMidYMid meet" />
        {/* Multi-view grid — 4 video panels */}
        <rect x="60" y="260" width="310" height="110" rx="6" fill="#1A1D27" stroke="#2A2D3A" strokeWidth="1" />
        <polygon points="200,295 200,335 230,315" fill="#FF2D2D" />
        <rect x="75" y="345" width="80" height="3" rx="1.5" fill="#2A2D3A" />
        <rect x="75" y="355" width="50" height="2" rx="1" fill="#22253A" />
        <rect x="430" y="260" width="310" height="110" rx="6" fill="#1A1D27" stroke="#2A2D3A" strokeWidth="1" />
        <polygon points="575,295 575,335 605,315" fill="#FF2D2D" />
        <rect x="445" y="345" width="90" height="3" rx="1.5" fill="#2A2D3A" />
        <rect x="445" y="355" width="60" height="2" rx="1" fill="#22253A" />
        <rect x="60" y="390" width="350" height="80" rx="6" fill="#1A1D27" stroke="#2A2D3A" strokeWidth="1" />
        <polygon points="220,415 220,455 250,435" fill="#FF2D2D" />
        <rect x="430" y="390" width="310" height="80" rx="6" fill="#1A1D27" stroke="#2A2D3A" strokeWidth="1" />
        <polygon points="575,415 575,455 605,435" fill="#FF2D2D" />
        {/* LIVE badges */}
        <rect x="75" y="275" width="36" height="16" rx="3" fill="#FF2D2D" />
        <text x="83" y="286" fill="white" fontSize="7" fontWeight="700" fontFamily="sans-serif">LIVE</text>
        <rect x="445" y="275" width="36" height="16" rx="3" fill="#FF2D2D" />
        <text x="453" y="286" fill="white" fontSize="7" fontWeight="700" fontFamily="sans-serif">LIVE</text>
      </svg>
    ),

    "DataBrakes Web": (
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#FFFFFF" />
        {/* DataBrakes database icon */}
        <g transform="translate(340, 60)">
          <ellipse cx="60" cy="20" rx="60" ry="18" fill="#2f64dc" />
          <rect x="0" y="20" width="120" height="100" fill="#2f64dc" />
          <ellipse cx="60" cy="120" rx="60" ry="18" fill="#234fb8" />
          <ellipse cx="60" cy="70" rx="60" ry="14" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="60" cy="20" rx="60" ry="18" fill="#4a7ee8" />
        </g>
        {/* DataBrakes wordmark */}
        <text x="400" y="230" textAnchor="middle" fill="#0b1020" fontSize="36" fontWeight="800" fontFamily="Inter, Segoe UI, sans-serif" letterSpacing="-1">Data</text>
        <text x="400" y="230" textAnchor="middle" fill="#2f64dc" fontSize="36" fontWeight="800" fontFamily="Inter, Segoe UI, sans-serif" letterSpacing="-1" dx="68">Brakes</text>
        {/* Tagline */}
        <text x="400" y="258" textAnchor="middle" fill="#5d6678" fontSize="12" fontFamily="Inter, sans-serif">Operational data → governed workflows</text>
        {/* Login card preview */}
        <g transform="translate(250, 290)">
          <rect x="0" y="0" width="300" height="160" rx="10" fill="#fff" stroke="#dce1ea" strokeWidth="1" />
          <rect x="0" y="0" width="300" height="40" rx="10" fill="#f8f9fc" />
          <rect x="0" y="30" width="300" height="10" fill="#f8f9fc" />
          <text x="150" y="26" textAnchor="middle" fill="#0b1020" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">Sign in to DataBrakes</text>
          <rect x="24" y="55" width="252" height="28" rx="5" fill="#fff" stroke="#ced5e2" strokeWidth="1" />
          <text x="36" y="73" fill="#9db0d7" fontSize="9" fontFamily="Inter, sans-serif">Email address</text>
          <rect x="24" y="95" width="252" height="28" rx="5" fill="#fff" stroke="#ced5e2" strokeWidth="1" />
          <text x="36" y="113" fill="#9db0d7" fontSize="9" fontFamily="Inter, sans-serif">Password</text>
          <rect x="24" y="135" width="252" height="28" rx="5" fill="#2f64dc" />
          <text x="150" y="153" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">Continue</text>
        </g>
        {/* Status dots */}
        <circle cx="250" cy="480" r="4" fill="#26865c" />
        <text x="262" y="484" fill="#5d6678" fontSize="9" fontFamily="Inter, sans-serif">System operational</text>
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
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F7FAF7" />
        {/* Green accent bar */}
        <rect x="0" y="0" width="800" height="4" fill="#3A8F4A" />
        {/* Actual Handsy logo */}
        <image href="https://www.gohandsy.com/handsy_logo_v2.png" x="340" y="40" width="120" height="120" preserveAspectRatio="xMidYMid meet" />
        {/* Brand name */}
        <text x="400" y="200" textAnchor="middle" fill="#1A1A1A" fontSize="38" fontWeight="800" fontFamily="Outfit, sans-serif" letterSpacing="-0.5">Handsy</text>
        <text x="400" y="228" textAnchor="middle" fill="#3A8F4A" fontSize="13" fontWeight="500" fontFamily="Inter, sans-serif" letterSpacing="2">CONNECT WITH CRAFTSMEN</text>
        {/* Marketplace preview cards */}
        <g transform="translate(100, 270)">
          <rect x="0" y="0" width="160" height="110" rx="8" fill="white" stroke="#E5E8E5" strokeWidth="1" />
          <rect x="12" y="12" width="136" height="50" rx="4" fill="#E8F5E9" />
          <rect x="12" y="72" width="80" height="5" rx="2.5" fill="#3A8F4A" opacity="0.3" />
          <rect x="12" y="84" width="110" height="4" rx="2" fill="#E5E8E5" />
          <rect x="12" y="94" width="60" height="3" rx="1.5" fill="#E5E8E5" />
        </g>
        <g transform="translate(280, 270)">
          <rect x="0" y="0" width="160" height="110" rx="8" fill="white" stroke="#E5E8E5" strokeWidth="1" />
          <rect x="12" y="12" width="136" height="50" rx="4" fill="#FFF3E0" />
          <rect x="12" y="72" width="90" height="5" rx="2.5" fill="#E67E22" opacity="0.3" />
          <rect x="12" y="84" width="100" height="4" rx="2" fill="#E5E8E5" />
          <rect x="12" y="94" width="70" height="3" rx="1.5" fill="#E5E8E5" />
        </g>
        <g transform="translate(460, 270)">
          <rect x="0" y="0" width="160" height="110" rx="8" fill="white" stroke="#E5E8E5" strokeWidth="1" />
          <rect x="12" y="12" width="136" height="50" rx="4" fill="#E3F2FD" />
          <rect x="12" y="72" width="70" height="5" rx="2.5" fill="#2196F3" opacity="0.3" />
          <rect x="12" y="84" width="120" height="4" rx="2" fill="#E5E8E5" />
          <rect x="12" y="94" width="55" height="3" rx="1.5" fill="#E5E8E5" />
        </g>
        <g transform="translate(640, 270)">
          <rect x="0" y="0" width="100" height="110" rx="8" fill="white" stroke="#E5E8E5" strokeWidth="1" />
          <rect x="12" y="12" width="76" height="50" rx="4" fill="#F3E5F5" />
          <rect x="12" y="72" width="60" height="5" rx="2.5" fill="#9C27B0" opacity="0.3" />
          <rect x="12" y="84" width="70" height="4" rx="2" fill="#E5E8E5" />
          <rect x="12" y="94" width="50" height="3" rx="1.5" fill="#E5E8E5" />
        </g>
        {/* Bottom bar */}
        <rect x="0" y="420" width="800" height="80" fill="#3A8F4A" opacity="0.06" />
        <text x="400" y="468" textAnchor="middle" fill="#3A8F4A" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.5">gohandsy.com</text>
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
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F0EDE6" />
        {/* Coffee cup */}
        <path d="M340 180 L340 300 Q340 330 370 330 L430 330 Q460 330 460 300 L460 180" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <line x1="320" y1="180" x2="480" y2="180" stroke="#1A1A1A" strokeWidth="2" />
        {/* Handle */}
        <path d="M460 210 Q500 210 500 250 Q500 290 460 290" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        {/* Steam */}
        <path d="M380 160 Q375 140 385 120" stroke="#C8C4BC" strokeWidth="1.2" fill="none" />
        <path d="M400 155 Q395 130 405 110" stroke="#C8C4BC" strokeWidth="1.2" fill="none" />
        <path d="M420 160 Q415 140 425 120" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        {/* Phone frame */}
        <rect x="560" y="140" width="90" height="160" rx="12" stroke="#D4D0C8" strokeWidth="1.5" fill="none" />
        <rect x="570" y="160" width="70" height="100" rx="2" fill="#E5E2DC" />
        <circle cx="605" cy="280" r="4" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        {/* Order button on phone */}
        <rect x="575" y="275" width="60" height="12" rx="6" fill="#D4D0C8" />
        {/* Small decorative dots */}
        <circle cx="200" cy="350" r="2" fill="#E5E2DC" />
        <circle cx="220" cy="350" r="2" fill="#D4D0C8" />
        <circle cx="240" cy="350" r="2" fill="#E5E2DC" />
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
      <svg viewBox="0 0 800 500" fill="none" className={className}>
        <rect width="800" height="500" fill="#F0EDE6" />
        {/* Perspective grid */}
        <line x1="400" y1="100" x2="100" y2="400" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="400" y1="100" x2="250" y2="400" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="400" y1="100" x2="400" y2="400" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="400" y1="100" x2="550" y2="400" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="400" y1="100" x2="700" y2="400" stroke="#E5E2DC" strokeWidth="0.5" />
        {/* Horizontal grid lines */}
        <line x1="200" y1="200" x2="600" y2="200" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="150" y1="280" x2="650" y2="280" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="100" y1="360" x2="700" y2="360" stroke="#E5E2DC" strokeWidth="0.5" />
        {/* HUD elements */}
        <rect x="280" y="160" width="240" height="120" rx="2" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        <circle cx="320" cy="200" r="20" stroke="#D4D0C8" strokeWidth="1" fill="none" />
        <line x1="360" y1="195" x2="480" y2="195" stroke="#D4D0C8" strokeWidth="1" />
        <line x1="360" y1="210" x2="460" y2="210" stroke="#E5E2DC" strokeWidth="1" />
        <line x1="300" y1="240" x2="500" y2="240" stroke="#E5E2DC" strokeWidth="0.5" />
        <line x1="300" y1="255" x2="480" y2="255" stroke="#E5E2DC" strokeWidth="0.5" />
        {/* Scan line */}
        <line x1="280" y1="180" x2="520" y2="180" stroke="#D4D0C8" strokeWidth="0.5" opacity="0.5" />
        {/* Corner markers */}
        <polyline points="280,170 280,160 290,160" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        <polyline points="510,160 520,160 520,170" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        <polyline points="280,270 280,280 290,280" stroke="#C8C4BC" strokeWidth="1" fill="none" />
        <polyline points="510,280 520,280 520,270" stroke="#C8C4BC" strokeWidth="1" fill="none" />
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

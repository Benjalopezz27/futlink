"use client";
import { motion } from "framer-motion";

export function PitchBackground() {
  const players = [
    { id: 1, pathX: [220, 380, 280, 220], pathY: [150, 190, 310, 150], color: "#10b981", delay: 0 },
    { id: 2, pathX: [390, 490, 430, 390], pathY: [250, 140, 340, 250], color: "#10b981", delay: 1.5 },
    { id: 3, pathX: [580, 480, 620, 580], pathY: [320, 220, 180, 320], color: "#f97316", delay: 3 },
    { id: 4, pathX: [280, 420, 340, 280], pathY: [380, 320, 410, 380], color: "#f97316", delay: 0.5 },
    { id: 5, pathX: [450, 520, 480, 450], pathY: [120, 210, 160, 120], color: "#06b6d4", delay: 2.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950">
      {/* Dark background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.12),transparent_70%),radial-gradient(ellipse_at_50%_100%,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />

      {/* 3D Isometric container */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          initial={{ rotateX: 55, rotateZ: -35, y: 50, opacity: 0 }}
          animate={{ 
            rotateX: [55, 53, 55],
            rotateZ: [-35, -37, -35],
            y: [50, 40, 50],
            opacity: 0.7
          }}
          transition={{
            rotateX: { duration: 24, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 24, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 24, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1.2, ease: "easeOut" }
          }}
          className="relative w-[1150px] h-[720px] origin-center"
        >
          {/* Soccer pitch SVG */}
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full text-emerald-500/40"
            style={{ filter: "drop-shadow(0 0 25px rgba(16,185,129,0.15))" }}
          >
            <defs>
              <filter id="pitch-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Pitch Base Lines (Emerald Glow) */}
            <g stroke="#10b981" strokeWidth="2.5" fill="none" opacity="0.35" filter="url(#pitch-glow)">
              {/* Outer boundary */}
              <rect x="50" y="50" width="700" height="400" rx="4" />
              {/* Halfway line */}
              <line x1="400" y1="50" x2="400" y2="450" />
              {/* Center Circle */}
              <circle cx="400" cy="250" r="70" />
              {/* Penalty Area Left */}
              <rect x="50" y="130" width="110" height="240" />
              <rect x="50" y="190" width="40" height="120" />
              <path d="M 160 210 A 50 50 0 0 1 160 290" />
              {/* Penalty Area Right */}
              <rect x="640" y="130" width="110" height="240" />
              <rect x="710" y="190" width="40" height="120" />
              <path d="M 640 210 A 50 50 0 0 0 640 290" />
            </g>

            {/* Pitch Inner Crisp Lines (Emerald/Cyan Sharp) */}
            <g stroke="#34d399" strokeWidth="1.2" fill="none" opacity="0.8">
              {/* Outer boundary */}
              <rect x="50" y="50" width="700" height="400" rx="4" />
              {/* Halfway line */}
              <line x1="400" y1="50" x2="400" y2="450" />
              {/* Center Circle */}
              <circle cx="400" cy="250" r="70" />
              <circle cx="400" cy="250" r="3" fill="#34d399" />
              {/* Penalty Area Left */}
              <rect x="50" y="130" width="110" height="240" />
              <rect x="50" y="190" width="40" height="120" />
              <circle cx="130" cy="250" r="2.5" fill="#34d399" />
              <path d="M 160 210 A 50 50 0 0 1 160 290" />
              {/* Penalty Area Right */}
              <rect x="640" y="130" width="110" height="240" />
              <rect x="710" y="190" width="40" height="120" />
              <circle cx="670" cy="250" r="2.5" fill="#34d399" />
              <path d="M 640 210 A 50 50 0 0 0 640 290" />
              
              {/* Corner Arcs */}
              <path d="M 50 65 A 15 15 0 0 1 65 50" />
              <path d="M 65 450 A 15 15 0 0 1 50 435" />
              <path d="M 735 50 A 15 15 0 0 1 750 65" />
              <path d="M 750 435 A 15 15 0 0 1 735 450" />
            </g>

            {/* Tactical Grid Overlay (dashed guidelines) */}
            <g stroke="rgba(16,185,129,0.12)" strokeWidth="0.8" strokeDasharray="5 5" fill="none">
              <line x1="225" y1="50" x2="225" y2="450" />
              <line x1="575" y1="50" x2="575" y2="450" />
              <line x1="50" y1="250" x2="750" y2="250" />
            </g>

            {/* Glowing Tactical Players / Heat Dots */}
            {players.map((p) => (
              <g key={p.id}>
                {/* Outer Glow */}
                <motion.circle
                  animate={{ cx: p.pathX, cy: p.pathY }}
                  transition={{
                    duration: 15 + p.id * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                  r="10"
                  fill={p.color}
                  opacity="0.3"
                  filter="url(#dot-glow)"
                />
                {/* Core Spot */}
                <motion.circle
                  animate={{ cx: p.pathX, cy: p.pathY }}
                  transition={{
                    duration: 15 + p.id * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                  r="4"
                  fill="#ffffff"
                  stroke={p.color}
                  strokeWidth="2"
                />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>

      {/* scanlines vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.5),transparent_25%,transparent_75%,#020617)] pointer-events-none" />
    </div>
  );
}

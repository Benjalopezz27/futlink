"use client";
import { motion } from "framer-motion";

export function PitchBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(ellipse_at_50%_100%,rgba(249,115,22,0.08),transparent_50%)]" />
      {/* 3D perspective grid */}
      <div
        className="absolute inset-x-[-25%] bottom-0 h-[85%]"
        style={{ perspective: "800px" }}
      >
        <div
          className="pitch-grid absolute inset-0 origin-top"
          style={{
            transform: "rotateX(60deg) translateY(10%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 80%, transparent 100%)",
          }}
        />
      </div>
      {/* center circle */}
      <div
        className="pointer-events-none absolute left-1/2 top-[68%] h-[280px] w-[520px] -translate-x-1/2 rounded-full border border-emerald-500/40"
        style={{ transform: "translate(-50%,-50%) rotateX(70deg)", boxShadow: "0 0 80px rgba(16,185,129,0.25)" }}
      />
      {/* scanlines vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.4),transparent_20%,transparent_80%,#020617)]" />
      {/* floating orbs */}
      <motion.div
        className="absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-emerald-400 shadow-glow-emerald"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[20%] top-[40%] h-1.5 w-1.5 rounded-full bg-orange-400 shadow-glow-orange"
        animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute right-[35%] top-[20%] h-1 w-1 rounded-full bg-emerald-300"
        animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}

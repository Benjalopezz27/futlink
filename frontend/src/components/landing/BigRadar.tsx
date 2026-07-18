"use client";
import { motion } from "framer-motion";

export function BigRadar() {
  const size = 380;
  const cx = size / 2;
  const cy = size / 2;
  const axes = 6;
  const values = [0.9, 0.7, 0.85, 0.6, 0.78, 0.92];
  const angle = (i: number) => (Math.PI * 2 * i) / axes - Math.PI / 2;
  const pt = (i: number, r: number) => [cx + Math.cos(angle(i)) * r, cy + Math.sin(angle(i)) * r];
  const rings = [0.25, 0.5, 0.75, 1];
  const R = 120; // Slightly reduce radar radius to leave even more margin for long label strings
  const playerPts = values.map((v, i) => pt(i, R * v).join(",")).join(" ");
  const labels = ["Ofensiva", "Recuperación", "Distribución", "Duelos", "Posicionamiento", "Juego Aéreo"];

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(16,185,129,0.25)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0)" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={R} fill="url(#rg)" />
      {rings.map((s, i) => (
        <polygon
          key={i}
          points={Array.from({ length: axes }, (_, k) => pt(k, R * s).join(",")).join(" ")}
          fill="none"
          stroke="rgba(16,185,129,0.25)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: axes }, (_, i) => {
        const [x, y] = pt(i, R);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(16,185,129,0.2)" strokeWidth="1" />;
      })}
      <motion.polygon
        points={playerPts}
        fill="rgba(249,115,22,0.25)"
        stroke="#F97316"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: `${cx}px ${cy}px`, filter: "drop-shadow(0 0 12px rgba(249,115,22,0.6))" }}
      />
      {values.map((v, i) => {
        const [x, y] = pt(i, R * v);
        return <circle key={i} cx={x} cy={y} r="4" fill="#F97316" />;
      })}
      {labels.map((l, i) => {
        const [x, y] = pt(i, R + 22);
        return (
          <text key={l} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-slate-400" style={{ font: "600 10px 'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>
            {l.toUpperCase()}
          </text>
        );
      })}
    </svg>
  );
}

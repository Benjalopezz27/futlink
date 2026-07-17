"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function ConnectionMap() {
  const nodes = [
    { x: 22, y: 62, label: "São Paulo, BR" },
    { x: 18, y: 70, label: "Buenos Aires, AR" },
    { x: 30, y: 40, label: "Miami, US" },
    { x: 38, y: 32, label: "New York, US" },
    { x: 52, y: 34, label: "London, UK" },
    { x: 60, y: 40, label: "Madrid, ES" },
    { x: 78, y: 45, label: "Tokyo, JP" },
    { x: 66, y: 55, label: "Lagos, NG" },
  ];
  const links: [number, number][] = [
    [0, 2],
    [1, 3],
    [0, 5],
    [2, 4],
    [5, 7],
    [3, 4],
    [6, 4],
    [1, 5],
  ];

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-md">
      {/* dotted globe grid */}
      <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.2" fill="rgba(16,185,129,0.25)" />
          </pattern>
        </defs>
        <rect width="100" height="60" fill="url(#dots)" />
        {/* horizontal latitude arcs */}
        {[15, 30, 45].map((y, i) => (
          <path key={i} d={`M 0 ${y} Q 50 ${y - 6} 100 ${y}`} fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="0.2" />
        ))}

        {/* links */}
        {links.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          const midX = (na.x + nb.x) / 2;
          const midY = Math.min(na.y, nb.y) - 8;
          const d = `M ${na.x} ${na.y} Q ${midX} ${midY} ${nb.x} ${nb.y}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(16,185,129,0.35)" strokeWidth="0.25" />
              <path
                d={d}
                fill="none"
                stroke="#10B981"
                strokeWidth="0.35"
                strokeDasharray="3 200"
                style={{ animation: `dash ${3 + i * 0.4}s linear infinite`, filter: "drop-shadow(0 0 1px #10B981)" }}
              />
            </g>
          );
        })}
      </svg>

      {/* nodes */}
      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-glow-emerald" />
          </span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-slate-400">
            {n.label}
          </span>
        </div>
      ))}

      {/* floating notification */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 right-6 max-w-xs rounded-xl border border-orange-400/30 bg-orange-500/10 p-4 backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-orange-400" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-orange-300">Match confirmado</p>
        </div>
        <p className="mt-1 text-sm font-semibold text-white">São Paulo → Miami</p>
        <p className="text-xs text-slate-400">L. Moreira aceptó la propuesta.</p>
      </motion.div>
    </div>
  );
}

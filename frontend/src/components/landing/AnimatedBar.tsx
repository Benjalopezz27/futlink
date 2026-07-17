"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  useEffect(() => {
    if (inView) animate(count, value, { duration: 1.6, delay, ease: "easeOut" });
  }, [inView, value, delay, count]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
        <span className="text-slate-300">{label}</span>
        <span className="text-emerald-300">{display}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.6, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-glow-emerald"
        />
      </div>
    </div>
  );
}

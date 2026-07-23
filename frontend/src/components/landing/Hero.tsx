"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PitchBackground } from "./PitchBackground";
import { MagneticButton } from "./MagneticButton";
import { FloatingCard } from "./FloatingCard";
import { MiniRadar } from "./MiniRadar";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden min-h-[92vh] flex items-center justify-center bg-[#FAFBF9] dark:bg-[#0D1410] transition-colors duration-300">
      {/* 3D Isometric tactical soccer pitch background */}
      <PitchBackground />

      {/* Main text & CTA block */}
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 pt-12 pb-20 md:pt-16 md:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Scouting v2.0 · Live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-5xl font-extrabold leading-[1.05] uppercase tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl lg:text-7xl"
        >
          El futuro del{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            scouting
          </span>{" "}
          está aquí.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Data biométrica, radares tácticos y matchmaking global. Conectamos jugadores amateurs con clubes y universidades en tiempo real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton variant="primary" href="/register?role=player">Soy Jugador</MagneticButton>
          <MagneticButton variant="ghost" href="/register?role=recruiter">Soy Reclutador</MagneticButton>
        </motion.div>
      </div>

      {/* Floating glassmorphism cards */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block z-10 select-none">
        {/* Left card: Player Bio tag */}
        <FloatingCard className="left-[1%] xl:left-[2%] top-[25%] w-64 text-left backdrop-blur-xl opacity-80 hover:opacity-100 hover:z-30 transition-all duration-300 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 border-slate-200 dark:border-emerald-500/20 shadow-xl" delay={0}>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/20 font-display text-sm font-bold text-emerald-400">LM</div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Lucas Moreira</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">DEL · 19y · L</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono">
            <div className="rounded-md bg-slate-100 dark:bg-[#0D1410] py-1.5 border border-slate-200 dark:border-white/5">
              <p className="text-[9px] uppercase text-slate-500 dark:text-slate-400">SPD</p>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">32.1</p>
            </div>
            <div className="rounded-md bg-slate-100 dark:bg-[#0D1410] py-1.5 border border-slate-200 dark:border-white/5">
              <p className="text-[9px] uppercase text-slate-500 dark:text-slate-400">GOL</p>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">24</p>
            </div>
            <div className="rounded-md bg-slate-100 dark:bg-[#0D1410] py-1.5 border border-slate-200 dark:border-white/5">
              <p className="text-[9px] uppercase text-slate-500 dark:text-slate-400">AST</p>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">11</p>
            </div>
          </div>
        </FloatingCard>

        {/* Right card 1: Tactical Mini Radar */}
        <FloatingCard className="right-[3%] xl:right-[6%] top-[20%] w-56 text-left backdrop-blur-xl opacity-80 hover:opacity-100 hover:z-30 transition-all duration-300 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 border-slate-200 dark:border-emerald-500/20 shadow-xl" delay={1.5}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Performance</p>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Radar táctico</p>
          <div className="mt-2 flex items-center justify-between">
            <MiniRadar />
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase text-slate-500 dark:text-slate-400">Score</p>
              <p className="text-2xl font-bold text-orange-400">87</p>
            </div>
          </div>
        </FloatingCard>

        {/* Right card 2: Match alert notification */}
        <FloatingCard className="right-[4%] xl:right-[8%] bottom-[12%] w-60 text-left backdrop-blur-xl opacity-80 hover:opacity-100 hover:z-30 transition-all duration-300 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 border-slate-200 dark:border-emerald-500/20 shadow-xl" delay={0.8}>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-orange-400" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-orange-400">Match encontrado</p>
          </div>
          <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Northern State University</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Beca deportiva · División I</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "94%" }}
              transition={{ duration: 2, delay: 1.2 }}
              className="h-full bg-orange-500"
            />
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}

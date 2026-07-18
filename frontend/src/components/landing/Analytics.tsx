"use client";
import React, { useEffect, useRef, useState } from "react";
import { 
  Radar, 
  Activity, 
  Clock, 
  Target, 
  ShieldCheck, 
  Trophy, 
  GraduationCap, 
  TrendingUp 
} from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { BigRadar } from "./BigRadar";

function StatWidget({
  icon: Icon,
  label,
  value,
  suffix = "",
  contextText,
  isFloat = false,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
  contextText: string;
  isFloat?: boolean;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => isFloat ? v.toFixed(1) : Math.round(v).toLocaleString());
  const [display, setDisplay] = useState<string>("0");

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.6, delay, ease: "easeOut" });
    }
  }, [inView, value, delay, count]);

  return (
    <div ref={ref} className="group flex flex-col justify-between rounded-2xl border border-slate-200/60 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/40 p-4 shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-slate-100/50 dark:hover:bg-slate-900/30 transition-all duration-300 min-h-[110px]">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">{label}</span>
        <Icon className="h-4 w-4 text-emerald-500/60 dark:text-emerald-400/50 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 shrink-0" />
      </div>
      <div className="mt-3">
        <div className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-cyan-600 dark:group-hover:from-emerald-400 dark:group-hover:to-cyan-300 transition-all duration-300">
          {display}
          {suffix && <span className="text-lg font-semibold text-slate-500 dark:text-slate-400 ml-1">{suffix}</span>}
        </div>
        <p className="mt-1 font-mono text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
          {contextText}
        </p>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <Section id="analisis" className="py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">// 01 · Análisis dinámico</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            El talento, por fin cuantificado y estructurado.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Reemplazamos los videos de baja calidad por perfiles estandarizados. Filtra por posición, estadísticas verificables, características de juego y rendimiento académico.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-8 backdrop-blur-md shadow-lg dark:shadow-none">
            <div className="absolute -top-px left-8 h-px w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/15 text-emerald-300">
                  <Radar className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Consenso de Scouting</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Lucas Moreira · Delantero</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                Validado
              </span>
            </div>
            <div className="aspect-square w-full">
              <BigRadar />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-8 backdrop-blur-md shadow-lg dark:shadow-none flex flex-col justify-between h-full">
            <div>
              <div className="absolute -top-px left-8 h-px w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-orange-500/15 text-orange-300">
                  <Activity className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Estadísticas Verificadas</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Rendimiento de Temporada</p>
                </div>
              </div>

              {/* Grid 2x3 of StatWidgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatWidget
                  icon={Clock}
                  label="Minutos Jugados"
                  value={1240}
                  suffix=" min"
                  contextText="92% de minutos posibles"
                  delay={0.1}
                />
                <StatWidget
                  icon={Target}
                  label="Goles + Asistencias (G/A)"
                  value={14}
                  contextText="↑ Top 10% en su liga"
                  delay={0.2}
                />
                <StatWidget
                  icon={ShieldCheck}
                  label="Validaciones"
                  value={45}
                  contextText="Verificadas por 3 entrenadores"
                  delay={0.3}
                />
                <StatWidget
                  icon={Trophy}
                  label="Partidos MVP"
                  value={8}
                  contextText="Líder en partidos clave"
                  delay={0.4}
                />
                <StatWidget
                  icon={GraduationCap}
                  label="Promedio Académico"
                  value={3.8}
                  isFloat={true}
                  suffix=" GPA"
                  contextText="Apto para División I NCAA"
                  delay={0.5}
                />
                <StatWidget
                  icon={TrendingUp}
                  label="Tasa de Completitud"
                  value={96}
                  suffix="%"
                  contextText="Nivel de Scouting: Elite"
                  delay={0.6}
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 dark:border-white/10 pt-6">
              {[
                { l: "Perfiles", v: "12k+" },
                { l: "Clubes", v: "340" },
                { l: "Países", v: "28" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{s.l}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

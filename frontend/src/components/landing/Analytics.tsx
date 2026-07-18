"use client";
import { Radar, Activity } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { BigRadar } from "./BigRadar";
import { AnimatedBar } from "./AnimatedBar";

export function Analytics() {
  return (
    <Section id="analisis" className="py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">// 01 · Análisis dinámico</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Data biométrica y táctica en vivo.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Cada jugador tiene un perfil cuantificado. Los reclutadores filtran por métricas reales, no por rumores.
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
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Player Radar</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Lucas Moreira · Delantero</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                Live
              </span>
            </div>
            <div className="aspect-square w-full">
              <BigRadar />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-8 backdrop-blur-md shadow-lg dark:shadow-none">
            <div className="absolute -top-px left-8 h-px w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-orange-500/15 text-orange-300">
                <Activity className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Season stats</p>
                <p className="font-semibold text-slate-900 dark:text-white">Rendimiento agregado</p>
              </div>
            </div>
            <div className="space-y-5">
              <AnimatedBar label="Velocidad máxima" value={92} delay={0.1} />
              <AnimatedBar label="Precisión de pase" value={78} delay={0.2} />
              <AnimatedBar label="Duelos ganados" value={65} delay={0.3} />
              <AnimatedBar label="Resistencia (VO₂)" value={88} delay={0.4} />
              <AnimatedBar label="Índice táctico" value={81} delay={0.5} />
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

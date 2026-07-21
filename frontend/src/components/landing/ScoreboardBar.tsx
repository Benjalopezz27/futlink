"use client";

import { Reveal } from "./Reveal";

export function ScoreboardBar() {
  const stats = [
    { number: "1,204", label: "Jugadores Registrados" },
    { number: "89", label: "Clubes Verificados" },
    { number: "34", label: "Fichajes Este Mes" },
    { number: "28", label: "Países Activos" },
  ];

  return (
    <div className="w-full bg-[#0D1410] border-y border-emerald-500/20 py-8 px-6 text-[#FAFBF9] select-none">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 rounded-xl border border-emerald-500/30 bg-[#121C16] p-6 shadow-2xl">
            {/* Scoreboard Label */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.25em] text-emerald-400 font-extrabold">
                  Tablero Oficial FutLink
                </p>
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                  Live Scouting Database
                </p>
              </div>
            </div>

            {/* Stadium Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 text-center w-full lg:w-auto">
              {stats.map((s, idx) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none">
                    {s.number}
                  </span>
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400/80">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

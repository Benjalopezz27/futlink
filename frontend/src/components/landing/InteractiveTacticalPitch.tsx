"use client";

import { useState } from "react";
import { Check, ShieldAlert } from "lucide-react";

interface PositionNode {
  id: string;
  code: string;
  name: string;
  top: string;
  left: string;
  category: "Defensa" | "Mediocampo" | "Ataque" | "Portero";
}

export function InteractiveTacticalPitch() {
  const [selectedPosition, setSelectedPosition] = useState<string>("ST");

  const positions: PositionNode[] = [
    { id: "gk", code: "GK", name: "Guardameta", top: "85%", left: "50%", category: "Portero" },
    { id: "lb", code: "LB", name: "Lateral Izquierdo", top: "68%", left: "18%", category: "Defensa" },
    { id: "cb1", code: "CB1", name: "Central Izquierdo", top: "72%", left: "38%", category: "Defensa" },
    { id: "cb2", code: "CB2", name: "Central Derecho", top: "72%", left: "62%", category: "Defensa" },
    { id: "rb", code: "RB", name: "Lateral Derecho", top: "68%", left: "82%", category: "Defensa" },
    { id: "cdm", code: "CDM", name: "Pivote Defensivo", top: "52%", left: "50%", category: "Mediocampo" },
    { id: "cm1", code: "CM1", name: "Interior Izquierdo", top: "38%", left: "32%", category: "Mediocampo" },
    { id: "cm2", code: "CM2", name: "Interior Derecho", top: "38%", left: "68%", category: "Mediocampo" },
    { id: "lw", code: "LW", name: "Extremo Izquierdo", top: "20%", left: "18%", category: "Ataque" },
    { id: "st", code: "ST", name: "Delantero Centro", top: "15%", left: "50%", category: "Ataque" },
    { id: "rw", code: "RW", name: "Extremo Derecho", top: "20%", left: "82%", category: "Ataque" },
  ];

  const currentPos = positions.find((p) => p.code === selectedPosition) || positions[9];

  return (
    <div className="w-full grid lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-6 backdrop-blur-md shadow-2xl">
      {/* Tactical Pitch Visual Container */}
      <div className="lg:col-span-7 relative aspect-[3/4] sm:aspect-[4/3] w-full bg-[#172F17] rounded-xl border-2 border-emerald-500/40 p-4 overflow-hidden shadow-inner select-none">
        {/* Pitch Lines */}
        <div className="absolute inset-2 border-2 border-emerald-400/30 rounded-lg pointer-events-none" />
        <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-emerald-400/30 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 h-24 w-24 border-2 border-emerald-400/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        {/* Penalty Areas */}
        <div className="absolute top-2 left-1/2 h-20 w-44 border-2 border-emerald-400/30 border-t-0 -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-2 left-1/2 h-20 w-44 border-2 border-emerald-400/30 border-b-0 -translate-x-1/2 pointer-events-none" />

        {/* 11 Position Nodes */}
        {positions.map((pos) => {
          const isSelected = pos.code === selectedPosition;
          return (
            <button
              key={pos.id}
              onClick={() => setSelectedPosition(pos.code)}
              style={{ top: pos.top, left: pos.left }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full font-display text-xs sm:text-sm font-extrabold shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isSelected
                  ? "bg-orange-500 text-white scale-125 ring-4 ring-orange-500/40 z-30"
                  : "bg-[#121C16] text-emerald-300 border-2 border-emerald-400/50 hover:scale-110 hover:bg-emerald-700 z-10"
              }`}
            >
              {pos.code}
            </button>
          );
        })}
      </div>

      {/* Selected Position Details Panel */}
      <div className="lg:col-span-5 flex flex-col justify-between h-full p-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
            Búsqueda Táctica Activa
          </div>
          <h3 className="font-display text-3xl font-extrabold uppercase text-slate-900 dark:text-white">
            {currentPos.name} ({currentPos.code})
          </h3>
          <p className="mt-1 font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase font-bold">
            Categoría: {currentPos.category}
          </p>

          <div className="mt-6 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-200/60 dark:bg-[#0D1410] border border-slate-300/50 dark:border-white/5">
              <span className="text-slate-500 dark:text-slate-400">Candidatos Disponibles:</span>
              <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white">142 perfiles</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-200/60 dark:bg-[#0D1410] border border-slate-300/50 dark:border-white/5">
              <span className="text-slate-500 dark:text-slate-400">Filtro de Edad:</span>
              <span className="font-display font-extrabold text-sm text-emerald-600 dark:text-emerald-400">16 - 22 años</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-200/60 dark:bg-[#0D1410] border border-slate-300/50 dark:border-white/5">
              <span className="text-slate-500 dark:text-slate-400">Métricas Requeridas:</span>
              <span className="font-display font-bold text-xs text-orange-500">SPD, GOL, AST</span>
            </div>
          </div>
        </div>

        <button className="mt-8 w-full rounded-md bg-orange-500 py-3 font-display font-bold uppercase tracking-wider text-white hover:bg-orange-600 shadow-md transition cursor-pointer">
          Filtrar Jugadores en {currentPos.code}
        </button>
      </div>
    </div>
  );
}

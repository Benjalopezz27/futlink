"use client";

import { useState } from "react";
import { ArrowLeftRight, Check } from "lucide-react";

export function PlayerComparator() {
  const [playerA] = useState({
    name: "Lucas Moreira",
    position: "Delantero Centro (ST)",
    age: "19y",
    height: "1.84m",
    weight: "78kg",
    foot: "Izquierda",
    speed: 92,
    shooting: 89,
    passing: 78,
    dribbling: 84,
  });

  const [playerB] = useState({
    name: "Mateo Carrizo",
    position: "Extremo Izquierdo (LW)",
    age: "18y",
    height: "1.76m",
    weight: "71kg",
    foot: "Derecha",
    speed: 96,
    shooting: 82,
    passing: 85,
    dribbling: 91,
  });

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h4 className="font-display text-xl font-bold uppercase text-slate-900 dark:text-white">
            Demo Interactiva: Comparador de Jugadores
          </h4>
        </div>
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase">
          Análisis Táctico Lado a Lado
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Player A */}
        <div className="rounded-xl border border-emerald-500/30 bg-slate-200/40 dark:bg-[#0D1410] p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="font-display text-xl font-bold uppercase text-slate-900 dark:text-white">{playerA.name}</h5>
              <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">{playerA.position}</p>
            </div>
            <span className="font-mono text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md font-bold">
              {playerA.age}
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                <span>Velocidad:</span>
                <span className="font-bold">{playerA.speed} pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${playerA.speed}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                <span>Definición:</span>
                <span className="font-bold">{playerA.shooting} pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${playerA.shooting}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                <span>Regate:</span>
                <span className="font-bold">{playerA.dribbling} pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${playerA.dribbling}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Player B */}
        <div className="rounded-xl border border-orange-500/30 bg-slate-200/40 dark:bg-[#0D1410] p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="font-display text-xl font-bold uppercase text-slate-900 dark:text-white">{playerB.name}</h5>
              <p className="font-mono text-xs text-orange-400 font-bold">{playerB.position}</p>
            </div>
            <span className="font-mono text-xs bg-orange-500/20 text-orange-400 px-2.5 py-1 rounded-md font-bold">
              {playerB.age}
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                <span>Velocidad:</span>
                <span className="font-bold">{playerB.speed} pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: `${playerB.speed}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                <span>Definición:</span>
                <span className="font-bold">{playerB.shooting} pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: `${playerB.shooting}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                <span>Regate:</span>
                <span className="font-bold">{playerB.dribbling} pts</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: `${playerB.dribbling}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

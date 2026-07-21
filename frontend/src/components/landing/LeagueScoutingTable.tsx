"use client";

import { Reveal } from "./Reveal";

interface PlayerRow {
  rank: number;
  name: string;
  position: string;
  category: string;
  matchScore: number;
  clubTarget: string;
}

export function LeagueScoutingTable() {
  const tableData: PlayerRow[] = [
    { rank: 1, name: "Lucas Moreira", position: "DEL", category: "Sub-19", matchScore: 98, clubTarget: "C.D. Leganés B" },
    { rank: 2, name: "Sofia Rossi", position: "VOL", category: "Sub-20", matchScore: 95, clubTarget: "Albacete Fem." },
    { rank: 3, name: "Gabriel Méndez", position: "POR", category: "Sub-19", matchScore: 93, clubTarget: "Atlético Ottawa" },
    { rank: 4, name: "Thiago Silva", position: "DEF", category: "Sub-17", matchScore: 91, clubTarget: "NCAA Division I" },
    { rank: 5, name: "Mateo Carrizo", position: "EXT", category: "Sub-18", matchScore: 89, clubTarget: "Real Central" },
  ];

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/90 dark:bg-[#121C16]/95 backdrop-blur-md shadow-2xl">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-emerald-500/20 bg-slate-200/50 dark:bg-[#0D1410] font-display text-xs uppercase tracking-widest text-slate-600 dark:text-emerald-400">
              <th className="py-4 px-4 text-center w-12">#</th>
              <th className="py-4 px-6">Jugador</th>
              <th className="py-4 px-4">Posición</th>
              <th className="py-4 px-4">Categoría</th>
              <th className="py-4 px-4">Proyección Club</th>
              <th className="py-4 px-6 text-right">Match %</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-emerald-500/10 font-mono text-xs">
            {tableData.map((row, idx) => (
              <tr
                key={row.name}
                className={`transition-colors hover:bg-slate-200/40 dark:hover:bg-[#1C2E23]/60 ${
                  idx % 2 === 0 ? "bg-transparent" : "bg-slate-100/50 dark:bg-[#0D1410]/40"
                }`}
              >
                <td className="py-4 px-4 text-center font-display font-bold text-slate-400 text-sm">
                  {row.rank}
                </td>
                <td className="py-4 px-6 font-sans font-semibold text-slate-900 dark:text-white text-sm">
                  {row.name}
                </td>
                <td className="py-4 px-4 font-display font-bold text-emerald-600 dark:text-emerald-400">
                  {row.position}
                </td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-300">
                  {row.category}
                </td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                  {row.clubTarget}
                </td>
                <td className="py-4 px-6 text-right">
                  <span className="inline-flex items-center gap-1 font-display font-extrabold text-sm text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                    {row.matchScore}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { CheckCircle2, ShieldCheck, FileText, ExternalLink } from "lucide-react";

export function ScoutingReportMockup() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-display font-extrabold text-sm">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
              Informe Técnico de Scouting #SR-9402
            </p>
            <h4 className="font-display text-xl font-bold uppercase text-slate-900 dark:text-white">
              Lucas Moreira (Delantero Centro)
            </h4>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" /> Verificado por Entrenador
        </span>
      </div>

      {/* Grid Data Body */}
      <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs mb-6">
        <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-[#0D1410] border border-slate-300/40 dark:border-white/5">
          <p className="text-slate-500 dark:text-slate-400 uppercase text-[10px]">Biometría</p>
          <p className="font-display text-base font-bold text-slate-900 dark:text-white mt-1">1.84m · 78kg</p>
          <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">Pierna Hábil: Izquierda</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-[#0D1410] border border-slate-300/40 dark:border-white/5">
          <p className="text-slate-500 dark:text-slate-400 uppercase text-[10px]">Velocidad Máxima</p>
          <p className="font-display text-base font-bold text-slate-900 dark:text-white mt-1">32.1 km/h</p>
          <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">Top 8% en su categoría</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-[#0D1410] border border-slate-300/40 dark:border-white/5">
          <p className="text-slate-500 dark:text-slate-400 uppercase text-[10px]">Efectividad de Goles</p>
          <p className="font-display text-base font-bold text-orange-500 mt-1">18 Goles / 22 Partidos</p>
          <p className="text-[10px] text-orange-400 mt-0.5">1.2 G/A por partido</p>
        </div>
      </div>

      {/* Verification & Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
          <CheckCircle2 className="h-4 w-4 inline text-emerald-500 mr-1" />
          Material audiovisual adjunto y verificado por la federación local.
        </p>
        <button className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-orange-500 hover:text-orange-400 transition">
          Ver Dossier Completo <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

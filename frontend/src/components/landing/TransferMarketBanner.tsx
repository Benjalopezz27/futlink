"use client";

import { useEffect, useState } from "react";
import { Clock, Zap } from "lucide-react";

export function TransferMarketBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#121C16] text-[#FAFBF9] border-b border-emerald-500/20 py-2.5 px-4 text-center text-xs font-mono select-none z-50 relative">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <div className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-orange-400">
          <Zap className="h-3.5 w-3.5 fill-orange-400" />
          Mercado de Pases Activo
        </div>
        <span className="hidden sm:inline text-emerald-500/40">•</span>
        <div className="flex items-center gap-2 text-slate-300">
          <Clock className="h-3.5 w-3.5 text-emerald-400" />
          <span className="uppercase text-[11px] tracking-wider text-slate-400">Cierre de mercado:</span>
          <span className="font-display font-extrabold text-sm text-emerald-400 tracking-wider">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </div>
        <span className="hidden md:inline text-emerald-500/40">•</span>
        <a
          href="/jugadores"
          className="hidden md:inline-flex items-center gap-1 font-display text-[11px] font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 underline underline-offset-2 transition"
        >
          Registra tu perfil antes del cierre
        </a>
      </div>
    </div>
  );
}

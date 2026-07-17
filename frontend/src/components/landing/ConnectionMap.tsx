"use client";
import React from "react";
import { Zap } from "lucide-react";
import { Globe } from "@/components/ui/globe";

export function ConnectionMap() {
  const markers = [
    { id: "buenos-aires", location: [-34.6037, -58.3816] as [number, number], label: "Buenos Aires" },
    { id: "sao-paulo", location: [-23.5505, -46.6333] as [number, number], label: "São Paulo" },
    { id: "mexico", location: [19.4326, -99.1332] as [number, number], label: "México" },
    { id: "miami", location: [25.7617, -80.1918] as [number, number], label: "Miami" },
    { id: "new-york", location: [40.7128, -74.0060] as [number, number], label: "New York" },
    { id: "madrid", location: [40.4168, -3.7038] as [number, number], label: "Madrid" },
    { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
    { id: "paris", location: [48.8566, 2.3522] as [number, number], label: "París" },
    { id: "roma", location: [41.9028, 12.4964] as [number, number], label: "Roma" },
    { id: "lagos", location: [6.5244, 3.3792] as [number, number], label: "Lagos" },
    { id: "senegal", location: [14.7167, -17.4677] as [number, number], label: "Senegal" },
    { id: "sudafrica", location: [-26.2041, 28.0473] as [number, number], label: "Sudáfrica" },
    { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
    { id: "seul", location: [37.5665, 126.9780] as [number, number], label: "Seúl" },
  ];

  const arcs = [
    { id: "arc1", from: [-34.6037, -58.3816] as [number, number], to: [40.4168, -3.7038] as [number, number] }, // Buenos Aires -> Madrid
    { id: "arc2", from: [-23.5505, -46.6333] as [number, number], to: [51.5074, -0.1278] as [number, number] }, // São Paulo -> London
    { id: "arc3", from: [19.4326, -99.1332] as [number, number], to: [40.4168, -3.7038] as [number, number] }, // México -> Madrid
    { id: "arc4", from: [25.7617, -80.1918] as [number, number], to: [-34.6037, -58.3816] as [number, number] }, // Miami -> Buenos Aires
    { id: "arc5", from: [6.5244, 3.3792] as [number, number], to: [48.8566, 2.3522] as [number, number] }, // Lagos -> París
    { id: "arc6", from: [14.7167, -17.4677] as [number, number], to: [40.4168, -3.7038] as [number, number] }, // Senegal -> Madrid
    { id: "arc7", from: [35.6762, 139.6503] as [number, number], to: [41.9028, 12.4964] as [number, number] }, // Tokyo -> Roma
    { id: "arc8", from: [-23.5505, -46.6333] as [number, number], to: [40.4168, -3.7038] as [number, number] }, // São Paulo -> Madrid
    { id: "arc9", from: [-26.2041, 28.0473] as [number, number], to: [51.5074, -0.1278] as [number, number] }, // Sudáfrica -> London
    { id: "arc10", from: [37.5665, 126.9780] as [number, number], to: [40.4168, -3.7038] as [number, number] }, // Seúl -> Madrid
    { id: "arc11", from: [40.7128, -74.0060] as [number, number], to: [51.5074, -0.1278] as [number, number] }, // New York -> London
    { id: "arc12", from: [-23.5505, -46.6333] as [number, number], to: [25.7617, -80.1918] as [number, number] }, // São Paulo -> Miami
  ];

  return (
    <section className="relative w-full md:aspect-[16/9] aspect-auto min-h-[620px] md:min-h-0 max-w-7xl bg-slate-950 overflow-hidden font-sans border border-slate-800/50 rounded-2xl mx-auto shadow-2xl flex flex-col items-center justify-center p-6 md:p-0">
      
      {/* 1. Capa de Fondo: Grid de puntos sutiles */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #64748B 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* 2. Globe Component (Cobe) */}
      <div className="relative md:absolute md:inset-0 z-10 w-full flex items-center justify-center p-4">
        <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[580px] md:h-[580px] max-w-full max-h-full">
          <Globe markers={markers} arcs={arcs} className="w-full h-full" />
        </div>
      </div>

      {/* 3. UI Superpuesta Flotante */}
      <div className="relative md:absolute md:bottom-8 md:right-8 z-30 bg-slate-950/80 backdrop-blur-xl border border-orange-500/30 p-5 rounded-2xl shadow-[0_0_40px_rgba(249,115,22,0.15)] max-w-[280px] w-full mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-orange-500 mb-3">
          <Zap className="h-4 w-4 text-orange-500" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Match Confirmado</span>
        </div>
        <p className="text-white font-semibold text-sm leading-tight mb-1">Volante Mixto: São Paulo → Madrid</p>
        <p className="text-slate-400 text-[11px] leading-relaxed">L. Moreira aceptó la propuesta de beca del club.</p>
        
        {/* Progress bar decorativa */}
        <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 w-[85%] rounded-full"></div>
        </div>
      </div>

      {/* Viñeta oscura en los bordes para dar profundidad */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#020617_100%)]" />
    </section>
  );
}

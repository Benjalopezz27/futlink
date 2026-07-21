"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Play, ChevronLeft, ChevronRight, Tv, Trophy } from "lucide-react";

interface PlayerData {
  id: string;
  name: string;
  age: string;
  position: string;
  themeColor: "emerald" | "orange" | "dual";
  before: string;
  after: string;
  statName: string;
  statValue: string;
  videoUrl: string;
  videoPoster: string;
  quote: string;
  clubLogo: string;
}

export function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const players: PlayerData[] = [
    {
      id: "mateo-silva",
      name: "Mateo Silva",
      age: "18 años",
      position: "Delantero Centro",
      themeColor: "emerald",
      before: "Liga Local Amateur",
      after: "C.D. Leganés B",
      statName: "Goles + Asistencias",
      statValue: "18 (Temp. Debut)",
      quote: "Subir mi perfil biométrico y mis videos en FutLink fue el paso decisivo para lograr mi contrato profesional en España.",
      clubLogo: "CDL",
      videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf18621d15c7fa370ad3776e27ebf4f5a34e00&profile_id=165&oauth2_token_id=57447761",
      videoPoster: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "sofia-rossi",
      name: "Sofia Rossi",
      age: "20 años",
      position: "Volante Mixto",
      themeColor: "orange",
      before: "Fútbol Base Amateur",
      after: "Albacete Femenino",
      statName: "Pases Clave / 90m",
      statValue: "4.8 (91% efect.)",
      quote: "La visibilidad sin intermediarios me permitió mostrar mi rendimiento en métricas de pases reales.",
      clubLogo: "ALB",
      videoUrl: "https://player.vimeo.com/external/394017646.sd.mp4?s=d002a28b03ab844c6883e07d08cd70c2a2d48a1c&profile_id=165&oauth2_token_id=57447761",
      videoPoster: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "gabriel-mendez",
      name: "Gabriel Méndez",
      age: "19 años",
      position: "Guardameta",
      themeColor: "dual",
      before: "Inter Academias Libre",
      after: "Atlético Ottawa",
      statName: "Atajadas Reflejas",
      statValue: "86% efectividad",
      quote: "El radar de atajadas y la ficha técnica convencieron al club antes del primer entrenamiento.",
      clubLogo: "ATO",
      videoUrl: "https://player.vimeo.com/external/435674681.sd.mp4?s=bfdf724f8d227f12e8cb80db014e7a37ad3b2be1&profile_id=165&oauth2_token_id=57447761",
      videoPoster: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  const handlePrev = () => {
    setPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? players.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPlaying(false);
    setActiveIndex((prev) => (prev === players.length - 1 ? 0 : prev + 1));
  };

  const currentPlayer = players[activeIndex];

  return (
    <section id="casos-exito" className="relative w-full bg-[#FAFBF9] dark:bg-[#0D1410] py-24 px-6 md:px-12 overflow-hidden border-t border-slate-200 dark:border-emerald-500/10 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-400"
          >
            <Trophy className="h-3.5 w-3.5" /> Fichajes Verificados
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            Fichajes que rompieron la frontera.
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-0 md:px-12">
          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full border border-slate-200 dark:border-white/10 bg-[#F4F6F1]/95 dark:bg-[#121C16]/90 text-slate-800 dark:text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer md:flex hidden"
            aria-label="Previous player"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full border border-slate-200 dark:border-white/10 bg-[#F4F6F1]/95 dark:bg-[#121C16]/90 text-slate-800 dark:text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer md:flex hidden"
            aria-label="Next player"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlayer.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-12 gap-8 items-stretch"
            >
              {/* LEFT SIDE: Trading Card / Collectible Soccer Card (Vertical Cromo Style) */}
              <div className="md:col-span-5 relative flex flex-col justify-between rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#121C16] via-[#0D1410] to-[#121C16] p-6 text-white shadow-2xl overflow-hidden">
                {/* Card Header & Shield */}
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 mb-4">
                  <div className="font-display font-black text-xl tracking-wider text-emerald-400">
                    FUTLINK TRADING CARD
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 font-display font-extrabold text-xs flex items-center justify-center">
                    {currentPlayer.clubLogo}
                  </div>
                </div>

                {/* Player Photo Frame */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-emerald-500/30 mb-4 bg-black">
                  <img
                    src={currentPlayer.videoPoster}
                    alt={currentPlayer.name}
                    className="w-full h-full object-cover filter contrast-[1.1]"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#0D1410]/90 border border-emerald-500/40 px-3 py-1 rounded font-display text-xs font-bold text-emerald-400 uppercase">
                    {currentPlayer.position}
                  </div>
                </div>

                {/* Player Details & Transfer Path */}
                <div>
                  <h3 className="font-display text-3xl font-extrabold uppercase text-white tracking-tight">
                    {currentPlayer.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1 mb-4">
                    <span>{currentPlayer.age}</span>
                    <span>•</span>
                    <span className="text-orange-400 font-bold">{currentPlayer.after}</span>
                  </div>

                  {/* Stat highlight pill */}
                  <div className="bg-[#121C16] border border-emerald-500/30 rounded-xl p-3.5 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {currentPlayer.statName}:
                    </span>
                    <span className="font-display text-lg font-extrabold text-emerald-400">
                      {currentPlayer.statValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Lower-Third Broadcast TV Interview & Video */}
              <div className="md:col-span-7 relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 overflow-hidden shadow-2xl">
                {/* Video Player */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  {playing ? (
                    <video
                      src={currentPlayer.videoUrl}
                      poster={currentPlayer.videoPoster}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                      onPlay={() => setPlaying(true)}
                      onPause={() => setPlaying(false)}
                    />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={currentPlayer.videoPoster}
                        alt="Highlights"
                        className="w-full h-full object-cover brightness-50"
                      />
                      <button
                        onClick={() => setPlaying(true)}
                        className="relative z-20 h-16 w-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition"
                      >
                        <Play className="h-7 w-7 fill-slate-950 ml-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Lower-Third TV Broadcast Statement Banner */}
                <div className="p-6 bg-[#0D1410] border-t-4 border-orange-500 text-white font-mono">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-500 text-white font-display text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
                      ENTREVISTA POST-PARTIDO
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Tv className="h-3 w-3 text-emerald-400" /> FutLink TV Network
                    </span>
                  </div>
                  <p className="text-sm font-sans italic text-slate-200 leading-relaxed">
                    "{currentPlayer.quote}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-display font-bold uppercase text-white">{currentPlayer.name}</span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold">{currentPlayer.after}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

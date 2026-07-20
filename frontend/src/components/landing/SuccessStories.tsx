"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Award, Activity, Zap, Play, ChevronLeft, ChevronRight } from "lucide-react";

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
  statPercent: number;
  attributes: { name: string; value: number }[];
  silhouette: React.ReactNode;
  videoUrl: string;
  videoPoster: string;
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
      before: "Liga Local / Amateur",
      after: "C.D. Leganés B",
      statName: "Goles + Asistencias (G/A)",
      statValue: "18 (Temp. Debut)",
      statPercent: 94,
      attributes: [
        { name: "Velocidad", value: 94 },
        { name: "Definición", value: 89 },
        { name: "Regate", value: 82 }
      ],
      videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf18621d15c7fa370ad3776e27ebf4f5a34e00&profile_id=165&oauth2_token_id=57447761",
      videoPoster: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
      silhouette: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500/20 fill-current">
          <path d="M50 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm18 13.5l-6-6.5c-1.3-1.4-3.4-1.7-5-.7l-9 5.5-8-5.2c-1.2-.8-2.8-.7-3.8.3l-6 6c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0l4.8-4.8 6.5 4.2-3.8 12.5-9.2 12c-.7.9-.5 2.3.4 3s2.3.5 3-.4l9.5-12.5 5.5-2.2 1.5 15.5-9 14.5c-.6.9-.3 2.2.6 2.8.9.6 2.2.3 2.8-.6L60 76.5l-2.2-18 4.8-15.5 8 7.2c.6.5 1.5.6 2.2.2l7-4c.9-.5 1.2-1.7.7-2.6-.5-.9-1.7-1.2-2.6-.7l-5.5 3.1-6.4-5.7 3.5-11.2c.5-1.6 1.8-2.6 3.5-2.6h3c1.1 0 2-1 2-2s-.9-2-2-2z" />
        </svg>
      )
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
      statPercent: 91,
      attributes: [
        { name: "Pases", value: 91 },
        { name: "Visión", value: 95 },
        { name: "Físico", value: 85 }
      ],
      videoUrl: "https://player.vimeo.com/external/394017646.sd.mp4?s=d002a28b03ab844c6883e07d08cd70c2a2d48a1c&profile_id=165&oauth2_token_id=57447761",
      videoPoster: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1200&auto=format&fit=crop",
      silhouette: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500/20 fill-current">
          <path d="M47 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm8.2 8.4l-7.5-3.2c-1.6-.7-3.5-.2-4.5 1.3L35 34c-3.1 4.5-4 10.1-2.5 15.3l3 10.2L28 72c-.7.9-.5 2.3.4 3s2.3.5 3-.4l8.2-13.3 2-7.2c.4-1.5 1.8-2.5 3.3-2.5h3.2l2.2-7.5 7.5 7.5-3.1 18.5-7 14.5c-.6.9-.3 2.2.6 2.8.9.6 2.2.3 2.8-.6L60 72l3.8-19.5c.3-1.6-.2-3.3-1.3-4.4l-5.8-5.8 2.2-9 6.2 5.5c.7.6 1.7.7 2.5.2l6-4c.9-.6 1.2-1.8.6-2.7-.6-.9-1.8-1.2-2.7-.6l-4.5 3-6.2-5.5 3-11.8c.4-1.6-.2-3.3-1.5-4.3z" />
        </svg>
      )
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
      statPercent: 86,
      attributes: [
        { name: "Reflejos", value: 93 },
        { name: "Estirada", value: 89 },
        { name: "Juego Aéreo", value: 85 }
      ],
      videoUrl: "https://player.vimeo.com/external/435674681.sd.mp4?s=bfdf724f8d227f12e8cb80db014e7a37ad3b2be1&profile_id=165&oauth2_token_id=57447761",
      videoPoster: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop",
      silhouette: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400/20 fill-current">
          <path d="M78 28c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-14.8-1.3l-10-6c-1.5-.9-3.5-.6-4.7.7L38 34c-1.6 1.8-2 4.5-1 6.8l3 6.8-11.5 5.5c-1 .5-1.5 1.7-1 2.7s1.7 1.5 2.7 1l13-6.2c1.2-.6 1.9-1.9 1.7-3.3l-1.5-5.2 7-6.5 8 4-2.2 16.5-12 12.5c-.7.8-.7 2.1.1 2.8.8.7 2.1.7 2.8-.1l12.5-13 2.8-17.5c.2-1.3-.2-2.7-1.2-3.6l-6.2-3.1 3-10.5 7.5 2c1.8.5 3.3 1.6 4.1 3.2l5.5 11c.5 1 .3 2.2-.7 2.7-1 .5-2.2.3-2.7-.7l-4.8-9.6-6.5-1.7 2.8-9.2c.4-1.4.1-2.9-.8-3.9z" />
        </svg>
      )
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

  const colorMap = {
    emerald: {
      accentText: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/20",
      glowShadow: "shadow-lg",
      glowBorder: "border-emerald-500/30",
    },
    orange: {
      accentText: "text-orange-400",
      accentBg: "bg-orange-500/10",
      accentBorder: "border-orange-500/20",
      glowShadow: "shadow-lg",
      glowBorder: "border-orange-500/30",
    },
    dual: {
      accentText: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/20",
      glowShadow: "shadow-lg",
      glowBorder: "border-emerald-500/30",
    }
  }[currentPlayer.themeColor];

  return (
    <section id="casos-exito" className="relative w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #10B981 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[400px] h-[200px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400"
          >
            Casos de Éxito
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-5xl"
          >
            Fichajes que rompieron la frontera.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-base text-slate-600 dark:text-slate-400"
          >
            De ligas locales y estados libres a contratos profesionales. Conoce a los deportistas que validaron sus datos y consiguieron su club ideal.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto px-0 md:px-12">
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-white flex items-center justify-center shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition cursor-pointer md:flex hidden"
            aria-label="Previous player"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 h-14 w-14 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-white flex items-center justify-center shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition cursor-pointer md:flex hidden"
            aria-label="Next player"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className={`w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-all duration-500 ${colorMap.glowShadow}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlayer.id}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex flex-col md:flex-row min-h-[560px] w-full"
              >
                <div className="w-full md:w-[35%] p-8 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10 bg-slate-100/40 dark:bg-slate-950/90 overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 opacity-[0.08] dark:opacity-15 w-64 h-64 pointer-events-none select-none z-0">
                    {currentPlayer.silhouette}
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${colorMap.accentText} ${colorMap.accentBg} border ${colorMap.accentBorder}`}>
                        <Zap className="h-3 w-3" /> Fichaje Exitoso
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Verificado
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{currentPlayer.name}</h3>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <span className={`uppercase font-bold ${colorMap.accentText}`}>{currentPlayer.position}</span>
                        <span>•</span>
                        <span>{currentPlayer.age}</span>
                      </div>
                    </div>
                    <div className="bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 rounded-2xl p-4 mb-6">
                      <div className="flex justify-between text-[9px] font-mono text-slate-400 dark:text-slate-500 mb-1.5">
                        <span className="uppercase tracking-wider">Origen</span>
                        <span className="uppercase tracking-wider">Destino</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <p className="text-slate-800 dark:text-slate-200 font-bold text-xs truncate leading-snug">{currentPlayer.before}</p>
                          </div>
                          <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono mt-0.5 block">Amateur / Libre</span>
                        </div>
                        <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                          <motion.div animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
                            <ArrowRight className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                          </motion.div>
                        </div>
                        <div className="flex-1 min-w-0 text-right">
                          <div className="flex items-center gap-1 justify-end">
                            <p className="text-slate-900 dark:text-emerald-400 font-bold text-xs truncate leading-snug">{currentPlayer.after}</p>
                            <Award className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                          </div>
                          <span className="text-[9px] uppercase tracking-wider text-orange-400 font-mono font-semibold mt-0.5 block">Fichado Pro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Activity className={`h-5 w-5 ${colorMap.accentText} animate-pulse`} />
                      </div>
                      <div>
                        <p className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">{currentPlayer.statName}</p>
                        <p className="text-xl font-black text-slate-900 dark:text-white leading-tight mt-0.5">{currentPlayer.statValue}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[65%] relative overflow-hidden bg-black flex-1 flex items-center justify-center min-h-[350px] md:min-h-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10">
                  {playing ? (
                    <video src={currentPlayer.videoUrl} poster={currentPlayer.videoPoster} controls autoPlay className="w-full h-full object-cover" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
                  ) : (
                    <div className="relative w-full h-full min-h-[350px] md:min-h-[560px] flex items-center justify-center group/play select-none">
                      <img src={currentPlayer.videoPoster} alt={`${currentPlayer.name} highlights cover`} className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-[1.05] transition-all duration-700 group-hover/play:scale-102" />
                      <div className={`absolute h-28 w-28 rounded-full border border-dashed opacity-25 animate-[spin_20s_linear_infinite] ${currentPlayer.themeColor === "orange" ? "border-orange-500" : "border-emerald-500"}`} />
                      <div className={`absolute h-24 w-24 rounded-full border opacity-15 ${currentPlayer.themeColor === "orange" ? "border-orange-500" : "border-emerald-500"}`} />
                      <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }} onClick={() => setPlaying(true)} className="relative z-20 h-20 w-20 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg cursor-pointer" aria-label="Play highlight video">
                        <Play className="h-8 w-8 fill-slate-950 text-slate-950 ml-1" />
                      </motion.button>
                      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none z-10" />
                      <div className="absolute bottom-6 left-6 z-20 font-mono text-[9px] text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                        </span>
                        VER HIGHLIGHTS EN VIVO
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center gap-4 mt-6 md:hidden">
            <button onClick={handlePrev} className="h-11 w-11 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-800 dark:text-white flex items-center justify-center shadow-md active:scale-95 transition" aria-label="Previous player">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {players.map((p, idx) => (
                <button key={p.id} onClick={() => { setPlaying(false); setActiveIndex(idx); }} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-slate-300 dark:bg-slate-700"}`} aria-label={`Go to slide ${idx + 1}`} />
              ))}
            </div>
            <button onClick={handleNext} className="h-11 w-11 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-800 dark:text-white flex items-center justify-center shadow-md active:scale-95 transition" aria-label="Next player">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="md:flex justify-center gap-3 mt-8 hidden">
            {players.map((p, idx) => (
              <button key={p.id} onClick={() => { setPlaying(false); setActiveIndex(idx); }} className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? "w-8 bg-emerald-500" : "w-2 bg-slate-300 dark:bg-slate-700"}`} aria-label={`Go to slide ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

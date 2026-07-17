"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Activity, Award, Calendar, MapPin, Zap } from "lucide-react";

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
}

// 3D Tilt and Dynamic Glow Card Wrapper
function SuccessCard({ player }: { player: PlayerData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized coordinates (-1 to 1) from card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Rotate up to 8 degrees based on mouse position
    const rX = (mouseY / (height / 2)) * -8;
    const rY = (mouseX / (width / 2)) * 8;

    setRotate({ x: rX, y: rY });

    // Calculate light source pointer percentages
    const gX = ((e.clientX - rect.left) / width) * 100;
    const gY = ((e.clientY - rect.top) / height) * 100;

    setGlow({ x: gX, y: gY });
  }, []);

  const onMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  }, []);

  // Theme color maps
  const colorMap = {
    emerald: {
      border: "rgba(16, 185, 129, 0.15)",
      glow: "radial-gradient(350px circle at var(--glow-x) var(--glow-y), rgba(16, 185, 129, 0.45), transparent 80%)",
      accentText: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/20",
      glowShadow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      barColor: "bg-emerald-500",
    },
    orange: {
      border: "rgba(249, 115, 22, 0.15)",
      glow: "radial-gradient(350px circle at var(--glow-x) var(--glow-y), rgba(249, 115, 22, 0.45), transparent 80%)",
      accentText: "text-orange-400",
      accentBg: "bg-orange-500/10",
      accentBorder: "border-orange-500/20",
      glowShadow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
      barColor: "bg-orange-500",
    },
    dual: {
      border: "rgba(16, 185, 129, 0.15)",
      glow: "radial-gradient(350px circle at var(--glow-x) var(--glow-y), rgba(16, 185, 129, 0.4), rgba(249, 115, 22, 0.4), transparent 80%)",
      accentText: "text-emerald-400",
      accentBg: "bg-gradient-to-r from-emerald-500/10 to-orange-500/10",
      accentBorder: "border-emerald-500/20",
      glowShadow: "shadow-[0_0_30px_rgba(16,185,129,0.1)]",
      barColor: "bg-gradient-to-r from-emerald-500 to-orange-500",
    },
  }[player.themeColor];

  // Card reveal animation variants
  const cardRevealVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 14,
      },
    },
  };

  return (
    <motion.div
      variants={cardRevealVariants}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.1s ease-out",
          // @ts-expect-error custom CSS properties
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`,
        }}
        className={`group relative rounded-2xl bg-slate-950 p-[1px] transition-all duration-300 h-full ${colorMap.glowShadow} hover:border-transparent`}
      >
        {/* Holographic Border Glow */}
        <div
          style={{ background: colorMap.glow }}
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        />

        {/* Card base border when not hovered */}
        <div
          style={{ borderColor: colorMap.border }}
          className="absolute inset-0 z-0 border rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
        />

        {/* Content Container */}
        <div className="relative z-10 bg-slate-950/90 rounded-[15px] p-6 h-full flex flex-col justify-between overflow-hidden">
          
          {/* Holographic Grid Background in Silhouette Area */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${player.themeColor === "orange" ? "rgba(249, 115, 22, 0.15)" : "rgba(16, 185, 129, 0.15)"} 1px, transparent 1px), linear-gradient(90deg, ${player.themeColor === "orange" ? "rgba(249, 115, 22, 0.15)" : "rgba(16, 185, 129, 0.15)"} 1px, transparent 1px)`,
              backgroundSize: "16px 16px"
            }}
          />

          <div>
            {/* Header: Badge & Role */}
            <div className="flex justify-between items-center mb-4">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${colorMap.accentText} ${colorMap.accentBg} border ${colorMap.accentBorder}`}>
                <Zap className="h-3 w-3" /> Fichaje Exitoso
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> MVP MVP
              </span>
            </div>

            {/* Silhouette & HUD Section */}
            <div className="relative w-full aspect-[4/3] rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden flex items-end justify-center mb-6">
              {/* Radar Circle HUD Decorator */}
              <div className={`absolute bottom-0 w-44 h-44 rounded-full border border-dashed opacity-25 animate-[spin_30s_linear_infinite] ${player.themeColor === "orange" ? "border-orange-500" : "border-emerald-500"}`} />
              <div className={`absolute bottom-4 w-32 h-32 rounded-full border opacity-15 ${player.themeColor === "orange" ? "border-orange-500" : "border-emerald-500"}`} />
              
              {/* Vector Silhouette */}
              <div className="relative z-10 w-full h-[90%] flex items-end justify-center">
                {player.silhouette}
              </div>

              {/* Scanning Laser Line */}
              <div className={`absolute left-0 right-0 h-[1.5px] opacity-40 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-[bounce_4s_infinite_ease-in-out] ${player.themeColor === "orange" ? "bg-orange-500 shadow-orange-500/80" : "bg-emerald-500 shadow-emerald-500/80"}`} />
            </div>

            {/* Player Info */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">{player.name}</h3>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400 font-mono">
                <span className="uppercase tracking-widest font-semibold text-emerald-400">{player.position}</span>
                <span>•</span>
                <span>{player.age}</span>
              </div>
            </div>

            {/* Transition Block (Before & After) */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span className="uppercase tracking-wider">Origen</span>
                <span className="uppercase tracking-wider">Destino</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <p className="text-slate-300 font-semibold text-xs truncate leading-snug">{player.before}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono mt-0.5 block">Libre/Amateur</span>
                </div>
                <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-slate-900 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300">
                  <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="flex-1 text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <p className="text-white font-bold text-xs truncate leading-snug">{player.after}</p>
                    <Award className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-mono mt-0.5 block">Contrato Pro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats block */}
          <div className="border-t border-white/5 pt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Activity className={`h-4 w-4 ${colorMap.accentText}`} />
                <span>{player.statName}</span>
              </div>
              <span className={`text-base font-bold font-mono ${colorMap.accentText}`}>{player.statValue}</span>
            </div>
            
            {/* Stat Progress Bar */}
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${player.statPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className={`h-full rounded-full ${colorMap.barColor}`}
              />
            </div>

            {/* Quick Metrics HUD */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] font-mono text-center text-slate-500">
              {player.attributes.map((attr, idx) => (
                <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-md py-1.5">
                  <p className="uppercase text-[9px] text-slate-500 mb-0.5">{attr.name}</p>
                  <p className="font-bold text-slate-300">{attr.value}%</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export function SuccessStories() {
  const players: PlayerData[] = [
    {
      id: "mateo-silva",
      name: "Mateo Silva",
      age: "18 años",
      position: "Delantero Centro",
      themeColor: "emerald",
      before: "Liga Local / Amateur",
      after: "C.D. Leganés B",
      statName: "Aceleración Máxima",
      statValue: "34.8 km/h",
      statPercent: 94,
      attributes: [
        { name: "Velocidad", value: 94 },
        { name: "Definición", value: 89 },
        { name: "Regate", value: 82 }
      ],
      silhouette: (
        <svg viewBox="0 0 100 100" className="w-full h-[95%] text-emerald-500/80 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] fill-current">
          {/* Running striker silhouette */}
          <path d="M50 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm18 13.5l-6-6.5c-1.3-1.4-3.4-1.7-5-.7l-9 5.5-8-5.2c-1.2-.8-2.8-.7-3.8.3l-6 6c-.8.8-.8 2.2 0 3 .8.8 2.2.8 3 0l4.8-4.8 6.5 4.2-3.8 12.5-9.2 12c-.7.9-.5 2.3.4 3s2.3.5 3-.4l9.5-12.5 5.5-2.2 1.5 15.5-9 14.5c-.6.9-.3 2.2.6 2.8.9.6 2.2.3 2.8-.6L60 76.5l-2.2-18 4.8-15.5 8 7.2c.6.5 1.5.6 2.2.2l7-4c.9-.5 1.2-1.7.7-2.6-.5-.9-1.7-1.2-2.6-.7l-5.5 3.1-6.4-5.7 3.5-11.2c.5-1.6 1.8-2.6 3.5-2.6h3c1.1 0 2-1 2-2s-.9-2-2-2z" />
          <circle cx="56" cy="85" r="3" className="fill-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
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
      silhouette: (
        <svg viewBox="0 0 100 100" className="w-full h-[95%] text-orange-500/80 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)] fill-current">
          {/* Midfielder passing silhouette */}
          <path d="M47 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm8.2 8.4l-7.5-3.2c-1.6-.7-3.5-.2-4.5 1.3L35 34c-3.1 4.5-4 10.1-2.5 15.3l3 10.2L28 72c-.7.9-.5 2.3.4 3s2.3.5 3-.4l8.2-13.3 2-7.2c.4-1.5 1.8-2.5 3.3-2.5h3.2l2.2-7.5 7.5 7.5-3.1 18.5-7 14.5c-.6.9-.3 2.2.6 2.8.9.6 2.2.3 2.8-.6L60 72l3.8-19.5c.3-1.6-.2-3.3-1.3-4.4l-5.8-5.8 2.2-9 6.2 5.5c.7.6 1.7.7 2.5.2l6-4c.9-.6 1.2-1.8.6-2.7-.6-.9-1.8-1.2-2.7-.6l-4.5 3-6.2-5.5 3-11.8c.4-1.6-.2-3.3-1.5-4.3z" />
          <circle cx="72" cy="70" r="3.2" className="fill-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
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
      silhouette: (
        <svg viewBox="0 0 100 100" className="w-full h-[95%] text-emerald-400/80 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)] fill-current">
          {/* Goalkeeper diving silhouette */}
          <path d="M78 28c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-14.8-1.3l-10-6c-1.5-.9-3.5-.6-4.7.7L38 34c-1.6 1.8-2 4.5-1 6.8l3 6.8-11.5 5.5c-1 .5-1.5 1.7-1 2.7s1.7 1.5 2.7 1l13-6.2c1.2-.6 1.9-1.9 1.7-3.3l-1.5-5.2 7-6.5 8 4-2.2 16.5-12 12.5c-.7.8-.7 2.1.1 2.8.8.7 2.1.7 2.8-.1l12.5-13 2.8-17.5c.2-1.3-.2-2.7-1.2-3.6l-6.2-3.1 3-10.5 7.5 2c1.8.5 3.3 1.6 4.1 3.2l5.5 11c.5 1 .3 2.2-.7 2.7-1 .5-2.2.3-2.7-.7l-4.8-9.6-6.5-1.7 2.8-9.2c.4-1.4.1-2.9-.8-3.9z" />
          <circle cx="24" cy="62" r="3" className="fill-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
        </svg>
      )
    }
  ];

  // Grid container reveal variants
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <section className="relative w-full bg-slate-950 py-24 px-6 md:px-12 overflow-hidden border-t border-slate-900">
      
      {/* Background Grid Mesh */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #10B981 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />

      {/* Atmospheric glow effect behind header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[400px] h-[200px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400"
          >
            Casos de Éxito
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl"
          >
            Fichajes que{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent text-glow-emerald">
              rompieron
            </span>{" "}
            la frontera.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-base text-slate-400"
          >
            De ligas locales y estados libres a contratos profesionales. Conoce a los deportistas que validaron sus datos y consiguieron su club ideal.
          </motion.p>
        </div>

        {/* Success Cards Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {players.map((player) => (
            <SuccessCard key={player.id} player={player} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

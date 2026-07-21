"use client";

import { TransferMarketBanner } from "@/components/landing/TransferMarketBanner";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MagneticButton } from "@/components/landing/MagneticButton";
import { Reveal } from "@/components/landing/Reveal";
import { Section } from "@/components/landing/Section";
import { ScoreboardBar } from "@/components/landing/ScoreboardBar";
import { Compass, Flame, ShieldAlert, Sparkles, AlertCircle, ArrowRight } from "lucide-react";

export default function QuienesSomosPage() {
  const storyPoints = [
    {
      title: "La Frustración del Scouting Tradicional",
      body: "Durante décadas, el descubrimiento de futbolistas dependió de ojeadores recorriendo miles de kilómetros a ciegas o de videos de baja calidad enviados por representantes. Miles de talentos quedaron fuera del radar simplemente por no estar en la ciudad correcta el día indicado.",
    },
    {
      title: "La Solución: Datos Reales sin Intermediarios",
      body: "Decidimos construir una plataforma donde los datos hablen primero: altura, velocidad, pie hábil, historial de minutos y videos de jugadas verificables. Un lenguaje universal que conecta directamente al jugador de barrio o liga local con la oficina del director deportivo.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBF9] dark:bg-[#0D1410] font-sans text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300">
      <TransferMarketBanner />
      <Navbar />
      <main>
        {/* Hero Narrative Section */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 border-b border-slate-200/80 dark:border-emerald-500/10">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                <Compass className="h-4 w-4" /> La Historia Detrás de FutLink
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Nacidos de la pasión y la <span className="text-emerald-600 dark:text-emerald-400">frustración del fútbol real</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                No somos una corporación genérica de software. Somos apasionados del fútbol que vivimos de cerca la injusticia de ver talentos enormes perderse por falta de contactos o recursos.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Narrative Story Blocks */}
        <Section className="py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            {storyPoints.map((sp, idx) => (
              <Reveal key={sp.title} delay={idx * 0.15}>
                <div className="rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-8 md:p-10 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-extrabold text-2xl text-orange-500">0{idx + 1}.</span>
                    <h3 className="font-display text-2xl font-bold uppercase text-slate-900 dark:text-white">{sp.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                    {sp.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Stadium Scoreboard Numbers Banner */}
        <ScoreboardBar />

        {/* CTA Section */}
        <Section className="py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-12 text-center shadow-2xl">
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Haz que tu historia cuente
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-300">
                Únete a la plataforma que está cambiando las reglas del scouting deportivo.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton variant="primary">Unirme a FutLink</MagneticButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

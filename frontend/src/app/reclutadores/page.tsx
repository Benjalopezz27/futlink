"use client";

import { TransferMarketBanner } from "@/components/landing/TransferMarketBanner";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MagneticButton } from "@/components/landing/MagneticButton";
import { Reveal } from "@/components/landing/Reveal";
import { Section } from "@/components/landing/Section";
import { InteractiveTacticalPitch } from "@/components/landing/InteractiveTacticalPitch";
import { ScoutingReportMockup } from "@/components/landing/ScoutingReportMockup";
import { Search, Bookmark, Building2, Kanban, UserCheck, CheckCircle2 } from "lucide-react";

export default function ReclutadoresPage() {
  const tools = [
    {
      icon: Search,
      title: "Motor de Búsqueda Paramétrico",
      description: "Filtra perfiles de futbolistas por posición exacta, rango de edad, altura mínima, pierna hábil y ubicación geográfica.",
    },
    {
      icon: Bookmark,
      title: "Lista de Seguimiento (Watchlist)",
      description: "Guarda perfiles interesantes en tu lista personal con un solo clic para monitorear sus avances y estadísticas.",
    },
    {
      icon: Building2,
      title: "Gestión de Oportunidades (Drafting)",
      description: "Publica y administra búsquedas de talento activas indicando requerimientos específicos y beneficios/becas.",
    },
    {
      icon: Kanban,
      title: "Pipeline Kanban de Postulantes",
      description: "Visualiza y gestiona las postulaciones enviadas por jugadores en un tablero interactivo por etapas (Pendiente, En Revisión, Contactado, Descartado).",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBF9] dark:bg-[#0D1410] font-sans text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300">
      <TransferMarketBanner />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6 md:px-12 border-b border-slate-200/80 dark:border-emerald-500/10">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                <UserCheck className="h-4 w-4" /> Solución para Reclutadores & Clubes
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Encuentra el talento exacto <span className="text-orange-500">sin sesgos ni fronteras</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Optimiza tus procesos de scouting deportivo. Accede a miles de perfiles estructurados, evalúa datos biométricos reales y gestiona tu embudo de candidatos en un solo lugar.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="primary">Registrar Institución / Club</MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Interactive Tactical Pitch Selection */}
        <Section className="py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-orange-400 font-bold">// Pizarra Táctica de Selección</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Selecciona la posición que necesitas reforzar
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
                Toca cualquier posición en la cancha interactiva para filtrar candidatos de inmediato.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InteractiveTacticalPitch />
          </Reveal>
        </Section>

        {/* Mockup Preview: Technical Scouting Dossier */}
        <Section className="py-20 bg-slate-100/50 dark:bg-[#0A100C] border-y border-slate-200 dark:border-emerald-500/10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold">// Vista de Reclutador</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Así ves el informe de cada candidato
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ScoutingReportMockup />
          </Reveal>
        </Section>

        {/* Recruiter Suite Tools Grid */}
        <Section className="py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-orange-400 font-bold">// Suite de Scouting</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Herramientas avanzadas de selección
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 p-8 backdrop-blur-md shadow-xl transition hover:border-orange-500/40">
                  <div className="h-12 w-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-6">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-slate-900 dark:text-white mb-3">{t.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-12 text-center shadow-2xl">
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Potencia la captación de talento de tu institución
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-300">
                Empieza a buscar futbolistas calificados en minutos con nuestras herramientas de scouting profesional.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton variant="primary">Crear Cuenta Institucional</MagneticButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

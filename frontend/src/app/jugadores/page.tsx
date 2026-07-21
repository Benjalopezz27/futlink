"use client";

import { TransferMarketBanner } from "@/components/landing/TransferMarketBanner";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MagneticButton } from "@/components/landing/MagneticButton";
import { Reveal } from "@/components/landing/Reveal";
import { Section } from "@/components/landing/Section";
import { PlayerComparator } from "@/components/landing/PlayerComparator";
import { Activity, Video, Award, Target, ShieldCheck, Tag } from "lucide-react";

export default function JugadoresPage() {
  const categories = [
    { name: "SUB-15", desc: "Formación e Iniciación Deportiva" },
    { name: "SUB-17", desc: "Desarrollo de Alto Rendimiento" },
    { name: "SUB-20", desc: "Proyección Profesional & Becas" },
    { name: "AMATEUR LIBRE", desc: "Mayores de 20 Años Independientes" },
    { name: "UNIVERSITARIO", desc: "Aspirantes NCAA / NAIA" },
  ];

  const benefits = [
    {
      icon: Activity,
      title: "Perfil Biométrico & Deportivo",
      description: "Carga tu altura, peso, pierna hábil y posiciones. Tu edad se calcula dinámicamente según tu fecha de nacimiento.",
    },
    {
      icon: Video,
      title: "Portafolio Audiovisual (Highlights)",
      description: "Vincula fácilmente tus mejores jugadas mediante enlaces de YouTube o Vimeo directamente en tu perfil público.",
    },
    {
      icon: Award,
      title: "Historial de Trayectoria",
      description: "Documenta tus clubes previos, años de inicio, fin y logros obtenidos para validar tu trayectoria competitiva.",
    },
    {
      icon: Target,
      title: "Postulaciones en 1 Clic",
      description: "Aplica instantáneamente a las búsquedas de becas universitarias y contrataciones de clubes en todo el mundo.",
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" /> Plataforma para Futbolistas
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Tu talento deportivo, <span className="text-emerald-600 dark:text-emerald-400">visible para todo el mundo</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Olvídate de depender de agencias costosas o mensajes sueltos. FutLink convierte tus datos biométricos y videos en un currículum deportivo digital estandarizado.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="primary">Crear Perfil de Jugador</MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Real Soccer Category Chips */}
        <section className="py-12 bg-slate-100/60 dark:bg-[#121C16]/60 border-b border-slate-200 dark:border-emerald-500/10">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="text-center font-display text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold mb-6">
                // Categorías Oficiales de Scouting
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-[#F4F6F1] dark:bg-[#0D1410] px-4 py-2.5 shadow-sm"
                  >
                    <Tag className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white">{cat.name}</span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">• {cat.desc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Interactive Demo: Player Side-by-Side Comparator */}
        <Section className="py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-orange-400 font-bold">// Producto en Acción</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Así comparan los reclutadores tu perfil
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PlayerComparator />
          </Reveal>
        </Section>

        {/* Benefits Grid */}
        <Section className="py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold">// Herramientas del Jugador</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Todo lo que necesitas para destacar
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 p-8 backdrop-blur-md shadow-xl transition hover:border-emerald-500/40">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-slate-900 dark:text-white mb-3">{b.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{b.description}</p>
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
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-300">
                Únete a miles de futbolistas que ya están conectados con oportunidades en clubes y universidades.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton variant="primary">Registrarme Gratis</MagneticButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

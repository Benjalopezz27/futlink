"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { MagneticButton } from "@/components/landing/MagneticButton";
import { Reveal } from "@/components/landing/Reveal";
import { Section } from "@/components/landing/Section";
import { Award, Trophy, Star, Quote, MessageSquareQuote } from "lucide-react";

export default function CasosExitoPage() {
  const highlights = [
    {
      icon: Trophy,
      title: "Contratos Profesionales",
      description: "Jugadores amateurs promovidos a planteles oficiales de clubes en Europa y América Latina.",
    },
    {
      icon: Award,
      title: "Becas Universitarias D1 / NAIA",
      description: "Futbolistas juveniles reclutados por universidades estadounidenses con becas deportivas completas.",
    },
    {
      icon: Star,
      title: "Scouting Directo",
      description: "Directores deportivos contactando candidatos sin intermediarios gracias a perfiles verificados.",
    },
  ];

  const declarations = [
    {
      quote:
        "Subir mi perfil biométrico y mis videos en FutLink fue un cambio de 180 grados. En menos de tres semanas, el C.D. Leganés se contactó directamente con mi representante. Hoy estoy viviendo mi sueño en España.",
      author: "Mateo Silva",
      role: "Delantero Centro",
      status: "Fichado por C.D. Leganés B",
      avatar: "MS",
    },
    {
      quote:
        "Lo que más me gustó fue la transparencia de la plataforma. Los reclutadores vieron exactamente mis estadísticas de pases y mis minutos jugados sin intermediarios. La vinculación fue directa e inmediata.",
      author: "Sofia Rossi",
      role: "Volante Mixto",
      status: "Fichada por Albacete Femenino",
      avatar: "SR",
    },
    {
      quote:
        "FutLink nos ahorró meses de viajes y llamados. La posibilidad de filtrar por altura, velocidad verificada y pierna hábil antes de ver los highlights es invaluable para nuestro departamento de scouting.",
      author: "Carlos Benítez",
      role: "Director de Reclutamiento",
      status: "Scout Regional · Liga Norteamérica",
      avatar: "CB",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBF9] dark:bg-[#0D1410] font-sans text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300">
      <Navbar />
      <main>
        {/* Hero Section Header */}
        <section className="relative overflow-hidden py-16 px-6 md:px-12 border-b border-slate-200/80 dark:border-emerald-500/10">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                <Trophy className="h-4 w-4" /> Historias de Éxito
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Casos de Éxito & <span className="text-orange-500">Fichajes Reales</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Descubre las historias de futbolistas que transformaron sus estadísticas biométricas y videos de jugadas en oportunidades profesionales y becas académicas.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Main Success Stories Slider Section */}
        <SuccessStories />

        {/* Categories of Success */}
        <Section className="py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold">// Logros Alcanzados</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Impacto real en la carrera de los deportistas
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, idx) => (
              <Reveal key={h.title} delay={idx * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 p-8 backdrop-blur-md shadow-xl">
                  <div className="h-12 w-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-6">
                    <h.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-slate-900 dark:text-white mb-3">{h.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Declarations / Testimonials Segment */}
        <section className="py-24 bg-slate-100/50 dark:bg-[#0A100C] border-y border-slate-200 dark:border-emerald-500/10">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  <MessageSquareQuote className="h-4 w-4" /> Declaraciones
                </div>
                <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Testimonios en primera persona
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
                  Lo que dicen los protagonistas del mercado sobre su experiencia en la plataforma.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {declarations.map((d, i) => (
                <Reveal key={d.author} delay={i * 0.15}>
                  <div className="relative flex flex-col justify-between h-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-8 backdrop-blur-md shadow-xl hover:border-emerald-500/40 transition-all duration-300">
                    <Quote className="h-8 w-8 text-emerald-500/30 dark:text-emerald-400/20 mb-4" />
                    <p className="italic text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      "{d.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/20 font-display text-sm font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                        {d.avatar}
                      </div>
                      <div>
                        <p className="font-display text-base font-bold uppercase text-slate-900 dark:text-white leading-snug">
                          {d.author}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {d.role}
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                          {d.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Section className="py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-12 text-center shadow-2xl">
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                ¿Serás el próximo en nuestra lista?
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-300">
                Registra tu perfil en FutLink y comienza a construir tu camino deportivo.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton variant="primary">Empezar Mi Historia</MagneticButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

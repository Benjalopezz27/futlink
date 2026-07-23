"use client";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function FinalCTA() {
  return (
    <Section className="py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/95 dark:bg-[#121C16]/95 p-12 text-center backdrop-blur-md shadow-2xl">
          <div className="absolute inset-0 opacity-30 pitch-grid" style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }} />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Tu próximo match te está esperando.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              Crea tu perfil en menos de 5 minutos y entra al radar de reclutadores de todo el mundo.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton variant="primary" href="/register">Empezar ahora</MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

"use client";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function FinalCTA() {
  return (
    <Section className="py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-orange-500/10 p-12 text-center backdrop-blur-md">
          <div className="absolute inset-0 opacity-30 pitch-grid" style={{ maskImage: "radial-gradient(ellipse at center, black, transparent 70%)" }} />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Tu próximo <span className="text-emerald-400 text-glow-emerald">match</span> te está esperando.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Crea tu perfil en menos de 5 minutos y entra al radar de reclutadores de todo el mundo.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton variant="primary">Empezar ahora</MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

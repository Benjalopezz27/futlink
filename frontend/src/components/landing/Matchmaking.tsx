"use client";
import { Cpu, Globe2, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ConnectionMap } from "./ConnectionMap";

export function Matchmaking() {
  return (
    <Section id="red" className="py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold">// 02 · Red global</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Un jugador en Sudamérica.
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">
              Una universidad en EE.UU.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Nuestra red de matchmaking conecta talento con oportunidades reales sin importar las fronteras.
          </p>
        </div>
      </Reveal>

      <div className="mt-14">
        <Reveal>
          <ConnectionMap />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: Cpu, title: "Data verificada", body: "Métricas biométricas y de video procesadas por nuestro motor de IA." },
          { icon: Globe2, title: "Alcance global", body: "28 países activos. Clubes de Europa, EE.UU. y Asia buscando talento." },
          { icon: Sparkles, title: "Match inteligente", body: "Algoritmo que empareja perfil deportivo, académico y financiero." },
        ].map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="group relative h-full rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-[#F4F6F1]/90 dark:bg-[#121C16]/90 p-6 backdrop-blur-md transition hover:border-emerald-500/50 hover:bg-[#FAFBF9] dark:hover:bg-[#121C16] shadow-xl">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

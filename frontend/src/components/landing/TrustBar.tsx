"use client";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function TrustBar() {
  const clubs = [
    { initials: "FC", label: "Athletic FC" },
    { initials: "UN", label: "Northern Univ." },
    { initials: "RC", label: "Real Coastal" },
    { initials: "SU", label: "Southern U." },
    { initials: "AC", label: "Atlético Central" },
  ];
  return (
    <Section className="py-24">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
          Instituciones que buscan talento
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clubs.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0"
              aria-label={c.label}
            >
              <svg viewBox="0 0 48 56" className="h-12 w-auto text-emerald-300">
                <path d="M24 2 L44 10 V28 C44 42 34 52 24 54 C14 52 4 42 4 28 V10 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor" fontFamily="JetBrains Mono, monospace">
                  {c.initials}
                </text>
              </svg>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{c.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

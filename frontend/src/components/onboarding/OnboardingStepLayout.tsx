"use client";

import Link from "next/link";
import { ChevronLeft, ShieldCheck } from "lucide-react";

interface OnboardingStepLayoutProps {
  title: string;
  subtitle: string;
  onBack: () => void;
  children: React.ReactNode;
}

export function OnboardingStepLayout({
  title,
  subtitle,
  onBack,
  children,
}: OnboardingStepLayoutProps) {
  return (
    <div className="min-h-screen bg-paper">
      {/* Top Bar */}
      <header className="border-b border-line-warm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-none bg-night text-cream">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="font-brand text-lg font-bold tracking-tight text-ink">
              FutLink
            </span>
          </Link>
          <Link
            href="/"
            className="font-mono text-xs font-bold uppercase tracking-wider text-muted-warm hover:text-ink transition"
          >
            Salir
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Step Progress Bar (3 of 3, final step, all filled) */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-1.5 flex-1 bg-rust" />
          <div className="h-1.5 flex-1 bg-rust" />
          <div className="h-1.5 flex-1 bg-rust" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              aria-label="Volver al paso anterior"
              className="text-ink hover:text-rust transition cursor-pointer"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
              {title}
            </h2>
          </div>
          <p className="mt-1.5 text-sm text-muted-warm">{subtitle}</p>
        </div>

        {children}
      </main>
    </div>
  );
}

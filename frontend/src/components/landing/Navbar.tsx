"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {["Jugadores", "Reclutadores", "Tecnología"].map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-slate-300 transition hover:text-emerald-400">
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white">
            Iniciar Sesión
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow-emerald transition hover:bg-emerald-400"
          >
            Crear Cuenta
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-slate-200">
            <a href="#">Jugadores</a>
            <a href="#">Reclutadores</a>
            <a href="#">Tecnología</a>
            <a href="#" className="rounded-full bg-emerald-500 px-4 py-2 text-center font-semibold text-slate-950">Crear Cuenta</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

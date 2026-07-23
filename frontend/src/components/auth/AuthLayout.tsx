"use client";

import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  activeTab: "login" | "register";
}

export function AuthLayout({ children, activeTab }: AuthLayoutProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B120C]">
      {/* LEFT PANEL: Tech-Tactical Blueprint Vector Area (36% Width) */}
      <div className="relative hidden lg:flex lg:w-[36%] flex-col justify-between p-12 border-r border-[#3F5F3D]/20 bg-[#0B120C] text-[#F1EEE3] select-none overflow-hidden">
        {/* 2D Vector Tech-Tactical Blueprint Pitch Watermark */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.08]"
          viewBox="0 0 800 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Pitch Outer Boundary Line */}
          <rect
            x="40"
            y="40"
            width="720"
            height="1120"
            stroke="#F3EDE2"
            strokeWidth="1.5"
            strokeDasharray="16 8"
          />

          {/* Halfway Line */}
          <line
            x1="40"
            y1="600"
            x2="760"
            y2="600"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />

          {/* Center Circle & Spot */}
          <circle
            cx="400"
            cy="600"
            r="140"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          <circle cx="400" cy="600" r="4" fill="#F3EDE2" />

          {/* Tactical Target Concentric Radar Rings */}
          <circle
            cx="400"
            cy="600"
            r="280"
            stroke="#F3EDE2"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
          <circle
            cx="400"
            cy="600"
            r="420"
            stroke="#F3EDE2"
            strokeWidth="1"
            strokeDasharray="2 14"
          />

          {/* Top Penalty Area */}
          <rect
            x="180"
            y="40"
            width="440"
            height="220"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          {/* Top Goal Area */}
          <rect
            x="290"
            y="40"
            width="220"
            height="80"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          {/* Top Penalty Spot */}
          <circle cx="400" cy="190" r="3" fill="#F3EDE2" />
          {/* Top Penalty Arc */}
          <path
            d="M 320 260 A 100 100 0 0 0 480 260"
            stroke="#F3EDE2"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />

          {/* Bottom Penalty Area */}
          <rect
            x="180"
            y="940"
            width="440"
            height="220"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          {/* Bottom Goal Area */}
          <rect
            x="290"
            y="1080"
            width="220"
            height="80"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          {/* Bottom Penalty Spot */}
          <circle cx="400" cy="1010" r="3" fill="#F3EDE2" />
          {/* Bottom Penalty Arc */}
          <path
            d="M 320 940 A 100 100 0 0 1 480 940"
            stroke="#F3EDE2"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />

          {/* Corner Arcs */}
          <path
            d="M 40 80 A 40 40 0 0 0 80 40"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          <path
            d="M 720 40 A 40 40 0 0 0 760 80"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          <path
            d="M 40 1120 A 40 40 0 0 1 80 1160"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />
          <path
            d="M 720 1160 A 40 40 0 0 1 760 1120"
            stroke="#F3EDE2"
            strokeWidth="1.5"
          />

          {/* Technical Corner Crosshairs */}
          <line x1="20" y1="40" x2="60" y2="40" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="60" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="740" y1="40" x2="780" y2="40" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="760" y1="20" x2="760" y2="60" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="20" y1="1160" x2="60" y2="1160" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="40" y1="1140" x2="40" y2="1180" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="740" y1="1160" x2="780" y2="1160" stroke="#F3EDE2" strokeWidth="1" />
          <line x1="760" y1="1140" x2="760" y2="1180" stroke="#F3EDE2" strokeWidth="1" />
        </svg>

        {/* Header Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="clip-pentagon grid h-10 w-10 place-items-center bg-[#B85C38] text-[#F1EEE3] font-display font-black text-lg transition-transform group-hover:scale-105">
              F
            </div>
            <span className="font-brand text-2xl font-bold tracking-tight text-white">
              Fut<span className="text-[#B85C38]">Link</span>
            </span>
          </Link>
        </div>

        {/* Central Tactical Copy */}
        <div className="relative z-10 max-w-sm my-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-none border border-[#3F5F3D]/40 bg-[#132318] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#8FAE8A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B85C38] animate-pulse" />
            Acceso a Legajo Deportivo
          </div>

          <h1 className="font-display text-4xl xl:text-5xl font-extrabold uppercase leading-[1.1] text-[#F1EEE3] tracking-tight">
            Tu <span className="text-[#B85C38]">ficha</span>, siempre lista.
          </h1>

          <p className="mt-5 text-sm xl:text-base leading-relaxed text-[#8FAE8A] font-sans">
            Accedé a tu legajo de jugador, tus postulaciones activas y las oportunidades que coinciden con tu perfil.
          </p>
        </div>

        {/* Panel Footer Information */}
        <div className="relative z-10 flex items-center justify-between border-t border-[#3F5F3D]/20 pt-6 text-[11px] font-mono text-[#6B6455] uppercase tracking-wider">
          <span>FutLink v2.0 · Tactical Scouting</span>
          <span>© 2026 FutLink Inc.</span>
        </div>
      </div>

      {/* RIGHT PANEL: Functional Content Area (64% Width on desktop) */}
      <div className="relative flex w-full lg:w-[64%] flex-col justify-between bg-[#EFE9DA] p-6 sm:p-12 overflow-y-auto">
        {/* Mobile Header Logo */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="clip-pentagon grid h-8 w-8 place-items-center bg-[#B85C38] text-[#F1EEE3] font-display font-black text-sm">
              F
            </div>
            <span className="font-brand text-xl font-bold text-[#1E2A1D]">
              Fut<span className="text-[#B85C38]">Link</span>
            </span>
          </Link>

          <Link
            href="/"
            className="font-mono text-xs font-bold uppercase text-[#6B6455] hover:text-[#1E2A1D] transition"
          >
            ← Volver al Inicio
          </Link>
        </div>

        {/* Centered Functional Form Container (Max-Width for Form Legibility) */}
        <div className="mx-auto my-auto w-full max-w-md">
          {/* Common Tab Navigation Header */}
          <div className="mb-8 flex border-b border-[#D8CFB8]">
            <Link
              href="/login"
              className={`flex-1 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider transition ${
                activeTab === "login"
                  ? "border-b-2 border-[#B85C38] text-[#1E2A1D] font-extrabold"
                  : "text-[#6B6455] hover:text-[#1E2A1D]"
              }`}
            >
              INICIAR SESIÓN
            </Link>
            <Link
              href="/register"
              className={`flex-1 py-3 text-center font-mono text-xs font-bold uppercase tracking-wider transition ${
                activeTab === "register"
                  ? "border-b-2 border-[#B85C38] text-[#1E2A1D] font-extrabold"
                  : "text-[#6B6455] hover:text-[#1E2A1D]"
              }`}
            >
              CREAR CUENTA
            </Link>
          </div>

          {/* Children View Content */}
          {children}
        </div>

        {/* Desktop Top Return Link */}
        <div className="hidden lg:block absolute top-8 right-12">
          <Link
            href="/"
            className="font-mono text-xs font-bold uppercase text-[#6B6455] hover:text-[#1E2A1D] transition"
          >
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

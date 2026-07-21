"use client";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Análisis", href: "#analisis" },
    { label: "Red Global", href: "#red" },
    { label: "Casos de Éxito", href: "#casos-exito" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 dark:border-emerald-500/10 bg-[#FAFBF9]/90 dark:bg-[#0D1410]/85 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:py-5">
        <Logo />
        
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 transition hover:text-emerald-500 dark:hover:text-emerald-400">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="rounded-md px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition">
            Iniciar Sesión
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 shadow-sm"
          >
            Crear Cuenta
          </a>
          
          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative grid h-9 w-9 place-items-center rounded-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Sun className="h-4 w-4 text-amber-500" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 0 : -180, scale: theme === "dark" ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Moon className="h-4 w-4 text-emerald-400" />
            </motion.div>
          </button>
        </div>

        {/* Mobile controls container */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative grid h-9 w-9 place-items-center rounded-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Moon className="h-4 w-4 text-emerald-400" /> : <Sun className="h-4 w-4 text-amber-500" />}
          </button>
          
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 dark:border-emerald-500/10 bg-white/95 dark:bg-[#0D1410]/95 md:hidden transition-all duration-300">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-slate-700 dark:text-slate-200 text-base">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition">
                {item.label}
              </a>
            ))}
            <a href="#" className="rounded-md bg-orange-500 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-orange-600">Crear Cuenta</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

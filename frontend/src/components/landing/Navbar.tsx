"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Jugadores", href: "/jugadores" },
    { label: "Reclutadores", href: "/reclutadores" },
    { label: "Quienes Somos?", href: "/quienes-somos" },
    { label: "Casos de Éxito", href: "/casos-exito" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-slate-200/80 dark:border-emerald-500/10 bg-[#FAFBF9]/90 dark:bg-[#0D1410]/85 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:py-5">
        <Logo />
        
        {/* Desktop Navigation Links (Visible on lg >= 1024px) */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions & Theme Toggle (Visible on lg >= 1024px) */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/login" className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition">
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 shadow-sm"
          >
            Crear Cuenta
          </Link>
          
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

        {/* Mobile & Tablet controls container (Visible on screens < 1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
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
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-200 cursor-pointer"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 dark:border-emerald-500/10 bg-[#FAFBF9]/95 dark:bg-[#0D1410]/95 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-slate-700 dark:text-slate-200 text-base">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`font-medium transition py-1 ${
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                        : "hover:text-emerald-500 dark:hover:text-emerald-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-slate-200 dark:border-white/10 px-5 py-2.5 text-center font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-orange-500 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-orange-600 shadow-sm"
                >
                  Crear Cuenta
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

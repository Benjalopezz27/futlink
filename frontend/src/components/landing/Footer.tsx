import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-emerald-500/10 bg-[#FAFBF9] dark:bg-[#0D1410] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <Logo />
          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors">Contacto</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-200 dark:border-emerald-500/10 pt-6 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 md:flex-row">
          <p>© 2026 FutLink. Todos los derechos reservados.</p>
          <p className="text-emerald-600 dark:text-emerald-400">System status · Online</p>
        </div>
      </div>
    </footer>
  );
}

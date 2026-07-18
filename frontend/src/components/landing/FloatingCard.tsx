import { ReactNode } from "react";

export function FloatingCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <div
      className={`pointer-events-auto absolute rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-white/5 p-4 backdrop-blur-md shadow-[0_10px_60px_-10px_rgba(16,185,129,0.2)] dark:shadow-[0_10px_60px_-10px_rgba(16,185,129,0.35)] text-slate-800 dark:text-white transition-all duration-300 ${className ?? ""}`}
      style={{ animation: `levitate 6s ease-in-out ${delay}s infinite` }}
    >
      {children}
    </div>
  );
}

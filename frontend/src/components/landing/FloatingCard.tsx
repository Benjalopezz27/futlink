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
      className={`pointer-events-auto absolute rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md shadow-[0_10px_60px_-10px_rgba(16,185,129,0.35)] ${className ?? ""}`}
      style={{ animation: `levitate 6s ease-in-out ${delay}s infinite` }}
    >
      {children}
    </div>
  );
}

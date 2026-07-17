import { ShieldCheck } from "lucide-react";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/40 shadow-glow-emerald">
        <ShieldCheck className="h-6 w-6 text-emerald-400" strokeWidth={2.5} />
      </span>
      <span className={`text-2xl font-bold tracking-tight ${tone === "light" ? "text-white" : "text-slate-900"}`}>
        Fut<span className="text-emerald-400">Link</span>
      </span>
    </div>
  );
}

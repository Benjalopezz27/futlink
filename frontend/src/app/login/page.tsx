"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { authApi } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await authApi.login({ email, password });
      if (response.user.isOnboarded) {
        router.push("/dashboard");
      } else {
        router.push(
          response.user.role === "PLAYER"
            ? "/onboarding/player"
            : "/onboarding/recruiter"
        );
      }
    } catch (err: any) {
      setError(err.message || "Credenciales inválidas. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout activeTab="login">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#1E2A1D]">
          INICIAR SESIÓN
        </h2>
        <p className="mt-1.5 text-sm text-[#6B6455]">
          Ingresá tus credenciales para acceder a tu legajo.
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-4 border border-rose-400/40 bg-rose-500/10 p-3 font-mono text-xs text-rose-700 dark:text-rose-400 rounded-none">
          [ ERROR ]: {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1E2A1D] mb-1.5"
          >
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full bg-[#F6F2E7] border border-[#D8CFB8] px-4 py-3 font-sans text-sm text-[#1E2A1D] placeholder-[#6B6455]/60 focus:border-[#B85C38] focus:outline-none rounded-none transition"
          />
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="password"
              className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E2A1D]"
            >
              CONTRASEÑA
            </label>
            <a
              href="#"
              className="font-mono text-[11px] font-bold uppercase text-[#B85C38] hover:underline"
            >
              ¿OLVIDASTE TU CONTRASEÑA?
            </a>
          </div>
          <PasswordInput
            id="password"
            required
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-2.5 pt-1">
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded-none border-[#D8CFB8] text-[#B85C38] focus:ring-0 cursor-pointer accent-[#B85C38]"
          />
          <label
            htmlFor="rememberMe"
            className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E2A1D] cursor-pointer select-none"
          >
            RECORDARME EN ESTE DISPOSITIVO
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn-clay w-full py-3.5 text-center font-mono font-bold text-sm uppercase tracking-wider disabled:opacity-50 transition"
        >
          {loading ? "CARGANDO..." : "INICIAR SESIÓN"}
        </button>
      </form>

      {/* Social Divider */}
      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#D8CFB8]" />
        </div>
        <span className="relative bg-[#EFE9DA] px-3 font-mono text-[11px] font-bold uppercase tracking-widest text-[#6B6455]">
          O CONTINUÁ CON
        </span>
      </div>

      {/* Social OAuth Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 btn-outline-grass py-2.5 font-mono text-xs font-bold uppercase flex items-center justify-center gap-2"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Google
        </button>
        <button
          type="button"
          className="flex-1 btn-outline-grass py-2.5 font-mono text-xs font-bold uppercase flex items-center justify-center gap-2"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.66-.8 1.11-1.92.99-3.04-.96.04-2.13.64-2.82 1.44-.61.71-1.15 1.86-1.01 2.96 1.08.08 2.18-.55 2.84-1.36z" />
          </svg>
          Apple
        </button>
      </div>

      {/* Footer Link */}
      <div className="mt-8 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B6455]">
          ¿NO TENÉS CUENTA?{" "}
          <Link href="/register" className="text-[#B85C38] hover:underline font-extrabold">
            CREÁ UNA
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

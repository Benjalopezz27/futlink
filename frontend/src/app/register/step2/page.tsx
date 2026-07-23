"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { authApi } from "@/lib/api";
import { UserRole } from "@/types/auth";

type RoleParam = "player" | "recruiter";

function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().replace(/\s+/g, " ").split(" ");
  const firstName = parts[0] ?? "";
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : firstName;
  return { firstName, lastName };
}

function RegisterStep2Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const role: RoleParam | null =
    roleParam === "player" || roleParam === "recruiter" ? roleParam : null;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!role) {
      router.replace("/register");
    }
  }, [role, router]);

  if (!role) return null;

  const handleBack = () => {
    router.push(`/register?role=${role}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!acceptedTerms) {
      setError("Debés aceptar los términos y condiciones para continuar.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
      const { firstName, lastName } = splitFullName(fullName);
      await authApi.register({
        email,
        password,
        firstName,
        lastName,
        role: role === "player" ? UserRole.PLAYER : UserRole.RECRUITER,
      });

      if (role === "player") {
        await authApi.onboardPlayer({
          birthDate: birthDate || undefined,
        });
      }

      router.push(role === "player" ? "/onboarding/player" : "/onboarding/recruiter");
    } catch (err: any) {
      setError(err.message || "No pudimos crear tu cuenta. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Step Progress Bar (2 of 2, both segments active) */}
      <div className="mb-6 flex items-center gap-2">
        <div className="h-1.5 flex-1 bg-rust" />
        <div className="h-1.5 flex-1 bg-clay" />
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Volver al paso anterior"
            className="text-ink hover:text-rust transition cursor-pointer"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
            {role === "player" ? "Tus datos deportivos" : "Tus datos básicos"}
          </h2>
        </div>
        <p className="mt-1.5 text-sm text-muted-warm">
          Paso 2 de 2 · Cuéntanos un poco más sobre ti.
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
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            NOMBRE COMPLETO
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={
              role === "player" ? "Nombre y apellido" : "Nombre del responsable"
            }
            className="w-full bg-card-paper border border-line-warm px-4 py-3 font-sans text-sm text-ink placeholder-muted-warm/60 focus:border-rust focus:outline-none rounded-none transition"
          />
        </div>

        {/* Email + Password */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
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
              className="w-full bg-card-paper border border-line-warm px-4 py-3 font-sans text-sm text-ink placeholder-muted-warm/60 focus:border-rust focus:outline-none rounded-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
            >
              CONTRASEÑA
            </label>
            <PasswordInput
              id="password"
              required
              minLength={8}
              value={password}
              onChange={setPassword}
              placeholder="Mín. 8 caracteres"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            CONFIRMAR CONTRASEÑA
          </label>
          <PasswordInput
            id="confirmPassword"
            required
            minLength={8}
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Repite tu contraseña"
          />
        </div>

        {/* Player: Birth Date */}
        {role === "player" && (
          <div>
            <label
              htmlFor="birthDate"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
            >
              FECHA DE NACIMIENTO
            </label>
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full bg-card-paper border border-line-warm px-4 py-3 font-sans text-sm text-ink focus:border-rust focus:outline-none rounded-none transition"
            />
          </div>
        )}

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="acceptedTerms"
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded-none border-line-warm text-rust focus:ring-0 cursor-pointer accent-rust"
          />
          <label
            htmlFor="acceptedTerms"
            className="font-mono text-xs font-bold uppercase tracking-wider text-ink cursor-pointer select-none leading-relaxed"
          >
            ACEPTO LOS TÉRMINOS Y CONDICIONES Y LA POLÍTICA DE PRIVACIDAD DE FUTLINK.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !acceptedTerms}
          className="btn-clay w-full py-3.5 text-center font-mono font-bold text-sm uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {loading
            ? "CARGANDO..."
            : role === "player"
            ? "CREAR CUENTA"
            : "CONTINUAR"}
        </button>
      </form>

      {/* Footer Link */}
      <div className="mt-8 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted-warm">
          ¿YA TENÉS CUENTA?{" "}
          <Link href="/login" className="text-rust hover:underline font-extrabold">
            INICIÁ SESIÓN
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function RegisterStep2Page() {
  return (
    <AuthLayout activeTab="register">
      <Suspense fallback={<div className="font-mono text-xs text-muted-warm">Cargando...</div>}>
        <RegisterStep2Content />
      </Suspense>
    </AuthLayout>
  );
}

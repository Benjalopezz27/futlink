"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { User, Briefcase, Check } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";

type RoleType = "player" | "recruiter" | null;

function RegisterFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "player" || roleParam === "recruiter") {
      setSelectedRole(roleParam);
    }
  }, [searchParams]);

  const handleContinue = () => {
    if (!selectedRole) return;
    router.push(`/register/step2?role=${selectedRole}`);
  };

  return (
    <div>
      {/* Step Progress Bar (2 thick dashes) */}
      <div className="mb-6 flex items-center gap-2">
        <div className="h-1.5 flex-1 bg-[#B85C38]" />
        <div className="h-1.5 flex-1 bg-[#D8CFB8]" />
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#1E2A1D]">
          CREA TU CUENTA
        </h2>
        <p className="mt-1.5 text-sm text-[#6B6455]">
          Paso 1 de 2 · ¿Cómo quieres usar FutLink?
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="space-y-4 mb-8">
        {/* Card 1: Player */}
        <button
          type="button"
          onClick={() => setSelectedRole("player")}
          className={`w-full text-left p-5 flex items-start gap-4 border transition-all cursor-pointer rounded-none relative ${
            selectedRole === "player"
              ? "bg-[#F6F2E7] border-2 border-[#B85C38] shadow-sm"
              : "bg-[#F6F2E7] border-[#D8CFB8] hover:border-[#3F5F3D]/60"
          }`}
        >
          {/* Green Pentagonal Shield Icon */}
          <div className="clip-pentagon grid h-12 w-12 shrink-0 place-items-center bg-[#3F5F3D] text-[#F1EEE3]">
            <User className="h-6 w-6" />
          </div>

          <div className="flex-1 pr-6">
            <h3 className="font-display text-xl font-bold uppercase text-[#1E2A1D]">
              Soy Jugador
            </h3>
            <p className="mt-1 text-xs text-[#6B6455] leading-relaxed">
              Crea tu perfil deportivo y recibe oportunidades
            </p>
          </div>

          {selectedRole === "player" && (
            <div className="absolute top-4 right-4 grid h-6 w-6 place-items-center bg-[#B85C38] text-white">
              <Check className="h-4 w-4" />
            </div>
          )}
        </button>

        {/* Card 2: Recruiter */}
        <button
          type="button"
          onClick={() => setSelectedRole("recruiter")}
          className={`w-full text-left p-5 flex items-start gap-4 border transition-all cursor-pointer rounded-none relative ${
            selectedRole === "recruiter"
              ? "bg-[#F6F2E7] border-2 border-[#B85C38] shadow-sm"
              : "bg-[#F6F2E7] border-[#D8CFB8] hover:border-[#B85C38]/60"
          }`}
        >
          {/* Rust/Orange Pentagonal Shield Icon */}
          <div className="clip-pentagon grid h-12 w-12 shrink-0 place-items-center bg-[#B85C38] text-[#F1EEE3]">
            <Briefcase className="h-6 w-6" />
          </div>

          <div className="flex-1 pr-6">
            <h3 className="font-display text-xl font-bold uppercase text-[#1E2A1D]">
              Soy Reclutador
            </h3>
            <p className="mt-1 text-xs text-[#6B6455] leading-relaxed">
              Busca y gestiona talento para tu institución
            </p>
          </div>

          {selectedRole === "recruiter" && (
            <div className="absolute top-4 right-4 grid h-6 w-6 place-items-center bg-[#B85C38] text-white">
              <Check className="h-4 w-4" />
            </div>
          )}
        </button>
      </div>

      {/* Action Button */}
      <button
        type="button"
        disabled={!selectedRole}
        onClick={handleContinue}
        className="btn-clay w-full py-3.5 text-center font-mono font-bold text-sm uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#B85C38] transition"
      >
        CONTINUAR
      </button>

      {/* Footer Link */}
      <div className="mt-8 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B6455]">
          ¿YA TENÉS CUENTA?{" "}
          <Link href="/login" className="text-[#B85C38] hover:underline font-extrabold">
            INICIÁ SESIÓN
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <AuthLayout activeTab="register">
      <Suspense fallback={<div className="font-mono text-xs text-[#6B6455]">Cargando...</div>}>
        <RegisterFormContent />
      </Suspense>
    </AuthLayout>
  );
}

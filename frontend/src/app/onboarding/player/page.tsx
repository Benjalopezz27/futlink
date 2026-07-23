"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingStepLayout } from "@/components/onboarding/OnboardingStepLayout";
import {
  ButtonGroupField,
  FileUploadField,
  SelectField,
  TextField,
  VideoHighlightField,
} from "@/components/onboarding/OnboardingFields";
import {
  PRIMARY_POSITIONS,
  SPECIFIC_ROLES_BY_POSITION,
  PrimaryPosition,
} from "@/lib/positionTaxonomy";
import { authApi, getToken, ONBOARDING_BIRTHDATE_KEY } from "@/lib/api";

const FOOT_OPTIONS = [
  { value: "right", label: "Derecho" },
  { value: "left", label: "Izquierdo" },
  { value: "both", label: "Ambidiestro" },
];

const CONTRACT_STATUS_OPTIONS = [
  { value: "Agente Libre", label: "Agente Libre" },
  { value: "Amateur", label: "Amateur" },
  { value: "Semi-Profesional", label: "Semi-Profesional" },
  { value: "Profesional", label: "Profesional" },
];

const CURRENT_YEAR = new Date().getFullYear();
const GRADUATION_YEAR_OPTIONS = Array.from({ length: 7 }, (_, i) => {
  const year = String(CURRENT_YEAR + i);
  return { value: year, label: year };
});

const strOrUndefined = (value: string): string | undefined =>
  value === "" ? undefined : value;

const numOrUndefined = (value: string): number | undefined =>
  value === "" ? undefined : Number(value);

function CardSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-line-warm bg-card-paper-bright bg-paper-lines p-6">
      <h3 className="mb-4 border-b border-line-warm pb-2 font-mono text-xs font-bold uppercase tracking-widest text-rust">
        {title}
      </h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

export default function PlayerOnboardingPage() {
  const router = useRouter();

  const [primaryPosition, setPrimaryPosition] = useState("");
  const [specificRole, setSpecificRole] = useState("");
  const [secondaryRole, setSecondaryRole] = useState("");
  const [foot, setFoot] = useState("");
  const [contractStatus, setContractStatus] = useState("");
  const [currentClub, setCurrentClub] = useState("");

  const [minutesPlayed, setMinutesPlayed] = useState("");
  const [currentLeague, setCurrentLeague] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");

  const [gpa, setGpa] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [primaryHighlightUrl, setPrimaryHighlightUrl] = useState("");

  const [kycDocumentUrl, setKycDocumentUrl] = useState("");
  const [federationId, setFederationId] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/login");
    }
  }, [router]);

  const handleBack = () => {
    router.back();
  };

  const handlePrimaryPositionChange = (value: string) => {
    setPrimaryPosition(value);
    setSpecificRole("");
    setSecondaryRole("");
  };

  const handleSpecificRoleChange = (value: string) => {
    setSpecificRole(value);
    if (secondaryRole === value) {
      setSecondaryRole("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const storedBirthDate =
        typeof window !== "undefined"
          ? sessionStorage.getItem(ONBOARDING_BIRTHDATE_KEY)
          : null;

      await authApi.onboardPlayer({
        birthDate: storedBirthDate || undefined,
        primaryPosition: strOrUndefined(primaryPosition),
        specificRole: strOrUndefined(specificRole),
        secondaryRole: strOrUndefined(secondaryRole),
        foot: strOrUndefined(foot),
        contractStatus: strOrUndefined(contractStatus),
        currentClub: strOrUndefined(currentClub),
        currentLeague: strOrUndefined(currentLeague),
        minutesPlayed: numOrUndefined(minutesPlayed),
        goals: numOrUndefined(goals),
        assists: numOrUndefined(assists),
        gpa: numOrUndefined(gpa),
        graduationYear: numOrUndefined(graduationYear),
        primaryHighlightUrl: strOrUndefined(primaryHighlightUrl),
        federationId: strOrUndefined(federationId),
      });

      sessionStorage.removeItem(ONBOARDING_BIRTHDATE_KEY);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "No pudimos completar tu ficha deportiva. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const availableRoles = primaryPosition
    ? SPECIFIC_ROLES_BY_POSITION[primaryPosition as PrimaryPosition] ?? []
    : [];
  const specificRoleOptions = availableRoles.map((role) => ({
    value: role,
    label: role,
  }));
  const secondaryRoleOptions = availableRoles
    .filter((role) => role !== specificRole)
    .map((role) => ({ value: role, label: role }));

  return (
    <OnboardingStepLayout
      title="Tu Perfil Deportivo"
      subtitle="Los datos que te hacen destacar en la cancha."
      onBack={handleBack}
    >
      {error && (
        <div className="mb-6 border border-rose-400/40 bg-rose-500/10 p-3 font-mono text-xs text-rose-700 rounded-none">
          [ ERROR ]: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left column */}
          <CardSection title="BLOQUE A · IDENTIDAD EN CANCHA">
            <ButtonGroupField
              label="Posición Principal"
              value={primaryPosition}
              onChange={handlePrimaryPositionChange}
              options={PRIMARY_POSITIONS.map((pos) => ({ value: pos, label: pos }))}
            />

            <ButtonGroupField
              label="Rol Específico"
              value={specificRole}
              onChange={handleSpecificRoleChange}
              options={specificRoleOptions}
              disabled={!primaryPosition}
              disabledHint="Elegí primero tu posición principal arriba."
            />

            <ButtonGroupField
              label="Rol Secundario"
              optional
              value={secondaryRole}
              onChange={setSecondaryRole}
              options={secondaryRoleOptions}
              disabled={!specificRole}
              disabledHint="Elegí primero tu rol específico arriba."
            />

            <ButtonGroupField
              label="Pie Hábil"
              value={foot}
              onChange={setFoot}
              options={FOOT_OPTIONS}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SelectField
                id="contractStatus"
                label="Estado Actual"
                value={contractStatus}
                onChange={setContractStatus}
                options={CONTRACT_STATUS_OPTIONS}
                placeholder="Seleccioná una opción"
              />
              <TextField
                id="currentClub"
                label="Club/Equipo Actual"
                value={currentClub}
                onChange={setCurrentClub}
                placeholder="Ej. Deportivo Norte"
              />
            </div>
          </CardSection>

          {/* Right column */}
          <div className="space-y-6">
            <CardSection title="BLOQUE B · RENDIMIENTO VERIFICABLE">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField
                  id="minutesPlayed"
                  label="Minutos Jugados"
                  type="number"
                  min={0}
                  value={minutesPlayed}
                  onChange={setMinutesPlayed}
                  placeholder="Ej. 1240"
                />
                <TextField
                  id="currentLeague"
                  label="Liga/División"
                  value={currentLeague}
                  onChange={setCurrentLeague}
                  placeholder="Ej. Liga Amateur Regional"
                />
                <TextField
                  id="goals"
                  label="Goles"
                  type="number"
                  min={0}
                  value={goals}
                  onChange={setGoals}
                  placeholder="0"
                />
                <TextField
                  id="assists"
                  label="Asistencias"
                  type="number"
                  min={0}
                  value={assists}
                  onChange={setAssists}
                  placeholder="0"
                />
              </div>
            </CardSection>

            <CardSection title="BLOQUE C · PERFIL ACADÉMICO Y MEDIOS">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField
                  id="gpa"
                  label="Promedio Académico (GPA)"
                  type="number"
                  min={0}
                  max={10}
                  value={gpa}
                  onChange={setGpa}
                  placeholder="Ej. 3.8"
                  optional
                />
                <SelectField
                  id="graduationYear"
                  label="Año de Graduación"
                  value={graduationYear}
                  onChange={setGraduationYear}
                  options={GRADUATION_YEAR_OPTIONS}
                  placeholder="Seleccioná un año"
                  optional
                />
              </div>
              <VideoHighlightField
                label="Video Highlight Principal"
                value={primaryHighlightUrl}
                onChange={setPrimaryHighlightUrl}
                optional
              />
            </CardSection>

            <CardSection title="KYC DEPORTIVO">
              <FileUploadField
                label="Carnet, Ficha Federativa o DNI"
                value={kycDocumentUrl}
                onChange={setKycDocumentUrl}
                helperText="Nos ayuda a verificar tu identidad deportiva. No se comparte públicamente."
                optional
              />
              <TextField
                id="federationId"
                label="ID de Jugador (Sistema COMET u otro)"
                value={federationId}
                onChange={setFederationId}
                placeholder="Ej. COMET-0000000"
                optional
              />
            </CardSection>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-clay w-full py-3.5 text-center font-mono font-bold text-sm uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {loading ? "GENERANDO..." : "GENERAR PERFIL DE JUGADOR →"}
        </button>
      </form>
    </OnboardingStepLayout>
  );
}

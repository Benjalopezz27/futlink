"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingStepLayout } from "@/components/onboarding/OnboardingStepLayout";
import {
  FileUploadField,
  MultiSelectButtonGroup,
  SelectField,
  TextField,
} from "@/components/onboarding/OnboardingFields";
import { authApi, getToken } from "@/lib/api";

const INSTITUTION_TYPE_OPTIONS = [
  { value: "Club", label: "Club" },
  { value: "Universidad", label: "Universidad" },
  { value: "Agencia", label: "Agencia" },
];

const TITLE_OPTIONS = [
  { value: "Director Deportivo", label: "Director Deportivo" },
  { value: "Scout", label: "Scout" },
  { value: "Manager", label: "Manager" },
  { value: "Presidente", label: "Presidente" },
  { value: "Otro", label: "Otro" },
];

const CATEGORY_OPTIONS = ["Primera", "Reserva", "Juveniles"];
const MODALITY_OPTIONS = ["Fútbol", "Futsal", "Fútbol Femenino"];

const strOrUndefined = (value: string): string | undefined =>
  value === "" ? undefined : value;

export default function RecruiterOnboardingPage() {
  const router = useRouter();

  const [logoUrl, setLogoUrl] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [institutionType, setInstitutionType] = useState("Club");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [divisionLeague, setDivisionLeague] = useState("");
  const [kycDocumentUrl, setKycDocumentUrl] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [modalities, setModalities] = useState<string[]>([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!acceptedTerms) {
      setError("Aceptá el reglamento de FutLink (términos y condiciones) para continuar.");
      return;
    }

    setLoading(true);
    try {
      await authApi.onboardRecruiter({
        institutionName: strOrUndefined(institutionName),
        institutionType: strOrUndefined(institutionType),
        location: strOrUndefined(location),
        title: strOrUndefined(title),
        website: strOrUndefined(website),
        divisionLeague: strOrUndefined(divisionLeague),
        logoUrl: strOrUndefined(logoUrl),
        kycDocumentUrl: strOrUndefined(kycDocumentUrl),
        categories: categories.length > 0 ? categories : undefined,
        modalities: modalities.length > 0 ? modalities : undefined,
      });

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "No pudimos dar de alta tu institución. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingStepLayout
      title="Datos de la Institución"
      subtitle="Ayudanos a verificar quién está buscando talento."
      onBack={handleBack}
    >
      {error && (
        <div className="mb-6 border border-rose-400/40 bg-rose-500/10 p-3 font-mono text-xs text-rose-700 rounded-none">
          [ ERROR ]: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
        <div className="border border-line-warm bg-card-paper-bright bg-paper-lines p-6 space-y-5">
          <FileUploadField
            label="Escudo / Logo de la Institución"
            value={logoUrl}
            onChange={setLogoUrl}
            placeholderText="Subir escudo o logo"
            helperText="Se mostrará en tu perfil, búsquedas y mensajes."
            optional
          />

          <TextField
            id="institutionName"
            label="Nombre de la Institución"
            value={institutionName}
            onChange={setInstitutionName}
            placeholder="Ej. Club Atlético del Norte"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SelectField
              id="institutionType"
              label="Tipo de Institución"
              value={institutionType}
              onChange={setInstitutionType}
              options={INSTITUTION_TYPE_OPTIONS}
            />
            <TextField
              id="location"
              label="Ubicación"
              value={location}
              onChange={setLocation}
              placeholder="Ciudad, País"
            />
          </div>

          <SelectField
            id="title"
            label="Cargo / Rol Específico"
            value={title}
            onChange={setTitle}
            options={TITLE_OPTIONS}
            placeholder="Seleccioná una opción"
          />

          <TextField
            id="website"
            label="Sitio Web Oficial o Redes"
            type="url"
            value={website}
            onChange={setWebsite}
            placeholder="https://tuinstitucion.com"
          />

          <TextField
            id="divisionLeague"
            label="Liga o Federación Afiliada"
            value={divisionLeague}
            onChange={setDivisionLeague}
            placeholder="Ej. Liga Regional de Rosario / AFA"
            optional
          />

          <FileUploadField
            label="Carnet o Licencia Institucional"
            value={kycDocumentUrl}
            onChange={setKycDocumentUrl}
            helperText="Si eres agente oficial, este dato aporta seriedad a tu perfil."
            optional
          />

          <MultiSelectButtonGroup
            label="Categorías que Manejás"
            values={categories}
            onChange={setCategories}
            options={CATEGORY_OPTIONS}
            optional
          />

          <MultiSelectButtonGroup
            label="Modalidad"
            values={modalities}
            onChange={setModalities}
            options={MODALITY_OPTIONS}
            optional
          />

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
        </div>

        <button
          type="submit"
          disabled={loading || !acceptedTerms}
          className="btn-clay w-full py-3.5 text-center font-mono font-bold text-sm uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {loading ? "CREANDO..." : "CREAR CUENTA →"}
        </button>
      </form>
    </OnboardingStepLayout>
  );
}

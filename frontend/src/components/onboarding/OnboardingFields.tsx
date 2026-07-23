"use client";

import { useState } from "react";
import { Upload, Check, Loader2 } from "lucide-react";
import { uploadApi } from "@/lib/api";

const inputClass =
  "w-full bg-card-paper border border-line-warm px-4 py-3 font-sans text-sm text-ink placeholder-muted-warm/60 focus:border-rust focus:outline-none rounded-none transition";

interface FieldWrapperProps {
  label: string;
  htmlFor?: string;
  optional?: boolean;
  children: React.ReactNode;
}

function FieldWrapper({ label, htmlFor, optional, children }: FieldWrapperProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-mono text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
      >
        {label}
        {optional && (
          <span className="text-muted-warm font-normal normal-case"> (opcional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "number" | "date" | "url";
  placeholder?: string;
  optional?: boolean;
  min?: number;
  max?: number;
}

export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  optional,
  min,
  max,
}: TextFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id} optional={optional}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        className={inputClass}
      />
    </FieldWrapper>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  optional?: boolean;
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  optional,
}: SelectFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id} optional={optional}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} cursor-pointer`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export interface ButtonGroupOption {
  value: string;
  label: string;
}

interface ButtonGroupFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ButtonGroupOption[];
  optional?: boolean;
  disabled?: boolean;
  disabledHint?: string;
}

export function ButtonGroupField({
  label,
  value,
  onChange,
  options,
  optional,
  disabled,
  disabledHint,
}: ButtonGroupFieldProps) {
  return (
    <FieldWrapper label={label} optional={optional}>
      {disabled && disabledHint && (
        <p className="mb-2 text-xs text-muted-warm">{disabledHint}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            disabled={disabled}
            onClick={() => onChange(opt.value)}
            className={`rounded-none border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${
              value === opt.value
                ? "border-rust bg-rust text-cream"
                : "border-line-warm bg-card-paper text-ink hover:border-rust/60"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </FieldWrapper>
  );
}

interface MultiSelectButtonGroupProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: string[];
  optional?: boolean;
}

export function MultiSelectButtonGroup({
  label,
  values,
  onChange,
  options,
  optional,
}: MultiSelectButtonGroupProps) {
  const toggle = (opt: string) => {
    onChange(
      values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]
    );
  };

  return (
    <FieldWrapper label={label} optional={optional}>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`rounded-none border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              values.includes(opt)
                ? "border-rust bg-rust text-cream"
                : "border-line-warm bg-card-paper text-ink hover:border-rust/60"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </FieldWrapper>
  );
}

interface FileUploadFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helperText?: string;
  optional?: boolean;
  placeholderText?: string;
}

export function FileUploadField({
  label,
  value,
  onChange,
  helperText,
  optional,
  placeholderText = "Subir foto o escaneo del documento",
}: FileUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const { url } = await uploadApi.uploadImage(file);
      onChange(url);
    } catch (err: any) {
      setError(err.message || "No pudimos subir el documento a tu legajo. Intentá de nuevo.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <FieldWrapper label={label} optional={optional}>
      <label
        className={`flex items-center justify-center gap-2 border border-dashed border-line-warm bg-card-paper px-4 py-4 font-mono text-xs font-bold uppercase tracking-wider text-muted-warm transition ${
          uploading ? "opacity-60" : "cursor-pointer hover:border-rust/60"
        }`}
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Subiendo...
          </>
        ) : value ? (
          <>
            <Check className="h-4 w-4 text-grass" /> Archivo cargado
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" /> {placeholderText}
          </>
        )}
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          disabled={uploading}
          onChange={handleFileChange}
        />
      </label>
      {helperText && <p className="mt-1.5 text-xs text-muted-warm">{helperText}</p>}
      {error && <p className="mt-1.5 text-xs text-rose-600">{error}</p>}
    </FieldWrapper>
  );
}

interface VideoHighlightFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  optional?: boolean;
}

export function VideoHighlightField({
  label,
  value,
  onChange,
  optional,
}: VideoHighlightFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedViaFile, setUploadedViaFile] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUrlChange = (nextValue: string) => {
    setUploadedViaFile(false);
    onChange(nextValue);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const { url } = await uploadApi.uploadVideo(file);
      onChange(url);
      setUploadedViaFile(true);
    } catch (err: any) {
      setError(err.message || "No pudimos cargar tu video destacado. Intentá de nuevo.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <FieldWrapper label={label} optional={optional}>
      <input
        type="url"
        value={value}
        onChange={(e) => handleUrlChange(e.target.value)}
        placeholder="Link de YouTube, Vimeo o Hudl"
        className={inputClass}
      />

      <div className="relative my-3 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-line-warm" />
        </div>
        <span className="relative bg-card-paper px-3 font-mono text-xs font-bold text-muted-warm">
          O
        </span>
      </div>

      <label
        className={`flex items-center justify-center gap-2 border border-dashed border-line-warm bg-card-paper px-4 py-4 font-mono text-xs font-bold uppercase tracking-wider text-muted-warm transition ${
          uploading ? "opacity-60" : "cursor-pointer hover:border-rust/60"
        }`}
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Subiendo...
          </>
        ) : uploadedViaFile ? (
          <>
            <Check className="h-4 w-4 text-grass" /> Video cargado
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" /> Subir video (MP4, MOV)
          </>
        )}
        <input
          type="file"
          accept="video/mp4,video/quicktime"
          className="hidden"
          disabled={uploading}
          onChange={handleFileChange}
        />
      </label>
      {error && <p className="mt-1.5 text-xs text-rose-600">{error}</p>}
    </FieldWrapper>
  );
}

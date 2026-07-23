export const PRIMARY_POSITIONS = [
  "Delantero",
  "Mediocampista",
  "Defensa",
  "Portero",
] as const;

export type PrimaryPosition = (typeof PRIMARY_POSITIONS)[number];

export const SPECIFIC_ROLES_BY_POSITION: Record<PrimaryPosition, string[]> = {
  Delantero: [
    "Centro Delantero",
    "Segundo Delantero",
    "Extremo Derecho",
    "Extremo Izquierdo",
  ],
  Mediocampista: [
    "Volante Central",
    "Volante Defensivo",
    "Volante Ofensivo",
    "Enganche",
  ],
  Defensa: [
    "Defensor Central",
    "Lateral Derecho",
    "Lateral Izquierdo",
    "Líbero",
  ],
  Portero: ["Portero"],
};

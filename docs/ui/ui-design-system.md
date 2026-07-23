# Sistema de Diseño y Decisiones de UI (UI Guidelines) — FutLink

Este documento centraliza las reglas visuales, paleta de colores, tipografías, patrones de interfaz y clases de **Tailwind CSS** para asegurar consistencia visual en todo el desarrollo de FutLink.

---

## 0. Filosofía de Diseño: Estética de Scouting & Dossier Táctico

FutLink se aleja explícitamente de las estéticas de "app genérica", "red social" o "e-commerce" (`rounded-full`, sombras difuminadas, gradientes de neón) para instaurar una **Estética de Dossier Táctico / Planilla de Scouting**.

* **Vibe:** Terroso, análogo, de cuaderno de ojeador y carnet deportivo real.
* **Inspiración:** Planillas federativas, convocatorias oficiales, carnets de jugador, pizarras tácticas y escudos institucionales.

---

## 1. Paleta de Colores

La paleta se basa en tonos tierra, césped y papel, evocando libretas de anotaciones, campos de juego y el entorno físico del fútbol.

| Rol | Nombre | Hexadecimal | Variable CSS / Token | Clase Tailwind | Uso Principal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fondo Claro** | Papel / Fondo Principal | `#EFE9DA` | `--bg-paper` | `bg-paper` | Fondo principal en modo claro (reemplaza blanco puro / slate-50). |
| **Tarjeta Clara** | Superficie de Tarjetas | `#F6F2E7` | `--bg-card-paper` | `bg-card-paper` | Tarjetas, inputs, paneles sobre fondo claro. |
| **Fondo Oscuro** | Oscuro Institucional | `#0B120C` | `--bg-night` | `bg-night` | Sidebar, panel de marca, hero nocturno. |
| **Panel Oscuro** | Verde Bosque Oscuro | `#132318` | `--bg-panel-dark` | `bg-panel-dark` | Tarjetas y contenedores sobre fondo oscuro. |
| **Borde Duro** | Línea Cálida | `#D8CFB8` | `--line-warm` | `border-line-warm` | Todo borde de tarjeta/input en modo claro (reemplaza sombras). |
| **Acento Primario** | Óxido (Rust / Clay Primary) | `#B85C38` | `--clay-primary` | `bg-rust`, `text-rust` | **Único** color de CTA primario (Botón postular, login, guardar). |
| **Acento Secundario**| Arcilla (Clay Bright) | `#C9713F` | `--clay-bright` | `bg-clay`, `text-clay` | Tags de estado, detalles en logo, hover de acento, radares. |
| **Verde Táctico** | Verde Césped | `#3F5F3D` / `#2D5A3D` | `--grass` | `bg-grass`, `text-grass` | Estados positivos (Match Alto, Verificado, Contactado), escudos. |
| **Verde Suave** | Césped Claro | `#8FAE8A` | `--grass-soft` | `text-grass-soft` | Texto de acento sobre fondo oscuro, íconos activos. |
| **Texto Claro** | Tinta | `#1E2A1D` | `--ink` | `text-ink` | Texto principal de lectura en modo claro. |
| **Texto Oscuro** | Crema | `#F1EEE3` | `--cream` | `text-cream` | Texto principal sobre fondos oscuros. |
| **Metadatos** | Muted Cálido | `#6B6455` | `--muted-warm` | `text-muted-warm` | Fechas, etiquetas secundarias, descripciones. |

---

## 2. Tipografía & Jerarquía

| Aplicación | Fuente | Pesos | Clase Tailwind | Uso Exclusivo |
| :--- | :--- | :--- | :--- | :--- |
| **Identidad de Marca** | `Space Grotesk` | 600, 700 | `font-brand` | Exclusivo para el Logotipo ("FutLink"). |
| **Encabezados & Nombres** | `Oswald` | 500, 600, 700 | `font-display` | Nombres de jugadores, clubes, títulos y números grandes. |
| **Cuerpo de Texto** | `IBM Plex Sans` / `Inter` | 400, 500, 600 | `font-sans` | Legibilidad en mensajes, descripciones y párrafos largos. |
| **Datos Duros & Etiquetas** | `JetBrains Mono` | 500, 600, 700 | `font-mono` | **SIEMPRE en mayúsculas**. Fechas, métricas, posiciones (`[ MCD ]`). |

---

## 3. Patrones Geométricos & Estructurales

* **Cero Border-Radius (`rounded-none`):** Las tarjetas, botones, inputs y selectores usan esquinas totalmente rectas.
* **Sin Sombras Difusas:** En lugar de `shadow-md`, la profundidad se logra mediante bordes sólidos (`border-line-warm`) o sombras duras brutalistas (`shadow-hard`).
* **Pentágono Táctico (`clip-pentagon`):** Reemplaza a los avatares circulares tradicionales.
  ```css
  /* Escudo / Avatar Pentagonal */
  clip-path: polygon(50% 0%, 100% 22%, 100% 78%, 50% 100%, 0% 78%, 0% 22%);
  ```
* **Texturas de Libreta (`bg-tactical-grid` / `bg-paper-grid`):** Fondos con cuadrículas sutiles de pizarras tácticas y hojas punteadas.

---

## 4. Mapeo Completo de Clases Tailwind CSS (Tailwind v4 `@theme`)

### Variables & Tokens Registrados en `globals.css`

```css
@theme {
  --font-brand: "Space Grotesk", sans-serif;
  --font-display: "Oswald", "Barlow Condensed", sans-serif;
  --font-sans: "IBM Plex Sans", "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --color-paper: #EFE9DA;
  --color-card-paper: #F6F2E7;
  --color-night: #0B120C;
  --color-panel-dark: #132318;
  --color-line-warm: #D8CFB8;

  --color-rust: #B85C38;
  --color-clay: #C9713F;
  --color-grass: #3F5F3D;
  --color-grass-tactical: #2D5A3D;
  --color-grass-soft: #8FAE8A;

  --color-ink: #1E2A1D;
  --color-cream: #F1EEE3;
  --color-muted-warm: #6B6455;
}
```

---

### UI Toolkit & Clases Utilitarias Personalizadas

#### A. Botones Tácticos

```html
<!-- Botón Primario (Único CTA del producto) -->
<button class="btn-clay">
  POSTULARME A CONVOCATORIA
</button>

<!-- Botón Secundario Outline -->
<button class="btn-outline-grass">
  VER FICHA TÉCNICA
</button>
```

**Definición de clases**:
* `.btn-clay`: `bg-rust text-cream font-mono font-bold uppercase px-5 py-2.5 rounded-none border border-rust hover:bg-clay transition cursor-pointer`
* `.btn-outline-grass`: `bg-transparent text-ink border border-line-warm font-mono font-bold uppercase px-5 py-2.5 rounded-none hover:bg-card-paper transition cursor-pointer`

#### B. Tarjetas de Dossier & Perfil

```html
<!-- Tarjeta Modo Claro (Dossier Papel) -->
<div class="card-paper p-6">
  <!-- Avatar Pentagonal -->
  <div class="clip-pentagon h-16 w-16 bg-rust text-cream font-display font-bold flex items-center justify-center">
    LM
  </div>
  <h3 class="font-display text-2xl uppercase text-ink">Lucas Moreira</h3>
  <span class="badge-tactical">[ MCD · VOLANTE CENTRAL ]</span>
</div>
```

**Definición de clases**:
* `.card-paper`: `bg-card-paper border border-line-warm rounded-none text-ink shadow-none`
* `.card-dark`: `bg-panel-dark border border-grass/30 rounded-none text-cream shadow-none`
* `.clip-pentagon`: `clip-path: polygon(50% 0%, 100% 22%, 100% 78%, 50% 100%, 0% 78%, 0% 22%);`
* `.clip-shield`: `clip-path: polygon(50% 0%, 100% 0%, 100% 68%, 50% 100%, 0% 68%, 0% 0%);`

#### C. Etiquetas Tácticas (Tags en Corchetes)

```html
<span class="badge-tactical">[ VALIDADO POR DT ]</span>
<span class="badge-tactical-rust">[ PRUEBA ABIERTA ]</span>
```

**Definición de clases**:
* `.badge-tactical`: `font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 border border-line-warm bg-paper text-ink rounded-none`
* `.badge-tactical-rust`: `font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 border border-rust/40 bg-rust/10 text-rust rounded-none`

#### D. Barra de Compatibilidad (Match Bar)

```html
<div class="w-full bg-line-warm h-2 rounded-none overflow-hidden">
  <div class="h-full bg-gradient-to-r from-rust to-grass" style="width: 88%;"></div>
</div>
```

#### E. Pestañas Tácticas (Tabs)

```html
<button class="tab-tactical active">
  [ 01 · CONVOCATORIAS ]
</button>
<button class="tab-tactical">
  [ 02 · MIS POSTULACIONES ]
</button>
```

**Definición de clase**:
* `.tab-tactical`: `font-mono text-xs font-bold uppercase tracking-widest py-2 px-4 text-muted-warm border-b-2 border-transparent transition cursor-pointer`
* `.tab-tactical.active`: `text-rust border-rust font-extrabold`

---

## 5. Lenguaje y Copywriting (Microcopy Oficial)

Se abandona la jerga de redes sociales o SAAS en favor de términos de gestión deportiva real:

| Concepto Genérico | Término Oficial FutLink |
| :--- | :--- |
| Mensajes / Chat | **Bitácora** / **Ficha de Observación** |
| Guardar / Favoritos | **Radar de Talentos** / **Watchlist** |
| Comparar Perfiles | **Mesa de Análisis** |
| Trabajo / Empleo / Empleos | **Convocatoria** / **Visoría** / **Prueba Abierta** |
| Filtros | **Parámetros de Scouting** |
| Candidatos | **Postulantes** / **Legajos Deportivos** |

---

## 6. Reglas Duras & Anti-Patrones (Prohibiciones)

1. ❌ **Prohibido `rounded-full` y `rounded-xl`**: Todos los elementos principales usan esquinas rectas (`rounded-none`).
2. ❌ **Prohibido Sombras Difusas (`shadow-lg`, `shadow-xl`)**: Toda elevación se realiza con bordes sólidos (`border-line-warm`).
3. ❌ **Prohibido Avatares Circulares**: Usar el escudo pentagonal (`clip-pentagon`).
4. ❌ **Un Solo Color de CTA**: Únicamente el tono Óxido/Clay (`#B85C38`) para la acción principal.
5. ❌ **Prohibidos Textos Blandos sin Formato**: Todo dato técnico (posiciones, métricas, fechas) DEBE ir en `font-mono`, mayúsculas y enmarcado en corchetes `[ ... ]`.
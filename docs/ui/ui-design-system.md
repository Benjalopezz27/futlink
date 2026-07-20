# Sistema de Diseño y Decisiones de UI (UI Guidelines)

Este documento centraliza las decisiones de diseño, la paleta de colores y la biblioteca de componentes para asegurar consistencia visual en todo el desarrollo frontend (Next.js + Tailwind CSS).

## 1. Identidad Visual y Concepto
* **Concepto:** "Césped Nocturno & Rendimiento Real".
* **Vibe:** Competitivo, analítico y anclado en el mundo real del fútbol. Se aleja del estilo corporativo genérico (SaaS / LinkedIn) y adopta una estética inmersiva inspirada en estadios y retransmisiones deportivas de noche. El diseño enmarca el talento y los datos reales sin estridencias artificiales.
* **Tipografía:** 
  * *Display (Títulos y Acentos):* Display condensada de estilo deportivo y marcador de TV: `Barlow Condensed` (espíritu de cartel/dorsal de estadio).
  * *Sans-serif (Datos y Contenido):* Familia utilitaria simple, limpia y altamente legible: `Inter`.

## 2. Paleta de Colores (Tailwind CSS)

| Rol | Nombre | Clase Tailwind | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Fondo Base** | Césped Nocturno | `bg-slate-950` / `bg-background` | `#0D1410` | Fondo general de la aplicación en modo oscuro (sugiere césped de noche). |
| **Primario (Acento)** | Verde Césped Real | `bg-emerald-500` / `bg-primary` | `#3D7A3D` a `#5FA85F` | Acentos deportivos, arcos, indicadores y validaciones de datos (subduido, no neón). |
| **Secundario (CTA)** | Naranja Arcilla / Amarillo Tarjeta | `bg-orange-500` / `bg-accent` | `#D9A441` | Botones de llamados a la acción, "Match", conos de entrenamiento y tarjetas. |
| **Fondo Tarjetas** | Verde Bosque Profundo | `bg-slate-900` / `bg-card` | `#121C16` | Tarjetas de jugadores, paneles glassmorphism y elementos del feed. |
| **Fondo Claro (Base)** | Crema Suave | `bg-slate-50` | `#FAFBF9` | Fondo general en modo claro. |
| **Texto Princ.** | Blanco Roto / Crema | `text-slate-50` / `text-foreground` | `#FAFBF9` | Encabezados y textos principales (evita fatiga visual en pantallas oscuras). |
| **Texto Sec.** | Verde Grisáceo | `text-slate-400` / `text-muted-foreground` | `#949E94` | Etiquetas de menor jerarquía y datos secundarios. |

## 3. Biblioteca de Componentes Base (UI Kit)

### Botones (Buttons)
* **Botón Primario (Acción Principal):** Fondo `bg-orange-500`, texto blanco `text-white`, hover `hover:bg-orange-600`. Bordes redondeados `rounded-md`. 
  * *Uso:* "Postularme", "Guardar Perfil", "Contactar Jugador".
* **Botón Secundario (Navegación/Estructura):** Fondo `bg-emerald-700`, texto blanco `text-white`, hover `hover:bg-emerald-800`. 
  * *Uso:* "Iniciar Sesión", "Buscar", "Aplicar Filtros".
* **Botón Outline (Acciones Menores):** Fondo transparente, borde `border border-slate-300`, texto `text-slate-700`, hover `hover:bg-slate-50`. 
  * *Uso:* "Cancelar", "Cerrar", "Ver detalles".

### Tarjetas (Cards)
* **Estilo Base:** Fondo blanco (`bg-white`), borde muy sutil (`border border-slate-200`), sombra suave (`shadow-sm`, pasando a `shadow-md` en hover), esquinas redondeadas modernas (`rounded-xl`).
* **Card de Jugador:** Debe priorizar el contenido multimedia. Relación de aspecto 16:9 en la parte superior para la foto o video, seguido del nombre (`text-lg font-bold text-slate-800`), y una cuadrícula (grid) inferior con 3 métricas clave (ej. Posición, Altura, Edad).

### Etiquetas (Badges / Tags)
* **Métricas y Posiciones (ej. Defensor, 1.85m):** Fondo `bg-emerald-100`, texto `text-emerald-800`, `rounded-full`, tamaño de fuente pequeño `text-xs`.
* **Estado Postulación (Pendiente):** Fondo `bg-slate-100`, texto `text-slate-700`.
* **Estado Postulación (En Revisión/Destacado):** Fondo `bg-orange-100`, texto `text-orange-800`.

### Formularios y Búsqueda (Inputs)
* **Inputs de Texto/Selects:** Borde claro `border-slate-300`, fondo blanco `bg-white`, esquinas redondeadas `rounded-md`.
* **Estado Activo (Focus):** Debe guiar al usuario sin ser visualmente agresivo. Anillo de color esmeralda: `focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none`.

## 4. Espaciado y Composición (Layout)
* **Respiración visual (Whitespace):** En una plataforma densa en datos, el espacio en blanco es crucial. Usa márgenes generosos (`p-4`, `p-6`, `p-8` en contenedores).
* **Alineación de Datos:** Las métricas biométricas nunca deben presentarse en párrafos, sino en listas descriptivas (`dl`, `dt`, `dd`) o grillas simétricas para que el reclutador pueda escanear la información en segundos.
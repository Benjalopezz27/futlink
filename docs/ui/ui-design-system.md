# Sistema de Diseño y Decisiones de UI (UI Guidelines)

Este documento centraliza las decisiones de diseño, la paleta de colores y la biblioteca de componentes para asegurar consistencia visual en todo el desarrollo frontend (Next.js + Tailwind CSS).

## 0. Por qué este rediseño existe

La versión anterior de este documento (emerald + naranja + `rounded-xl` + `shadow-sm` + glassmorphism) es el conjunto de defaults más reciclado de generadores de UI con IA: se ve en cualquier SaaS, no en una app de scouting de fútbol. Este documento reemplaza esa base por un sistema anclado en objetos reales del mundo del fútbol (planillas, carnets, escudos, marcadores) y elimina explícitamente los patrones que delatan "hecho en automático".

## 1. Identidad Visual y Concepto

* **Concepto:** "Planilla de Scouting / Césped y Tierra".
* **Vibe:** Terroso, análogo, de dossier deportivo real — carnet de jugador, ficha federativa, planilla de convocatoria. Se aleja de cualquier estética "dashboard flotante" o "glow neón" y se ancla en objetos físicos del fútbol: césped, tierra de cancha, tarjetas, escudos.
* **Tipografía:**
  * *Display (títulos, nombres, números grandes):* `Oswald` — condensada, con espíritu de marcador de TV y dorsal de camiseta.
  * *Sans-serif (cuerpo de texto):* `IBM Plex Sans` — utilitaria, legible, sin redondeos suaves de más.
  * *Mono (etiquetas y micro-datos):* `JetBrains Mono` — SIEMPRE en mayúscula con letter-spacing amplio, para todo campo tipo "MATCH", "PERFORMANCE", "BLOQUE A", "CIERRA 28 JUL". Es el elemento que más ancla la identidad "planilla" del producto.

## 2. Paleta de Colores (Tailwind CSS — config custom, no defaults de paleta)

| Rol | Nombre | Variable / Clase custom | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Fondo oscuro** | Césped Nocturno | `--bg-0` / `bg-night` | `#0B120C` | Sidebar, panel de marca en login/registro. |
| **Fondo panel oscuro** | Verde Bosque | `--bg-1` / `bg-panel` | `#121B13` | Tarjetas sobre fondo oscuro. |
| **Fondo claro** | Crema Papel | `--bg-page` / `bg-paper` | `#EFE9DA` | Fondo principal en modo claro — reemplaza cualquier gris `slate-50` genérico. |
| **Fondo tarjeta clara** | Crema Tarjeta | `--bg-card` / `bg-card-paper` | `#F6F2E7` | Tarjetas, inputs, paneles sobre fondo claro. |
| **Borde** | Línea Cálida | `--line-warm` | `#D8CFB8` | Todo borde de tarjeta/input en modo claro. Reemplaza `shadow-sm`. |
| **Verde césped** | Césped Real | `--grass` | `#3F5F3D` / `#5C8A5A` (oscuro) | Acentos secundarios, escudos, estados verificados — NUNCA con glow ni saturación neón. |
| **Verde suave** | Césped Claro | `--grass-soft` | `#8FAE8A` | Texto de acento sobre fondo oscuro, íconos activos. |
| **Acento primario (CTA)** | Tierra / Clay | `--clay` | `#B85C38` | **Único** color de CTA primario en todo el producto. Reemplaza el naranja saturado y el verde-CTA que convivían sin criterio. |
| **Acento primario claro** | Clay Bright | `--clay-bright` | `#C9713F` | Estados hover, bordes activos, números destacados (scores, matches). |
| **Texto principal (oscuro)** | Crema | `--cream` | `#F1EEE3` | Texto sobre fondo oscuro. |
| **Texto principal (claro)** | Tinta | `--ink` | `#1E2A1D` | Texto sobre fondo claro. |
| **Texto secundario** | Muted Cálido | `--muted-warm` / `--muted` | `#6B6455` / `#8E998C` | Subtítulos, metadatos, texto de apoyo. |

**Regla dura:** un solo color de CTA primario (`--clay`) en todo el producto — login, registro, feed, perfil. Nunca alternar entre verde y naranja para la misma jerarquía de acción, como ocurría antes.

## 3. Biblioteca de Componentes Base (UI Kit)

### Botones (Buttons)
* **Botón Primario (Acción Principal):** Fondo `--clay` sólido, texto `--cream`, hover `--clay-bright`. Esquinas rectas o mínimas (`radius: 2–3px`, nunca `rounded-full` ni `rounded-xl`).
  * *Uso:* "Postularse", "Iniciar Sesión", "Generar Perfil de Jugador", "Guardar cambios" — **todos** el mismo color, sin excepciones.
* **Botón Secundario (Navegación/Estructura):** Transparente, borde 1px `--grass` o `--line-warm` según fondo, texto `--grass-soft` (oscuro) o `--ink` (claro). Nunca fondo sólido saturado.
  * *Uso:* "Soy Reclutador", "Cancelar", login social (Google/Apple como fila secundaria, nunca compitiendo visualmente con el CTA principal).
* **Botón Outline (Acciones menores):** Borde fino `--line-warm`, sin sombra, hover con leve cambio de fondo (`--bg-card`).
  * *Uso:* "+ Agregar club anterior", "Ver detalles".

**Prohibido:** `shadow-sm`/`shadow-md` en botones, gradientes de brillo, cualquier `hover:scale-105` tipo "efecto app store".

### Tarjetas (Cards)
* **Estilo Base:** Fondo `--bg-card` (claro) o `--bg-1` (oscuro), borde fino sólido 1px `--line-warm` o `--bg-1-border`, esquinas rectas o mínimas (2–3px). **Sin sombra difusa, sin `backdrop-blur`, sin glassmorphism.**
* **Card de Jugador / Club (crest):** Avatar/logo con `clip-path` pentagonal (escudo, flat top + punta abajo) — nunca círculo con iniciales tipo avatar de red social. Nombre en Oswald, metadatos (posición, ubicación, período) en mono uppercase pequeño. Métricas clave en grilla de 3 (stat + label mono debajo, ej. "32.1 / VEL"), nunca en párrafo.

### Etiquetas (Badges / Tags)
* **Métricas y posiciones (ej. "Cat. 2004-2006", "Agente Libre"):** Borde fino `--line-warm`, fondo `--bg-page`, texto `--muted-warm`, esquina recta, `text-xs` mono o sans según contexto. Nunca `rounded-full` con fondo pastel saturado (`emerald-100`/`orange-100`).
* **Estado "Verificado":** Sello tipo documento oficial — fondo sólido oscuro (`--ink` sobre claro, o `--clay-bright` sobre oscuro), texto mono uppercase pequeño ("✓ VERIFICADA"). Nunca el checkmark azul/verde de redes sociales.
* **Estado de postulación (pendiente/en revisión):** Mismo tratamiento de borde fino + texto mono, diferenciando únicamente por color de texto (`--muted-warm` pendiente, `--clay-bright` en revisión) — no por fondo pastel.

### Formularios y Búsqueda (Inputs)
* **Inputs de texto/selects:** Fondo `--bg-page` o blanco cálido, borde fino sólido `--line-warm`, esquina recta o mínima. Label SIEMPRE en mono uppercase con letter-spacing (ej. "EMAIL", "CONTRASEÑA"), nunca en sans normal de peso regular.
* **Estado activo (focus):** Borde `--clay`, sin anillo (`ring`) de colores saturados tipo Tailwind default. El foco se marca con el borde, no con un halo.
* **Selectores de opción (posición, pie hábil, etc.):** Tags rectangulares outline que se rellenan en `--clay` sólido al seleccionar — nunca píldoras verdes apiladas tipo radio-button disfrazado.

## 4. Motivos y Elementos Recurrentes

* **Escudo pentagonal (`clip-path: polygon(50% 0%, 100% 0%, 100% 68%, 50% 100%, 0% 68%, 0% 0%)`):** usar para logo de marca, avatares de usuario, crests de clubes. Es el elemento de forma que reemplaza el círculo genérico de avatar en todo el producto.
* **Cancha en líneas finas:** como fondo decorativo (hero, panel de login), siempre estática, sin rotación 3D con glow, opacidad baja, sin filtros de sombra.
* **Mapa punteado plano:** para cualquier visual de "red global", en vez de globos 3D giratorios o mapas con arcos brillantes.
* **Numeración mono en navegación (01, 02, 03...):** para sidebars y selectores de sección, en vez de iconos genéricos de librerías de íconos default.

## 5. Anti-patrones (prohibidos explícitamente)

* Glow / `drop-shadow` decorativo, glassmorphism, `backdrop-blur`.
* `rounded-full` y `rounded-xl` como default de tarjetas y botones.
* Paleta emerald + naranja saturados conviviendo sin jerarquía (el CTA es siempre `--clay`, un solo color).
* Avatares circulares con iniciales.
* Globos 3D, timelines verticales de círculos conectados, iconos de rayo ⚡ o lenguaje "mágico/instantáneo".
* Anillo de focus azul/verde saturado por default del navegador o de Tailwind sin personalizar.
* Stepper de onboarding tipo puntitos redondeados — usar "Paso X de Y" en mono + barra segmentada rectangular.

## 6. Espaciado y Composición (Layout)

* **Respiración visual:** márgenes generosos en contenedores (equivalente a `p-6`/`p-8`), pero sin compensar con sombras — el espacio en blanco y el borde fino son suficientes para separar bloques.
* **Alineación de datos:** métricas siempre en grillas simétricas o listas tipo `dl/dt/dd`, nunca en párrafo corrido — el reclutador debe poder escanear en segundos, como una planilla.
* **Consistencia entre pantallas:** cualquier flujo multi-paso (login → registro → onboarding) debe mantener el mismo layout base (split oscuro/claro o full-width con dossier-cards) de principio a fin. No alternar sistemas de diseño entre pasos de un mismo flujo.
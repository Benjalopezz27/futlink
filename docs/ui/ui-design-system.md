# Sistema de Diseño y Decisiones de UI (UI Guidelines)

Este documento centraliza las decisiones de diseño, la paleta de colores y la biblioteca de componentes para asegurar consistencia visual en todo el desarrollo frontend (React + Tailwind CSS).

## 1. Identidad Visual y Concepto
* **Concepto:** "Rendimiento y Dinamismo".
* **Vibe:** Fresco, competitivo, profesional y analítico. Se aleja del estilo corporativo tradicional (LinkedIn) y del estilo tecnológico/IA, acercándose a aplicaciones de rendimiento deportivo. El diseño debe enmarcar el talento, sin competir visualmente con las fotos y videos de los jugadores.
* **Tipografía:** Familia *Sans-serif* moderna, limpia y altamente legible para interfaces ricas en datos. (Recomendación: `Inter`, `Roboto` o `Poppins`).

## 2. Paleta de Colores (Tailwind CSS)

| Rol | Nombre | Clase Tailwind | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Primario** | Verde Esmeralda | `bg-emerald-700` | `#047857` | Navbar, encabezados, íconos de sección y marcas de confianza. |
| **Acento** | Naranja Eléctrico | `bg-orange-500` | `#F97316` | CTAs principales, botones de "Postularse" o "Match", notificaciones de estado. |
| **Fondo Base** | Blanco Puro | `bg-white` | `#FFFFFF` | Fondos de tarjetas, modales, formularios y áreas de contenido denso. |
| **Fondo Sec.** | Gris Hielo | `bg-slate-50` | `#F8FAFC` | Fondo del `body` general para generar contraste con las tarjetas blancas. |
| **Texto Princ.** | Gris Asfalto | `text-slate-700` | `#334155` | Párrafos, descripciones y contenido general (garantiza legibilidad sin fatiga visual). |
| **Texto Sec.** | Gris Claro | `text-slate-500` | `#64748B` | Labels de formularios, placeholders, fechas y textos de menor jerarquía. |
| **Oscuro** | Slate Profundo | `bg-slate-900` | `#0F172A` | Footer, tooltips y elementos estructurales de máximo contraste. |

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
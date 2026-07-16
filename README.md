# FutLink ⚽

FutLink es una plataforma web orientada al rendimiento y dinamismo deportivo, diseñada para conectar a **Jugadores** de fútbol con **Reclutadores** (clubes y universidades). Sirve como un currículum deportivo digital y portafolio interactivo para los futbolistas, y como una herramienta de scouting y gestión de talento avanzada para los reclutadores.

---

## 📌 Índice
1. [Contexto y Propuesta de Valor](#1-contexto-y-propuesta-de-valor)
2. [Arquitectura de Software](#2-arquitectura-de-software)
3. [Stack Tecnológico](#3-stack-tecnológico)
4. [Infraestructura y Despliegue](#4-infraestructura-y-despliegue)
5. [Requerimientos Funcionales (FR)](#5-requerimientos-funcionales-fr)
6. [Sistema de Diseño (UI Guidelines)](#6-sistema-de-diseño-ui-guidelines)
7. [Mapa de Pantallas (Flujos de Usuario)](#7-mapa-de-pantallas-flujos-de-usuario)

---

## 1. Contexto y Propuesta de Valor
El fútbol amateur y de formación carece de una plataforma centralizada y especializada que facilite el descubrimiento de talento sin los sesgos del reclutamiento tradicional. **FutLink** cubre esta necesidad alejándose del estilo corporativo genérico (como LinkedIn) para enfocarse en un diseño que resalta el rendimiento deportivo, las métricas biométricas y el material audiovisual de los jugadores.

---

## 2. Arquitectura de Software
El proyecto implementa un patrón de **Monolito Modular** en el backend. Toda la lógica reside en un único repositorio y se despliega como un solo servicio, pero estructurado estrictamente por dominios de negocio para facilitar la mantenibilidad y una eventual migración a microservicios si fuese necesario.

### Módulos Principales (NestJS):
*   `AuthModule`: Autenticación, registro, emisión de JWT y control de acceso basado en roles (RBAC).
*   `PlayersModule`: Perfiles biométricos, historial de trayectoria deportiva y portafolio de video.
*   `ScoutingModule`: Motor de búsqueda avanzado, filtros paramétricos y gestión de listas de seguimiento (*Watchlists*).
*   `OpportunitiesModule`: Publicación y gestión de ofertas de reclutamiento (*Drafting*) junto con el pipeline de postulaciones.

---

## 3. Stack Tecnológico
*   **Frontend**: React + Tailwind CSS.
*   **Backend**: NestJS (Node.js) REST API con TypeORM.
*   **Base de Datos**: PostgreSQL.
*   **Almacenamiento**: Cloudinary (para imágenes fijas como fotos de perfil o logos de clubes).

---

## 4. Infraestructura y Despliegue (Costo $0)
Para la fase MVP, se emplean servicios en la nube con capas gratuitas:

| Componente | Plataforma | Descripción |
| :--- | :--- | :--- |
| **Frontend** | Vercel / Netlify | Alojamiento SPA con despliegue continuo (CI/CD) desde GitHub. |
| **Backend** | Render / Koyeb | Servidor stateless (con Cold Start de ~30s tras inactividad en capa gratuita). |
| **Base de Datos** | Neon.tech / Supabase | PostgreSQL Serverless. |
| **Media Storage** | Cloudinary | CDN para imágenes. Los videos de *highlights* se incrustan desde YouTube/Vimeo. |

### Diagrama de Red e Infraestructura
```text
[ Usuario (Navegador/Dispositivo) ]
          |
          | (Peticiones HTTPS / REST API)
          v
+-----------------------------+
|        FRONTEND             |  <-- Alojado en VERCEL (Costo: $0)
|  (React + Tailwind CSS)     |      Despliegue CI/CD desde GitHub
+-----------------------------+
          |
          | (Peticiones HTTP con token JWT)
          v
+-----------------------------+
|         BACKEND             |  <-- Alojado en RENDER o KOYEB (Costo: $0)
|    (NestJS REST API)        |      Servidor Stateless
|   [Auth] [Players] [Scout]  |
+-----------------------------+
          |            |
(Queries) |            | (Uploads / URLs)
          v            v
+------------------+  +-------------------+
|  BASE DE DATOS   |  |  MEDIA STORAGE    |
|  (PostgreSQL)    |  |  (Cloudinary)     |
| Alojado en NEON  |  |  Costo: $0        |
+------------------+  +-------------------+
```

---

## 5. Requerimientos Funcionales (FR)

### Módulo de Autenticación y Seguridad (Auth)
*   **FR-1.01**: Registro distinguiendo explícitamente el rol (Jugador o Reclutador).
*   **FR-1.02**: Encriptación de contraseñas mediante bcrypt.
*   **FR-1.03**: Emisión de JSON Web Tokens (JWT) válidos para autenticación.
*   **FR-1.04**: Restricción de acceso a endpoints basada en roles (RBAC).

### Módulo del Jugador (Player Domain)
*   **FR-2.01**: Perfil biométrico y deportivo editable (altura, peso, posiciones, pierna hábil, ubicación).
*   **FR-2.02**: Cálculo dinámico de la edad en base a la fecha de nacimiento.
*   **FR-2.03**: Historial de trayectoria (clubes previos, años de inicio y fin).
*   **FR-2.04**: Vinculación de URLs de videos de *highlights* (YouTube/Vimeo).

### Módulo del Reclutador (Recruiter Domain)
*   **FR-3.01**: Perfil de institución editable (Nombre, Tipo, Ubicación).
*   **FR-3.02**: Estado de "No Verificado" por defecto hasta validación del administrador.
*   **FR-3.03**: Guardar jugadores en listas de seguimiento (*Watchlist*).

### Módulo de Búsqueda y Matchmaking (Scouting Domain)
*   **FR-4.01**: Filtros avanzados para reclutadores (posición, rango de edad, altura mínima, pierna hábil y ubicación).
*   **FR-4.02**: Resultados de búsqueda paginados para optimizar el frontend.
*   **FR-4.03**: Vista completa de perfil público del jugador desde la búsqueda.

### Módulo de Oportunidades y Postulaciones (Opportunities Domain)
*   **FR-5.01**: Creación y administración (crear, editar, pausar, eliminar) de ofertas de reclutamiento (*Drafting*).
*   **FR-5.02**: Postulación a oferta activa con un solo clic para jugadores.
*   **FR-5.03**: Restricción de postulación única por jugador y oferta.
*   **FR-5.04**: Tablero Kanban para que reclutadores gestionen estados de postulaciones (Pendiente, En Revisión, Contactado, Descartado).

---

## 6. Sistema de Diseño (UI Guidelines)
El diseño busca transmitir **"Rendimiento y Dinamismo"** mediante interfaces limpias que resalten el contenido multimedia sin competir visualmente con él.

*   **Tipografía**: Sans-serif moderna (`Inter`, `Roboto` o `Poppins`).

### Paleta de Colores

| Rol | Nombre | Clase Tailwind | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Primario** | Verde Esmeralda | `bg-emerald-700` | `#047857` | Navbar, encabezados, íconos de sección. |
| **Acento** | Naranja Eléctrico | `bg-orange-500` | `#F97316` | CTAs principales (Postularse, Match, Notificaciones). |
| **Fondo Base** | Blanco Puro | `bg-white` | `#FFFFFF` | Tarjetas, modales, formularios. |
| **Fondo Sec.** | Gris Hielo | `bg-slate-50` | `#F8FAFC` | Fondo general de la aplicación (`body`). |
| **Texto Princ.** | Gris Asfalto | `text-slate-700` | `#334155` | Cuerpo de texto para alta legibilidad. |
| **Texto Sec.** | Gris Claro | `text-slate-500` | `#64748B` | Labels, placeholders, metadatos. |
| **Oscuro** | Slate Profundo | `bg-slate-900` | `#0F172A` | Footer, tooltips y elementos de contraste máximo. |

### Componentes Base
*   **Botones**:
    *   *Primarios*: `bg-orange-500 text-white hover:bg-orange-600 rounded-md` (ej. "Postularme").
    *   *Secundarios*: `bg-emerald-700 text-white hover:bg-emerald-800` (ej. "Buscar", "Iniciar Sesión").
    *   *Outline*: Borde sutil, fondo transparente (ej. "Cancelar").
*   **Tarjetas**: Fondo blanco, bordes redondeados (`rounded-xl`), sombra suave (`shadow-sm`, escala en hover). Las de jugadores priorizan una sección superior 16:9 para foto/video y grilla con datos biométricos.
*   **Badges**:
    *   *Métricas/Posición*: `bg-emerald-100 text-emerald-800 rounded-full text-xs`.
    *   *Estados*: Gris para Pendiente, Naranja para En Revisión/Destacado.

---

## 7. Mapa de Pantallas (Flujos de Usuario)

### A. Flujo Público y Autenticación
1.  **Landing Page**: Presentación de propuesta de valor y CTAs de registro diferenciados.
2.  **Login**: Formulario de credenciales.
3.  **Registro (Paso 1 - Rol)**: Elección excluyente entre Jugador o Reclutador.
4.  **Registro (Paso 2 - Datos)**: Formulario dinámico según el rol seleccionado.

### B. Flujo del Jugador
1.  **Dashboard / Feed de Oportunidades**: Muro con ofertas de reclutamiento activas y recomendadas.
2.  **Mi Perfil (Edición)**: Gestión de datos biométricos, trayectoria y highlights (videos de YouTube/Vimeo).
3.  **Detalle de Oportunidad**: Requisitos del club/universidad y CTA de postulación.
4.  **Mis Postulaciones**: Seguimiento del estado de las postulaciones enviadas.

### C. Flujo del Reclutador
1.  **Dashboard Institucional**: Estadísticas de ofertas y postulaciones activas.
2.  **Buscador Avanzado**: Filtros deportivos (edad, posición, etc.) y grilla de resultados.
3.  **Perfil Público del Jugador**: Visualización de video, métricas clave, y opciones de watchlist y contacto.
4.  **Gestor de Oportunidades (Drafting)**: Crear y editar búsquedas activas.
5.  **Pipeline de Candidatos**: Tablero Kanban interactivo para gestionar las postulaciones.

### D. Pantallas Globales
1.  **Menú de Navegación (Navbar / Sidebar)**: Renderizado condicional de rutas según rol.
2.  **Configuración**: Cambio de contraseña y opciones de cuenta.

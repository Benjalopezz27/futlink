# Mapa de Pantallas y Wireframes (UI/UX)

Este documento detalla la estructura de pantallas necesarias para el desarrollo del MVP en React, divididas por el flujo de interacción de cada tipo de usuario. El diseño se basa en la paleta visual "Rendimiento y Dinamismo" (Verde Esmeralda como color principal, Naranja Eléctrico para los llamados a la acción y Gris Asfalto para textos).

## 1. Flujo Público y Autenticación (Onboarding)
Pantallas iniciales enfocadas en la conversión y claridad de la propuesta de valor.

* **Landing Page (Inicio):** * *Objetivo:* Explicar qué es la plataforma.
  * *Elementos clave:* Hero section con mensaje central, sección de beneficios para jugadores, sección para reclutadores, y llamadas a la acción (CTAs) claros ("Soy Jugador" / "Soy Reclutador").
* **Pantalla de Inicio de Sesión (Login):** * *Objetivo:* Acceso para usuarios recurrentes.
  * *Elementos clave:* Formulario de Email/Contraseña y enlace de recuperación.
* **Pantalla de Registro - Paso 1 (Rol):** * *Objetivo:* Bifurcar la experiencia del usuario.
  * *Elementos clave:* Selección visual obligatoria entre el rol de Jugador o Reclutador.
* **Pantalla de Registro - Paso 2 (Datos Básicos):** * *Objetivo:* Creación de la cuenta.
  * *Elementos clave:* Formulario dinámico según el rol elegido en el Paso 1.

## 2. Flujo del Jugador (La Oferta)
Interfaz orientada a funcionar como un currículum deportivo y un descubridor de oportunidades.

* **Dashboard / Feed de Oportunidades:**
  * *Objetivo:* Pantalla principal post-login.
  * *Elementos clave:* Muro o *feed* con las búsquedas activas de instituciones que coincidan con el perfil del jugador. Tarjetas con botón rápido de "Postularse".
* **Mi Perfil (Vista de Edición):**
  * *Objetivo:* Gestión del portafolio personal.
  * *Elementos clave:* Pestañas modulares para: Datos Biométricos/Tácticos, Trayectoria (Clubes previos) y Galería de Highlights (iframes de YouTube/Vimeo).
* **Vista Detalle de la Oportunidad:**
  * *Objetivo:* Información profunda antes de aplicar.
  * *Elementos clave:* Requisitos excluyentes, descripción de la beca/contrato y botón destacado (naranja eléctrico) para enviar la postulación.
* **Mis Postulaciones:**
  * *Objetivo:* Seguimiento del pipeline personal.
  * *Elementos clave:* Lista de estado de las aplicaciones (Pendiente, En revisión, Contactado).

## 3. Flujo del Reclutador (La Demanda)
Herramienta de trabajo corporativa, analítica y orientada a la gestión de datos masivos.

* **Dashboard Institucional (Resumen):**
  * *Objetivo:* Panel de control y métricas rápidas.
  * *Elementos clave:* Estadísticas de uso (ej. "3 ofertas activas", "12 nuevas postulaciones") y accesos directos de gestión.
* **Buscador Avanzado (Core Feature):**
  * *Objetivo:* Motor de filtros paramétricos.
  * *Elementos clave:* Panel lateral con *sliders* (rango de edad, altura, peso) y *dropdowns* (posición, pie hábil). Grilla central con tarjetas de resultados (fotos y métricas clave de los jugadores).
* **Perfil Público del Jugador:**
  * *Objetivo:* Visualización detallada de un candidato.
  * *Elementos clave:* Reproductor de video destacado, gráfico de radar o barras para métricas, botón "Agregar a Favoritos (Watchlist)" y botón "Contactar".
* **Gestor de Oportunidades (Mis Búsquedas):**
  * *Objetivo:* Administración de ofertas (Drafting).
  * *Elementos clave:* Formulario de creación de búsqueda y tabla de ofertas activas/pausadas.
* **Pipeline de Candidatos (Vista Kanban):**
  * *Objetivo:* Gestión del embudo de reclutamiento.
  * *Elementos clave:* Tablero con columnas por estado (Pendientes, Evaluando, Contactados, Descartados) y funcionalidad *drag and drop* para mover las tarjetas de los jugadores.

## 4. Pantallas Globales (Transversales)
Componentes estructurales compartidos en toda la aplicación.

* **Menú de Navegación (Navbar / Sidebar):** * Renderizado condicional de enlaces dependiendo si el JWT activo pertenece a un Jugador o a un Reclutador.
* **Configuración de Cuenta:** * Gestión de credenciales, cambio de contraseña, preferencias de notificaciones y zona de peligro (eliminar cuenta).
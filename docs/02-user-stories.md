# Historias de Usuario (User Stories) y Backlog

Este documento contiene las historias de usuario organizadas por Épicas, estructuradas bajo el formato ágil estándar y con sus respectivos Criterios de Aceptación (AC) técnicos.

## Épica 1: Onboarding y Seguridad
**US-1.1: Registro de Usuario**
* **Como** usuario nuevo,
* **Quiero** registrarme indicando mi email, contraseña y si soy Jugador o Reclutador,
* **Para** poder crear mi cuenta y acceder a las funciones de la plataforma.
* *Criterios de Aceptación:*
    * El formulario de Next.js (React) debe validar el formato del email y longitud de contraseña (>8 caracteres).
    * El backend debe retornar error 409 si el email ya existe.
    * Al registrarse con éxito, el sistema genera la entidad `User` y loguea automáticamente al usuario devolviendo un JWT.

**US-1.2: Inicio de Sesión**
* **Como** usuario registrado,
* **Quiero** ingresar mis credenciales,
* **Para** acceder a mi panel de control.
* *Criterios de Aceptación:*
    * Validación de credenciales contra la BD.
    * Devolución de JWT y datos básicos del usuario.

## Épica 2: Portafolio del Jugador
**US-2.1: Carga de Datos Deportivos**
* **Como** Jugador,
* **Quiero** completar mi perfil con mi biometría (altura, peso) y datos técnicos (posiciones, pierna hábil),
* **Para** aparecer en las búsquedas de los reclutadores.
* *Criterios de Aceptación:*
    * Todos los campos obligatorios deben estar validados en el frontend y backend.
    * El endpoint `PATCH /players/profile` debe actualizar los datos en PostgreSQL.

**US-2.2: Vinculación de Highlights**
* **Como** Jugador,
* **Quiero** agregar el link de mi video de mejores jugadas de YouTube,
* **Para** demostrar mis habilidades visualmente.
* *Criterios de Aceptación:*
    * El backend debe validar mediante Regex que la URL pertenezca a YouTube o Vimeo.
    * Se debe renderizar un *iframe* incrustado en el perfil público del jugador en el frontend.

## Épica 3: Herramientas del Reclutador
**US-3.1: Motor de Búsqueda Paramétrico**
* **Como** Reclutador,
* **Quiero** buscar jugadores aplicando filtros de posición y altura,
* **Para** encontrar talento que cumpla con los requisitos físicos y tácticos de mi equipo.
* *Criterios de Aceptación:*
    * El endpoint `GET /players/search` debe aceptar *query parameters* (ej. `?position=CB&minHeight=180`).
    * La base de datos debe ejecutar la consulta de manera indexada devolviendo resultados en menos de 300ms.

**US-3.2: Gestión de Favoritos (Watchlist)**
* **Como** Reclutador,
* **Quiero** hacer clic en un ícono de "Guardar" en el perfil de un jugador,
* **Para** agregarlo a mi lista de seguimiento y revisarlo más tarde.
* *Criterios de Aceptación:*
    * Se debe crear un registro en la tabla `watchlists` relacionando el `recruiter_id` y el `player_id`.

## Épica 4: El Mercado (Matchmaking)
**US-4.1: Publicación de Oportunidades**
* **Como** Reclutador,
* **Quiero** crear una publicación indicando qué posición busco y qué tipo de compensación ofrezco (beca/sueldo),
* **Para** recibir postulaciones de jugadores interesados.
* *Criterios de Aceptación:*
    * Creación de registro en la tabla `opportunities`.
    * La oferta debe aparecer inmediatamente en el tablón público (feed) ordenado por fecha de creación descendente.

**US-4.2: Postulación de un Clic**
* **Como** Jugador,
* **Quiero** presionar el botón "Postularme" en una oferta activa,
* **Para** ser considerado por el reclutador.
* *Criterios de Aceptación:*
    * Se genera un registro en la tabla `applications` con estado inicial `PENDING`.
    * El botón en la UI debe cambiar a "Postulado" y deshabilitarse.

**US-4.3: Tablero Kanban de Gestión**
* **Como** Reclutador,
* **Quiero** visualizar las postulaciones a mis ofertas en columnas según su estado,
* **Para** organizar mi proceso de selección.
* *Criterios de Aceptación:*
    * El frontend debe implementar drag-and-drop.
    * Al mover una tarjeta, se debe disparar `PATCH /applications/:id/status` actualizando el estado en la BD.
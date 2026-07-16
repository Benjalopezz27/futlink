# Requerimientos Funcionales (FR)

Este documento detalla los requerimientos funcionales del sistema, organizados por módulos de dominio. Define qué debe hacer exactamente el sistema para satisfacer las necesidades del negocio.

## 1. Módulo de Autenticación y Seguridad (Auth)
* **FR-1.01:** El sistema debe permitir el registro de usuarios seleccionando explícitamente un rol (Jugador o Reclutador).
* **FR-1.02:** El sistema debe encriptar las contraseñas antes de almacenarlas en la base de datos (ej. bcrypt).
* **FR-1.03:** El sistema debe autenticar a los usuarios mediante credenciales (email y contraseña) y emitir un JWT (JSON Web Token) válido.
* **FR-1.04:** El sistema debe restringir el acceso a endpoints protegidos validando el JWT y el rol del usuario (RBAC - Role-Based Access Control).

## 2. Módulo del Jugador (Player Domain)
* **FR-2.01:** El sistema debe permitir al Jugador crear y editar su perfil biométrico y deportivo (altura, peso, posiciones, pierna hábil, ubicación).
* **FR-2.02:** El sistema debe calcular y mostrar dinámicamente la edad del jugador en base a su fecha de nacimiento.
* **FR-2.03:** El sistema debe permitir al Jugador agregar un historial de trayectoria (clubes previos, años de inicio y fin).
* **FR-2.04:** El sistema debe permitir al Jugador vincular URLs externas (YouTube/Vimeo) para mostrar videos de *highlights*.

## 3. Módulo del Reclutador (Recruiter Domain)
* **FR-3.01:** El sistema debe permitir al Reclutador crear y editar el perfil de la institución que representa (Nombre, Tipo de Institución, Ubicación).
* **FR-3.02:** El sistema debe asignar un estado de "No Verificado" por defecto a los nuevos reclutadores hasta que un administrador valide su identidad.
* **FR-3.03:** El sistema debe permitir al Reclutador guardar perfiles de jugadores en una lista de seguimiento (*Watchlist*).

## 4. Módulo de Búsqueda y Matchmaking (Scouting Domain)
* **FR-4.01:** El sistema debe proveer un motor de búsqueda que permita a los Reclutadores filtrar jugadores por: posición, rango de edad, altura mínima, pierna hábil y ubicación.
* **FR-4.02:** El sistema debe devolver los resultados de búsqueda paginados para optimizar el rendimiento del frontend.
* **FR-4.03:** El sistema debe permitir visualizar el perfil público completo de un jugador desde los resultados de búsqueda.

## 5. Módulo de Oportunidades y Postulaciones (Opportunities Domain)
* **FR-5.01:** El sistema debe permitir al Reclutador crear, editar, pausar y eliminar ofertas de búsqueda de talento (*Drafting*).
* **FR-5.02:** El sistema debe permitir al Jugador postularse a una oferta activa con un solo clic.
* **FR-5.03:** El sistema debe bloquear la postulación múltiple de un mismo jugador a una misma oferta.
* **FR-5.04:** El sistema debe proveer al Reclutador una vista tipo tablero (Kanban) para gestionar los estados de las postulaciones (Pendiente, En Revisión, Contactado, Descartado).
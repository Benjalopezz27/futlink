# Arquitectura de Datos y APIs — FutLink

Este documento detalla las entidades principales (Modelado de Datos) y la propuesta de Endpoints RESTful (APIs) basados en el análisis funcional del sistema **FutLink**.

---

## 1. Entidades Principales (Data Modeling)

El modelo de datos se estructura en torno a la dualidad del sistema: **Jugadores buscando Oportunidades** y **Clubes buscando Talento**, con un flujo de postulación y análisis intermedio.

### 1.1 `User` (Usuario Base)
La entidad raíz para autenticación de todos los usuarios en la plataforma.

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | `UUID` | Identificador único |
| `email` | `String` | Correo electrónico único |
| `password_hash` | `String` | Hash de la contraseña (`bcryptjs`) |
| `role` | `Enum` | `player` \| `recruiter` |
| `is_verified` | `Boolean` | Verificación de email / KYC |
| `created_at` | `Timestamp` | Fecha de registro |
| `updated_at` | `Timestamp` | Última actualización |

---

### 1.2 `PlayerProfile` (Perfil del Jugador)
Se asocia 1:1 con `User` cuando `role = 'player'`. Contiene el **Legajo Deportivo**.

#### Campos Principales
- **Datos Personales**: `first_name`, `last_name`, `birth_date`, `nationality`, `location` (Ciudad, País).
- **Datos Biométricos**: `height` (cm), `weight` (kg), `foot` (`right` \| `left` \| `both`), `biotype` (`Longilíneo` \| `Robusto` \| `Ágil`).
- **Datos Deportivos**: `primary_position`, `specific_role`, `secondary_role`, `contract_status` (`Agente Libre` \| `Amateur` \| etc.), `current_club`.
- **Datos de Rendimiento (Radar 0-100)**: `attr_speed`, `attr_stamina`, `attr_finishing`, `attr_strength`, `attr_passing`, `attr_defense`.
- **Estadísticas de Juego**: `minutes_played`, `matches_played`, `goals`, `assists`, `yellow_cards`, `red_cards`.
- **Académico & KYC**: `gpa`, `graduation_year`, `federation_id`, `comet_id`.

#### Relaciones (1:N)
- **`VideoHighlight`**: Videos subidos por el jugador (YouTube / Vimeo).
- **`ClubHistory`**: Historial de trayectoria y clubes previos.
- **`ValidationEndorsement`**: Atributos avalados por terceros o entrenadores.

---

### 1.3 `Institution` (Club / Academia)
El ente que publica vacantes. Un Reclutador (`User` con `role = 'recruiter'`) pertenece a una institución.

- **Datos Institucionales**: `id`, `name`, `type` (`Club` \| `Universidad` \| `Agencia`), `location`, `division_league`, `founding_year`, `website`, `logo_url`.
- **Infraestructura**: `surface` (Césped natural, sintético), `dimensions` (ej. 105x68m), `facility_name`.
- **Táctica & ADN**: `tactical_formation` (ej. `433`, `442`), `philosophy_text`.
- **Tags & Filtros**: `categories` (`Primera`, `Reserva`, `Sub-20`...), `modalities` (`Fútbol Masculino`, `Femenino`).
- **KYC & Sello**: `is_verified_futlink` (Sello oficial), `federation_affiliation`.

#### Relaciones (1:N)
- **`ExportedPlayer`**: Casos de éxito / transferencias (`name`, `destination_club`, `year`).
- **`Honor`**: Palmarés y títulos institucionales.
- **`StaffMember`**: Cuerpo técnico e invitados de scouting.
- **`Opportunity`**: Convocatorias y búsquedas activas.

---

### 1.4 `Opportunity` (Vacante / Convocatoria)
La necesidad activa de un club. Funciona como la publicación central del mercado.

- **Campos Base**: `id`, `ref_number` (ej. `FA-2026-00458`), `institution_id` (FK), `created_by` (FK Recruiter), `status` (`active` \| `paused` \| `closed`), `close_date`.
- **Tipo de Vacante (`kind`)**:
  - **`specific_search` (Búsqueda Específica)**:
    - `target_position`, `category_min_year`, `category_max_year`, `total_spots`.
    - **Filtros duros**: `req_foot`, `req_biotype`, `req_min_height`, `req_nationalities`.
    - **Oferta**: `contract_type` (Contrato / Beca), `duration`, `compensation`, `start_date`, `description`.
  - **`open_trial` (Prueba / Visoría Abierta)**:
    - `event_datetime_location` (ej. *Sábado 2 Ago · Predio Sur*).
    - `max_attendees_cap` (Cupo máximo).

---

### 1.5 `Application` (Postulación del Jugador)
El registro de que un jugador se anotó a una oportunidad (Eje del Pipeline Kanban).

- **Relación M:N**: `player_id` (FK), `opportunity_id` (FK).
- **Estado del Embudo (`pipeline_status`)**: `pending` \| `review` \| `contacted` \| `rejected`.
- **Datos Transaccionales**:
  - `match_percentage`: Calculado y congelado al momento de postular.
  - `player_message`: Mensaje opcional del jugador.
  - `attached_highlight_id`: Highlight seleccionado.
- **Metadatos de Reclutamiento**:
  - `recruiter_private_note`: Bitácora del scout (invisible para el jugador).
  - `recruiter_process_status`: `observation` \| `trial_scheduled` \| `negotiation`.

---

### 1.6 `AnalysisBoard` (Mesa de Análisis)
Herramienta de trabajo privada del reclutador para comparar perfiles H2H.

- **Campos**: `id`, `institution_id` (FK), `created_by` (FK Recruiter), `title`, `private_notes`.
- **Relación M:N (`AnalysisBoard_Player`)**: Conecta la mesa con hasta 4 `PlayerProfile` IDs (incluye opción de *Jugadores Fantasma* con `isOwn = true` para benchmarks).

---

### 1.7 Entidades de Apoyo
- **`MessageThread` & `Message`**: Gestión de chat privado vinculado a una `Application`.
- **`SocialPost`**: Contenido para el Feed público generado por jugadores o clubes.

---

## 2. Propuesta de Endpoints (APIs RESTful)

> [!NOTE]
> Todos los endpoints protegidos requieren el header `Authorization: Bearer <token>`.

### 2.1 Autenticación y Onboarding (`/api/auth`)

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Autenticación de usuario. Retorna JWT. |
| `POST` | `/api/auth/register` | Registro inicial de cuenta (`User`). |
| `PUT` | `/api/auth/onboarding/player` | Completa los 3 pasos de onboarding de `PlayerProfile`. |
| `PUT` | `/api/auth/onboarding/recruiter` | Inicializa `Institution` y `RecruiterProfile`. |

---

### 2.2 Flujo del Jugador (`Player Dashboard`)

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/player/feed/opportunities` | Motor del Feed de vacantes con `match_percentage` dinámico. (Filtros: `?cityOnly=true&thisWeek=true&myPosition=true`). |
| `GET` | `/api/player/opportunities/{id}` | Detalle completo de una convocatoria. |
| `POST` | `/api/player/opportunities/{id}/apply` | Aplica a una convocatoria (`player_message`, `attached_highlight_id`). |
| `GET` | `/api/player/applications` | Lista "Mis Postulaciones" con estado en el embudo. |
| `GET` | `/api/feed/social-posts` | Obtiene publicaciones del Feed público. |
| `POST` | `/api/feed/social-posts` | Publica una actualización en el Feed. |

---

### 2.3 Flujo del Reclutador (`Dashboard & Pipeline`)

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/recruiter/dashboard/summary` | Métricas superiores (Búsquedas Activas, Próximas Pruebas, Postulaciones). |
| `GET` | `/api/recruiter/opportunities` | Lista las vacantes propias de la institución. |
| `POST` | `/api/recruiter/opportunities` | Publica una nueva búsqueda o prueba abierta. |
| `PUT` | `/api/recruiter/opportunities/{id}` | Edita o pausa la búsqueda. |
| `GET` | `/api/recruiter/opportunities/{id}/candidates` | Devuelve candidatos postulados ordenados por Match % o fecha. |
| `PUT` | `/api/recruiter/applications/{app_id}/pipeline-status` | Mueve la tarjeta del jugador en el Kanban (`pending` → `review`). |
| `PUT` | `/api/recruiter/applications/{app_id}/private-note` | Actualiza la Bitácora Privada del Scout. |
| `PUT` | `/api/recruiter/applications/{app_id}/process-status` | Cambia la etiqueta interna (ej. `[ PRUEBA AGENDADA ]`). |

---

### 2.4 Inteligencia Deportiva & Herramientas Tácticas

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/api/recruiter/search/players` | Buscador paramétrico avanzado por posición, biometría y edad. |
| `GET` | `/api/recruiter/analysis-boards` | Historial de Mesas de Análisis guardadas. |
| `POST` | `/api/recruiter/analysis-boards` | Crea una nueva Mesa de Análisis (`title`, `player_ids`). |
| `GET` | `/api/recruiter/analysis-boards/{id}` | Carga la comparativa H2H con datos y radares tácticos. |
| `PUT` | `/api/recruiter/analysis-boards/{id}` | Actualiza jugadores seleccionados o notas de conclusión. |
| `GET` | `/api/recruiter/analysis-boards/{id}/export-pdf` | Genera y descarga el Dossier Comparativo en PDF. |

---

### 2.5 Configuración Institucional (`Perfil Club`)

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/institution/{id}` | Ficha pública del club (ADN, Infraestructura, Palmarés). |
| `PUT` | `/api/institution/{id}/profile` | Actualiza superficie, dimensiones y formación táctica. |
| `POST` | `/api/institution/{id}/honors` | Agrega un logro a la línea de tiempo del club. |
| `DELETE` | `/api/institution/honors/{honor_id}` | Elimina un logro del palmarés. |
| `POST` | `/api/institution/{id}/exports` | Carga un caso de éxito (Jugador transferido). |
| `POST` | `/api/institution/{id}/staff/invite` | Invita a un miembro al equipo de reclutamiento. |

---

### 2.6 Mensajería Interna

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/messages/threads` | Conversaciones activas en el inbox. |
| `GET` | `/api/messages/threads/{thread_id}/messages` | Historial de mensajes de un hilo. |
| `POST` | `/api/messages/threads/{thread_id}/messages` | Envía mensaje de texto o adjunta `highlight_id`. |
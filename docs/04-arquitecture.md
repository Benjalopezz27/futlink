# Arquitectura de Software e Infraestructura

## 1. Patrón de Arquitectura: Monolito Modular
El proyecto está diseñado bajo el patrón de **Monolito Modular**. Toda la lógica del backend reside en un único repositorio y se despliega como un solo servicio, pero el código está estrictamente dividido en dominios de negocio (módulos).

Esta decisión reduce la complejidad operativa inicial y el costo de infraestructura a $0, manteniendo la capacidad de escalar. Si en el futuro un dominio específico (ej. el motor de búsqueda) requiere más recursos, su separación lógica permite extraerlo fácilmente hacia una arquitectura de microservicios.

**Módulos principales (Backend - NestJS):**
*   `AuthModule`: Gestión de JWT, registro, inicio de sesión y validación de roles (RBAC).
*   `PlayersModule`: Gestión de perfiles biométricos, trayectoria y portafolio audiovisual.
*   `ScoutingModule`: Motor de búsqueda, filtros paramétricos y gestión de *watchlists*.
*   `OpportunitiesModule`: Creación de ofertas de clubes/universidades y flujo de postulaciones.

## 2. Stack Tecnológico
*   **Frontend:** Next.js (React) + Tailwind CSS. Aplicación moderna con renderizado en el servidor (SSR) y generación estática (SSG) utilizando el App Router para optimizar la velocidad y SEO.
*   **Backend:** NestJS (Node.js). Framework estructurado que impone buenas prácticas (Inyección de Dependencias, Decoradores, separación de responsabilidades).
*   **Base de Datos:** PostgreSQL gestionada mediante TypeORM. Ideal para asegurar la integridad referencial y ejecutar consultas complejas de filtros deportivos.

## 3. Infraestructura Cloud (Capa Gratuita / Serverless)
Para mantener un costo operativo de $0 durante el desarrollo y la fase MVP, se utilizan servicios PaaS (Platform as a Service) y Serverless:

*   **Hosting Frontend (Next.js): Vercel**
    *   Plataforma optimizada para aplicaciones Next.js y Serverless.
    *   Despliegue continuo (CI/CD) automático desde el repositorio de GitHub.
    *   Distribución global mediante CDN.
*   **Hosting Backend (NestJS): Render / Koyeb**
    *   Alojamiento del servicio web de Node.js.
    *   *Trade-off conocido:* Al estar en capa gratuita, el servicio entra en reposo tras inactividad (Cold Start de ~30s en la primera petición), aceptable para la fase MVP.
*   **Hosting Base de Datos (PostgreSQL): Neon.tech / Supabase**
    *   PostgreSQL Serverless. Escala automáticamente y provee cadenas de conexión directas para integrarse con TypeORM.
*   **Almacenamiento de Archivos (Media): Cloudinary**
    *   Servicio externo para el alojamiento de imágenes de perfil o escudos de clubes. El backend procesa el archivo, lo envía a Cloudinary y almacena únicamente la URL resultante en PostgreSQL.
    *   *Nota:* Los videos de highlights no se alojan en la plataforma; se referencian mediante URLs externas (YouTube, Vimeo).

## 4. Diagrama de Red e Infraestructura

```text
[ Usuario (Navegador/Dispositivo) ]
          |
          | (Peticiones HTTPS / REST API)
          v
+-----------------------------+
|        FRONTEND             |  <-- Alojado en VERCEL (Costo: $0)
|  (Next.js + Tailwind CSS)   |      Despliegue CI/CD desde GitHub
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
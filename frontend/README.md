# FutLink Frontend (Next.js)

Este es el frontend de **FutLink**, migrado de Vite a **Next.js 15** utilizando el **App Router** y **Tailwind CSS v4**.

## Tecnologías Utilizadas

- **Core**: Next.js 15 (React 19)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 + Radix UI / Shadcn
- **Linter**: Oxlint para análisis estático ultrarrápido

## Comenzando

### Requisitos Previos

- Node.js 18.18.0 o superior (Recomendado v20.19.0+ o v22.12.0+).

### Instalación

Instala las dependencias del proyecto:

```bash
npm install
```

### Servidor de Desarrollo

Inicia el servidor de desarrollo local:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Construcción para Producción

Para compilar la aplicación para producción:

```bash
npm run build
```

Este comando genera una compilación optimizada en la carpeta `.next`.

### Ejecutar en Producción

Para iniciar el servidor Next.js en modo producción:

```bash
npm run start
```

### Calidad de Código (Linting)

Para ejecutar el linter ultrarrápido Oxlint:

```bash
npm run lint
```

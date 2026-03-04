# 🚀 Portafolio Personal — Alejandro Cabrera

Portafolio personal de **Backend Developer** construido con Astro, React y Tailwind CSS. Diseño minimalista con tema oscuro y acento verde, enfocado en mostrar proyectos y tecnologías de forma clara y profesional.

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)

## ✨ Características

- **Diseño minimalista** — tema oscuro con acento verde `#00ff87`
- **100% responsive** — adaptado para mobile, tablet y desktop
- **Proyectos dinámicos** — filtros interactivos por categoría (API, DB, DevOps, Full Stack)
- **Tech stack por proyecto** — cada proyecto muestra sus tecnologías usadas
- **Stats automáticos** — número de proyectos y tecnologías calculados dinámicamente
- **Formulario de contacto** — integrado con Resend para envío real de emails
- **Descarga de CV** — en español e inglés
- **Performance** — construido con Astro para máximo rendimiento y mínimo JS

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| [Astro](https://astro.build) | Framework principal (SSG) |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos utilitarios |
| [React](https://react.dev) | Componentes interactivos (islands) |
| [Resend](https://resend.com) | Envío de emails desde el formulario |

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   ├── favicon.svg
│   ├── CV-Alejandro-Cabrera-ES.pdf
│   └── CV-Alejandro-Cabrera-EN.pdf
├── src/
│   ├── content/
│   │   ├── config.ts               # Esquema de proyectos (Zod)
│   │   └── projects/               # Proyectos en Markdown
│   │       ├── auth-service.md
│   │       └── ...
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── ProjectsFilter.tsx      # Filtros interactivos (React)
│   │   ├── About.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── api/
│   │       └── contact.ts          # Endpoint de contacto (Resend)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚀 Instalación y uso

### Requisitos
- Node.js v18 o superior
- npm v9 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/acabreracon/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

Obtén tu API key en [resend.com](https://resend.com).

### Comandos disponibles

| Comando | Acción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build de producción |

## 📝 Agregar un proyecto

Crea un nuevo archivo `.md` en `src/content/projects/`:

```markdown
---
title: "Nombre del proyecto"
description: "Descripción breve del proyecto."
type: "REST API"
category: "api"          # api | db | devops | fullstack
techs: ["Node.js", "PostgreSQL", "Docker"]
github: "https://github.com/acabreracon/proyecto"
demo: "https://demo.com"  # opcional
featured: true
order: 4                  # orden en el grid
---
```

Los stats del Hero se actualizan automáticamente al agregar proyectos.

## 🌐 Deploy

El proyecto está desplegado en **Vercel**.

Para desplegar tu propia versión:

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Agrega la variable de entorno `RESEND_API_KEY`
3. Vercel detecta Astro automáticamente y despliega

Cada `git push` a `main` genera un deploy automático.

## 📄 Licencia

MIT — siéntete libre de usar este proyecto como base para tu propio portafolio.
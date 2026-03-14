---
title: "Documentación: Portafolio Web3 & IA (Tech Minimalista)"
tags:
  - portafolio
  - react
  - typescript
  - web3
  - dark-mode
  - diseño
  - ui-ux
date: 2026-03-14
---

# 🚀 Arquitectura y Cambios: Portafolio Tech Minimalista

Este documento resume la estructuración, rediseño y consolidación del portafolio personal estilo "Tech Minimalista" con Dark Mode puro (fondos `zinc-950`).

## 🛠️ Stack Tecnológico Utilizado
El ecosistema completo se basó en herramientas de alto rendimiento enfocadas en SPA (Single Page Applications):
- **React 18 + Vite**: Setup base ultrarrápido con *Hot Module Replacement* y compilación con ESBuild.
- **TypeScript**: Tipado estático estricto (Interfaces, React Events) para escalabilidad de producción.
- **Tailwind CSS v3**: Motor de estilización visual (Colores, Layout, Flexbox, Gaps, Filtros y Blend Modes).
- **Framer Motion**: Librería imperativa de animación para detectar intersecciones de scroll (`whileInView`) y físicas complejas como flotación cíclica.
- **Lucide React**: Iconografía de peso pluma optimizada.

---

## 🏗️ Separación Crítica de Datos (Arquitectura)
Para asegurar el fácil mantenimiento del contenido sin tocar la UI compleja, la data está aislada.
**Ubicación:** `src/data/config.ts`
- Implementamos interfaces estrictas `BlogPost` y `Experience` exportadas globalmente.
- Los arrays `blogPosts` y `experienceData` nutren dinámicamente (`.map()`) los módulos de `HeroSection`, `AboutSection` y `BlogNewsletterSection`.
- *Uso*: Modificando los strings allí adentro se refleja en el front-end con formatos vivos e interacciones táctiles intactas.

---

## ✨ Features Visuales Implementados

### 1. HeroSection Sensorial
- **Avatar Dinámico**: Fotografía insertada de forma radial (`24x24` base), envuelta por una de-saturación parcial (`grayscale-[20%]`) inicial e iterativa con un brillo lila/morado Web3 de `blur-2xl` debajo para profundidad.
- **Code Background (Holograma)**: Vector inyectado de `imgcode.svg` como decoración asimétrica de capa flotante. Usamos la API de `mix-blend-screen` y un `drop-shadow` púrpura para dar sensación de holograma neon (se configuró en muy baja opacidad y saturación mínima para ser un ornamento sutil de UX). Encapsulado en `<motion.div>` con animación cíclica eje Y de `8s`.
- **Typografía Central**: El apellido cuenta hoy con un gradiente de acento de saturación moderada. 

### 2. Formulario Newsletter API-Ready
- Convertido de un cascarón estático a un flujo transitorio asíncrono controlando la fase (`useState` para mail y status `idle | loading | success | error`).
- Si se ingresa una variable de Vercel en `.env.local` conectada a Zapier, Make o Formspree vía POST, el Form reaccionará en tiempo real.
- **Micro-interacciones**: Se cambia el botón al someter para impedir spam, rotando un Spinner en fase loading y mutando a una etiqueta de éxito `emerald` nativa al resolver correcto.

### 3. Redes y Componentes Locales (SVGs Propios)
- Para la capa Web3 Links, la dependencia nativa de Lucide React se intercambió sobreescribiendo en TS para soportar SVGs custom.
- Mediante arreglos exportados pudimos inyectar estilizaciones sobre un *Bento Box Layout*.

---

## ⚙️ Infraestructura de Producción (Vercel)

El repositorio se fortificó para los servidores CI/CD de **Vercel**:
1. **Analítica de Audiencias (Telemetry)**: 
   - Dependencias inyectadas: `@vercel/analytics` y `@vercel/speed-insights`.
   - Implementadas asépticamente debajo del DOM Provider general en `src/App.tsx`.
2. **Sistema de Enrutamiento Single-Page (`vercel.json`)**: 
   - Interceptamos las peticiones remotas que arrojaban `404` mediante reglas de Rewrite (Regex `(.*)` re-apuntando hacia `/index.html`), habilitando el control de DOM de React Router limpio sobre host remoto.
3. **Debug a Nivel Máquina (TS/ESLint)**: 
   - Tipificamos el catch global de `Twitch.jsx`, purgamos interfaces vacías (antipatrón de TS), e impusimos importaciones ES6 en el compilador base de Tailwind, pasando la compilación estricta con código limpio `0 Warnings, 0 Errores`.

## 📦 Runbook Local
Plantilla de uso diario:
- *Instalación:* `npm install`
- *Copiar Webhook config:* `cp .env.example .env.local`
- *Localhost:* `npm run dev`
- *Build Compilado:* `npm run build`

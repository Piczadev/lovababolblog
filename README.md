# Portafolio Web3 & IA - Yahir Rivera

Este repositorio contiene el código fuente de mi portafolio web personal, diseñado bajo una estética **Dark Mode Tech Minimalista**. El objetivo principal es ofrecer una experiencia editorial inmersiva que consolide mis artículos de blog, newsletter, y experiencia profesional en la intersección de la Inteligencia Artificial y Web3.

---

## 🛠️ Stack Tecnológico

El proyecto está construido priorizando el rendimiento, tipado estricto y micro-interacciones inmersivas:

- **[React](https://react.dev/) + [Vite](https://vitejs.dev/)**: Framework de UI y un empaquetador ultrarrápido para el ciclo de desarrollo.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático de nivel de producción garantizando escalabilidad y minimizando errores.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades para el estilizado y soporte de Dark Mode nativo.
- **[Framer Motion](https://www.framer.com/motion/)**: Motor de animaciones declarativas (gestión de scroll reveals, flotación y micro-interacciones hover).
- **[Lucide React](https://lucide.dev/)**: Iconografía SVG limpia e integrada armónicamente.

---

## 🏛️ Arquitectura de Datos (Separation of Concerns)

Para asegurar la fácil mantenibilidad del contenido, la lógica de la UI está completamente desacoplada de los datos duros mediante el componente central de configuración.

**Para actualizar entradas del Blog o Experiencia Laboral:**
1. No modifiques los componentes de UI (`HeroSection.tsx`, `AboutSection.tsx`, etc.).
2. Dirígete exclusivamente al archivo **`src/data/config.ts`**.
3. Modifica los arreglos exportables (`blogPosts` y `experienceData`). El renderizado reaccionará automáticamente a estos cambios preservando estilos y animaciones.

---

## 🚀 Configuración Local

Sigue estos pasos para correr el entorno de desarrollo localmente:

### 1. Clonar e Instalar Dependencias
Asegúrate de tener Node.js instalado. Clona el repositorio y ejecuta:
```bash
npm install
```

### 2. Configuración de Variables de Entorno (.env)
Este proyecto requiere configuración adicional para el Newsletter (Webhook).
- Copia la plantilla de variables de entorno:
```bash
cp .env.example .env.local
```
- Abre el archivo `.env.local` y añade la URL de tu API o Webhook (ej. Formspree/Make) en la variable:
  `VITE_NEWSLETTER_WEBHOOK="https://tu-endpoint-aqui.com"`

### 3. Ejecutar Servidor de Desarrollo
Levanta Vite de manera local:
```bash
npm run dev
```
El servidor debería desplegar el sitio (por defecto en `http://localhost:5173`).

---

## ⚙️ Compilación de Producción
Para generar una versión optimizada para despliegue (Netlify, Vercel, o similar):
```bash
npm run build
```
Los archivos minificados listos para hospedar se generarán en la carpeta `dist/`.

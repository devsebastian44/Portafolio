# Sebastian Zhunaula — Portafolio

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3.4%25-3178C6?style=flat&logo=typescript&logoColor=white)
![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-8BC0D0?style=flat&logo=alpinedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=flat&logo=github-actions&logoColor=white)
---

## 🧠 Descripción General

Portafolio personal premium construido con **Astro 5** como sitio completamente estático, diseñado para reflejar una estética terminal de alto rendimiento. El proyecto resuelve el desafío de presentar el perfil, habilidades, experiencia y certificaciones de un desarrollador de forma visualmente distintiva y accesible a nivel global — con soporte completo para **español** e **inglés** con paridad visual total.

El enfoque técnico prioriza cero-JS por defecto (mediante la arquitectura de islas de Astro), mejora progresiva a través de Alpine.js para componentes interactivos, y un sistema de diseño personalizado construido sobre Tailwind CSS v4. Las imágenes Open Graph dinámicas se generan en tiempo de compilación usando Satori y Resvg, garantizando vistas previas sociales enriquecidas sin necesidad de backend.

**Demo en vivo:** [devsebastian44.vercel.app](https://devsebastian44.vercel.app)

---

## ⚙️ Funcionalidades

- **Soporte multilenguaje** — Cambio fluido ES/EN con traducción a nivel de componente y paridad visual completa entre ambos idiomas.
- **Terminal UI de alta fidelidad** — Sección "Acerca de" rediseñada como ventana de terminal con controles de ventana, logo pixel-art y decoraciones de mira.
- **Esfera 3D de Habilidades** — Componente canvas interactivo que renderiza el stack tecnológico en una esfera 3D giratoria usando Chart.js.
- **Generación dinámica de OG Image** — Endpoint en tiempo de compilación (`/og.png.ts`) impulsado por Satori + Resvg para imágenes de vista previa social autogeneradas.
- **Certificaciones de Credly** — Insignias digitales reales mapeadas directamente desde Credly y renderizadas en una sección dedicada.
- **Diseño Material Premium** — Tarjetas con textura grain, bordes interiores tipo cristal, gradientes de profundidad y brillos de neón localizados por sección.
- **Cursor de neón personalizado** — Componente de cursor con estela de neón para reforzar la marca de laboratorio tecnológico/ciberseguridad.
- **Formulario de contacto funcional** — Integrado con Formspree y manejado vía AJAX — sin backend requerido.
- **Patrones de cuadrícula neo-brutalista** — Patrones SVG estilo plano de ciberseguridad usados como elementos decorativos estructurales en todas las secciones.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Astro 5 (Generación de Sitio Estático) |
| Estilos | Tailwind CSS v4 (sistema de diseño personalizado) |
| Interactividad | Alpine.js v3 + Vanilla JS |
| Lenguaje | TypeScript (endpoint OG, configuraciones) |
| Imágenes OG | Satori + @resvg/resvg-js |
| Gráficos | Chart.js v4 (Esfera de Habilidades) |
| Formulario | Formspree (AJAX) |
| Tipografía | Aldrich & Roboto Condensed (fuentes locales) |
| Despliegue | Vercel |

---

## 📦 Instalación

> **Requisitos:** Node.js ≥ 18.x y npm instalados.

```bash
# 1. Clonar el repositorio
git clone https://github.com/devsebastian44/Portafolio.git
cd Portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

---

## 🛡️ Arquitectura Segura (Local → GitHub)

Este proyecto implementa una **separación de entornos**, garantizando que el repositorio público mantenga altos estándares de limpieza, mientras que el entorno local de experimentación se conserva intacto.

- 💻 **Entorno Local**: Actúa como el *Source of Truth*. Mantiene el 100% del código, incluyendo la suite de pruebas unitarias (`tests/`) y scripts de automatización interna (`scripts/`).
- 🐙 **GitHub (Portafolio Público)**: Versión de solo lectura y sanitizada. Contiene exclusivamente el código fuente necesario para ejecutar y compilar la aplicación, junto con la documentación técnica pública.

### Flujo Automático de Publicación Segura

Para publicar una nueva actualización desde el repositorio maestro local hacia GitHub, el proyecto utiliza automatización validada mediante el script `publish_public.ps1`:

1. El script valida la calidad y limpieza del árbol Git local.
2. Genera dinámicamente un **release en una rama efímera**.
3. Ejecuta un purgado de seguridad mediante `git rm --cached`, eliminando el marco de pruebas y los scripts de automatización.
4. Inyecta los cambios limpios y fuerza un push sanitizado a GitHub.

Este enfoque previene fugas de lógica de pruebas, credenciales o configuraciones internas.

---

## ▶️ Uso

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor local en `localhost:4321` |
| `npm run build` | Compila el sitio de producción en `./dist/` |
| `npm run preview` | Vista previa del build de producción en local |

Para desplegar en **Vercel**, simplemente conecta el repositorio — Vercel detecta Astro automáticamente y configura el pipeline de compilación (`astro build`) sin configuración adicional.

---

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── Img/                      # Foto de perfil y recursos de marca
├── src/
│   ├── components/
│   │   ├── en/                   # Variantes de componentes en inglés
│   │   ├── About.astro           # Sección "Acerca de" estilo terminal
│   │   ├── Education.astro       # Trayectoria académica
│   │   ├── Experience.astro      # Línea de tiempo profesional
│   │   ├── SpecializedLab.astro  # Habilidades técnicas y sección lab
│   │   ├── Certifications.astro  # Integración de insignias Credly
│   │   ├── CustomCursor.astro    # Cursor con estela de neón
│   │   └── SkillSphere.astro     # Canvas 3D interactivo (Chart.js)
│   ├── fonts/                    # Aldrich & Roboto Condensed (locales)
│   ├── layouts/
│   │   └── Layout.astro          # Layout base con meta tags dinámicos
│   ├── pages/
│   │   ├── index.astro           # Página de inicio en español (/)
│   │   ├── en.astro              # Página de inicio en inglés (/en)
│   │   └── og.png.ts             # Endpoint de imagen OG dinámica
│   └── styles/
│       └── global.css            # Utilidades Tailwind y estética personalizada
├── docs/
│   └── STRUCTURE.md              # Documentación técnica de componentes
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Roadmap

- [ ] Agregar sección de blog/artículos con soporte MDX
- [ ] Implementar transiciones de vista (Astro View Transitions API) entre rutas ES/EN
- [ ] Toggle de tema oscuro/claro con persistencia via `prefers-color-scheme`
- [ ] Añadir casos de estudio de proyectos con páginas de detalle dedicadas
- [ ] Integrar analíticas respetuosas de privacidad (Plausible o Umami)
- [ ] Optimizar puntuación Lighthouse a 100 en todas las categorías

---

## 📄 Licencia

Este proyecto es un portafolio personal y está disponible públicamente como referencia e inspiración. Por favor, no redistribuyas ni despliegues este sitio como propio sin autorización previa y por escrito del autor.

---

## 👨‍💻 Autor

**Sebastian Zhunaula**
Desarrollador Full Stack · Arquitecto Web · Entusiasta de Ciberseguridad

[![Portafolio](https://img.shields.io/badge/Portafolio-devsebastian44.vercel.app-FF5D01?style=flat&logo=astro&logoColor=white)](https://devsebastian44.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-devsebastian44-181717?style=flat&logo=github&logoColor=white)](https://github.com/devsebastian44)

---

*Desarrollado con enfoque en rendimiento, precisión visual y estética neo-brutalista.*
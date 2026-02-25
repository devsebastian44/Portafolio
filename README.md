# Portfolio: Sebastian Zhunaula | Full Stack Architect

Minimalist and premium portfolio built with **Astro**, **Tailwind CSS**, and **Alpine.js**, featuring full multi-language support and a high-performance terminal aesthetic.

## 🚀 Key Project Structure

```text
/
├── public/                 # Static assets (Favicon, PDFs, etc.)
│   └── Img/                # Profile photo and branding images
├── src/
│   ├── components/         # UI Components (Multi-language support)
│   │   ├── en/             # English Translated Components
│   │   ├── About.astro     # High-fidelity Terminal redesign
│   │   ├── CustomCursor.astro # Neon trailing cursor
│   │   └── ...
│   ├── fonts/              # Local Fonts (Aldrich & Roboto Condensed)
│   │   ├── Aldrich-Regular.ttf
│   │   └── RobotoCondensed-Regular.ttf
│   ├── layouts/
│   │   └── Layout.astro    # Base template with dynamic meta tags
│   ├── pages/
│   │   ├── index.astro     # Spanish Landing Page (Home)
│   │   ├── en.astro        # English Landing Page (/en)
│   │   └── og.png.ts       # Dynamic OG Image Generator Endpoint
│   └── styles/
│       └── global.css      # Custom Tailwind utilities & animations
├── package.json            # Dependencies (Tailwind v4, Alpine.js, Satori)
└── astro.config.mjs        # Astro configuration
```

## 🛠️ Main Tech Stack

*   **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Interactivity**: [Alpine.js](https://alpinejs.dev/) & [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Custom Cursor)
*   **Typography**: Aldrich & Roboto Condensed (Modern high-tech pairing)
*   **Backend**: [Formspree](https://formspree.io/) (Functional Contact Form)
*   **OG Generation**: [Satori](https://github.com/vercel/satori) & [Resvg](https://github.com/yisibl/resvg-js) (Dynamic Social Images)

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally before deploying |

## ✨ Features

- **High-Fidelity Terminal**: Redesigned About section with window controls, pixel-art logo, and crosshair lines.
- **Strategic Localized Glows**: Section-bound background glows (Hero, About, Project, Lab, CTA, Contact, Footer) for extra depth.
- **Cyber-Neon Cursor**: Custom trailing cursor with neon green aesthetics (`#00ffa3`).
- **Multi-language**: Seamless switching between Spanish and English with full visual parity.
- **3D Skill Sphere**: Interactive high-performance canvas component displaying tech stacks.
- **Functional Contact Form**: Integrated with Formspree and handled via AJAX for a smooth user experience.
- **Dynamic OG Images**: Programmatically generated preview images (`/og.png`) using Satori.
- **Refined Branding**: Custom `favicon.png` logo and personalized bio with professional photography.

## 📚 Documentation

For a detailed breakdown of the technical components and file responsibilities, see:
- [**Technical Structure Guide**](docs/STRUCTURE.md): Deep dive into `About.astro`, `SkillSphere.astro`, and common design patterns.

##  Genie Commands
...

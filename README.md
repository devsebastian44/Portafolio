# Portfolio: Sebastian Zhunaula | Full Stack Architect

Minimalist and premium portfolio built with **Astro**, **Tailwind CSS**, and **Alpine.js**, featuring full multi-language support, a high-performance terminal aesthetic, and premium visual materials.

## 🚀 Key Project Structure

```text
/
├── public/                 # Static assets (Favicon, PDFs, etc.)
│   └── Img/                # Profile photo and branding images
├── src/
│   ├── components/         # UI Components (Multi-language support)
│   │   ├── en/             # English Translated Components
│   │   ├── About.astro     # High-fidelity Terminal redesign
│   │   ├── Education.astro # Academic trajectory section [NEW]
│   │   ├── Experience.astro # Professional trajectory section
│   │   ├── SpecializedLab.astro # Specialized skills & technical lab
│   │   ├── Certifications.astro # Credly Certifications Section
│   │   ├── CustomCursor.astro # Neon trailing cursor
│   │   └── ...
│   ├── fonts/              # Local Fonts (Aldrich & Roboto Condensed)
│   ├── layouts/
│   │   └── Layout.astro    # Base template with dynamic meta tags
│   ├── pages/
│   │   ├── index.astro     # Spanish Landing Page (Home)
│   │   ├── en.astro        # English Landing Page (/en)
│   │   └── og.png.ts       # Dynamic OG Image Generator Endpoint
│   └── styles/
│       └── global.css      # Custom Tailwind utilities & premium aesthetics
├── package.json            # Dependencies (Tailwind v4, Astro 5, Alpine.js)
└── astro.config.mjs        # Astro configuration
```

## 🛠️ Main Tech Stack

*   **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Custom Design System)
*   **Interactivity**: [Alpine.js](https://alpinejs.dev/) & [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*   **Typography**: Aldrich & Roboto Condensed (Modern high-tech pairing)
*   **Backend**: [Formspree](https://formspree.io/) (Functional Contact Form)
*   **OG Generation**: [Satori](https://github.com/vercel/satori) & [Resvg](https://github.com/yisibl/resvg-js)

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally before deploying |

## ✨ Features

- **Premium Material Design**: Cards feature subtle grain texture, depth-inducing gradients, and inner borders for a glass-like feel.
- **Cybersecurity Blueprint**: Strategic technical grid patterns in backgrounds and navigation.
- **Iconic Decorative System**: Thematic SVG icons (Education, Bio, Lab, Contact) with refined visibility (0.05 base / 0.12 hover).
- **High-Fidelity Terminal**: Redesigned About section with window controls, pixel-art logo, and crosshair lines.
- **Localized Glows**: Section-bound background glows (Hero, About, Project, Certifications, Contact) for extra depth.
- **Dynamic Certifications**: Integration of real digital badges/certifications directly mapped from Credly.
- **Multi-language**: Seamless switching between Spanish and English with full visual parity.
- **3D Skill Sphere**: Interactive high-performance canvas component displaying tech stacks.
- **Functional Contact Form**: Integrated with Formspree and handled via AJAX.

## 📚 Documentation

For a detailed breakdown of the technical components and file responsibilities, see:
- [**Technical Structure Guide**](docs/STRUCTURE.md): Deep dive into `About.astro`, `SkillSphere.astro`, and common design patterns.

---
*Developed with focus on performance, security, and neo-brutalist aesthetics.*

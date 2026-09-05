# ⚡ Rishabh Sharma A — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.org/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-000000?style=flat-square&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![License](https://img.shields.io/badge/License-MIT-green.style=flat-square)](#license)

> A modern, ultra-fast, data-driven developer portfolio built with React 19, TypeScript, Vite, and scoped CSS Modules. Designed with dark-mode-first aesthetic, fluid view transitions, and accessible micro-interactions.

---

## ✨ Features

- **🌓 Zero-FOUC Theme Engine**: Synchronous inline head script prevents light/dark mode flashes before React hydrates. Built-in integration with Chrome's native **View Transitions API**.
- **🎨 Modular & Scoped Styling**: Migrated to pure **CSS Modules** for absolute style isolation, zero runtime overhead, and zero CSS name collisions.
- **⚡ Peak Performance**: Built with Vite 6 & React 19. Light bundle (~150 KB JS gzipped), zero bloat frameworks, optimized web fonts (`Outfit` & `JetBrains Mono`).
- **📱 Responsive & Accessible**: Seamlessly adapts across mobile, tablet, and desktop viewports with WCAG-compliant color contrast and semantic HTML markup.
- **📋 Recruiter-Friendly UX**: One-click interactive email copy toast, direct PDF resume download, and clear section navigation.
- **🛡️ Data-Driven Architecture**: Fully typed content layer ([`src/data/content.ts`](src/data/content.ts)) separating UI components from portfolio content for effortless updates.

---

## 🛠️ Tech Stack

| Domain | Technology |
|---|---|
| **Core Framework** | React 19, TypeScript 5.7 |
| **Build Tooling** | Vite 6.1 |
| **Styling** | Scoped CSS Modules, Vanilla CSS Design Tokens |
| **Icons & Typography** | Lucide React, Google Fonts (*Outfit*, *JetBrains Mono*) |
| **Deployment** | Static Web Hosting (Render / Vercel / Netlify) |

---

## 🚀 Featured Projects

### 1. 🖥️ Vorssaint — macOS System Monitor & AI Copilot
> **Stack:** `Electron` • `Node.js` • `Gemini API` • `Ollama` • `Swift`
- Real-time system monitoring dashboard tracking CPU, memory, battery, network throughput, and top active processes.
- Dual AI backend supporting local LLMs via **Ollama** and cloud capabilities via **Google Gemini API**.

### 2. 🎵 Tidal — macOS Music Player
> **Stack:** `Swift` • `SwiftUI` • `Python` • `REST API` • `Xcode` • `Figma`
- Vinyl-turntable inspired macOS music player featuring client-server audio streaming.
- Built with real-time playback controls (play, pause, seek, volume) and dynamic library search.

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rishabh2603-sus/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready output will be generated in the `dist/` directory.

---

## 📂 Project Architecture

```text
portfolio/
├── public/
│   ├── favicon.svg               # Dynamic theme-adapting SVG favicon
│   ├── og-preview.png            # OpenGraph social preview image
│   └── rishabh-sharma-resume.pdf # Downloadable resume PDF
├── src/
│   ├── components/               # Scoped React components + CSS Modules
│   │   ├── About.tsx & .module.css
│   │   ├── Contact.tsx & .module.css
│   │   ├── Education.tsx & .module.css
│   │   ├── Hero.tsx & .module.css
│   │   ├── Involvement.tsx & .module.css
│   │   ├── Projects.tsx & .module.css
│   │   ├── Skills.tsx & .module.css
│   │   └── ThemeToggle.tsx & .module.css
│   ├── context/                  # React Context (ThemeContext)
│   ├── data/
│   │   └── content.ts            # Centralized portfolio data schema
│   ├── hooks/                    # Custom hooks (useTheme, useScrollSpy)
│   ├── index.css                 # Global design system tokens & VT animations
│   └── main.tsx                  # React entry point
├── index.html                    # HTML shell & zero-FOUC theme script
└── vite.config.ts                # Vite build configuration
```

---

## 🔗 Connect & Coding Profiles

- **GitHub**: [@Rishabh2603-sus](https://github.com/Rishabh2603-sus)
- **LinkedIn**: [Rishabh Sharma](https://www.linkedin.com/in/rishabh-sharma-415088356/)
- **LeetCode**: [rishabhsharma2603](https://leetcode.com/u/rishabhsharma2603)
- **HackerRank**: [rishabh_exe26](https://www.hackerrank.com/profile/rishabh_exe26)
- **Codeforces**: [RishabhSharmaA](https://codeforces.com/profile/RishabhSharmaA)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

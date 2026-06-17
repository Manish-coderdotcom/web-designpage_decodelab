# Project 1: Static Webpage Design

A premium, pixel-perfect frontend static webpage built with raw HTML5 and CSS3, demonstrating high-integrity visual architecture, responsive design, asset optimization, and SEO best practices.

## 📋 Table of Contents
- [Information Architecture & Sitemap](#information-architecture--sitemap)
- [Design & Layout Architecture](#design--layout-architecture)
- [Performance & Asset Optimization](#performance--asset-optimization)
- [Compliance & Validation](#compliance--validation)
- [File Directory Structure](#file-directory-structure)
- [How to Run Locally](#how-to-run-locally)

---

## 🗺️ Information Architecture & Sitemap

The project is structured with a clean sitemap and unidirectional navigation hierarchy:

```
[Home / Hero Header]
   ├── [Sitemap & IA Section] (Hierarchical page summary)
   ├── [Layout Blueprint Section] (Visual component wireframe)
   ├── [Objective Section] (Core Backend vs Frontend concepts)
   └── [Core Features Deck] (Key technical capabilities)
```

- **Sitemap defined first:** Integrated as a visual element on the page to display Information Architecture directly.
- **Sitemap XML:** Includes a production-ready `sitemap.xml` mapping the indexing logic for search engines.

---

## 🎨 Design & Layout Architecture

### Semantic HTML
- Fully compliant HTML5 semantic structures are utilized throughout, including `<header>`, `<main>`, and `<footer>` containers.
- Enforces a strict typographic outline with **exactly one `<h1>` tag** on the entire page.

### Layout Implementation
- **Macro Layout:** CSS Grid is implemented for major page blocks, wrapping grid cards, feature segments, blueprint wireframes, and multi-column divisions.
- **Micro Layout:** CSS Flexbox handles navigation items, internal card layout alignment, button text centers, logo branding, and standard inline components.

### CSS Coding Standard
- **No ID selectors** are used in the CSS file (e.g., `#id { ... }`). All styling is structured via clean, reusable class components.
- Adheres to the **DRY (Don't Repeat Yourself)** principle by standardizing colors and spacing in a central `:root` CSS variables deck.

---

## ⚡ Performance & Asset Optimization

- All graphics and icons have been replaced with high-end, custom vector illustrations.
- Converted all assets into the highly compressed **WebP format** to speed up page loads.
- Explicit dimensions (`width` and `height` attributes) are assigned to all images to eliminate Layout Shift (CLS).

---

## 🛡️ Compliance & Validation

- **W3C Validated HTML:** Passes HTML validation checks with zero errors or warnings (e.g. self-closing slashes omitted on HTML5 void elements, explicit button types).
- **Lighthouse Ready:** Built with clean structures, high-contrast typography, and explicit sizing to achieve peak scores for performance and accessibility.

---

## 📂 File Directory Structure

```
INTERN_1DDL/
├── assets/
│   ├── backend_logic.webp     # Custom backend illustration
│   ├── frontend_visual.webp   # Custom frontend illustration
│   └── hero_design.webp       # Custom hero illustration
├── index.html                 # Semantic HTML entrypoint
├── script.js                  # Interaction and scroll spy active links
├── style.css                  # Fully responsive CSS stylesheets
├── sitemap.xml                # SEO Sitemap configuration
└── README.md                  # Project documentation (this file)
```

---

## 🚀 How to Run Locally

To spin up the local development server:

1. Ensure [Node.js](https://nodejs.org) is installed.
2. Open your terminal in the project directory.
3. Run the static server:
   ```bash
   npx http-server -p 8080
   ```
4. Access the webpage in your browser at [http://localhost:8080](http://localhost:8080).

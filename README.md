# Ricardo Rodriguez — Portfolio

> **Técnico Informático & Desarrollador Web Jr.**  
> Resuelvo problemas de hardware y construyo soluciones digitales.  
> De la incidencia al código — cada problema tiene solución si sabes dónde mirar.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/status-online-4ade80?style=flat)]()

---

## 🔍 Vista general

Portfolio personal desarrollado íntegramente con **HTML5, CSS3 y JavaScript Vanilla** — sin frameworks, sin dependencias externas de runtime. Diseño oscuro con estética **terminal / RPG**, animaciones CSS puras y arquitectura de una sola página (SPA-like con smooth scroll).

🌐 **Live demo:** [ricardordrgz.github.io/Portfolio](https://ricardordrgz.github.io/portfolio)

---

## 📁 Estructura del proyecto

```
.
├── index.html              # Documento principal — toda la estructura semántica
├── css/
│   └── styles.css          # Estilos: variables CSS, layout, animaciones, responsive
├── js/
│   └── script.js           # Lógica: scroll activo, reveal on scroll, typewriter effect
├── assets/
│   ├── profile.png         # Foto de perfil
│   └── iconos/             # Iconos de herramientas y proyectos (PNG/SVG)
└── THM-5SVOIBNJXM.pdf      # Certificado TryHackMe — Pre Security Path
```

---

## ✨ Características

| Característica | Detalle |
|---|---|
| **Sin dependencias JS** | Vanilla JS puro, 0 npm packages |
| **CSS custom properties** | Sistema de diseño basado en variables (`--accent`, `--bg-base`…) |
| **Responsive** | Mobile-first con breakpoints en 600px y 900px |
| **Reveal on scroll** | `IntersectionObserver` API para animaciones de entrada |
| **Typewriter effect** | Terminal animada en la sección `whoami` |
| **Navbar dinámica** | Active link tracking según sección visible |
| **Accesibilidad** | HTML semántico, `alt` en imágenes, `aria` implícito vía landmarks |
| **Performance** | Assets locales, fuente cargada con `preconnect`, sin JS bloqueante |

---

## 🛠️ Stack

**Frontend**
- HTML5 semántico (landmarks, headings jerárquicos)
- CSS3 (Grid, Flexbox, Custom Properties, Keyframes)
- JavaScript ES6+ (IntersectionObserver, Template Literals, Arrow Functions)

**Tipografía**
- [Fira Code](https://fonts.google.com/specimen/Fira+Code) — Google Fonts (monospace)

**Iconos**
- Material Symbols Outlined (Google)
- Assets PNG/SVG propios

**Despliegue**
- GitHub Pages (rama `main` / carpeta raíz)

---

## 🚀 Instalación y uso local

No requiere build tools ni servidor Node. Basta con clonar y abrir:

```bash
# 1. Clonar el repositorio
git clone https://github.com/RicardoRdrgz/Portfolio.git

# 2. Entrar al directorio
cd Portfolio

# 3. Abrir en el navegador
# Opción A — directamente
xdg-open index.html

# Opción B — con servidor local (recomendado para evitar CORS en assets)
npx serve .
# o
python3 -m http.server 8080
```

> **Nota:** Los iframes de YouTube y las fuentes de Google Fonts requieren conexión a internet.

---

## 📋 Secciones del portfolio

- **`/about`** — Terminal interactiva con bio, stats y formación en formato `cat bio.txt`
- **`/formacion`** — Timeline vertical con experiencia y certificaciones
- **`/tools`** — Grid de herramientas con iconos y categorías (WEB, DEV, SYSADMIN, CREATIVE, IT)
- **`/projects`** — Inventario de proyectos con sistema de rareza (UNCOMMON → EPIC → LEGENDARY)
- **`/media`** — Galería de vídeos embebidos (edición y técnica)
- **`/contact`** — Links a GitHub, LinkedIn y email + badge "Open to Work"

---

## 🏅 Certificaciones

| Certificación | Plataforma | Año | Estado |
|---|---|---|---|
| Pre Security Path | TryHackMe | 2026 | ✅ Completado |
| FP — Creación y Publicación de Páginas Web | — | 2026 | 🔄 En curso |

---

## 📬 Contacto

- **GitHub:** [github.com/RicardoRdrgz](https://github.com/RicardoRdrgz)
- **LinkedIn:** [linkedin.com/in/RicardoRodriguez](https://www.linkedin.com/in/cristian-ricardo-rodriguez-arias-26804134b/)
- **Email:** christianrodriguezarias@gmail.com

> Disponible para prácticas o trabajo en **desarrollo web** y **soporte técnico IT** en el área de Barcelona o en remoto.

---

## ⚖️ Copyright

© 2026 Ricardo Rodriguez. Todos los derechos reservados.

El código fuente, el diseño, los textos y los assets visuales de este repositorio
son propiedad exclusiva del autor. **No está permitida su copia, modificación,
distribución ni uso** (total o parcial) sin autorización expresa y por escrito.

El código puede consultarse como referencia técnica, pero no puede reutilizarse
para crear trabajos derivados ni para suplantar la identidad del autor.

---

<div align="center">
  <sub>Hecho con <code>HTML + CSS + JS</code> · Sin frameworks · Sin excusas</sub><br>
  <sub>© 2026 Ricardo Rodriguez — De Andalucía al mundo entero, programado desde Sitges.</sub>
</div>

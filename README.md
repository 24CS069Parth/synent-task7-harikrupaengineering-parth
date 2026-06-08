# Hari Krupa Engineering — Premium Corporate Website

> A premium, professional multi-page corporate website for **Hari Krupa Engineering**, a fictional industrial engineering company based in Pune, Maharashtra, India.
> Built as **Task 7** of a Web Internship project.

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, stats, services preview, why us, testimonials, CTA |
| About | `about.html` | Company story, mission/vision, values, team, timeline, achievements |
| Services | `services.html` | 6 detailed service cards, process steps, industries served |
| Contact | `contact.html` | Contact form, info cards, map, FAQ |

---

## 📁 Folder Structure

```
Task_7/
│
├── index.html          ← Home Page
├── about.html          ← About Page
├── services.html       ← Services Page
├── contact.html        ← Contact Page
│
├── css/
│   └── style.css       ← Complete design system + all styles
│
├── js/
│   └── script.js       ← All interactivity, animations, form validation
│
└── README.md           ← This file
```

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#16A34A` | CTAs, accents, active states |
| Light Green | `#22C55E` | Gradients, highlights |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, navbar |
| Text Primary | `#0F172A` | Headlines, body |
| Text Secondary | `#475569` | Descriptions |

### Typography
- **Headings**: Playfair Display (serif) — elegant, premium
- **Body / UI**: Inter (sans-serif) — clean, modern, highly legible

### Design Inspired By
- Tesla — minimal dark hero, bold typography
- Siemens — professional, trustworthy corporate feel
- Schneider Electric — service-oriented layouts
- ABB — industrial credibility
- Modern SaaS — clean cards, glassmorphism, micro-animations

---

## ✨ Features

### Global
- [x] **Sticky Navbar** — shrinks on scroll, glassmorphism effect
- [x] **Dark Mode Toggle** — persisted in `localStorage`, respects OS preference
- [x] **Mobile Hamburger Menu** — animated, fully accessible
- [x] **Page Transition Animations** — green overlay slides on navigation
- [x] **Scroll Reveal Animations** — fade-in, slide-in-left/right using IntersectionObserver
- [x] **Back To Top Button** — appears after 400px scroll
- [x] **Smooth Scrolling** — all hash links
- [x] **Consistent Footer** — all 4 pages

### Home Page
- [x] Full-width dark hero with animated grid, particles, and gradient
- [x] Animated stat counters (500+, 200+, 15+, 98%)
- [x] 6 service cards with icon, description, and hover lift effect
- [x] Why Choose Us — image + 4 feature items
- [x] 3 realistic client testimonials with star ratings
- [x] CTA section with primary and outline buttons

### About Page
- [x] Company story with ISO certification badges
- [x] Mission + Vision in dark gradient cards
- [x] Core values grid (Integrity, Excellence, Innovation, People)
- [x] Leadership team with 4 real-feeling profiles
- [x] Alternating timeline of milestones (2009–2024)
- [x] Achievement counters

### Services Page
- [x] 6 premium service cards (detailed) with feature bullet lists
- [x] Color-coded service icons
- [x] 5-step process section with connecting line
- [x] 8 industry sectors served

### Contact Page
- [x] 4 contact info cards with hover animation
- [x] Full form: Name, Company, Email, Phone, Service, Location, Message
- [x] Real-time validation (required fields, email format, phone format)
- [x] Success message after submission
- [x] Google Maps placeholder with direct link
- [x] FAQ accordion using native `<details>` elements

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| `> 1100px` | Full desktop layout |
| `≤ 1100px` | 2-column grids, compact footer |
| `≤ 768px` | Single column, mobile navbar |
| `≤ 480px` | Compact spacing, stacked forms |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | — | Semantic markup, accessibility |
| CSS3 | — | Custom design system, animations, responsive layout |
| Vanilla JavaScript | ES6+ | Interactivity, scroll effects, form validation |
| Google Fonts | — | Inter + Playfair Display |
| No frameworks | — | Pure HTML/CSS/JS — no dependencies |

---

## ♿ Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<aside>`, `<article>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- `aria-current="page"` on active nav links
- `role="alert"` and `aria-live` on form errors and success messages
- Keyboard navigable (tab, enter, space)
- Color contrast meets WCAG AA minimum
- `alt` text on all images
- `<details>` / `<summary>` for accessible FAQ accordion

---

## 🚀 How to Run

**No build step needed.** Simply open any HTML file in a browser:

```bash
# Option 1: Direct file open
Open d:\Web_Internship\Task_7\index.html in your browser

# Option 2: VS Code Live Server (Recommended)
Right-click index.html → "Open with Live Server"

# Option 3: Python simple server
cd d:\Web_Internship\Task_7
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 📊 Project Summary

| Metric | Value |
|--------|-------|
| Pages | 4 (Home, About, Services, Contact) |
| Lines of CSS | ~1,100 |
| Lines of JavaScript | ~260 |
| Lines of HTML (total) | ~1,500+ |
| Responsive | ✅ Mobile, Tablet, Laptop, Desktop |
| Dark Mode | ✅ Full support |
| Form Validation | ✅ Client-side with real-time feedback |
| Animations | ✅ Scroll reveal, counters, particles, transitions |

---

## 👤 Author

**Web Internship — Task 7**
Built as a demonstration of professional multi-page website development using HTML5, CSS3, and Vanilla JavaScript.

---

*© 2024 Hari Krupa Engineering Pvt. Ltd. (fictional company for portfolio purposes)*

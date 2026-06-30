# EcoTravel — Sustainable Travel & Nature Exploration

> A premium, responsive multi-page corporate website for **EcoTravel**, a sustainable tourism and nature exploration company.
> Built as **Task 7** of a Web Internship project.

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, core values (carbon offset, community, biodiversity), trending destinations, custom planning CTA |
| About | `about.html` | Core mission & values, company background story, guiding principles (Leave No Trace, Local Empowerment, Active Restoration) |
| Services | `services.html` | In-depth description of service offerings: guided eco-tours, sustainable lodging, carbon offsetting, local immersion |
| Contact | `contact.html` | Communication channels, validation-backed contact form with real-time success alerts |

---

## 📁 Folder Structure

```
synent-task7-harikrupaengineering-parth/
│
├── index.html          ← Home Page
├── about.html          ← About Page
├── services.html       ← Services Page
├── contact.html        ← Contact Page
│
├── css/
│   └── style.css       ← Styling sheet with responsive grids, typography, and flexbox
│
├── js/
│   └── script.js       ← Mobile navbar toggle and contact form submission/validation
│
└── README.md           ← This file
```

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Forest Green | `#1b4332` | Headings, active links, logos, primary CTA hover states |
| Dark Leaf Green | `#2d6a4f` | Primary buttons, logo accents, link hover states |
| Light Sage Green | `#d8f3dc` | Card icon circles, travel tags, form success banner background |
| Light Background | `#f8faf7` | Main page background |
| Off-White Background | `#f4f9f4` | Alternate section background |
| Primary Text | `#212529` | Main text body |
| Secondary Text | `#555e58` | Subtitles, card descriptions, labels |

### Typography
- **Headings & Body**: Plus Jakarta Sans — modern, clean, premium corporate typography (loaded from Google Fonts).

---

## ✨ Features

### Global
- [x] **Sticky Header** — fixed header with thin shadows, stays at the top of the viewport
- [x] **Responsive Navigation** — links color-coded on hover and active status
- [x] **Mobile Hamburger Menu** — transitions from standard list to slide-down menu on screen sizes below 768px
- [x] **Modern Hover Animations** — cards lift up with soft shadows; destination images scale on hover
- [x] **Consistent Footer** — standard professional footers with social media links across all pages

### Home Page
- [x] Full-width hero overlay header with high-quality nature backgrounds
- [x] Triple-column "Travel with Purpose" value cards
- [x] Triple-column "Trending Eco-Destinations" grid showcasing adventure spots (Costa Rica Cloud Forests, Patagonia Glaciers, Kyoto Bamboo Groves)
- [x] Interactive Call-to-Action card linking to the planning page

### About Page
- [x] Clean, two-column layout highlighting the history and founders' philosophy
- [x] "Guiding Principles" section detailing values like Leave No Trace, Local Empowerment, and Active Restoration

### Services Page
- [x] Quad-column services grid mapping key service offerings with unique SVG vector icons
- [x] Custom eco-adventure consultation banner

### Contact Page
- [x] Multi-item card layout for direct contact information (Email, Phone, Location)
- [x] Interactive feedback contact form (Name, Email, Subject, Message)
- [x] Vanilla JS Form validation checking empty submissions, showing success response banner for 5 seconds

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| `> 992px` | Full desktop view (3-column layout grids, wide navbar links) |
| `≤ 992px` | Tablet view (Grids collapse into 2-column or single column layouts) |
| `≤ 768px` | Mobile view (Grids collapse to 1-column, mobile navigation toggled by Hamburger icon, hero texts scale down) |

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic skeleton structures, SVG icon embeds, viewport configs |
| CSS3 | Flexbox & CSS Grid, transitions, transforms, media query breakpoints |
| Vanilla JavaScript | DOM manipulation, menu class togglers, event listeners, form validation |
| Google Fonts | Plus Jakarta Sans |

---

## ♿ Accessibility

- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<svg>`)
- Clear interactive feedback links and buttons
- Native form elements with descriptive labels and custom alerts
- Intuitive grid hierarchies readable by screen readers

---

## 🚀 How to Run

No build step or dependencies required. Simply open `index.html` locally:

```bash
# Option 1: Direct File Open
Open d:\Web_Internship\synent-task7-harikrupaengineering-parth\index.html in your browser

# Option 2: Live Server (Recommended)
Use VS Code Live Server extension: right-click index.html → "Open with Live Server"

# Option 3: Python Simple Server
cd d:\Web_Internship\synent-task7-harikrupaengineering-parth
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 📊 Project Summary

| Metric | Value |
|--------|-------|
| Pages | 4 (Home, About, Services, Contact) |
| Responsive | ✅ Mobile, Tablet, Laptop, Desktop |
| Form Validation | ✅ Client-side validation with real-time success display |
| Typography | ✅ Google Font: Plus Jakarta Sans |
| UI/UX Effects | ✅ Image scales, grid cards lifting, interactive overlay |

---

## 👤 Author

**Web Internship — Task 7**
Built as a demonstration of professional multi-page website development using HTML5, CSS3, and Vanilla JavaScript.

---

*© 2026 EcoTravel. All rights reserved.*


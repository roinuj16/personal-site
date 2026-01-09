# Edson Junior website

Personal portfolio developed with Nuxt 3 and Tailwind CSS.

## 🚀 Tech Stack

- **Nuxt 3** - Full-stack Vue.js framework
- **Vue 3** - Reactive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Static typing for JavaScript
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Custom typography (Orbitron, Space Grotesk)

## ✨ Features

- ✅ **Futuristic Design** - Cyberpunk aesthetics with glow and holographic effects
- ✅ **Fully Responsive** - Optimized for Mobile, Tablet, and Desktop
- ✅ **Smooth Animations** - Modern transitions and visual effects
- ✅ **TypeScript** - Fully typed codebase
- ✅ **Componentized** - Modular and reusable architecture
- ✅ **Auto-imports** - Components and composables imported automatically
- ✅ **Accessible** - Keyboard navigation and screen reader support
- ✅ **Performance** - Optimized for fast loading
- ✅ **Clickable Cards** - Intuitive navigation to social networks

## 🎨 Color Palette

```css
matrix-green:   #00FF88  /* Main neon green */
neon-cyan:      #00E0FF  /* Bright cyan */
electric-blue:  #0496FF  /* Electric blue */
tech-teal:      #00C9A7  /* Tech teal-green */
cyber-mint:     #00FFC8  /* Cyber mint */
deep-space:     #0A0E27  /* Deep space blue */
void-black:     #050816  /* Void black */
```

## 📁 Project Structure

```
jr-site/
├── app.vue                           # Root component
├── nuxt.config.ts                    # Nuxt configuration
├── tailwind.config.ts                # Tailwind configuration
├── CLAUDE.md                         # Claude Code guide
├── assets/
│   ├── css/
│   │   └── main.css                  # Global styles and animations
│   └── images/
│       └── eu.jpg                    # Profile image
├── components/
│   ├── layout/
│   │   ├── BackgroundEffects.vue    # Holographic grid and stars
│   │   └── Container.vue            # Main container
│   ├── hero/
│   │   ├── Section.vue              # Complete hero section
│   │   ├── Text.vue                 # Name and description
│   │   └── Profile.vue              # Profile photo with effects
│   ├── skills/
│   │   ├── Section.vue              # Skills section
│   │   ├── Card.vue                 # Individual clickable card
│   │   └── CardCorners.vue          # Decorative brackets
│   └── ui/
│       ├── Button.vue               # Social network button
│       ├── Social.vue               # Social links container
│       └── InfoNote.vue             # Informational note
├── composables/
│   └── useContent.ts                # Centralized site data
└── types/
    └── index.ts                     # TypeScript interfaces
```

## 🛠️ Installation and Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repository>

# Navigate to directory
cd jr-site

# Install dependencies
npm install
```

### Available Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Prepare Nuxt types (runs automatically after install)
npm run postinstall
```

## ⚙️ Configuration

### Customize Content

Edit the `composables/useContent.ts` file to update:

- Personal name and description
- Social network links (LinkedIn, GitHub, Instagram, etc.)
- Skills/interests cards
- Redirect URLs


### Customize Colors

Edit `tailwind.config.ts` to modify the theme color palette.

## 🎯 Code Conventions

- **Components**: kebab-case naming in templates (`<hero-section>`, `<layout-container>`)
- **Auto-imports**: Components are automatically imported by Nuxt
- **TypeScript**: Full typing in all files
- **Responsiveness**: Mobile-first with md (tablet) and lg (desktop) breakpoints

## 📝 Development Notes

### Typography Hierarchy

- **Hero Titles**: Orbitron, responsive sizes (5xl → 6xl → 80px)
- **Descriptions**: Space Grotesk, 18px (mobile) → 20px (desktop)
- **Cards**: Space Grotesk, 18px with 85% opacity for readability

### Accessibility

- Text contrast: WCAG AA approved (5.5:1)
- Keyboard navigation supported
- Links with descriptive aria-labels
- Animations respect reduced motion preferences

### Performance

- Components lazy-loaded when possible
- Optimized images
- CSS purified by Tailwind

## 🔮 Future Roadmap

- [ ] Add projects/portfolio section
- [ ] Integrate with CMS (Strapi, Contentful, etc.)
- [ ] Dark/light mode toggle

## 📄 License

This project is for personal use.

## 👤 Author

**Edson Junior**

- LinkedIn: [@roinuj16](https://linkedin.com/in/roinuj16)
- GitHub: [@roinuj16](https://github.com/roinuj16)
- Instagram: [@jrempixel](https://instagram.com/jrempixel)

---

Developed with 💚 using Nuxt 3 and Tailwind CSS

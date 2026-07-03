# Hassan Shahzad — Portfolio

A cinematic, scroll-driven portfolio built to prove a point: that an engineer can also design and ship an award-grade interface. The homepage isn't a stack of sections — it's a single pinned 3D world you scroll *through*, rendered with a hand-written GLSL shader and React Three Fiber.

Live: **[https://hxndev.com](https://hxndev.com)**

## Highlights

- **Scroll-driven 3D hero.** One persistent crystal whose camera dolly, drift, scale, rotation, and surface morph are all driven directly by scroll progress (GSAP ScrollTrigger → R3F render loop). Text "acts" reveal *inside* the same world.
- **Hand-written GLSL.** A custom aurora backdrop shader (domain-warped fractal noise) — no Spline, no shader libraries — that reacts to the cursor and refracts through the glass.
- **"Aurora Noir" design system.** Deep near-black canvas with an electric-cyan primary and a warm-amber accent. Cyan + amber sit on the blue–yellow axis, the most colorblind-safe high-contrast pairing, so hierarchy reads through luminance *and* hue.
- **Buttery motion.** Lenis momentum scrolling synced to GSAP, a magnetic custom cursor, and Framer Motion reveals.
- **Terminal boot preloader.** The site boots like a shell — a zsh-style window types through a fake boot log (`npx hxndev@latest boot`) before the curtain lifts.
- **Interactive terminal.** A real, working shell at `/terminal` (reachable from the homepage teaser, footer, mobile menu and ⌘K): `help`, `projects`, `open <id>`, `skills`, `neofetch`, tab-completion, arrow-key history — and `sudo hire-me`.
- **⌘K command palette.** A hand-rolled command palette (no cmdk dependency) rendered in the browser top layer via a native `<dialog>` — fuzzy-search every page, project and action (download résumé, copy email, toggle play mode) from anywhere.
- **Play mode.** An opt-in mini-game: the cursor becomes a rocket, collectible orbs are scattered down the page, and a confetti win dialog tops it off. Auto-disabled on touch and reduced-motion.
- **Cheat code.** Type `play` anywhere on the site and the rocket game launches with a toast.
- **Designed 404.** Wrong URLs get a custom "lost in the aurora" page instead of a silent redirect.
- **Performance-conscious.** Device-tiered 3D quality, clamped DPR, off-screen render pausing, lazy-loaded routes, and full `prefers-reduced-motion` support.

## Tech Stack

- **React 18** + **Vite** — fast SPA tooling and HMR.
- **React Router 7** — client-side routing with lazy-loaded pages.
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — declarative 3D.
- **@react-three/postprocessing** — bloom and post effects.
- **Custom GLSL** — the aurora backdrop fragment shader.
- **GSAP (ScrollTrigger)** + **Lenis** — scroll choreography and smooth scrolling.
- **Framer Motion** — UI transitions and staggered reveals.
- **Tabler Icons** — iconography.
- **ESLint** + **Prettier** — code quality and formatting.
- **Vercel** — hosting with SPA rewrites (`vercel.json`), custom domain `hxndev.com`.

## Getting Started

```bash
# Clone
git clone https://github.com/HxnDev/hxndev.github.io.git
cd hxndev.github.io

# Install
npm install

# Develop (http://localhost:3000)
npm run dev

# Production build → ./dist
npm run build

# Preview the production build
npm run preview
```

### Quality checks

```bash
npm run lint          # ESLint
npm run format        # Prettier (write)
npm run format:check  # Prettier (check)
npm run check         # lint + format check
```

## Project Structure

```
hxndev.github.io/
├── .github/workflows/        # CI/CD (build + deploy to gh-pages)
├── public/                   # Static assets (images, resume, project media)
├── src/
│   ├── components/
│   │   ├── common/           # Marquee and shared bits
│   │   ├── core/             # Cursor, SmoothScroll, Preloader (terminal boot),
│   │   │                     #   Grain, Magnetic, CommandPalette (⌘K)
│   │   ├── game/             # PlayMode (rocket game), CheatCode, GameProvider
│   │   ├── home/             # CinematicStage (the scroll-driven hero)
│   │   ├── layout/           # Navbar, Footer
│   │   ├── projects/         # ProjectCard, ProjectModal
│   │   ├── three/            # CinematicScene, AuroraBackdrop (GLSL)
│   │   └── utils/            # Asset path helpers
│   ├── data/                 # profile, skills, experience, certifications,
│   │                         #   recommendations, projects.json
│   ├── hooks/                # useGetProjects, useScrollReveal
│   ├── pages/                # Home, Projects, About, Certifications,
│   │                         #   Recommendations, Contact, Terminal, NotFound
│   ├── styles/               # global.css (design tokens), ui.css
│   ├── App.jsx               # Routing + global layout
│   └── main.jsx              # Entry point
├── index.html
├── vite.config.js
└── README.md
```

## Architecture Notes

- **Cinematic flow.** `CinematicStage.jsx` owns a tall scroll region with a `position: sticky` viewport. A single `ScrollTrigger` writes scroll progress (0→1) into a ref that `CinematicScene.jsx` reads every frame to animate the camera and crystal, and derives the active text act from. This keeps per-frame work off the React render path.
- **Data-driven content.** All résumé content (experience, skills, certifications, recommendations, stats) lives in small modules under `src/data/`, so updating the site is a content edit, not a code change.
- **Accessibility.** Honors reduced-motion (disables smooth scroll, freezes shader time, drops heavy 3D), keyboard-navigable, and built on a colorblind-safe palette.

## Deployment

Hosted on **Vercel** at [hxndev.com](https://hxndev.com). Every push to `main` triggers an automatic production deployment; `vercel.json` rewrites all routes to `index.html` so React Router deep links work on refresh.

## Sister Projects

Two other live apps on the same domain, both featured on the Work page:

- **[BiteBook](https://bitebook.hxndev.com)** ([repo](https://github.com/HxnDev/BiteBook)) — a shared family recipe book with photos and per-100g macros. React + TypeScript + Supabase, with an IndexedDB offline fallback.
- **[JobTracker](https://jobs.hxndev.com)** ([repo](https://github.com/HxnDev/JobTracker)) — a job-application dashboard where a Google Sheet stays the database, via browser-only OAuth. No backend.

## License

Distributed under the MIT License. See `LICENSE` for details.

## Contact

**Hassan Shahzad** — Senior Full-Stack Engineer (Geneva, CH)

- Email: [hassanshahzad.dev@gmail.com](mailto:hassanshahzad.dev@gmail.com)
- LinkedIn: [hassan-shahzad-2a6617212](https://www.linkedin.com/in/hassan-shahzad-2a6617212/)
- GitHub: [HxnDev](https://github.com/HxnDev)
- Portfolio: [https://hxndev.com](https://hxndev.com)

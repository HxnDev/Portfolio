# Hassan Shahzad — Portfolio

A lightweight React portfolio at [hxndev.com](https://hxndev.com), with matching monochrome dark and light themes, an interactive network globe, and a single scrolling overview.

## Local development

```sh
npm install
npm run dev
```

Open the URL printed by Vite, normally http://localhost:3000. If that port is occupied, Vite prints the next available port. The server does not open a browser automatically.

## Quality checks

```sh
npm run typecheck
npm run lint
npm run format:check
```

JavaScript source is checked with TypeScript (checkJs), ESLint and Prettier. There is no automated browser test suite. Browser QA and production measurements are separate from static checks. Do not run a production build, deploy or push without explicit authorization.

## Navigation and content

- /: Personal introduction → Organizations → Professional experience → Education → Skills & tools → Selected projects → Recommendations → Certifications → Contact.
- /experience: full career history and education.
- /projects: searchable project archive with category filters.
- /projects/:id: individual descriptions, highlights, technologies, live links and source links.
- /recommendations: full recommendations, searchable and filterable by relationship.
- /certifications: full credentials, searchable and filterable by issuer. Credentials without public URLs remain non-clickable.
- Legacy /about links return to the introduction; /contact returns to the contact section. /terminal returns home. /projects?project=id opens the matching detail page. /JobFit and its child paths still redirect to the standalone app.

Edit src/data/ to maintain experience, education, projects, credentials, recommendations and homepage selections. Featured projects have interactive, clearly labelled examples with sample content. They do not connect to live applications or personal data. Archive/detail images remain existing local assets. The contact form prepares a draft in the visitor's email app; it has no backend and never claims delivery.

## Performance and motion

- Native scrolling with smooth anchor navigation, without scroll interception or pinned stages.
- Component-level CSS entrances with staggered cards and hover/focus feedback. Effects activate as elements enter the viewport, including newly mounted filter results. Content remains visible when observers are unavailable.
- Canvas 2D mesh globe and particle network with pixel density capped at 2. A short automatic introduction settles after 4.2 seconds; subsequent movement responds to pointer/scroll input, then rendering stops when idle. Drawing also stops offscreen and in hidden tabs. There is no persistent globe pause control.
- Reduced motion also disables scroll animations and CSS transitions.
- Detail routes load on demand; project images load lazily with reserved aspect ratios.
- Self-hosted DM Sans with system-font fallback. No homepage GitHub API, remote placeholder images or font-service requests.
- Retired terminal, games, custom cursor, preloader, shaders, post-processing, GSAP, Lenis, Framer Motion and Three.js dependencies removed.

Employer and university logos are stored locally from the official AICA, EPFL, IBM, Vodacom and FAST-NUCES websites. Vodacom is explicitly labelled as a client collaboration. DM Sans uses the SIL Open Font License in public/fonts/OFL.txt.

## Hosting

The existing Vercel rewrite serves client-side routes on refresh. The existing GitHub Pages workflow runs on pushes to main; pushes can trigger deployment. Hosting configuration and release version are unchanged. User review is required before pushing.

## Manual review

1. Check the full homepage in both themes, including persistence after refresh.
2. Check menu and cards at phone and desktop widths.
3. Follow each View all link and a project detail, then test browser Back.
4. Try collection search, category/issuer/relationship filters, and empty-state reset.
5. Use Tab, Enter and Escape; check skip link, focus outlines and menu dismissal.
6. Enable reduced motion; confirm a static globe and immediate scrolling.
7. Check résumé links and the email draft handoff in your own browser/email client.

No production performance score or real-device behavior is implied by local checks.

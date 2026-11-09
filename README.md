# Hassan Shahzad — Portfolio

A lightweight React portfolio at [hxndev.com](https://hxndev.com), with matching charcoal and light themes, an interactive wireframe globe, and a single scrolling overview.

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

- /: Hero → About → Experience → Skills & tools → Featured projects → Recommendations → Certifications → Contact.
- /experience: full career history and education.
- /projects: searchable project archive with category filters.
- /projects/:id: individual descriptions, highlights, technologies, live links and source links.
- /recommendations: full recommendations, searchable and filterable by relationship.
- /certifications: full credentials, searchable and filterable by issuer. Credentials without public URLs remain non-clickable.
- Legacy /about and /contact links return to homepage sections. /terminal returns home. /projects?project=id opens the matching detail page. /JobFit and its child paths still redirect to the standalone app.

Edit src/data/ to maintain experience, education, projects, credentials, recommendations and homepage selections. Product preview images are existing local assets, not generated representations of functionality. The contact form prepares a draft in the visitor's email app; it has no backend and never claims delivery.

## Performance and motion

- Native scrolling with smooth anchor navigation, without scroll interception or pinned stages.
- CSS entrances and hover/focus feedback. Content starts visible; reveal effects are progressive enhancements.
- Canvas 2D globe with pixel density capped at 2 and drawing limited to approximately 30fps. Its animation loop stops offscreen, in hidden tabs, when paused, or when reduced motion is requested.
- Reduced motion also disables scroll animations and CSS transitions.
- Detail routes load on demand; project images load lazily with reserved aspect ratios.
- Self-hosted DM Sans with system-font fallback. No homepage GitHub API, remote placeholder images or font-service requests.
- Retired terminal, games, custom cursor, preloader, shaders, post-processing, GSAP, Lenis, Framer Motion and Three.js dependencies removed.

Globe land outlines derive from [Natural Earth 1:110m land](https://www.naturalearthdata.com/downloads/110m-physical-vectors/110m-land/), public-domain data. DM Sans uses the SIL Open Font License in public/fonts/OFL.txt.

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

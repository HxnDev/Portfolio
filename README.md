# Hassan Shahzad — Portfolio

A lightweight React portfolio at [hxndev.com](https://hxndev.com), with neutral charcoal and warm-white themes with coral accents, an interactive network globe, and a single scrolling overview.

## Current development state

The current portfolio redesign is **Unreleased**. Package metadata remains `0.0.0`; no release version or release date has been assigned. See [CHANGELOG.md](CHANGELOG.md) for the complete changes.

Recent updates include the About Me portrait, neutral themes, smoothly drifting hero nodes, alternating GIF project cards, project-specific bezel colors, side-by-side education, certificate-style credentials, author-first recommendations, background-free organization logos and the supplied blue IBM artwork in work experience.

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

- /: Personal introduction → About Me → Organizations → Professional experience → Education → Skills & tools → Featured projects → Recommendations → Certifications → Contact.
- /experience: full career history and education.
- /projects: searchable project archive with category filters.
- /projects/:id: individual descriptions, highlights, technologies, live links and source links.
- /recommendations: full recommendations, searchable and filterable by relationship.
- /certifications: full credentials, searchable and filterable by issuer. Credentials without public URLs remain non-clickable.
- Legacy /about links open About Me; /contact returns to the contact section. /terminal returns home. /projects?project=id opens the matching detail page. /JobFit and its child paths still redirect to the standalone app.

Edit src/data/ to maintain experience, education, projects, credentials, recommendations and homepage selections. Featured projects are Viora, Nexus, Odyssey, Afterlight (the planned standalone movie directory), JobFit and ManCave, in that order on both the homepage and project collection. Local GIFs live in public/assets/gifs/ and play near the viewport. Featured cards alternate media placement on desktop and use equal 5:4 stages; archive stages use 16:10. Both preserve source aspect ratio. See docs/project-recordings.md for replacement instructions. Older archive/detail images remain existing local assets. The contact form prepares a draft in the visitor's email app; it has no backend and never claims delivery.

## Performance and motion

- Native scrolling with smooth anchor navigation, without scroll interception or pinned stages.
- Component-level CSS entrances with staggered cards and hover/focus feedback. Effects activate as elements enter the viewport, including newly mounted filter results. Content remains visible when observers are unavailable.
- Canvas 2D mesh globe and particle network with pixel density capped at 2. Background nodes follow slow, independent drifting paths, alongside pointer/scroll interaction. Drawing stops offscreen, in hidden tabs and for reduced-motion preferences. There is no persistent globe pause control.
- Reduced motion also disables scroll animations and CSS transitions.
- Detail routes load on demand; project images load lazily with reserved aspect ratios.
- Self-hosted DM Sans with system-font fallback. No homepage GitHub API, remote placeholder images or font-service requests.
- Retired terminal, games, custom cursor, preloader, shaders, post-processing, GSAP, Lenis, Framer Motion and Three.js dependencies removed.

The organization slider includes AICA, EPFL, GBDI, IBM, Vodacom, Think Vision, Zixel and FAST-NUCES, with relationship labels and hover/focus pause behavior. The organization strip uses monochrome marks without background panels. Job and education logos retain their natural colors, including blue IBM and a transparent FAST mark. EPFL uses a tightly framed vector mark. Education includes FAST and Punjab College. Courses use certificate-inspired cards. Recommendation authors appear first; Enrico’s homepage excerpt ends after the viewer-page features, while the recommendations archive retains the full text. Pinning is intentionally not implemented. DM Sans uses the SIL Open Font License in public/fonts/OFL.txt.

## Deployment policy

Use `npm run dev` for local development. Pushing changes to `main` should automatically update the production website through Vercel.

- The push-triggered GitHub Pages deployment workflow has been removed.
- `vercel.json` enables Git-triggered deployments for `main` and disables every other branch, including branches containing slashes. In the connected Vercel project, the Production Branch must be `main`; other branches must not be assigned to custom deployment environments. The client-side route rewrite remains enabled.
- `npm run preview` only serves an existing local production build; it does not create a hosted Preview deployment and is not needed for normal development.
- These changes take effect remotely after they are pushed. They do not remove existing deployment history, unpublish existing sites, cancel already queued deployments, or change remote dashboard settings.
- If GitHub Pages is still configured to publish the old `gh-pages` branch, disable it under repository **Settings → Pages → Build and deployment → Source / Branch** (choose **None** for the publishing branch). This is separate from removing the workflow that updates that branch.
- Do not build, push, publish or deploy without explicit authorization.

## Manual review

1. Check the full homepage in both themes, including persistence after refresh.
2. Check menu and cards at phone and desktop widths.
3. Follow each View all link and a project detail, then test browser Back.
4. Try collection search, category/issuer/relationship filters, and empty-state reset.
5. Use Tab, Enter and Escape; check skip link, focus outlines and menu dismissal.
6. Enable reduced motion; confirm a static globe and immediate scrolling.
7. Check résumé links and the email draft handoff in your own browser/email client.

No production performance score or real-device behavior is implied by local checks.

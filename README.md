# rodionov.online

Personal portfolio site — built with React, TypeScript, and Vite, deployed automatically to GitHub Pages.

**Live site:** [rodionov.online](https://rodionov.online)

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [React Router](https://reactrouter.com/) — client-side routing
- [Motion](https://motion.dev/) (formerly Framer Motion) — page/element animation
- [react-helmet-async](https://github.com/staylor/react-helmet-async) — per-page SEO metadata

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Script                 | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                     |
| `npm run build`        | Type-check and build for production (`dist/`) |
| `npm run preview`      | Preview the production build locally          |
| `npm run lint`         | Lint with ESLint                              |
| `npm run lint:fix`     | Lint and auto-fix                             |
| `npm run format`       | Format all files with Prettier                |
| `npm run format:check` | Check formatting without writing              |
| `npm run typecheck`    | Type-check without emitting                   |

## Project structure

```
public/            Static assets served as-is (favicons, CNAME, robots.txt, sitemap.xml, 404.html)
src/
  layouts/          RootLayout — header, page transition, footer
  components/
    layout/           Header, Footer, nav link
    ui/               Reusable primitives: Button, Card, Container, SectionHeading, ...
    seo/              Seo — per-page <title>/meta wrapper around react-helmet-async
    motion/           PageTransition, FadeIn — shared animation wrappers
  pages/            One folder per route (About, Projects, Architecture, Blog, Resume, Contacts, NotFound)
  hooks/            Shared hooks (useScrollToTop)
  data/             Static content (nav items, projects)
  types/            Shared TypeScript types
  lib/              Site-wide constants (siteName, siteUrl, default OG image)
  router.tsx        Route table — each page is lazy-loaded and code-split
  App.tsx           Top-level composition (HelmetProvider + RouterProvider)
  main.tsx          Entry point
```

## Routing & pages

| Route           | Page         |
| --------------- | ------------ |
| `/`             | About        |
| `/projects`     | Projects     |
| `/architecture` | Architecture |
| `/blog`         | Blog         |
| `/resume`       | Resume       |
| `/contacts`     | Contacts     |

Each page is its own lazy-loaded chunk (`React.lazy`), so the initial bundle only ships the code for the page actually being visited.

GitHub Pages is a static file host, so a direct request to a route like `/projects` would 404 before React ever loads. This is solved with the classic [SPA GitHub Pages redirect trick](https://github.com/rafgraph/spa-github-pages): `public/404.html` re-encodes the requested path and redirects to `index.html`, which decodes it back via `history.replaceState` before React mounts.

## Styling

Tailwind CSS 4 uses CSS-first configuration — there's no `tailwind.config.js`. Theme tokens (colors, fonts) are defined in an `@theme` block in `src/index.css`.

## SEO

Every page renders a `<Seo title description path />` component (`src/components/seo/Seo.tsx`) that sets the page's `<title>`, meta description, canonical link, and Open Graph/Twitter tags via `react-helmet-async`. `index.html` also carries static fallback meta tags for the pre-JS case. `public/robots.txt` and `public/sitemap.xml` list the known routes.

**Known limitation:** since this is a client-rendered SPA (no server-side rendering/prerendering), social-media link unfurlers and non-JS-executing crawlers only ever see the default meta tags baked into `index.html`, not the per-page values set by `Seo.tsx`. If per-page social share cards become important, consider adding static prerendering (e.g. React Router's Framework Mode with `prerender: true`).

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which lints, builds, and deploys the `dist/` output to GitHub Pages via `actions/deploy-pages`. The custom domain (`rodionov.online`) is preserved via `public/CNAME`, which Vite copies verbatim into `dist/` at build time.

**One-time manual setup:** in this repo's Settings → Pages, set "Build and deployment → Source" to **GitHub Actions**, and confirm the custom domain and "Enforce HTTPS" are still set correctly.

## Code style

- Indentation: tabs (see `.editorconfig`)
- ESLint (flat config) + `typescript-eslint`, `react-hooks`, `react-refresh`, `jsx-a11y`
- Prettier handles formatting separately (`npm run format`) — not run as a lint rule

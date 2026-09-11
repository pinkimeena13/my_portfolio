# Pinki Meena — Portfolio

Personal portfolio for Pinki Meena, Full Stack Developer. Built as a single
statically-rendered page with a premium-light design system.

## Stack

| Concern    | Choice                       |
| ---------- | ---------------------------- |
| Framework  | Next.js 15 (App Router)      |
| Styling    | Tailwind CSS 3               |
| Animation  | Framer Motion                |
| Icons      | Lucide React                 |
| Type       | Space Grotesk + Inter        |
| Deployment | Vercel                       |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
app/
  layout.tsx        fonts, metadata, JSON-LD
  page.tsx          section composition
  globals.css       design tokens + component classes
lib/
  data.ts           all copy and project content — the single source of truth
components/
  layout/           navbar, footer, scroll progress, cursor spotlight, mobile CTA
  sections/         hero, about, skills, experience, projects, learning, contact
  ui/               reveal, section heading, browser-chrome mockup
public/
  images/           optimised portraits used by the site
  personal-images/  original unoptimised source photos
  projects/         project screenshots
  resume/           downloadable résumé
```

## Editing content

Nearly all copy lives in [`lib/data.ts`](lib/data.ts) — profile details, the
timeline, skill categories, experience, projects and learning pathways. Sections
read from it, so text changes rarely require touching JSX.

Each project carries the case-study fields the design calls for: `challenge`,
`role`, `result`, plus `stack` and a `media` gallery. `demo` and `github` are
optional — their buttons only render when a URL is present.

## Design system

Tokens are defined once in `app/globals.css` (`:root`) and mirrored in
`tailwind.config.js`.

- Primary `#2563EB`, canvas `#FFFDF8`, card `#FFFFFF`, ink `#111827`, border `#E2E8F0`
- Accents: sky `#DCEEFF`, lavender `#F9E8FF`
- 8px spacing grid — section gap 120px, card padding 32px, button height 52px
- Card radius 20px, button radius 9999px, shadow only on hover
- Type: Space Grotesk for headings, Inter for body

## Media

Project demo videos are hosted on GitHub Releases (`v1.0-media`) rather than in
the repo — `*.mp4` is gitignored.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin so canonical URLs, Open Graph
tags, `sitemap.xml` and `robots.txt` all agree. Defaults to
`https://pinkimeena.dev`.

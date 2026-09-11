# Pinki Meena — Portfolio

Personal portfolio for Pinki Meena, Full Stack Developer. One statically
rendered page, built around a premium-light design system.

## Stack

| Concern       | Choice                                  |
| ------------- | --------------------------------------- |
| Framework     | Next.js 15 (App Router)                 |
| Styling       | Tailwind CSS 3                          |
| Animation     | Framer Motion                           |
| Smooth scroll | Lenis                                   |
| Icons         | Lucide React                            |
| Type          | Space Grotesk · Inter · Caveat          |
| Deployment    | Vercel                                  |

Everything renders at build time — there is no server runtime, no database and
no API routes.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checking your work

Dev mode hides real problems: it skips static generation, serves images
unoptimised, and React double-renders under StrictMode. Check the production
build instead.

```bash
npm run verify     # strict typecheck + lint + production build
npm run preview    # build, then serve the real output on :3100
```

`verify` stops at the first failure, so a clean run means all three passed.

> `npm run dev` overwrites `.next`, so `npm run start` afterwards fails with
> "Could not find a production build". Re-run `npm run preview`.

### What to click through on the preview

| Area            | Check                                                          |
| --------------- | -------------------------------------------------------------- |
| Hero            | Stat numbers count up; "Pinki" / "clarity" gradient shifts slowly |
| Navbar          | Active link follows scrolling; links glide rather than jump      |
| Projects        | Filters switch; "Case study" opens; Esc closes and restores focus |
| Case study      | Arrow keys change slides; video plays; page behind stays put     |
| Contact         | Submit opens your mail client with the fields filled in          |
| Footer          | Résumé downloads; "Back to top" glides                          |
| Mobile (≤400px) | No sideways scrolling; sticky bottom CTA appears past the hero   |

### Console

DevTools → Console on the preview should be empty.

A hydration warning naming `data-gr-ext-installed` or `data-new-gr-c-s-check-loaded`
comes from a browser extension (Grammarly, dark-mode tools) writing attributes
onto `<body>` before React hydrates — not from this site. Confirm in an
incognito window with extensions disabled. `<body>` carries
`suppressHydrationWarning` for exactly this reason; it only suppresses `<body>`'s
own attributes, so real mismatches inside the tree still surface.

## Project structure

```
app/
  layout.tsx        fonts, metadata, JSON-LD
  page.tsx          section composition
  globals.css       design tokens, component classes, keyframes
  icon.png          favicon (App Router convention)
  robots.ts  sitemap.ts
lib/
  data.ts           all copy and project content — the single source of truth
  smooth-scroll.ts  the shared Lenis instance and scroll helpers
components/
  layout/           navbar, footer, scroll progress, cursor spotlight,
                    mobile CTA, smooth scroll, page grain
  sections/         hero, about, skills, experience, education,
                    projects (+ case-study modal), learning, contact
  ui/               reveal, section heading, section decor, browser mockup,
                    count-up, leaf illustration
public/
  images/           optimised portraits and the logo mark
  Logo/             original logo source files
  personal-images/  original unoptimised source photos
  projects/         project screenshots and the blog demo video
  resume/           downloadable résumé
```

## Editing content

Nearly all copy lives in [`lib/data.ts`](lib/data.ts) — profile, timeline, skill
categories, experience, education, projects, learning pathways and footer.
Sections read from it, so text changes rarely mean touching JSX.

Each project carries the case-study fields the design calls for — `challenge`,
`role`, `result` — plus `stack` and a `media` gallery. `demo` and `github` are
optional; their buttons render only when a URL is present. `featured: true`
floats a project into the six shown before "Show all".

## Design system

Tokens are defined once in `app/globals.css` (`:root`) and mirrored in
`tailwind.config.js`.

| Purpose               | Value                 |
| --------------------- | --------------------- |
| Interactive blue      | `#2563EB`             |
| Accent gradient       | `#3B82F6` → `#5B7CFA` |
| Heading / ink         | `#0F172A`             |
| Body text             | `#475569`             |
| Background            | `#FCFBF8`             |
| Card                  | `#FFFFFF`             |
| Border                | `#E5EAF4`             |
| Sky / lavender washes | `#DCEEFF` / `#DDE5FF` |

Buttons stay on `#2563EB` rather than the accent start: white on `#3B82F6` is
only 3.1:1, below WCAG AA. The accent gradient is for display text.

- 8px spacing grid — section gap 120px, card padding 32px, button height 52px
- Card radius 20px, button radius 9999px, shadow only on hover
- Space Grotesk for headings, Inter for body, Caveat for handwritten accents
- Fluid container: no max width, side gutters grow 24 → 112px with the viewport

## Motion

Framer Motion for component animation, Lenis for inertial scrolling, CSS
keyframes for ambient background movement.

- 0.4–0.8s, ease-out, blur + fade rather than bounce
- Scroll reveals play once (`viewport={{ once: true }}`)
- Only `transform` and `opacity` animate; background floats run 9–13s
- `prefers-reduced-motion` is honoured throughout, and Lenis does not initialise

Two things worth knowing before editing motion code:

**Lenis owns scrolling.** Every scroll-to goes through `lib/smooth-scroll.ts`.
Do not add `scrollIntoView` or `window.scrollTo` calls, and do not set
`scroll-behavior: smooth` — they fight the scroller. The case-study modal calls
`pauseScroll()` while it is open.

**A motion child inside `<Reveal>` must use the parent's variants.** Framer
Motion propagates `hidden` / `visible` down the tree, so a child with its own
`initial` / `whileInView` is stranded at its initial value and never animates.
Give it `variants={{ hidden: …, visible: … }}` instead.

## Images and media

Portraits and the logo are pre-optimised into `public/images/`; the untouched
originals stay in `public/personal-images/` and `public/Logo/`.

`/images/*` is served with `Cache-Control: immutable`. **Replacing a file under
the same name will not reach anyone** — the browser and Next's image optimiser
both keep the old bytes. Give the new file a new name and update the reference.

Project demo videos live on GitHub Releases (`v1.0-media`) because `*.mp4` is
gitignored. The blog API demo is the exception: it is small enough to ship with
the repo and is whitelisted via `!public/projects/**/demo.mp4`.

## Before deploying

- Set `NEXT_PUBLIC_SITE_URL` to the real origin, or canonical URLs, Open Graph
  tags, `sitemap.xml` and `robots.txt` all point at the `https://pinkimeena.dev`
  default.
- Run `npm audit --omit=dev` and review anything new. Two build-time `postcss`
  advisories inside Next's dependency tree are known and currently need Next 16
  to clear; they do not run in production.

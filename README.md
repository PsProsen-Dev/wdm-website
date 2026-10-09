# We Digital Mitra — Agency Website

Production website for **We Digital Mitra** — *"Aapki Growth, Hamari Responsibility"* —
a 1 human, 100% AI-operated digital marketing agency serving local businesses across
8 districts of North Bengal (NH31/Dooars corridor), founded January 2024 by
Prosenjit Paul (aka Ps Prosen). Based at Panbari Bazar, Maynaguri, Jalpaiguri, West Bengal.

## Stack

- **Next.js 15.5** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) — brand tokens in `app/globals.css`
- **lucide-react** icons, no other UI runtime deps
- Single-page marketing site: Hero → Services → Why WDM → Coverage → About → Contact

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The page hot-reloads on edits.

## Production build & preview

```bash
npm run build   # typecheck + lint + static production build
npm start       # serve the production build on http://localhost:3000
```

Both must complete with zero errors before shipping any change.

## Content canon

All real content lives in one place: `lib/site.ts` (`SITE`, `LINKS`, `NAV_LINKS`).
Never hardcode phone numbers, emails, tagline, or coverage text in components —
import from `lib/site.ts` so there is exactly one source of truth.

## Brand status (2026-09-25)

- Colors locked: navy `#0F2B55` / `#0B2D5B`, orange `#F26522` / `#FF7A00`,
  accents `#C9CED6` / `#FFB347` — see `@theme` in `app/globals.css`.
- Logo artwork is **on hold** (source URLs expired). `components/BrandLogo.tsx`
  renders an honest temporary text wordmark with a documented swap procedure,
  and `public/brand/` is the asset drop zone. The tab favicon is an inline
  SVG "WDM" monogram in brand colors until the real logo lands.

## Project layout

| Path                     | What it is                                      |
|--------------------------|-------------------------------------------------|
| `app/layout.tsx`         | Metadata, OpenGraph, JSON-LD, navbar/footer shell |
| `app/page.tsx`           | Section composition                             |
| `app/globals.css`        | Brand tokens + base styles                      |
| `components/`            | One component per page section                  |
| `components/ui/`         | Button, Badge, Card primitives                  |
| `lib/site.ts`            | Contact details, links, nav — the content canon |
| `public/brand/`          | Logo drop zone (see its README)                 |

No deploys, domain purchases, or publishing from this repo — build and hand off only.

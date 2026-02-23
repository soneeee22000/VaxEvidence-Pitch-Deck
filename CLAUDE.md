# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VaxEvidence Pitch Deck — a single-page interactive slideshow presenting the VaxEvidence startup to investors. Built with Next.js 14 (Pages Router via App Router), React 18, Framer Motion, and Tailwind CSS. Uses pnpm as package manager.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm start        # Serve production build
pnpm lint         # Run Next.js ESLint
```

## Architecture

This is a minimal Next.js App Router project. The entire pitch deck is a single client component:

- `app/page.tsx` — The complete pitch deck (~1300 lines). Contains all 11 slides as an inline `slides[]` array of JSX. Each slide is a `{ title, content }` object where `content` is a `motion.div` tree. Navigation state (`currentSlide`, `direction`) is managed with `useState`. Keyboard navigation (arrow keys, spacebar, F for fullscreen) is handled via `useEffect`.
- `app/layout.tsx` — Root layout with metadata (SEO, Open Graph, favicon).
- `app/globals.css` — Imports Outfit font from Google Fonts, Tailwind directives, custom scrollbar styles, slide transition CSS classes, and a `.glass` utility.

There are no API routes, no data fetching, no external services, and no tests.

## Key Patterns

- **Animations**: All slide transitions use Framer Motion's `AnimatePresence` with directional `slideVariants`. Inner content uses `fadeIn` + `stagger` variants for sequenced entry animations.
- **Slide data**: Slides are defined inline in the component (not in a separate data file). Each slide's content is raw JSX with Tailwind classes — not abstracted into reusable sub-components.
- **Icons**: Lucide React icons throughout (`lucide-react` package).
- **Images**: Next.js `<Image>` component for team photos and logo. Static assets in `public/` (logo SVG, team JPEGs).
- **Font**: Outfit loaded via CSS `@import` and applied through Tailwind's `font-sans` override using CSS variable `--font-outfit`.
- **Fullscreen**: Browser Fullscreen API toggled with F key or button.

## Design System

- Color palette: Slate (primary text/bg), Blue-600 (accent/CTA), Emerald (success badges)
- Typography: Outfit font family, weights 300–800
- Border radius: `rounded-2xl` (cards), `rounded-xl` (smaller elements), `rounded-full` (pills/dots)
- Cards: White bg with `border border-slate-200 shadow-sm`, dark cards use `bg-slate-900 text-white`

## Legacy File

`vaxevidence-pitch.tsx` in the project root is an earlier standalone version of the pitch deck. The active version is `app/page.tsx`.

# VaxEvidence Pitch Deck

Interactive investor pitch deck for **VaxEvidence** — an AI-powered Real-World Evidence platform for vaccine scientists.

Built as a single-page slideshow with animated transitions and keyboard navigation.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS 3** + **Outfit** font
- **Framer Motion** for slide transitions and staggered animations
- **Lucide React** for icons

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Navigation

| Key | Action |
|-----|--------|
| Arrow Right / Spacebar | Next slide |
| Arrow Left | Previous slide |
| F | Toggle fullscreen |
| Esc | Exit fullscreen |

Click the dot indicators at the bottom to jump to any slide.

## Slides

1. Title
2. The Problem
3. Market Opportunity
4. Solution
5. What's Built
6. Competitive Advantage
7. Business Model
8. Go-to-Market
9. Team
10. Roadmap
11. The Ask

## Project Structure

```
app/
  layout.tsx      # Root layout with metadata
  page.tsx        # Pitch deck component (all slides)
  globals.css     # Fonts, Tailwind, custom styles
public/
  logo-final.svg  # VaxEvidence logo
  images/         # Team photos
```

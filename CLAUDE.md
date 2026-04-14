# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project

Next.js SSG portfolio site using GSAP, Tailwind CSS v4, Lenis, and Biome.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build (SSG)
npm run start     # Serve production build
npm run lint      # Biome lint
npm run format    # Biome format (write)
npm run check     # Biome check + fix
```

> Always use Node 24: `nvm use 24.13.0` before running npm commands.

## Architecture

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: GSAP + ScrollTrigger for scroll-reveal animations
- **Smooth scroll**: Lenis (`@studio-freight/lenis`) — configured in `SmoothScrollProvider`
- **Linting/Formatting**: Biome (replaces ESLint + Prettier)

### Key files

| Path | Purpose |
|------|---------|
| `src/lib/data.ts` | All portfolio content (name, projects, skills, etc.) |
| `src/components/providers/SmoothScrollProvider.tsx` | Lenis setup |
| `src/hooks/useRevealAnimation.ts` | Reusable GSAP ScrollTrigger hook |
| `src/components/sections/` | Hero, About, Projects, Skills, Contact |
| `src/components/layout/` | Header, Footer |

### Conventions

- All sections use `data-reveal` attribute on children for staggered GSAP reveals
- `"use client"` directive required for any component using GSAP/Lenis hooks
- Tailwind v4 uses `@import "tailwindcss"` in globals.css (no config file needed)
- Edit `src/lib/data.ts` to customize portfolio content

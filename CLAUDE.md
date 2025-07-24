# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev` - Start Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Create production build
- **Production**: `npm start` - Start production server (requires build first)
- **Lint**: `npm run lint` - Run ESLint with Next.js TypeScript rules

## Architecture

This is a consulting website for Adam Boettiger (Fractional CMO) built with:

**Tech Stack:**
- Next.js 15.4.3 with App Router architecture
- TypeScript with strict mode enabled
- Tailwind CSS 4.x for styling
- Lucide React for icons
- React 19.1.0

**Project Structure:**
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - Reusable React components
- `/public/` - Static assets (images, SVGs)

**Key Components:**
- `Navbar` - Responsive navigation with scroll-based active section detection and mobile menu
- `BackToTop` - Scroll-to-top button that appears after scrolling 300px
- `layout.tsx` - Root layout with global styles, navbar, and back-to-top button

**Styling System:**
- Global styles in `/src/app/globals.css` with Tailwind directives
- PostCSS configuration uses `@tailwindcss/postcss` plugin (not the deprecated `tailwindcss` plugin)
- Tailwind content paths configured for `/src/app/**/*.{js,ts,jsx,tsx}` and `/src/components/**/*.{js,ts,jsx,tsx}`

**Page Structure:**
The main page (`page.tsx`) is a single-page application with sections:
- Hero section with name and tagline
- Services section listing GTM strategy, demand generation, etc.
- About section with experience summary
- Contact section with email and LinkedIn links

**Important Notes:**
- Uses TypeScript path aliases: `@/*` maps to `./src/*`
- Client components use `'use client'` directive for interactivity
- Mobile-responsive design with responsive Tailwind classes
- Smooth scrolling navigation between sections
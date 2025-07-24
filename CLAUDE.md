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
- Tailwind CSS 3.4.17 for styling (downgraded from v4 for production compatibility)
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
- PostCSS configuration uses standard `tailwindcss` plugin (v3 compatible)
- Tailwind content paths configured for `/src/app/**/*.{js,ts,jsx,tsx}` and `/src/components/**/*.{js,ts,jsx,tsx}`
- Includes safelist of essential classes to ensure production builds generate all necessary CSS

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

## Deployment & Caching

**Vercel CDN Cache Busting:**
When developing on production, Vercel's CDN may serve cached CSS files that don't reflect recent changes. If Tailwind styles aren't appearing:

1. **Force new deployment**: Use `vercel deploy --prod` to create a new deployment with fresh CSS hashes
2. **Check CSS filename**: Each deployment generates CSS files with unique hashes (e.g., `ef46db3751d8e999.css`)
3. **Verify CSS content**: Empty CSS files indicate caching issues - new deployments should have full Tailwind CSS
4. **Alternative**: Push an empty commit (`git commit --allow-empty -m "Cache bust"`) to trigger auto-deployment

The safelist in `tailwind.config.js` ensures all essential classes are always included in production builds.
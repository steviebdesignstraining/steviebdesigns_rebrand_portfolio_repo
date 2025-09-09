# Steviebdesigns Portfolio

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`

## Tech

- Next.js (App Router), TypeScript, TailwindCSS
- Dark/Light: next-themes
- Animations: framer-motion (ready to use)

## Structure

- `src/app/page.tsx`: Home (sections + anchors)
- `src/app/blog/page.tsx`: Blog placeholder (WordPress REST to integrate)
- `public/logo/*`: Logo assets

## WordPress API Setup

1. Copy `env.example` to `.env.local`
2. Set `NEXT_PUBLIC_WP_API_URL` to your WordPress REST API endpoint
3. Restart dev server to load posts and filters
4. Blog page supports category/tag filtering via URL params

Example:
```bash
cp env.example .env.local
# Edit .env.local with your WordPress URL
npm run dev
```

## Deployment

- Recommended: Vercel. Push repo and import project.

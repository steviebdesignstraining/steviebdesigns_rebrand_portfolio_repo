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

## WordPress API (to wire up)

1. Set `NEXT_PUBLIC_WP_API_URL` in `.env.local`, e.g. `https://your-wp-site.com/wp-json/wp/v2`
2. Fetch posts in `src/app/blog/page.tsx` with Next.js `fetch()` and display
3. Add filters for categories/tags as needed

## Deployment

- Recommended: Vercel. Push repo and import project.

# Steviebdesigns Portfolio

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`

## Tech

- Next.js 15 (App Router), TypeScript, TailwindCSS
- Dark/Light: next-themes
- Animations: framer-motion
- SEO: Sitemap, robots.txt, meta tags
- Icons: Dynamic favicon and app icons
- Error Handling: Custom 404/500 pages

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

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Set environment variables:
   - `NEXT_PUBLIC_WP_API_URL` (your WordPress API endpoint)
4. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm run start
```

### Environment Variables

Copy `env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_WP_API_URL`: WordPress REST API endpoint

### Performance

- Static generation for optimal performance
- Image optimization with Next.js
- Automatic code splitting
- Edge caching for assets

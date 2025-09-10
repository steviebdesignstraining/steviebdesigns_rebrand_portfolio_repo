# 🎨 Steviebdesigns Portfolio

A modern, professional portfolio website built with Next.js 15, TypeScript, and TailwindCSS. Features dark/light theme, interactive gallery, WordPress blog integration, and smooth animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📋 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - TypeScript validation
- `npm run test:setup` - Comprehensive setup test
- `npm run test:all` - Run all tests
- `npm run clean` - Clean build artifacts

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

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
cp env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_WP_API_URL` - WordPress REST API endpoint
- `NEXT_PUBLIC_SITE_URL` - Your production domain

Optional variables:
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID

### WordPress Integration

1. Set up WordPress site with REST API enabled
2. Add `NEXT_PUBLIC_WP_API_URL` to `.env.local`
3. Restart dev server to load posts and filters
4. Blog page supports category/tag filtering via URL params

Example:
```bash
# .env.local
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://steviebdesigns.co.uk
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Set environment variables:
   - `NEXT_PUBLIC_WP_API_URL` (your WordPress API endpoint)
   - `NEXT_PUBLIC_SITE_URL` (your production domain)
4. Deploy automatically on every push

### Other Platforms

- **Netlify**: Static site hosting
- **Railway**: Full-stack deployment
- **Self-hosted**: Node.js server

### Manual Deployment

```bash
npm run build
npm run start
```

## ✨ Features

- **Modern Design** - Clean, professional UI with smooth animations
- **Dark/Light Theme** - Animated backgrounds and smooth transitions
- **Responsive Layout** - Mobile-first design with hamburger menu
- **Interactive Gallery** - Portfolio showcase with lightbox
- **Experience Timeline** - Professional work history
- **WordPress Blog** - Dynamic content management
- **Contact Form** - Validated with spam protection
- **SEO Optimized** - Sitemap, robots.txt, meta tags
- **Analytics Ready** - Google Analytics integration
- **Error Handling** - Custom 404/500 pages
- **Performance** - Static generation, code splitting
- **Security** - Headers, validation, CSRF protection

## 📊 Performance

- **Bundle Size**: ~185kB first load
- **Build Time**: ~2-4 seconds
- **Static Generation**: Pre-rendered pages
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic optimization
- **Edge Caching**: Asset optimization

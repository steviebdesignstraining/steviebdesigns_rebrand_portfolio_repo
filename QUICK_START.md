# 🚀 Quick Start Guide - Steviebdesigns Portfolio

## ⚡ Get Started in 5 Minutes

### 1. Install Dependencies
```bash
cd web
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### 3. Configure Environment (Optional)
```bash
cp env.example .env.local
# Edit .env.local with your WordPress API URL
```

### 4. Build for Production
```bash
npm run build
npm run start
```

## 🎯 What You'll See

- **Home Page** - Professional hero section with your branding
- **About** - Your professional summary and expertise
- **Gallery** - Interactive portfolio showcase (placeholder images)
- **Services** - Animated service cards
- **Experience** - Timeline with work history
- **Blog** - WordPress integration (when configured)
- **Contact** - Validated contact form

## 🔧 Quick Customizations

### Update Your Content
1. **Portfolio Items** - Edit `src/components/Gallery.tsx`
2. **Experience** - Modify `src/components/ExperienceTimeline.tsx`
3. **About Section** - Update `src/app/page.tsx`
4. **Services** - Edit service cards in `src/app/page.tsx`

### Replace Images
- Add your portfolio images to `public/logo/`
- Update image paths in `src/components/Gallery.tsx`

### Configure WordPress Blog
1. Set up WordPress site with REST API
2. Add `NEXT_PUBLIC_WP_API_URL` to `.env.local`
3. Restart dev server

## 🚀 Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables
   - Deploy automatically

## 📱 Test Your Portfolio

- **Desktop** - Full responsive design
- **Mobile** - Hamburger menu and touch interactions
- **Dark/Light Theme** - Toggle in top navigation
- **Gallery** - Click images to open lightbox
- **Contact Form** - Test form validation
- **Blog** - WordPress integration (when configured)

## 🎨 Customize Styling

- **Colors** - Edit `tailwind.config.ts`
- **Fonts** - Update in `src/app/layout.tsx`
- **Animations** - Modify Framer Motion settings
- **Theme** - Customize dark/light mode colors

## 🔍 Troubleshooting

### Common Issues
- **Build Errors** - Run `npm run test:all`
- **TypeScript Errors** - Run `npm run type-check`
- **Styling Issues** - Check `tailwind.config.ts`

### Get Help
- Check `DEPLOYMENT.md` for detailed instructions
- Review `PROJECT_SUMMARY.md` for complete documentation
- Run `npm run test:setup` for comprehensive validation

## ✅ Success!

Your portfolio is now ready! It features:
- Modern, professional design
- Smooth animations and interactions
- Mobile-responsive layout
- WordPress blog integration
- SEO optimization
- Performance optimization

**Next Steps:**
1. Customize content with your actual work
2. Set up WordPress for blog functionality
3. Deploy to your preferred platform
4. Share your professional portfolio!

---

*Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion*

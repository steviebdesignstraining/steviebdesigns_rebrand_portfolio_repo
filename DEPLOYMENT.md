# 🚀 Steviebdesigns Portfolio - Deployment Guide

## ✅ Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Copy `web/env.example` to `web/.env.local`
- [ ] Set `NEXT_PUBLIC_WP_API_URL` to your WordPress REST API endpoint
- [ ] Test locally with `npm run dev`

### 2. Content Customization
- [ ] Replace gallery placeholder images with your portfolio items
- [ ] Update experience timeline with your actual work history
- [ ] Customize services section with your offerings
- [ ] Update social media links in footer
- [ ] Add your professional photo to About section

### 3. WordPress Integration (Optional)
- [ ] Set up WordPress site with REST API enabled
- [ ] Create blog posts with featured images
- [ ] Test blog page with your WordPress URL
- [ ] Configure categories and tags

### 4. Testing
- [ ] Run `npm run build` successfully
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Check dark/light theme toggle
- [ ] Test contact form functionality
- [ ] Validate gallery lightbox

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables:
     - `NEXT_PUBLIC_WP_API_URL`: Your WordPress API URL
   - Deploy automatically

3. **Custom Domain (Optional):**
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Environment Variables:** Same as Vercel

### Option 3: Self-Hosted

1. **Build the project:**
   ```bash
   npm run build
   npm run start
   ```

2. **Use PM2 for production:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   ```

## 🔧 Production Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Preview production build locally
npm run preview

# Lint and fix code
npm run lint:fix

# Type checking
npm run type-check

# Clean build artifacts
npm run clean
```

## 📊 Performance Optimization

- ✅ Static generation for optimal performance
- ✅ Image optimization with Next.js
- ✅ Automatic code splitting
- ✅ Edge caching for assets
- ✅ Security headers configured
- ✅ Mobile-first responsive design

## 🔒 Security Features

- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ Clickjacking protection
- ✅ MIME type sniffing protection
- ✅ Contact form honeypot protection

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🎨 Features Included

- ✅ Dark/Light theme with smooth transitions
- ✅ Animated background (day/night)
- ✅ Responsive mobile menu
- ✅ Interactive gallery with lightbox
- ✅ Professional experience timeline
- ✅ WordPress blog integration
- ✅ Contact form with validation
- ✅ Social media integration
- ✅ SEO optimized
- ✅ Accessibility compliant

## 🆘 Troubleshooting

### Build Issues
```bash
# Clean and rebuild
npm run clean
npm run build
```

### TypeScript Errors
```bash
# Check types
npm run type-check
```

### WordPress API Issues
- Verify your WordPress site is publicly accessible
- Check that REST API is enabled
- Ensure CORS is configured if needed

## 📞 Support

For deployment issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Vercel deployment guide](https://vercel.com/docs)
- Contact: hello@steviebdesigns.co.uk

---

**Ready to deploy!** 🎉

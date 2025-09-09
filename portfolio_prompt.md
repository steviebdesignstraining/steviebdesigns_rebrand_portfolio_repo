# Online Portfolio for **Steviebdesigns**

## 📌 Project Overview  
The objective is to design and develop a **modern, visually appealing, two-page portfolio website** for **Stephen Bennett (Steviebdesigns)**.  
The site should highlight **professional expertise, services, and experience**, while integrating a **dynamic blog system** for ongoing content.  

The website should reflect **creativity, innovation, and professionalism**, with smooth animations and an engaging user experience.  

This project will reuse and adapt content from the **existing portfolio** ([www.steviebdesigns.co.uk](http://www.steviebdesigns.co.uk)) and Stephen’s **CV**, while introducing a **refined design system and new branding (logo provided)**.

---

## 🛠 Tech Stack  
- **Frontend Framework:** Next.js (latest stable version)  
- **Language:** TypeScript  
- **Styling:** TailwindCSS (preferred) or Styled Components  
- **CMS:** WordPress (for blog management via REST API)  
- **Animations:** Framer Motion (or equivalent animation library)  
- **Deployment:** Vercel / Netlify (to be confirmed)  

---

## 📄 Site Structure  

### **Page 1: Home Page (scroll-based layout)**  

**Navigation Bar (Sticky + Responsive)**  
- **Menu Links:**  
  - Home  
  - About Me  
  - Gallery  
  - Services  
  - Experience  
  - Blog  
  - Contact  
  - Dark/Light Toggle  
- **Behavior:**  
  - Smooth scrolling with animated transitions.  
  - Hamburger menu for mobile/tablet.  
  - Navigation highlights the active section.  

---

#### **Hero Section (Landing)**  
- Prominent display of the **Steviebdesigns logo** (new branding).  
- Headline & tagline (crafted from CV and portfolio content).  
- Background animation synced with **Day/Night theme toggle**.  
- Optional: animated call-to-action button linking to “About Me”.  

---

#### **About Me**  
- **Professional Summary** (adapted from CV):  
  > Detail-oriented and innovative QA Engineer with over 10 years of hands-on experience in both manual and automated software testing across mobile and web platforms. Adept at designing robust test strategies, implementing CI/CD pipelines, and developing scalable automation frameworks using tools such as Cypress, Playwright, Maestro, and Selenium. Proven ability to lead QA initiatives, introduce modern testing practices, and collaborate cross-functionally to ensure high-quality software delivery. Skilled in exploratory, regression, and API testing, with a strong grasp of tools like Postman, Swagger, GitHub Actions, and Azure DevOps. Holds a BSc in Multimedia and Internet Technology and continuously advancing skills in frontend development and AI-driven QA. Passionate about improving testing processes within agile environments and delivering software that exceeds user expectations.  
- Portrait or professional image.  
- **Gallery Section:**  
  - Grid-based portfolio showcase.  
  - Images and case studies taken from existing portfolio.  
  - Expandable lightbox functionality.  

---

#### **Services**  
Display as **animated service cards** with icons:  
- QA Services (manual & automated testing, frameworks, CI/CD).  
- Application Development.  
- Digital & Web Strategy.  
- Prompt Engineering.  
- AI Integration Strategy.  

Each service card should include:  
- Icon/visual representation.  
- Short description.  
- Hover animations for interactivity.  

---

#### **Experience**  
- **Timeline or card-based layout.**  
- Showcase:  
  - Employment history.  
  - Core skills.  
  - Automation tools (Cypress, Playwright, Maestro, Selenium).  
  - Manual testing expertise.  
  - API testing experience (Postman, Swagger).  
- Highlight **leadership roles** and **QA strategy contributions**.  

---

#### **Contact**  
- Contact form (fields: Name, Email, Message, Captcha).  
- Success/confirmation message with subtle animation.  
- Footer with:  
  - Social media links (LinkedIn, GitHub, etc.).  
  - Copyright notice.  

---

### **Page 2: Blog Page (API-driven)**  
- Powered by **WordPress CMS** via API integration.  
- Blog posts displayed in a **carousel grid layout**.  

**Post Cards include:**  
- Featured image.  
- Title.  
- Publish date (newest first).  
- Short excerpt.  
- Click → full blog post page (optional, or external WordPress link).  

**Additional Features:**  
- **Filter controls** for categories/tags.  
- **Responsive grid** (mobile: 1 column, tablet: 2 columns, desktop: 3–4 columns).  
- Smooth animations on hover/click.  

---

## ✨ Special Features  

### **Dark/Light Mode Toggle**  
- **Light Mode:**  
  - Background animates from **dawn → day → sun glowing effect**.  
- **Dark Mode:**  
  - Background animates from **dusk → night → stars twinkling**.  
- Transition should be smooth and playful (using Framer Motion).  

---

### **Animations & Interactivity**  
- Section transitions triggered on scroll.  
- Subtle hover animations on gallery and blog items.  
- Animated hamburger menu (open/close).  
- Parallax or dynamic backgrounds where appropriate.  

---

## 📦 Deliverables  
1. **Next.js + TypeScript Website**  
   - Fully functional, with clean code and reusable components.  
2. **WordPress Setup**  
   - Configured as CMS.  
   - Blog content accessible via REST API.  
3. **Responsive Design**  
   - Optimized for desktop, tablet, and mobile.  
4. **Deployment**  
   - Configured for hosting (Vercel, Netlify, or specified platform).  
5. **Documentation**  
   - Setup and deployment guide.  
   - Instructions for updating content via WordPress.  

---

## 🖼 Assets & Content  
- **Logo:** Provided (new Steviebdesigns branding).  
- **Content:** Text, images, and videos adapted from existing portfolio + CV.  
- **Color Palette & Typography:**  
  - Suggested to match branding.  
  - Must be consistent across all sections.  

---

## ✅ Success Criteria  
- Website is **visually engaging**, with professional animations.  
- All sections are **functional, scroll-linked, and responsive**.  
- Blog posts dynamically load from **WordPress API**.  
- Contact form works with Captcha validation.  
- Dark/Light toggle delivers **seamless animated transitions**.  
- Site is **deployment-ready** and easy to update.  

---

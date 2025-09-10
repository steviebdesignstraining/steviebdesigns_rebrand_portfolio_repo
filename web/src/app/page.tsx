import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import AnimatedBackground from "@/components/AnimatedBackground";
import { MotionDiv } from "@/components/motion";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <header className="sticky top-0 z-40 backdrop-blur bg-background border-b border-black/5 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo/steviebdesigns Logo Symbol.png" alt="Steviebdesigns" width={36} height={36} />
            <span className="font-semibold tracking-tight">Steviebdesigns</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#home" className="hover:opacity-80">Home</Link>
            <Link href="#about" className="hover:opacity-80">About Me</Link>
            <Link href="#gallery" className="hover:opacity-80">Gallery</Link>
            <Link href="#services" className="hover:opacity-80">Services</Link>
            <Link href="#experience" className="hover:opacity-80">Experience</Link>
            <Link href="/blog" className="hover:opacity-80">Blog</Link>
            <Link href="#contact" className="hover:opacity-80">Contact</Link>
            <ThemeToggle />
          </div>
          <MobileMenu />
        </nav>
      </header>

      <main className="flex-1">
        <section id="home" className="relative flex items-center justify-center text-center py-24 sm:py-36 scroll-mt-20">
          <MotionDiv className="space-y-6 px-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex justify-center">
              <Image src="/logo/steviebdesigns Main Logo.png" alt="Steviebdesigns Logo" width={360} height={160} priority />
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Creativity. Innovation. Professionalism.</h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
              QA engineering, automation, and modern web development with a focus on quality and experience.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="#about" className="px-5 py-2 rounded-md bg-foreground text-background text-sm sm:text-base hover:opacity-90">About Me</a>
              <a href="#contact" className="px-5 py-2 rounded-md border border-foreground/20 text-sm sm:text-base hover:bg-foreground/5">Contact</a>
            </div>
          </MotionDiv>
        </section>

        <MotionDiv id="about" className="max-w-5xl mx-auto px-4 py-16 scroll-mt-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-foreground/80">
            Detail-oriented and innovative QA Engineer with over 10 years of hands-on experience in both manual and automated software testing across mobile and web platforms...
          </p>
        </MotionDiv>

        <MotionDiv id="gallery" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold">Gallery</h2>
          <div className="mt-6">
            <Gallery />
          </div>
        </MotionDiv>

        <MotionDiv id="services" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold">Services</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "QA Services",
              "Application Development",
              "Digital & Web Strategy",
              "Prompt Engineering",
              "AI Integration Strategy",
            ].map((title) => (
              <div key={title} className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/[.03] transition">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-foreground/70 mt-2">Short description of {title.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv id="experience" className="max-w-5xl mx-auto px-4 py-16 scroll-mt-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
          <div className="mt-6">
            <ExperienceTimeline />
          </div>
        </MotionDiv>

        <MotionDiv id="contact" className="max-w-3xl mx-auto px-4 py-16 scroll-mt-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
          <ContactForm />
        </MotionDiv>
      </main>

      <footer className="border-t border-foreground/10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/logo/steviebdesigns Logo Symbol.png" alt="Steviebdesigns" width={32} height={32} />
                <span className="font-semibold">Steviebdesigns</span>
              </div>
              <p className="text-sm text-foreground/70">
                QA Engineering, Automation, and Modern Web Development
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#about" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">About</Link>
                <Link href="#services" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Services</Link>
                <Link href="#experience" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Experience</Link>
                <Link href="/blog" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Blog</Link>
                <Link href="#contact" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/stephen-bennett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/stephenbennett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:hello@steviebdesigns.co.uk"
                  className="p-2 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-sm text-foreground/70">
            © {new Date().getFullYear()} Steviebdesigns. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

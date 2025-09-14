import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import AnimatedBackground from "@/components/AnimatedBackground";
import { MotionDiv } from "@/components/motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      
      {/* Top Navigation - Same as Homepage */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background border-b border-black/5 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo/steviebdesigns Logo Symbol.png" alt="Steviebdesigns" width={36} height={36} />
            <span className="font-semibold tracking-tight">Steviebdesigns</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#home" className="hover:opacity-80">Home</Link>
            <Link href="/#about" className="hover:opacity-80">About Me</Link>
            <Link href="/#gallery" className="hover:opacity-80">Gallery</Link>
            <Link href="/#services" className="hover:opacity-80">Services</Link>
            <Link href="/#experience" className="hover:opacity-80">Experience</Link>
            <Link href="/#education" className="hover:opacity-80">Education</Link>
            <Link href="/#contact" className="hover:opacity-80">Contact</Link>
            <ThemeToggle />
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <MotionDiv 
          className="text-center space-y-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image 
              src="/logo/steviebdesigns Logo Symbol.png" 
              alt="Steviebdesigns" 
              width={100} 
              height={100}
              className="opacity-80"
            />
          </div>
          
          {/* 404 Error */}
          <div className="space-y-4">
            <h1 className="text-8xl sm:text-9xl font-bold text-foreground/10">404</h1>
            <h2 className="text-3xl sm:text-4xl font-semibold">Page Not Found</h2>
            <p className="text-lg text-foreground/70 max-w-lg mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for seems to have wandered off into the digital void. 
              Don&apos;t worry though - even the best QA engineers encounter bugs from time to time!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="px-8 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              🏠 Go Home
            </Link>
            <Link 
              href="/#contact" 
              className="px-8 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors font-medium"
            >
              💬 Contact Me
            </Link>
          </div>

          {/* Additional Navigation */}
          <div className="pt-8">
            <p className="text-sm text-foreground/50 mb-4">Or explore these sections:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/#about" className="px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors">
                About Me
              </Link>
              <Link href="/#services" className="px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors">
                Services
              </Link>
              <Link href="/#gallery" className="px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors">
                Gallery
              </Link>
              <Link href="/#experience" className="px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors">
                Experience
              </Link>
            </div>
          </div>

          {/* Footer Link */}
          <div className="pt-8 text-sm text-foreground/50">
            <Link href="/" className="hover:text-foreground/70 transition-colors flex items-center justify-center gap-2">
              <span>←</span>
              <span>Back to Steviebdesigns Portfolio</span>
            </Link>
          </div>
        </MotionDiv>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-foreground/60">
          <p>&copy; 2024 Steviebdesigns. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

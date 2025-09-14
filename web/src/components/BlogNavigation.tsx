"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function BlogNavigation() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image src="/logo/steviebdesigns Without Slogan.png" alt="Steviebdesigns" width={140} height={36} className="h-9 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#home" className="hover:opacity-80">Home</Link>
          <Link href="/#about" className="hover:opacity-80">About Me</Link>
          <Link href="/#gallery" className="hover:opacity-80">Gallery</Link>
          <Link href="/#services" className="hover:opacity-80">Services</Link>
          <Link href="/#experience" className="hover:opacity-80">Experience</Link>
          <Link href="/#education" className="hover:opacity-80">Education</Link>
          <span className="text-foreground/60">Blog</span>
          <Link href="/#contact" className="hover:opacity-80">Contact</Link>
          <ThemeToggle />
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="/" 
            className="px-4 py-2 rounded-md border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
          {/* Exit button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col items-center gap-6 text-lg">
            <Link href="#home" onClick={toggleMenu}>Home</Link>
            <Link href="#about" onClick={toggleMenu}>About Me</Link>
            <Link href="#gallery" onClick={toggleMenu}>Gallery</Link>
            <Link href="#services" onClick={toggleMenu}>Services</Link>
            <Link href="#experience" onClick={toggleMenu}>Experience</Link>
            <Link href="#education" onClick={toggleMenu}>Education</Link>
            <Link href="#contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

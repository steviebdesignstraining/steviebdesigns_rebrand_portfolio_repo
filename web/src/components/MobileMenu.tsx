"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-white focus:outline-none"
      >
        <Menu size={28} />
      </button>

      {/* Full Page Black Background Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-background fixed inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Full Page Overlay Navigation */}
      <AnimatePresence>
        {open && (
          <>
            {/* Main Content Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
              onClick={() => setOpen(false)}
            />
            
            {/* Blur Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 flex flex-col w-full h-full"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
              onClick={() => setOpen(false)}
            >
            {/* Navigation Header with Logo and Close Button */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between px-4 py-3 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo */}
              <div className="flex items-center">
                <Image 
                  src="/logo/steviebdesigns Without Slogan.png" 
                  alt="Steviebdesigns" 
                  width={140} 
                  height={36} 
                  className="h-9 w-auto" 
                />
              </div>
              
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className="p-2 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </motion.div>

            {/* Navigation Items */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex-1 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-8 text-white text-2xl text-center bg-black">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setOpen(false)}
                      className="block py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Small Icon at Bottom */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-center pb-8"
            >
              <div className="w-6 h-6 border border-dotted rounded-full flex items-center justify-center text-white opacity-70">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

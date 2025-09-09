"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

// Placeholder gallery data - replace with your actual portfolio items
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "QA Automation Framework",
    description: "Comprehensive testing framework built with Cypress and Playwright",
    image: "/logo/steviebdesigns Main Logo.png",
    category: "Development"
  },
  {
    id: "2", 
    title: "Mobile Testing Suite",
    description: "Cross-platform mobile testing with Maestro and Appium",
    image: "/logo/steviebdesigns Logo Symbol.png",
    category: "QA"
  },
  {
    id: "3",
    title: "CI/CD Pipeline",
    description: "Automated testing pipeline with GitHub Actions",
    image: "/logo/steviebdesigns Black Logo.png",
    category: "DevOps"
  },
  {
    id: "4",
    title: "API Testing Strategy",
    description: "Comprehensive API testing with Postman and Swagger",
    image: "/logo/steviebdesigns White logo.png",
    category: "QA"
  },
  {
    id: "5",
    title: "Performance Testing",
    description: "Load testing and performance optimization",
    image: "/logo/steviebdesigns Inverted Color.png",
    category: "QA"
  },
  {
    id: "6",
    title: "Web Application",
    description: "Modern web application with React and TypeScript",
    image: "/logo/steviebdesigns Without Slogan.png",
    category: "Development"
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];
  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="space-y-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === category
                ? "bg-foreground text-background"
                : "bg-foreground/10 text-foreground hover:bg-foreground/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-video rounded-lg bg-foreground/5 overflow-hidden border border-foreground/10 group-hover:border-foreground/20 transition-colors">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={225}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-medium group-hover:text-foreground/80 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 mt-1">
                {item.description}
              </p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-foreground/10 text-foreground/70 rounded">
                {item.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={800}
                  height={450}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Close lightbox"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{selectedItem.title}</h2>
                <p className="text-foreground/80 mb-4">{selectedItem.description}</p>
                <span className="inline-block px-3 py-1 text-sm bg-foreground/10 text-foreground/70 rounded-full">
                  {selectedItem.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

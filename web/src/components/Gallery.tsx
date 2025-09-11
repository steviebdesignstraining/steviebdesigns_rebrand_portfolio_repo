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
  type: "image" | "video";
  videoUrl?: string;
};

// Updated gallery data with design images and QA automation videos
const galleryItems: GalleryItem[] = [
  // QA Automation Videos
  {
    id: "qa1",
    title: "Playwright with TypeScript",
    description: "High-level automated testing showcasing TypeScript integration with Playwright.",
    image: "https://i.vimeocdn.com/video/1004013752-dummy-thumbnail.jpg",
    category: "QA Automation",
    type: "video",
    videoUrl: "https://vimeo.com/1004013752/63a102ec88"
  },
  {
    id: "qa2",
    title: "WebdriverIO with Appium",
    description: "Mobile automation testing combining WebdriverIO and Appium for cross-platform testing.",
    image: "https://i.vimeocdn.com/video/866884683-dummy-thumbnail.jpg",
    category: "QA Automation",
    type: "video",
    videoUrl: "https://vimeo.com/866884683"
  },
  {
    id: "qa3",
    title: "Cypress with Cucumber",
    description: "Demonstrating scalable BDD-style test automation using Cypress and Cucumber.",
    image: "https://i.vimeocdn.com/video/827256682-dummy-thumbnail.jpg",
    category: "QA Automation",
    type: "video",
    videoUrl: "https://vimeo.com/827256682"
  },
  {
    id: "qa4",
    title: "Pytest with Selenium",
    description: "Demonstrating Python-based test automation using Pytest and Selenium.",
    image: "https://i.vimeocdn.com/video/1045752431-dummy-thumbnail.jpg",
    category: "QA Automation",
    type: "video",
    videoUrl: "https://vimeo.com/1045752431/bbfaac50fb"
  },
  // Design Images
  {
    id: "design1",
    title: "TKB Logo Design",
    description: "Professional logo design with metallic finishes and 3D effects for real estate branding.",
    image: "/Design1.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design2",
    title: "TKB Relocations Branding",
    description: "Complete branding package for relocation services with globe and house iconography.",
    image: "/Design2.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design3",
    title: "BlackBerry Advertisement",
    description: "Product advertisement design showcasing mobile technology and connectivity.",
    image: "/Design3.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design4",
    title: "Event Poster Design",
    description: "Vibrant event poster with 3D typography and dynamic lighting effects.",
    image: "/Design4.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design5",
    title: "Portfolio Showcase",
    description: "Professional portfolio layout with post-apocalyptic theme and industrial aesthetics.",
    image: "/Design5.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design6",
    title: "Artist Promotion",
    description: "Ethereal promotional design with light effects and flowing typography.",
    image: "/Design6.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design7",
    title: "Professional Portrait",
    description: "Sophisticated portrait photography with dramatic lighting and composition.",
    image: "/Design7.jpg",
    category: "Designs",
    type: "image"
  },
  {
    id: "design8",
    title: "Creative Headshot",
    description: "Modern professional headshot with contemporary styling and lighting.",
    image: "/Design7.png",
    category: "Designs",
    type: "image"
  },
  // Development Placeholders
  {
    id: "dev1",
    title: "Modern Web Application",
    description: "React-based web application with TypeScript and modern UI components.",
    image: "/logo/steviebdesigns Main Logo.png",
    category: "Development",
    type: "image"
  },
  {
    id: "dev2",
    title: "Mobile App Development",
    description: "Cross-platform mobile application with React Native and native integrations.",
    image: "/logo/steviebdesigns Logo Symbol.png",
    category: "Development",
    type: "image"
  },
  {
    id: "dev3",
    title: "API Development",
    description: "RESTful API development with Node.js and comprehensive documentation.",
    image: "/logo/steviebdesigns Black Logo.png",
    category: "Development",
    type: "image"
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Designs", "QA Automation", "Development"];
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
            <div className="aspect-video rounded-lg bg-foreground/5 overflow-hidden border border-foreground/10 group-hover:border-foreground/20 transition-colors relative">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={225}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
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
                {selectedItem.type === "video" ? (
                  <div className="w-full h-[60vh] flex items-center justify-center bg-black">
                    <a
                      href={selectedItem.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </a>
                    <p className="absolute bottom-4 left-4 text-white text-sm">
                      Click to watch on Vimeo
                    </p>
                  </div>
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={800}
                    height={450}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                )}
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
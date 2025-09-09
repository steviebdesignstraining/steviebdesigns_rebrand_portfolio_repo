"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Light mode: Dawn to day gradient with sun */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: currentTheme === "dark" ? 0 : 1,
          background: currentTheme === "dark" 
            ? "linear-gradient(to bottom right, #1e1b4b, #312e81, #1e3a8a)" 
            : "linear-gradient(to bottom right, #fed7aa, #fef3c7, #dbeafe)"
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      
      {/* Dark mode: Dusk to night gradient with stars */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: currentTheme === "dark" ? 1 : 0,
          background: currentTheme === "dark"
            ? "linear-gradient(to bottom right, #1e1b4b, #312e81, #1e3a8a)"
            : "linear-gradient(to bottom right, #fed7aa, #fef3c7, #dbeafe)"
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Sun for light mode */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: currentTheme === "dark" ? 0 : 1,
          scale: currentTheme === "dark" ? 0 : 1,
          boxShadow: currentTheme === "dark" 
            ? "0 0 0 0 rgba(251, 191, 36, 0)" 
            : "0 0 20px 10px rgba(251, 191, 36, 0.3)"
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Stars for dark mode */}
      {currentTheme === "dark" && (
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              currentTheme === "dark" ? "bg-white/20" : "bg-yellow-400/30"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

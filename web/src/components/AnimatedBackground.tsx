"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Deterministic pseudo-random based on index so SSR and client produce the same output
function pseudoRandom(index: number, salt = 1) {
  const x = Math.sin(index * (12.9898 + salt)) * 43758.5453;
  return x - Math.floor(x);
}

export default function AnimatedBackground() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const stars = Array.from({ length: 20 }).map((_, i) => ({
    left: `${(pseudoRandom(i, 1) * 100).toFixed(6)}%`,
    top: `${(pseudoRandom(i, 2) * 100).toFixed(6)}%`,
    delay: +(pseudoRandom(i, 3) * 2).toFixed(3),
  }));

  const particles = Array.from({ length: 6 }).map((_, i) => ({
    left: `${(pseudoRandom(i + 20, 4) * 100).toFixed(6)}%`,
    top: `${(pseudoRandom(i + 20, 5) * 100).toFixed(6)}%`,
    duration: +(4 + pseudoRandom(i + 20, 6) * 2).toFixed(3),
    delay: +(pseudoRandom(i + 20, 7) * 2).toFixed(3),
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Light mode gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100 transition-opacity duration-1000"
        style={{ opacity: currentTheme === "dark" ? 0 : 1 }}
      />

      {/* Dark mode gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 transition-opacity duration-1000"
        style={{ opacity: currentTheme === "dark" ? 1 : 0 }}
      />

      {/* Sun for light mode */}
      <div
        aria-hidden
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full shadow-lg transition-all duration-1000"
        style={{ opacity: currentTheme === "dark" ? 0 : 1, transform: currentTheme === "dark" ? "scale(0)" : "scale(1)" }}
      />

      {/* Stars (deterministic positions to avoid hydration mismatches) */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s`, opacity: currentTheme === "dark" ? 0.9 : 0 }}
          />
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${currentTheme === "dark" ? "bg-white/20" : "bg-yellow-400/30"} animate-float`}
            style={{ left: p.left, top: p.top, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </div>
    </div>
  );
}

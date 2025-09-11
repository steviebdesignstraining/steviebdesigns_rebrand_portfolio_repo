"use client";

import Image from "next/image";
import { MotionDiv } from "./motion";

export default function PolaroidStack() {
  return (
    <div className="relative flex justify-center items-center">
      {/* First polaroid - slightly behind and rotated */}
      <MotionDiv
        initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
        animate={{ opacity: 1, rotate: -8, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="bg-white p-4 pb-12 shadow-lg rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/Stephen01.jpg"
            alt="Stephen Bennett - Professional Photo"
            width={200}
            height={240}
            className="object-cover rounded-sm"
          />
        </div>
      </MotionDiv>

      {/* Second polaroid - in front and slightly rotated */}
      <MotionDiv
        initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
        animate={{ opacity: 1, rotate: 8, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute z-20 -ml-4 mt-4"
      >
        <div className="bg-white p-4 pb-12 shadow-lg rounded-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/Stephen02.jpg"
            alt="Stephen Bennett - Professional Photo 2"
            width={200}
            height={240}
            className="object-cover rounded-sm"
          />
        </div>
      </MotionDiv>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl scale-150 opacity-30" />
    </div>
  );
}

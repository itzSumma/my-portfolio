"use client";
import React from "react";
import { motion } from "framer-motion";

const tech = [
  "NEXT.JS", "GSAP", "FRAMER MOTION", "TAILWIND CSS", "REACT", "TYPESCRIPT", "THREE.JS", "WEBGL", "LENIS", "NODE.JS"
];

export default function TechMarquee() {
  return (
    <div className="py-24 overflow-hidden bg-background border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 px-6"
        >
          {[...tech, ...tech].map((t, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold font-display tracking-tighter text-transparent stroke-white/20 hover:stroke-primary transition-colors cursor-default"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

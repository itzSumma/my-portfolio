"use client";
import React from "react";
import Magnetic from "./Magnetic";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-16 px-6 md:px-24 bg-background overflow-hidden border-t border-white/5">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Left: Branding & Copywriting */}
          <div className="space-y-1.5 flex flex-col items-center md:items-start">
            {/* Sharmin Sultana (Separate Block with individual hover) */}
            <div className="group/name inline-block cursor-default">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase transition-all duration-300 origin-left group-hover/name:scale-105 group-hover/name:text-primary">
                © 2026 Sharmin Sultana
              </div>
            </div>

            {/* Full Stack Developer (Separate Block with individual hover) */}
            <div className="group/role inline-block cursor-default">
              <div className="text-sm text-white/80 font-semibold tracking-tight transition-all duration-300 origin-left group-hover/role:scale-105 group-hover/role:text-white">
                Full Stack Developer
              </div>
            </div>

            <p className="text-xs text-white/40 max-w-sm transition-colors duration-300 hover:text-white/70">
             Crafting modern web applications with clean architecture and exceptional user experiences.
            </p>
          </div>

          {/* Center: Tech Stack Signature */}
          <div className="group/stack relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 border border-transparent cursor-default">
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/25 uppercase text-center transition-colors duration-300 group-hover/stack:text-white/70">
              Built with Next.js • Tailwind CSS • Framer Motion
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover/stack:via-primary/50 transition-all duration-500" />
          </div>

          {/* Right: Back to Top Action */}
          <Magnetic>
            <button
              onClick={handleBackToTop}
              className="group/btn flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all py-2"
            >
              <span className="w-6 h-[1px] bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-primary transition-all duration-300 ease-out" />
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300 ease-out">
                ↑ Back to Top
              </span>
            </button>
          </Magnetic>

        </div>
      </div>
    </footer>
  );
}
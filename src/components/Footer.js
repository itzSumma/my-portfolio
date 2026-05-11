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
    <footer className="border-t border-white/10 py-12 px-6 md:px-24 bg-black text-white/50">

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="text-center md:text-left text-sm tracking-widest uppercase">
          © 2026 Sharmin Sultana — All Rights Reserved
        </div>

        {/* Middle - Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">

          <Magnetic>
            <a
              href="https://github.com/itzSumma"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="https://www.linkedin.com/in/sultana-summa/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </Magnetic>

        </div>

        {/* Right */}
        <div className="flex flex-wrap justify-center gap-6 text-sm items-center">

          <Magnetic>
           <a
  href="tel:01874760967"
  className="hover:text-white transition-colors"
>
  WhatsApp: 01874760967
</a>
          </Magnetic>

          <Magnetic>
            <button
              onClick={handleBackToTop}
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </button>
          </Magnetic>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-8"></div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-white/30 space-y-2">

        <p>
          Built with Next.js, Tailwind CSS & MERN Stack 🚀
        </p>

        <p>
          Designed & Developed with passion 💻
        </p>

      </div>

    </footer>
  );
}
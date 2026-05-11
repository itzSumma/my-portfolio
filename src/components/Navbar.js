"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-[999] px-8 md:px-24 py-4 transition-all duration-500 flex justify-between items-center ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="text-2xl font-bold font-display tracking-tighter text-white">
        Sharmin<span className="text-primary">.</span>
      </div>

      <div className="hidden md:flex items-center space-x-12">
        {navItems.map((item, i) => (
          <Magnetic key={item.name}>
            <motion.a
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </motion.a>
          </Magnetic>
        ))}
      </div>

      <Magnetic>
        <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-primary transition-all duration-300">
          Resume
        </button>
      </Magnetic>
    </motion.nav>
  );
}

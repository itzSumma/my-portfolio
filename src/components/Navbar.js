"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Basic active state logic based on scroll
      const sections = ["home", "about", "education", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
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
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <Magnetic>
        <div className="text-2xl font-bold font-display tracking-tighter text-white cursor-pointer group">
          Sharmin<span className="text-primary group-hover:animate-pulse">.</span>
        </div>
      </Magnetic>

      <div className="hidden md:flex items-center space-x-12">
        {navItems.map((item, i) => (
          <Magnetic key={item.name}>
            <motion.a
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`text-sm font-medium transition-all relative group ${
                activeItem === item.name ? "text-primary" : "text-white/60 hover:text-white"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                activeItem === item.name ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </motion.a>
          </Magnetic>
        ))}
      </div>

      <Magnetic>
        <a 
          href="/resume" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-primary hover:text-black transition-all duration-500 shadow-lg hover:shadow-primary/20 block"
        >
          Resume
        </a>
      </Magnetic>
    </motion.nav>
  );
}

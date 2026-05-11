"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-[999] px-6 md:px-24 py-4 transition-all duration-500 flex justify-between items-center ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-6"
        }`}
      >
        <Magnetic>
          <div className="text-2xl font-bold font-display tracking-tighter text-white cursor-pointer group">
            Sharmin<span className="text-primary group-hover:animate-pulse">.</span>
          </div>
        </Magnetic>

        {/* Desktop Menu */}
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
          
          <Magnetic>
            <a 
              href="/resume" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-primary hover:text-black transition-all duration-500 shadow-lg"
            >
              Resume
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Magnetic>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Magnetic>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[998] bg-background flex flex-col items-center justify-center space-y-8 p-6 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold font-display text-white/80 hover:text-primary transition-colors tracking-tighter"
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navItems.length }}
              href="/resume" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-10 py-4 bg-primary text-black font-bold rounded-2xl text-lg shadow-lg shadow-primary/20 mt-4"
            >
              View Resume
            </motion.a>

            {/* Background Branding */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none text-6xl font-bold font-display whitespace-nowrap">
              SHARMIN.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "contact",
      ];
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
        className={`fixed top-0 w-full z-[999] px-6 md:px-24 transition-all duration-500 flex justify-between items-center ${
          scrolled
            ? "bg-background/40 backdrop-blur-2xl border-b border-white/10 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            : "bg-transparent py-6"
        }`}>
        {/* Dynamic Two-Color Logo */}
        <Magnetic>
          <a
            href="#"
            className="text-xl md:text-2xl font-bold font-display tracking-tighter cursor-pointer group flex items-center gap-1">
            <span className="text-white drop-shadow-md">Sharmin</span>
            <span className="text-primary drop-shadow-md">Sultana</span>
            <span className="text-primary group-hover:animate-pulse">.</span>
          </a>
        </Magnetic>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Magnetic key={item.name}>
              <motion.a
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`text-sm font-medium transition-all relative group py-1 ${
                  activeItem === item.name
                    ? "text-primary font-semibold"
                    : "text-white/70 hover:text-white"
                }`}>
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                    activeItem === item.name
                      ? "w-full shadow-[0_0_10px_#var(--primary)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            </Magnetic>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Magnetic>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </Magnetic>
        </div>
      </motion.nav>

      {/* Mobile Menu Glassmorphism Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[998] bg-background/80 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6 p-6 md:hidden border border-white/10">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold font-display text-white/80 hover:text-primary transition-colors tracking-tight">
                {item.name}
              </motion.a>
            ))}

            {/* Background Branding */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none text-5xl font-bold font-display whitespace-nowrap">
              SHARMIN SULTANA
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

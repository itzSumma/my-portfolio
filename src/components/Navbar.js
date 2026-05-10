"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="fixed top-0 w-full z-[999] px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-2xl font-bold font-display tracking-tighter text-white">
        Leinad.
      </div>

      <div className="hidden md:flex space-x-12">
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
        <button className="px-6 py-2 glass rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-500">
          Resume
        </button>
      </Magnetic>
    </motion.nav>
  );
}

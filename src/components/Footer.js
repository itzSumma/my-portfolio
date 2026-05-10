"use client";
import React from "react";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm font-mono tracking-widest uppercase">
      <div>
        © 2026 LEINAD — ALL RIGHTS RESERVED
      </div>
      
      <div className="flex space-x-12 mt-6 md:mt-0">
        <Magnetic><a href="#" className="hover:text-white transition-colors">BACK TO TOP</a></Magnetic>
        <Magnetic><a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a></Magnetic>
      </div>
    </footer>
  );
}

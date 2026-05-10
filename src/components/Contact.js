"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-24 bg-background">
      <div className="max-w-7xl mx-auto glass rounded-3xl p-12 md:p-24 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter text-white leading-none">
              LET'S <br />
              <span className="text-primary text-glow">CONNECT.</span>
            </h2>
            <p className="text-white/50 text-xl font-body max-w-sm">
              I am currently open to full-time opportunities, collaborations, and contract work.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:hello@leinad.dev" className="block text-2xl font-medium text-white hover:text-primary transition-colors">
                hello@leinad.dev
              </a>
              <div className="flex space-x-6">
                {["LinkedIn", "Twitter", "GitHub", "Instagram"].map((social) => (
                  <Magnetic key={social}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors uppercase text-xs font-mono tracking-widest">
                      {social}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Enter Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">Your Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Enter Email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">Your Message</label>
              <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Enter Message"></textarea>
            </div>
            <Magnetic>
              <button type="submit" className="w-full py-6 bg-primary text-black font-bold rounded-xl hover:scale-[0.98] transition-transform">
                SEND MESSAGE
              </button>
            </Magnetic>
          </form>
        </div>

        {/* Decorative circle */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}

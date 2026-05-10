"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05 } },
    animate: { transition: { staggerChildren: 0.05, delayChildren: 1 } },
  };

  const textVars = {
    initial: { y: 200, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24">
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-5xl"
      >
        <div className="overflow-hidden mb-4">
          <motion.span
            variants={textVars}
            className="block text-primary font-mono text-sm tracking-[0.3em] uppercase"
          >
            Creative Developer & UI/UX Designer
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            variants={textVars}
            className="text-[12vw] md:text-[8vw] font-bold font-display leading-[0.9] tracking-tighter text-white"
          >
            CRAFTING <br />
            <span className="text-glow text-primary">DIGITAL</span> EXPERIENCES
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 text-lg md:text-xl text-white/50 max-w-xl font-body"
        >
          Specializing in building high-performance, visually stunning web applications with cinematic motion and immersive storytelling.
        </motion.p>

        <div className="mt-12 flex space-x-6">
          <Magnetic>
            <button className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-transform">
              View Projects
            </button>
          </Magnetic>
          <Magnetic>
            <button className="px-8 py-4 glass text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-all">
              Contact Me
            </button>
          </Magnetic>
        </div>
      </motion.div>

      {/* Hero Grid Background */}
      <div className="absolute inset-0 z-[-2] opacity-20 [background-image:linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </section>
  );
}

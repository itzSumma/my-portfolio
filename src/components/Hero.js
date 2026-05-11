"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const containerVars = {
    initial: { transition: { staggerChildren: 0.1 } },
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  };

  const textVars = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-24 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="z-10"
        >
          <div className="overflow-hidden mb-2">
            <motion.span
              variants={textVars}
              className="block text-primary font-mono text-sm tracking-[0.3em] uppercase"
            >
              Frontend & MERN Stack Developer
            </motion.span>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={textVars}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] tracking-tighter text-white"
            >
              Hi, I'm <br />
              <span className="text-glow text-primary">Sharmin Sultana</span>
            </motion.h1>
          </div>

          <motion.p
            variants={textVars}
            className="text-lg md:text-xl text-white/60 max-w-lg font-body leading-relaxed"
          >
            I enjoy building modern and responsive web applications while continuously learning new technologies and improving my development skills.
          </motion.p>

          <motion.div variants={textVars} className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <button className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(70,238,221,0.4)] transition-all duration-300">
                Download Resume
              </button>
            </Magnetic>
            <Magnetic>
              <button className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all">
                Contact Me
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 group">
              <img
                src="/profile.jpeg"
                alt="Sharmin Sultana"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating Badges or Decorations */}
            <div className="absolute -top-6 -right-6 p-4 glass rounded-2xl border border-primary/30 animate-pulse">
               <span className="text-primary font-bold">MERN</span>
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl border border-primary/30">
               <span className="text-primary font-bold">UI/UX</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Grid Background */}
      <div className="absolute inset-0 z-[-2] opacity-10 [background-image:linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

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
              <a 
                href="/resume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(70,238,221,0.4)] transition-all duration-300 block"
              >
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all block"
              >
                Contact Me
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-white/5 rounded-full"
            />

            {/* Floating Particles - Client Side Only to fix hydration */}
            {isMounted && [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute w-2 h-2 bg-primary rounded-full blur-[2px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}

            {/* Main Image Wrapper */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl group">
                <img
                  src="/profile.jpeg"
                  alt="Sharmin Sultana"
                  className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Overlay details on hover */}
                <div className="absolute inset-0 flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="glass px-6 py-2 rounded-full border border-primary/30">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Developer</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-4 glass rounded-2xl border border-primary/30 shadow-xl z-20"
              >
                 <span className="text-primary font-bold text-xs uppercase">MERN</span>
              </motion.div>
              <motion.div 
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl border border-primary/30 shadow-xl z-20"
              >
                 <span className="text-primary font-bold text-xs uppercase">Next.js</span>
              </motion.div>
            </motion.div>
          </div>
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

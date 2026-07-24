"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Magnetic from "./Magnetic";
import { Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVars = {
    initial: { transition: { staggerChildren: 0.1 } },
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const textVars = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="z-10 space-y-6">
          {/* Availability Badge */}
          <motion.div
            variants={textVars}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">
              Available for Freelance & Full-Time
            </span>
          </motion.div>

          {/* Greeting & Name */}
          <div>
            <div className="overflow-hidden mb-1">
              <motion.span
                variants={textVars}
                className="block text-white/60 font-medium text-lg md:text-xl">
                Hi, I'm
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={textVars}
                className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white leading-tight">
                <span className="text-glow text-primary">Sharmin Sultana</span>{" "}
                Summa
              </motion.h1>
            </div>
          </div>

          {/* Professional Title */}
          <motion.div variants={textVars}>
            <h2 className="text-xl md:text-2xl font-semibold text-white/80 font-mono tracking-wide">
              &lt; Full Stack Developer /&gt;
            </h2>
          </motion.div>

          {/* Short Introduction */}
          <motion.p
            variants={textVars}
            className="text-base md:text-lg text-white/60 max-w-lg font-body leading-relaxed">
            I build modern web applications using React, Next.js, TypeScript,
            Node.js, Express, MongoDB, and Mongoose. Passionate about writing
            clean, maintainable code and creating user-focused digital
            experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVars}
            className="pt-2 flex flex-wrap gap-4 items-center">
            <Magnetic>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_25px_rgba(70,238,221,0.5)] transition-all duration-300 flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 hover:border-primary/40 transition-all flex items-center gap-2">
                <Download size={18} /> Download Resume
              </a>
            </Magnetic>
          </motion.div>

          {/* Professional Links */}
          <motion.div
            variants={textVars}
            className="flex items-center gap-4 pt-4">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
              Professional Links:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/itzSumma"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-2.5 glass rounded-xl border border-white/10 hover:border-primary text-white/70 hover:text-primary transition-all">
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sultana-summa/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-2.5 glass rounded-xl border border-white/10 hover:border-primary text-white/70 hover:text-primary transition-all">
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:itzSumma11@gmail.com"
                title="Email"
                className="p-2.5 glass rounded-xl border border-white/10 hover:border-primary text-white/70 hover:text-primary transition-all">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Dynamic Animated Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[460px] lg:h-[460px] flex items-center justify-center">
            {/* Dynamic Rotating Gradient Ring */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.02, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 border border-primary/10 rounded-full"
            />

            {/* Floating Particles */}
            {isMounted &&
              [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3.5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="absolute w-2.5 h-2.5 bg-primary rounded-full blur-[0.5px] shadow-[0_0_10px_rgba(70,238,221,0.8)]"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}

            {/* Main Image Wrapper with Floating & Hover Motion */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
              {/* Pulsing Background Glow */}
              <div className="absolute inset-0 bg-primary/25 blur-[90px] rounded-full animate-pulse" />

              {/* Image Frame */}
              <motion.div
                className="relative w-full h-full rounded-[32px] overflow-hidden border-2 border-primary/20 shadow-[0_0_30px_rgba(70,238,221,0.15)] group bg-slate-900"
                whileHover={{ borderColor: "rgba(70,238,221,0.6)" }}
                transition={{ duration: 0.3 }}>
                <img
                  src="/profile.jpeg"
                  alt="Sharmin Sultana Summa"
                  className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="glass px-5 py-2 rounded-full border border-primary/30 shadow-lg">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badges with Asynchronous Animation */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 px-4 py-2 glass rounded-xl border border-primary/40 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 backdrop-blur-md">
                <span className="text-primary font-bold text-xs uppercase tracking-wider">
                  Next.js
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-1/2 -left-6 -translate-y-1/2 px-4 py-2 glass rounded-xl border border-primary/40 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 backdrop-blur-md">
                <span className="text-primary font-bold text-xs uppercase tracking-wider">
                  TypeScript
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-3 -left-3 px-4 py-2 glass rounded-xl border border-primary/40 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 backdrop-blur-md">
                <span className="text-primary font-bold text-xs uppercase tracking-wider">
                  React
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-[-2] opacity-10 [background-image:linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
}

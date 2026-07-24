"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // GSAP pinning and horizontal movement only for desktop screens (>= 1024px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pin = gsap.fromTo(
          sectionRef.current,
          { translateX: 0 },
          {
            translateX: "-200vw", // For 3 projects (300vw total width wrapper, translating -200vw)
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "3000 top",
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
            },
          },
        );

        ScrollTrigger.refresh();
        return () => pin.kill();
      });
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <div id="projects" className="bg-[#090A0F] text-white overflow-x-hidden">
      {/* Section Header */}
      <div className="pt-16 pb-8 px-6 lg:text-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-2">
          Explore my recent full-stack applications
        </p>
      </div>

      <div ref={triggerRef} className="w-full">
        <div
          ref={sectionRef}
          className="flex flex-col lg:flex-row lg:h-screen lg:w-[300vw]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center relative px-6 md:px-16 py-12 lg:py-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full max-w-7xl">
                {/* Left Side: Info, Badges, Tech Stack, Challenges & Links */}
                <div
                  onWheel={(e) => {
                    const panel = e.currentTarget;
                    if (panel.scrollHeight > panel.clientHeight) {
                      e.preventDefault();
                      panel.scrollTop += e.deltaY;
                    }
                  }}
                  className="lg:col-span-7 space-y-6 lg:max-h-[85vh] lg:overflow-y-auto pr-0 lg:pr-4 scrollbar-thin">
                  {/* Header metadata */}
                  <div className="space-y-2">
                    <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">
                      Project 0{index + 1} // {project.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">
                      {project.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Badges */}
                  {project.features && (
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
                          <span className="text-cyan-400">✓</span> {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Challenges & Solutions Cards */}
                  {project.challenges && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                        Challenges & Solutions
                      </h4>
                      <div className="space-y-3">
                        {project.challenges.map((item, cIndex) => (
                          <div
                            key={cIndex}
                            className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md space-y-2 hover:border-cyan-500/30 transition-all duration-300">
                            <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                              {item.title}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                              <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/10 text-red-300/90">
                                <span className="font-semibold text-red-400 block mb-0.5">
                                  Challenge
                                </span>
                                {item.problem}
                              </div>
                              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/10 text-emerald-300/90">
                                <span className="font-semibold text-emerald-400 block mb-0.5">
                                  Solution
                                </span>
                                {item.solution}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 hover:border-cyan-500/40 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 pb-4 lg:pb-0">
                    <a
                      href={project.liveUrl ?? project.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors">
                        🌐 View Live Site
                      </motion.button>
                    </a>

                    {(project.githubUrl ?? project.githubFrontend) && (
                      <a
                        href={project.githubUrl ?? project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 hover:border-white/20 transition-all">
                          💻 Frontend Source
                        </motion.button>
                      </a>
                    )}

                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 hover:border-white/20 transition-all">
                          ⚙️ Backend Source
                        </motion.button>
                      </a>
                    )}

                    <a href={`/projects/${project.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 hover:border-white/20 transition-all">
                        View Details
                      </motion.button>
                    </a>
                  </div>
                </div>

                {/* Right Side: Modern Glassmorphism Card Preview Image */}
                <div className="lg:col-span-5 pb-8 lg:pb-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative aspect-video rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

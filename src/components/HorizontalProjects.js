"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "NEON DREAM",
    category: "Web Design",
    img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
    color: "#46eedd",
  },
  {
    title: "CYBER CORE",
    category: "Full Stack",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    color: "#00d1c1",
  },
  {
    title: "QUANTUM UI",
    category: "Product Design",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop",
    color: "#46eedd",
  },
  {
    title: "AETHER DEV",
    category: "Mobile App",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop",
    color: "#00d1c1",
  },
];

export default function HorizontalProjects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-[#050816]">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-screen w-[100vw] flex items-center justify-center relative px-8 md:px-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
                <div className="space-y-6">
                  <span className="text-primary font-mono text-sm tracking-widest uppercase">
                    Project 0{index + 1}
                  </span>
                  <h2 className="text-[8vw] md:text-[6vw] font-bold font-display tracking-tighter text-white leading-none">
                    {project.title}
                  </h2>
                  <p className="text-white/50 text-lg max-w-md font-body">
                    A premium digital experience built with cutting-edge technologies to deliver unparalleled performance and visual impact.
                  </p>
                  <button className="px-8 py-4 glass text-white font-bold rounded-lg border border-white/10 hover:border-primary transition-colors">
                    Case Study
                  </button>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video rounded-2xl overflow-hidden glass group cursor-pointer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

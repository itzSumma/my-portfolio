"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "DIGITOOLS",
    category: "Full Stack Development",
    img: "/digitools.png",
    description: "A comprehensive toolkit for digital creators, featuring advanced asset management and collaboration tools.",
    tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Icons", "React Toastify", "JSON Data"],
    link: "https://digitools-landing-page.netlify.app/",
  },
  {
    title: "KEEN KEEPER",
    category: "Web Application",
    img: "/keen-keeper.png",
    description: "A modern productivity app designed to help users stay focused and manage their tasks efficiently.",
    tech: ["React 19", "React Router 7", "Tailwind CSS 4", "DaisyUI", "React Toastify", "Recharts", "Vite"],
    link: "https://keen-keeper-friendzone.netlify.app/",
  },
  {
    title: "QURBANI HAT",
    category: "E-commerce Platform",
    img: "/qurbani-hat.png",
    description: "A specialized e-commerce platform for livestock trading with real-time bidding and secure payments.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Better Auth", "Google OAuth", "Vercel"],
    link: "https://qurbani-hat-main.vercel.app/",
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
        translateX: "-200vw", // Adjusted for 3 projects
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
    <div className="overflow-hidden bg-background">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-screen w-[100vw] flex items-center justify-center relative px-8 md:px-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                      Project 0{index + 1}
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white leading-none">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-white/60 text-lg md:text-xl max-w-lg font-body leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-5 py-2 rounded-xl text-xs font-bold border border-primary/20 bg-primary/5 text-primary shadow-[0_0_15px_rgba(70,238,221,0.05)] hover:bg-primary/10 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="group flex items-center space-x-4 text-white font-bold text-lg"
                    >
                      <span className="px-8 py-4 glass border border-white/10 rounded-xl group-hover:border-primary transition-colors">
                        View Project
                      </span>
                    </motion.button>
                  </a>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 group cursor-pointer shadow-2xl"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating category tag */}
                    <div className="absolute top-6 right-6 px-4 py-2 glass rounded-xl border border-white/20 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {project.category}
                    </div>
                  </motion.div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

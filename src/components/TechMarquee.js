"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiRedux, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, 
  SiFirebase, SiGit, SiGithub 
} from "react-icons/si";

const marqueeSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

export default function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden bg-background border-y border-white/5 relative">
      {/* Smooth Edge Fading Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex space-x-6 px-3"
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex items-center space-x-3 px-6 py-3 rounded-2xl glass border border-white/10 hover:border-primary/40 transition-all duration-300 group cursor-default relative overflow-hidden shadow-lg"
              >
                <div className="p-2 rounded-xl bg-background/40 border border-white/5 group-hover:border-primary/20 transition-colors">
                  <IconComponent 
                    className="text-2xl md:text-3xl transition-colors duration-300" 
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-white/80 group-hover:text-white font-medium text-base md:text-lg tracking-wide">
                  {skill.name}
                </span>
                
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit, SiGithub 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

export default function TechMarquee() {
  return (
    <section className="py-20 overflow-hidden bg-background border-y border-white/5 relative">
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex space-x-8 px-4"
        >
          {[...skills, ...skills].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center space-x-3 px-6 py-3 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all duration-300 group cursor-default"
            >
              <skill.icon 
                className="text-2xl md:text-3xl transition-colors duration-300" 
                style={{ color: skill.color }}
              />
              <span className="text-white/70 group-hover:text-white font-medium text-lg md:text-xl tracking-tight">
                {skill.name}
              </span>
              
              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

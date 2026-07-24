"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiRedux, 
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, 
  SiTailwindcss, SiGit, SiGithub 
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Development",
    subCategories: [
      {
        subtitle: "Framework",
        skills: [
          { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        ]
      },
      {
        subtitle: "Libraries & State",
        skills: [
          { name: "React", icon: SiReact, color: "#61DAFB" },
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "Redux", icon: SiRedux, color: "#764ABC" },
        ]
      },
      {
        subtitle: "Styling & UI",
        skills: [
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
          { name: "Shadcn UI", icon: SiReact, color: "#FFFFFF" },
          { name: "Framer Motion", icon: SiReact, color: "#0055FF" },
        ]
      }
    ]
  },
  {
    title: "Backend & Database",
    subCategories: [
      {
        subtitle: "Server & DB",
        skills: [
          { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
          { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "Mongoose", icon: SiMongodb, color: "#880000" },
          { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ]
      }
    ]
  },
  {
    title: "Tools & Version Control",
    subCategories: [
      {
        subtitle: "Workflow Tools",
        skills: [
          { name: "Git", icon: SiGit, color: "#F05032" },
          { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
          { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
        ]
      }
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/25"
          >
            <span className="text-xs font-mono text-primary tracking-wider uppercase">
              What I Know
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white"
          >
            My <span className="text-glow text-primary">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />

              <h3 className="text-xl font-bold font-display text-white border-b border-white/10 pb-4">
                {category.title}
              </h3>

              <div className="space-y-6 flex-grow">
                {category.subCategories.map((sub, subIndex) => (
                  <div key={subIndex} className="space-y-3">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-wider block">
                      {sub.subtitle}
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {sub.skills.map((skill, skillIndex) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all duration-300 group/item cursor-default"
                          >
                            <div className="p-2 rounded-xl bg-background/50 border border-white/5 group-hover/item:border-primary/20 transition-colors">
                              <IconComponent 
                                className="text-xl" 
                                style={{ color: skill.color }} 
                              />
                            </div>
                            <span className="text-white/80 group-hover/item:text-white font-medium text-xs md:text-sm tracking-wide">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
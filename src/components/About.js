"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const projects = [
    { name: "JS Practice Hub", link: "https://github.com/itzSumma/JS-PRACTICE-HUB" },
    { name: "React Mini Projects", link: "https://github.com/itzSumma/REACT-MINI-PROJECT" },
    { name: "Next.js Collection", link: "https://github.com/itzSumma/NEXT.JS-COLLECTIONS" },
    { name: "Node.js Playground", link: "https://github.com/itzSumma/NODE-PLAYGROUND" },
    { name: "Express & MongoDB Integration", link: "#" }
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            
            <p className="text-white/60 text-lg leading-relaxed font-body">
              I’m Sharmin Sultana, a passionate Frontend & MERN Stack Developer focused on building modern, responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-white/80 text-xl md:text-2xl font-medium leading-snug">
                I enjoy solving real-world problems through clean and efficient code. My development journey started with curiosity about how websites work, and it has grown into a strong passion for building complete web applications.
              </p>
              
              <p className="text-white/60 text-lg leading-relaxed">
                Through various projects, I’ve gained hands-on experience in React, Next.js, Node.js, Express, and MongoDB. I enjoy creating interactive UIs with smooth user experience and clean architecture.
              </p>
            </div>

            {/* Project Badges */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">Learning & Practice Projects</h3>
              <div className="flex flex-wrap gap-3">
                {projects.map((project, i) => (
                  <motion.a
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-5 py-2.5 rounded-xl glass border border-white/10 text-primary text-sm font-bold hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    {project.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="p-6 rounded-2xl glass border border-white/5 space-y-3">
                <h4 className="text-white font-bold">Creative Mindset</h4>
                <p className="text-white/50 text-sm">
                  Outside of coding, I enjoy learning new technologies, improving problem-solving skills, and exploring creative ideas.
                </p>
              </div>
              <div className="p-6 rounded-2xl glass border border-white/5 space-y-3">
                <h4 className="text-white font-bold">Current Focus</h4>
                <p className="text-white/50 text-sm">
                  Focused on becoming a strong full-stack developer by building real-world projects and sharpening backend skills.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}

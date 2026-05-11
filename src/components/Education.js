"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Link as LinkIcon } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science (BSc) in Electrical & Electronic Engineering (EEE)",
    institution: "Leading University",
    year: "2023 – Present",
    link: "https://lus.ac.bd",
    type: "Undergraduate",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bhabanipur Degree College",
    year: "2021",
    link: "#",
    type: "College",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-primary">Education</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(70,238,221,0.5)]" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer for Desktop */}
                <div className="hidden md:block w-[45%]" />

                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(70,238,221,0.8)] z-10 border-4 border-background" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="w-full md:w-[45%] glass p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-xl group relative overflow-hidden"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-white/40">
                        {edu.type}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>

                    <div className="space-y-2">
                      <p className="text-white/80 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-white/50">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary/60" />
                          {edu.year}
                        </div>
                        {edu.link !== "#" && (
                          <a 
                            href={edu.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <LinkIcon className="w-4 h-4 text-primary/60" />
                            Visit Website
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 blur-[130px] rounded-full -z-10" />
    </section>
  );
}

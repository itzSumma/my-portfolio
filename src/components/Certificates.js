"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Link as LinkIcon } from "lucide-react";

const certificatesData = [
  {
    title: "Complete Web Development Course (Batch 13)",
    institution: "Programming Hero",
    year: "2025 – 2026",
    link: "https://web.programming-hero.com/", // আপনার সার্টিফিকেট বা প্রজেক্ট লিংক এখানে দিতে পারেন
    type: "Certification",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-background relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Licenses & <span className="text-primary">Certificates</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(70,238,221,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-xl group relative overflow-hidden"
            >
              {/* Subtle Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-white/40">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="space-y-2">
                  <p className="text-white/80 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {cert.institution}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-white/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      {cert.year}
                    </div>
                    {cert.link && cert.link !== "#" && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <LinkIcon className="w-4 h-4 text-primary/60" />
                        Verify Course
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
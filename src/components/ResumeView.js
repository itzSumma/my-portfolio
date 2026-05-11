"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Resume() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Figma"] }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Electrical & Electronic Engineering",
      institution: "Leading University",
      period: "2023 - Present",
      location: "Sylhet, Bangladesh"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bhabanipur Degree College",
      period: "Graduated 2021",
      location: "Bangladesh"
    }
  ];

  const projects = [
    {
      title: "Qurbani Hat",
      tech: "Next.js, React, Tailwind, MongoDB, Better Auth",
      description: "A comprehensive digital marketplace for cattle with authentication and search features."
    },
    {
      title: "Keen Keeper",
      tech: "React 19, React Router 7, Tailwind 4, Recharts",
      description: "A financial management dashboard with data visualization and transaction tracking."
    },
    {
      title: "Digitools",
      tech: "React, Vite, Tailwind CSS, DaisyUI",
      description: "A landing page for digital tools showcasing modern UI/UX design."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 md:p-16 font-body">
      <div className="max-w-4xl mx-auto border border-slate-200 shadow-2xl p-10 md:p-16 rounded-sm bg-white relative overflow-hidden print:border-none print:shadow-none">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-900 pb-8 gap-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter uppercase">Sharmin Sultana</h1>
            <h2 className="text-xl font-medium text-slate-600">Frontend & MERN Stack Developer</h2>
          </div>
          
          <div className="flex flex-col gap-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Mail size={16} /> itzsumma11@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> +880 1874760967
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Naogaon, Rajshahi
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} /> itzSumma.github.io
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12">
          {/* Left Column */}
          <div className="md:col-span-8 space-y-12">
            
            {/* Profile Summary */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-2">Profile Summary</h3>
              <p className="text-slate-600 leading-relaxed">
                Detail-oriented Frontend Developer with a strong focus on building responsive and interactive web applications using the MERN stack. Passionate about clean code, performance optimization, and creating seamless user experiences. Currently pursuing a BSc in EEE while honing full-stack development skills.
              </p>
            </section>

            {/* Projects */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-2">Featured Projects</h3>
              <div className="space-y-6">
                {projects.map((project, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="text-md font-bold">{project.title}</h4>
                    <p className="text-xs font-mono text-slate-500 italic">{project.tech}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-2">Education</h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="text-md font-bold">{edu.institution}</h4>
                      <p className="text-sm text-slate-700">{edu.degree}</p>
                      <p className="text-xs text-slate-500">{edu.location}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-400 whitespace-nowrap">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 space-y-12">
            
            {/* Skills */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-2">Expertise</h3>
              {skills.map((skill, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span key={j} className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Socials */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-2">Socials</h3>
              <div className="space-y-3">
                <a href="https://github.com/itzSumma" className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <span className="font-bold text-xs uppercase tracking-tighter border border-slate-200 px-1 rounded">GH</span> github.com/itzSumma
                </a>
                <a href="https://www.linkedin.com/in/sultana-summa/" className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <span className="font-bold text-xs uppercase tracking-tighter border border-slate-200 px-1 rounded">LI</span> linkedin.com/in/sultana-summa
                </a>
              </div>
            </section>

            {/* Interests */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-2">Interests</h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>UI/UX Design</li>
                <li>Open Source</li>
                <li>Reading Tech Blogs</li>
                <li>Problem Solving</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-[10px] text-slate-400 uppercase tracking-widest">
          Generated via Sharmin Sultana Portfolio • 2026
        </div>

        {/* Action Button for non-print */}
        <div className="fixed bottom-8 right-8 print:hidden">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            <Download size={18} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

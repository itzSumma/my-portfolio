"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, Download, ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Resume() {
  const [viewMode, setViewMode] = useState("pdf");
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "JWT",
        "OpenRouter",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Vercel",
        "Render",
        "Netlify",
        "Figma",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Electrical & Electronic Engineering",
      institution: "Leading University",
      period: "2023 - Present",
      location: "Sylhet, Bangladesh",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bhabanipur Degree College",
      period: "Graduated 2021",
      location: "Bangladesh",
    },
  ];

  const projects = [
    {
      title: "PureYuna",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "Neon DB",
      ],
      highlights: [
        "Relational Schema",
        "Custom Pricing Engine",
        "Role-Based Admin",
        "RESTful API",
      ],
      description:
        "A modern full-stack skincare e-commerce platform with organic care and precision formulated taxonomies. Features a dynamic routine package builder, a smart checkout engine with proportional discount distribution, and full admin dashboard CRUD operations.",
    },
    {
      title: "DevArchify",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenRouter",
      ],
      highlights: [
        "AI Integration",
        "Role Based Auth",
        "Context Chat",
        "REST API",
      ],
      description:
        "An AI-powered platform that helps developers generate complete project blueprints from their ideas. Users can save blueprints and continue context-aware AI conversations. Includes role-based authentication and separate dashboards for users and administrators.",
    },
    {
      title: "VerdictHub",
      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Tailwind CSS",
      ],
      highlights: ["Stripe", "Authentication", "Role Based Access", "REST API"],
      description:
        "A full-stack legal platform that connects clients with verified lawyers. Users can search, hire and securely pay lawyers using Stripe. Includes role-based dashboards and secure authentication.",
    },
  ];

  const coreStrengths = [
    "Problem Solving",
    "REST API Development",
    "AI Integration",
    "Performance Optimization",
    "Responsive Design",
    "Clean Code",
    "Modern UI Development",
  ];

  const socials = [
    {
      name: "itzSumma.github.io",
      href: "https://itzSumma.github.io",
      icon: Globe,
    },
    {
      name: "github.com/itzSumma",
      href: "https://github.com/itzSumma",
      icon: FaGithub,
    },
    {
      name: "linkedin.com/in/sultana-summa",
      href: "https://www.linkedin.com/in/sultana-summa/",
      icon: FaLinkedin,
    },
    {
      name: "itzsumma11@gmail.com",
      href: "mailto:itzsumma11@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans print:py-0 print:px-0 print:bg-white">
      {/* Top Controls Bar */}
      <div className="max-w-5xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl print:hidden">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-medium transition-all border border-white/10">
            <ArrowLeft size={14} /> Back
          </a>
          <div>
            <h1 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
              <FileText size={16} className="text-primary" /> Sharmin Sultana — Resume
            </h1>
            <p className="text-[11px] text-white/50 hidden sm:block">
              Full Stack Developer (Next.js • React • Node.js • TypeScript)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex items-center p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === "pdf"
                  ? "bg-primary text-black font-semibold shadow"
                  : "text-white/60 hover:text-white"
              }`}>
              PDF Preview
            </button>
            <button
              type="button"
              onClick={() => setViewMode("text")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === "text"
                  ? "bg-primary text-black font-semibold shadow"
                  : "text-white/60 hover:text-white"
              }`}>
              Clean ATS
            </button>
          </div>

          {/* Download Action Button */}
          <a
            href="/Sharmin_Sultana_Resume.pdf"
            download="Sharmin_Sultana_Resume.pdf"
            className="px-4 py-2 bg-primary text-black font-bold text-xs sm:text-sm rounded-xl hover:shadow-[0_0_20px_rgba(70,238,221,0.5)] transition-all flex items-center gap-1.5 cursor-pointer">
            <Download size={15} /> Download PDF
          </a>

          {/* Google Drive Link */}
          <a
            href="https://drive.google.com/file/d/1FkZDJBm3_JxAZSbnIW8zl7kE9U3E3qqM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-all hidden sm:flex"
            title="Open in Google Drive">
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* PDF Preview Frame (Default) */}
      {viewMode === "pdf" && (
        <div className="max-w-5xl mx-auto mb-10 print:hidden">
          <div className="w-full h-[85vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <iframe
              src="/Sharmin_Sultana_Resume.pdf#view=FitH"
              className="w-full h-full border-0 bg-slate-900"
              title="Sharmin Sultana Resume PDF Preview"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-white/50 px-2">
            <span>
              Direct link:{" "}
              <a
                href="/Sharmin_Sultana_Resume.pdf"
                download="Sharmin_Sultana_Resume.pdf"
                className="text-primary hover:underline">
                Sharmin_Sultana_Resume.pdf
              </a>
            </span>
            <a
              href="https://drive.google.com/file/d/1FkZDJBm3_JxAZSbnIW8zl7kE9U3E3qqM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1">
              View on Google Drive <ExternalLink size={12} />
            </a>
          </div>
        </div>
      )}

      {/* Clean ATS HTML Resume View */}
      <div
        className={`max-w-4xl mx-auto bg-white border border-slate-200/80 shadow-xl print:shadow-none print:border-none p-8 sm:p-12 rounded-lg text-slate-800 ${
          viewMode === "pdf" ? "hidden print:block" : "block"
        }`}>
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black uppercase">
                Sharmin Sultana
              </h1>
              <p className="text-base sm:text-lg font-semibold text-slate-700 mt-2">
                Full Stack Developer{" "}
                <span className="text-slate-400 font-normal">
                  (MERN Stack | Next.js | TypeScript | AI Integration)
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-slate-400 shrink-0" />
                <span>Naogaon, Rajshahi, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-slate-400 shrink-0" />
                <span>+880 1874760967</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-slate-400 shrink-0" />
                <a
                  href="mailto:itzsumma11@gmail.com"
                  className="hover:underline text-slate-900 font-medium">
                  itzsumma11@gmail.com
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-8">
          {/* Left Column (Projects & Education) - 8 Cols */}
          <div className="md:col-span-8 space-y-10">
            {/* Profile Summary */}
            <section aria-labelledby="summary-heading">
              <h2
                id="summary-heading"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Results-driven Full Stack Developer specializing in the MERN
                stack, Next.js, TypeScript, and AI integration, committed to
                writing clean architecture and building high-performance,
                responsive web applications. Expert in designing robust REST
                APIs and secure, scalable digital solutions. Passionate about
                leveraging cutting-edge technologies to deliver seamless user
                experiences and solve complex engineering challenges.
              </p>
            </section>

            {/* Featured Projects */}
            <section aria-labelledby="projects-heading">
              <h2
                id="projects-heading"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Featured Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <article
                    key={index}
                    className="space-y-2 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-base font-bold text-black">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs font-mono text-slate-500">
                      {project.tech.join(" • ")}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Education */}
            <section aria-labelledby="education-heading">
              <h2
                id="education-heading"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-black">
                        {edu.institution}
                      </h3>
                      <p className="text-xs text-slate-700">{edu.degree}</p>
                      <p className="text-[11px] text-slate-500">
                        {edu.location}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Skills, Core Strengths, Socials) - 4 Cols */}
          <div className="md:col-span-4 space-y-8 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-8">
            {/* Skills Section */}
            <section aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Technical Expertise
              </h2>
              <div className="space-y-5">
                {skills.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-[11px] font-medium bg-slate-50 border border-slate-200/60 text-slate-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Strengths */}
            <section aria-labelledby="strengths-heading">
              <h2
                id="strengths-heading"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Core Strengths
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {coreStrengths.map((strength, index) => (
                  <span
                    key={index}
                    className="text-[11px] font-medium bg-slate-900 text-white px-2.5 py-1 rounded-full">
                    {strength}
                  </span>
                ))}
              </div>
            </section>

            {/* Social & Links Section */}
            <section aria-labelledby="socials-heading">
              <h2
                id="socials-heading"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Links & Profiles
              </h2>
              <div className="space-y-2.5">
                {socials.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-black transition-colors">
                      <IconComponent
                        size={14}
                        className="text-slate-400 shrink-0"
                      />
                      <span className="truncate">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note / ATS Signature */}
        <footer className="mt-12 pt-6 border-t border-slate-100 text-center text-[10px] text-slate-400 uppercase tracking-widest print:mt-8">
          Sharmin Sultana • Full Stack Software Engineer Resume
        </footer>
      </div>

      {/* Action Button for Non-Print View */}
      <div className="fixed bottom-6 right-6 print:hidden z-50">
        <a
          href="/Sharmin_Sultana_Resume.pdf"
          download="Sharmin_Sultana_Resume.pdf"
          className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-xl hover:bg-slate-800 transition-all active:scale-95">
          <Download size={16} /> Download PDF
        </a>
      </div>
    </main>
  );
}

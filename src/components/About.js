"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  MapPin,
  Briefcase,
  FolderGit2,
  Laptop,
  BadgeCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Magnetic from "./Magnetic";

export default function About() {
  const cardVars = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Frontend Development",
      description:
        "Building pixel-perfect, responsive, and highly interactive user interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Backend Development",
      description:
        "Architecting secure, scalable server-side logic and RESTful APIs using Node.js and Express.",
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Database Management",
      description:
        "Designing efficient schemas and handling data persistence with MongoDB and Mongoose for optimal performance.",
    },
  ];

  const strengths = [
    "Communication",
    "Collaboration",
    "Problem Solving",
    "Adaptability",
    "Continuous Learning",
  ];

  const quickFacts = [
    {
      icon: <Briefcase className="w-4 h-4 text-primary" />,
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: <MapPin className="w-4 h-4 text-primary" />,
      label: "Location",
      value: "Bangladesh",
    },
    {
      icon: <FolderGit2 className="w-4 h-4 text-primary" />,
      label: "Projects",
      value: "15+ Completed",
    },
    {
      icon: <Laptop className="w-4 h-4 text-primary" />,
      label: "Focus",
      value: "Web Applications",
    },
    {
      icon: <BadgeCheck className="w-4 h-4 text-primary" />,
      label: "Status",
      value: "Open to Work",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/25">
            <span className="text-xs font-mono text-primary tracking-wider uppercase">
              Get to Know Me
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            About <span className="text-glow text-primary">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Introduction & Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="text-2xl font-bold font-display text-white">
              My Development Philosophy
            </h3>

            <p className="text-white/70 font-body leading-relaxed text-base">
              I believe great software is more than just writing code. My goal
              is to build applications that are intuitive, reliable, and easy to
              maintain, with a strong focus on performance and user experience.
            </p>

            <p className="text-white/60 font-body leading-relaxed text-sm">
              Every project is an opportunity to learn, improve, and solve
              meaningful problems. I value clean architecture, attention to
              detail, and writing code that remains scalable and maintainable
              over time.
            </p>
          </motion.div>

          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="text-2xl font-bold font-display text-white">
              My Journey
            </h3>

            <p className="text-white/70 font-body leading-relaxed text-base">
              My journey into web development began with curiosity and has grown
              into a passion for building complete web applications. Through
              consistent learning and hands-on projects, I've developed both my
              technical skills and problem-solving mindset.
            </p>

            <p className="text-white/60 font-body leading-relaxed text-sm">
              I believe continuous learning is the key to growth. Every
              challenge, project, and new technology helps me become a more
              capable developer and prepares me to build better software.
            </p>
          </motion.div>
        </div>

        {/* What I Do (3 Feature Cards) */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-mono text-white/80 tracking-wide">
            // Core Expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVars}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5, borderColor: "rgba(70,238,221,0.4)" }}
                className="glass p-8 rounded-3xl border border-white/10 space-y-4 group transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl glass border border-primary/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h4 className="text-xl font-bold font-display text-white">
                  {feature.title}
                </h4>

                <p className="text-white/60 text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Strengths Section */}
        <div className="space-y-6">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <Sparkles className="w-5 h-5 text-primary" />
              Professional Strengths
            </h3>
            <p className="text-white/60 text-sm max-w-2xl font-body mt-1">
              Approachable, adaptable, and a strong communicator dedicated to
              seamless collaboration and delivering impactful software
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Communication",
                desc: "Confident in communicating with people and collaborating effectively in team environments.",
              },
              {
                title: "Teamwork & Collaboration",
                desc: "Work effectively with teams, share ideas openly, and contribute to achieving common goals.",
              },
              {
                title: "Adaptability",
                desc: "Quickly adapt to new technologies, environments, and evolving project requirements.",
              },
              {
                title: "Problem Solving",
                desc: "Analyze challenges critically and develop practical, user-focused solutions.",
              },
              {
                title: "Continuous Learning",
                desc: "Continuously explore new technologies and improve both technical and professional skills.",
              },
            ].map((item) => (
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                key={item.title}
                className="p-5 rounded-2xl glass border border-white/10 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(70,238,221,0.15)] transition-all duration-300 cursor-default space-y-2 group">
                <h4 className="text-white font-semibold text-base group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/60 text-xs font-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Facts & Contact CTA Section */}
        <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Quick Facts List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full lg:w-auto flex-grow">
            {quickFacts.map((fact, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-wider">
                  {fact.icon}
                  <span>{fact.label}</span>
                </div>
                <p className="text-sm font-semibold text-white/90">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTA with text description */}
          <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right w-full lg:w-auto">
            <p className="text-white/60 text-sm max-w-xs">
              Looking for a passionate developer to bring your ideas to life?
            </p>

            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_25px_rgba(70,238,221,0.5)] transition-all duration-300 flex items-center gap-2">
                Let's Work Together
                <ArrowRight size={18} />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}

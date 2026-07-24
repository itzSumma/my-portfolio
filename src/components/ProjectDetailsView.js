"use client";

import { motion } from "framer-motion";

export default function ProjectDetailsView({ project }) {
  const liveUrl = project.liveUrl ?? project.link;
  const githubUrl = project.githubUrl ?? project.githubFrontend;
  const hasLiveLink = Boolean(liveUrl);
  const hasFrontendLink = Boolean(githubUrl);
  const hasBackendLink = Boolean(project.githubBackend);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
      <div className="space-y-4">
        <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">
          {project.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-2">
              Project Overview
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-3">
              Main Features
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
                  <span className="text-cyan-400">✓</span> {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-3">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300">
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-3">
              Project Links
            </h2>
            <div className="flex flex-wrap gap-3">
              {hasLiveLink && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors">
                  View Live Project
                </a>
              )}
              {hasFrontendLink && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 hover:border-white/20 transition-all">
                  GitHub Repository
                </a>
              )}
              {hasBackendLink && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 hover:border-white/20 transition-all">
                  GitHub Server
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/50">
          Challenges & Solutions
        </h2>
        <div className="space-y-3">
          {project.challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-cyan-400">⚡</span>
                {item.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/10 text-red-300/90">
                  <span className="font-semibold text-red-400 block mb-0.5">
                    Challenge
                  </span>
                  {item.problem}
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/10 text-emerald-300/90">
                  <span className="font-semibold text-emerald-400 block mb-0.5">
                    Solution
                  </span>
                  {item.solution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/50">
          Future Improvements
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.futureImprovements.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

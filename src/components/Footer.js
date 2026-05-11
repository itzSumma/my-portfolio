"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Footer() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/itzSumma" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sultana-summa/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61552100236600" },
    { name: "Instagram", href: "https://www.instagram.com/_summa611" }
  ];

  return (
    <footer className="relative py-16 px-6 md:px-24 bg-background overflow-hidden border-t border-white/5">

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[12vw] font-bold font-display leading-none tracking-tighter whitespace-nowrap">
          SHARMIN SULTANA
        </h2>
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Floating Particles */}
      {isMounted && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px] pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display tracking-tighter text-white"
            >
              Design. Code. <span className="text-primary">Create.</span>
            </motion.div>

            <p className="text-white/40 text-sm max-w-sm font-body">
              Building digital experiences with a focus on clean code and user-centric design.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6">

              {socialLinks.map((social) => (
                <Magnetic key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-primary transition-all duration-300"
                  >
                    {social.name}
                  </a>
                </Magnetic>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start lg:items-end space-y-8">

            <div className="flex flex-col items-start lg:items-end space-y-3">

              <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
                Contact Details
              </div>

              <a
                href="mailto:itzsumma11@gmail.com"
                className="text-lg md:text-xl font-medium text-white/60 hover:text-primary transition-colors"
              >
                itzsumma11@gmail.com
              </a>

              <a
                href="tel:01874760967"
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                📞 01874760967
              </a>

            </div>

            {/* Back to top */}
            <Magnetic>
              <button
                onClick={handleBackToTop}
                className="group flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all"
              >
                <span className="w-6 h-[1px] bg-white/20 group-hover:w-10 group-hover:bg-primary transition-all" />
                <span>Back to top</span>
              </button>
            </Magnetic>

          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">

          <div>© 2026 Sharmin Sultana</div>

          <div className="flex items-center gap-4">
            <span>Built with Next.js & MERN</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
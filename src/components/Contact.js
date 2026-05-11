"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-background">

      <div className="max-w-7xl mx-auto glass rounded-3xl p-10 md:p-20 relative overflow-hidden border border-white/10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-white leading-tight"
            >
              LET'S <br />
              <span className="text-primary text-glow">CONNECT.</span>
            </motion.h2>

            <p className="text-white/50 text-lg md:text-xl font-body max-w-md">
              I am currently open to full-time opportunities, collaborations, and contract work. Let’s build something amazing together.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:itzsumma11@gmail.com"
                className="block text-xl md:text-2xl font-medium text-white hover:text-primary transition-colors"
              >
                itzsumma11@gmail.com
              </a>

              {/* Phone */}
              <a
                href="tel:01874760967"
                className="block text-white/60 hover:text-white transition-colors"
              >
                📞 01874760967
              </a>

              {/* SOCIAL LINKS */}
              <div className="flex flex-wrap gap-6 pt-2">

                {[
                  {
                    name: "GitHub",
                    link: "https://github.com/itzSumma",
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/sultana-summa/",
                  },
                  {
                    name: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=61552100236600",
                  },
                  {
                    name: "Instagram",
                    link: "https://www.instagram.com/_summa611",
                  },
                ].map((social) => (
                  <Magnetic key={social.name}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-white hover:scale-105 transition-all duration-300 uppercase text-xs font-mono tracking-widest"
                    >
                      {social.name}
                    </a>
                  </Magnetic>
                ))}

              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form className="space-y-6">

            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Your Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Your Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Your Message
              </label>
              <textarea
                rows="5"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <Magnetic>
              <button
                type="submit"
                className="w-full py-5 bg-primary text-black font-bold rounded-xl hover:scale-[0.98] hover:shadow-[0_0_25px_rgba(70,238,221,0.3)] transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </Magnetic>

          </form>

        </div>

        {/* Decorative Glow */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      </div>
    </section>
  );
}
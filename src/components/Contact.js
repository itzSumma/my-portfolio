"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "528d7901-3312-4d15-bee1-d182c3eb9400",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

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
              className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-white leading-tight">
              LET'S <br />
              <span className="text-primary text-glow">CONNECT.</span>
            </motion.h2>

            <p className="text-white/50 text-lg md:text-xl font-body max-w-md">
              I am currently open to full-time opportunities, collaborations,
              and contract work. Let’s build something amazing together.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:itzSumma11@gmail.com"
                className="block text-xl md:text-2xl font-medium text-white hover:text-primary transition-colors">
                itzSumma11@gmail.com
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/8801874760967"
                target="_blank"
                rel="noreferrer"
                className="block text-white/60 hover:text-white transition-colors">
                📞 01874760967
              </a>

              {/* Location */}
              <div className="text-white/40 text-sm">📍 Naogaon, Rajshahi</div>

              {/* PROFESSIONAL LINKS */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  {
                    name: "Portfolio",
                    link: "https://itzSumma.github.io",
                  },
                  {
                    name: "GitHub",
                    link: "https://github.com/itzSumma",
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/sultana-summa/",
                  },
                ].map((social) => (
                  <Magnetic key={social.name}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-white hover:scale-105 transition-all duration-300 uppercase text-xs font-mono tracking-widest">
                      {social.name}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Write your message..."></textarea>
            </div>

            <Magnetic>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-5 font-bold rounded-xl hover:scale-[0.98] transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-primary text-black hover:shadow-[0_0_25px_rgba(70,238,221,0.3)]"
                }`}>
                {status === "sending"
                  ? "SENDING..."
                  : status === "success"
                    ? "✓ MESSAGE SENT!"
                    : status === "error"
                      ? "TRY AGAIN"
                      : "SEND MESSAGE"}
              </button>
            </Magnetic>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-4">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-4">
                Something went wrong. Please try again or contact me directly.
              </p>
            )}
          </form>
        </div>

        {/* Decorative Glow */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      </div>
    </section>
  );
}

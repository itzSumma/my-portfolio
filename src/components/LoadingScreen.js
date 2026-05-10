"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[15vw] font-display font-bold text-white leading-none tracking-tighter"
            >
              {count}%
            </motion.span>
          </div>
          <div className="absolute bottom-12 w-full px-12 flex justify-between items-end">
            <div className="text-white/30 text-sm font-mono tracking-widest uppercase">
              Initializing Experience
            </div>
            <div className="text-white/30 text-sm font-mono tracking-widest uppercase">
              Creative Portfolio v2.0
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

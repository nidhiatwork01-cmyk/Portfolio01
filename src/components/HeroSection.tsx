"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

interface HeroSectionProps {
  onOpenCommandPalette: () => void;
}

export default function HeroSection({ onOpenCommandPalette }: HeroSectionProps) {
  const highlights = [
    { label: "Production Apps", value: "10+" },
    { label: "KIIT CGPA", value: "9.01" },
    { label: "DSA Problems", value: "200+" },
    { label: "Defect Leakage", value: "-35%" },
    { label: "On-Time Sprints", value: "90%" },
  ];

  return (
    <section className="relative pt-40 pb-28 md:pt-56 md:pb-40 overflow-hidden swiss-grid-bg ambient-glow-top border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] text-white/80">
            HYDERABAD &amp; BENGALURU • AVAILABLE WORLDWIDE
          </span>
        </motion.div>

        {/* Sculptural Editorial Headline */}
        <div className="space-y-3 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.9] text-white uppercase">
              CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/30">UI ENGINEER</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8"
          >
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.9] text-[#d4ff00] uppercase">
              &amp; ARCHITECT.
            </h2>
            <div className="font-mono-tech text-xs tracking-widest text-white/40 uppercase hidden md:block">
              // MECHANICAL EFFICIENCY MEETS TACTILE ERGONOMICS
            </div>
          </motion.div>
        </div>

        {/* Airy Tagline & Two Focused Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl space-y-8 mb-16"
        >
          <p className="text-xl sm:text-2xl text-[#8e95a5] font-normal leading-relaxed">
            I craft high-stakes enterprise interfaces, fluid design systems, and resilient tools where aesthetic precision meets sub-millisecond runtime performance.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor="EXPLORE"
              onClick={() => playUiSound("warp")}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#d4ff00] hover:bg-[#c2eb00] text-[#08090d] font-bold text-xs uppercase tracking-wider rounded-full transition-all glow-lime shadow-xl"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>

            <button
              onClick={() => {
                playUiSound("click");
                onOpenCommandPalette();
              }}
              data-cursor="CMD+K"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span>COMMAND PALETTE</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/10 text-white/60">
                ⌘K
              </kbd>
            </button>
          </div>
        </motion.div>

        {/* Sleek Minimalist Metric Rail (No heavy box cards!) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                {item.value}
              </div>
              <div className="font-mono-tech text-[11px] text-[#8e95a5] uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

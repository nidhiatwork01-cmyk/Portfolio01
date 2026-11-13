"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles } from "lucide-react";
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

  const arsenalSkills = [
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "C++17",
    "PostgreSQL",
    "LLM APIs"
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden swiss-grid-bg ambient-glow-top border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-center">
        {/* Subtle Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-4 sm:mb-6 w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="tracking-widest uppercase text-[10px] sm:text-[11px] text-white/80">
            HYDERABAD &amp; BENGALURU • AVAILABLE WORLDWIDE
          </span>
        </motion.div>

        {/* Sculptural Editorial Headline - Balanced to fit in 2 clean lines */}
        <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] tracking-tight leading-[1.05] text-white uppercase">
              CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">UI ENGINEER</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] tracking-tight leading-[1.05] text-[#d4ff00] uppercase">
              &amp; ARCHITECT.
            </h2>
            <div className="font-mono-tech text-[11px] tracking-widest text-white/40 uppercase hidden lg:block">
              // MECHANICAL EFFICIENCY MEETS TACTILE ERGONOMICS
            </div>
          </motion.div>
        </div>

        {/* Concise Tagline & Direct Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl space-y-4 sm:space-y-5 mb-6 sm:mb-8"
        >
          <p className="text-sm sm:text-base md:text-lg text-[#8e95a5] font-normal leading-relaxed">
            I craft high-stakes enterprise interfaces, fluid design systems, and resilient tools where aesthetic precision meets sub-millisecond runtime performance.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              data-cursor="EXPLORE"
              onClick={() => playUiSound("warp")}
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#d4ff00] hover:bg-[#c2eb00] text-[#08090d] font-bold text-xs uppercase tracking-wider rounded-full transition-all glow-lime shadow-lg"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ArrowDownRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
            </a>

            <button
              onClick={() => {
                playUiSound("click");
                onOpenCommandPalette();
              }}
              data-cursor="CMD+K"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span>COMMAND PALETTE</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/10 text-white/60">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Star Feature: Core Arsenal Strip */}
          <div className="pt-1 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono-tech text-white/50 uppercase tracking-wider mr-1 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#d4ff00]" />
              CORE ARSENAL:
            </span>
            {arsenalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-white hover:border-[#d4ff00]/50 hover:text-[#d4ff00] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_6px_#d4ff00]" />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Minimalist Metric Rail - Compact and always in view */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                {item.value}
              </div>
              <div className="font-mono-tech text-[10px] sm:text-[11px] text-[#8e95a5] uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
    <section className="relative min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] flex flex-col justify-between pt-20 pb-6 sm:pt-24 sm:pb-8 overflow-hidden swiss-grid-bg ambient-glow-top border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Subtle Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-3 w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="tracking-widest uppercase text-[10px] text-white/80">
            HYDERABAD &amp; BENGALURU • AVAILABLE WORLDWIDE
          </span>
        </motion.div>

        {/* Sculptural Editorial Headline - Exact 3-line balanced geometry from screenshot */}
        <div className="mb-3 sm:mb-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] tracking-tight leading-[0.95] text-white uppercase space-y-0.5">
              <div>CREATIVE UI</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                ENGINEER
              </div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 mt-1"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] tracking-tight leading-[0.95] text-[#d4ff00] uppercase">
              &amp; ARCHITECT.
            </h2>
            <div className="font-mono-tech text-[10px] sm:text-[11px] tracking-widest text-white/40 uppercase hidden md:block">
              // MECHANICAL EFFICIENCY MEETS TACTILE ERGONOMICS
            </div>
          </motion.div>
        </div>

        {/* Concise Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-[15px] text-[#8e95a5] max-w-xl leading-relaxed mb-4 sm:mb-5 font-normal"
        >
          I craft high-stakes enterprise interfaces, fluid design systems, and resilient tools where aesthetic precision meets sub-millisecond runtime performance.
        </motion.p>

        {/* Direct Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5"
        >
          <a
            href="#projects"
            data-cursor="EXPLORE"
            onClick={() => playUiSound("warp")}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4ff00] hover:bg-[#c2eb00] text-[#08090d] font-bold text-xs uppercase tracking-wider rounded-full transition-all glow-lime shadow-md hover:scale-105"
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>COMMAND PALETTE</span>
            <kbd className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/10 text-white/60">
              ⌘K
            </kbd>
          </button>
        </motion.div>

        {/* Star Feature: Core Arsenal Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4"
        >
          <span className="text-[10px] font-mono-tech text-white/50 uppercase tracking-wider mr-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#d4ff00]" />
            CORE ARSENAL:
          </span>
          {arsenalSkills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono-tech text-white hover:border-[#d4ff00]/50 hover:text-[#d4ff00] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_6px_#d4ff00]" />
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Minimalist Metric Rail - Anchored at the bottom of the viewport with divider line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-6"
      >
        {highlights.map((item, idx) => (
          <div key={idx} className="space-y-0.5">
            <div className="font-display font-black text-xl sm:text-2xl text-white">
              {item.value}
            </div>
            <div className="font-mono-tech text-[10px] text-[#8e95a5] uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

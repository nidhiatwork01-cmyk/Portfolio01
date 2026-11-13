"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

interface HeroSectionProps {
  onOpenCommandPalette: () => void;
}

export default function HeroSection({ onOpenCommandPalette }: HeroSectionProps) {
  const marqueeItems = [
    "REACT 19",
    "NEXT.JS 15",
    "TYPESCRIPT",
    "C++17 LINUX /PROC",
    "SQL RECURSIVE CTES",
    "POSTMAN CONTRACT TESTING",
    "FRAMER MOTION",
    "SIX SIGMA DMAIC",
    "TAILWIND CSS",
    "0.00 CLS",
  ];

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/10 swiss-grid-bg">
      {/* Structural Minimal Coordinates */}
      <div className="absolute top-28 left-8 text-[11px] font-mono-tech text-white/20 select-none hidden lg:block">
        HYD / BLR // UTC+5:30
      </div>
      <div className="absolute top-28 right-8 text-[11px] font-mono-tech text-[#d4ff00]/60 select-none hidden lg:block">
        SYS_STATUS: ACTIVE
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="tracking-wide">OPEN TO WORLDWIDE RELOCATION &amp; REMOTE ROLES</span>
        </motion.div>

        {/* Oversized Kinetic Editorial Headline */}
        <div className="space-y-2 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white uppercase">
              CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">UI ENGINEER</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8"
          >
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-[#d4ff00] uppercase">
              &amp; ARCHITECT.
            </h2>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-white/40 border-l border-[#d4ff00]/30 pl-4 hidden md:block">
              MECHANICAL EFFICIENCY <br />
              MEETS FLUID ERGONOMICS
            </div>
          </motion.div>
        </div>

        {/* Crisp Narrative Split: Tagline + Action CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <p className="text-xl sm:text-2xl text-[#f3f4f6] font-medium leading-relaxed max-w-xl">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start"
          >
            <a
              href="#projects"
              data-cursor="PROJECTS"
              onClick={() => playUiSound("warp")}
              className="group relative inline-flex items-center justify-between px-6 py-4 bg-[#d4ff00] hover:bg-[#b8dd00] text-[#07080c] font-bold text-xs uppercase tracking-wider rounded-xl transition-all glow-lime shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                EXPLORE CASE STUDIES
              </span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playUiSound("click");
                  onOpenCommandPalette();
                }}
                data-cursor="CMD+K"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>COMMAND (⌘K)</span>
              </button>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="CONNECT"
                onClick={() => playUiSound("blip")}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#9ca3af] hover:text-white font-mono-tech text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tabular Telemetry Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-14 pt-8 border-t border-white/10"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#d4ff00]/30 transition-all group"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors">
                {stat.value}
              </div>
              <div className="font-mono-tech text-[10px] text-[#9ca3af] uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Kinetic Infinite Marquee Strip */}
      <div className="mt-16 py-3 bg-[#0d0f17] border-y border-white/10 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono-tech text-xs tracking-widest text-[#9ca3af]">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span className="hover:text-[#d4ff00] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#d4ff00]/60">❖</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

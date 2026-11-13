"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

interface HeroSectionProps {
  onOpenCommandPalette: () => void;
}

export default function HeroSection({ onOpenCommandPalette }: HeroSectionProps) {
  const marqueeItems = [
    "REACT 19",
    "NEXT.JS 15 (APP ROUTER)",
    "TYPESCRIPT",
    "C++17 LINUX /PROC",
    "RECURSIVE SQL CTES",
    "POSTMAN API CONTRACTS",
    "FRAMER MOTION",
    "SIX SIGMA DMAIC",
    "TAILWIND CSS",
    "CHROME DEVTOOLS PROFILER",
    "SUB-MILLISECOND RUNTIME",
    "FIGMA-TO-CODE PRECISION",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10 swiss-grid-bg">
      {/* Structural Crosshairs */}
      <div className="absolute top-24 left-8 text-[10px] font-mono-tech text-white/20 select-none hidden lg:block">
        LOC: [HYD/BLR] // LAT: 17.3850 N // LON: 78.4867 E
      </div>
      <div className="absolute top-24 right-8 text-[10px] font-mono-tech text-[#d4ff00]/60 select-none hidden lg:block">
        STATUS: SHIP_READY // 0 ERROR TOLERANCE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono-tech text-[#d4ff00] mb-8 glow-lime-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="tracking-wide">OPEN TO WORLDWIDE RELOCATION & REMOTE ENGINEERING ROLES</span>
        </motion.div>

        {/* Oversized Kinetic Editorial Headline */}
        <div className="space-y-1 md:space-y-2 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden"
          >
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase">
              CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">UI ENGINEER</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"
          >
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#d4ff00] uppercase">
              &amp; ARCHITECT.
            </h2>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-white/50 border-l border-[#d4ff00]/30 pl-3 hidden md:block">
              ENGINEERING RESILIENT INTERFACES <br />
              WITH MECHANICAL PRECISION
            </div>
          </motion.div>
        </div>

        {/* Narrative Split: High-Impact Bio & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8 pt-6 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="text-lg sm:text-xl text-[#f3f4f6] font-medium leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed">
              Final-year ECS engineer at KIIT (
              <span className="text-white font-semibold underline decoration-[#d4ff00]">9.01 CGPA</span>
              ) with hands-on experience shipping across{" "}
              <span className="text-white font-semibold">10+ production web applications</span> in React and TypeScript.
              From engineering low-latency Linux process telemetry engines in C++17 to building multi-model LLM benchmarking dashboards and complex CRM workflows at WhatBytes, I obsess over the intersection of software efficiency, typography, and uncompromised user ergonomics.
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
              className="group relative inline-flex items-center justify-between px-6 py-4 bg-[#d4ff00] hover:bg-[#b8dd00] text-[#07080c] font-bold text-sm uppercase tracking-wider rounded-lg transition-all glow-lime shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                EXPLORE CASE STUDIES
              </span>
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playUiSound("click");
                  onOpenCommandPalette();
                }}
                data-cursor="CMD+K"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider rounded-lg transition-all"
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
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#9ca3af] hover:text-white font-mono-tech text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Ribbon (Tabular Telemetry) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-12 pt-8 border-t border-white/10"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#d4ff00]/30 transition-all group"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors">
                {stat.value}
              </div>
              <div className="font-mono-tech text-[11px] text-[#9ca3af] uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Kinetic Infinite Marquee Strip */}
      <div className="mt-14 py-3 bg-[#0d0f17] border-y border-white/10 overflow-hidden select-none">
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

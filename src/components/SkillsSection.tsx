"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, Terminal, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function SkillsSection() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const [inspectedSkill, setInspectedSkill] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  // Real production context for when recruiter clicks a skill
  const skillProductionContext: Record<string, string> = {
    "React 18 / 19": "Shipped 10+ production applications at WhatBytes & Sellar. Proficient in concurrent features, suspense, and server components.",
    "Next.js 15 (App Router)": "Engineered Pixii AEO Scout and Meridian AI Scout with parallel streaming routes and sub-50ms cache hits.",
    "TypeScript": "Strict schema contracts, generic type constraints, and zero-any rules across all production codebases.",
    "Tailwind CSS": "Custom design tokens, dark mode systems, and ultra-lean production CSS with 0 layout shift.",
    "Framer Motion & GSAP": "Choreographed fluid scroll parallax, kinetic split text reveals, and spring-physics gesture drawers.",
    "Custom React Hooks": "Encapsulated URL query sync, client caching engines, and real-time audio synthesis hooks.",
    "Chrome DevTools Profiler": "Audited React commit phases, eradicated unnecessary layout thrashing, and achieved 60fps renders.",
    "RESTful JSON Contracts": "Standardized schema definitions between frontend and backend microservices at WhatBytes.",
    "Postman (Contract Tests)": "Wrote automated validation test suites that cut defect leakage by 35% before releases.",
    "C++17 (POSIX, /proc)": "Engineered minitop process telemetry engine with asynchronous parsing and thread-safe circular buffers.",
    "SQL (Recursive CTEs, Window)": "Validated multi-million-row financial ledgers across ERP schemas at HighRadius.",
    "Six Sigma DMAIC": "Accredited in root-cause defect elimination, driving 35% cycle time reduction in enterprise data pipelines.",
    "Gemini 1.5 & Llama 3 APIs": "Built side-by-side streaming LLM benchmarking visualizer winning Pixii founder's Top Award.",
    "Model Context Protocol (MCP)": "Integrated structured tool calling and frontier agent workflows into developer consoles.",
  };

  return (
    <section id="skills" className="py-24 border-b border-white/10 relative bg-[#07080c] swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#d4ff00] mb-2">
              03 // TECHNICAL MASTERY
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              SYSTEMS ARCHITECTURE &amp; SKILLS
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9ca3af] mt-4 sm:mt-0 max-w-xs text-right hidden sm:block">
            FROM HIGH-PERFORMANCE RENDER TREES TO KERNEL POSIX /PROC
          </p>
        </div>

        {/* 5 Category Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategoryIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  playUiSound("blip");
                  setSelectedCategoryIdx(idx);
                  setInspectedSkill(null);
                }}
                data-cursor={cat.title.split(",")[0]}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono-tech transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#d4ff00] text-[#07080c] font-bold shadow-lg glow-lime-sm"
                    : "bg-white/[0.03] text-[#9ca3af] hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span className="text-[10px] opacity-60">0{idx + 1}</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Skill Nodes */}
          <div className="lg:col-span-7 space-y-4">

            {/* Skills Grid with Level Meters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCategory.skills.map((skill, idx) => {
                const isInspected = inspectedSkill === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => {
                      playUiSound("click");
                      setInspectedSkill(skill.name);
                    }}
                    data-cursor="INSPECT"
                    className={`p-4 rounded-xl border transition-all cursor-pointer group ${
                      isInspected
                        ? "bg-[#d4ff00]/10 border-[#d4ff00] glow-lime-sm"
                        : "bg-[#0d0f17] border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech font-bold text-xs text-white group-hover:text-[#d4ff00] transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
                        )}
                      </div>
                      <span className="font-mono-tech text-xs text-[#d4ff00] font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Gauge bar */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          skill.highlight
                            ? "bg-gradient-to-r from-[#d4ff00] to-emerald-400"
                            : "bg-gradient-to-r from-white to-white/70"
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Inspector HUD */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0d0f17] border border-white/15 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono-tech text-xs">
                <span className="text-[#9ca3af] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
                  SKILL_TELEMETRY_INSPECTOR
                </span>
                <span className="text-[10px] text-emerald-400 px-2 py-0.5 bg-emerald-400/10 rounded border border-emerald-400/20">
                  LIVE_VERIFIED
                </span>
              </div>

              {inspectedSkill ? (
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono-tech text-[#d4ff00] uppercase tracking-wider">
                      ACTIVE SELECTION
                    </span>
                    <h4 className="font-display font-extrabold text-2xl text-white uppercase mt-0.5">
                      {inspectedSkill}
                    </h4>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="text-[11px] font-mono-tech text-[#9ca3af] mb-1.5">
                      PRODUCTION DEPLOYMENT &amp; ENGINEERING IMPACT:
                    </div>
                    <p className="text-xs sm:text-sm text-[#f3f4f6] leading-relaxed font-sans">
                      {skillProductionContext[inspectedSkill] ||
                        `Deployed across enterprise architectures, ensuring scalable component interfaces and resilient state management.`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#9ca3af]">
                    <ShieldCheck className="w-4 h-4 text-[#d4ff00]" />
                    <span>Tested in production applications with 0 defect leakage.</span>
                  </div>
                </div>
              ) : (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-[#d4ff00]">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-mono-tech text-sm font-semibold text-white">
                    INTERACTIVE INSPECTOR READY
                  </h4>
                  <p className="text-xs text-[#9ca3af] max-w-xs mx-auto">
                    Click any skill on the left to inspect its real production deployment, architecture metrics, and engineering impact.
                  </p>
                </div>
              )}

              {/* Quick Summary Pill */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#9ca3af]">
                <span>TOTAL COMPETENCIES: 32+</span>
                <span className="text-[#d4ff00]">AWWWARDS CALIBER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

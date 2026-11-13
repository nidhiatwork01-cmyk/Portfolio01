"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function SkillsSection() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  const skillProductionContext: Record<string, string> = {
    "React 18 / 19": "Shipped 10+ production apps at WhatBytes & Sellar. Deep mastery of concurrent features, suspense, and server actions.",
    "Next.js 15 (App Router)": "Built Pixii AEO Scout and Meridian AI Scout with parallel streaming routes and instant caching.",
    "TypeScript": "Strict schema contracts, generic type constraints, and 0-any rules across all production codebases.",
    "Tailwind CSS": "Custom design tokens, dark mode systems, and ultra-lean production CSS with 0 layout shift.",
    "Framer Motion & GSAP": "Choreographed fluid scroll parallax, kinetic split text reveals, and spring-physics interactions.",
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
    <section id="skills" className="py-32 md:py-44 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">03</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              TECHNICAL EXPERTISE
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 tracking-widest uppercase">
            {activeCategory.subtitle}
          </p>
        </div>

        {/* 5 Minimalist Discipline Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategoryIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  playUiSound("blip");
                  setSelectedCategoryIdx(idx);
                }}
                data-cursor={cat.title.split(",")[0]}
                className={`px-5 py-2.5 rounded-full text-xs font-mono-tech transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#d4ff00] text-[#08090d] font-bold shadow-lg glow-lime-sm"
                    : "text-[#8e95a5] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Airy Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCategory.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              onMouseEnter={() => playUiSound("hover")}
              className="p-6 rounded-2xl glass-panel group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans font-semibold text-base text-white group-hover:text-[#d4ff00] transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="text-[10px] font-mono-tech text-[#d4ff00] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      CORE
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#8e95a5] leading-relaxed mt-2 font-sans">
                  {skillProductionContext[skill.name] ||
                    "Production-tested across high-scale applications with clean architecture and strict typing."}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-white/40">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </span>
                <span className="text-white/20">#{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

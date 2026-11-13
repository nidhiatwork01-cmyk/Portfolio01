"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, Layers, Cpu, Zap } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function SkillsSection() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  const flagshipArsenal = [
    { name: "React 19", role: "Concurrent UI" },
    { name: "Next.js 15", role: "App Router & SSR" },
    { name: "TypeScript", role: "Strict Generics" },
    { name: "Tailwind CSS", role: "Design Tokens" },
    { name: "Framer Motion", role: "Spring Kinetics" },
    { name: "C++17", role: "Kernel /proc Telemetry" },
    { name: "PostgreSQL", role: "Relational Schemas" },
    { name: "Gemini & Llama 3", role: "LLM Streaming" }
  ];

  const skillProductionContext: Record<string, string> = {
    // UI, Frameworks & Modern Web
    "React 18 / 19": "Shipped 10+ production web apps across WhatBytes and Sellar. Master of concurrent features, suspense boundaries, and server actions.",
    "Next.js 15 (App Router)": "Engineered Pixii AEO Scout and Meridian AI Scout with parallel streaming routes, server components, and aggressive caching.",
    "TypeScript": "Strict schema contracts, generic type constraints, and 0-any rules enforced across all production codebases.",
    "JavaScript (ES6+)": "Deep mastery of asynchronous event loops, microtasks, modern closures, prototype chains, and garbage collection profiling.",
    "Tailwind CSS": "Authored scalable design token systems, dark mode palettes, and ultra-lean production CSS with 0 layout shift (0.00 CLS).",
    "Framer Motion & GSAP": "Choreographed fluid scroll parallax, kinetic split text reveals, and spring-physics interactions running at constant 60fps.",
    "HTML5 Semantic Arch": "Built accessible, high-contrast layouts conforming to WCAG 2.1 AA with proper ARIA live regions and landmark roles.",
    "SCSS Modules / CSS3": "Authored modular scoped styling architectures with CSS custom properties and hardware-accelerated transforms.",

    // Architecture & State Engines
    "Custom React Hooks": "Built reusable hooks for URL query parameter synchronization, client-side memory caching, and Web Audio API synthesis.",
    "Context API & Redux Toolkit": "Implemented predictable state management slices and action dispatchers with zero redundant component rerendering.",
    "URL Query State Sync": "Engineered two-way sync between URL query strings and UI filter state machines in AURA Skincare storefront.",
    "Optimistic UI Architecture": "Designed instant visual checkout and bookmarking feedback with automatic rollback handlers on network failures.",
    "Error Boundaries & Fallbacks": "Wrapped high-risk external API streams and asynchronous components in resilient fallback skeletons.",
    "Chrome DevTools Profiler": "Audited React commit phases, eradicated unnecessary layout thrashing, and achieved flawless 60fps renders.",

    // API Contracts & Systems Tooling
    "RESTful JSON Contracts": "Standardized schema definitions and error payloads between frontend and backend microservices at WhatBytes.",
    "Postman (Contract Tests)": "Wrote automated validation test suites that cut defect leakage by 35% before releases across sprint cycles.",
    "Ngrok (Tunnel Verification)": "Exposed local dev environments for rapid cross-device testing and real-time stakeholder verification.",
    "Git / GitHub PR Workflows": "Maintained clean atomic commit histories, interactive rebases, and collaborative pull request code reviews.",
    "Figma-to-Code Precision": "Translated complex multi-state design systems into pixel-perfect, accessible React components with exact token matching.",
    "CI/CD & Vercel Pipeline": "Configured automated preview environments, turbopack build pipelines, and production edge deployments.",

    // Backend, Systems & Data Depth
    "C++17 (POSIX, /proc)": "Engineered minitop process telemetry engine with non-blocking POSIX I/O and thread-safe circular buffers.",
    "PostgreSQL & Indexing": "Designed normalized 3NF schemas with B-tree indices and connection pooling that cut query latency by 30% under load.",
    "SQL (Recursive CTEs, Window)": "Validated multi-million-row financial ledgers across ERP schemas at HighRadius with automated audit pipelines.",
    "Python & Data Modeling": "Built quantitative sensitivity matrices, scenario modeling, and financial valuation engines for Tesla DCF strategic review.",
    "Node.js & Express": "Implemented high-throughput REST microservices with JWT bearer authentication and rate-limiting middleware.",
    "Six Sigma DMAIC": "Accredited in root-cause defect elimination, driving 35% cycle time reduction in enterprise data pipelines.",

    // AI & Multi-Model Acceleration
    "Gemini 1.5 & Llama 3 APIs": "Built side-by-side streaming LLM benchmarking visualizer winning Pixii founder's Top Award.",
    "Streaming LLM Visualizers": "Created live token stream parsers, latency gauges, and visual diffing consoles for multi-model verification.",
    "Model Context Protocol (MCP)": "Integrated structured tool calling and frontier agent workflows into developer consoles.",
    "v0 & AI-Assisted Prototyping": "Leveraged modern generative UI tooling for rapid design iteration and component scaffolding.",
    "Prompt Engineering & Tokens": "Optimized structured JSON output extraction, system prompts, and token budget efficiency."
  };

  return (
    <section id="skills" className="py-32 md:py-44 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-6 border-b border-white/10">
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

        {/* STAR FEATURE: Flagship Tech Arsenal Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl glass-panel border border-[#d4ff00]/20 bg-gradient-to-r from-white/[0.03] via-white/[0.01] to-transparent shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#d4ff00]" />
              <h3 className="font-mono-tech text-xs font-bold text-white uppercase tracking-wider">
                CORE PRODUCTION ARSENAL &amp; DAILY STACK
              </h3>
            </div>
            <span className="text-[11px] font-mono-tech text-[#d4ff00]">
              VERIFIED IN PRODUCTION APPS &amp; SYSTEMS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {flagshipArsenal.map((tech, idx) => (
              <div
                key={idx}
                onMouseEnter={() => playUiSound("hover")}
                className="p-3.5 rounded-2xl bg-[#08090d]/90 border border-white/10 hover:border-[#d4ff00]/60 hover:bg-[#d4ff00]/10 transition-all text-center group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00] mx-auto mb-2 group-hover:scale-125 transition-transform" />
                <div className="font-sans font-bold text-xs sm:text-sm text-white group-hover:text-[#d4ff00] transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] font-mono-tech text-[#8e95a5] mt-0.5 truncate">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Minimalist Discipline Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
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

        {/* Star Skill Grid with AnimatePresence Category Wave */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategoryIdx}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onMouseEnter={() => playUiSound("hover")}
                className="p-6 rounded-3xl glass-panel group flex flex-col justify-between border border-white/10 hover:border-[#d4ff00]/50 transition-all duration-300 relative overflow-hidden hover:shadow-[0_15px_40px_rgba(212,255,0,0.06)]"
              >
                {/* Tactical HUD Corner Accent */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/10 group-hover:border-[#d4ff00] transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/10 group-hover:border-[#d4ff00] transition-colors" />

                <div>
                  {/* Header: Skill Name & Prominence Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00] group-hover:scale-125 transition-transform" />
                      <span className="font-sans font-bold text-base text-white group-hover:text-[#d4ff00] transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {skill.highlight ? (
                      <span className="px-2.5 py-1 rounded-full bg-[#d4ff00]/15 border border-[#d4ff00]/40 text-[10px] font-mono-tech font-bold text-[#d4ff00] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        CORE
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono-tech text-white/40">
                        LEVEL {skill.level}%
                      </span>
                    )}
                  </div>

                  {/* Star Feature: Explicitly Specified Production Application */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-colors">
                    <div className="text-[10px] font-mono-tech text-[#d4ff00] uppercase tracking-wider font-semibold mb-1.5 flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      <span>PRODUCTION APPLICATION:</span>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed font-sans">
                      {skillProductionContext[skill.name] ||
                        "Production-tested across high-scale applications with clean architecture and strict typing."}
                    </p>
                  </div>
                </div>

                {/* Footer Meta Row */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-white/40">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Production Verified</span>
                  </span>
                  <span className="text-white/20 font-mono-tech">SYS_ID_0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

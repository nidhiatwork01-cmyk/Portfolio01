"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, Plus, Layers, ArrowUpRight, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function SkillsSection() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  const flagshipArsenal = [
    { name: "React 19", role: "Concurrent UI", tag: "Frontend" },
    { name: "Next.js 15", role: "App Router & SSR", tag: "Full Stack" },
    { name: "TypeScript", role: "Strict Generics", tag: "Language" },
    { name: "Tailwind CSS", role: "Design Tokens", tag: "Styling" },
    { name: "Framer Motion", role: "Spring Kinetics", tag: "Motion" },
    { name: "C++17", role: "Kernel /proc Telemetry", tag: "Systems" },
    { name: "PostgreSQL", role: "Relational Schemas", tag: "Database" },
    { name: "Gemini & Llama 3", role: "LLM Streaming", tag: "AI Engines" }
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
    <section id="skills" className="py-28 md:py-36 bg-[#f8fafc] text-[#0f172a] border-y border-slate-200 relative overflow-hidden">
      {/* Soft Pearlescent Mintly Ambient Halo (Reference 3) */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-tr from-pink-200/40 via-purple-100/30 to-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-sky-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Mintly Style: Bold Editorial Typography) */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech font-bold text-slate-900 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              03 SKILLS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0f172a] tracking-tight">
              Systems <span className="text-slate-400 font-normal">Frameworks</span> Tooling
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-slate-500 mt-2 sm:mt-0 uppercase tracking-widest">
            {activeCategory.subtitle}
          </p>
        </div>

        {/* Flagship Arsenal Strip (Light Frosted Pearlescent Capsules) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#6366f1]" />
              <h3 className="font-mono-tech text-xs font-bold text-slate-900 uppercase tracking-wider">
                CORE PRODUCTION ARSENAL &amp; DAILY STACK
              </h3>
            </div>
            <span className="text-[11px] font-mono-tech text-emerald-600 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>VERIFIED IN PRODUCTION</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {flagshipArsenal.map((tech, idx) => (
              <div
                key={idx}
                onMouseEnter={() => playUiSound("hover")}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 hover:border-indigo-300 transition-all text-center group cursor-default shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#6366f1] mx-auto mb-2 group-hover:scale-125 transition-transform" />
                <div className="font-sans font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#6366f1] transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] font-mono-tech text-slate-500 mt-0.5 truncate">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Minimalist Discipline Tabs (Mintly Style Pill Navigation) */}
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
                    ? "bg-[#0f172a] text-white font-bold shadow-md"
                    : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 shadow-2xs"
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Crisp White Skill Cards with Mintly Geometric Plus Aesthetic */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategoryIdx}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => playUiSound("hover")}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-slate-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header: Skill Name & Geometric Plus Button */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#0f172a] group-hover:text-white transition-colors">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="font-sans font-bold text-base text-slate-900 group-hover:text-[#6366f1] transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {skill.highlight ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] font-mono-tech font-bold text-[#6366f1]">
                        CORE
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono-tech text-slate-400">
                        LEVEL {skill.level}%
                      </span>
                    )}
                  </div>

                  {/* Specified Production Application */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-slate-50/80 transition-colors">
                    <div className="text-[10px] font-mono-tech text-indigo-600 uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      <span>PRODUCTION APPLICATION:</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {skillProductionContext[skill.name] ||
                        "Production-tested across high-scale applications with clean architecture and strict typing."}
                    </p>
                  </div>
                </div>

                {/* Footer Meta Row */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Production Verified</span>
                  </span>
                  <span className="text-slate-300 font-mono-tech">SPEC_0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

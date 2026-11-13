"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, Activity, Cpu, Gauge, Code2, CheckCircle2 } from "lucide-react";
import { playUiSound } from "@/lib/sound";

interface HeroSectionProps {
  onOpenCommandPalette: () => void;
}

export default function HeroSection({ onOpenCommandPalette }: HeroSectionProps) {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"benchmark" | "contract" | "telemetry">("benchmark");

  const highlights = [
    { label: "Production Apps", value: "10+", sub: "Shipped & Tested" },
    { label: "KIIT CGPA", value: "9.01", sub: "ECS Engineering" },
    { label: "DSA Solved", value: "200+", sub: "LeetCode Hard/Med" },
    { label: "Defect Leakage", value: "-35%", sub: "Automated QA" },
    { label: "On-Time Sprints", value: "90%", sub: "Startup Velocity" },
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
    <section className="relative min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] flex flex-col justify-between pt-20 pb-5 sm:pt-24 sm:pb-7 overflow-hidden swiss-grid-bg ambient-glow-top border-b border-white/5">
      {/* Dynamic Background Glow Centerpiece */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d4ff00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* 2-Column Luxury Split: Eliminates generic empty void */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto">
          {/* Left Column: Typographic & Editorial Identity (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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

            {/* Sculptural Editorial Headline */}
            <div className="mb-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] tracking-tight leading-[0.95] text-white uppercase space-y-0.5">
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
                className="mt-1"
              >
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] tracking-tight leading-[0.95] text-[#d4ff00] uppercase">
                  &amp; ARCHITECT.
                </h2>
              </motion.div>
            </div>

            {/* Concise Engineering Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-[#8e95a5] max-w-lg leading-relaxed mb-4 font-normal"
            >
              I craft high-stakes enterprise interfaces, fluid design systems, and resilient tools where aesthetic precision meets sub-millisecond runtime performance.
            </motion.p>

            {/* Direct Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 mb-4"
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

            {/* Highlighted Core Arsenal Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-1.5"
            >
              <span className="text-[10px] font-mono-tech text-white/50 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#d4ff00]" />
                CORE ARSENAL:
              </span>
              {arsenalSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono-tech text-white hover:border-[#d4ff00]/50 hover:text-[#d4ff00] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_6px_#d4ff00]" />
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Systems Architecture Console (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="rounded-3xl glass-panel p-5 border border-white/15 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0d0f17]/90 to-[#07080c]/90">
              {/* Tactical Laser Scanline on the Console */}
              <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4ff00] to-transparent top-0 animate-pulse opacity-40 pointer-events-none" />

              {/* Console Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] font-mono-tech text-white/50 ml-1">
                    SYS_MONITOR // NIDHI_ARCH_v2.6
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-[#d4ff00]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
                  <span>60 FPS</span>
                </div>
              </div>

              {/* Console Interactive Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/5 mb-3.5">
                {(["benchmark", "contract", "telemetry"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      playUiSound("blip");
                      setActiveConsoleTab(tab);
                    }}
                    className={`flex-1 py-1 text-[10px] font-mono-tech uppercase rounded-lg transition-all ${
                      activeConsoleTab === tab
                        ? "bg-[#d4ff00] text-[#08090d] font-bold shadow-xs"
                        : "text-[#8e95a5] hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Body */}
              <div className="min-h-[145px]">
                {activeConsoleTab === "benchmark" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-2.5 font-mono-tech"
                  >
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-white/40 uppercase">Commit Latency</div>
                      <div className="text-lg font-bold text-[#d4ff00] mt-0.5">&lt;0.8ms</div>
                      <div className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>Sub-millisecond</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-white/40 uppercase">Layout Shift (CLS)</div>
                      <div className="text-lg font-bold text-white mt-0.5">0.00 CLS</div>
                      <div className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>Zero Jitter</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-white/40 uppercase">React 19 Concurrency</div>
                      <div className="text-lg font-bold text-white mt-0.5">ACTIVE</div>
                      <div className="text-[9px] text-[#d4ff00] flex items-center gap-1 mt-0.5">
                        <Activity className="w-2.5 h-2.5" />
                        <span>Suspense Streams</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-white/40 uppercase">Telemetry Engine</div>
                      <div className="text-lg font-bold text-white mt-0.5">&lt;1% CPU</div>
                      <div className="text-[9px] text-[#8e95a5] flex items-center gap-1 mt-0.5">
                        <Cpu className="w-2.5 h-2.5" />
                        <span>C++17 Lock-Free</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeConsoleTab === "contract" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-[#08090d] border border-white/5 font-mono-tech text-[10px] space-y-1 text-white/80"
                  >
                    <div className="text-white/40">// Engineering Architecture Contract</div>
                    <div><span className="text-purple-400">const</span> architect = <span className="text-emerald-400">&quot;Nidhi Singh&quot;</span>;</div>
                    <div><span className="text-purple-400">const</span> stack = [<span className="text-[#d4ff00]">&quot;Next.js 15&quot;</span>, <span className="text-[#d4ff00]">&quot;React 19&quot;</span>, <span className="text-[#d4ff00]">&quot;C++17&quot;</span>];</div>
                    <div><span className="text-purple-400">const</span> standard = <span className="text-amber-300">&quot;0 Any • 60fps • 0.00 CLS&quot;</span>;</div>
                    <div className="text-[#d4ff00] pt-1">&gt; System Status: PRODUCTION_DEPLOYED</div>
                  </motion.div>
                )}

                {activeConsoleTab === "telemetry" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2 font-mono-tech text-[10px]"
                  >
                    <div className="flex items-center justify-between text-white/60">
                      <span>KIIT ECS CGPA</span>
                      <span className="text-[#d4ff00] font-bold">9.01 / 10.0</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[90.1%] h-full bg-[#d4ff00]" />
                    </div>

                    <div className="flex items-center justify-between text-white/60 pt-1">
                      <span>LeetCode DSA Problems</span>
                      <span className="text-white font-bold">200+ Solved</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between text-white/60 pt-1">
                      <span>On-Time Sprint Velocity</span>
                      <span className="text-white font-bold">90% Metric</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-cyan-400" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Console Footnote */}
              <div className="pt-2.5 mt-2.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono-tech text-white/40">
                <span>MECHANICAL RIGOR</span>
                <span className="text-[#d4ff00]">// TACTILE ERGONOMICS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Metric Rail: Styled Capsules with subtle glass backing */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-3 border-t border-white/10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playUiSound("hover")}
              className="p-2 sm:p-2.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#d4ff00]/40 transition-all group cursor-default"
            >
              <div className="font-display font-black text-lg sm:text-xl text-white group-hover:text-[#d4ff00] transition-colors">
                {item.value}
              </div>
              <div className="font-mono-tech text-[9px] sm:text-[10px] text-[#8e95a5] uppercase tracking-wider font-semibold truncate">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

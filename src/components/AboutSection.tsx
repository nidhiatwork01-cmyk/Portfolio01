"use client";

import React from "react";
import Image from "next/image";
import { Cpu, Binary, Code2, Award, GraduationCap, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function AboutSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "Sub-Millisecond Renders",
      desc: "Zero layout shift (0.00 CLS), sub-millisecond component renders, and clean memory lifecycles.",
    },
    {
      icon: Binary,
      title: "Systems-Level Rigor",
      desc: "C++17 POSIX /proc telemetry, PostgreSQL recursive CTEs, and deep low-level fluency.",
    },
    {
      icon: Code2,
      title: "Design System Ergonomics",
      desc: "Figma design tokens translated into strict TypeScript contracts with fluid spring physics.",
    },
    {
      icon: Award,
      title: "Six Sigma DMAIC Standard",
      desc: "Certified defect mitigation, cutting runtime defect leakage by 35% in enterprise apps.",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 border-b border-white/10 relative overflow-hidden bg-[#07080c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#d4ff00] mb-2">
              01 // CORE PROFILE
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              ENGINEERING IDENTITY
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9ca3af] mt-4 sm:mt-0 text-right hidden sm:block">
            FRONTEND ARCHITECTURE × SYSTEMS DEPTH
          </p>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Portrait & Academic Badge */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0d0f17] shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/speaking-1.jpg"
                  alt="Nidhi Singh speaking on stage"
                  fill
                  className="object-cover object-top grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07080c]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-[#d4ff00] font-semibold">LEAD HOST &amp; PRESENTER</span>
                    <span className="text-white/60">1,000+ AUDIENCE</span>
                  </div>
                  <p className="text-xs text-[#9ca3af] mt-1 font-sans">
                    Flagship stage host for KIIT University tech conclaves.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Credential Pill */}
            <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#d4ff00]" />
                <div>
                  <div className="text-xs font-bold text-white font-mono-tech">
                    KIIT UNIVERSITY (2023 - 2027)
                  </div>
                  <div className="text-[11px] text-[#9ca3af]">
                    B.Tech Electronics &amp; Computer Science
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#d4ff00] font-mono-tech">9.01 CGPA</span>
                <div className="text-[10px] text-white/40 uppercase">Top Tier</div>
              </div>
            </div>
          </div>

          {/* Right Column: Concise Philosophy & 4 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
                I treat the front-end not as decorative styling, but as a{" "}
                <span className="text-[#d4ff00]">high-concurrency mechanical system</span>.
              </p>
              <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed">
                Having engineered low-latency Linux process telemetry engines in C++17 and audited multi-million row financial ledgers at HighRadius, I obsess over zero layout shift, predictable state machines, and sub-millisecond render trees.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#d4ff00]/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d4ff00] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-white uppercase font-mono-tech tracking-wide mb-1 group-hover:text-[#d4ff00] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#9ca3af] leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Verified Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#9ca3af]">
              <span>VERIFIED:</span>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                data-cursor="LEETCODE"
                onClick={() => playUiSound("hover")}
                className="flex items-center gap-1.5 text-white hover:text-[#d4ff00] underline underline-offset-4 transition-colors"
              >
                <span>200+ LeetCode DSA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                onClick={() => playUiSound("hover")}
                className="flex items-center gap-1.5 text-white hover:text-[#d4ff00] underline underline-offset-4 transition-colors"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

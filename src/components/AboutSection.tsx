"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function AboutSection() {
  const pillars = [
    {
      title: "Mechanical Runtime Efficiency",
      desc: "Sub-millisecond render lifecycles, zero layout shift (0.00 CLS), and strict memory profiling.",
    },
    {
      title: "Systems-Level Architecture",
      desc: "Fluency from C++17 POSIX /proc process telemetry to PostgreSQL recursive CTE pipelines.",
    },
    {
      title: "Tactile Design Systems",
      desc: "Figma token architectures translated into strict TypeScript contracts and spring-physics interactions.",
    },
  ];

  return (
    <section id="about" className="py-32 md:py-44 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">01</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PHILOSOPHY &amp; PROFILE
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 uppercase tracking-widest">
            KIIT (9.01 CGPA) • 10+ PRODUCTION APPS
          </span>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0f17] shadow-2xl aspect-[4/5] w-full">
              <Image
                src="/speaking-1.jpg"
                alt="Nidhi Singh speaking on stage"
                fill
                className="object-cover object-top grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono-tech text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                  <span>LEAD STAGE HOST • 1,000+ AUDIENCE</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-2 text-xs font-mono-tech text-[#8e95a5]">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#d4ff00]" />
                <span>KIIT University // ECS</span>
              </span>
              <span className="text-white font-bold">9.01 CGPA</span>
            </div>
          </div>

          {/* Right Column: Statement & 3 Pillars */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold leading-relaxed">
                Most UI engineers treat frontend as purely cosmetic. I approach it as a{" "}
                <span className="text-[#d4ff00]">high-concurrency mechanical system</span>.
              </h3>
              <p className="text-base sm:text-lg text-[#8e95a5] leading-relaxed font-normal">
                From engineering low-latency Linux process telemetry engines in C++17 to auditing multi-million row ERP ledgers with recursive SQL CTEs at HighRadius and building Skadoosh CRM at WhatBytes, I combine systems rigor with fluid, memorable user ergonomics.
              </p>
            </div>

            {/* 3 Pillars List (Clean, airy, horizontal rows) */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <span className="font-mono-tech text-xs text-[#d4ff00] pt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-mono-tech text-sm font-bold text-white uppercase tracking-wider mb-1 group-hover:text-[#d4ff00] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#8e95a5] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Links */}
            <div className="pt-2 flex items-center gap-6 text-xs font-mono-tech text-[#8e95a5]">
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                data-cursor="LEETCODE"
                onClick={() => playUiSound("hover")}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#d4ff00] transition-colors"
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
                className="inline-flex items-center gap-1.5 text-white hover:text-[#d4ff00] transition-colors"
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

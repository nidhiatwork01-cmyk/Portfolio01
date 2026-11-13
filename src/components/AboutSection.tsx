"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Copy, Check, Sparkles, Layers, Cpu, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playUiSound("success");
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: Layers,
      title: "Mechanical Runtime Efficiency",
      desc: "Sub-millisecond render lifecycles, zero layout shift (0.00 CLS), and strict memory profiling in Chrome DevTools.",
      highlight: "0.00 CLS"
    },
    {
      icon: Cpu,
      title: "Systems-Level Architecture",
      desc: "Fluency spanning modern C++17 POSIX /proc process telemetry to high-concurrency PostgreSQL recursive CTE pipelines.",
      highlight: "C++17 & SQL"
    },
    {
      icon: ShieldCheck,
      title: "Tactile Design Systems",
      desc: "Translating multi-variant Figma tokens into strict TypeScript contracts and spring-physics micro-interactions.",
      highlight: "TypeScript Strict"
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#f4f5f8] text-[#0f1117] border-y border-slate-200 relative overflow-hidden">
      {/* Subtle Ethereal Ambient Gradients (Reference Bento style) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-14 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech font-bold text-[#6366f1] bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
              01 ABOUT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0f1117] uppercase tracking-tight">
              PHILOSOPHY &amp; PROFILE
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-slate-500 mt-2 sm:mt-0 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>KIIT (9.01 CGPA) • 10+ PRODUCTION APPS</span>
          </span>
        </div>

        {/* Bento Grid Layout (Inspired by Reference 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Bento Card 1: Lavender Feature Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#7c83fd] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group"
          >
            {/* Top Row: Mini Tag & Sticker */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono-tech font-bold uppercase tracking-wider text-white">
                Creative UI Engineer
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center text-[9px] font-mono-tech font-bold group-hover:rotate-45 transition-transform duration-500">
                2026
              </div>
            </div>

            {/* Circular Framed Portrait */}
            <div className="flex flex-col items-center text-center my-4">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-white via-white/80 to-purple-200 shadow-2xl mb-5 group-hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/speaking-1.jpg"
                    alt="Nidhi Singh"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                I&apos;m Nidhi Singh
              </h3>
              <p className="font-mono-tech text-xs text-white/80 mt-1">
                Frontend Architect // Systems Rigor
              </p>
            </div>

            {/* Email Copy Capsule */}
            <div className="pt-4 mt-2 border-t border-white/20 flex items-center justify-between gap-2">
              <span className="text-xs font-mono-tech text-white/90 truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                data-cursor="COPY"
                className="px-3.5 py-1.5 rounded-full bg-white text-[#7c83fd] hover:bg-white/90 font-mono-tech text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Statement Card & Stats Bento */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Bento Card 2: Editorial Philosophy Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-[#6366f1] uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL ETHOS</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f1117] leading-snug">
                Most UI engineers treat frontend as purely cosmetic. I approach it as a{" "}
                <span className="text-[#6366f1] underline decoration-[#6366f1]/30 underline-offset-4">
                  high-concurrency mechanical system
                </span>.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-sans">
                From engineering low-latency Linux process telemetry engines in C++17 to auditing multi-million row ERP ledgers with recursive SQL CTEs at HighRadius and building Skadoosh CRM at WhatBytes, I combine systems rigor with fluid, memorable user ergonomics.
              </p>
            </motion.div>

            {/* Bento Stats Row with Continuous Smooth Moving Physics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.15,
                  y: { repeat: Infinity, duration: 3.2, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="bg-[#dcfce7] border border-emerald-200/80 rounded-2xl p-4 text-[#064e3b] shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl">10+</div>
                <div className="font-mono-tech text-[10px] uppercase tracking-wider mt-1 font-semibold text-emerald-800">
                  Apps Shipped
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  y: { repeat: Infinity, duration: 3.8, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="bg-[#ede9fe] border border-purple-200/80 rounded-2xl p-4 text-[#4c1d95] shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl">9.01</div>
                <div className="font-mono-tech text-[10px] uppercase tracking-wider mt-1 font-semibold text-purple-800">
                  KIIT CGPA
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.25,
                  y: { repeat: Infinity, duration: 4.4, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="bg-[#fef3c7] border border-amber-200/80 rounded-2xl p-4 text-[#78350f] shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl">200+</div>
                <div className="font-mono-tech text-[10px] uppercase tracking-wider mt-1 font-semibold text-amber-800">
                  LeetCode DSA
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  y: { repeat: Infinity, duration: 5.0, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="bg-[#18181b] border border-zinc-700 rounded-2xl p-4 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#d4ff00]">1K+</div>
                <div className="font-mono-tech text-[10px] uppercase tracking-wider mt-1 font-semibold text-zinc-300">
                  Stage Host
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3 Pillars: Clean White Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => playUiSound("hover")}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#6366f1]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-[#6366f1] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-tech font-bold text-[#6366f1] bg-indigo-50/80 px-2 py-0.5 rounded-md border border-indigo-200/60">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h4 className="font-mono-tech text-sm font-bold text-[#0f1117] uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                  <span>CORE PILLAR</span>
                  <span>0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Profile Links */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-slate-600">
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              data-cursor="LEETCODE"
              onClick={() => playUiSound("hover")}
              className="inline-flex items-center gap-1.5 text-slate-900 font-semibold hover:text-[#6366f1] transition-colors"
            >
              <span>200+ LeetCode DSA</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6366f1]" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              onClick={() => playUiSound("hover")}
              className="inline-flex items-center gap-1.5 text-slate-900 font-semibold hover:text-[#6366f1] transition-colors"
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6366f1]" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <GraduationCap className="w-4 h-4 text-[#6366f1]" />
            <span>KIIT University // Electronics &amp; Computer Science</span>
          </div>
        </div>
      </div>
    </section>
  );
}

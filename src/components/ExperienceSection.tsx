"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, CheckCircle2, Briefcase, Sparkles, Layers } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function ExperienceSection() {
  const experienceHighlights: Record<string, { stat: string; label: string; accent: string }> = {
    "HighRadius": { stat: "-35%", label: "Processing Cycle Time", accent: "bg-[#ea580c] text-white" },
    "WhatBytes": { stat: "10+", label: "Production Apps Shipped", accent: "bg-[#0f172a] text-white" },
    "MagicTeal": { stat: "90%", label: "On-Time Sprint Velocity", accent: "bg-[#ea580c] text-white" },
    "Sellar": { stat: "0.00", label: "Layout Shift (CLS)", accent: "bg-[#0f172a] text-white" },
  };

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#f3ede4] text-[#1c1917] border-y border-[#ded5c6] relative overflow-hidden">
      {/* Subtle Warm Sand Ambient Gradients (Reference 4 ATTN Swiss Style) */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-5 border-b border-[#ded5c6]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech font-bold text-white bg-[#ea580c] px-3 py-1 rounded-full shadow-sm">
              04 EXPERIENCE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1c1917] uppercase tracking-tight">
              WORKSTREAMS &amp; SYSTEMS
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#786c5e] mt-2 sm:mt-0 tracking-widest uppercase flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping" />
            <span>ENTERPRISE &amp; STARTUP TRACK RECORDS</span>
          </p>
        </div>

        {/* ATTN Swiss Editorial Timeline Grid */}
        <div className="space-y-10">
          {EXPERIENCES.map((exp, idx) => {
            const highlight = experienceHighlights[exp.company] || {
              stat: "PROD",
              label: "Verified Deployment",
              accent: "bg-[#ea580c] text-white"
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 350, damping: 22 }
                }}
                className="bg-white rounded-3xl p-7 sm:p-10 border border-[#ded5c6] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Top ATTN Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono-tech font-bold text-[#ea580c] tracking-wider uppercase">
                        EXP // 0{idx + 1}
                      </span>
                      <span className="px-3 py-0.5 rounded-full bg-[#f4efe6] border border-[#ded5c6] text-[11px] font-mono-tech font-bold text-[#1c1917]">
                        {exp.track}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl text-[#1c1917] group-hover:text-[#ea580c] transition-colors uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    <div className="text-sm font-semibold text-slate-700 mt-1 font-sans flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  {/* ATTN Score Stat Box (Reference 4 Style) with Smooth Motion */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5 + idx * 0.5, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2.5 rounded-2xl bg-[#f4efe6] border border-[#ded5c6] text-right shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="font-display font-black text-2xl sm:text-3xl text-[#ea580c] leading-none">
                        {highlight.stat}
                      </div>
                      <div className="font-mono-tech text-[10px] text-slate-600 uppercase tracking-wider mt-1 font-semibold">
                        {highlight.label}
                      </div>
                    </motion.div>

                    <div className="flex items-center gap-3 text-xs font-mono-tech text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#ea580c]" />
                        {exp.timeline}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="py-6 space-y-3 text-sm text-slate-700">
                  {exp.achievements.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-[#ea580c] mt-1 shrink-0" />
                      <span className="leading-relaxed font-sans font-medium text-slate-700 group-hover/item:text-black transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Row: Highlighted Skills & Verification */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider font-bold mr-1 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#ea580c]" />
                      STACK:
                    </span>
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f4efe6] hover:bg-[#ea580c] text-slate-800 hover:text-white border border-[#ded5c6] text-xs font-mono-tech font-bold transition-all shadow-2xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] group-hover:bg-white" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {exp.proofUrl && (
                    <a
                      href={exp.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="PROOF"
                      onClick={() => playUiSound("hover")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1c1917] hover:bg-[#ea580c] text-white text-xs font-mono-tech font-bold transition-all shadow-md shrink-0"
                    >
                      <span>{exp.proofLabel || "View Verification"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

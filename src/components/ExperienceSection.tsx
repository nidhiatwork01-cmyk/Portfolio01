"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, FileCheck } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-b border-white/10 relative bg-[#07080c] swiss-dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#d4ff00] mb-2">
              04 // CHRONOLOGICAL TRACK RECORD
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              ENGINEERING EXPERIENCE
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9ca3af] mt-4 sm:mt-0 max-w-xs text-right hidden sm:block">
            SHIPPED ACROSS HIGH-STAKES ENTERPRISE &amp; STARTUP WORKSTREAMS
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-14">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Telemetry Node on Rail */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#07080c] border-2 border-white/40 group-hover:border-[#d4ff00] group-hover:bg-[#d4ff00] transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#07080c] transition-all" />
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-white/20 transition-all shadow-xl space-y-4">
                {/* Header: Company, Track, Timeline */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#d4ff00] transition-colors">
                        {exp.company}
                      </h3>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono-tech text-[#d4ff00]">
                        {exp.track}
                      </span>
                    </div>
                    <div className="text-sm font-sans font-semibold text-[#f3f4f6] mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono-tech text-[#9ca3af] gap-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#d4ff00]" />
                      {exp.timeline}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/50">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-2 pt-1">
                  <ul className="space-y-2 text-xs sm:text-sm text-[#9ca3af]">
                    {exp.achievements.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#d4ff00] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Verified Proof */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono-tech text-[#9ca3af] border border-white/5"
                      >
                        {tech}
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4ff00]/10 hover:bg-[#d4ff00] text-[#d4ff00] hover:text-[#07080c] font-mono-tech font-bold text-xs transition-all shrink-0"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>{exp.proofLabel || "View Verification Proof"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

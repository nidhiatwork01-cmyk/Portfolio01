"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, CheckCircle2, Briefcase } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 md:py-44 border-b border-white/5 relative bg-gradient-to-b from-transparent via-[#050608]/50 to-transparent">
      {/* Subtle Horizontal Telemetry Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100%_48px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">04</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-ping" />
            <span>ENTERPRISE SYSTEMS &amp; STARTUP WORKSTREAMS</span>
          </p>
        </div>

        {/* Luminous Transit Timeline Track */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-14 ml-2 md:ml-4">
          {/* Animated Vertical Beam Gradient overlay */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-[#d4ff00] via-emerald-400/40 to-transparent pointer-events-none" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ x: 6 }}
              className="relative group"
            >
              {/* Luminous Pulsing Milestone Node on the Rail */}
              <div className="absolute -left-[31px] md:-left-[47px] top-8 w-4 h-4 rounded-full bg-[#08090d] border-2 border-[#d4ff00] flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(212,255,0,0.4)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="p-8 sm:p-10 rounded-3xl glass-panel group space-y-6 border border-white/10 hover:border-[#d4ff00]/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(212,255,0,0.06)]">
                {/* Header: Company, Track, Timeline */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors">
                        {exp.company}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-tech text-[#d4ff00]">
                        {exp.track}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#f8f9fa] mt-1.5 font-sans flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#d4ff00]" />
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end text-xs font-mono-tech text-[#8e95a5] gap-2">
                    <span className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-[#d4ff00]" />
                      {exp.timeline}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/40">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements with Generous Spacing */}
                <ul className="space-y-3.5 text-sm text-[#8e95a5]">
                  {exp.achievements.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-[#d4ff00] mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="leading-relaxed text-[#9ca3af] group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies & Stack Highlight */}
                <div className="pt-6 border-t border-white/5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[10px] font-mono-tech font-bold text-[#d4ff00] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00]" />
                      <span>PRODUCTION SKILLS &amp; TECHNOLOGIES USED</span>
                    </div>
                    {exp.proofUrl && (
                      <a
                        href={exp.proofUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="PROOF"
                        onClick={() => playUiSound("hover")}
                        className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#d4ff00] hover:underline"
                      >
                        <span>{exp.proofLabel || "View Proof"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08090d]/80 hover:bg-[#d4ff00]/15 border border-white/10 hover:border-[#d4ff00]/60 text-xs font-mono-tech text-white hover:text-[#d4ff00] transition-all duration-200 shadow-sm group/pill"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_6px_#d4ff00] group-hover/pill:scale-125 transition-transform" />
                        <span className="font-semibold">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

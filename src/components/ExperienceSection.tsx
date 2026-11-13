"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 md:py-44 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">04</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 tracking-widest uppercase">
            ENTERPRISE SYSTEMS &amp; STARTUP WORKSTREAMS
          </p>
        </div>

        {/* Airy Timeline Grid */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel group space-y-6"
            >
              {/* Header: Company, Track, Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors">
                      {exp.company}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono-tech text-[#d4ff00]">
                      {exp.track}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#f8f9fa] mt-1.5 font-sans">
                    {exp.role}
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end text-xs font-mono-tech text-[#8e95a5] gap-2">
                  <span className="flex items-center gap-1.5">
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
              <ul className="space-y-3 text-sm text-[#8e95a5]">
                {exp.achievements.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4ff00] mt-1 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Award, Mic, Users, CheckCircle } from "lucide-react";
import { HONORS } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function HonorsSection() {
  return (
    <section className="py-24 border-b border-white/10 relative bg-[#07080c] swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#d4ff00] mb-2">
              05 // RECOGNITION &amp; LEADERSHIP
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              HONORS &amp; DISTINCTIONS
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9ca3af] mt-4 sm:mt-0 max-w-xs text-right hidden sm:block">
            LEADERSHIP SPIKES, COMPETITIVE CHAMPIONSHIPS &amp; ACCREDITATIONS
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HONORS.map((honor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onMouseEnter={() => playUiSound("hover")}
              className="p-6 rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#d4ff00]/40 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header: Year & Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-tech text-[#d4ff00] font-bold">
                    {honor.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-tech text-white/80">
                    {honor.badge}
                  </span>
                </div>

                {/* Optional Media Preview */}
                {honor.image && (
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/10 bg-[#07080c]">
                    <Image
                      src={honor.image}
                      alt={honor.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                )}

                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#d4ff00] transition-colors">
                  {honor.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#9ca3af] mb-3">
                  {honor.organization}
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {honor.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-white/40">
                <span>DISTINCTION VERIFIED</span>
                <span className="text-[#d4ff00]">#0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

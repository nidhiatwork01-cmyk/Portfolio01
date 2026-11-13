"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HONORS } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function HonorsSection() {
  return (
    <section className="py-32 md:py-44 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">05</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              HONORS &amp; DISTINCTIONS
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 tracking-widest uppercase">
            LEADERSHIP &amp; COMPETITIVE RECOGNITION
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
              className="p-7 rounded-3xl glass-panel flex flex-col justify-between group"
            >
              <div>
                {/* Year & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech text-[#d4ff00] font-bold">
                    {honor.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono-tech text-[#8e95a5]">
                    {honor.badge}
                  </span>
                </div>

                {/* Media Preview */}
                {honor.image && (
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 bg-[#08090d] border border-white/5">
                    <Image
                      src={honor.image}
                      alt={honor.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                )}

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#d4ff00] transition-colors">
                  {honor.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#8e95a5] mt-1 mb-3">
                  {honor.organization}
                </div>

                <p className="text-xs sm:text-sm text-[#8e95a5] leading-relaxed font-sans">
                  {honor.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-white/30">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#d4ff00]" />
                  <span>Accreditation</span>
                </span>
                <span>#{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

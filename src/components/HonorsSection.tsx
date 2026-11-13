"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Award, Trophy, Star, Shield } from "lucide-react";
import { HONORS } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function HonorsSection() {
  const badgeStyles: Record<string, { border: string; bg: string; text: string; icon: any }> = {
    "McKinsey & Company": {
      border: "border-sky-500/30 group-hover:border-sky-400/60",
      bg: "bg-sky-500/10",
      text: "text-sky-400",
      icon: Shield,
    },
    "AI Innovation Championship": {
      border: "border-[#d4ff00]/30 group-hover:border-[#d4ff00]/60",
      bg: "bg-[#d4ff00]/10",
      text: "text-[#d4ff00]",
      icon: Trophy,
    },
    "Quality Management Framework": {
      border: "border-emerald-500/30 group-hover:border-emerald-400/60",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      icon: Award,
    },
    "IIT Guwahati": {
      border: "border-purple-500/30 group-hover:border-purple-400/60",
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      icon: Star,
    },
    "KIIT Anchoring Society": {
      border: "border-amber-400/30 group-hover:border-amber-400/60",
      bg: "bg-amber-400/10",
      text: "text-amber-300",
      icon: Trophy,
    },
  };

  return (
    <section className="py-32 md:py-44 border-b border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent via-[#080705]/40 to-transparent">
      {/* Warm Ambient Golden/Emerald Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-amber-400">05</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              HONORS &amp; DISTINCTIONS
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 tracking-widest uppercase flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>LEADERSHIP &amp; COMPETITIVE RECOGNITION</span>
          </p>
        </div>

        {/* Honors Grid with Organic Breathing Levitation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HONORS.map((honor, idx) => {
            const style = badgeStyles[honor.organization] || {
              border: "border-white/10 group-hover:border-[#d4ff00]/40",
              bg: "bg-white/5",
              text: "text-white",
              icon: Sparkles,
            };
            const IconComp = style.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  y: {
                    repeat: Infinity,
                    duration: 4.5 + (idx % 3) * 0.8,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                onMouseEnter={() => playUiSound("hover")}
                className={`p-7 rounded-3xl glass-panel flex flex-col justify-between group relative overflow-hidden border ${style.border} transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(255,215,0,0.06)]`}
              >
                {/* Metallic Light Sheen Sweep Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div>
                  {/* Year & Specialized Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-tech text-amber-300 font-bold flex items-center gap-1.5">
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{honor.year}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono-tech border ${style.border} ${style.bg} ${style.text} font-bold`}>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
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
                  <span className="flex items-center gap-1.5 text-amber-400/80">
                    <Sparkles className="w-3 h-3" />
                    <span>Accreditation</span>
                  </span>
                  <span className="text-white/20">DISTINCTION_0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

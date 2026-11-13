"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, GraduationCap, Compass, Layers, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Interactive 3D Perspective Tilt Physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateXSpring = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    damping: 25,
    stiffness: 250,
  });
  const rotateYSpring = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), {
    damping: 25,
    stiffness: 250,
  });

  const sheenX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const pillars = [
    {
      icon: Layers,
      title: "Mechanical Runtime Efficiency",
      desc: "Sub-millisecond render lifecycles, zero layout shift (0.00 CLS), and strict memory profiling in Chrome DevTools.",
      highlight: "0.00 CLS"
    },
    {
      icon: Compass,
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
    <section id="about" className="py-32 md:py-44 border-b border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent via-[#06070a]/40 to-transparent">
      {/* Distinct Blueprint / Diagonal Architectural Atmosphere */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(135deg,#ffffff_10%,transparent_10%,transparent_50%,#ffffff_50%,#ffffff_60%,transparent_60%,transparent_100%)] bg-[length:32px_32px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">01</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PHILOSOPHY &amp; PROFILE
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>KIIT (9.01 CGPA) • 10+ PRODUCTION APPS</span>
          </span>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: 3D Holographic Tilt Portrait */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => playUiSound("hover")}
              className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0d0f17] shadow-2xl aspect-[4/5] w-full group cursor-pointer transition-shadow hover:shadow-[0_20px_50px_rgba(212,255,0,0.12)]"
            >
              <Image
                src="/speaking-1.jpg"
                alt="Nidhi Singh speaking on stage"
                fill
                className="object-cover object-top grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-black/20 to-transparent opacity-80" />

              {/* Dynamic Interactive Light Sheen Reflection */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                style={{
                  transform: "translateZ(30px)",
                }}
              />

              {/* Floating Overlay Badge with 3D Depth */}
              <div
                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:translate-y-[-4px]"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono-tech text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00]" />
                  <span>LEAD STAGE HOST • 1,000+ AUDIENCE</span>
                </div>
              </div>
            </motion.div>

            <div className="mt-4 flex items-center justify-between px-2 text-xs font-mono-tech text-[#8e95a5]">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#d4ff00]" />
                <span>KIIT University // ECS</span>
              </span>
              <span className="text-[#d4ff00] font-bold">9.01 CGPA</span>
            </div>
          </div>

          {/* Right Column: Statement & Kinetic Staggered Pillars */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold leading-relaxed">
                Most UI engineers treat frontend as purely cosmetic. I approach it as a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] to-emerald-300 font-bold">
                  high-concurrency mechanical system
                </span>.
              </h3>
              <p className="text-base sm:text-lg text-[#8e95a5] leading-relaxed font-normal">
                From engineering low-latency Linux process telemetry engines in C++17 to auditing multi-million row ERP ledgers with recursive SQL CTEs at HighRadius and building Skadoosh CRM at WhatBytes, I combine systems rigor with fluid, memorable user ergonomics.
              </p>
            </motion.div>

            {/* 3 Pillars List with Distinct Kinetic Slide Animation */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.12 }}
                    whileHover={{ x: 6 }}
                    onMouseEnter={() => playUiSound("hover")}
                    className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#d4ff00]/40 transition-all duration-300 flex items-start gap-4 group cursor-default"
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#d4ff00] group-hover:bg-[#d4ff00]/15 group-hover:scale-110 transition-all shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-mono-tech text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#d4ff00] transition-colors">
                          {pillar.title}
                        </h4>
                        <span className="text-[10px] font-mono-tech text-[#d4ff00] bg-[#d4ff00]/10 px-2 py-0.5 rounded-md border border-[#d4ff00]/20 font-bold">
                          {pillar.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-[#8e95a5] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Verified Links with Magnetic Hover Effect */}
            <div className="pt-2 flex items-center gap-6 text-xs font-mono-tech text-[#8e95a5]">
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                data-cursor="LEETCODE"
                onClick={() => playUiSound("hover")}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#d4ff00] transition-colors group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">200+ LeetCode DSA</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                onClick={() => playUiSound("hover")}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#d4ff00] transition-colors group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

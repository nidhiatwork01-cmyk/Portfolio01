"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutGrid, Table, ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { PROJECTS, Project } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"cards" | "matrix">("cards");

  const categories = ["ALL", "AI & DATA", "FRONTEND", "SYSTEMS", "FULL STACK"];

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section id="projects" className="py-32 md:py-44 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">02</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              FEATURED WORK
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/10">
              <button
                onClick={() => {
                  playUiSound("toggle");
                  setViewMode("cards");
                }}
                data-cursor="DECK"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-tech transition-all ${
                  viewMode === "cards"
                    ? "bg-[#d4ff00] text-[#08090d] font-bold"
                    : "text-[#8e95a5] hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>CARDS</span>
              </button>

              <button
                onClick={() => {
                  playUiSound("toggle");
                  setViewMode("matrix");
                }}
                data-cursor="MATRIX"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-tech transition-all ${
                  viewMode === "matrix"
                    ? "bg-[#d4ff00] text-[#08090d] font-bold"
                    : "text-[#8e95a5] hover:text-white"
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>INDEX</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playUiSound("blip");
                  setActiveCategory(cat);
                }}
                data-cursor={cat}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all ${
                  isSelected
                    ? "bg-white/10 text-[#d4ff00] border border-[#d4ff00]/40 font-semibold"
                    : "text-[#8e95a5] hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* View Mode A: Spacious 2-Column Luxury Cards with Highlighted Tech Stack */}
        {viewMode === "cards" && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project, projectIdx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: projectIdx * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  playUiSound("click");
                  onSelectProject(project);
                }}
                data-cursor="VIEW"
                className="group relative rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-[#d4ff00]/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(212,255,0,0.08)]"
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono-tech uppercase text-[#8e95a5] tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#d4ff00] flex items-center gap-1.5 bg-[#d4ff00]/10 px-2.5 py-0.5 rounded-full border border-[#d4ff00]/20">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      {project.highlightBadge}
                    </span>
                  </div>

                  {/* Cinematic Image Preview with Interactive Laser Scanning Beam */}
                  {project.image ? (
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#08090d] border border-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      />
                      {/* Laser Scanning Beam Animation on Hover */}
                      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4ff00] to-transparent -top-2 group-hover:top-[105%] transition-all duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-90 shadow-[0_0_12px_#d4ff00]" />
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 flex flex-col items-center justify-center p-6 text-center">
                      <div className="text-xs font-mono-tech text-[#d4ff00] mb-1">
                        C++17 ENGINE ARCHITECTURE
                      </div>
                      <div className="text-xl font-display font-bold text-white">
                        KERNEL /PROC TELEMETRY
                      </div>
                      <div className="text-[11px] font-mono-tech text-[#8e95a5] mt-2">
                        &lt;1.0% CPU OVERHEAD • LOCK-FREE
                      </div>
                      {/* Laser Scanning Beam Animation on Hover */}
                      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4ff00] to-transparent -top-2 group-hover:top-[105%] transition-all duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-90 shadow-[0_0_12px_#d4ff00]" />
                    </div>
                  )}

                  {/* Title & Technical Subtitle */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[#d4ff00] mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Clean Engineering Summary */}
                  <p className="text-sm text-[#9ca3af] leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Star Feature: Highlighted Skills & Tech Stack Showcase */}
                  <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:border-[#d4ff00]/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-[10px] font-mono-tech font-bold text-[#d4ff00] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00]" />
                        <span>CORE TECHNOLOGIES &amp; SKILLS</span>
                      </div>
                      <span className="text-[10px] font-mono-tech text-white/40 uppercase">
                        {project.techStack.length} Stacked
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08090d]/80 hover:bg-[#d4ff00]/15 border border-white/10 hover:border-[#d4ff00]/60 text-xs font-mono-tech text-white hover:text-[#d4ff00] transition-all duration-200 shadow-sm group/pill"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_6px_#d4ff00] group-hover/pill:scale-125 transition-transform" />
                          <span className="font-semibold tracking-tight">{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Meta Row: Key Metric + Action Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-lg text-[#d4ff00]">
                      {project.metrics[0]?.value}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#8e95a5] uppercase">
                      {project.metrics[0]?.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tech font-bold text-white group-hover:text-[#d4ff00] flex items-center gap-1.5 transition-colors">
                      <span>CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View Mode B: Systems Matrix */}
        {viewMode === "matrix" && (
          <div className="overflow-x-auto rounded-3xl glass-panel shadow-2xl">
            <table className="w-full text-left border-collapse font-mono-tech text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[#8e95a5]">
                  <th className="py-4 px-6 uppercase tracking-wider">Project</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Category</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Core Technologies</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Key Metric</th>
                  <th className="py-4 px-6 uppercase tracking-wider text-right">Links</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#f8f9fa]">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => {
                      playUiSound("click");
                      onSelectProject(project);
                    }}
                    data-cursor="OPEN"
                    className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                  >
                    <td className="py-5 px-6">
                      <div className="font-bold text-white group-hover:text-[#d4ff00] transition-colors text-base font-sans uppercase">
                        {project.title}
                      </div>
                      <div className="text-[11px] text-[#d4ff00] mt-0.5">{project.subtitle}</div>
                    </td>

                    <td className="py-5 px-6 text-[#8e95a5]">
                      {project.category}
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex flex-wrap gap-1.5 max-w-sm">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#08090d] text-[11px] font-mono-tech font-medium text-white border border-white/10 hover:border-[#d4ff00]/50 hover:text-[#d4ff00] transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#d4ff00] shadow-[0_0_4px_#d4ff00]" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <div className="text-[#d4ff00] font-bold text-sm">
                        {project.metrics[0]?.value}
                      </div>
                      <div className="text-[10px] text-[#8e95a5]">
                        {project.metrics[0]?.label}
                      </div>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <div
                        className="inline-flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="LIVE"
                            onClick={() => playUiSound("warp")}
                            className="px-3 py-1.5 rounded-full bg-[#d4ff00]/10 hover:bg-[#d4ff00] text-[#d4ff00] hover:text-[#08090d] font-bold text-[11px] transition-all"
                          >
                            DEMO
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="GITHUB"
                          onClick={() => playUiSound("click")}
                          className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#8e95a5] hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

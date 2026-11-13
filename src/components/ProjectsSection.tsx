"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutGrid, Table, ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
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
                <span>GRID</span>
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

        {/* View Mode A: Spacious 2-Column Luxury Cards */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  playUiSound("click");
                  onSelectProject(project);
                }}
                data-cursor="VIEW"
                className="group relative rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono-tech uppercase text-[#8e95a5] tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#d4ff00] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {project.highlightBadge}
                    </span>
                  </div>

                  {/* Cinematic Image Preview */}
                  {project.image ? (
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#08090d] border border-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      />
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
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[#8e95a5] mt-1.5 mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Footer Meta Row */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {/* Primary Key Metric */}
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-lg text-[#d4ff00]">
                      {project.metrics[0]?.value}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#8e95a5] uppercase">
                      {project.metrics[0]?.label}
                    </span>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tech font-bold text-white group-hover:text-[#d4ff00] flex items-center gap-1.5 transition-colors">
                      <span>CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View Mode B: Systems Matrix */}
        {viewMode === "matrix" && (
          <div className="overflow-x-auto rounded-3xl glass-panel shadow-2xl">
            <table className="w-full text-left border-collapse font-mono-tech text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[#8e95a5]">
                  <th className="py-4 px-6 uppercase tracking-wider">Project</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Category</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Core Stack</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Benchmark</th>
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
                      <div className="text-[11px] text-[#8e95a5] mt-0.5">{project.subtitle}</div>
                    </td>

                    <td className="py-5 px-6 text-[#8e95a5]">
                      {project.category}
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex flex-wrap gap-1.5 max-w-xs">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-[#8e95a5]"
                          >
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

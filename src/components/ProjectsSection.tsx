"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutGrid, Table, ArrowUpRight, ExternalLink, Terminal, Sparkles, Filter } from "lucide-react";
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
    <section id="projects" className="py-24 border-b border-white/10 relative bg-[#07080c] swiss-dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#d4ff00] mb-2">
              02 // PRODUCTION SHOWCASE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              FEATURED SYSTEMS &amp; INTERFACES
            </h2>
          </div>

          {/* View Mode Toggle: Cards vs Systems Matrix */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => {
                  playUiSound("toggle");
                  setViewMode("cards");
                }}
                data-cursor="DECK"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                  viewMode === "cards"
                    ? "bg-[#d4ff00] text-[#07080c] font-bold"
                    : "text-[#9ca3af] hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>3D DECK</span>
              </button>

              <button
                onClick={() => {
                  playUiSound("toggle");
                  setViewMode("matrix");
                }}
                data-cursor="MATRIX"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                  viewMode === "matrix"
                    ? "bg-[#d4ff00] text-[#07080c] font-bold"
                    : "text-[#9ca3af] hover:text-white"
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>SYSTEMS MATRIX</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
          <span className="text-xs font-mono-tech text-white/40 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#d4ff00]" />
            FILTER:
          </span>
          {categories.map((cat) => {
            const count =
              cat === "ALL"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category.toUpperCase() === cat).length;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  playUiSound("blip");
                  setActiveCategory(cat);
                }}
                data-cursor={cat}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-white/15 text-[#d4ff00] border border-[#d4ff00]/40 font-semibold glow-lime-sm"
                    : "bg-white/[0.02] text-[#9ca3af] hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] text-white/40">[{count}]</span>
              </button>
            );
          })}
        </div>

        {/* View Mode A: 3D Interactive Tilt Deck */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  playUiSound("click");
                  onSelectProject(project);
                }}
                data-cursor="INSPECT"
                className="group relative rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#d4ff00]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
              >
                {/* Background decorative corner crosshairs */}
                <div className="absolute top-2 right-2 text-[10px] font-mono-tech text-white/20 group-hover:text-[#d4ff00] transition-colors">
                  +
                </div>

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-[#9ca3af] group-hover:text-white uppercase">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#d4ff00] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {project.highlightBadge}
                    </span>
                  </div>

                  {/* Optional Image Preview */}
                  {project.image && (
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/5 bg-[#07080c]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[#d4ff00] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[#9ca3af] mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-white/70 font-sans leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 mb-4 bg-white/[0.01] rounded-lg">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center px-1">
                        <div className="font-display font-bold text-xs sm:text-sm text-[#d4ff00]">
                          {m.value}
                        </div>
                        <div className="font-mono-tech text-[9px] text-[#9ca3af] uppercase truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 text-[#9ca3af] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-white/5 text-white/40">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Footer: Links & Action */}
                  <div className="flex items-center justify-between pt-2 text-xs font-mono-tech">
                    <span className="text-[#d4ff00] group-hover:underline flex items-center gap-1 font-semibold">
                      <span>EXPAND CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <div
                      className="flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="LIVE"
                          onClick={() => playUiSound("warp")}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[#d4ff00] text-[#9ca3af] hover:text-[#07080c] transition-colors"
                          title="Open Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="CODE"
                        onClick={() => playUiSound("click")}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#9ca3af] hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View Mode B: Systems Matrix (Dense Table) */}
        {viewMode === "matrix" && (
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0d0f17] shadow-2xl">
            <table className="w-full text-left border-collapse font-mono-tech text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-[#9ca3af]">
                  <th className="py-4 px-6 uppercase tracking-wider">Project ID &amp; Title</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Classification</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Primary Stack</th>
                  <th className="py-4 px-6 uppercase tracking-wider">Benchmark Metric</th>
                  <th className="py-4 px-6 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#f3f4f6]">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => {
                      playUiSound("click");
                      onSelectProject(project);
                    }}
                    data-cursor="OPEN"
                    className="hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6">
                      <div className="font-bold text-white group-hover:text-[#d4ff00] transition-colors text-sm font-sans uppercase">
                        {project.title}
                      </div>
                      <div className="text-[11px] text-[#9ca3af]">{project.subtitle}</div>
                    </td>

                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-white/80">
                        {project.category}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-[#9ca3af]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="text-[#d4ff00] font-bold text-sm">
                        {project.metrics[0]?.value}
                      </div>
                      <div className="text-[10px] text-[#9ca3af]">
                        {project.metrics[0]?.label}
                      </div>
                    </td>

                    <td className="py-4 px-6 text-right">
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
                            className="px-3 py-1.5 rounded-lg bg-[#d4ff00]/10 hover:bg-[#d4ff00] text-[#d4ff00] hover:text-[#07080c] font-bold text-[11px] transition-all"
                          >
                            LIVE
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="GITHUB"
                          onClick={() => playUiSound("click")}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#9ca3af] hover:text-white transition-colors"
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

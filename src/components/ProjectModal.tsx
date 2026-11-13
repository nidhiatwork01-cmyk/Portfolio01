"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { Project } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playUiSound("click");
        onClose();
      }
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playUiSound("click");
            onClose();
          }}
          className="absolute inset-0 bg-[#07080c]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d0f17] border border-white/20 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[#0d0f17]/95 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#d4ff00]/10 border border-[#d4ff00]/40 text-[#d4ff00] text-[11px] font-mono-tech font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono-tech text-white/40 hidden sm:inline-block">
                SYS_ID: {project.id}
              </span>
            </div>

            <button
              onClick={() => {
                playUiSound("click");
                onClose();
              }}
              data-cursor="CLOSE"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#9ca3af] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-emerald-400 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>{project.highlightBadge}</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                {project.title}
              </h2>
              <p className="font-mono-tech text-sm text-[#d4ff00] mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Optional Project Hero Visual */}
            {project.image && (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-[#07080c]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Benchmark Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-display font-bold text-lg sm:text-2xl text-[#d4ff00]">
                    {metric.value}
                  </div>
                  <div className="font-mono-tech text-[10px] text-[#9ca3af] uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural Deep-Dive Narrative */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#d4ff00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00]" />
                <span>ARCHITECTURAL EXECUTION &amp; BENCHMARK</span>
              </div>
              <p className="text-sm sm:text-base text-[#e5e7eb] leading-relaxed font-sans font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Star Feature: Highlighted Skills & Dependency Matrix */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/15 space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-white">
                  <Sparkles className="w-4 h-4 text-[#d4ff00]" />
                  <span>CORE SKILLS &amp; PRODUCTION STACK</span>
                </div>
                <span className="text-[11px] font-mono-tech text-[#d4ff00] font-bold">
                  {project.techStack.length} VERIFIED TECHNOLOGIES
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-[#08090d] border border-white/15 hover:border-[#d4ff00] text-xs font-mono-tech font-semibold text-white hover:text-[#d4ff00] flex items-center gap-2 shadow-md transition-all group/modalpill"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#d4ff00] shadow-[0_0_8px_#d4ff00] group-hover/modalpill:scale-125 transition-transform" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LIVE"
                  onClick={() => playUiSound("warp")}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4ff00] hover:bg-[#b8dd00] text-[#07080c] font-bold text-xs uppercase tracking-wider transition-all glow-lime-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LAUNCH LIVE APPLICATION</span>
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="CODE"
                onClick={() => playUiSound("click")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono-tech text-xs uppercase tracking-wider transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#d4ff00]" />
                <span>INSPECT SOURCE CODE</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

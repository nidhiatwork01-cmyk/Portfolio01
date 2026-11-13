"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HonorsSection from "@/components/HonorsSection";
import ContactSection from "@/components/ContactSection";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import { PROJECTS, Project } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Preloader Calibration Sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10;
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <>
      {/* Precision Context-Aware Cursor */}
      <CustomCursor />

      {/* Interactive WebGL/Canvas Particle Grid */}
      <BackgroundCanvas />

      {/* Terminal Boot Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#07080c] flex flex-col items-center justify-center p-6 select-none font-mono-tech"
          >
            <div className="w-full max-w-md space-y-6">
              <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
                  INITIALIZING ARCHITECTURE
                </span>
                <span className="text-[#d4ff00] font-bold">{Math.min(loadProgress, 100)}%</span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#d4ff00]"
                  style={{ width: `${Math.min(loadProgress, 100)}%` }}
                />
              </div>

              {/* Telemetry boot log */}
              <div className="text-[11px] text-white/50 space-y-1">
                <div>&gt; MOUNTING_UI_ENGINE (REACT 19 + NEXT.JS 15)... [OK]</div>
                <div>&gt; INITIALIZING_SPRING_PHYSICS_AND_CURSOR... [OK]</div>
                <div>&gt; VERIFYING_ENTERPRISE_SYSTEMS_TELEMETRY... [OK]</div>
                <div className="text-[#d4ff00]">&gt; NIDHI SINGH // READY TO DEPLOY</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Layout */}
      <div className="relative min-h-screen flex flex-col z-10">
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        <main className="flex-1">
          <HeroSection onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
          <AboutSection />
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <SkillsSection />
          <ExperienceSection />
          <HonorsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Project Deep-Dive Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Global Cmd+K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectById}
      />
    </>
  );
}

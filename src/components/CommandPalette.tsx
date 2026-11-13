"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Terminal,
  Code2,
  FolderGit2,
  Mail,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound, toggleSound, isSoundEnabled } from "@/lib/sound";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        playUiSound("click");
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    {
      id: "sec-about",
      title: "Jump to 01 // Engineering Identity",
      category: "Navigation",
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      id: "sec-projects",
      title: "Jump to 02 // Production Showcase",
      category: "Navigation",
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "sec-skills",
      title: "Jump to 03 // Systems & Skills",
      category: "Navigation",
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      id: "sec-experience",
      title: "Jump to 04 // Experience Timeline",
      category: "Navigation",
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "sec-contact",
      title: "Jump to 05 // Transmission / Contact",
      category: "Navigation",
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    ...PROJECTS.map((p) => ({
      id: `proj-${p.id}`,
      title: `Inspect Case Study: ${p.title} (${p.category})`,
      category: "Projects",
      action: () => {
        onSelectProject(p.id);
        onClose();
      },
    })),
    {
      id: "act-copy-email",
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: "Actions",
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        playUiSound("success");
        onClose();
      },
    },
    {
      id: "act-toggle-sound",
      title: "Toggle Tactical Audio Feedback",
      category: "Actions",
      action: () => {
        toggleSound();
        onClose();
      },
    },
    {
      id: "ext-github",
      title: "Open GitHub Profile (nidhiatwork01-cmyk)",
      category: "External",
      action: () => {
        window.open(PERSONAL_INFO.socials.github, "_blank");
        onClose();
      },
    },
    {
      id: "ext-linkedin",
      title: "Open LinkedIn Profile (Nidhi Singh)",
      category: "External",
      action: () => {
        window.open(PERSONAL_INFO.socials.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "ext-leetcode",
      title: "Open LeetCode (200+ Solved)",
      category: "External",
      action: () => {
        window.open(PERSONAL_INFO.socials.leetcode, "_blank");
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      playUiSound("blip");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      playUiSound("blip");
    } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
      e.preventDefault();
      playUiSound("click");
      filteredActions[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
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

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className="relative w-full max-w-2xl bg-[#0d0f17] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col font-mono-tech"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-4 border-b border-white/10 gap-3 bg-white/[0.02]">
            <Search className="w-5 h-5 text-[#d4ff00] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDownList}
              placeholder="Type a command, project, or section..."
              className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-white/40"
            />
            <kbd className="px-2 py-0.5 text-[10px] bg-white/10 rounded border border-white/10 text-white/60">
              ESC
            </kbd>
          </div>

          {/* Action List */}
          <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/5">
            {filteredActions.length === 0 ? (
              <div className="py-10 text-center text-xs text-[#9ca3af]">
                No matching telemetry commands found for &quot;{query}&quot;.
              </div>
            ) : (
              filteredActions.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      playUiSound("click");
                      item.action();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#d4ff00] text-[#07080c] font-bold"
                        : "text-[#f3f4f6] hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span
                        className={`text-[9px] uppercase px-1.5 py-0.5 rounded border ${
                          isSelected
                            ? "bg-[#07080c]/20 border-[#07080c]/30 text-[#07080c]"
                            : "bg-white/5 border-white/10 text-[#9ca3af]"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </div>

                    <ArrowRight
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isSelected ? "text-[#07080c]" : "text-white/30"
                      }`}
                    />
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[10px] text-[#9ca3af]">
            <span>NAVIGATE: ↑↓ • EXECUTE: ↵</span>
            <span className="text-[#d4ff00]">CMD+K CONSOLE ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Command, Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { playUiSound, toggleSound } from "@/lib/sound";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [fps, setFps] = useState(60);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Live IST Clock (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Real-time FPS monitor
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measureFps = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFps);
    };

    animId = requestAnimationFrame(measureFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Scroll listener for border opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = toggleSound();
    setSoundActive(active);
    if (active) {
      playUiSound("toggle");
    }
  };

  const navLinks = [
    { label: "ABOUT", href: "#about", code: "01" },
    { label: "PROJECTS", href: "#projects", code: "02" },
    { label: "SKILLS", href: "#skills", code: "03" },
    { label: "EXPERIENCE", href: "#experience", code: "04" },
    { label: "CONTACT", href: "#contact", code: "05" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#07080c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand & Telemetry Node */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              data-cursor="HOME"
              onClick={() => playUiSound("blip")}
              className="group flex items-center gap-2.5 font-mono-tech text-xs tracking-wider font-semibold text-white transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff00]"></span>
              </span>
              <span className="font-bold tracking-tight text-sm text-[#f3f4f6] group-hover:text-[#d4ff00] transition-colors">
                NIDHI SINGH
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded text-[#9ca3af]">
                SYS_VER 2.6
              </span>
            </a>

            {/* Live Telemetry (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-white/10 text-[11px] font-mono-tech text-[#9ca3af]">
              <span className="flex items-center gap-1">
                <span className="text-white/40">IST:</span>
                <span className="text-[#d4ff00]">{currentTime || "23:00:00"}</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1">
                <span className="text-white/40">FPS:</span>
                <span className={fps >= 55 ? "text-emerald-400" : "text-amber-400"}>
                  {fps}
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0b0d13]/90 border border-white/15 rounded-full px-3 py-1 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.code}
                href={link.href}
                data-cursor="GOTO"
                onClick={() => playUiSound("hover")}
                className="px-3 py-1.5 text-xs font-mono-tech text-[#9ca3af] hover:text-[#d4ff00] transition-all hover:bg-white/[0.05] rounded-full flex items-center gap-1.5 group"
              >
                <span className="text-[10px] text-white/30 group-hover:text-[#d4ff00]/60">
                  {link.code}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Action HUD: Sound, Cmd+K, Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              data-cursor="SFX"
              title={soundActive ? "Mute interactive audio feedback" : "Enable tactile Web Audio synthesis"}
              className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
                soundActive
                  ? "bg-[#d4ff00]/10 border-[#d4ff00] text-[#d4ff00] glow-lime-sm"
                  : "bg-white/[0.04] border-white/10 text-[#9ca3af] hover:text-white"
              }`}
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Cmd+K Launcher */}
            <button
              onClick={() => {
                playUiSound("click");
                onOpenCommandPalette();
              }}
              data-cursor="CMD+K"
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#9ca3af] hover:text-white transition-all text-xs font-mono-tech"
            >
              <Command className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span>COMMAND</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/10 text-white/70">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                playUiSound("click");
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#07080c]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 font-mono-tech">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#9ca3af]">
                <span>STATUS: OPERATIONAL</span>
                <span className="text-[#d4ff00]">IST {currentTime}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.code}
                  href={link.href}
                  onClick={() => {
                    playUiSound("blip");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 text-base text-white hover:text-[#d4ff00] border-b border-white/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-[#d4ff00]">{link.code}</span>
                    <span className="font-sans font-semibold tracking-wide">{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ca3af]" />
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="mt-2 w-full py-3 bg-[#d4ff00] text-[#07080c] font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                Launch Command Palette
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import React from "react";
import { ArrowUp, Terminal, Shield, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function Footer() {
  const scrollToTop = () => {
    playUiSound("warp");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 py-16 relative overflow-hidden font-mono-tech text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Telemetry Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 mb-8 border-b border-white/5 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            <span className="text-white font-bold tracking-tight">
              NIDHI SINGH // SYSTEMS ARCHITECTURE
            </span>
            <span className="text-white/40 hidden sm:inline-block">•</span>
            <span className="text-[#9ca3af] hidden sm:inline-block">
              SYS_INTEGRITY: 100% (0.00 CLS)
            </span>
          </div>

          <div className="flex items-center gap-6 text-[#9ca3af]">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d4ff00] transition-colors"
            >
              GITHUB
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d4ff00] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d4ff00] transition-colors"
            >
              LEETCODE
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#d4ff00] transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back-to-Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50">
          <div>
            <span>© {new Date().getFullYear()} NIDHI SINGH. CRAFTED FROM SCRATCH IN NEXT.JS 15 &amp; TAILWIND.</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4ff00]/40 text-[#9ca3af] hover:text-[#d4ff00] transition-all"
          >
            <span>RETURN TO APEX</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

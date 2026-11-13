"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { playUiSound } from "@/lib/sound";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playUiSound("success");

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#d4ff00", "#ffffff", "#00e5ff"],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playUiSound("success");
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#d4ff00", "#ffffff", "#00e5ff"],
    });

    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Recruiter / Team"}`);
    const body = encodeURIComponent(
      `Hi Nidhi,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 md:py-44 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#d4ff00]">06</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              CONNECT
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8e95a5] mt-2 sm:mt-0 tracking-widest uppercase">
            OPEN TO OPPORTUNITIES WORLDWIDE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-3xl text-white leading-tight">
                Let&apos;s build something <span className="text-[#d4ff00]">exceptional</span>.
              </h3>
              <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed font-sans">
                Available for creative frontend engineering roles, fluid design system development, and high-impact teams.
              </p>
            </div>

            {/* One-Click Copy Email Pill */}
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="text-[10px] font-mono-tech text-[#8e95a5] uppercase tracking-wider">
                DIRECT INBOX
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono-tech text-sm text-white font-semibold truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className={`px-4 py-2 rounded-full text-xs font-mono-tech flex items-center gap-2 transition-all shrink-0 ${
                    copied
                      ? "bg-emerald-500 text-[#08090d] font-bold"
                      : "bg-[#d4ff00] hover:bg-[#c2eb00] text-[#08090d] font-bold glow-lime-sm"
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="GITHUB"
                onClick={() => playUiSound("hover")}
                className="px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs font-mono-tech text-white flex items-center gap-2 transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff00]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="LINKEDIN"
                onClick={() => playUiSound("hover")}
                className="px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs font-mono-tech text-white flex items-center gap-2 transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff00]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                data-cursor="LEETCODE"
                onClick={() => playUiSound("hover")}
                className="px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs font-mono-tech text-white flex items-center gap-2 transition-colors"
              >
                <span>LEETCODE (200+)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff00]" />
              </a>
            </div>
          </div>

          {/* Right Column: Cyber Terminal Message Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel relative overflow-hidden border border-white/10 hover:border-[#d4ff00]/30 transition-all duration-300 shadow-2xl">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono-tech text-white/50 ml-2">
                    DISPATCH_TERMINAL_v2.4
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#d4ff00]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
                  <span>ONLINE // ENCRYPTED</span>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#d4ff00]/10 border-2 border-[#d4ff00] text-[#d4ff00] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.3)]">
                      <Check className="w-7 h-7" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                      DISPATCH TRANSMITTED
                    </h4>
                    <p className="text-sm text-[#8e95a5] max-w-md mx-auto font-sans leading-relaxed">
                      Your default mail client has opened. You can also write directly to{" "}
                      <span className="text-[#d4ff00] font-mono-tech font-bold">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono-tech">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#8e95a5] mb-2 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="text-[#d4ff00]">&gt;</span>
                          <span>YOUR NAME</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="e.g. Alex / Engineering Lead"
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#08090d]/80 border border-white/10 focus:border-[#d4ff00] focus:ring-1 focus:ring-[#d4ff00]/40 focus:outline-none text-white transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="block text-[#8e95a5] mb-2 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="text-[#d4ff00]">&gt;</span>
                          <span>EMAIL ADDRESS</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#08090d]/80 border border-white/10 focus:border-[#d4ff00] focus:ring-1 focus:ring-[#d4ff00]/40 focus:outline-none text-white transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#8e95a5] mb-2 uppercase tracking-wider flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#d4ff00]">&gt;</span>
                          <span>PROJECT OR MESSAGE</span>
                        </span>
                        <span className="text-white/30 font-mono-tech">{message.length}/500</span>
                      </label>
                      <textarea
                        rows={5}
                        required
                        maxLength={500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about the engineering role, scope, or challenge..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#08090d]/80 border border-white/10 focus:border-[#d4ff00] focus:ring-1 focus:ring-[#d4ff00]/40 focus:outline-none text-white transition-all resize-none font-sans text-sm shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      data-cursor="TRANSMIT"
                      className="w-full py-4 rounded-full bg-[#d4ff00] hover:bg-[#c2eb00] text-[#08090d] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 glow-lime hover:scale-[1.01] shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT DISPATCH</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

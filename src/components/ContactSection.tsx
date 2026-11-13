"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Copy, Check, Send, Terminal, Sparkles, ArrowUpRight } from "lucide-react";
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

    // Confetti burst
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

    // Generate prefilled mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Recruiter / Team"}`);
    const body = encodeURIComponent(
      `Hi Nidhi,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 relative bg-[#07080c] swiss-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#d4ff00] mb-2">
              06 // DIRECT TELEMETRY CHANNEL
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              INITIATE TRANSMISSION
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9ca3af] mt-4 sm:mt-0 max-w-xs text-right hidden sm:block">
            OPEN TO HIGH-IMPACT OPPORTUNITIES WORLDWIDE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Coordinates & One-Click Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0d0f17] border border-white/10 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono-tech text-[#d4ff00] uppercase tracking-wider">
                  DIRECT ACCESS
                </span>
                <h3 className="font-display font-bold text-2xl text-white uppercase mt-1">
                  LET&apos;S ENGINEER SOMETHING EXCEPTIONAL.
                </h3>
                <p className="text-xs text-[#9ca3af] mt-2 font-sans leading-relaxed">
                  Available for full-time frontend architecture roles, high-growth startup leadership, and selective contracts.
                </p>
              </div>

              {/* One-Click Copy Email Button */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-[10px] font-mono-tech text-white/50 uppercase">
                  ELECTRONIC MAIL (ONE-CLICK COPY)
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-tech text-sm text-white font-semibold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    data-cursor="COPY"
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech flex items-center gap-1.5 transition-all shrink-0 ${
                      copied
                        ? "bg-emerald-500 text-[#07080c] font-bold"
                        : "bg-[#d4ff00] hover:bg-[#b8dd00] text-[#07080c] font-bold glow-lime-sm"
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "COPIED!" : "COPY"}</span>
                  </button>
                </div>
              </div>

              {/* Coordinates List */}
              <div className="space-y-3 font-mono-tech text-xs text-[#9ca3af]">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4ff00]" />
                  <span className="text-white">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#d4ff00]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GITHUB"
                  onClick={() => playUiSound("hover")}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4ff00]" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINKEDIN"
                  onClick={() => playUiSound("hover")}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4ff00]" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LEETCODE"
                  onClick={() => playUiSound("hover")}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>LEETCODE (200+)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4ff00]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f17] border border-white/15 shadow-2xl relative">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono-tech text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-white/60 pl-2">CONSOLE // DISPATCH_BUFFER</span>
                </div>
                <span className="text-[#d4ff00]">ENCRYPTION: TLS_1.3</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00] text-[#d4ff00] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white uppercase">
                    TRANSMISSION PROTOCOL EXECUTED
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md mx-auto">
                    Your default mail client has been launched with pre-configured headers. Alternatively, reach out directly at{" "}
                    <span className="text-white font-mono-tech">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-mono-tech text-white"
                  >
                    SEND ANOTHER DISPATCH
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#9ca3af] mb-1 uppercase tracking-wider">
                        IDENTIFIER (NAME)
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Sarah Connor / Engineering Lead"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4ff00] focus:outline-none text-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#9ca3af] mb-1 uppercase tracking-wider">
                        RETURN ADDRESS (EMAIL)
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. lead@enterprise.io"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4ff00] focus:outline-none text-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#9ca3af] mb-1 uppercase tracking-wider flex items-center justify-between">
                      <span>TRANSMISSION PAYLOAD (MESSAGE)</span>
                      <span className="text-white/40">{message.length}/500</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      maxLength={500}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify project scope, engineering track, or role requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4ff00] focus:outline-none text-white transition-colors resize-none font-sans text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="TRANSMIT"
                    className="w-full py-4 rounded-xl bg-[#d4ff00] hover:bg-[#b8dd00] text-[#07080c] font-bold font-sans text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 glow-lime"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT DISPATCH VIA MAIL CLIENT</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

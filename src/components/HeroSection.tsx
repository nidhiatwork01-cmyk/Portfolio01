"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal } from "lucide-react";
import { playUiSound } from "@/lib/sound";

interface HeroSectionProps {
  onOpenCommandPalette: () => void;
}

// Interactive 3D Kinetic Spatial Core Canvas
function KineticSpatialCore() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // 3D Polyhedron Vertices (Regular Octahedron + Center Lattice)
    const baseVertices = [
      [0, -1, 0],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0],
      [0, 0, -1],
      [0, 1, 0],
    ];

    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1],
    ];

    const render = () => {
      time += 0.012;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Radial Core Ambient Glow
      const glow = ctx.createRadialGradient(cx, cy, 5, cx, cy, 140);
      glow.addColorStop(0, "rgba(212, 255, 0, 0.16)");
      glow.addColorStop(0.5, "rgba(212, 255, 0, 0.03)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const rotX = time * 0.35 + mouseRef.current.y * 0.8;
      const rotY = time * 0.5 + mouseRef.current.x * 0.8;
      const rotZ = time * 0.2;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      const project = (x: number, y: number, z: number, scaleFactor: number = 70) => {
        // Rotate Z
        let x1 = x * cosZ - y * sinZ;
        let y1 = x * sinZ + y * cosZ;
        let z1 = z;

        // Rotate X
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate Y
        let x3 = x1 * cosY + z2 * sinY;
        let z3 = -x1 * sinY + z2 * cosY;

        // Perspective
        const fov = 340;
        const pScale = fov / (fov + z3 * scaleFactor);
        return {
          x: cx + x3 * scaleFactor * pScale,
          y: cy + y2 * scaleFactor * pScale,
          z: z3,
          scale: pScale,
        };
      };

      // 1. Draw Concentric 3D Orbital Rings
      const ringConfigs = [
        { radius: 125, tiltX: 0.8, tiltY: 0.4, speed: 0.2, color: "rgba(255, 255, 255, 0.08)" },
        { radius: 105, tiltX: -0.6, tiltY: 0.9, speed: -0.3, color: "rgba(212, 255, 0, 0.25)" },
        { radius: 80, tiltX: 1.1, tiltY: -0.5, speed: 0.4, color: "rgba(255, 255, 255, 0.12)" },
      ];

      ringConfigs.forEach((ring) => {
        ctx.beginPath();
        const segments = 48;
        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          const rx = Math.cos(theta) * ring.radius;
          const ry = Math.sin(theta) * ring.radius * ring.tiltX;
          const rz = Math.sin(theta) * ring.radius * ring.tiltY;

          const p = project(rx / 70, ry / 70, rz / 70, 70);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Orbiting Satellites on Rings
        const satAngle = time * ring.speed * 2;
        const sx = Math.cos(satAngle) * ring.radius;
        const sy = Math.sin(satAngle) * ring.radius * ring.tiltX;
        const sz = Math.sin(satAngle) * ring.radius * ring.tiltY;
        const sp = project(sx / 70, sy / 70, sz / 70, 70);

        ctx.beginPath();
        ctx.arc(sp.x, sp.y, 2.5 * sp.scale, 0, Math.PI * 2);
        ctx.fillStyle = "#d4ff00";
        ctx.shadowColor = "#d4ff00";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 2. Project Geometric Core Vertices
      const coreSize = 55;
      const projectedVertices = baseVertices.map((v) => project(v[0], v[1], v[2], coreSize));

      // Draw Edges
      edges.forEach(([i, j]) => {
        const p1 = projectedVertices[i];
        const p2 = projectedVertices[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.15, Math.min(0.85, (avgZ + 1.2) / 2.4));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(212, 255, 0, ${alpha * 0.75})`;
        ctx.lineWidth = 1.2 * ((p1.scale + p2.scale) / 2);
        ctx.stroke();
      });

      // Draw Glowing Nodes
      projectedVertices.forEach((p) => {
        const radius = 3.5 * p.scale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#d4ff00";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Central Pulsing Singularity
      const pulse = Math.sin(time * 3) * 2 + 5;
      ctx.beginPath();
      ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
      ctx.fillStyle = "#d4ff00";
      ctx.shadowColor = "#d4ff00";
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.targetX = nx * 0.6;
      mouseRef.current.targetY = ny * 0.6;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[300px] rounded-3xl bg-[#090b10]/90 border border-white/10 shadow-2xl overflow-hidden group">
      {/* Subtle Corner Architectural HUD Marks */}
      <div className="absolute top-3 left-3 text-[9px] font-mono-tech text-white/30 select-none">
        + SYS_CORE // SPATIAL_v2
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[9px] font-mono-tech text-[#d4ff00] select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
        <span>60 FPS</span>
      </div>
      <div className="absolute bottom-3 left-3 text-[9px] font-mono-tech text-white/30 select-none">
        [ 17.3850° N, 78.4867° E ]
      </div>
      <div className="absolute bottom-3 right-3 text-[9px] font-mono-tech text-white/40 uppercase tracking-widest select-none">
        INTERACTIVE 3D
      </div>

      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}

export default function HeroSection({ onOpenCommandPalette }: HeroSectionProps) {
  const highlights = [
    { label: "Production Apps", value: "10+" },
    { label: "KIIT CGPA", value: "9.01" },
    { label: "DSA Solved", value: "200+" },
    { label: "Render Latency", value: "<0.8ms" },
  ];

  const coreStack = ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"];

  return (
    <section className="relative min-h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-4.5rem)] flex flex-col justify-between pt-20 pb-5 sm:pt-24 sm:pb-6 overflow-hidden swiss-grid-bg ambient-glow-top border-b border-white/5">
      {/* Dynamic Background Glow Centerpiece */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#d4ff00]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* 2-Column Luxury Split: Bold Typographic Left, Kinetic 3D Art Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Typographic & Editorial Identity (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-4 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              <span className="tracking-widest uppercase text-[10px] text-white/80">
                AVAILABLE FOR SELECT OPPORTUNITIES
              </span>
            </motion.div>

            {/* Sculptural Editorial Headline */}
            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4rem] tracking-tight leading-[0.93] text-white uppercase space-y-0.5">
                  <div>CREATIVE UI</div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                    ENGINEER
                  </div>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-1"
              >
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4rem] tracking-tight leading-[0.93] text-[#d4ff00] uppercase">
                  &amp; ARCHITECT.
                </h2>
              </motion.div>
            </div>

            {/* Concise Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-[#8e95a5] max-w-lg leading-relaxed mb-6 font-normal"
            >
              Building fluid interfaces, scalable web architectures, and resilient design systems where craftsmanship meets high-performance engineering.
            </motion.p>

            {/* Direct Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <a
                href="#projects"
                data-cursor="EXPLORE"
                onClick={() => playUiSound("warp")}
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#d4ff00] hover:bg-[#c2eb00] text-[#08090d] font-bold text-xs uppercase tracking-wider rounded-full transition-all glow-lime shadow-md hover:scale-105"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </a>

              <button
                onClick={() => {
                  playUiSound("click");
                  onOpenCommandPalette();
                }}
                data-cursor="CMD+K"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-white font-mono-tech text-xs uppercase tracking-wider transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>COMMAND PALETTE</span>
                <kbd className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/10 text-white/60">
                  ⌘K
                </kbd>
              </button>
            </motion.div>

            {/* Streamlined Core Tech Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 flex-wrap"
            >
              {coreStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono-tech text-white/80 hover:border-[#d4ff00]/50 hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Kinetic 3D Spatial Core (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex flex-col justify-center"
          >
            <KineticSpatialCore />
          </motion.div>
        </div>
      </div>

      {/* Streamlined Metric Rail */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-3 border-t border-white/10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playUiSound("hover")}
              className="py-2 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#d4ff00]/30 transition-all group cursor-default flex items-baseline justify-between"
            >
              <span className="font-mono-tech text-[10px] text-[#8e95a5] uppercase tracking-wider font-medium">
                {item.label}
              </span>
              <span className="font-display font-black text-lg text-white group-hover:text-[#d4ff00] transition-colors ml-2">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    interface Node {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const density = Math.max(35, Math.floor((width * height) / 32000));
      for (let i = 0; i < density; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isAccent = Math.random() > 0.85;
        nodes.push({
          baseX: x,
          baseY: y,
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: isAccent ? 2 : 1.2,
          color: isAccent ? "#d4ff00" : "#ffffff",
          alpha: isAccent ? 0.35 : 0.15,
        });
      }
    };

    initNodes();

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Easing mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Connective subtle lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.04;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Idle floating drift
        node.baseX += node.vx;
        node.baseY += node.vy;

        if (node.baseX < 0) node.baseX = width;
        if (node.baseX > width) node.baseX = 0;
        if (node.baseY < 0) node.baseY = height;
        if (node.baseY > height) node.baseY = 0;

        // Mouse repulsion
        const dx = node.baseX - mouse.x;
        const dy = node.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 45;
          const angle = Math.atan2(dy, dx);
          node.x = node.baseX + Math.cos(angle) * force;
          node.y = node.baseY + Math.sin(angle) * force;
        } else {
          node.x += (node.baseX - node.x) * 0.08;
          node.y += (node.baseY - node.y) * 0.08;
        }

        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}

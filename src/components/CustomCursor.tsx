"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [badgeText, setBadgeText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rawMouseX = useMotionValue(-100);
  const rawMouseY = useMotionValue(-100);

  // Silky dot spring (instant, jitter-free)
  const dotX = useSpring(rawMouseX, { stiffness: 900, damping: 60, mass: 0.05 });
  const dotY = useSpring(rawMouseY, { stiffness: 900, damping: 60, mass: 0.05 });

  // Buttery trailing ring spring (silky fluid glide)
  const ringX = useSpring(rawMouseX, { stiffness: 220, damping: 26, mass: 0.3 });
  const ringY = useSpring(rawMouseY, { stiffness: 220, damping: 26, mass: 0.3 });

  useEffect(() => {
    // Detect touch / coarse pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, textarea, [role="button"]');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor");
        setBadgeText(customText || null);
      } else {
        setIsHovered(false);
        setBadgeText(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [rawMouseX, rawMouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-[#d4ff00] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: dotX,
          y: dotY,
        }}
      />

      {/* Ultra-Smooth Trailing Ring & Context Pill */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: badgeText ? 64 : isHovered ? 40 : 22,
          height: badgeText ? 64 : isHovered ? 40 : 22,
          backgroundColor: badgeText
            ? "rgba(212, 255, 0, 0.9)"
            : isHovered
            ? "rgba(212, 255, 0, 0.08)"
            : "transparent",
          borderColor: badgeText
            ? "transparent"
            : isHovered
            ? "rgba(212, 255, 0, 0.6)"
            : "rgba(255, 255, 255, 0.25)",
          borderWidth: badgeText ? "0px" : "1.5px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.2 }}
      >
        {badgeText && (
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="text-[9px] font-mono-tech font-bold uppercase text-[#07080c] tracking-widest text-center leading-none"
          >
            {badgeText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

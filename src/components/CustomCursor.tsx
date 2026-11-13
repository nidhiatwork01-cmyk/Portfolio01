"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [badgeText, setBadgeText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-[#d4ff00] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Dynamic Trailing Spring Ring & Context Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: badgeText ? 84 : isHovered ? 48 : 28,
          height: badgeText ? 84 : isHovered ? 48 : 28,
          backgroundColor: badgeText
            ? "rgba(212, 255, 0, 0.95)"
            : isHovered
            ? "rgba(212, 255, 0, 0.12)"
            : "transparent",
          borderColor: badgeText ? "#d4ff00" : isHovered ? "#d4ff00" : "rgba(255, 255, 255, 0.35)",
          borderWidth: badgeText ? "0px" : "1.5px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {badgeText && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="text-[10px] font-mono-tech font-bold uppercase text-[#07080c] tracking-wider text-center leading-tight px-1"
          >
            {badgeText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

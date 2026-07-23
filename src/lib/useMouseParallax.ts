"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMouseParallax(strength = 1) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 50, damping: 20 });
  const y = useSpring(rawY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      rawX.set(nx * strength);
      rawY.set(ny * strength);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY, strength]);

  return { x, y };
}

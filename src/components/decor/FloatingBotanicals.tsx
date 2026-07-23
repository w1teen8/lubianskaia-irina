"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMouseParallax } from "@/lib/useMouseParallax";

function LavenderFlower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none">
      <path
        d="M30 100V45"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {Array.from({ length: 7 }).map((_, i) => (
        <ellipse
          key={i}
          cx="30"
          cy={12 + i * 6}
          rx="9"
          ry="5"
          fill="var(--color-accent)"
          opacity={0.5 - i * 0.03}
          transform={`rotate(${i % 2 === 0 ? 20 : -20} 30 ${12 + i * 6})`}
        />
      ))}
    </svg>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none">
      <path
        d="M2 20C20 2 60 2 78 20C60 38 20 38 2 20Z"
        fill="var(--color-accent-secondary)"
        opacity="0.6"
      />
      <path
        d="M2 20C30 20 50 20 78 20"
        stroke="var(--color-accent)"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

function Butterfly({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} fill="none">
      <path
        d="M30 25C30 25 18 2 8 8C-2 14 12 30 30 25Z"
        fill="var(--color-accent)"
        opacity="0.18"
      />
      <path
        d="M30 25C30 25 42 2 52 8C62 14 48 30 30 25Z"
        fill="var(--color-accent)"
        opacity="0.18"
      />
      <path
        d="M30 25C30 25 20 38 12 38C4 38 14 32 30 25Z"
        fill="var(--color-accent)"
        opacity="0.14"
      />
      <path
        d="M30 25C30 25 40 38 48 38C56 38 46 32 30 25Z"
        fill="var(--color-accent)"
        opacity="0.14"
      />
      <line
        x1="30"
        y1="14"
        x2="30"
        y2="34"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  );
}

interface FloatingItemProps {
  variant: "flower" | "leaf" | "butterfly";
  className: string;
  size?: number;
  duration?: number;
  delay?: number;
  depth?: number;
}

function FloatingItem({
  variant,
  className,
  size = 60,
  duration = 6,
  delay = 0,
  depth = 1,
}: FloatingItemProps) {
  const { x, y } = useMouseParallax(depth * 10);
  const Shape =
    variant === "flower" ? LavenderFlower : variant === "leaf" ? Leaf : Butterfly;

  return (
    <motion.div
      style={{ x, y, width: size }}
      className={cn("absolute pointer-events-none select-none", className)}
      animate={{
        y: [0, -16, 0],
        rotate: variant === "butterfly" ? [0, 6, -6, 0] : [0, -4, 4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Shape className="w-full h-auto" />
    </motion.div>
  );
}

export default function FloatingBotanicals({
  variant = "default",
}: {
  variant?: "default" | "about" | "prices";
}) {
  if (variant === "about") {
    return (
      <>
        <FloatingItem
          variant="leaf"
          className="top-10 -left-6"
          size={90}
          duration={7}
          depth={0.6}
        />
        <FloatingItem
          variant="flower"
          className="bottom-0 right-4"
          size={50}
          duration={5.5}
          delay={0.5}
          depth={1.2}
        />
        <FloatingItem
          variant="butterfly"
          className="top-1/3 right-10"
          size={40}
          duration={8}
          delay={1}
          depth={1.5}
        />
      </>
    );
  }

  if (variant === "prices") {
    return (
      <>
        <FloatingItem
          variant="leaf"
          className="top-0 right-0"
          size={100}
          duration={7.5}
          depth={0.5}
        />
        <FloatingItem
          variant="flower"
          className="bottom-10 left-6"
          size={45}
          duration={6}
          delay={0.8}
          depth={1}
        />
      </>
    );
  }

  return (
    <>
      <FloatingItem
        variant="flower"
        className="top-[15%] left-[8%]"
        size={55}
        duration={6}
        depth={1.4}
      />
      <FloatingItem
        variant="flower"
        className="top-[60%] right-[10%]"
        size={70}
        duration={7}
        delay={0.6}
        depth={1}
      />
      <FloatingItem
        variant="leaf"
        className="bottom-[8%] left-[15%]"
        size={90}
        duration={8}
        delay={0.3}
        depth={0.6}
      />
      <FloatingItem
        variant="butterfly"
        className="top-[25%] right-[22%]"
        size={45}
        duration={9}
        delay={1.2}
        depth={1.8}
      />
      <FloatingItem
        variant="butterfly"
        className="bottom-[20%] right-[35%]"
        size={32}
        duration={10}
        delay={2}
        depth={2}
      />
    </>
  );
}

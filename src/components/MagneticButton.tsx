"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const combinedClassName = cn(
    "inline-flex items-center justify-center transition-colors duration-300",
    className
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={combinedClassName}>
          {children}
        </button>
      )}
    </motion.div>
  );
}

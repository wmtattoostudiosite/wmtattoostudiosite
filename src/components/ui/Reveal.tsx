"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  MOTION_DURATION,
  MOTION_OFFSET,
  MOTION_VIEW_MARGIN,
  MOTION_VIEW_THRESHOLD,
} from "@/lib/motion";

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  offset?: number;
  /** Dispara ao montar (útil para Hero acima da dobra). */
  onMount?: boolean;
};

const variantClass: Record<RevealVariant, string> = {
  up: "motion-reveal-up",
  down: "motion-reveal-down",
  left: "motion-reveal-left",
  right: "motion-reveal-right",
  fade: "motion-reveal-fade",
  scale: "motion-reveal-scale",
};

/**
 * Revela conteúdo com fade e leve deslocamento ao entrar na viewport.
 */
export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = MOTION_DURATION,
  offset = MOTION_OFFSET,
  onMount = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(onMount);

  useEffect(() => {
    if (onMount) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: MOTION_VIEW_THRESHOLD, rootMargin: MOTION_VIEW_MARGIN },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onMount]);

  const style = {
    "--motion-delay": `${delay}s`,
    "--motion-duration": `${duration}s`,
    "--motion-offset": `${offset}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`motion-reveal ${variantClass[variant]} ${visible ? "motion-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

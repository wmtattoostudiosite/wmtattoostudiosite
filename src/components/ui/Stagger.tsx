"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  MOTION_DURATION,
  MOTION_OFFSET,
  MOTION_STAGGER,
  MOTION_VIEW_MARGIN,
  MOTION_VIEW_THRESHOLD,
} from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  duration?: number;
  offset?: number;
};

/**
 * Revela filhos em sequência ao entrar na viewport.
 */
export default function Stagger({
  children,
  className = "",
  itemClassName = "",
  stagger = MOTION_STAGGER,
  duration = MOTION_DURATION,
  offset = MOTION_OFFSET,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  const containerStyle = {
    "--motion-duration": `${duration}s`,
    "--motion-offset": `${offset}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={containerStyle}
      className={`${visible ? "motion-stagger-visible" : ""} ${className}`.trim()}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const itemStyle = {
          "--motion-delay": `${index * stagger}s`,
        } as CSSProperties;

        return (
          <div
            key={child.key ?? index}
            style={itemStyle}
            className={`motion-stagger-item h-full ${itemClassName}`.trim()}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { scrollToAnchor } from "@/lib/scroll";

/**
 * Intercepta cliques em links âncora e compensa a altura do menu fixo.
 */
export default function AnchorScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      if (!scrollToAnchor(href)) return;

      event.preventDefault();
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

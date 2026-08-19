"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/ui/icons";

export type LightboxItem = {
  src: string;
  alt?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

/**
 * Lightbox com navegação e teclado (Esc / setas).
 * Renderizado via portal para não ser limitado por overflow dos pais.
 */
export default function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const item = items[index];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % items.length);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndexChange]);

  if (!mounted || !item) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || "Imagem em destaque"}
      onClick={onClose}
      className="motion-overlay-in fixed inset-0 z-[300] flex items-center justify-center bg-[rgba(10,9,8,0.94)] p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-[30px] right-9 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-bone/30 text-bone"
      >
        <CloseIcon className="h-[18px] w-[18px]" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onIndexChange((index - 1 + items.length) % items.length);
        }}
        aria-label="Imagem anterior"
        className="absolute top-1/2 left-6 z-10 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-bone/30 text-bone"
      >
        <ChevronLeftIcon className="h-[18px] w-[18px]" />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt || ""}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[80vh] max-w-[min(920px,88vw)] object-contain shadow-studio"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onIndexChange((index + 1) % items.length);
        }}
        aria-label="Próxima imagem"
        className="absolute top-1/2 right-6 z-10 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-bone/30 text-bone"
      >
        <ChevronRightIcon className="h-[18px] w-[18px]" />
      </button>
    </div>,
    document.body,
  );
}

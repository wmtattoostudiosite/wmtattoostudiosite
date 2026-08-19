"use client";

import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import type { StudioImage } from "@/data/studio";

type StudioCarouselProps = {
  images: StudioImage[];
  onImageClick?: (index: number) => void;
  className?: string;
};

/**
 * Carrossel do estúdio.
 * Mobile: uma imagem. Desktop: três por linha, na largura do container.
 */
export default function StudioCarousel({
  images,
  onImageClick,
  className = "",
}: StudioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const getSlideSize = () => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    if (!track || !first) return 0;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  const goTo = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (next + images.length) % images.length;
    const slide = track.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({ inline: "start", block: "nearest", behavior: "smooth" });
    setIndex(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const slideSize = getSlideSize();
    if (!track || slideSize === 0) return;
    const i = Math.round(track.scrollLeft / slideSize);
    if (i !== index && i >= 0 && i < images.length) setIndex(i);
  };

  return (
    <div className={`relative ${className}`.trim()}>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto no-scrollbar"
        >
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => onImageClick?.(imageIndex)}
              className="relative aspect-[853/1280] w-full shrink-0 snap-start overflow-hidden border border-line bg-ink-2 transition-studio hover:border-gold md:w-[calc((100%-1.5rem)/3)]"
              aria-label={image.alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={imageIndex === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Imagem anterior"
          className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold md:left-4"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Próxima imagem"
          className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold md:right-4"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(imageIndex)}
            aria-label={`Ir para imagem ${imageIndex + 1}`}
            className={`h-1.5 rounded-full transition-studio ${
              imageIndex === index ? "w-6 bg-gold" : "w-1.5 bg-bone/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

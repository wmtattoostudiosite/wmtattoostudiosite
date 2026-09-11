"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import type { WorkItem } from "@/data/works";

type WorksCarouselProps = {
  works: WorkItem[];
  cardClassName?: string;
};

/**
 * Carrossel do portfólio: um trabalho por vez, com setas, dots e arraste.
 */
export default function WorksCarousel({ works, cardClassName = "" }: WorksCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const dragRef = useRef({
    pointerId: null as number | null,
    startX: 0,
    startScroll: 0,
    dragging: false,
  });

  useEffect(() => {
    setIndex(0);
    trackRef.current?.scrollTo({ left: 0 });
  }, [works]);

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
    const slideSize = getSlideSize();
    if (!track || slideSize === 0 || works.length === 0) return;
    const clamped = (next + works.length) % works.length;
    track.scrollTo({ left: clamped * slideSize, behavior: "smooth" });
    setIndex(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const slideSize = getSlideSize();
    if (!track || slideSize === 0) return;
    const i = Math.round(track.scrollLeft / slideSize);
    if (i !== index && i >= 0 && i < works.length) setIndex(i);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || works.length < 2) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      dragging: false,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (drag.pointerId !== event.pointerId || !track) return;

    const delta = event.clientX - drag.startX;
    if (!drag.dragging) {
      if (Math.abs(delta) < 10) return;
      drag.dragging = true;
      track.setPointerCapture(event.pointerId);
    }

    track.scrollLeft = drag.startScroll - delta;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (drag.pointerId !== event.pointerId) return;

    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    if (drag.dragging) {
      const slideSize = getSlideSize();
      if (track && slideSize > 0) {
        const i = Math.round(track.scrollLeft / slideSize);
        goTo(Math.min(Math.max(i, 0), works.length - 1));
      }
    }

    drag.pointerId = null;
    drag.dragging = false;
  };

  if (works.length === 0) return null;

  return (
    <div className="relative">
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain touch-pan-x"
        >
          {works.map((work, workIndex) => (
            <div
              key={`${work.title}-${workIndex}`}
              className={`work-card w-full shrink-0 snap-start ${cardClassName}`.trim()}
              style={{ animationDelay: `${workIndex * 0.05}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={work.img} alt={work.title} loading="lazy" decoding="async" />
              <div className="absolute right-3.5 bottom-3 left-3.5 z-[2]">
                <b className="block font-display text-[0.82rem] text-gold-light">
                  {work.title}
                </b>
                <small className="text-[0.68rem] tracking-[0.08em] text-bone-dim uppercase">
                  {work.tag}
                </small>
              </div>
            </div>
          ))}
        </div>

        {works.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Trabalho anterior"
              className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Próximo trabalho"
              className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink/80 text-gold"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {works.length > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {works.map((work, workIndex) => (
            <button
              key={`${work.title}-dot-${workIndex}`}
              type="button"
              onClick={() => goTo(workIndex)}
              aria-label={`Ir para ${work.title}`}
              className={`h-1.5 rounded-full transition-studio ${
                workIndex === index ? "w-6 bg-gold" : "w-1.5 bg-bone/25"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

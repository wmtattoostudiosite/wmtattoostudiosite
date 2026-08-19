"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import Container from "@/components/ui/Container";
import DiamondBadge from "@/components/ui/DiamondBadge";
import SectionLabel from "@/components/ui/SectionLabel";
import WorksCarousel from "@/components/ui/WorksCarousel";
import {
  MARUCIA_FILTERS,
  PROFESSIONALS,
  STYLE_FILTERS,
  WORKS,
  type ProfessionalId,
  type WorkStyle,
} from "@/data/works";

/**
 * Portfólio com abas de profissional e filtros de estilo.
 */
export default function Gallery() {
  const [activePro, setActivePro] = useState<ProfessionalId>("wedson");
  const [activeStyle, setActiveStyle] = useState<WorkStyle>("todos");

  const filtersRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    pointerId: null as number | null,
    startX: 0,
    startScroll: 0,
    dragging: false,
    suppressClick: false,
  });

  const activeProfessional =
    PROFESSIONALS.find((pro) => pro.id === activePro) ?? PROFESSIONALS[0];

  const works = useMemo(() => {
    return WORKS[activePro].filter(
      (work) => activeStyle === "todos" || work.style === activeStyle,
    );
  }, [activePro, activeStyle]);

  const selectProfessional = (id: ProfessionalId) => {
    setActivePro(id);
    setActiveStyle("todos");
  };

  useEffect(() => {
    filtersRef.current?.scrollTo({ left: 0 });
  }, [activePro]);

  const onFiltersPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = filtersRef.current;
    if (!track || track.scrollWidth <= track.clientWidth + 1) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      dragging: false,
      suppressClick: false,
    };
  };

  const onFiltersPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = filtersRef.current;
    if (drag.pointerId !== event.pointerId || !track) return;

    const delta = event.clientX - drag.startX;
    if (!drag.dragging) {
      if (Math.abs(delta) < 10) return;
      drag.dragging = true;
      drag.suppressClick = true;
      track.setPointerCapture(event.pointerId);
    }

    track.scrollLeft = drag.startScroll - delta;
  };

  const onFiltersPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const track = filtersRef.current;
    if (drag.pointerId !== event.pointerId) return;

    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    drag.pointerId = null;
    drag.dragging = false;
  };

  const onFiltersClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!dragRef.current.suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    dragRef.current.suppressClick = false;
  };

  return (
    <section id="servicos" className="section-spacing border-y border-line bg-ink-2">
      <Container>
        <div className="mb-[50px]">
          <SectionLabel>Portfólio</SectionLabel>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] md:leading-[1.2]">
            {activeProfessional.headline}
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <em className="font-display text-gold-light italic">
              {activeProfessional.headlineEmphasis}
            </em>
            .
          </h2>
          <p className="mt-2 text-[0.92rem] text-bone-dim">
            {activeProfessional.description}
          </p>
        </div>

        <div className="mb-11 grid w-full grid-cols-1 gap-3.5 md:inline-grid md:max-w-[520px] md:grid-cols-2">
          {PROFESSIONALS.map((pro) => {
            const isActive = activePro === pro.id;
            return (
              <button
                key={pro.id}
                type="button"
                onClick={() => selectProfessional(pro.id)}
                className={`flex w-full cursor-pointer items-center gap-3.5 border bg-transparent px-[22px] py-3.5 transition-studio ${isActive
                  ? "border-gold bg-gold/[0.08]"
                  : "border-bone/18"
                  }`}
              >
                <DiamondBadge
                  className={`tab ${isActive ? "border-gold-light bg-gold/14" : ""}`}
                >
                  {pro.initial}
                </DiamondBadge>
                <span className="text-left">
                  <b className="block font-display text-[0.92rem] font-normal text-bone">
                    {pro.name}
                  </b>
                  {/* <small className="text-[0.68rem] tracking-[0.1em] text-bone-dim uppercase">
                    {pro.role}
                  </small> */}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mb-9">
          <div
            ref={filtersRef}
            onPointerDown={onFiltersPointerDown}
            onPointerMove={onFiltersPointerMove}
            onPointerUp={onFiltersPointerUp}
            onPointerCancel={onFiltersPointerUp}
            onClickCapture={onFiltersClickCapture}
            className="no-scrollbar flex cursor-grab flex-nowrap gap-2.5 overflow-x-auto overscroll-x-contain touch-pan-x active:cursor-grabbing md:cursor-auto md:flex-wrap md:overflow-visible md:overscroll-auto"
          >
            {(activePro === "wedson" ? STYLE_FILTERS : MARUCIA_FILTERS).map(
              (filter) => {
                const isActive = activeStyle === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveStyle(filter.id)}
                    className={`relative z-[1] shrink-0 cursor-pointer whitespace-nowrap border px-[18px] py-2 text-[0.72rem] tracking-[0.1em] uppercase transition-all duration-300 ${isActive
                        ? "border-gold text-gold-light"
                        : "border-bone/20 text-bone-dim hover:border-gold hover:text-gold-light"
                      }`}
                  >
                    {filter.label}
                  </button>
                );
              },
            )}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-10 bg-gradient-to-l from-ink-2 md:hidden" />
        </div>

        <div className="min-[561px]:hidden">
          <WorksCarousel works={works} />
        </div>

        <div className="hidden grid-cols-2 gap-[18px] min-[561px]:grid min-[981px]:grid-cols-4">
          {works.map((work, index) => (
            <div
              key={`${work.title}-${index}`}
              className="work-card"
              style={{ animationDelay: `${index * 0.05}s` }}
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

        {activePro === "marucia" && (
          <p className="mt-[26px] text-[0.78rem] text-bone-dim italic opacity-75">
            * Imagens ilustrativas de exemplo — em breve substituídas pelas fotos
            reais dos trabalhos do estúdio.
          </p>
        )}
      </Container>
    </section>
  );
}

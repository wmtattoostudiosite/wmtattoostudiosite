"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import Container from "@/components/ui/Container";
import DiamondBadge from "@/components/ui/DiamondBadge";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import {
  MARUCIA_FILTERS,
  PROFESSIONALS,
  STYLE_FILTERS,
  WORKS,
  type ProfessionalId,
  type WorkStyle,
} from "@/data/works";
import WorksCarousel from "@/components/ui/WorksCarousel";

const PAGE_SIZE = 8;

/**
 * Portfólio com abas de profissional e filtros de estilo.
 */
export default function Gallery() {
  const [activePro, setActivePro] = useState<ProfessionalId>("wedson");
  const [activeStyle, setActiveStyle] = useState<WorkStyle>("todos");
  const [page, setPage] = useState(0);

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

  const pageCount = Math.max(1, Math.ceil(works.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount - 1);
  const pagedWorks = works.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE,
  );

  const selectProfessional = (id: ProfessionalId) => {
    setActivePro(id);
    setActiveStyle("todos");
    setPage(0);
  };

  const selectStyle = (id: WorkStyle) => {
    setActiveStyle(id);
    setPage(0);
  };

  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(next, 0), pageCount - 1));
    document.getElementById("galeria-trabalhos")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
                    onClick={() => selectStyle(filter.id)}
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

        <div id="galeria-trabalhos" className="scroll-mt-[var(--header-height,90px)]">
          <div className="min-[561px]:hidden">
            <WorksCarousel
              key={`${activePro}-${activeStyle}`}
              works={works}
              cardClassName={activePro === "marucia" ? "work-card-marucia" : ""}
            />
          </div>

          <div className="hidden grid-cols-2 gap-[18px] min-[561px]:grid min-[981px]:grid-cols-4">
            {pagedWorks.map((work, index) => (
              <div
                key={`${work.img}-${index}`}
                className={`work-card ${activePro === "marucia" ? "work-card-marucia" : ""}`.trim()}
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

          {pageCount > 1 && (
            <div className="mt-9 hidden flex-wrap items-center justify-center gap-2.5 min-[561px]:flex">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                aria-label="Página anterior"
                className="flex h-10 w-10 items-center justify-center border border-bone/20 text-bone-dim transition-all duration-300 hover:border-gold hover:text-gold-light disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPage(index)}
                  aria-label={`Página ${index + 1}`}
                  aria-current={index === currentPage ? "page" : undefined}
                  className={`min-w-10 cursor-pointer border px-3 py-2 text-[0.72rem] tracking-[0.1em] uppercase transition-all duration-300 ${
                    index === currentPage
                      ? "border-gold text-gold-light"
                      : "border-bone/20 text-bone-dim hover:border-gold hover:text-gold-light"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount - 1}
                aria-label="Próxima página"
                className="flex h-10 w-10 items-center justify-center border border-bone/20 text-bone-dim transition-all duration-300 hover:border-gold hover:text-gold-light disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

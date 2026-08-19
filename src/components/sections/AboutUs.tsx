"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import DiamondBadge from "@/components/ui/DiamondBadge";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import {
  ABOUT_PROFESSIONALS,
  type AboutProfessionalId,
} from "@/data/about";
import { scrollToAnchor } from "@/lib/scroll";

/**
 * Trajetória do estúdio e dos profissionais.
 * Os cards selecionam o texto e a foto de cada profissional.
 */
export default function AboutUs() {
  const [activeId, setActiveId] = useState<AboutProfessionalId>("wedson");
  const active =
    ABOUT_PROFESSIONALS.find((pro) => pro.id === activeId) ?? ABOUT_PROFESSIONALS[0];

  const selectProfessional = (id: AboutProfessionalId) => {
    setActiveId(id);
    scrollToAnchor("#sobre");
  };

  return (
    <section id="sobre" className="section-spacing bg-ink">
      <Container className="grid items-center gap-10 min-[901px]:grid-cols-[0.9fr_1.1fr] min-[901px]:gap-[70px]">
        <Reveal variant="left">
          <div className="sobre-imgwrap relative">
            <div className="frame" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active.photo}
              src={active.photo}
              alt={active.photoAlt}
              loading="lazy"
              decoding="async"
              className="relative z-[1] h-[400px] w-full object-cover min-[901px]:h-[560px]"
            />
          </div>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <div>
            <span className="eyebrow mb-4 block">Sobre o estúdio & profissionais</span>
            <h2 className="mb-[22px] text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.2]">
              {active.headline}{" "}
              <em className="font-display text-gold-light italic">
                {active.headlineEmphasis}
              </em>
              .
            </h2>
            {active.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className="mb-[18px] text-[0.96rem] text-bone-dim">
                {index === 0 && active.leadName && (
                  <strong className="font-medium text-bone">{active.leadName}</strong>
                )}
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid grid-cols-1 gap-6 min-[561px]:grid-cols-2">
              {ABOUT_PROFESSIONALS.map((pro) => {
                const isActive = pro.id === activeId;
                return (
                  <button
                    key={pro.id}
                    type="button"
                    onClick={() => selectProfessional(pro.id)}
                    aria-pressed={isActive}
                    className={`border p-[22px] text-left transition-studio ${
                      isActive
                        ? "border-gold bg-gold/[0.08]"
                        : "border-line hover:border-gold"
                    }`}
                  >
                    <DiamondBadge
                      small
                      className={`mb-3.5 ${isActive ? "border-gold-light bg-gold/14" : ""}`}
                    >
                      {pro.initial}
                    </DiamondBadge>
                    <b className="mb-1.5 block font-display text-base">{pro.name}</b>
                    <p className="m-0 text-[0.84rem] text-bone-dim">{pro.role}</p>
                  </button>
                );
              })}
            </div>

            {/* <Stagger
              key={active.id}
              className="mt-9 grid grid-cols-1 border-x border-t border-line min-[561px]:grid-cols-3 min-[561px]:border-r-0 min-[561px]:border-b"
              itemClassName="border-b border-line bg-ink min-[561px]:border-r min-[561px]:border-b-0"
              stagger={0.1}
            >
              {active.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex h-full flex-col px-[18px] py-[22px]"
                >
                  <span className="mb-1.5 block font-display text-[1.9rem] text-gold">
                    {badge.num}
                  </span>
                  <span className="text-[0.7rem] tracking-[0.08em] text-bone-dim uppercase">
                    {badge.label}
                  </span>
                </div>
              ))}
            </Stagger> */}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

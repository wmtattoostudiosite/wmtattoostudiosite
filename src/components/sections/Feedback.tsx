"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Stagger from "@/components/ui/Stagger";
import { FEEDBACK_ITEMS } from "@/data/feedback";

/**
 * Depoimentos de clientes em prints, com leitura confortável e lightbox.
 */
export default function Feedback() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="depoimentos"
      className="section-spacing border-y border-line bg-ink-2"
    >
      <Container>
        <Reveal variant="up">
          <div className="mx-auto mb-14 max-w-[600px] text-center">
            <SectionLabel centered>Depoimentos</SectionLabel>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)]">
              O que dizem sobre{" "}
              <em className="font-display text-gold-light italic">nós</em>.
            </h2>
          </div>
        </Reveal>

        <Stagger className="mx-auto grid max-w-[820px] grid-cols-1 gap-6 min-[761px]:grid-cols-2">
          {FEEDBACK_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Abrir ${item.alt}`}
              className="overflow-hidden border border-line bg-[#1c1c1c] text-left transition-studio hover:border-gold"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </button>
          ))}
        </Stagger>
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          items={FEEDBACK_ITEMS}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}

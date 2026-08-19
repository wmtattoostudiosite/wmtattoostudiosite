"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import StudioCarousel from "@/components/ui/StudioCarousel";
import type { StudioImage } from "@/data/studio";

type StudioGalleryProps = {
  images: StudioImage[];
};

/**
 * Galeria do estúdio em carrossel.
 * Desktop: três imagens por linha na largura do container.
 * Mobile: uma imagem por vez.
 */
export default function StudioGallery({ images }: StudioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <StudioCarousel images={images} onImageClick={setLightboxIndex} />

      {lightboxIndex !== null && (
        <Lightbox
          items={images}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

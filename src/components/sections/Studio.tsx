import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import StudioGallery from "@/components/ui/StudioGallery";
import { CONTACT } from "@/data/site";
import { STUDIO_IMAGES } from "@/data/studio";

/**
 * Seção do estúdio: apresentação do espaço e galeria em proporção nativa.
 */
export default function Studio() {
  return (
    <section id="estudio" className="section-spacing bg-ink">
      <Container>
        <Reveal variant="up">
          <div className="mb-[60px]">
            <SectionLabel>Nosso espaço</SectionLabel>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.15]">
              Um estúdio construído para{" "}
              <em className="font-display text-gold-light italic">acolher</em>.
            </h2>
            <p className="mt-5 max-w-[720px] text-[0.96rem] text-bone-dim">
              Nosso espaço conta com uma estrutura moderna, confortável e
              cuidadosamente preparada para oferecer bem-estar, privacidade e
              segurança. Aqui, cada atendimento é realizado com atenção, respeito
              e dedicação, porque acreditamos que mais do que um atendimento é
              uma experiência feita para você.
            </p>
          </div>
        </Reveal>

        <StudioGallery images={STUDIO_IMAGES} />

        <Reveal variant="up" delay={0.15}>
          <div className="mt-12 flex w-full flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
            <a
              className="btn btn-gold w-full justify-center md:w-auto"
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar um horário
            </a>
            <a
              className="btn btn-ghost w-full justify-center md:w-auto"
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no mapa
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

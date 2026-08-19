import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  ClockIcon,
  InstagramIcon,
  LocationIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { CONTACT } from "@/data/site";

const INFO_ITEMS = [
  {
    icon: LocationIcon,
    title: "Endereço",
    text: CONTACT.address,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    text: CONTACT.whatsappDisplay,
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    text: `${CONTACT.instagramWedson} · ${CONTACT.instagramMarucia}`,
  },
  {
    icon: ClockIcon,
    title: "Horários",
    text: CONTACT.hours,
  },
] as const;

/**
 * Contato, dados do estúdio e mapa.
 */
export default function Contact() {
  return (
    <section id="contato" className="section-spacing bg-ink">
      <Container className="grid items-stretch gap-[60px] min-[901px]:grid-cols-2">
        <Reveal variant="left">
          <div>
            <span className="eyebrow mb-4 block">Contato</span>
            <h2 className="mb-5 text-[clamp(1.9rem,3.4vw,2.6rem)]">
              Vamos marcar sua{" "}
              <em className="font-display text-gold-light italic">sessão</em>?
            </h2>
            <p className="mb-9 text-[0.96rem] text-bone-dim">
              Fale com a gente pelo WhatsApp ou venha nos visitar
              <br />Ficamos na Nova Barretos 3, em Barretos/SP.
            </p>

            <div className="mb-10 flex flex-col gap-[26px]">
              {INFO_ITEMS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-[18px]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold">
                    <Icon className="h-[18px] w-[18px] text-gold" />
                  </div>
                  <div>
                    <b className="mb-1 block font-display text-[0.9rem]">{title}</b>
                    <span className="text-[0.86rem] text-bone-dim">{text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4 md:flex-row md:flex-wrap">
              <a
                className="btn btn-gold w-full justify-center md:w-auto"
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar agora
              </a>
              <a
                className="btn btn-ghost w-full justify-center md:w-auto"
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no mapa
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <div className="map-wrap relative min-h-[420px] overflow-hidden border border-line">
            <iframe
              src={CONTACT.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa — WM Tattoo Studio"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

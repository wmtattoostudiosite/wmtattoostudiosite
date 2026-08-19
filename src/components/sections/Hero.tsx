import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { CONTACT, HERO_SERVICES, HERO_SERVICES_MARUCIA } from "@/data/site";
import { HERO_IMAGE } from "@/data/studio";

/**
 * Hero principal: no desktop a foto fica em proporção nativa;
 * no mobile cobre a section inteira, com zoom se necessário.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-[70px] md:pb-[110px]"
    >
      <div className="hero-bg absolute inset-0 z-0 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          className="h-full w-full object-cover object-center md:h-auto md:w-full md:object-contain"
        />
      </div>

      <div className="container-custom relative z-[2] max-w-[760px] lg:max-w-[840px]">
        <Reveal onMount variant="up">
          <div className="eyebrow mb-[26px] flex items-center gap-3.5 !text-[clamp(0.72rem,0.9vw,0.82rem)]">
            ESTÚDIO DE TATUAGEM &amp; PIERCING · BARRETOS/SP
          </div>
        </Reveal>

        <Reveal onMount variant="up" delay={0.1}>
          <h1 className="mb-[26px] text-[clamp(2.4rem,5.6vw,5.25rem)] leading-[1.06] text-balance">
            Mais que tinta
            <br />é <em className="font-medium text-gold-light italic">vida na pele</em>.
          </h1>
        </Reveal>

        <Reveal onMount variant="up" delay={0.2}>
          <p className="lead mb-8 max-w-[540px] text-[clamp(1.05rem,1.2vw,1.18rem)] font-light text-bone-dim md:mb-5">
            Um espaço pensado para transformar sua história em arte, tatuagem e
            piercing com biossegurança, conforto e um atendimento pensado para
            você, do primeiro traço à cicatrização.
          </p>
        </Reveal>

        <Reveal onMount variant="up" delay={0.28} className="hidden md:block">
          <div className="mb-2 flex flex-wrap gap-x-7 gap-y-2.5">
            {HERO_SERVICES.map((service) => (
              <span
                key={service}
                className="flex items-center gap-2 text-[clamp(0.76rem,0.85vw,0.84rem)] tracking-[0.12em] text-bone-dim uppercase"
              >
                {service}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal onMount variant="up" delay={0.28} className="hidden md:block">
          <div className="mb-10 flex flex-wrap gap-x-7 gap-y-2.5">
            {HERO_SERVICES_MARUCIA.map((service) => (
              <span
                key={service}
                className="flex items-center gap-2 text-[clamp(0.76rem,0.85vw,0.84rem)] tracking-[0.12em] text-bone-dim uppercase"
              >
                {service}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal onMount variant="up" delay={0.36}>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:flex-wrap">
            <a
              className="btn btn-gold w-full justify-center md:w-auto"
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
              <WhatsAppIcon />
            </a>
            <a className="btn btn-ghost w-full justify-center md:w-auto" href="#servicos">
              Ver galeria
              <ArrowRightIcon />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll absolute right-10 bottom-9 z-[2] hidden flex-col items-center gap-2.5 md:flex">
        <div className="line" />
        <span className="text-[0.68rem] tracking-[0.22em] text-bone-dim uppercase [writing-mode:vertical-rl]">
          Role para explorar
        </span>
      </div>
    </section>
  );
}

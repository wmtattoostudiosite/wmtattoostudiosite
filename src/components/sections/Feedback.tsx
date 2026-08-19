import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Stagger from "@/components/ui/Stagger";
import { FEEDBACK_ITEMS } from "@/data/feedback";

/**
 * Depoimentos de clientes.
 */
export default function Feedback() {
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

        <Stagger className="mx-auto grid max-w-[480px] grid-cols-1 gap-6 min-[901px]:max-w-none min-[901px]:grid-cols-3 min-[901px]:gap-6">
          {FEEDBACK_ITEMS.map((item) => (
            <article
              key={item.id}
              className="relative border border-line bg-ink px-7 py-8"
            >
              <div className="mb-3.5 font-display text-[1.6rem] leading-none text-gold">
                &ldquo;
              </div>
              <p className="mb-[22px] min-h-24 text-[0.92rem] text-bone-dim">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-11 w-11 rounded-full border border-gold object-cover"
                />
                <div>
                  <b className="block text-[0.86rem] font-medium">{item.name}</b>
                  <small className="text-[0.7rem] tracking-[0.06em] text-bone-dim uppercase">
                    {item.role}
                  </small>
                  <div className="mt-0.5 text-[0.78rem] tracking-[2px] text-gold">
                    ★★★★★
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Stagger>

        <p className="mt-[30px] text-center text-[0.78rem] text-bone-dim italic opacity-70">
          * Depoimentos de exemplo — serão substituídos por avaliações reais de
          clientes.
        </p>
      </Container>
    </section>
  );
}

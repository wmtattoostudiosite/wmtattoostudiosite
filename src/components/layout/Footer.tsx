import Logo from "@/components/ui/Logo";
import { CONTACT, NAV_LINKS, SOCIAL_LINKS } from "@/data/site";

/**
 * Rodapé do site: marca, navegação, profissionais e redes.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-2 pt-[70px] pb-[30px]">
      <div className="container-custom">
        <div className="mb-[60px] grid grid-cols-1 gap-10 min-[521px]:grid-cols-2 min-[861px]:grid-cols-[1.4fr_1fr_1fr_1fr] min-[861px]:gap-[50px]">
          <div>
            <Logo href={null} className="mb-[18px]" />
            <p className="max-w-[280px] text-[0.86rem] text-bone-dim">
              Mais que tinta é vida na pele. Tatuagem e piercing com biossegurança,
              conforto e atendimento personalizado.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[0.78rem] font-medium tracking-[0.12em] text-gold uppercase">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Rodapé">
              {NAV_LINKS.filter((link) => link.href !== "#inicio").map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.86rem] text-bone-dim transition-colors duration-300 hover:text-gold-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[0.78rem] font-medium tracking-[0.12em] text-gold uppercase">
              Profissionais
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={CONTACT.instagramWedsonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.86rem] text-bone-dim transition-colors duration-300 hover:text-gold-light"
              >
                Wedson · Tatuagem
              </a>
              <a
                href={CONTACT.instagramMaruciaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.86rem] text-bone-dim transition-colors duration-300 hover:text-gold-light"
              >
                Marúcia · Piercing, sobrancelhas e depilação
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[0.78rem] font-medium tracking-[0.12em] text-gold uppercase">
              Redes sociais
            </h4>
            <div className="mt-1.5 flex gap-3">
              {SOCIAL_LINKS.filter((link) => link.label !== "Localização").map(
                ({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="icon-btn"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-[26px] text-[0.76rem] text-bone-dim">
          <span>© {year} WM Tattoo Studio. Todos os direitos reservados.</span>
          <span>{CONTACT.address}</span>
        </div>
      </div>
    </footer>
  );
}

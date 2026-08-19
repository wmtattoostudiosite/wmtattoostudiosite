"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/site";

/**
 * Menu de navegação principal.
 * Desktop: barra horizontal. Mobile: overlay em tela cheia.
 * Desktop: translúcido após o scroll. Mobile: fundo sempre visível.
 */
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 90;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 right-0 left-0 z-[200] border-b border-line bg-ink/92 py-3.5 backdrop-blur-[14px] transition-studio ${
          scrolled
            ? ""
            : "min-[981px]:border-transparent min-[981px]:bg-ink/0 min-[981px]:py-[26px] min-[981px]:backdrop-blur-none"
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-5">
          <Logo />

          <nav className="main-nav hidden gap-[38px] min-[981px]:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative pb-1 text-[0.78rem] tracking-[0.14em] text-bone-dim uppercase transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-300 after:ease-[var(--ease-studio)] hover:text-gold hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-[18px] min-[981px]:flex">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
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
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            className="z-[210] flex w-[26px] cursor-pointer flex-col gap-[5px] min-[981px]:hidden"
          >
            <span
              className={`h-[1.5px] w-full bg-bone transition-transform duration-300 ${
                isOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-bone transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-bone transition-transform duration-300 ${
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[190] flex flex-col bg-ink-2 transition-transform duration-500 ease-[var(--ease-studio)] min-[981px]:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-[30px]"
          aria-label="Principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-[1.4rem] tracking-[0.05em] text-bone hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-6 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="icon-btn !h-14 !w-14 [&_svg]:!h-6 [&_svg]:!w-6"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

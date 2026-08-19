import { WhatsAppIcon } from "@/components/ui/icons";
import { CONTACT } from "@/data/site";

/** Botão flutuante de WhatsApp, no canto inferior direito. */
export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      className="fixed right-[26px] bottom-[26px] z-[150] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gold text-ink shadow-studio transition-transform duration-300 ease-[var(--ease-studio)] hover:scale-[1.08]"
    >
      <WhatsAppIcon className="h-[26px] w-[26px]" />
    </a>
  );
}

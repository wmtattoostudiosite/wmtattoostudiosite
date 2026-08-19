import type { Metadata } from "next";
import { Cinzel, Jost } from "next/font/google";
import AnchorScroll from "@/components/layout/AnchorScroll";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cinzel",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "WM Tattoo Studio - Mais que tinta é vida na pele",
  description:
    "Estúdio de tatuagem e piercing em Barretos/SP. Biossegurança, conforto e atendimento personalizado - do primeiro traço à cicatrização.",
  icons: {
    icon: "/images/logo_wm.webp",
    apple: "/images/logo_wm.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${jost.variable}`}>
      <body className={`${jost.className} bg-ink text-bone antialiased`}>
        <AnchorScroll />
        {children}
      </body>
    </html>
  );
}

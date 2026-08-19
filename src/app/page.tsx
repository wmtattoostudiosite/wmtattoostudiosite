import Menu from "@/components/layout/Menu";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import Studio from "@/components/sections/Studio";
import Gallery from "@/components/sections/Gallery";
import AboutUs from "@/components/sections/AboutUs";
import Feedback from "@/components/sections/Feedback";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <Studio />
        <Gallery />
        <AboutUs />
        <Feedback />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

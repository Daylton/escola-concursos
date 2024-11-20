import Contato from "@/components/Contato";
import Cursos from "@/components/Cursos";
import FloatingWhatsappIcon from "@/components/FloatingWhatsappIcon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <FloatingWhatsappIcon />
      <Header />
      <HeroSection />
      <Sobre />
      <Cursos />
      <Contato />
      <Footer />
    </>
  );
}

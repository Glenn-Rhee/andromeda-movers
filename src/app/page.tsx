import Contact from "@/components/Contact";
import Container from "@/components/Container";
import FloatWhatsApp from "@/components/FloatWhatsApp";
import LandingPage from "@/components/LandingPage";
import Layanan from "@/components/Layanan";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="mt-8 px-3 md:px-10 lg:px-36">
        <Container id="home">
          <LandingPage />
        </Container>
        <Container id="layanan" className="mt-16 lg:mt-24">
          <Layanan />
        </Container>
        <Container id="kontak" className="mt-16 lg:mt-24">
          <Contact />
        </Container>
        <Container
          id="lokasi"
          className="mt-16 lg:mt-24 px-5 lg:w-[1000px] mx-auto lg:h-[450px]"
        >
          <iframe
            className="w-full aspect-square"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.861888586154!2d106.8443741742997!3d-6.281880661488587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f04fd0a3c5%3A0x5051af3e393c304a!2sANDROMEDA%20MOVERS!5e0!3m2!1sid!2sid!4v1711082111325!5m2!1sid!2sid"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </main>
      <footer className="w-full bg-[#CEDEBD] mt-5 py-5">
        <span className="text-center text-[#54831f] text-small md:text-lg font-bold block">
          Copyright &copy;2024 Andromeda Movers
        </span>
      </footer>
      <FloatWhatsApp />
    </div>
  );
}

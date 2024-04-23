import Container from "@/components/Container";
import LandingPage from "@/components/LandingPage";
import Layanan from "@/components/Layanan";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-red700 flex flex-col items-center">
      <Navbar />
      <main className="mt-8 px-3 md:px-10 lg:px-36">
        <Container>
          <LandingPage />
        </Container>
        <Container className="mt-10">
          <Layanan />
        </Container>
      </main>
    </div>
  );
}

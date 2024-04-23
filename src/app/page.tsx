import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-red700 flex flex-col items-center">
      <Navbar />
      <main className="w-3/4 mt-8">
        <div className="w-full flex justify-center">
          <LandingPage />
        </div>
      </main>
    </div>
  );
}

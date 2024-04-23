import Image from "next/image";

export default function LandingPage() {
  const widthImg = 700;
  const heightImg = widthImg / 2;
  return (
    <div className="w-3/4 flex flex-col items-center">
      <div className="relative">
        <Image
          alt="Landing Page pictures"
          src={"/img/landing-page.jpg"}
          width={widthImg}
          height={heightImg}
        />
        <div className="absolute top-0 flex flex-col items-center justify-center h-full">
          <h2 className="font-bold text-4xl text-white drop-shadow-2xl">
            Androme Movers
          </h2>
          <p>Jakarta Movers</p>
          <p>
            Jasa pindahan apartemen - rumahan dan kantor aman cepat dan
            terpercaya HUB 085773094308
          </p>
        </div>
      </div>
    </div>
  );
}

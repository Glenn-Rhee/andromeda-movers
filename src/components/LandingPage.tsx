import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IoIosCall } from "react-icons/io";

export default function LandingPage() {
  const widthImg = 750;
  const heightImg = widthImg / 2;

  return (
    <div className="w-3/4 flex flex-col items-center">
      <div className="relative">
        <div className=" w-full relative">
          <Image
            alt="Landing Page pictures"
            src={"/img/trucks.jpg"}
            width={widthImg}
            height={heightImg}
            className="brightness-75 rounded-md overflow-hidden"
          />
        </div>
        <div className="absolute top-0 flex flex-col items-center justify-center h-full">
          <h2 className="font-bold text-4xl shadow-2xl text-white drop-shadow-2xl">
            Androme Movers
          </h2>
          <div className="flex flex-col items-center min-w-full px-12 mt-4 text-white drop-shadow-2xl">
            <p className="inline text-center text-lg font-semibold text-white drop-shadow-2xl">
              Jasa pindahan dan pengiriman barang aman cepat dan terpercaya Hub
              087884393999 / 081315883322
            </p>
          </div>
          <div className="min-w-full mt-4 flex items-center">
            <Button className="mx-auto" color="success">
              <a href="#contact" className="flex items-center gap-x-3">
                <IoIosCall className="text-lg"/>
                <span className="text-lg">Hubungi Kami</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

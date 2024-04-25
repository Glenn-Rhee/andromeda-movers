import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IoIosCall } from "react-icons/io";

export default function LandingPage() {
  const widthImg = 1230;
  const heightImg = widthImg / 2;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-full relative">
          <Image
            alt="Landing Page pictures"
            src={"/img/trucks.jpg"}
            width={widthImg}
            height={heightImg}
            className="brightness-75 overflow-hidden"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center h-full">
          <h2 className="font-bold text-2xl lg:text-6xl shadow-2xl text-white drop-shadow-2xl">
            Andromeda Movers
          </h2>
          <div className="flex flex-col items-center min-w-full px-4 lg:px-28 mt-4 text-white drop-shadow-2xl">
            <p className="inline text-center text-xs md:text-medium lg:text-2xl font-semibold text-white drop-shadow-2xl">
              Jasa pindahan dan pengiriman barang aman cepat dan terpercaya Hub
              087884393999 / 081315883322
            </p>
          </div>
          <div className="min-w-full mt-4 flex items-center">
            <Button className="mx-auto" color="success">
              <a href="https://wa.me/6287884393999" className="flex items-center gap-x-3" target="_blank">
                <IoIosCall className="text-sm lg:text-lg" />
                <span className="text-sm lg:text-lg font-semibold">
                  Hubungi Kami
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { services } from "@/utils/services";
import CardLayanan from "./CardLayanan";

export default function Layanan() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-2xl lg:text-4xl text-center text-[#54831f] mb-4">
        Layanan kami meliputi
      </h3>
      <div className="lg:gap-12 md:gap-6 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <CardLayanan key={`${service.title}-${index}`} {...service} />
        ))}
      </div>
    </div>
  );
}

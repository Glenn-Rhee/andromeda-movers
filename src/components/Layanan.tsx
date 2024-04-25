import { services } from "@/utils/services";
import CardLayanan from "./card/CardLayanan";
import ContainerCard from "./card/ContainerCard";

export default function Layanan() {
  return (
    <ContainerCard title="Layanan Kami Meliputi">
      {services.map((service, index) => (
        <CardLayanan key={`${service.title}-${index}`} {...service} />
      ))}
    </ContainerCard>
  );
}

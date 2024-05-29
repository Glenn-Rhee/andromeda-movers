import { CardLayananProps } from "@/types/components";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardLayanan(props: CardLayananProps) {
  const { title, imgSrc } = props;

  return (
    <Card className="pb-4">
      <CardHeader className="flex items-center justify-center pb-0 pt-4 px-4">
        <Image
          alt={title}
          className="object-cover rounded-xl aspect-square mx-auto block"
          src={imgSrc}
          width={"100%"}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-2 px-4">
        <h4 className="font-bold text-large text-center">{title}</h4>
      </CardBody>
    </Card>
  );
}

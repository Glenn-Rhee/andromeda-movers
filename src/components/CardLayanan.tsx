import { CardLayananProps } from "@/types/components";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardLayanan(props: CardLayananProps) {
  const { title, description, imgSrc } = props;
  return (
    <Card className="py-4">
      <CardHeader className="flex items-center justify-center">
        <Image
          alt={title}
          className="object-cover rounded-xl aspect-square mx-auto block"
          src={imgSrc}
          width={250}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-2">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500 mt-2 text-md">{description}</small>
      </CardBody>
    </Card>
  );
}

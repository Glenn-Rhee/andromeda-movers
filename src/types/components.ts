import { Contacts } from "@/components/Contact";
import { Services } from "@/utils/services";

export interface ContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export interface CardLayananProps extends Services {
  className?: string;
}

export interface ContainerCardProps {
  title: string;
  children: React.ReactNode;
}

export interface CardContactProps extends Contacts {
  className?: string;
}

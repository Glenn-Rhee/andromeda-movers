import { IoLocationSharp } from "react-icons/io5";
import CardContact from "./card/CardContact";
import ContainerCard from "./card/ContainerCard";
import { IconType } from "react-icons";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export interface Contacts {
  title: string;
  description: string;
  icon: IconType;
}

export default function Contact() {
  const contacts: Contacts[] = [
    {
      title: "Alamat",
      description: "Jl. Pagu Jaten No.34, Pejaten Timur, Ps. Minggu",
      icon: IoLocationSharp,
    },
    {
      title: "Phone",
      description: "087884393999 / 081315883322",
      icon: IoCall,
    },
    {
      title: "Email",
      description: "andromeda_movers@gmail.com",
      icon: MdEmail,
    },
  ];
  
  return (
    <ContainerCard title="Kontak Kami">
      {contacts.map((contact, index) => (
        <CardContact key={`${contact.title}-${index}`} {...contact} />
      ))}
    </ContainerCard>
  );
}

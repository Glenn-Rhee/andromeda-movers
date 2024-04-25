import { CardContactProps } from "@/types/components";

export default function CardContact(props: CardContactProps) {
  const { title, description } = props;
  
  return (
    <div className="flex flex-col justify-center gap-4 py-5 px-12 box-border items-center bg-slate-300 shadow-md border border-black/5 min-w-80 max-w-80 min-h-32 rounded-lg">
      <props.icon color="#DC6B19" size={36} />
      <div className="flex flex-col items-center justify-center">
        <h3 className="md:text-xl text-lg font-bold">{title}</h3>
        <p className="text-sm font-medium text-center">{description}</p>
      </div>
    </div>
  );
}

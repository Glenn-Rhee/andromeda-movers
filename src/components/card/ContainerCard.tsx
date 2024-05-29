import { ContainerCardProps } from "@/types/components";

export default function ContainerCard(props: ContainerCardProps) {
  const { title, children } = props;

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-2xl lg:text-4xl text-center text-[#54831f] mb-4">
        {title}
      </h3>
      {title.toLowerCase().includes("layanan") ? (
        <div>
          <p className="text-lg text-slate-900 font-medium text-center">
            Andromeda Movers melayani berbagai macam jasa pindahan apartement,
            kost, rumah, kantor, pengiriman barang, catring, pengiriman paket,
            dan lain sebagainya. Andromeda Movers juga melayani sewa mobil
            engkel box dengan destinasi tujuan Jabodetabek, Jawa Barat, Jawa
            Timur, Jawa Tengah, Bali, dan Sumatera dengan berbagai layanan yang
            amanah dan tenaga profesional. Jenis layanan yang anda pilih menjadi
            faktor utama kami menentukan tarif jasa dengan biaya yang
            terjangkau.
          </p>
        </div>
      ) : null}
      <div className="lg:gap-12 md:gap-6 gap-2 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

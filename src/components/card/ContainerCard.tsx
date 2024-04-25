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
            Andromeda Movers melayani berbagai macam jasa pindahan, termasuk
            jasa pindahan jarak jauh, seperti jasa pindahan antar kota dengan
            berbagai layanan. Jenis layanan yang dipilih menjadi faktor utama
            kami menentukan suatu tarif jasa pindahan, selain itu faktor jarak
            tempuh dan banyaknya jumlah barang–barang yang akan dipindahkan juga
            turut mempengaruhi tercipta nya suatu tarif jasa pindahan kami.
          </p>
        </div>
      ) : null}
      <div className="lg:gap-12 md:gap-6 gap-2 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

export const services: Services[] = [
  {
    title: "Pindahan Rumah & Apartemen",
    description:
      "Melayani jasa pindahan rumah, aparternen, didukung dengan tim yang berpengalaman dan profesional.",
    imgSrc: "/img/pindahan.jpg",
  },
  {
    title: "Pindahan Kantor dan Public",
    description:
      "Andromeda Movers siap melayani perpindahan kantar dengan dukungan tim yang handal dan terpercaya.",
    imgSrc: "/img/dokumentasi-3.jpg",
  },
  {
    title: "Pindahan ke luar kota",
    description:
      "Andromeda Movers membantu pengiriman barang pindahan anda ke seluruh kota di Indonesia.",
    imgSrc: "/img/barang.jpg",
  },
];

export interface Services {
  title: string;
  description: string;
  imgSrc: string;
}

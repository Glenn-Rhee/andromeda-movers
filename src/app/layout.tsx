import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/components/App";

const inter = Inter({ subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
  title: "Andromeda Movers",
  description: "Andromeda Movers melayani berbagai macam jasa pindahan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}

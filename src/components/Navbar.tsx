"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

export default function NavbarAndromeda() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItems = ["Home", "Layanan", "Kontak"];

  return (
    <Navbar
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#CEDEBD]"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="#home" className="font-bold text-inherit uppercase text-xl lg:text-2xl italic">
            <span className="text-[#54831f]">Andromeda</span>{" "}
            <span className="text-[#f4f0f0]">Movers</span>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              href={`#${item.toLowerCase()}`}
              size="lg"
              className="hover:text-stone-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-[#CEDEBD]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="hover:text-stone-500 w-full"
              href={`#${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

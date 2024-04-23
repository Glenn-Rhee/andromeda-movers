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
  const menuItems = ["Home", "Galeri", "Kontak"];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#CEDEBD]">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit uppercase text-2xl italic">
            <span className="text-[#54831f]">Andromeda</span>{" "}
            <span className="text-[#f4f0f0]">Movers</span>
          </p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            size="lg"
            className="hover:text-stone-500"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            size="lg"
            className="hover:text-stone-500 mx-5"
          >
            Galeri
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            size="lg"
            className="hover:text-stone-500"
          >
            Kontak
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#CEDEBD]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="hover:text-stone-500 w-full"
              href="#"
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

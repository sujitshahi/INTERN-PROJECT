"use client";

import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PAGES_LINKS = [
  { label: "School Facilities", path: "/School_Facilities" },
  { label: "Popular Teachers", path: "/Popular_Teacher" },
  { label: "Become A Teacher", path: "/Teacher" },
  { label: "Make Appointment", path: "/Appointment" },
  { label: "Testimonial", path: "/Testimonial" },
];

export default function HeaderSplit() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      <div className="bg-linear-to-r from-orange-500 to-amber-500 text-white text-xs py-2 px-6 hidden md:flex justify-between items-center font-medium">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><i className="fa-solid fa-phone"></i> +977 123456789</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-envelope"></i> info@kider.edu.np</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-white/20 px-3 py-0.5 rounded-full text-[11px]">Admissions Open for 2026!</span>
        </div>
      </div>

      <Navbar
        className="bg-white h-20 px-4"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        shouldHideOnScroll={false}
      >
        <NavbarBrand className="gap-3 max-w-fit">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
            <i className="fa-solid fa-child-reaching text-xl"></i>
          </div>
          <span className="font-extrabold text-2xl text-gray-900 tracking-wide">Kider</span>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8 justify-center text-gray-700">
          <NavbarItem>
            <Link href="/" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/About_Us" className="font-semibold text-gray-700 hover:text-orange-500 transition-colors">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/Classes" className="font-semibold text-gray-700 hover:text-orange-500 transition-colors">
              Classes
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <button type="button" className="font-semibold text-gray-700 hover:text-orange-500 cursor-pointer flex items-center gap-1.5 transition-colors outline-none">
                  Pages
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </button>
              </DropdownTrigger>
              <DropdownMenu className="bg-white min-w-50 shadow-xl rounded-xl p-2 border border-gray-100">
                {PAGES_LINKS.map((item) => (
                  <DropdownItem
                    key={item.path}
                    onClick={() => router.push(item.path)}
                    className="hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm text-gray-700 py-2"
                  >
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <Link href="/contact_us" className="font-semibold text-gray-700 hover:text-orange-500 transition-colors">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="max-w-fit">
          <NavbarItem className="hidden sm:flex">
            <button
              type="button"
              onClick={() => router.push('/Appointment')}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-5 rounded-full transition-colors cursor-pointer text-sm"
            >
              Book a Tour
            </button>
          </NavbarItem>

          <NavbarItem className="sm:hidden flex items-center">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-orange-500 cursor-pointer"
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white pt-6 px-6 gap-4">
          <NavbarMenuItem>
            <Link href="/" className="w-full text-lg font-semibold text-orange-500 block py-1" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/About_Us" className="w-full text-lg font-semibold text-gray-800 hover:text-orange-500 block py-1" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/Classes" className="w-full text-lg font-semibold text-gray-800 hover:text-orange-500 block py-1" onClick={() => setIsMenuOpen(false)}>
              Classes
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem className="flex flex-col gap-2 py-1">
            <span className="text-lg font-semibold text-gray-800">Pages</span>
            <div className="pl-4 border-l-2 border-orange-200 flex flex-col gap-2">
              {PAGES_LINKS.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  className="text-left py-1 text-base text-gray-600 hover:text-orange-500 cursor-pointer"
                  onClick={() => {
                    router.push(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link href="/contact_us" className="w-full text-lg font-semibold text-gray-800 hover:text-orange-500 block py-1" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem className="mt-4">
            <button
              type="button"
              onClick={() => {
                router.push('/Appointment');
                setIsMenuOpen(false);
              }}
              className="w-full border-2 border-orange-500 text-orange-500 font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-colors text-base cursor-pointer"
            >
              Book a Tour
            </button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
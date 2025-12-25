'use client'
import React from "react";
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem, 
  Button 
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const menuItems = [
    { label: "Home", isActive: true },
    { label: "About Us" },
    { label: "Classes" },
    { label: "Pages" },
    { label: "Contact Us" }
  ];

  return (
    <Navbar 
      className="sticky h-20 z-50 bg-white shadow-md top-0 px-6"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      
      <NavbarBrand className="gap-3 text-orange-500 max-w-fit">
        <i className="fa-solid fa-book-open-reader fa-2x"></i>
        <p className="font-bold text-3xl">Kider</p>
      </NavbarBrand>

     
      <NavbarContent className="hidden sm:flex gap-9 text-[15px]" justify="center">
        <a href="/" className="text-orange-500 font-semibold">Home</a>
        <a href="#about" className="hover:text-orange-500 font-semibold">About Us</a>
        <a href="/classes" className="hover:text-orange-500 font-semibold">Classes</a>
        
        <Dropdown>
          <DropdownTrigger>
            <div className="hover:text-orange-500 font-semibold cursor-pointer flex items-center">
              Pages
            </div>
          </DropdownTrigger>
          <DropdownMenu className="bg-white w-52 mt-3" aria-label="Pages Menu">
            <DropdownItem onClick={() => router.push('/school_facilities')} className="hover:bg-orange-500" key="facilities">School Facilities</DropdownItem>
            <DropdownItem onClick={() => router.push('/popular_teacher')} className="hover:bg-orange-500" key="popular">Popular Teachers</DropdownItem>
            <DropdownItem onClick={() => router.push('/teacher')} className="hover:bg-orange-500" key="teacher">Become A Teacher</DropdownItem>
            <DropdownItem onClick={() => router.push('/appointment')} className="hover:bg-orange-500" key="appointment">Make Appointment</DropdownItem>
            <DropdownItem className="hover:bg-orange-500" key="testimonail">Testimonial</DropdownItem>
            <DropdownItem className="hover:bg-orange-500" key="error">404 Error</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        <a href="#contact" className="hover:text-orange-500 font-semibold">Contact Us</a>
      </NavbarContent>


      <NavbarContent justify="end" className="max-w-fit">
        <div className="hidden sm:flex">
          <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full flex items-center gap-3 hover:bg-orange-600 transition-colors cursor-pointer">
            Join Us
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>

      
        <div className="sm:hidden flex items-center">
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-orange-500 text-3xl" 
            icon={isMenuOpen ? <div>✕</div> : <div>☰</div>}
          />
        </div>
      </NavbarContent>

      <NavbarMenu className="pt-10 bg-white">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Button 
              className={`w-full justify-start text-xl py-4 ${item.isActive ? "text-orange-500" : "text-gray-800"} hover:text-orange-500`}
              variant="light"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Button>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <button 
            className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-full flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors text-lg mt-4 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
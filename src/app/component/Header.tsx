'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@heroui/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", isActive: true },
    { label: "About Us" },
    { label: "Classes" },
    { label: "Pages" },
    { label: "Contact Us" }
  ];

  return (
    <Navbar 
      className="h-15 flex p-5 pt-10"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      
      <NavbarBrand className="gap-3 text-orange-500">
        <i className="fa-solid fa-book-open-reader fa-3x"></i>
        <p className="font-bold text-4xl">Kider</p>
      </NavbarBrand>

      
      <NavbarContent className="hidden sm:flex gap-2 text-[15px]" justify="center">
        {menuItems.map((item) => (
          <Button 
            key={item.label}
            className={item.isActive ? "text-orange-500" : "hover:text-orange-500"}
          >
            {item.label}
          </Button>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
  
        <div className="hidden sm:flex">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-4xl flex items-center gap-3 hover:bg-orange-600 transition-colors cursor-pointer">
            Join Us
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>

       
        <div className="sm:hidden flex items-center">
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-orange-500 text-3xl" 
            icon={
              isMenuOpen ? (
                <div className="text-orange-500 text-3xl">✕</div> 
              ) : (
                <div className="text-orange-500 text-3xl">☰</div> 
              )
            }
          />
        </div>
      </NavbarContent>

      <NavbarMenu className="pt-10 bg-white">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Button 
              className={`w-full justify-start text-xl py-4 ${item.isActive ? "text-orange-500" : "text-gray-800"} hover:text-orange-500`}
              variant="light"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Button>
          </NavbarMenuItem>
        ))}
        
      
        <NavbarMenuItem>
          <button 
            className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-4xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors text-lg mt-4 cursor-pointer"
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
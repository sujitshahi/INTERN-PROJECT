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
  NavbarMenuToggle,  
} from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();


  return (
    <>
      <Navbar 

        className="sticky h-20 z-50 shadow-md px-4 sm:px-6"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        shouldHideOnScroll={false}
      >
        
        <NavbarBrand className="gap-3 text-orange-500 max-w-fit">
          <i className="fa-solid fa-book-open-reader text-2xl sm:text-3xl"></i>
          <h1 className="font-bold text-2xl sm:text-3xl">Kider</h1>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6 lg:gap-9 text-sm lg:text-[15px] justify-center text-white">
          <Link href="/" className="text-orange-500 font-semibold hover:underline">Home</Link>
          <Link href="/About_Us" className=" font-semibold hover:text-orange-500 hover:underline">About Us</Link>
          <Link href="/Classes" className="font-semibold hover:text-orange-500 hover:underline">Classes</Link>
          
          <Dropdown>
            <DropdownTrigger>
              <div className="font-semibold hover:text-orange-500 hover:underline cursor-pointer flex items-center gap-x-1 lg:gap-x-2">
                Pages
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
            </DropdownTrigger>
            <DropdownMenu className=" bg-white lg:w-52 mt-3 shadow-lg ">
              <DropdownItem onClick={() => router.push('/School_Facilities')} className="hover:bg-gray-300" key="facilities">School Facilities</DropdownItem>
              <DropdownItem onClick={() => router.push('/Popular_Teacher')} className="hover:bg-gray-300" key="popular">Popular Teachers</DropdownItem>
              <DropdownItem onClick={() => router.push('/Teacher')} className="hover:bg-gray-300" key="teacher">Become A Teacher</DropdownItem>
              <DropdownItem onClick={() => router.push('/Appointment')} className="hover:bg-gray-300" key="appointment">Make Appointment</DropdownItem>         
              <DropdownItem onClick={() => router.push('/Testimonial')} className="hover:bg-gray-300" key="testimonail">Testimonial</DropdownItem>
              <DropdownItem onClick={() => router.push('/Not_Found')} className="hover:bg-gray-300" key="error">404 Error</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <Link href="/contact_us" className="font-semibold hover:text-orange-500 hover:underline">Contact Us</Link>
        </NavbarContent>

        <NavbarContent justify="end" className="max-w-fit">
          <div className="hidden sm:flex">
            <button
              type="button"
              onClick={() => router.push('/')}
             className="bg-orange-500 text-white font-bold py-2 px-4 lg:px-6 rounded-full flex items-center gap-2 lg:gap-3 hover:bg-orange-600 transition-colors cursor-pointer text-sm lg:text-base">
              Join Us
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <NavbarMenuToggle 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-orange-500 text-2xl cursor-pointer" 
              icon={isMenuOpen ? <div>✕</div> : <div>☰</div>}
            />
          </div>
        </NavbarContent>

      </Navbar>

     
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 sm:hidden overflow-y-auto">
          <div className="flex flex-col py-4 px-6">
            <div className="border-b border-gray-100 py-4">
              <Link href="/" className="font-semibold py-3 text-orange-500 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </div>
            <div className="border-b border-gray-100 py-4">
              <Link href="/About_Us" className="font-semibold py-3 text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </div>
            <div className="border-b border-gray-100 py-4">
              <Link href="/Classes" className="font-semibold py-3 text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Classes</Link>
            </div>
            <div className="border-b border-gray-100 py-4">
              <div className="flex flex-col">
                <div className="text-xl font-semibold py-3 text-gray-800">Pages</div>
                <div className="pl-4 border-l-2 border-gray-200 ml-2">
                  <button type="button" className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500" onClick={() => { router.push('/School_Facilities'); setIsMenuOpen(false); }}>School Facilities</button>
                  <button type="button" className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/Popular_Teachers'); setIsMenuOpen(false); }}>Popular Teachers</button>
                  <button type="button" className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/Teacher'); setIsMenuOpen(false); }}>Become A Teacher</button>
                  <button type="button" className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/Appointment'); setIsMenuOpen(false); }}>Make Appointment</button>
                  <button type="button" className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/Testimonial'); setIsMenuOpen(false); }}>Testimonial</button>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-100 py-4">
              <Link href="/contact_us" className="font-semibold py-3 block text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
            <div className="mt-8 pt-4">
              <button type="button" className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-full flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors text-lg cursor-pointer">
                Join Us <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



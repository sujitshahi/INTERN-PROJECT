'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

export default function Header() {
  return (
    <div className="p-5 flex justify-between border-b">
        <Navbar>
            <NavbarBrand className="text-orange-500 text-3xl space-x-3">
                <i className="fa-solid fa-book-open-reader"></i>
                <p className="font-bold text-inherit">Kider</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 space-x-4 font-bold" justify="center">
                <NavbarItem>
                <Link className="text-orange-500" href="">
                    Home
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link aria-current="page" href="">
                    About Us
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="">
                    Classes
                </Link>
                </NavbarItem>

                <NavbarItem>
                <Link color="foreground" href="">
                    Pages
                </Link>
                </NavbarItem>

                <NavbarItem>
                <Link color="foreground" href="">
                    Contact Us 
                </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Button className="border-2 rounded-3xl font-bold bg-orange-400 gap-3 text-white h-10" color="primary">Join Us
                    <i className ="fa-solid fa-arrow-right"></i>
                </Button>
                
            </NavbarContent>
         </Navbar>
    </div>
  );
}

// 'use client'
// import React from "react";
// import { 
//   Dropdown, 
//   DropdownTrigger, 
//   DropdownMenu, 
//   DropdownItem, 
//   Navbar, 
//   NavbarBrand, 
//   NavbarContent, 
//   NavbarMenuToggle,  
// } from "@heroui/react";
// import { useRouter } from "next/navigation";

// export default function Page() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const router = useRouter();

//   return (
//     <>
//       <Navbar 
//         className="sticky h-20 z-50 bg-white shadow-md px-4 sm:px-6"
//         isMenuOpen={isMenuOpen}
//         onMenuOpenChange={setIsMenuOpen}
//         maxWidth="full"
//         shouldHideOnScroll={false}
//       >
        
//         <NavbarBrand className="gap-3 text-orange-500 max-w-fit">
//           <i className="fa-solid fa-book-open-reader text-2xl sm:text-3xl"></i>
//           <h1 className="font-bold text-2xl sm:text-3xl">Kider</h1>
//         </NavbarBrand>

       
//         <NavbarContent className="hidden sm:flex gap-6 lg:gap-9 text-sm lg:text-[15px]" justify="center">
//           <a href="/" className="text-orange-500 font-semibold hover:underline">Home</a>
//           <a href="/aboutUs" className="text-gray-800 font-semibold hover:text-orange-500 hover:underline">About Us</a>
//           <a href="/classes" className="text-gray-800 font-semibold hover:text-orange-500 hover:underline">Classes</a>
          
//           <Dropdown>
//             <DropdownTrigger>
//               <div className="text-gray-800 font-semibold hover:text-orange-500 cursor-pointer flex items-center gap-x-1 lg:gap-x-2">
//                 Pages
//                 <i className="fa-solid fa-chevron-down text-xs"></i>
//               </div>
//             </DropdownTrigger>
//             <DropdownMenu className="p-3 bg-white w-48 lg:w-52 mt-3 shadow-lg" aria-label="Pages Menu">
//               <DropdownItem onClick={() => router.push('/school_facilities')} className="hover:bg-orange-500" key="facilities">School Facilities</DropdownItem>
//               <DropdownItem onClick={() => router.push('/popular_teacher')} className="hover:bg-orange-500" key="popular">Popular Teachers</DropdownItem>
//               <DropdownItem onClick={() => router.push('/teacher')} className="hover:bg-orange-500" key="teacher">Become A Teacher</DropdownItem>
//               <DropdownItem onClick={() => router.push('/appointment')} className="hover:bg-orange-500" key="appointment">Make Appointment</DropdownItem>         
//               <DropdownItem onClick={() => router.push('/testimonial')} className="hover:bg-orange-500" key="testimonail">Testimonial</DropdownItem>
//               <DropdownItem className="hover:bg-orange-500" key="error">404 Error</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
          
//           <a href="/contact" className="text-gray-800 font-semibold hover:text-orange-500 hover:underline">Contact Us</a>
//         </NavbarContent>


//         <NavbarContent justify="end" className="max-w-fit">
//           <div className="hidden sm:flex">
//             <button className="bg-orange-500 text-white font-bold py-2 px-4 lg:px-6 rounded-full flex items-center gap-2 lg:gap-3 hover:bg-orange-600 transition-colors cursor-pointer text-sm lg:text-base">
//               Join Us
//               <i className="fa-solid fa-arrow-right-long"></i>
//             </button>
//           </div>

//           <div className="sm:hidden flex items-center">
//             <NavbarMenuToggle 
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//               className="text-orange-500 text-2xl cursor-pointer" 
//               icon={isMenuOpen ? <div>✕</div> : <div>☰</div>}
//             />
//           </div>
//         </NavbarContent>

//       </Navbar>

    
//       {isMenuOpen && (
//         <div className="fixed inset-0 top-20 bg-white z-40 sm:hidden overflow-y-auto">
//           <div className="flex flex-col py-4 px-6">
            
//             <div className="border-b border-gray-100 py-4">
//               <a
//                 href="/"
//                 className=" font-semibold py-3 text-orange-500 hover:text-orange-600"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </a>
//             </div>
            
          
//             <div className="border-b border-gray-100 py-4">
//               <a
//                 href="/aboutUs"
//                 className=" font-semibold py-3 text-gray-800 hover:text-orange-500"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//               </a>
//             </div>
            
            
//             <div className="border-b border-gray-100 py-4">
//               <a
//                 href="/classes"
//                 className="font-semibold py-3 text-gray-800 hover:text-orange-500"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Classes
//               </a>
//             </div>
            
          
//             <div className="border-b border-gray-100 py-4">
//               <div className="flex flex-col">
//                 <div className="text-xl font-semibold py-3 text-gray-800">
//                   Pages
//                 </div>
//                 <div className="pl-4 border-l-2 border-gray-200 ml-2">
//                   <button
//                     className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500"
//                     onClick={() => {
//                       router.push('/school_facilities');
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     School Facilities
//                   </button>
//                   <button
//                     className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg"
//                     onClick={() => {
//                       router.push('/popular_teacher');
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     Popular Teachers
//                   </button>
//                   <button
//                     className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg"
//                     onClick={() => {
//                       router.push('/teacher');
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     Become A Teacher
//                   </button>
//                   <button
//                     className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg"
//                     onClick={() => {
//                       router.push('/appointment');
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     Make Appointment
//                   </button>
//                   <button
//                     className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg"
//                     onClick={() => {
//                       router.push('/testimonial');
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     Testimonial
//                   </button>
//                   <button
//                     className="w-full text-left py-3 text-gray-700 cursor-pointer hover:text-orange-500 text-lg"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     404 Error
//                   </button>
//                 </div>
//               </div>
//             </div>
            
            
//             <div className="border-b border-gray-100 py-4">
//               <a
//                 href="/contact"
//                 className=" font-semibold py-3 block text-gray-800 hover:text-orange-500"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </a>
//             </div>
            
            
//             <div className="mt-8 pt-4">
//               <button 
//                 className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-full flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors text-lg cursor-pointer"
             
//               >
//                 Join Us
//                 <i className="fa-solid fa-arrow-right-long"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }









'use client'
import React, { useState, useEffect } from "react"; // Added useState and useEffect
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // New state to track if we are on the client
  const router = useRouter();

  // This runs only once after the component is mounted in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  // If we are still rendering on the server, return a placeholder 
  // with the same height to prevent layout shift.
  if (!mounted) {
    return <div className="h-20 bg-white w-full shadow-md" />; 
  }

  return (
    <>
      <Navbar 
        className="sticky h-20 z-50 bg-white shadow-md px-4 sm:px-6"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        shouldHideOnScroll={false}
      >
        
        <NavbarBrand className="gap-3 text-orange-500 max-w-fit">
          <i className="fa-solid fa-book-open-reader text-2xl sm:text-3xl"></i>
          <h1 className="font-bold text-2xl sm:text-3xl">Kider</h1>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6 lg:gap-9 text-sm lg:text-[15px]" justify="center">
          <a href="/" className="text-orange-500 font-semibold hover:underline">Home</a>
          <a href="/about_us" className="text-gray-800 font-semibold hover:text-orange-500 hover:underline">About Us</a>
          <a href="/classes" className="text-gray-800 font-semibold hover:text-orange-500 hover:underline">Classes</a>
          
          <Dropdown>
            <DropdownTrigger>
              <div className="text-gray-800 font-semibold hover:text-orange-500 cursor-pointer flex items-center gap-x-1 lg:gap-x-2">
                Pages
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
            </DropdownTrigger>
            <DropdownMenu className="p-3 bg-white w-48 lg:w-52 mt-3 shadow-lg" aria-label="Pages Menu">
              <DropdownItem onClick={() => router.push('/school_facilities')} className="hover:bg-orange-500" key="facilities">School Facilities</DropdownItem>
              <DropdownItem onClick={() => router.push('/popular_teacher')} className="hover:bg-orange-500" key="popular">Popular Teachers</DropdownItem>
              <DropdownItem onClick={() => router.push('/teacher')} className="hover:bg-orange-500" key="teacher">Become A Teacher</DropdownItem>
              <DropdownItem onClick={() => router.push('/appointment')} className="hover:bg-orange-500" key="appointment">Make Appointment</DropdownItem>         
              <DropdownItem onClick={() => router.push('/testimonial')} className="hover:bg-orange-500" key="testimonail">Testimonial</DropdownItem>
              <DropdownItem className="hover:bg-orange-500" key="error">404 Error</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <a href="/contact_us" className="text-gray-800 font-semibold hover:text-orange-500 hover:underline">Contact Us</a>
        </NavbarContent>

        <NavbarContent justify="end" className="max-w-fit">
          <div className="hidden sm:flex">
            <button
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

      {/* Mobile Menu logic remains the same */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 sm:hidden overflow-y-auto">
          <div className="flex flex-col py-4 px-6">
            <div className="border-b border-gray-100 py-4">
              <a href="/" className="font-semibold py-3 text-orange-500 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Home</a>
            </div>
            <div className="border-b border-gray-100 py-4">
              <a href="/aboutUs" className="font-semibold py-3 text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</a>
            </div>
            <div className="border-b border-gray-100 py-4">
              <a href="/classes" className="font-semibold py-3 text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Classes</a>
            </div>
            <div className="border-b border-gray-100 py-4">
              <div className="flex flex-col">
                <div className="text-xl font-semibold py-3 text-gray-800">Pages</div>
                <div className="pl-4 border-l-2 border-gray-200 ml-2">
                  <button className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500" onClick={() => { router.push('/school_facilities'); setIsMenuOpen(false); }}>School Facilities</button>
                  <button className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/popular_teacher'); setIsMenuOpen(false); }}>Popular Teachers</button>
                  <button className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/teacher'); setIsMenuOpen(false); }}>Become A Teacher</button>
                  <button className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/appointment'); setIsMenuOpen(false); }}>Make Appointment</button>
                  <button className="w-full text-left py-3 cursor-pointer text-gray-700 hover:text-orange-500 text-lg" onClick={() => { router.push('/testimonial'); setIsMenuOpen(false); }}>Testimonial</button>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-100 py-4">
              <a href="/contact" className="font-semibold py-3 block text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </div>
            <div className="mt-8 pt-4">
              <button className="w-full bg-orange-500 text-white font-bold py-4 px-4 rounded-full flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors text-lg cursor-pointer">
                Join Us <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



// "use client";
// import { Button } from "@heroui/react";
// import Image from "next/image";

// import { useRouter } from "next/navigation";

// export default function Footer() {
//   const router = useRouter();

//   return (
//     <div className=" w-full min-h-22.5 bg-[#103741] p-4 md:p-6 lg:p-8">
      
//       <div className="max-w-7xl mx-auto">
      
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          
//           <div className="mb-6 md:mb-0">
//             <h1 className="text-white text-2xl mb-4">Get In Touch</h1>
//             <h3 className="text-gray-500 mb-3">
//               <i className="fa-solid fa-location-dot mr-2"></i> 
//               123 Main St, New York, USA
//             </h3>
//             <h3 className="text-gray-500 mb-3">
//               <i className="fa-solid fa-phone mr-2"></i> 
//               +1 234 567 890
//             </h3>
//             <h3 className="text-gray-500">
//               <i className="fa-solid fa-envelope mr-2"></i> 
//               1DZDj@example.com
//             </h3>

//             <div className="mt-2 flex items-center gap-4">
//               <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer hover:scale-105">
//                 <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
//               </div>
//               <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer hover:scale-105">
//                 <i className="fa-brands fa-facebook text-lg text-white hover:text-white"></i>
//               </div>
//               <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer hover:scale-105">
//                 <i className="fa-brands fa-youtube text-lg text-white hover:text-white"></i>
//               </div>
//               <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer hover:scale-105">
//                 <i className="fa-brands fa-linkedin text-lg text-white hover:text-white"></i>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6 md:mb-0">
//             <h1 className="text-white text-2xl font-bold font-serif mb-4">
//               Quick Links
//             </h1>
//             <div>
//               <Button onPress={() => router.push('/About_Us')} className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
//                 <i className="fa-solid fa-chevron-right text-sm"></i>
//                 About Us
//               </Button>
//               <Button onPress={() => router.push('/Contact_Us')} className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
//                 <i className="fa-solid fa-chevron-right text-sm"></i>
//                 Contact Us
//               </Button>
//               <Button onPress={() => router.push('/')} className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
//                 <i className="fa-solid fa-chevron-right text-sm"></i>
//                 Our Services
//               </Button>
//               <Button className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
//                 <i className="fa-solid fa-chevron-right text-sm"></i>
//                 Privacy Policy
//               </Button>
//               <Button className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
//                 <i className="fa-solid fa-chevron-right text-sm"></i>
//                 Terms & Condition
//               </Button>
//             </div>
//           </div>

     
//           <div className="mb-6 md:mb-0">
//             <h1 className="text-white text-2xl mb-4">Photo Gallery</h1>
//             <div className="grid grid-cols-3 gap-2 max-w-50 md:max-w-none">
//               <Image src="/images/classes-1.jpg" width={68} height={68} className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 1" />
//               <Image src="/images/classes-2.jpg" width={68} height={68} className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 2" />
//               <Image src="/images/classes-3.jpg" width={68} height={68} className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 3" />
//               <Image src="/images/classes-4.jpg" width={68} height={68} className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 4" />
//               <Image src="/images/classes-5.jpg" width={68} height={68} className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 5" />
//               <Image src="/images/classes-6.jpg" width={68} height={68} className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 6" />
//             </div>
//           </div>

    
//           <div className="mb-6 md:mb-0">
//             <div>
//               <h1 className="text-white text-2xl">Newsletter</h1>
//               <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing</p>
//               <p className="text-gray-500">Lorem ipsum dolor</p>
//             </div>
//             <div className="mt-7">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <label htmlFor="newsletter-email" className="sr-only">
//                   Email address
//                 </label>
//                 <input 
//                   id="newsletter-email"
//                   type="email" 
//                   className="flex-1 p-2 border-2 border-gray-300 rounded-md text-gray-500 w-full"
//                 />
//                 <Button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 cursor-pointer transition-colors whitespace-nowrap w-full sm:w-auto">
//                   Signin
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

      
//         <div className=" pt-6 border-t border-gray-700 relative">
 
//           <div className=" pt-6 border-gray-700 relative">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <div className="text-gray-400 text-sm">
//                 &copy; <span className="text-white border-b border-white hover:text-orange-500 hover:border-orange-500 cursor-pointer pb-0.5 transition-colors">Your Site Name</span>, All Right Reserved. Designed By <span className="text-white border-b border-white hover:text-orange-500 hover:border-orange-500 cursor-pointer pb-0.5 transition-colors">HTML Codex</span>
//                 <br />
//                 Distributed By: <span className="text-white border-b border-white hover:text-orange-500 hover:border-orange-500 cursor-pointer pb-0.5 transition-colors">ThemeWagon</span>
//               </div>
    
//               <div className="flex items-center">
//                 <Button onPress={() => router.push('/')} className="text-white hover:text-orange-500 text-sm">Home</Button>
//                 <div className="h-4 w-px bg-gray-600"></div>
//                 <Button className="text-white hover:text-orange-500 text-sm">Cookies</Button>
//                 <div className="h-4 w-px bg-gray-600"></div>
//                 <Button className="text-white hover:text-orange-500 text-sm">Help</Button>
//                 <div className="h-4 w-px bg-gray-600"></div>
//                 <Button className="text-white hover:text-orange-500 text-sm">FQAs</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
          
//         </div>

       

//       </div>
//     </div>
//   )
// }



"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Heart,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const router = useRouter();

  const quickLinks = [
    { name: "About Us", path: "/About_Us" },
    { name: "Contact Us", path: "/Contact_Us" },
    { name: "Our Services", path: "/" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms & Conditions", path: "#" },
  ];

  const galleryImages = [
    "/images/classes-1.jpg",
    "/images/classes-2.jpg",
    "/images/classes-3.jpg",
    "/images/classes-4.jpg",
    "/images/classes-5.jpg",
    "/images/classes-6.jpg",
  ];

  return (
    <footer className="w-full bg-[#FFFDF9] pt-12 pb-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-sans">
      
      {/* Background Subtle Grid Texture */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      {/* Main Curved Footer Outer Card */}
      <div className="max-w-7xl mx-auto bg-[#103741] text-slate-200 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative z-10 shadow-xl border border-teal-900/40">
        
        {/* Top Newsletter Highlight Banner */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#FE5D37] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stay Connected</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-300 text-sm">
              Get the latest updates, news, and special announcements delivered right to your inbox.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full pl-5 pr-32 py-3.5 rounded-full bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm outline-none focus:ring-4 focus:ring-orange-400/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#FE5D37] hover:bg-[#e45230] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              >
                <span>Join</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Get In Touch */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              Get In Touch
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FE5D37] shrink-0 mt-0.5" />
                <span>123 Main St, New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FE5D37] shrink-0" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FE5D37] shrink-0" />
                <span>support@example.com</span>
              </div>
            </div>

            {/* Social Pill Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FE5D37] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => link.path !== "#" && router.push(link.path)}
                    className="group flex items-center justify-between w-full text-slate-300 hover:text-white transition-colors py-1 cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#FE5D37] transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Photo Gallery */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              Photo Gallery
            </h4>
            <div className="grid grid-cols-3 gap-2.5">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden group border border-white/10"
                >
                  <Image
                    src={src}
                    alt={`Gallery preview ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-115 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#FE5D37]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Info Card */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              About Us
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dedicated to providing a vibrant, safe, and imaginative space where young minds explore, grow, and thrive every day.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <p className="font-semibold text-white mb-1">⏰ Learning Hours</p>
              <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 text-center md:text-left">
            <span>© {new Date().getFullYear()} Kider. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FE5D37] fill-[#FE5D37]" />
            <span>All Rights Reserved.</span>
          </p>

          <div className="flex items-center gap-6">
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button className="hover:text-white transition-colors cursor-pointer">Cookies</button>
            <button className="hover:text-white transition-colors cursor-pointer">Help</button>
            <button className="hover:text-white transition-colors cursor-pointer">FAQs</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

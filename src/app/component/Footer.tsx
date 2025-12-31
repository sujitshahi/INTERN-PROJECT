'use client'
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="w-full min-h-22.5 bg-[#103741] p-4 md:p-6 lg:p-8">
      
      <div className="max-w-7xl mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl mb-4">Get In Touch</h1>
            <h3 className="text-gray-500 mb-3">
              <i className="fa-solid fa-location-dot mr-2"></i> 
              123 Main St, New York, USA
            </h3>
            <h3 className="text-gray-500 mb-3">
              <i className="fa-solid fa-phone mr-2"></i> 
              +1 234 567 890
            </h3>
            <h3 className="text-gray-500">
              <i className="fa-solid fa-envelope mr-2"></i> 
              1DZDj@example.com
            </h3>

            <div className="mt-2 flex items-center gap-4">
              <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer hover:scale-105">
                <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
              </div>
              <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer hover:scale-105">
                <i className="fa-brands fa-facebook text-lg text-white hover:text-white"></i>
              </div>
              <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer hover:scale-105">
                <i className="fa-brands fa-youtube text-lg text-white hover:text-white"></i>
              </div>
              <div className="h-10 w-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer hover:scale-105">
                <i className="fa-brands fa-linkedin text-lg text-white hover:text-white"></i>
              </div>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl font-bold font-serif mb-4">
              Quick Links
            </h1>
            <div>
              <Button onPress={() => router.push('/aboutUs')} className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
                <i className="fa-solid fa-chevron-right text-sm"></i>
                About Us
              </Button>
              <Button onPress={() => router.push('/contact')} className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
                <i className="fa-solid fa-chevron-right text-sm"></i>
                Contact Us
              </Button>
              <Button onPress={() => router.push('/')} className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
                <i className="fa-solid fa-chevron-right text-sm"></i>
                Our Services
              </Button>
              <Button className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
                <i className="fa-solid fa-chevron-right text-sm"></i>
                Privacy Policy
              </Button>
              <Button className="flex items-center gap-3 text-gray-400 p-0 justify-start hover:text-orange-500 transition-colors w-full md:w-auto bg-transparent">
                <i className="fa-solid fa-chevron-right text-sm"></i>
                Terms & Condition
              </Button>
            </div>
          </div>

     
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl mb-4">Photo Gallery</h1>
            <div className="grid grid-cols-3 gap-2 max-w-50 md:max-w-none">
              <img src="https://themewagon.github.io/kider/img/classes-1.jpg" className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 1" />
              <img src="https://themewagon.github.io/kider/img/classes-2.jpg" className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 2" />
              <img src="https://themewagon.github.io/kider/img/classes-3.jpg" className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 3" />
              <img src="https://themewagon.github.io/kider/img/classes-4.jpg" className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 4" />
              <img src="https://themewagon.github.io/kider/img/classes-5.jpg" className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 5" />
              <img src="https://themewagon.github.io/kider/img/classes-6.jpg" className="h-17 w-17 rounded-xl object-cover border-2 border-white" alt="Gallery 6" />
            </div>
          </div>

    
          <div className="mb-6 md:mb-0">
            <div>
              <h1 className="text-white text-2xl">Newsletter</h1>
              <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <p className="text-gray-500">Lorem ipsum dolor</p>
            </div>
            <div className="mt-7">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 p-2 border-2 border-gray-300 rounded-md text-gray-500 w-full"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors whitespace-nowrap w-full sm:w-auto">
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>

      
        <div className=" pt-6 border-t border-gray-700 relative">
 
          <div className=" pt-6 border-gray-700 relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                &copy; <span className="text-white border-b border-white hover:text-orange-500 hover:border-orange-500 cursor-pointer pb-0.5 transition-colors">Your Site Name</span>, All Right Reserved. Designed By <span className="text-white border-b border-white hover:text-orange-500 hover:border-orange-500 cursor-pointer pb-0.5 transition-colors">HTML Codex</span>
                <br />
                Distributed By: <span className="text-white border-b border-white hover:text-orange-500 hover:border-orange-500 cursor-pointer pb-0.5 transition-colors">ThemeWagon</span>
              </div>
    
              <div className="flex items-center">
                <Button onPress={() => router.push('/')} className="text-white hover:text-orange-500 text-sm">Home</Button>
                <div className="h-4 w-px bg-gray-600"></div>
                <Button className="text-white hover:text-orange-500 text-sm">Cookies</Button>
                <div className="h-4 w-px bg-gray-600"></div>
                <Button className="text-white hover:text-orange-500 text-sm">Help</Button>
                <div className="h-4 w-px bg-gray-600"></div>
                <Button className="text-white hover:text-orange-500 text-sm">FQAs</Button>
              </div>
            </div>
          </div>
        </div>
      

      </div>
    </div>
  )
}
'use client';
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
    
      
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D4354] mb-4">
              Popular Teachers
            </h1>        
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
              vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
            </p>
        </motion.div>

      
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center">

            {/* Card 1 */}      
            <motion.div
              className="relative w-full max-w-[320px]"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
                <div className=" rounded-[100%] overflow-hidden bg-gray-100">
                    <img src="https://themewagon.github.io/kider/img/team-1.jpg" alt="" className=" object-cover"/>                               
                </div>

                <div className="absolute -bottom-10 -right-4 w-56 h-56 rounded-full border-16 border-[#FFF8F6] bg-white flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 duration-300">
                    <h3 className="text-xl font-bold text-[#1D4354]">Full Name</h3>
                    <p className="text-gray-400 text-sm mb-3">Designation</p>
                    <div className="flex gap-2">
                        <div className="w-9 h-9 font-bold rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-xl">
                            f
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
                            <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm"> 
                            <i className="fa-brands fa-instagram text-lg text-white hover:text-white"></i>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="relative w-full max-w-[320px]"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
                <div className=" rounded-[100%] overflow-hidden bg-gray-100">
                    <img src="https://themewagon.github.io/kider/img/team-2.jpg" alt="" className=" object-cover" />
                </div>
                
                <div className="absolute -bottom-10 -right-4 w-56 h-56 rounded-full border-16 border-[#FFF8F6] bg-white flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 duration-300">
                    <h3 className="text-xl font-bold text-[#1D4354]">Full Name</h3>
                    <p className="text-gray-400 text-sm mb-3">Designation</p>
                    <div className="flex gap-2">
                        <div className="w-9 h-9 font-bold rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-xl">f</div>
                        <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
                            <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm"> 
                            <i className="fa-brands fa-instagram text-lg text-white hover:text-white"></i>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="relative w-full max-w-[320px]"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
                <div className=" rounded-[100%] overflow-hidden bg-gray-100">
                    <img src="https://themewagon.github.io/kider/img/team-3.jpg" alt="Teacher 3" className=" object-cover" />                    
                </div>
               
                <div className="absolute -bottom-10 -right-4 w-56 h-56 rounded-full border-16 border-[#FFF8F6] bg-white flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 duration-300">
                    <h3 className="text-xl font-bold text-[#1D4354]">Full Name</h3>
                    <p className="text-gray-400 text-sm mb-3">Designation</p>
                    <div className="flex gap-2">
                        <div className="w-9 h-9 font-bold rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-xl">f</div>
                        <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
                            <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm"> 
                            <i className="fa-brands fa-instagram text-lg text-white hover:text-white"></i>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>

    </div>
  );
}

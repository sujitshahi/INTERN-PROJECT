"use client";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row rounded-4xl overflow-hidden shadow-sm">
        
        <motion.div
          className="flex-1 bg-[#FFF5F3] p-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className=" text-3xl font-bold mb-8">
            Make Appointment
          </h2>

          <form className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">          
              <input type="text" placeholder="Gurdian Name" className="w-60 p-4 rounded-xl bg-white outline-none placeholder-gray-400 text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 duration-200" />
              <input type="email" placeholder="Gurdian Email" className="w-60 p-4 rounded-xl bg-white outline-none placeholder-gray-400 text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 duration-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
              <input type="text" placeholder="Child Name" className="w-60 p-4 rounded-xl border-none bg-white outline-none placeholder-gray-400 text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 duration-200" />
              <input type="text" placeholder="Child Age" className="w-60 p-4 rounded-xl border-none bg-white outline-none placeholder-gray-400 text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 duration-200" />
            </div>
           
            <textarea placeholder="Message" className="w-130 p-4 rounded-xl border-none bg-white outline-none placeholder-gray-400 text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 duration-200"></textarea>                       
            <button type="submit" className="w-full bg-[#FE5D37] text-white font-bold py-4 rounded-xl cursor-pointer hover:bg-[#e45230] transition-colors duration-300 text-lg">
              Submit
            </button>
          </form>
        </motion.div>

        <motion.div
          className="flex-1 relative min-h-100"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/images/appointment.jpg"
            alt="kid smilling"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
}

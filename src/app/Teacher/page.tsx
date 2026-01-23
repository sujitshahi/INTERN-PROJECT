"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="mt-26 h-100 w-300 ml-10 flex max-lg:flex-col max-lg:items-center max-lg:w-full max-lg:ml-0 max-lg:mt-10 max-lg:px-4 mb-4">
      
      <motion.div
        className="h-100 w-300 max-w-full max-lg:w-full max-lg:h-auto max-lg:max-w-md"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          className="w-full h-full object-cover rounded-l-3xl max-lg:rounded-t-3xl max-lg:rounded-bl-none"
          src="https://themewagon.github.io/kider/img/call-to-action.jpg"
          alt=""
        />
      </motion.div>

      <motion.div
        className="space-y-4 bg-[#FFF5F3] rounded-r-3xl max-lg:rounded-b-3xl max-lg:rounded-tr-none max-lg:w-full max-lg:max-w-md"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col h-full space-y-6 p-6 mt-20 max-lg:mt-6 max-lg:p-4 max-lg:space-y-4">
          <h1 className="font-bold text-3xl max-lg:text-2xl max-sm:text-xl font-[lobster]">
            Become A Teacher
          </h1>
          <p className="max-lg:text-sm">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <button className="flex justify-center gap-2 items-center border-2 h-15 text-xl p-2 bg-orange-500 text-white rounded-lg cursor-pointer hover:bg-orange-400 duration-300 max-lg:h-12 max-lg:text-lg">
            Get Started Now 
            <div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </button>
        </div>
      </motion.div>

    </div>
  );
}

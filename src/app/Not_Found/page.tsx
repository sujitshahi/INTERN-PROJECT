"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 

export default function Page() {
  const router = useRouter();

  return (
    <div className="container-xxl py-5 flex flex-col items-center justify-center min-h-[60vh] text-center px-4 overflow-hidden">
     
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="container"
      >
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="flex justify-center mb-4">
              <i className="fa-solid fa-triangle-exclamation text-[#FE5D37] text-7xl"></i>
            </div>

            <h1 className="text-8xl font-bold text-[#103741] mb-2">
              404
            </h1>

            <h1 className="text-4xl font-bold text-[#103741] mb-4">
              Page Not Found
            </h1>

            <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
              We’re sorry, the page you have looked for does not exist in our website! 
              Maybe go to our home page or try to use a search?
            </p>

            <Button
              onPress={() => router.push("/")}
              className="mt-6 bg-[#FE5D37] text-white font-semibold py-7 px-9 rounded-full transition-transform hover:scale-105"
            >
              Go Back To Home
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
"use client";
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter(); 
  const slides = [
    {
      title: "The Best KinderGarden School For Your Child",
      description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?auto=format&fit=crop&q=80&w=1920", 
    },
    {
      title: "Make A Brighter Future For Your Child",
      description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1623076189461-f7706b741c04?auto=format&fit=crop&q=80&w=1920", 
    },
  ];

  return (
    <Carousel className="w-full h-screen">
      <CarouselContent className="ml-0">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="pl-0 w-screen h-screen">
            <Card className="relative w-screen h-screen overflow-hidden border-none rounded-none">
              
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-24 md:h-32 block">
                  <path fill="#F54A00" d="M0,0 L1440,0 L1440,80 C1320,70 1200,110 1080,100 C960,90 840,50 720,60 C600,70 480,90 360,80 C240,70 120,70 0,90 Z" />
                </svg>
              </div>

              <CardContent className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-6 z-30">
               
                <div className="relative max-w-2xl p-4 md:p-8 md:mr-40 lg:mr-80">
      
                  <motion.h1 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg text-center md:text-left"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white text-xs sm:text-sm md:text-base lg:text-lg mb-8 drop-shadow-md text-center md:text-left"
                  >
                    {slide.description}
                  </motion.p>
                
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 overflow-hidden py-2">
                   
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <Button className="p-5 md:p-7 px-8 md:px-10 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full">
                        Learn More
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <Button onPress={() => router.push("/classes")} className="p-5 md:p-7 px-8 md:px-10 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition-all">
                        Our Classes
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute md:relative flex flex-row md:flex-col gap-4 mt-8 md:mt-0 bottom-20 md:bottom-auto">
                  <CarouselPrevious className="cursor-pointer static h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-orange-500 translate-x-0 translate-y-0 text-black border-none" />
                  <CarouselNext className="cursor-pointer static h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-orange-500 translate-x-0 translate-y-0 text-black border-none" />
                </div>

                <div className="absolute -bottom-6 left-0 w-full z-20 pointer-events-none">
                  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-28 md:h-32 transform rotate-180">
                    <path fill="#F54A00" d="M0,80 C120,100 240,100 360,90 C480,80 600,60 720,70 C840,80 960,120 1080,110 C1200,100 1320,60 1440,70 L1440,0 L0,0 Z" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
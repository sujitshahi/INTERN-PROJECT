"use client";
import { motion } from "framer-motion"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const testimonials = [
  { id: 1, name: "Client Name", profession: "Profession", image: "/images/150.jpg" },
  { id: 2, name: "Client Name", profession: "Profession", image: "/images/150 (1).jpg" },
  { id: 3, name: "Client Name", profession: "Profession", image: "/images/150 (2).jpg" },
];

export default function page() {
  return (
   
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="relative w-full max-w-6xl mx-auto py-16 px-12"
    >
   
      <div className="text-center mb-12 text-white">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Our Clients Say!
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore 
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>

  
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 pl-4">
              <div className="bg-[#FFF5F3] rounded-xl overflow-hidden pt-10 px-0 pb-0 flex flex-col h-full">
                <p className="px-10 text-gray-600 leading-relaxed mb-8">
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo 
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet 
                  est kasd kasd erat eos.
                </p>

                <div className="bg-white mx-8 mb-8 p-4 flex items-center justify-between rounded-sm shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[#FFF5F3]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#2C4E56]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-400">{item.profession}</p>
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-quote-right fa-2xl text-orange-500"></i>
                  </div>
              
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-15 h-12 w-12 cursor-pointer bg-[#FF6B3D] text-white hover:bg-[#e85a2e] hover:text-white border-none hidden md:flex" />
        <CarouselNext className="absolute -right-15 h-12 w-12 cursor-pointer bg-[#FF6B3D] text-white hover:bg-[#e85a2e] hover:text-white border-none hidden md:flex" />
      </Carousel>
    </motion.section>
  );
}
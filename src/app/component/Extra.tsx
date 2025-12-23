'use client';
import { Button } from "@heroui/react";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 min-h-screen">
      
      
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#103741] leading-tight tracking-tight" 
            style={{ fontFamily: 'var(--font-fredoka), cursive' }}>
          Learn More About Our Work And Our Cultural Activities
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
          amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo magna dolore erat amet
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
          est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
          clita sit at.
        </p>

        <div className="flex flex-wrap items-center gap-8 pt-4">
          <Button className="bg-[#FE5D37] text-white px-10 py-7 rounded-full text-lg font-bold shadow-lg hover:bg-[#e44d2b] transition-colors">
            Read More
          </Button>

          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                alt="Jhon Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#FE5D37] font-bold text-xl leading-none">Jhon Doe</p>
              <p className="text-gray-500 text-sm">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>




      <div className="relative w-full max-w-125 h-80 sm:h-105 md:h-130 flex items-center justify-center mx-auto">

        
        <div className="absolute 
          w-48 h-48 
          sm:w-56 sm:h-56 
          md:w-80 md:h-80 
          rounded-full border-8 md:border-12 border-[#FFF5F3] 
          overflow-hidden z-10 hover:border-orange-500 duration-300">
          <img 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400" 
            alt="Children reading" 
            className="w-full h-full object-cover"
          />
        </div>

      
        <div className="absolute 
          bottom-2 left-2 
          sm:bottom-6 sm:left-6 
          md:bottom-10 md:left-0 
          w-32 h-32 
          sm:w-40 sm:h-40 
          md:w-56 md:h-56 
          rounded-full border-8 md:border-12 border-[#FFF5F3] 
          overflow-hidden z-20 hover:border-orange-500 duration-300">
          <img 
            src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=300" 
            alt="Child playing" 
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="absolute 
          top-4 right-2 
          sm:top-16 sm:right-6 
          md:top-60 md:right-0 
          w-32 h-32 
          sm:w-40 sm:h-40 
          md:w-56 md:h-56 
          rounded-full border-8 md:border-12 border-[#FFF5F3] 
          overflow-hidden z-20 hover:border-orange-500 duration-300">
          <img 
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=300" 
            alt="Child with camera" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>


   

    </section>
  );
}
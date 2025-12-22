'use client';
import { Button } from "@heroui/react";

export default function Extra() {
  return (
    <div className="mt-10 sm:p-8 h-100 w-screen flex flex-col lg:flex-row gap-10">

        {/* 1st section */}
        <div className="h-90 w-125 space-y-5 sm:max-w-3xl max-w-full">
            <h1 className="font-bold text-4xl sm:text-3xl leading-tight">
              Learn More About Our Work And Our Cultural Activities
            </h1>

            <p className="text-base sm:text-sm leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <p className="text-base sm:text-sm leading-relaxed">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.
            </p>

            <div className="flex justify-between flex-col sm:flex-row gap-6 sm:gap-0">
              <div className="mb-5">
                <Button className="w-50 sm:w-full font-bold border-2 rounded-3xl bg-orange-500 text-white p-7">
                  Read More
                </Button>
              </div>

              <div className="flex gap-10 items-center">
                <div className="border-2 border-black rounded-full h-15 w-15 sm:h-12 sm:w-12 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="ceo" 
                    className="object-cover w-full h-full"
                  />
                </div>
                        
                <div>
                  <p className="text-orange-500 font-bold">
                    Jhon doe
                  </p>
                  <p className="text-sm sm:text-base">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
        </div>  

        {/* 2nd section */}
        {/* <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          <div className="border-15 border-black h-40 w-40 sm:h-50 sm:w-50 rounded-full hover:border-orange-500 duration-300"></div>
          <div className="border-15 border-black h-60 w-60 sm:h-75 sm:w-75 rounded-full hover:border-orange-500 duration-300"></div>
          <div className="border-15 border-black h-40 w-40 sm:h-50 sm:w-50 rounded-full hover:border-orange-500 duration-300"></div>
        </div> */}

    </div>
  )
}


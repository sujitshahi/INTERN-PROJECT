import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePage() {
  return (
    <Carousel className="w-screen h-screen">
      <CarouselContent>
        <div className="absolute top-0 left-0 w-full z-20">
                  <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-full h-20 sm:h-25 md:h-30"
                  >
                    <path
                      fill="#F54A00"
                      d="
                        M0,80
                        C120,100 240,100 360,90
                        C480,80 600,60 720,70
                        C840,80 960,120 1080,110
                        C1200,100 1320,60 1440,70
                        L1440,0
                        L0,0
                        Z
                      "
                    />
                  </svg>
                </div>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className="w-screen h-screen">
            
            {/* FULL SCREEN CARD */}
            <Card className="relative w-screen h-screen overflow-hidden border-none rounded-none">
              <CardContent className="relative w-full h-full flex items-center justify-center p-4 md:p-6">
                
                {/* Content */}
                <div className="relative z-10 text-center w-full max-w-4xl mx-auto p-4 md:p-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                    Welcome to Slide {index + 1}
                  </h1>

                  <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
                    This is a full-screen responsive carousel slide
                  </p>

                  <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-20">
                  <CarouselPrevious className="static h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white/80 hover:bg-orange-500" />
                  <CarouselNext className="static h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white/80 hover:bg-orange-500" />
                </div>

                {/* 🌥️ CLOUDY BOTTOM EFFECT */}
                <div className="absolute bottom-0 left-0 w-full z-20">
                  <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-full h-20 sm:h-25 md:h-30 transform rotate-180"
                  >
                    <path
                      fill="#F54A00"
                      d="
                        M0,80
                        C120,100 240,100 360,90
                        C480,80 600,60 720,70
                        C840,80 960,120 1080,110
                        C1200,100 1320,60 1440,70
                        L1440,0
                        L0,0
                        Z
                      "
                    />
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

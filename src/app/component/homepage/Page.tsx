import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  const slides = [
    {
      title: "Adventure Awaits",
      description: "Explore the great outdoors with our new collection.",
      image: "https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?auto=format&fit=crop&q=80&w=1920", 
    },
    {
      title: "Urban Living",
      description: "Discover the heartbeat of the city architecture.",
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

              <CardContent className="relative w-full h-full flex items-center justify-center p-4 md:p-6 z-30">
                <div className="relative z-10 text-center w-full max-w-4xl mx-auto p-4 md:p-8">
      
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-6 rounded-full transition-all">
                    Learn More
                  </button>
                </div>

               
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
                  <CarouselPrevious className="cursor-pointer static h-10 w-10 bg-white/90 hover:bg-orange-500 translate-x-0 translate-y-0" />
                  <CarouselNext className="cursor-pointer static h-10 w-10 bg-white/90 hover:bg-orange-500 translate-x-0 translate-y-0" />
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





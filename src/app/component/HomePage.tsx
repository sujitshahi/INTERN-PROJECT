
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function HomePage() {
//   return (

//     <Carousel className="w-full mx-auto p-">
//   <CarouselContent>
//     {Array.from({ length: 2 }).map((_, index) => (
//       <CarouselItem key={index}>
//         <Card className="relative">
//           <CardContent className="h-120 flex items-center justify-center p-6">
            
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
//               <CarouselPrevious className="static h-10 w-10 r-20 hover:bg-orange-500" />
//               <CarouselNext className="static h-10 w-10 hover:bg-orange-500" />
//             </div>

//           </CardContent>
//         </Card>
//       </CarouselItem>
//     ))}
//   </CarouselContent>
// </Carousel>
    
//   )
// }



// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function HomePage() {
//   return (
//     <Carousel className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
//       <CarouselContent>
//         {Array.from({ length: 2 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <Card className="relative overflow-hidden">
//               <CardContent className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center p-4 md:p-6">
//                 {/* Content Area - Responsive */}
//                 <div className="relative z-10 text-center w-full max-w-4xl mx-auto p-4 md:p-8">
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
//                     Welcome to Slide {index + 1}
//                   </h1>
//                   <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
//                     This is a responsive carousel slide with proper sizing for all devices
//                   </p>
//                   <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105">
//                     Learn More
//                   </button>
//                 </div>

//                 {/* Navigation Buttons - Responsive Positioning & Size */}
//                 <div className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-20">
//                   <CarouselPrevious className="static h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white/80 hover:bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300" />
//                   <CarouselNext className="static h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white/80 hover:bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300" />
//                 </div>
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
      
//       {/* Optional: Dots Indicators for Mobile */}
//       <div className="flex justify-center gap-2 mt-4 md:mt-6">
//         {Array.from({ length: 2 }).map((_, index) => (
//           <div 
//             key={index}
//             className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-orange-500 cursor-pointer transition-colors"
//           />
//         ))}
//       </div>
//     </Carousel>
//   )
// }



import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePage() {
  const slides = [
    {
      title: "First Slide",
      description: "Description for the first slide",
      buttonText: "Get Started"
    
      // bgColor: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      title: "Second Slide", 
      description: "Description for the second slide",
      buttonText: "Learn More"
      // bgColor: "bg-gradient-to-r from-orange-500 to-red-600"
    }
  ]

  return (
    <div className=" px-4 sm:px-6 lg:px-8 xl:px-0">
      <Carousel className=" mx-auto">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="relative overflow-hidden">
                <CardContent className="min-h-62.5 sm:min-h-87.5 md:min-h-112.5 lg:min-h-137.5 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                  {/* Background */}
                  {/* <div className={`absolute inset-0 ${slide.bgColor} opacity-90`} /> */}
                  
                  {/* Foreground Content */}
                  <div className="relative z-10 text-center w-full max-w-3xl mx-auto space-y-4 sm:space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                      {slide.description}
                    </p>
                    <div className="pt-2 sm:pt-4">
                      <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>

                  {/* Navigation Buttons - Hidden on Mobile, Visible on Tablet+ */}
                  <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 sm:gap-3 z-20">
                    <CarouselPrevious className="static h-8 w-8 sm:h-10 sm:w-10 bg-white/90 hover:bg-white hover:scale-110 transition-all" />
                    <CarouselNext className="static h-8 w-8 sm:h-10 sm:w-10 bg-white/90 hover:bg-white hover:scale-110 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
    
      </Carousel>

      
    </div>
  )
}
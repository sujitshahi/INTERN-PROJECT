
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">

        <div className="max-w-2xl mx-auto text-center mt-25">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1D4354] mb-4">
            School Classes
            </h1>
            <p className="text-gray-500 leading-relaxed">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
            </p>
        </div>
      
        <div className=" pt-15 flex flex-wrap justify-center gap-8 max-w-7xl">
    
            {/* Card 1 */}
            <div className="relative pt-24 w-87.5 group-hover:scale-105 transition-all duration-300 hover:-translate-y-4">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <img src="https://themewagon.github.io/kider/img/classes-1.jpg" alt="Art" className="w-full h-full object-cover" />
                </div>
            </div>
            
                <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Art & Drawing</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
                            <div>
                                <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                                <p className="text-gray-400 text-xs">Teacher</p>
                            </div>
                        </div>
                        <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className=" pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative pt-24 w-87.5 group transition-all duration-300 hover:-translate-y-4">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                        <img src="https://themewagon.github.io/kider/img/classes-2.jpg" alt="Color" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Color Management</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
                            <div>
                                <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                                <p className="text-gray-400 text-xs">Teacher</p>
                            </div>
                        </div>
                        <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="relative pt-24 w-87.5 group transition-all duration-300 hover:-translate-y-4">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                        <img src="https://themewagon.github.io/kider/img/classes-3.jpg" alt="Dance" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Athletic & Dance</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
                            <div>
                                <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                                <p className="text-gray-400 text-xs">Teacher</p>
                            </div>
                        </div>
                        <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="relative pt-24 w-87.5 group transition-all duration-300 hover:-translate-y-4">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                        <img src="https://themewagon.github.io/kider/img/classes-4.jpg" alt="Dance" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Language & Speaking</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
                            <div>
                                <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                                <p className="text-gray-400 text-xs">Teacher</p>
                            </div>
                        </div>
                        <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
                    </div>
                </div>
            </div>

            {/* Card 5 */}
            <div className="relative pt-24 w-87.5 group transition-all duration-300 hover:-translate-y-4">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                        <img src="https://themewagon.github.io/kider/img/classes-5.jpg" alt="Dance" className="w-full h-full object-cover" />
                    </div>
                </div>
                
                <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Religion & History</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
                            <div>
                                <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                                <p className="text-gray-400 text-xs">Teacher</p>
                            </div>
                        </div>
                        <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
                    </div>
                </div>
            </div>

            {/* Card 6 */}
            <div className="relative pt-24 w-87.5 group transition-all duration-300 hover:-translate-y-4">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                        <img src="https://themewagon.github.io/kider/img/classes-6.jpg" alt="Dance" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">General Knowledge</h2>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full bg-gray-300" />
                            <div>
                                <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                                <p className="text-gray-400 text-xs">Teacher</p>
                            </div>
                        </div>
                        <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                        <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
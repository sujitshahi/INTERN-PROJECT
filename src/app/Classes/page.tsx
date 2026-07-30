"use client";

import { m, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import Image from "next/image";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </m.div>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </m.div>
  );
}

export default function Classes() {
  return (
    <div className="min-h-screen p-10 text-white">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto text-center mt-25">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            School Classes
          </h1>
          <p className="leading-relaxed">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
      </AnimatedSection>
      
      <div className="pt-15 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        <AnimatedCard delay={0.1}>
          <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <Image
                  src="/images/classes-1.jpg"
                  alt="Art" 
                  width={300} height={300} 
                  className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Art & Drawing</h2>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image src="/images/123.avif" alt="John Doe" width={100} height={100} className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
                  <div>
                    <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
                    <p className="text-gray-400 text-xs">Teacher</p>
                  </div>
                </div>
                <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
                <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
                <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <Image
                  src="/images/classes-2.jpg"
                  alt="Color"
                  width={300} height={300}
                  className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Color Management</h2>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/123.avif"
                    alt="John Doe"
                    width={100} height={100} 
                    className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
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
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <Image
                  src="/images/classes-3.jpg"
                  alt="athletic"
                  width={300} height={300}
                  className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Athletic & Dance</h2>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/123.avif"
                    alt="John Doe"
                    width={100} height={100}
                    className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
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
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <Image
                  src="/images/classes-4.jpg"
                  alt="language"
                  width={300} height={300}
                  className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Language & Speaking</h2>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/123.avif"
                    alt="John Doe"
                    width={100} height={100}
                    className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
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
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <Image
                  src="/images/classes-5.jpg"
                  alt="religion"
                  width={300} height={300}
                  className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Religion & History</h2>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/123.avif"
                    alt="John Doe"
                    width={100} height={100}
                    className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
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
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
                <Image
                  src="/images/classes-3.jpg"
                  alt="general knowledge"
                  width={300} height={300}
                  className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">General Knowledge</h2>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/123.avif"
                    alt="John Doe"
                    width={100} height={100}
                    className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
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
        </AnimatedCard>
      </div>
    </div>
  );
}
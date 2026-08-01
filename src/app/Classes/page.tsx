// "use client";

// import { m, useInView } from "framer-motion";
// import { useRef, ReactNode } from "react";
// import Image from "next/image";

// interface AnimatedSectionProps {
//   children: ReactNode;
//   delay?: number;
// }

// function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "0px" });

//   return (
//     <m.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{
//         duration: 0.6,
//         delay: delay,
//         ease: [0.25, 0.1, 0.25, 1],
//       }}
//     >
//       {children}
//     </m.div>
//   );
// }

// interface AnimatedCardProps {
//   children: ReactNode;
//   delay?: number;
// }

// function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "0px" });

//   return (
//     <m.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.9, y: 30 }}
//       animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
//       transition={{
//         duration: 0.5,
//         delay: delay,
//         ease: "easeOut",
//       }}
//       whileHover={{ scale: 1.02 }}
//     >
//       {children}
//     </m.div>
//   );
// }

// export default function Classes() {
//   return (
//     <div className="min-h-screen p-10 text-white">
//       <AnimatedSection>
//         <div className="max-w-2xl mx-auto text-center mt-25">
//           <h1 className="text-2xl md:text-3xl font-bold mb-4">
//             School Classes
//           </h1>
//           <p className="leading-relaxed">
//             Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
//             vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
//           </p>
//         </div>
//       </AnimatedSection>
      
//       <div className="pt-15 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
//         <AnimatedCard delay={0.1}>
//           <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
//               <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/classes-1.jpg"
//                   alt="Art" 
//                   width={300} height={300} 
//                   className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Art & Drawing</h2>
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <Image src="/images/123.avif" alt="John Doe" width={100} height={100} className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
//                   <div>
//                     <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
//                     <p className="text-gray-400 text-xs">Teacher</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
//               </div>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
//               </div>
//             </div>
//           </div>
//         </AnimatedCard>

//         <AnimatedCard delay={0.2}>
//           <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
//               <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/classes-2.jpg"
//                   alt="Color"
//                   width={300} height={300}
//                   className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Color Management</h2>
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/images/123.avif"
//                     alt="John Doe"
//                     width={100} height={100} 
//                     className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
//                   <div>
//                     <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
//                     <p className="text-gray-400 text-xs">Teacher</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
//               </div>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
//               </div>
//             </div>
//           </div>
//         </AnimatedCard>

//         <AnimatedCard delay={0.3}>
//           <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
//               <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/classes-3.jpg"
//                   alt="athletic"
//                   width={300} height={300}
//                   className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Athletic & Dance</h2>
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/images/123.avif"
//                     alt="John Doe"
//                     width={100} height={100}
//                     className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
//                   <div>
//                     <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
//                     <p className="text-gray-400 text-xs">Teacher</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
//               </div>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
//               </div>
//             </div>
//           </div>
//         </AnimatedCard>

//         <AnimatedCard delay={0.4}>
//           <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
//               <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/classes-4.jpg"
//                   alt="language"
//                   width={300} height={300}
//                   className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Language & Speaking</h2>
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/images/123.avif"
//                     alt="John Doe"
//                     width={100} height={100}
//                     className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
//                   <div>
//                     <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
//                     <p className="text-gray-400 text-xs">Teacher</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
//               </div>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
//               </div>
//             </div>
//           </div>
//         </AnimatedCard>

//         <AnimatedCard delay={0.5}>
//           <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
//               <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/classes-5.jpg"
//                   alt="religion"
//                   width={300} height={300}
//                   className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">Religion & History</h2>
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/images/123.avif"
//                     alt="John Doe"
//                     width={100} height={100}
//                     className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
//                   <div>
//                     <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
//                     <p className="text-gray-400 text-xs">Teacher</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
//               </div>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
//               </div>
//             </div>
//           </div>
//         </AnimatedCard>

//         <AnimatedCard delay={0.6}>
//           <div className="relative pt-24 w-87.5 group transition-colors duration-300 hover:-translate-y-4">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
//               <div className="w-48 h-48 rounded-full border-10 border-white overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/classes-3.jpg"
//                   alt="general knowledge"
//                   width={300} height={300}
//                   className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="bg-[#FFF8F6] rounded-4xl pt-28 pb-8 px-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-[#1D4354] text-center mb-6">General Knowledge</h2>
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/images/123.avif"
//                     alt="John Doe"
//                     width={100} height={100}
//                     className="w-10 h-10 rounded-3xl object-cover bg-gray-300" />
//                   <div>
//                     <p className="text-[#FF6B4A] font-bold text-sm">Jhon Doe</p>
//                     <p className="text-gray-400 text-xs">Teacher</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF6B4A] text-white px-4 py-1.5 rounded-full font-bold">$99</div>
//               </div>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="text-center pt-3 border-t-2 border-[#FF6B4A]"><p className="text-[#FF6B4A] font-bold text-sm">Age:</p><p className="text-gray-500 text-xs">3-5 Years</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#2D6A4F]"><p className="text-[#2D6A4F] font-bold text-sm">Time:</p><p className="text-gray-500 text-xs">9-10 AM</p></div>
//                 <div className="text-center pt-3 border-t-2 border-[#FFB800]"><p className="text-[#FFB800] font-bold text-sm">Capacity:</p><p className="text-gray-500 text-xs">30 Kids</p></div>
//               </div>
//             </div>
//           </div>
//         </AnimatedCard>
//       </div>
//     </div>
//   );
// }






"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Clock, Users, GraduationCap } from "lucide-react";

interface ClassItem {
  id: number;
  title: string;
  image: string;
  teacher: string;
  teacherRole: string;
  teacherAvatar: string;
  price: string;
  age: string;
  time: string;
  capacity: string;
  borderColor: string;
}

const classesList: ClassItem[] = [
  {
    id: 1,
    title: "Art & Drawing",
    image: "/images/classes-1.jpg",
    teacher: "John Doe",
    teacherRole: "Art Teacher",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-[#FE5D37] text-[#FE5D37]",
  },
  {
    id: 2,
    title: "Color Management",
    image: "/images/classes-2.jpg",
    teacher: "John Doe",
    teacherRole: "Design Teacher",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-emerald-500 text-emerald-600",
  },
  {
    id: 3,
    title: "Athletic & Dance",
    image: "/images/classes-3.jpg",
    teacher: "John Doe",
    teacherRole: "Fitness Coach",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-amber-500 text-amber-600",
  },
  {
    id: 4,
    title: "Language & Speaking",
    image: "/images/classes-4.jpg",
    teacher: "John Doe",
    teacherRole: "Language Spec.",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-purple-500 text-purple-600",
  },
  {
    id: 5,
    title: "Religion & History",
    image: "/images/classes-5.jpg",
    teacher: "John Doe",
    teacherRole: "History Teacher",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-pink-500 text-pink-600",
  },
  {
    id: 6,
    title: "General Knowledge",
    image: "/images/classes-3.jpg",
    teacher: "John Doe",
    teacherRole: "General Ed.",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-sky-500 text-sky-600",
  },
];

export default function Classes() {
  return (
    <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
            <span>Popular Programs</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            School <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Classes</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Discover our carefully designed curriculum where curiosity meets fun. Each class is structured to empower your child with creativity and social confidence.
          </p>
        </motion.div>

        {/* Classes Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-24 pt-24">
          {classesList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-6 pt-24 shadow-md border border-slate-100 flex flex-col justify-between group transition-all duration-300"
            >
              {/* Overlapping Top Circular Image */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
                <div className="w-36 h-36 rounded-full border-8 border-white shadow-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-center text-slate-800">
                  {item.title}
                </h3>

                {/* Teacher Info & Price */}
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                      <Image
                        src={item.teacherAvatar}
                        alt={item.teacher}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#FE5D37] font-extrabold text-xs sm:text-sm">
                        {item.teacher}
                      </p>
                      <p className="text-slate-400 text-xs font-medium">
                        {item.teacherRole}
                      </p>
                    </div>
                  </div>

                  <span className="bg-[#FE5D37] text-white px-3.5 py-1.5 rounded-full font-black text-sm shadow-xs">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Details Footer Grid */}
              <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-slate-100 text-center">
                <div className="border-t-2 border-[#FE5D37] pt-2">
                  <p className="text-[#FE5D37] font-extrabold text-xs flex items-center justify-center gap-1">
                    <GraduationCap className="w-3 h-3" /> Age
                  </p>
                  <p className="text-slate-500 text-xs font-semibold mt-0.5">{item.age}</p>
                </div>

                <div className="border-t-2 border-emerald-500 pt-2">
                  <p className="text-emerald-600 font-extrabold text-xs flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> Time
                  </p>
                  <p className="text-slate-500 text-xs font-semibold mt-0.5">{item.time}</p>
                </div>

                <div className="border-t-2 border-amber-500 pt-2">
                  <p className="text-amber-600 font-extrabold text-xs flex items-center justify-center gap-1">
                    <Users className="w-3 h-3" /> Capacity
                  </p>
                  <p className="text-slate-500 text-xs font-semibold mt-0.5">{item.capacity}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
// "use client";

// import { m} from "framer-motion";
// import Image from "next/image";

// export default function Popular_Teacher() {
//   const teachers = [
//     {
//       id: 1,
//       name: "Full Name",
//       designation: "Designation",
//       image: "/images/team-1.jpg",
//       delay: 0,
//       viewportAmount: 0.3,
//     },
//     {
//       id: 2,
//       name: "Full Name",
//       designation: "Designation",
//       image: "/images/team-2.jpg",
//       delay: 0.2,
//       viewportAmount: 0.4,
//     },
//     {
//       id: 3,
//       name: "Full Name",
//       designation: "Designation",
//       image: "/images/team-3.jpg",
//       delay: 0.4,
//       viewportAmount: 0.5,
//     },
//   ];

//   return (
//     <div className="min-h-screen py-20 px-4 mt-20 text-white">
//       <m.div
//         className="max-w-2xl mx-auto text-center mb-20"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.8, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Popular Teachers
//         </h1>
//         <p className="leading-relaxed text-sm md:text-base">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
//           vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
//         </p>
//       </m.div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center">
//         {teachers.map((teacher) => (
//           <m.div
//             key={teacher.id}
//             className="relative w-full max-w-[320px] cursor-pointer"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ y: -8, scale: 1.03 }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 25,
//               layout: { duration: 0.5 },
//               default: { duration: 1.8, ease: "easeOut", delay: teacher.delay },
//             }}
//             viewport={{ once: true, amount: teacher.viewportAmount }}
//           >
//             <div className="relative aspect-square rounded-full overflow-hidden bg-gray-100">
//               <Image
//                 src={teacher.image}
//                 alt={teacher.name}
//                 fill
//                 sizes="320px"
//                 className="object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-10 -right-4 w-56 h-56 rounded-full border-16 border-[#FFF8F6] bg-white flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 transition-colors duration-300">
//               <h3 className="text-xl font-bold text-[#1D4354]">{teacher.name}</h3>
//               <p className="text-gray-400 text-sm mb-3">{teacher.designation}</p>
//               <div className="flex gap-2">
//                 <div className="w-9 h-9 font-bold rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-xl">
//                   f
//                 </div>
//                 <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
//                   <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
//                 </div>
//                 <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
//                   <i className="fa-brands fa-instagram text-lg text-white hover:text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </m.div>
//         ))}
//       </div>
//     </div>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Facebook, Twitter, Instagram } from "lucide-react";

interface Teacher {
  id: number;
  name: string;
  designation: string;
  image: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Julia Richards",
    designation: "Art & Craft Teacher",
    image: "/images/team-1.jpg",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "David Miller",
    designation: "Music & Movement",
    image: "/images/team-2.jpg",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    designation: "Language & Reading",
    image: "/images/team-3.jpg",
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
];

export default function Popular_Teacher() {
  return (
    <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Grid Texture */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
            <span>Expert Educators</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Popular <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Teachers</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Meet our dedicated team of passionate educators who bring learning to life through creativity, patience, and encouraging guidance.
          </p>
        </motion.div>

        {/* Teachers Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 justify-items-center pb-10">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              className="relative w-full max-w-[320px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
            >
              {/* Main Image Avatar Circle */}
              <div className="h-150 rounded-full relative overflow-hidden border-4 border-white shadow-lg bg-slate-100">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Overlapping Info Circle */}
              <div className="absolute -bottom-12 -right-2 sm:-right-4 w-56 h-56 rounded-full border-[10px] border-[#FFFDF9] bg-white flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 hover:border-orange-100 group">
                
                <h3 className="text-lg font-black text-slate-800 group-hover:text-[#FE5D37] transition-colors">
                  {teacher.name}
                </h3>
                
                <p className="text-slate-400 text-xs font-semibold mt-0.5 mb-3">
                  {teacher.designation}
                </p>

                {/* Social Buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href={teacher.socials.facebook}
                    aria-label={`${teacher.name}'s Facebook`}
                    className="w-8 h-8 rounded-full bg-[#FE5D37] text-white flex items-center justify-center hover:bg-[#e45230] hover:scale-110 transition-all shadow-xs"
                  >
                    <Facebook className="w-4 h-4 fill-current" />
                  </a>

                  <a
                    href={teacher.socials.twitter}
                    aria-label={`${teacher.name}'s Twitter`}
                    className="w-8 h-8 rounded-full bg-[#FE5D37] text-white flex items-center justify-center hover:bg-[#e45230] hover:scale-110 transition-all shadow-xs"
                  >
                    <Twitter className="w-4 h-4 fill-current" />
                  </a>

                  <a
                    href={teacher.socials.instagram}
                    aria-label={`${teacher.name}'s Instagram`}
                    className="w-8 h-8 rounded-full bg-[#FE5D37] text-white flex items-center justify-center hover:bg-[#e45230] hover:scale-110 transition-all shadow-xs"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
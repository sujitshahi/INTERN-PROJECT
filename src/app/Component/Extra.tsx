// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Button } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { Music, Palette, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

// export default function Extra() {
//   const router = useRouter();

//   const culturalPills = [
//     { icon: Palette, label: "Creative Arts", color: "bg-pink-100 text-pink-700 border-pink-200" },
//     { icon: Music, label: "Music & Movement", color: "bg-purple-100 text-purple-700 border-purple-200" },
//     { icon: Sparkles, label: "Annual Festivals", color: "bg-amber-100 text-amber-700 border-amber-200" },
//     { icon: HeartHandshake, label: "Community Care", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
//   ];

//   return (
//     <section className="w-full  text-slate-900 py-16 lg:py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="lg:col-span-7 space-y-6"
//         >

//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300/60 text-amber-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
//             <Sparkles className="w-3.5 h-3.5 text-amber-600" />
//             <span>Our Life & Culture</span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
//             Where Learning Meets <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Joy & Culture</span>
//           </h2>

//           <p className="text-base text-slate-600 leading-relaxed max-w-xl">
//             We believe education happens beyond worksheets. From vibrant cultural celebrations and music circles to outdoor art workshops, our daily rhythm keeps young minds curious, creative, and confident.
//           </p>


//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
//             {culturalPills.map((pill, idx) => {
//               const Icon = pill.icon;
//               return (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.03 }}
//                   className={`flex items-center gap-3 p-3 rounded-2xl border ${pill.color} shadow-sm transition-transform`}
//                 >
//                   <div className="p-2 rounded-xl bg-white/80 shadow-xs">
//                     <Icon className="w-4 h-4" />
//                   </div>
//                   <span className="font-extrabold text-xs sm:text-sm">{pill.label}</span>
//                 </motion.div>
//               );
//             })}
//           </div>

//           <div className="pt-4 flex flex-wrap items-center gap-6">
//             <Button
//               onPress={() => router.push("/")}
//               className="bg-[#FE5D37] text-white px-8 py-6 rounded-2xl font-black text-base shadow-lg shadow-orange-500/20 hover:bg-[#e44d2b] transition-colors flex items-center gap-2 group"
//             >
//               Explore Programs
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>

//             <div className="flex items-center gap-3 bg-white p-2.5 pr-5 rounded-2xl border border-slate-200/80 shadow-xs">
//               <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200">
//                 <Image
//                   src="/images/123.avif"
//                   alt="John Doe"
//                   fill
//                   sizes="44px"
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs font-black text-slate-900">John Doe</p>
//                 <p className="text-[11px] font-medium text-slate-500">School Director</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="lg:col-span-5 relative min-h-115 sm:min-h-125 flex items-center justify-center"
//         >

//           <motion.div
//             whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
//             className="absolute top-0 right-2 sm:right-6 w-60 sm:w-68 bg-white p-3 pt-3 pb-8 rounded-xl shadow-xl border border-slate-200/60 -rotate-3 transition-colors duration-300 z-10"
//           >

//             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-200/60 backdrop-blur-xs rotate-2 shadow-xs border border-amber-300/40 z-20" />
            
//             <div className="relative w-full h-44 rounded-lg overflow-hidden border border-slate-100">
//               <Image
//                 src="/images/smile.avif"
//                 alt="Cultural Activity"
//                 fill
//                 sizes="280px"
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center font-extrabold text-xs text-slate-700 mt-3 font-mono uppercase tracking-wider">
//               ✦ Music & Storytime
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
//             className="absolute bottom-4 left-0 sm:left-4 w-56 sm:w-64 bg-white p-3 pt-3 pb-8 rounded-xl shadow-xl border border-slate-200/60 rotate-6 transition-colors duration-300 z-20"
//           >
//             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/60 backdrop-blur-xs -rotate-3 shadow-xs border border-pink-300/40 z-20" />
            
//             <div className="relative w-full h-40 rounded-lg overflow-hidden border border-slate-100">
//               <Image
//                 src="/images/playing.avif"
//                 alt="Outdoor Play"
//                 fill
//                 sizes="256px"
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-center font-extrabold text-xs text-slate-700 mt-3 font-mono uppercase tracking-wider">
//               ✦ Outdoor Play Day
//             </p>
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-0 right-4 sm:right-8 bg-amber-300 text-amber-950 p-4 rounded-2xl shadow-lg border border-amber-400 -rotate-6 z-30 max-w-42.5"
//           >
//             <p className="text-[11px] font-black leading-tight">
//               &quot;Learning through play, growing through culture.&quot;
//             </p>
//             <span className="text-[9px] font-bold opacity-75 mt-1 block">— Preschool Mindset</span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Music, Palette, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

export default function Extra() {
  const router = useRouter();

  const culturalPills = [
    { icon: Palette, label: "Creative Arts", color: "bg-pink-100 text-pink-700 border-pink-200" },
    { icon: Music, label: "Music & Movement", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { icon: Sparkles, label: "Annual Festivals", color: "bg-amber-100 text-amber-700 border-amber-200" },
    { icon: HeartHandshake, label: "Community Care", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  ];

  return (
    <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300/60 text-amber-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Our Life & Culture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Where Learning Meets <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Joy & Culture</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-xl">
            We believe education happens beyond worksheets. From vibrant cultural celebrations and music circles to outdoor art workshops, our daily rhythm keeps young minds curious, creative, and confident.
          </p>


          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
            {culturalPills.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-3 p-3 rounded-2xl border ${pill.color} shadow-sm transition-transform`}
                >
                  <div className="p-2 rounded-xl bg-white/80 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm">{pill.label}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <Button
              onPress={() => router.push("/")}
              className="bg-[#FE5D37] text-white px-8 py-6 rounded-2xl font-black text-base shadow-lg shadow-orange-500/20 hover:bg-[#e44d2b] transition-colors flex items-center gap-2 group"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-3 bg-white p-2.5 pr-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                  alt="John Doe - School Director"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900">John Doe</p>
                <p className="text-[11px] font-medium text-slate-500">School Director</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative min-h-115 sm:min-h-125 flex items-center justify-center"
        >

          <motion.div
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
            className="absolute top-0 right-2 sm:right-6 w-60 sm:w-68 bg-white p-3 pt-3 pb-8 rounded-xl shadow-xl border border-slate-200/60 -rotate-3 transition-colors duration-300 z-10"
          >

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-200/60 backdrop-blur-xs rotate-2 shadow-xs border border-amber-300/40 z-20" />
            
            <div className="relative w-full h-44 rounded-lg overflow-hidden border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
                alt="Music & Storytime"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <p className="text-center font-extrabold text-xs text-slate-700 mt-3 font-mono uppercase tracking-wider">
              ✦ Music & Storytime
            </p>
          </motion.div>

          <motion.div
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
            className="absolute bottom-4 left-0 sm:left-4 w-56 sm:w-64 bg-white p-3 pt-3 pb-8 rounded-xl shadow-xl border border-slate-200/60 rotate-6 transition-colors duration-300 z-20"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/60 backdrop-blur-xs -rotate-3 shadow-xs border border-pink-300/40 z-20" />
            
            <div className="relative w-full h-40 rounded-lg overflow-hidden border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1472162072142-d544e73eebfb?auto=format&fit=crop&q=80&w=800"
                alt="Outdoor Play Day"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
            <p className="text-center font-extrabold text-xs text-slate-700 mt-3 font-mono uppercase tracking-wider">
              ✦ Outdoor Play Day
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-4 sm:right-8 bg-amber-300 text-amber-950 p-4 rounded-2xl shadow-lg border border-amber-400 -rotate-6 z-30 max-w-42.5"
          >
            <p className="text-[11px] font-black leading-tight">
              &quot;Learning through play, growing through culture.&quot;
            </p>
            <span className="text-[9px] font-bold opacity-75 mt-1 block">— Preschool Mindset</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
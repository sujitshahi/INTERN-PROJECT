// "use client";

// import { m } from "framer-motion";
// import Image from "next/image";

// export default function Teacher() {
//   return (
//     <div className="mt-26 h-100 w-300 ml-10 flex max-lg:flex-col max-lg:items-center max-lg:w-full max-lg:ml-0 max-lg:mt-10 max-lg:px-4 mb-4">
      
//       <m.div
//         className="relative h-100 w-300 max-w-full max-lg:w-full max-lg:h-auto max-lg:max-w-md max-lg:aspect-4/3 overflow-hidden rounded-l-3xl max-lg:rounded-t-3xl max-lg:rounded-bl-none"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <Image
//           src="/images/call-to-action.jpg"
//           alt="Become a teacher"
//           fill
//           sizes="(max-width: 1024px) 100vw, 50vw"
//           className="object-cover"
//         />
//       </m.div>

//       <m.div
//         className="space-y-4 bg-[#FFF5F3] rounded-r-3xl max-lg:rounded-b-3xl max-lg:rounded-tr-none max-lg:w-full max-lg:max-w-md"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="flex flex-col h-full space-y-6 p-6 mt-20 max-lg:mt-6 max-lg:p-4 max-lg:space-y-4">
//           <h1 className="font-bold text-3xl max-lg:text-2xl max-sm:text-xl font-[lobster]">
//             Become A Teacher
//           </h1>
//           <p className="max-lg:text-sm">
//             Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
//           </p>
//           <button
//             type="button"
//             className="flex justify-center gap-2 items-center border-2 h-15 text-xl p-2 bg-orange-500 text-white rounded-lg cursor-pointer hover:bg-orange-400 transition-colors duration-300 max-lg:h-12 max-lg:text-lg"
//           >
//             Get Started Now 
//             <div>
//               <i className="fa-solid fa-arrow-right"></i>
//             </div>
//           </button>
//         </div>
//       </m.div>

//     </div>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Sparkles, HeartHandshake, GraduationCap, ArrowRight } from "lucide-react";

export default function Teacher() {
  const router = useRouter();

  const benefits = [
    {
      icon: HeartHandshake,
      label: "Supportive Culture",
      color: "bg-pink-100 text-pink-700 border-pink-200",
    },
    {
      icon: GraduationCap,
      label: "Growth & Training",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
  ];

  return (
    <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Subtle Grid Lines */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Scrapbook Polaroid Pinboard (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex justify-center items-center min-h-[400px]"
        >
          {/* Main Polaroid Frame */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative w-full max-w-md bg-white p-4 pb-10 rounded-2xl shadow-xl border border-slate-200/60 -rotate-2 transition-all duration-300"
          >
            {/* Masking Tape Visual Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/60 backdrop-blur-xs rotate-1 shadow-xs border border-amber-300/40 z-20" />

            <div className="relative w-full h-[300px] sm:h-[360px] rounded-xl overflow-hidden border border-slate-100">
              <Image
                src="/images/call-to-action.jpg"
                alt="Become a teacher"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="text-center font-extrabold text-xs text-slate-700 mt-4 font-mono uppercase tracking-wider">
              ✦ Join Our Educator Family
            </p>
          </motion.div>

          {/* Floating Sticky Note Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 sm:right-2 bg-amber-300 text-amber-950 p-4 rounded-2xl shadow-lg border border-amber-400 -rotate-6 z-30 max-w-[180px]"
          >
            <p className="text-[11px] font-black leading-tight">
              &quot;Inspire curiosity, nurture talent, and lead with heart.&quot;
            </p>
            <span className="text-[9px] font-bold opacity-75 mt-1 block">— Join Kider Team</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Story & Features (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
            <span>Join Our Faculty</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Become A <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Teacher</span>
          </h2>

          {/* Description */}
          <p className="text-base text-slate-600 leading-relaxed max-w-xl">
            We are always looking for enthusiastic, loving educators to join our growing preschool community. Shape young minds through interactive play, creative arts, and cultural discovery in an inspiring environment.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border ${item.color} shadow-sm transition-transform`}
                >
                  <div className="p-2 rounded-xl bg-white/80 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onPress={() => router.push("/")}
              className="bg-[#FE5D37] text-white px-8 py-6 rounded-2xl font-black text-base shadow-lg shadow-orange-500/20 hover:bg-[#e44d2b] transition-all flex items-center gap-2 group"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
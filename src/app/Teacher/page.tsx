"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Sparkles, HeartHandshake, GraduationCap, ArrowRight } from "lucide-react";

// Added stable IDs to fix the array index key warning
const benefits = [
  {
    id: "supportive-culture",
    icon: HeartHandshake,
    label: "Supportive Culture",
    color: "bg-pink-100 text-pink-700 border-pink-200",
  },
  {
    id: "growth-training",
    icon: GraduationCap,
    label: "Growth & Training",
    color: "bg-purple-100 text-purple-700 border-purple-200",
  },
];

export default function Teacher() {
  const router = useRouter();

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center items-center min-h-100px"
          >
            <m.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative w-full max-w-md bg-white p-4 pb-10 rounded-2xl shadow-xl border border-slate-200/60 -rotate-2 transition-colors duration-300"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/60 backdrop-blur-xs rotate-1 shadow-xs border border-amber-300/40 z-20" />

              <div className="relative w-full h-75 sm:h-90 rounded-xl overflow-hidden border border-slate-100">
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
            </m.div>

            <m.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 sm:right-2 bg-amber-300 text-amber-950 p-4 rounded-2xl shadow-lg border border-amber-400 -rotate-6 z-30 max-w-45"
            >
              <p className="text-[11px] font-black leading-tight">
                &quot;Inspire curiosity, nurture talent, and lead with heart.&quot;
              </p>
              <span className="text-[9px] font-bold opacity-75 mt-1 block">— Join Kider Team</span>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
              <span>Join Our Faculty</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Become A <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Teacher</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              We are always looking for enthusiastic, loving educators to join our growing preschool community. Shape young minds through interactive play, creative arts, and cultural discovery in an inspiring environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <m.div
                    key={item.id}
                    whileHover={{ scale: 1.03 }}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border ${item.color} shadow-sm transition-transform`}
                  >
                    <div className="p-2 rounded-xl bg-white/80 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-xs sm:text-sm">{item.label}</span>
                  </m.div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                onPress={() => router.push("/")}
                className="bg-[#FE5D37] text-white px-8 py-6 rounded-2xl font-black text-base shadow-lg shadow-orange-500/20 hover:bg-[#e44d2b] transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
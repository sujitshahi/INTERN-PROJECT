"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function School_Facilities() {
  return (
    <section className="w-full text-slate-900 py-16 lg:py-24 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 font-extrabold text-xs tracking-wider uppercase inline-block">
            Campus Highlights
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Designed for Little Explorers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="bg-white p-5 rounded-4xl border-2 border-dashed border-orange-200 shadow-md flex flex-col gap-4 relative transition-colors"
          >
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                alt="Tactile STEM Play"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-black bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full uppercase">
                Activity Hub
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Tactile STEM Play</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Sensory water channels, light tables, and safe building blocks.
              </p>
            </div>
            <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm rotate-12">
              ★ 10+ Hubs
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="bg-white p-5 rounded-4xl border-2 border-dashed border-emerald-200 shadow-md flex flex-col gap-4 relative transition-colors lg:mt-6"
          >
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-100">
              <Image
                src="https://plus.unsplash.com/premium_photo-1748853983673-6e48199324fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Gated Entry & CCTV"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full uppercase">
                Security
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Gated Entry & CCTV</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Biometric gates and continuous video monitoring across campus.
              </p>
            </div>
            <div className="absolute -top-3 -right-3 bg-emerald-400 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm -rotate-6">
              24/7 Safe
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="bg-white p-5 rounded-4xl border-2 border-dashed border-sky-200 shadow-md flex flex-col gap-4 relative transition-colors"
          >
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80"
                alt="GPS Shuttle Bus"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-black bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full uppercase">
                Transit
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">GPS Shuttle Bus</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Seatbelt-equipped buses with live app location updates for parents.
              </p>
            </div>
            <div className="absolute -top-3 -right-3 bg-sky-400 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm rotate-6">
              Live Track
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="bg-white p-5 rounded-4xl border-2 border-dashed border-rose-200 shadow-md flex flex-col gap-4 relative transition-colors lg:mt-6"
          >
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
                alt="Organic Kitchen"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-black bg-rose-100 text-rose-700 px-2.5 py-0.5 rounded-full uppercase">
                Nutrition
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Organic Kitchen</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Fresh, allergy-conscious meals cooked on-site daily.
              </p>
            </div>
            <div className="absolute -top-3 -right-3 bg-rose-400 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm -rotate-12">
              Fresh Daily
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
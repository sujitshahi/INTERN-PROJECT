"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function HomePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("curriculum");

  const pillars = {
    curriculum: {
      title: "Play-Based Learning",
      description: "Hands-on discovery through art, music, science, and guided free play.",
      stat: "10+ Activity Hubs",
    },
    safety: {
      title: "Gold Standard Safety",
      description: "CCTV monitored spaces, secure access doors, and certified first-aid staff.",
      stat: "24/7 Security",
    },
    growth: {
      title: "Holistic Development",
      description: "Focusing on emotional intelligence, social skills, and creative confidence.",
      stat: "Small Groups",
    },
  };

  const activePillar = pillars[activeTab as keyof typeof pillars];
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] bg-[#FAF8F5] text-slate-900 flex items-center py-12 lg:py-16 overflow-hidden">
      
      <div className="absolute top-12 left-10 w-24 h-24 rounded-full border-4 border-orange-200/60" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 font-extrabold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Admissions Open • 2026 Season
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Nurturing <span className="text-orange-500">Curiosity</span>, One Little Step at a Time.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            A warm, modern kindergarten environment designed to help young minds discover their talents, build lifelong friendships, and fall in love with learning.
          </p>

          <div className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 my-2">
            <div className="flex gap-2 border-b border-slate-100 pb-2 mb-3 overflow-x-auto">
              {(Object.keys(pillars) as Array<keyof typeof pillars>).map((key) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === key
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{activePillar.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{activePillar.description}</p>
                </div>
                <span className="text-[11px] font-extrabold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {activePillar.stat}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              onPress={() => router.push("/Classes")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 py-6 text-base shadow-lg shadow-orange-500/20 transition-transform hover:scale-105"
            >
              Explore Our Classes
            </Button>
            <Button
              onPress={() => router.push("/About_Us")}
              variant="light"
              className="text-slate-700 hover:text-orange-600 font-bold rounded-full px-6 py-6 text-base"
            >
              Learn More →
            </Button>
          </div>

        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center py-6">
          <div className="relative w-full max-w-sm aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white z-10">
            <Image
              src="/images/photo.avif"
              alt="Happy children learning together"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-xs font-semibold text-orange-300 uppercase tracking-widest">Early Years</p>
              <p className="text-base font-bold">Interactive Learning Spaces</p>
            </div>
          </div>

          <div className="absolute -bottom-2 right-2 sm:right-6 w-44 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hidden sm:block">
            <Image
              src="/images/kid.jpg"
              alt="Child engaged in creative activity"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-8 -left-2 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">100% Parent Rating</p>
              <p className="text-[11px] text-slate-500">Based on 200+ Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
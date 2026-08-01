"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { 
  Compass, 
  Home, 
  Search, 
  Sparkles, 
  ArrowLeft, 
  PhoneCall, 
  Info 
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", path: "/", icon: Home },
  { label: "About Us", path: "/About_Us", icon: Info },
  { label: "Contact Us", path: "/Contact_Us", icon: PhoneCall },
];

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-[80vh] w-full flex items-center justify-center px-4 py-16 relative overflow-hidden font-sans bg-[#FFFDF9]">
        <m.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-8 sm:left-20 w-24 h-24 rounded-full bg-amber-200/50 blur-xl pointer-events-none"
        />
        <m.div 
          animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 right-8 sm:right-24 w-32 h-32 rounded-full bg-orange-200/50 blur-xl pointer-events-none"
        />

        <div className="max-w-2xl w-full bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-100 relative z-10 text-center flex flex-col items-center">
          <m.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300/60 text-amber-900 text-xs font-black uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Lost in the Playground?</span>
          </m.div>

          <m.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 sm:gap-4 my-2"
          >
            <span className="text-7xl sm:text-9xl font-black text-[#103741] tracking-tight">4</span>
            <m.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#FE5D37]/10 border-4 border-dashed border-[#FE5D37] flex items-center justify-center text-[#FE5D37]"
            >
              <Compass className="w-10 h-10 sm:w-14 sm:h-14" />
            </m.div>
            
            <span className="text-7xl sm:text-9xl font-black text-[#103741] tracking-tight">4</span>
          </m.div>

          <m.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 max-w-lg mx-auto"
          >
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#103741]">
              Oops! Page Got Lost
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The page you are looking for might have been moved, renamed, or took an unexpected field trip!
            </p>
          </m.div>

          <m.form 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSearch}
            className="w-full max-w-md mt-6 relative flex items-center"
          >
            <label htmlFor="search-playground" className="sr-only">
              Search the playground
            </label>
            <input
              id="search-playground"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for pages, programs..."
              aria-label="Search the playground"
              className="w-full pl-5 pr-12 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-sm font-medium outline-none focus:ring-2 focus:ring-[#FE5D37]/50 focus:bg-white transition-colors"
            />
            <button
              aria-label="Search the playground"
              type="submit"
              className="absolute right-2 p-2 rounded-xl bg-[#103741] text-white hover:bg-[#FE5D37] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </m.form>

          <m.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full"
          >
            <Button
              onPress={() => router.push("/")}
              className="bg-[#FE5D37] hover:bg-[#e45230] text-white font-extrabold px-8 py-6 rounded-2xl shadow-lg shadow-orange-500/20 transition-colors hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer text-base"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Take Me Home</span>
            </Button>
          </m.div>

          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-slate-100 w-full flex flex-col items-center gap-3"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Or visit one of these:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => router.push(link.path)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-[#103741] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

export default function PageHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const currentPage =
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/_/g, " ")
      ?.replace(/-/g, " ") || "";

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full h-72 sm:h-80 md:h-96 flex flex-col justify-center px-6 sm:px-12 md:px-20 overflow-hidden bg-slate-900 font-sans">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?auto=format&fit=crop&q=80&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/35" />

        <svg
          className="absolute top-0 left-0 w-full h-8 sm:h-12 pointer-events-none z-10"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C120,64 240,0 360,16 480,32 600,64 720,48 840,32 960,0 1080,16 1200,32 1320,64 1440,32 L1440,0 L0,0 Z"
            className="fill-white"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-full h-8 sm:h-12 pointer-events-none z-10"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,16 C120,0 240,64 360,48 480,32 600,0 720,16 840,32 960,64 1080,48 1200,32 1320,0 1440,16 L1440,60 L0,60 Z"
            className="fill-[#FFFDF9]"
          />
        </svg>

        <m.div
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-20 max-w-7xl mx-auto w-full text-center sm:text-left space-y-4"
        >
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-tight capitalize drop-shadow-md">
            {currentPage}
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-sm sm:text-base font-semibold text-white shadow-lg"
          >
            <Link
              href="/"
              className="text-[#FE5D37] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <ChevronRight className="w-4 h-4 text-white/50" />

            <span className="text-slate-300">Pages</span>

            <ChevronRight className="w-4 h-4 text-white/50" />

            <span className="text-[#FE5D37] capitalize font-bold">
              {currentPage}
            </span>
          </nav>
        </m.div>
      </div>
    </LazyMotion>
  );
}
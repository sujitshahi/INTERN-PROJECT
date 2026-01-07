// 'use client'
// import { usePathname } from "next/navigation";

// export default function PageHeader({ title }: { title: string }) {
//   const pathname = usePathname();

//   // ✅ Do not show on landing page
//   if (pathname === "/") return null;

//   const currentPage =
//     pathname.split("/").filter(Boolean).pop()?.replace("-", " ");

//   return (
//     <div className="relative w-full h-[320px] bg-[#1a1a1a] flex flex-col justify-center px-6 sm:px-20 overflow-hidden">
      
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?auto=format&fit=crop&q=80&w=1920')",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto w-full">
//         <h1 className="text-white text-6xl md:text-7xl font-bold mb-4 font-serif italic">
//           {currentPage}
//         </h1>

//         <nav className="flex items-center space-x-2 text-lg font-medium">
//           <a href="/" className="text-[#fe5d37]">Home</a>
//           <span className="text-white">/</span>
//           <span className="text-[#fe5d37]">Pages</span>
//           <span className="text-white">/</span>
//           <span className="text-white capitalize">
//             {currentPage}
//           </span>
//         </nav>
//       </div>
//     </div>
//   );
// }






'use client'
import { usePathname } from "next/navigation";

export default function PageHeader({ title }: { title: string }) {
  const pathname = usePathname();

  // Do not show on landing page
  if (pathname === "/") return null;

  const currentPage =
    pathname.split("/").filter(Boolean).pop()?.replace("-", " ");

  return (
    <div className="relative w-full h-80 flex flex-col justify-center px-6 sm:px-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?auto=format&fit=crop&q=80&w=1920')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TOP SVG */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C120,64 240,0 360,16 480,32 600,64 720,48 840,32 960,0 1080,16 1200,32 1320,64 1440,32 L1440,0 L0,0 Z"
          fill="#F54A00"
        />
      </svg>

      {/* BOTTOM SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,16 C120,0 240,64 360,48 480,32 600,0 720,16 840,32 960,64 1080,48 1200,32 1320,0 1440,16 L1440,60 L0,60 Z"
          fill="#F54A00"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="text-white text-6xl md:text-7xl font-bold mb-4 font-serif italic uppercase">
          {currentPage}
        </h1>

        <nav className="flex items-center space-x-2 text-lg font-medium">
          <a href="/" className="text-[#fe5d37]">Home</a>
          <span className="text-white">/</span>
          <span className="text-[#fe5d37]">Pages</span>
          <span className="text-white">/</span>
          <span className="text-white capitalize">
            {currentPage}
          </span>
        </nav>
      </div>
    </div>
  );
}


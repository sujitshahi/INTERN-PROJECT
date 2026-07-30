"use client";

import { m} from "framer-motion";
import Image from "next/image";

export default function Popular_Teacher() {
  const teachers = [
    {
      id: 1,
      name: "Full Name",
      designation: "Designation",
      image: "/images/team-1.jpg",
      delay: 0,
      viewportAmount: 0.3,
    },
    {
      id: 2,
      name: "Full Name",
      designation: "Designation",
      image: "/images/team-2.jpg",
      delay: 0.2,
      viewportAmount: 0.4,
    },
    {
      id: 3,
      name: "Full Name",
      designation: "Designation",
      image: "/images/team-3.jpg",
      delay: 0.4,
      viewportAmount: 0.5,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 mt-20 text-white">
      <m.div
        className="max-w-2xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Popular Teachers
        </h1>
        <p className="leading-relaxed text-sm md:text-base">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
          vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </m.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center">
        {teachers.map((teacher) => (
          <m.div
            key={teacher.id}
            className="relative w-full max-w-[320px] cursor-pointer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              layout: { duration: 0.5 },
              default: { duration: 1.8, ease: "easeOut", delay: teacher.delay },
            }}
            viewport={{ once: true, amount: teacher.viewportAmount }}
          >
            <div className="relative aspect-square rounded-full overflow-hidden bg-gray-100">
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -right-4 w-56 h-56 rounded-full border-16 border-[#FFF8F6] bg-white flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#1D4354]">{teacher.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{teacher.designation}</p>
              <div className="flex gap-2">
                <div className="w-9 h-9 font-bold rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-xl">
                  f
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
                  <i className="fa-brands fa-twitter text-lg text-white hover:text-white"></i>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-sm">
                  <i className="fa-brands fa-instagram text-lg text-white hover:text-white"></i>
                </div>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
}
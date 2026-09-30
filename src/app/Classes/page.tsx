"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { Sparkles, Clock, Users, GraduationCap } from "lucide-react";

interface ClassItem {
  id: number;
  title: string;
  image: string;
  teacher: string;
  teacherRole: string;
  teacherAvatar: string;
  price: string;
  age: string;
  time: string;
  capacity: string;
  borderColor: string;
}

const classesList: ClassItem[] = [
  {
    id: 1,
    title: "Art & Drawing",
    image: "/images/classes-1.jpg",
    teacher: "John Doe",
    teacherRole: "Art Teacher",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-[#FE5D37] text-[#FE5D37]",
  },
  {
    id: 2,
    title: "Color Management",
    image: "/images/classes-2.jpg",
    teacher: "John Doe",
    teacherRole: "Design Teacher",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-emerald-500 text-emerald-600",
  },
  {
    id: 3,
    title: "Athletic & Dance",
    image: "/images/classes-3.jpg",
    teacher: "John Doe",
    teacherRole: "Fitness Coach",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-amber-500 text-amber-600",
  },
  {
    id: 4,
    title: "Language & Speaking",
    image: "/images/classes-4.jpg",
    teacher: "John Doe",
    teacherRole: "Language Spec.",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-purple-500 text-purple-600",
  },
  {
    id: 5,
    title: "Religion & History",
    image: "/images/classes-5.jpg",
    teacher: "John Doe",
    teacherRole: "History Teacher",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-pink-500 text-pink-600",
  },
  {
    id: 6,
    title: "General Knowledge",
    image: "/images/classes-3.jpg",
    teacher: "John Doe",
    teacherRole: "General Ed.",
    teacherAvatar: "/images/123.avif",
    price: "$99",
    age: "3-5 Years",
    time: "9-10 AM",
    capacity: "30 Kids",
    borderColor: "border-sky-500 text-sky-600",
  },
];

export default function Classes() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
              <span>Popular Programs</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              School <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Classes</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Discover our carefully designed curriculum where curiosity meets fun. Each class is structured to empower your child with creativity and social confidence.
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-24 pt-24">
            {classesList.map((item, index) => (
              <m.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-3xl p-6 pt-24 shadow-md border border-slate-100 flex flex-col justify-between group transition-colors duration-300"
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-36 h-36 rounded-full border-8 border-white shadow-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-center text-slate-800">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                        <Image
                          src={item.teacherAvatar}
                          alt={item.teacher}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[#FE5D37] font-extrabold text-xs sm:text-sm">
                          {item.teacher}
                        </p>
                        <p className="text-slate-400 text-xs font-medium">
                          {item.teacherRole}
                        </p>
                      </div>
                    </div>

                    <span className="bg-[#FE5D37] text-white px-3.5 py-1.5 rounded-full font-black text-sm shadow-xs">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-slate-100 text-center">
                  <div className="border-t-2 border-[#FE5D37] pt-2">
                    <p className="text-[#FE5D37] font-extrabold text-xs flex items-center justify-center gap-1">
                      <GraduationCap className="w-3 h-3" /> Age
                    </p>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">{item.age}</p>
                  </div>

                  <div className="border-t-2 border-emerald-500 pt-2">
                    <p className="text-emerald-600 font-extrabold text-xs flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3" /> Time
                    </p>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">{item.time}</p>
                  </div>

                  <div className="border-t-2 border-amber-500 pt-2">
                    <p className="text-amber-600 font-extrabold text-xs flex items-center justify-center gap-1">
                      <Users className="w-3 h-3" /> Capacity
                    </p>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">{item.capacity}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
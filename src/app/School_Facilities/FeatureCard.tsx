"use client";

import {m, Variants } from "framer-motion";

export default function FeatureCard() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const features = [
    {
      id: "bus",
      title: "School Bus",
      icon: "fa-solid fa-bus",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bgColor: "bg-orange-50",
      hoverBg: "group-hover:bg-orange-400",
      textColor: "text-orange-500",
    },
    {
      id: "playground",
      title: "Playground",
      icon: "fa-solid fa-basketball",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bgColor: "bg-green-50",
      hoverBg: "group-hover:bg-green-400",
      textColor: "text-green-500",
    },
    {
      id: "canteen",
      title: "Healthy Canteen",
      icon: "fa-solid fa-house",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bgColor: "bg-yellow-50",
      hoverBg: "group-hover:bg-yellow-400",
      textColor: "text-yellow-500",
    },
    {
      id: "learning",
      title: "Positive Learning",
      icon: "fa-solid fa-chalkboard",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bgColor: "bg-blue-50",
      hoverBg: "group-hover:bg-blue-400",
      textColor: "text-blue-500",
    },
  ];

  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center"
        >
          {features.map((feature) => (
            <m.div
              key={feature.id}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div
                className={`w-24 h-24 rounded-full text-3xl ${feature.bgColor} ${feature.hoverBg} duration-300 flex items-center justify-center transition-colors`}
              >
                <i className={`${feature.icon} ${feature.textColor} group-hover:text-white`}></i>
              </div>
              <div
                className={`-mt-1 w-72 h-72 rounded-full ${feature.bgColor} ${feature.hoverBg} transition-colors duration-300 flex flex-col items-center justify-center px-6`}
              >
                <h3 className={`text-2xl font-bold ${feature.textColor} group-hover:text-white mb-4`}>
                  {feature.title}
                </h3>
                <p className="text-black group-hover:text-white leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </div>
  );
}
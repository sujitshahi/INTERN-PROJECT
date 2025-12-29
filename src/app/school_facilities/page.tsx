'use client'
import { motion } from "framer-motion"; // Add this
import FeatureCard from "./FeatureCard";

export default function Page() {
  return (
    <div className="mt-10 p-8 flex flex-col items-center justify-center">
      {/* Title animation */}
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-bold text-4xl"
      >
        School Facilities
      </motion.h1>

      {/* Paragraph animation */}
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl"
      >
        Explore our school's facilities and amenities.
      </motion.p>

      <FeatureCard />
    </div>
  )
}
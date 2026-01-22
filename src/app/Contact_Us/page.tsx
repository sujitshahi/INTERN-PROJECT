"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 bg-white text-center">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-[#1B3C35] mb-4">Get In Touch</h1>
        <p className="text-gray-500 leading-relaxed">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo. </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-location-dot text-orange-500 fa-2xl flex items-center"></i>
          </div>
          <p className="font-bold text-[#1B3C35]">123 Street, New York, USA</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-envelope-open text-orange-500 fa-2xl flex items-center"></i>
          </div>
          <p className="font-bold text-[#1B3C35]">info@example.com</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
            <i className="fa-solid fa-phone text-orange-500 fa-2xl flex items-center"></i>
          </div>
          <p className="font-bold text-[#1B3C35]">+012 345 6789</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-sm border border-gray-100"
      >
       
        <div className="bg-[#FFF8F6] p-8 md:p-12 text-left">
          <p className="text-gray-600 mb-8 leading-relaxed">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
            <Button className="text-orange-600 cursor-pointer hover:underline ml-1">
              Download Now.
            </Button>
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none resize-none bg-white"
            ></textarea>
       
            <Button
             className="w-full py-4 bg-[#FF5733] text-white font-semibold rounded-md hover:bg-[#e64a2e] transition-colors"
             >Send Message</Button>
          </form>
        </div>

        
        <div className="h-100 lg:h-auto min-h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1704010000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
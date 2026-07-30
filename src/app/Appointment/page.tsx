"use client";

import { m } from "framer-motion";
import Image from "next/image";

export default function Appointment() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row rounded-4xl overflow-hidden shadow-sm">
        <m.div
          className="flex-1 bg-[#FFF5F3] p-6 md:p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Make Appointment
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="guardianName"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Guardian Name
                </label>
                <input
                  id="guardianName"
                  type="text"
                  className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="guardianEmail"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Guardian Email
                </label>
                <input
                  id="guardianEmail"
                  type="email"
                  className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="childName"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Child Name
                </label>
                <input
                  id="childName"
                  type="text"
                  className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="childAge"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Child Age
                </label>
                <input
                  id="childAge"
                  type="text"
                  className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FE5D37] text-white font-bold py-4 rounded-xl cursor-pointer hover:bg-[#e45230] transition-colors duration-300 text-lg"
            >
              Submit
            </button>
          </form>
        </m.div>

        <m.div
          className="flex-1 relative min-h-100"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/appointment.jpg"
            alt="Smiling kid in preschool"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </m.div>
      </div>
    </div>
  );
}
// "use client";

// import { m } from "framer-motion";
// import Image from "next/image";

// export default function Appointment() {
//   return (
//     <div className="relative w-full max-w-6xl mx-auto my-12 px-4">
//       <div className="flex flex-col md:flex-row rounded-4xl overflow-hidden shadow-sm">
//         <m.div
//           className="flex-1 bg-[#FFF5F3] p-6 md:p-10"
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <h2 className="text-3xl font-bold mb-8 text-gray-800">
//             Make Appointment
//           </h2>

//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="guardianName"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Guardian Name
//                 </label>
//                 <input
//                   id="guardianName"
//                   type="text"
//                   className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="guardianEmail"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Guardian Email
//                 </label>
//                 <input
//                   id="guardianEmail"
//                   type="email"
//                   className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="childName"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Child Name
//                 </label>
//                 <input
//                   id="childName"
//                   type="text"
//                   className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="childAge"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Child Age
//                 </label>
//                 <input
//                   id="childAge"
//                   type="text"
//                   className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-semibold text-gray-700 mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 border border-transparent focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-colors duration-200"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#FE5D37] text-white font-bold py-4 rounded-xl cursor-pointer hover:bg-[#e45230] transition-colors duration-300 text-lg"
//             >
//               Submit
//             </button>
//           </form>
//         </m.div>

//         <m.div
//           className="flex-1 relative min-h-100"
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <Image
//             src="/images/appointment.jpg"
//             alt="Smiling kid in preschool"
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             className="object-cover"
//           />
//         </m.div>
//       </div>
//     </div>
//   );
// }






"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, User, Mail, Smile, Calendar, MessageSquare, Send } from "lucide-react";

export default function Appointment() {
  return (
    <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
            <span>Book A Visit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Make An <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Appointment</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Schedule a visit to explore our campus, meet our dedicated teachers, and see how we create an engaging learning environment for your child.
          </p>
        </motion.div>

        {/* Main Card Container */}
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          
          {/* Form Side */}
          <motion.div
            className="flex-1 bg-[#FFF5F3] p-8 lg:p-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Guardian Name */}
                <div>
                  <label
                    htmlFor="guardianName"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Guardian Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="guardianName"
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Guardian Email */}
                <div>
                  <label
                    htmlFor="guardianEmail"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Guardian Email
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="guardianEmail"
                      type="email"
                      placeholder="parent@example.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Child Name */}
                <div>
                  <label
                    htmlFor="childName"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Child Name
                  </label>
                  <div className="relative">
                    <Smile className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="childName"
                      type="text"
                      placeholder="Alex Doe"
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Child Age */}
                <div>
                  <label
                    htmlFor="childAge"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Child Age
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="childAge"
                      type="text"
                      placeholder="4 Years"
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your child's needs or any questions..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-all text-sm font-medium resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#FE5D37] text-white font-extrabold py-4 px-6 rounded-2xl cursor-pointer hover:bg-[#e45230] shadow-md shadow-[#FE5D37]/20 transition-all duration-300 text-base flex items-center justify-center gap-2"
              >
                <span>Submit Appointment</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="flex-1 relative min-h-[350px] lg:min-h-[500px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/appointment.jpg"
              alt="Smiling kid in preschool"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
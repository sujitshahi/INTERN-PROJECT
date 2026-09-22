"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { Sparkles, User, Mail, Smile, Calendar, MessageSquare, Send } from "lucide-react";
import { submitAppointment } from "@/app/actions/appointment";

export default function Appointment() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full text-slate-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
          <m.div
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
          </m.div>

          <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <m.div
              className="flex-1 bg-[#FFF5F3] p-8 lg:p-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <form action={submitAppointment} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        name="guardianName"
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>

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
                        name="guardianEmail"
                        type="email"
                        placeholder="parent@example.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        name="childName"
                        type="text"
                        placeholder="Alex Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>

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
                        name="childAge"
                        type="text"
                        placeholder="4 Years"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

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
                      name="message"
                      rows={4}
                      placeholder="Tell us about your child's needs or any questions..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 outline-none border border-slate-200/80 focus:border-[#FE5D37] focus:ring-4 focus:ring-[#FE5D37]/10 transition-colors text-sm font-medium resize-none"
                    />
                  </div>
                </div>

                <m.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-[#FE5D37] text-white font-extrabold py-4 px-6 rounded-2xl cursor-pointer hover:bg-[#e45230] shadow-md shadow-[#FE5D37]/20 transition-colors duration-300 text-base flex items-center justify-center gap-2"
                >
                  <span>Submit Appointment</span>
                  <Send className="w-4 h-4" />
                </m.button>
              </form>
            </m.div>

            <m.div
              className="flex-1 relative min-h-87.5 lg:min-h-125"
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
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
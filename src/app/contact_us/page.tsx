// "use client";

// import { useState } from "react";
// import { Button } from "@heroui/react";
// import { m, Variants } from "framer-motion";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name as keyof typeof errors]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     let valid = true;
//     const newErrors = { name: "", email: "", subject: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       valid = false;
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//       valid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message cannot be empty";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       console.log("Form Submitted Successfully:", formData);
//       alert("Message Sent successfully!");
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     }
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.5,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="py-16 px-4 text-center text-white">
//       <m.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto mb-12"
//       >
//         <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
//         <p className="leading-relaxed">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
//           lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
//           dolor duo.
//         </p>
//       </m.div>

//       <m.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
//       >
//         <m.div
//           variants={itemVariants}
//           className="flex flex-col items-center"
//         >
//           <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//             <i className="fa-solid fa-location-dot text-orange-500 fa-2xl flex items-center"></i>
//           </div>
//           <p className="font-bold">123 Street, New York, USA</p>
//         </m.div>

//         <m.div
//           variants={itemVariants}
//           className="flex flex-col items-center"
//         >
//           <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//             <i className="fa-solid fa-envelope-open text-orange-500 fa-2xl flex items-center"></i>
//           </div>
//           <p className="font-bold">info@example.com</p>
//         </m.div>

//         <m.div
//           variants={itemVariants}
//           className="flex flex-col items-center"
//         >
//           <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//             <i className="fa-solid fa-phone text-orange-500 fa-2xl flex items-center"></i>
//           </div>
//           <p className="font-bold">+012 345 6789</p>
//         </m.div>
//       </m.div>

//       <m.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-sm border border-gray-100"
//       >
//         <div className="bg-[#FFF8F6] p-8 md:p-12 text-left text-black">
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             The contact form is currently inactive. Get a functional and working
//             contact form with Ajax & PHP in a few minutes. Just copy and paste
//             the files, add a little code and you're done.
//             <Button className="text-orange-600 cursor-pointer hover:underline ml-1">
//               Download Now.
//             </Button>
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
//               <div>
//                 <label
//                   htmlFor="contact-name"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   id="contact-name"
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white ${
//                     errors.name ? "ring-2 ring-red-500" : ""
//                   }`}
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="contact-email"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   id="contact-email"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white ${
//                     errors.email ? "ring-2 ring-red-500" : ""
//                   }`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1 ml-1">
//                     {errors.email}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="contact-subject"
//                 className="block text-sm font-semibold text-gray-700 mb-1"
//               >
//                 Subject
//               </label>
//               <input
//                 id="contact-subject"
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className={`w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none bg-white ${
//                   errors.subject ? "ring-2 ring-red-500" : ""
//                 }`}
//               />
//               {errors.subject && (
//                 <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject}</p>
//               )}
//             </div>

//             <div>
//               <label
//                 htmlFor="contact-message"
//                 className="block text-sm font-semibold text-gray-700 mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="contact-message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={5}
//                 className={`w-full p-4 rounded-md border-none focus:ring-2 focus:ring-orange-500 outline-none resize-none bg-white ${
//                   errors.message ? "ring-2 ring-red-500" : ""
//                 }`}
//               />
//               {errors.message && (
//                 <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>
//               )}
//             </div>

//             <Button
//               type="submit"
//               className="w-full py-4 bg-[#FF5733] text-white font-semibold rounded-md hover:bg-[#e64a2e] transition-colors"
//             >
//               Send Message
//             </Button>
//           </form>
//         </div>

//         <div className="h-100 lg:h-auto min-h-100">
//   <iframe
//     title="Google Maps location of our store"
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1704010000000!5m2!1sen!2s"
//     width="100%"
//     height="100%"
//     style={{ border: 0 }}
//     allowFullScreen
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//     sandbox="allow-scripts allow-popups"
//   />
// </div>
//       </m.div>
//     </section>
//   );
// }







// "use client";

// import { useState } from "react";
// import { Button } from "@heroui/react";
// import { motion, Variants } from "framer-motion";
// import { MapPin, Mail, Phone, Clock, Sparkles, Send } from "lucide-react";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name as keyof typeof errors]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     let valid = true;
//     const newErrors = { name: "", email: "", subject: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       valid = false;
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//       valid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message cannot be empty";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       console.log("Form Submitted Successfully:", formData);
//       alert("Thank you! Your message has been sent successfully.");
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     }
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const contactDetails = [
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       value: "123 Main Street, New York, USA",
//       color: "bg-orange-100 text-[#FE5D37]",
//     },
//     {
//       icon: Mail,
//       title: "Email Us",
//       value: "info@kiderpreschool.com",
//       color: "bg-amber-100 text-amber-700",
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       value: "+1 (234) 567-890",
//       color: "bg-pink-100 text-pink-700",
//     },
//     {
//       icon: Clock,
//       title: "Working Hours",
//       value: "Mon - Fri: 8:00 AM - 4:00 PM",
//       color: "bg-purple-100 text-purple-700",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#FFFDF9] text-slate-900 py-16 lg:py-24 relative overflow-hidden font-sans">
      
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">
        
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto text-center space-y-4"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-xs">
//             <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
//             <span>Get In Touch</span>
//           </div>

//           <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
//             Have Questions? <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Contact Us</span>
//           </h1>

//           <p className="text-slate-600 text-base leading-relaxed">
//             We’d love to hear from you! Whether you want to schedule a campus tour or inquire about admissions, feel free to reach out.
//           </p>
//         </motion.div>

//         {/* Contact Info Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {contactDetails.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ y: -6 }}
//                 className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all"
//               >
//                 <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-4 shadow-xs`}>
//                   <Icon className="w-6 h-6" />
//                 </div>
//                 <h3 className="font-extrabold text-slate-900 text-base mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-600 text-sm font-medium">
//                   {item.value}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Main Content Grid: Form + Google Map */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
//         >
          
//           {/* Form Container (7 cols) */}
//           <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg shadow-slate-100 flex flex-col justify-between">
//             <div>
//               <h2 className="text-2xl font-black text-slate-900 mb-2">
//                 Send Us A Message
//               </h2>
//               <p className="text-slate-600 text-sm mb-8">
//                 Fill out the form below and our team will respond within 24 hours.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
//                   {/* Name Input */}
//                   <div>
//                     <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       id="contact-name"
//                       type="text"
//                       name="name"
//                       placeholder="Jane Doe"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all ${
//                         errors.name ? "border-red-500 bg-red-50/20" : "border-slate-200"
//                       }`}
//                     />
//                     {errors.name && (
//                       <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.name}</p>
//                     )}
//                   </div>

//                   {/* Email Input */}
//                   <div>
//                     <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
//                       Your Email
//                     </label>
//                     <input
//                       id="contact-email"
//                       type="email"
//                       name="email"
//                       placeholder="jane@example.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all ${
//                         errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200"
//                       }`}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.email}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Subject Input */}
//                 <div>
//                   <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
//                     Subject
//                   </label>
//                   <input
//                     id="contact-subject"
//                     type="text"
//                     name="subject"
//                     placeholder="Admissions Inquiry"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all ${
//                       errors.subject ? "border-red-500 bg-red-50/20" : "border-slate-200"
//                     }`}
//                   />
//                   {errors.subject && (
//                     <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.subject}</p>
//                   )}
//                 </div>

//                 {/* Message Input */}
//                 <div>
//                   <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="contact-message"
//                     name="message"
//                     placeholder="How can we help you?"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     className={`w-full p-4 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all resize-none ${
//                       errors.message ? "border-red-500 bg-red-50/20" : "border-slate-200"
//                     }`}
//                   />
//                   {errors.message && (
//                     <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.message}</p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   type="submit"
//                   className="w-full py-6 bg-[#FE5D37] text-white font-extrabold text-base rounded-2xl hover:bg-[#e45230] shadow-lg shadow-[#FE5D37]/20 transition-all cursor-pointer flex items-center justify-center gap-2 group"
//                 >
//                   <span>Send Message</span>
//                   <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </form>
//             </div>
//           </div>

//           {/* Google Maps Container (5 cols) */}
//           <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg min-h-[350px] lg:min-h-full relative bg-slate-100">
//             <iframe
//               title="Google Maps location of Kider Preschool"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1704010000000!5m2!1sen!2s"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               className="absolute inset-0 w-full h-full"
//               referrerPolicy="no-referrer-when-downgrade"
//               sandbox="allow-scripts allow-popups"
//             />
//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }









"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { motion, Variants } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Sparkles, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Form Submitted Successfully:", formData);
      alert("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Kathmandu, Nepal",
      color: "bg-orange-100 text-[#FE5D37]",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@kiderpreschool.com",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+977 1-4000000",
      color: "bg-pink-100 text-pink-700",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Sun - Fri: 9:00 AM - 5:00 PM",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF9] text-slate-900 py-16 lg:py-24 relative overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300/60 text-orange-900 font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FE5D37]" />
            <span>Get In Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Have Questions? <span className="text-[#FE5D37] underline decoration-wavy decoration-orange-300 underline-offset-8">Contact Us</span>
          </h1>

          <p className="text-slate-600 text-base leading-relaxed">
            We’d love to hear from you! Whether you want to schedule a campus tour or inquire about admissions, feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-4 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid: Form + Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          
          {/* Form Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg shadow-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                Send Us A Message
              </h2>
              <p className="text-slate-600 text-sm mb-8">
                Fill out the form below and our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all ${
                        errors.name ? "border-red-500 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all ${
                        errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Admissions Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all ${
                      errors.subject ? "border-red-500 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full p-4 rounded-2xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5D37] transition-all resize-none ${
                      errors.message ? "border-red-500 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs font-semibold mt-1.5 ml-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 bg-[#FE5D37] text-white font-extrabold text-base rounded-2xl hover:bg-[#e45230] shadow-lg shadow-[#FE5D37]/20 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Google Maps Container */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg min-h-[350px] lg:min-h-full relative bg-slate-100">
            <iframe
              title="Google Maps location in Kathmandu, Nepal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713616!2d85.28493297121683!3d27.70895425221376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1565310172!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1704010000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-popups"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
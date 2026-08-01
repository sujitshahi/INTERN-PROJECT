"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Heart,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const router = useRouter();

  const quickLinks = [
    { name: "About Us", path: "/About_Us" },
    { name: "Contact Us", path: "/Contact_Us" },
    { name: "Our Services", path: "/" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms & Conditions", path: "#" },
  ];

  const galleryImages = [
    "/images/classes-1.jpg",
    "/images/classes-2.jpg",
    "/images/classes-3.jpg",
    "/images/classes-4.jpg",
    "/images/classes-5.jpg",
    "/images/classes-6.jpg",
  ];

  return (
    <footer className="w-full pt-12 pb-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto bg-[#103741] text-slate-200 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative z-10 shadow-xl border border-teal-900/40">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#FE5D37] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stay Connected</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-300 text-sm">
              Get the latest updates, news, and special announcements delivered right to your inbox.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full pl-5 pr-32 py-3.5 rounded-full bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm outline-none focus:ring-4 focus:ring-orange-400/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#FE5D37] hover:bg-[#e45230] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              >
                <span>Join</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              Get In Touch
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FE5D37] shrink-0 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FE5D37] shrink-0" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FE5D37] shrink-0" />
                <span>info@kiderpreschool.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FE5D37] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => link.path !== "#" && router.push(link.path)}
                    className="group flex items-center justify-between w-full text-slate-300 hover:text-white transition-colors py-1 cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#FE5D37] transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              Photo Gallery
            </h4>
            <div className="grid grid-cols-3 gap-2.5">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden group border border-white/10"
                >
                  <Image
                    src={src}
                    alt={`Gallery preview ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-115 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#FE5D37]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE5D37]" />
              About Us
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dedicated to providing a vibrant, safe, and imaginative space where young minds explore, grow, and thrive every day.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <p className="font-semibold text-white mb-1">⏰ Learning Hours</p>
              <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 text-center md:text-left">
            <span>© {new Date().getFullYear()} Kider. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FE5D37] fill-[#FE5D37]" />
            <span>All Rights Reserved.</span>
          </p>

          <div className="flex items-center gap-6">
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button className="hover:text-white transition-colors cursor-pointer">Cookies</button>
            <button className="hover:text-white transition-colors cursor-pointer">Help</button>
            <button className="hover:text-white transition-colors cursor-pointer">FAQs</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
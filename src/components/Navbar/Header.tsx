"use client";

import { contactInfo } from "@/data/contactData";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="roboto relative overflow-hidden font-medium">
      <div className="overflow-hidden border-b border-sky-200 bg-gradient-to-r from-blue-50 via-sky-100 to-teal-50">
        <motion.div
          className="inline-block w-full py-2 whitespace-nowrap text-sky-800"
          initial={{ x: "100%" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          Unlock your learning potential with Polar Veda&apos;s innovative
          ed-tech solutions!
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-3 bg-white/90 px-4 py-2 text-slate-700 backdrop-blur">
        <Link
          href={contactInfo[0].href}
          className="flex items-center gap-1 hover:text-sky-600"
        >
          <Phone size={18} className="text-sky-500" />
          <span className="hidden sm:inline">{contactInfo[0].value}</span>
        </Link>

        <Link
          href={contactInfo[2].href}
          className="flex items-center gap-1 hover:text-sky-600"
        >
          <Mail size={18} className="text-emerald-500" />
          <span className="hidden sm:inline">{contactInfo[2].value}</span>
        </Link>

        <Link
          href={contactInfo[1].href}
          target="_blank"
          className="flex items-center gap-1 hover:text-sky-600"
        >
          <MapPin size={18} className="text-pink-500" />
          <span className="hidden sm:inline">{contactInfo[1].value}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

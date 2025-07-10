"use client";

import { contactInfo } from "@/data/contactData";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const FloatingContactBar = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
      <Link
        href={`https://wa.me/${contactInfo[0].value.replace(/\D/g, "")}`}
        target="_blank"
        className="rounded-full bg-green-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle className="text-white" size={20} />
      </Link>
      <Link
        href={contactInfo[0].href}
        className="rounded-full bg-blue-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-blue-600"
      >
        <Phone className="text-white" size={20} />
      </Link>
      <Link
        href={contactInfo[2].href}
        target="_blank"
        className="rounded-full bg-red-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-red-600"
      >
        <Mail className="text-white" size={20} />
      </Link>
      <Link
        href={contactInfo[1].href}
        target="_blank"
        className="rounded-full bg-purple-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-purple-600"
      >
        <MapPin className="text-white" size={20} />
      </Link>
    </div>
  );
};

export default FloatingContactBar;

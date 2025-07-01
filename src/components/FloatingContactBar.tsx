"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const FloatingContactBar = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
      <Link
        href="https://wa.me/919755435234"
        target="_blank"
        className="rounded-full bg-green-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle className="text-white" size={20} />
      </Link>
      <Link
        href="tel:+919755435234"
        className="rounded-full bg-blue-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-blue-600"
      >
        <Phone className="text-white" size={20} />
      </Link>
      <Link
        href="mailto:mishraanshu856@gmail.com"
        target="_blank"
        className="rounded-full bg-red-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-red-600"
      >
        <Mail className="text-white" size={20} />
      </Link>
      <Link
        href="https://www.google.com/maps?q=Indore+India"
        target="_blank"
        className="rounded-full bg-purple-500 p-3 shadow-md transition-all hover:scale-110 hover:bg-purple-600"
      >
        <MapPin className="text-white" size={20} />
      </Link>
    </div>
  );
};

export default FloatingContactBar;

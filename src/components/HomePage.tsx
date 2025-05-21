"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative -mt-8 flex min-h-[86vh] flex-col items-center justify-center px-6 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/images/homepage.webp')] bg-cover bg-fixed bg-center brightness-[0.45]" />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-6xl leading-tight font-bold tracking-tight text-white drop-shadow-lg max-md:text-5xl max-sm:text-4xl"
        >
          Transform Your Learning Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-white/90 sm:text-xl"
        >
          Discover comprehensive online education and expert test preparation
          tailored for your success. Join us for a brighter future!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="roboto inline-block rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 px-6 py-2 text-lg font-semibold text-white/90 shadow-sm shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-500/30"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

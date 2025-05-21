"use client";

import { offerings } from "@/data/offeringData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ExploreOfferings = () => {
  return (
    <section className="w-full bg-white px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-sky-800 md:text-4xl"
        >
          Explore Our Offerings
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-90 overflow-hidden rounded-2xl border border-blue-100 bg-white/60 shadow-sm backdrop-blur-md transition"
            >
              <Link href={item.href} className="block h-full cursor-pointer">
                <div className="relative h-full w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                  <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOfferings;

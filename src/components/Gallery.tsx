"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const images = Array.from(
    { length: 4 },
    (_, i) => `/images/gallery/gallery${i + 1}.webp`,
  );

  return (
    <section className="bg-white px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-sky-800 md:text-4xl"
        >
          Gallery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/gallery"
            className="mt-4 inline-block rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow transition hover:scale-105 hover:opacity-90"
          >
            View More
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-90 w-full">
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

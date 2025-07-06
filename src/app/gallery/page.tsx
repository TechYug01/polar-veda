"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const images = Array.from(
    { length: 8 },
    (_, i) => `/images/gallery/gallery${i + 1}.webp`,
  );

  images.push(
    ...Array.from(
      { length: 2 },
      (_, i) => `/images/gallery/gallery${i + 9}.jpeg`,
    ),
  );

  return (
    <div className="-mt-8 flex flex-col">
      <section className="relative h-[300px] w-full">
        <div
          className="safari-bg-adjust absolute inset-0 -z-10 bg-cover bg-center brightness-[0.45]"
          style={{ backgroundImage: "url(/images/homepage.webp)" }}
        />

        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white md:text-5xl"
            >
              Gallery
            </motion.h1>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-br from-white via-blue-50 to-sky-50/60">
        <div className="mx-auto my-20 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => {
            const baseProps = {
              initial: { opacity: 0, y: 20 },
              transition: { duration: 0.4, delay: idx * 0.1 },
            };

            return (
              <motion.div
                key={idx}
                {...baseProps}
                {...(idx > 3
                  ? {
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                    }
                  : {
                      animate: { opacity: 1, y: 0 },
                    })}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

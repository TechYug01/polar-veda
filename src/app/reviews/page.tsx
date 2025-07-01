"use client";

import renderStars from "@/components/RenderStars";
import { reviews } from "@/data/reviewData";
import { motion } from "framer-motion";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="-mt-8 flex flex-col">
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0 -z-10 bg-[url('/images/homepage.webp')] bg-cover bg-fixed bg-center brightness-[0.45]" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white md:text-5xl"
            >
              Reviews
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md mt-4 max-w-3xl text-white/90 md:text-lg"
            >
              Customer reviews play a vital role in showcasing our commitment to
              quality education and student satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-br from-white via-blue-50 to-sky-50/60">
        <div className="mx-auto my-20 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {reviews.map((review, idx) => {
            const baseProps = {
              initial: { opacity: 0, y: 30 },
              transition: { duration: 0.4, delay: idx * 0.15 },
            };

            return (
              <motion.div
                key={idx}
                {...baseProps}
                {...(idx > 2
                  ? {
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                    }
                  : {
                      animate: { opacity: 1, y: 0 },
                    })}
                className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-8 text-center shadow-sm backdrop-blur-md"
              >
                <div className="relative mx-auto mb-4 h-20 w-20">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover shadow-md"
                  />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-sky-800">
                  {review.name}
                </h3>

                {renderStars(review.rating)}

                <p className="text-sm text-gray-700">{review.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

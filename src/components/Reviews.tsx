"use client";

import { reviews } from "@/data/reviewData";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const renderStars = (rating: number) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const total = 5;

  for (let i = 0; i < full; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="h-4 w-4 fill-yellow-400 text-yellow-500"
      />,
    );
  }

  if (half) {
    stars.push(
      <StarHalf
        key="half"
        className="h-4 w-4 fill-yellow-400 text-yellow-500"
      />,
    );
  }

  for (let i = stars.length; i < total; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
  }

  return <div className="mb-3 flex justify-center">{stars}</div>;
};

const Reviews = () => {
  const top3Reviews = reviews.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-sky-800 md:text-4xl"
        >
          Reviews
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-2 max-w-xl text-gray-600"
        >
          Customer reviews reflect our commitment to quality education and
          student satisfaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/reviews"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow transition hover:scale-105 hover:opacity-90"
          >
            Read All Reviews
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {top3Reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

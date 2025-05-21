"use client";

import { features } from "@/data/aboutData";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full bg-white px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-sky-800 md:text-4xl"
          >
            About Polar Veda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-2 max-w-2xl text-gray-600"
          >
            Revolutionizing online education for students across India with
            tailored learning solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/about"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow transition hover:scale-105 hover:opacity-90"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[425px] w-full overflow-hidden rounded-2xl border border-blue-100 bg-white/60 shadow-sm backdrop-blur-md"
          >
            <Image
              src="/images/about.webp"
              alt="About Polar Veda"
              fill
              className="rounded-2xl object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-between gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-6 py-6 text-center shadow-sm backdrop-blur-md"
              >
                <BadgeCheck className="mb-4 h-8 w-8 text-sky-600" />
                <h3 className="text-lg font-semibold text-sky-800">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

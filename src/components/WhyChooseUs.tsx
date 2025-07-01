"use client";

import { points } from "@/data/WhyChooseUsData";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-sky-800 md:text-4xl">
            Why Choose PolarVeda?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-gray-600">
            Real Teachers. Real Growth. Real Results.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            We're not just another online tutoring platform—we're your partner
            in unlocking every child's full potential. At the heart of our
            mission is a simple belief: every learner is unique, and so should
            be their learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer rounded-2xl border border-blue-100 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white/80 hover:shadow-lg"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-sky-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

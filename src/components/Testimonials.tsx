"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="w-full bg-white px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-sky-800 md:text-4xl"
        >
          Testimonials & Success Stories
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {[
            {
              text: `"PolarVeda EdTech helped my child gain confidence in Mathematics. The personalized tutoring approach made a significant difference in his performance."`,
              name: "- Parent, USA",
            },
            {
              text: `"Thanks to the expert coaching for the AP exams, I secured a top score and got into my dream university."`,
              name: "- Student, Canada",
            },
            {
              text: `"The Sainik School Entrance Exam coaching was exceptional. My son cleared the exam with flying colors!"`,
              name: "- Parent, India",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-8 text-center shadow-sm backdrop-blur-md"
            >
              <div className="mb-4 flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">{item.text}</p>
              <p className="mt-2 text-sm font-medium text-sky-800">
                {item.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

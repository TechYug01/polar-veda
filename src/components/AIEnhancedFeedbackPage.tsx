"use client";

import { aiFeedbackContent } from "@/data/WhyChooseUsData";
import { motion } from "framer-motion";

const AIEnhancedFeedbackPage = () => {
  return (
    <section className="mt-20 w-full bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 shadow-inner">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h4
          className="mb-6 text-3xl font-bold text-sky-700 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {aiFeedbackContent.title}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-justify text-sm text-gray-700 md:text-base"
        >
          {aiFeedbackContent.description}
        </motion.p>

        <div className="mt-4 space-y-4 text-justify">
          {aiFeedbackContent.points.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-sm text-gray-700 md:text-base"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEnhancedFeedbackPage;

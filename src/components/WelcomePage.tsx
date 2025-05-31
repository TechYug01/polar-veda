"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { end: 15, suffix: "+", label: "Courses Offered", color: "text-sky-500" },
  {
    end: 500,
    suffix: "+",
    label: "Students Enrolled",
    color: "text-emerald-500",
  },
  {
    end: 20,
    suffix: "+",
    label: "Test Series Available",
    color: "text-orange-500",
  },
  { end: 95, suffix: "%", label: "Satisfaction Rate", color: "text-pink-500" },
];

const WelcomePage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-sky-800 md:text-5xl">
          Welcome to Polar Veda
        </h1>
        <p className="text-lg text-gray-600">
          We are dedicated to providing innovative online 1:1 tutoring,
          education and personalized test preparation services for aspiring
          learners globally.
        </p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-100 bg-white/60 p-6 text-center shadow-sm backdrop-blur-md"
          >
            <h3 className={`text-3xl font-bold ${item.color}`}>
              {inView ? (
                <CountUp end={item.end} duration={1.8} suffix={item.suffix} />
              ) : (
                `0${item.suffix}`
              )}
            </h3>
            <p className="mt-2 text-sm text-gray-700">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WelcomePage;

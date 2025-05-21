"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account easily.",
  },
  {
    number: "2",
    title: "Choose Courses",
    description: "Select your desired subjects.",
  },
  {
    number: "3",
    title: "Start Learning",
    description: "Begin your educational journey today.",
  },
];

const SimpleLearningSteps = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl"
        >
          Simple Learning Steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          Access our services with just a few easy steps to enhance your
          learning journey.
        </motion.p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center rounded-2xl border border-blue-100 bg-white/60 p-6 text-center shadow-sm backdrop-blur-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-lg font-bold text-sky-600 shadow">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-sky-800">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SimpleLearningSteps;

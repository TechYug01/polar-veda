"use client";

import { motion } from "framer-motion";

const Resources = () => {
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
              Resources
            </motion.h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

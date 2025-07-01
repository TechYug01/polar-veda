"use client";

import { serviceData } from "@/data/offeringData";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { use } from "react";

const Offerings = ({
  params,
}: {
  params: Promise<{ serviceName: string }>;
}) => {
  const { serviceName } = use(params);

  const toCamelCase = (str: string) =>
    str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

  const camelName = toCamelCase(serviceName);
  const service = serviceData[camelName as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="py-32 text-center text-2xl font-semibold text-red-600">
        Service not found.
      </div>
    );
  }

  return (
    <div className="-mt-8 flex flex-col">
      <section className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center brightness-[0.45]"
          style={{ backgroundImage: `url(/images/${serviceName}.webp)` }}
        />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white md:text-5xl"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md mt-4 max-w-3xl text-white/90 md:text-lg"
            >
              {service.subTitle}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="leading-relaxed whitespace-pre-line text-gray-700">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {service.keyPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 shadow"
            >
              <Check className="h-4 w-4 text-sky-600" />
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {service.pageData.map((feat, idx) => {
            const baseProps = {
              initial: { opacity: 0, y: 40 },
              transition: { duration: 0.6, delay: idx * 0.1 },
            };

            return (
              <motion.div
                key={feat.title}
                {...baseProps}
                {...(idx > 1
                  ? {
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                    }
                  : {
                      animate: { opacity: 1, y: 0 },
                    })}
                className="mx-auto w-full max-w-[550px]"
              >
                <div className="relative h-auto w-full overflow-hidden rounded-2xl">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    layout="responsive"
                    width={4}
                    height={3}
                    loading="lazy"
                    priority
                    className="rounded-2xl object-contain"
                  />
                </div>

                <div className="group -mt-10 w-full scale-95 transition-transform duration-300 hover:scale-100">
                  <div className="min-h-[225px] rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md">
                    <h3 className="text-xl font-semibold text-sky-800">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">
                      {feat.description}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm">
                      {feat.keyPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check className="h-4 w-4 shrink-0 text-sky-600" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Offerings;

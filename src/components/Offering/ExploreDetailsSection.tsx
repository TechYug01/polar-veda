"use client";

import { features } from "@/data/offeringData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Feature = {
  title: string;
  image: string;
};

interface ExploreDetailsSectionProps {
  pageTitle: string;
  bg: number;
  subtitle: string;
  link: string;
  features: Feature[];
}

const ExploreDetailsSection = ({
  pageTitle,
  bg,
  subtitle,
  link,
  features,
}: ExploreDetailsSectionProps) => {
  return (
    <section
      className={`w-full ${!bg ? "bg-gradient-to-br from-white via-blue-50 to-sky-50/60" : "bg-white"} px-4 py-20 text-gray-800`}
    >
      <div className="mx-auto mb-10 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-sky-800 md:text-4xl"
        >
          {pageTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href={link}
            className="mt-4 inline-block cursor-pointer rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:opacity-90"
          >
            Know More
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-90 w-full cursor-pointer overflow-hidden rounded-2xl border border-blue-100 bg-white/60 shadow-sm backdrop-blur-md transition"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-2 left-1/2 w-[90%] -translate-x-1/2 rounded-lg bg-white/80 p-3 text-center text-black transition-transform duration-300 group-hover:scale-105 hover:scale-105">
                <h3 className="text-base font-semibold">{feature.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExploreDetails = () => {
  return (
    <>
      <ExploreDetailsSection
        pageTitle="Online Education"
        bg={0}
        subtitle="Engaging courses for all ages."
        link="/offerings/online-education"
        features={features.onlineEducation}
      />
      <ExploreDetailsSection
        pageTitle="Test Preparation"
        bg={1}
        subtitle="Tailored test prep resources."
        link="/offerings/test-preparation"
        features={features.testPreparation}
      />
      <ExploreDetailsSection
        pageTitle="Addon Services"
        bg={0}
        subtitle="Additional resources for better outcomes."
        link="/offerings/addon-services"
        features={features.addonServices}
      />
      <ExploreDetailsSection
        pageTitle="Technology Integration"
        bg={1}
        subtitle="Integrating tech for effective learning."
        link="/offerings/technology-integration"
        features={features.technologyIntegration}
      />
    </>
  );
};

export default ExploreDetails;

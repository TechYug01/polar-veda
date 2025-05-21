"use client";

import { features, leadershipData, pillars, teamData } from "@/data/aboutData";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="-mt-8 flex flex-col">
      <section className="relative h-[350px] w-full">
        <div className="absolute inset-0 -z-10 bg-[url('/images/homepage.webp')] bg-cover bg-fixed bg-center brightness-[0.45]" />

        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white md:text-5xl"
            >
              About Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md mt-4 max-w-3xl text-white/90 md:text-lg"
            >
              Polar Veda Ed Tech Pvt Ltd is committed to transforming learning
              experiences with innovative online education solutions.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-gray-800">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto text-justify text-lg leading-relaxed"
        >
          Founded in 2021, Polar Veda Ed Tech Pvt Ltd emerged from a passion for
          making quality education accessible to all. With a dedicated team of
          educators and tech enthusiasts, we harness technology to empower
          students in their learning journeys.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-2xl border border-blue-100 bg-white/70 p-8 shadow-sm backdrop-blur-md"
            >
              <div className="mb-4 h-14 w-14">
                <Image
                  src={p.icon}
                  alt={p.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-sky-800">
                {p.title}
              </h3>
              <p className="text-center text-sm text-gray-700">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 text-gray-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Our Leadership Team
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {leadershipData.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="w-full max-w-[340px] rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-sky-800">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-gray-600">{leader.title}</p>
                  <p className="mt-3 text-gray-700">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-20 text-gray-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Team</h2>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {teamData.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="mx-auto w-full max-w-[240px]"
              >
                <div className="relative h-[250px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover duration-300 hover:scale-105"
                  />
                </div>

                <div className="group -mt-10 w-full scale-95 transition-transform duration-300 group-hover:scale-100 hover:scale-100">
                  <div className="overflow-hidden rounded-2xl bg-white/80 px-4 py-5 text-center shadow-lg backdrop-blur-md">
                    <h3 className="text-base font-semibold text-sky-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 text-gray-800">
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
                  className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/60 px-6 py-6 text-center shadow-sm backdrop-blur-md"
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
    </div>
  );
};

export default AboutUs;

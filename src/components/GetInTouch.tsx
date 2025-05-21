"use client";

import { contactInfo as contactBoxes, socials } from "@/data/contactData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-sky-50/60 px-4 py-20 text-gray-800">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-sky-800 md:text-4xl"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-2 max-w-xl text-gray-600"
        >
          For inquiries or support, reach out to us anytime. We are here to
          help!
        </motion.p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {socials.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-full bg-white/70 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:bg-white"
            >
              <Image
                src={Icon}
                alt={label}
                className="h-full w-full text-sky-600"
              />
            </motion.a>
          ))}
        </div>

        <div className="mx-auto mt-14 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {contactBoxes.map(({ icon: Icon, title, value, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-2xl border border-blue-100 bg-white/60 px-6 py-10 text-center shadow-sm backdrop-blur-md"
            >
              <Icon className="mb-4 h-8 w-8 text-sky-600" />
              <h3 className="text-lg font-semibold text-sky-800">{title}</h3>
              {href === "#" ? (
                <p className="mt-1 text-gray-700">{value}</p>
              ) : (
                <Link
                  href={href}
                  target="_blank"
                  className="mt-1 break-all text-gray-700 decoration-sky-500/50 hover:text-sky-600"
                >
                  {value}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

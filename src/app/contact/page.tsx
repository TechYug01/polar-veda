"use client";

import { contactInfo, socials } from "@/data/contactData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="-mt-8 flex flex-col">
      <section className="relative h-[300px] w-full">
        <div
          className="safari-bg-scroll absolute inset-0 -z-10 bg-cover bg-fixed bg-center brightness-[0.45]"
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md mt-4 max-w-3xl text-white/90 md:text-lg"
            >
              For inquiries or support, reach out to us anytime. We are here to
              help!
            </motion.p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Reach Us</h2>
              <div className="space-y-4 text-gray-700">
                {contactInfo.map(({ icon: Icon, value, href }, i) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Icon className="h-5 w-5 text-sky-600" />
                    {href !== "#" ? (
                      <Link
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        className="text-sm break-all hover:text-sky-600"
                      >
                        {value}
                      </Link>
                    ) : (
                      <span className="text-sm break-all">{value}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">Follow Us</h3>
              <div className="mt-6 flex flex-wrap items-center gap-6">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/80"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Join Our Community
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign up today to receive updates on new courses, exclusive offers,
              and educational resources tailored just for you!
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-sky-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-sky-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-sky-500 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-sky-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 px-4 py-2 font-semibold text-white/90 shadow-sm shadow-sky-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-sky-500/30"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

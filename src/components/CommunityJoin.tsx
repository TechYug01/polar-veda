"use client";

import { AnimatePresence, motion } from "framer-motion";
import { UserPlus, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CommunityJoin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.success) {
      toast.success("Message sent successfully!");
      setLoading(false);
      form.reset();
    } else {
      toast.error("Failed to send. Please try again.");
      setLoading(false);
      console.error(json.error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="roboto fixed bottom-6 left-6 z-50 inline-block cursor-pointer rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 px-6 py-2.5 text-sm font-semibold text-white/90 shadow-sm shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-500/30"
      >
        <div className="flex items-center gap-2">
          <UserPlus size={18} />
          Join Our Community
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative mx-4 flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-black shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 p-6 text-slate-800 md:flex">
                <div>
                  <h3 className="mb-2 text-3xl font-bold">
                    Join Our Community
                  </h3>
                  <p className="text-slate-700">
                    Sign up today to receive updates on new courses, exclusive
                    offers, and educational resources tailored just for you!
                  </p>
                </div>
              </div>

              <div className="w-full space-y-4 p-6 md:w-1/2">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Join Us
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block w-full cursor-pointer rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 px-6 py-2 text-lg font-semibold text-white/90 shadow-sm shadow-sky-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-sky-500/30"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <button
                className="absolute top-3 right-3 cursor-pointer text-xl text-gray-400 transition hover:rotate-90 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommunityJoin;

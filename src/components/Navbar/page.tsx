"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navLinkStyle =
    "hover:text-sky-600 hover:underline underline-offset-4 transition duration-200";

  return (
    <>
      <Header />

      <nav className="roboto max-[] relative z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#6F4D38] px-6 py-3 text-base text-white shadow-md backdrop-blur-lg max-[1000px]:text-sm max-[870px]:text-xs">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="logo leading-tight">
            <span className="block text-xl font-bold max-[1000px]:text-sm max-[870px]:text-xs">
              PolarVeda EdTech Pvt Ltd.
            </span>
            <span className="block text-xs font-light tracking-wide text-white/80 max-[1000px]:text-[10px] max-[870px]:text-[9px]">
              Learning without Borders
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 font-medium md:flex">
          <li>
            <Link href="/" className={navLinkStyle}>
              Home
            </Link>
          </li>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex cursor-pointer items-center gap-1 transition duration-200 hover:text-sky-600"
            >
              Explore
              {isDropdownOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 z-20 w-58 rounded-xl border border-gray-200 bg-white py-2 text-black shadow-lg max-[870px]:w-46"
                >
                  <li>
                    <Link
                      href="/offerings/online-tutoring"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="block px-4 py-2 hover:bg-sky-50"
                    >
                      Online Tutoring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/offerings/test-preparation"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="block px-4 py-2 hover:bg-sky-50"
                    >
                      Test Preparation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/offerings/personality-development"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="block px-4 py-2 hover:bg-sky-50"
                    >
                      Personality Development
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <li>
            <Link href="/about" className={navLinkStyle}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/reviews" className={navLinkStyle}>
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/gallery" className={navLinkStyle}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/resources" className={navLinkStyle}>
              Resources
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-blue-300 bg-white/20 px-5 py-2 font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-white/30 hover:text-sky-900 max-[777px]:px-4"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 right-4 left-4 z-30 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 text-gray-800 shadow-lg md:hidden"
            >
              <Link
                href="/"
                className={navLinkStyle}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                Home
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1 transition hover:text-sky-600"
                >
                  Explore
                  {isDropdownOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 flex flex-col gap-2 pl-4"
                    >
                      <li>
                        <Link
                          href="/offerings/online-tutoring"
                          onClick={() => {
                            setIsMobileMenuOpen((prev) => !prev);
                            setIsDropdownOpen((prev) => !prev);
                          }}
                          className={navLinkStyle}
                        >
                          Online Tutoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/offerings/test-preparation"
                          onClick={() => {
                            setIsMobileMenuOpen((prev) => !prev);
                            setIsDropdownOpen((prev) => !prev);
                          }}
                          className={navLinkStyle}
                        >
                          Test Preparation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/offerings/personality-development"
                          onClick={() => {
                            setIsMobileMenuOpen((prev) => !prev);
                            setIsDropdownOpen((prev) => !prev);
                          }}
                          className={navLinkStyle}
                        >
                          Personality Development
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className={navLinkStyle}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                About Us
              </Link>
              <Link
                href="/reviews"
                className={navLinkStyle}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                Reviews
              </Link>
              <Link
                href="/gallery"
                className={navLinkStyle}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                Gallery
              </Link>
              <Link
                href="/resources"
                className={navLinkStyle}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-blue-300 bg-white/30 px-4 py-2 text-center text-sm font-semibold text-sky-800 shadow-sm backdrop-blur-md transition hover:bg-white/50 hover:text-sky-900"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

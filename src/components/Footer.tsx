"use client";

import Image from "next/image";
import Link from "next/link";

import Facebook from "@/../public/facebook.svg";
import Instagram from "@/../public/insta.svg";
import Linkedin from "@/../public/linkedin.svg";
import X from "@/../public/x.svg";
import Youtube from "@/../public/yt.svg";

const Footer = () => {
  return (
    <footer className="roboto bg-black px-6 py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Polar Veda"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="logo text-xl font-bold text-white">
              Polar Veda
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We are committed to enriching educational experiences through
            technology and quality resources.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            © Polar Veda Ed Tech 2025
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/reviews", label: "Reviews" },
                { href: "/gallery", label: "Gallery" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-sky-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                {
                  href: "/offerings/online-education",
                  label: "Online Education",
                },
                {
                  href: "/offerings/test-preparation",
                  label: "Test Preparation",
                },
                { href: "/offerings/addon-services", label: "Addon Services" },
                {
                  href: "/offerings/technology-integration",
                  label: "Technology Integration",
                },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-sky-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-64 w-full overflow-hidden rounded-xl shadow-lg sm:col-span-2 lg:col-span-1">
          <iframe
            title="Polar Veda Location"
            src="https://maps.google.com/maps?q=Kanpur%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-gray-600 pt-6">
        <div className="flex flex-wrap justify-end gap-6">
          {[
            {
              href: "https://instagram.com/polarveda",
              Icon: Instagram,
              label: "Instagram",
            },
            {
              href: "https://facebook.com/polarveda",
              Icon: Facebook,
              label: "Facebook",
            },
            {
              href: "https://x.com/polarveda",
              Icon: X,
              label: "X",
            },
            {
              href: "https://youtube.com/@polarveda",
              Icon: Youtube,
              label: "YouTube",
            },
            {
              href: "https://linkedin.com/company/polarveda",
              Icon: Linkedin,
              label: "LinkedIn",
            },
          ].map(({ href, Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="rounded-full bg-white/5 text-gray-300 backdrop-blur-md transition hover:bg-white/10 hover:text-sky-400"
            >
              <Image src={Icon} alt={label} className="h-full w-full" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

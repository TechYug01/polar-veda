import Facebook from "@/../public/facebook.svg";
import Instagram from "@/../public/insta.svg";
import Linkedin from "@/../public/linkedin.svg";
import X from "@/../public/x.svg";
import Youtube from "@/../public/yt.svg";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const socials = [
  {
    icon: Instagram,
    href: "https://instagram.com/polarveda",
    label: "Instagram",
  },
  { icon: Facebook, href: "https://facebook.com/polarveda", label: "Facebook" },
  { icon: X, href: "https://x.com/polarveda", label: "X" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@PolarVedaEducation",
    label: "YouTube",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/107797170/admin/dashboard/",
    label: "LinkedIn",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8109491326",
    href: "tel:+918109491326",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Indore, India",
    href: "https://www.google.com/maps?q=Indore+India",
  },
  {
    icon: Mail,
    title: "Email",
    value: "education@polarveda.co.in",
    href: "mailto:education@polarveda.co.in",
  },
  {
    icon: Clock,
    title: "Office Timing",
    value: "Mon - Sat • 9 AM - 7 PM IST",
    href: "#",
  },
];

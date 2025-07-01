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
  { icon: Youtube, href: "https://youtube.com/@polarveda", label: "YouTube" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/polarveda",
    label: "LinkedIn",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9755435234",
    href: "tel:+919755435234",
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
    value: "mishraanshu856@gmail.com",
    href: "mailto:mishraanshu856@gmail.com",
  },
  {
    icon: Clock,
    title: "Office Timing",
    value: "Mon - Sat • 9 AM - 7 PM IST",
    href: "#",
  },
];

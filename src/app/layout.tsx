import CommunityJoin from "@/components/CommunityJoin";
import FloatingContactBar from "@/components/FloatingContactBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/page";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./fontStyles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polar Veda Ed Tech",
  description: "Personalized online tutoring and test preparation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} roboto ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <FloatingContactBar />
        <CommunityJoin />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Navbar from "@/components/barra-nav";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeFlow | Portfolio",
  description: "Portfolio creado por CodeFlow con Next.js, React y Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}

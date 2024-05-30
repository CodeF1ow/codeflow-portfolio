import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/barra-nav";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeFlow | Portfolio",
  description: "Portfolio de CodeFlow :smile:",
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
        {children}
      </body>
    </html>
  );
}

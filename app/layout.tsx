import type { Metadata } from "next";
import React from "react";
import { Quicksand } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const nunito = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Kostpedia",
  description: "Tempatnya orang orang mencari kosan dengan mudah.",
};

export default function RootLayout({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

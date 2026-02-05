import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAGOHEFO - Tanzania Gender and Good Health Foundation",
  description: "Building a society free from gender-based violence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-roboto text-[#111817] antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mutants and Masterminds App",
  description: "Fullstack VTT for mutants and mastermidns",
};

export default function PlayerLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Simplified type definition
}>) {
  return (
    <> {/* Added fragment wrapper */}
      
      {children}
    </>
  );
}

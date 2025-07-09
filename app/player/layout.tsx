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
      <nav className="flex justify-center gap-5 bg-orange-500 p-4">
        <Link href="/player/" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          Players Home
        </Link>
        <Link href="/player/view-characters" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          My Heroes
        </Link>
        <Link href="/player/join-campaign" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          Join Campaign
        </Link>
      </nav>
      {children}
    </>
  );
}

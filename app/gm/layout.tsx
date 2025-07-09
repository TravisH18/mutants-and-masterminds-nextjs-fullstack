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

export default function GmLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Simplified type definition
}>) {
  return (
    <> {/* Added fragment wrapper */}
      <nav className="flex justify-center gap-5 bg-orange-500 p-4">
        <Link href="/gm/" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          GM Home
        </Link>
        <Link href="/gm/view-campaigns" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          My Campaigns
        </Link>
        <Link href="/gm/view-encounters" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          My Encounters
        </Link>
        <Link href="/create/" className="hover:rounded-sm hover:border-2 hover:bg-amber-500 p-1">
          Create Homebrew Content
        </Link>
      </nav>
      {children}
    </>
  );
}

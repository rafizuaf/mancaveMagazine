import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils"
import Navbar from "@/components/Navbar";
import AdsCard from "@/components/AdsCard";
import SearchBar from "@/components/SearchBar";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Mancave Magazine",
  description: "Men's lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased scroll-smooth",
        plusJakartaSans.variable
      )}>
        <Navbar />
        <main className="container mt-20 md:mt-36">
          <div className="flex w-full">
            <div className="w-full md:w-3/4 md:border-r-2 min-h-screen">
              <div className="pt-5">
                {children}
              </div>
            </div>
            <div className="hidden md:block md:w-1/4 md:pl-5">
              <div className="pt-5">
                <SearchBar />
                <AdsCard />
                <AdsCard />
                <AdsCard />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

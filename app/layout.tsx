import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/ui/globals.css"
import Navbar from "@/ui/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Keeper",
  description: "A note taking app that boosts you productivity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-40`}
      >
        <div>
          <Navbar />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

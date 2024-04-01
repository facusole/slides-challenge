import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slides challenge",
  description:
    "Technical challenge for Slides, a software factory that creates swipe-up websites (or Slidesites), which are special types of sites created to achieve exceptional results. Unlike a website where you need to scroll down to explore and access information, in a Slidesite users navigate through the different Slides by swiping up or down. Similar to the gesture you do when browsing Instagram reels or TikTok videos.",
  icons: {
    icon: "/assets/slides-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

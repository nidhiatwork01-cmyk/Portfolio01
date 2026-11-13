import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nidhi Singh — Creative UI Engineer & Frontend Architect",
  description:
    "Portfolio of Nidhi Singh: Creative UI Engineer & Frontend Architect. Building high-stakes enterprise interfaces, fluid design systems, and resilient web tools where aesthetic precision meets sub-millisecond runtime performance.",
  keywords: [
    "Nidhi Singh",
    "Creative UI Engineer",
    "Frontend Architect",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "WhatBytes",
    "HighRadius",
    "UI Developer",
  ],
  authors: [{ name: "Nidhi Singh", url: "https://portfolio01-kohl-mu.vercel.app/" }],
  creator: "Nidhi Singh",
  metadataBase: new URL("https://portfolio01-kohl-mu.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio01-kohl-mu.vercel.app/",
    title: "Nidhi Singh — Creative UI Engineer & Frontend Architect",
    description:
      "Crafting high-stakes enterprise interfaces, fluid design systems, and resilient web tools where aesthetic precision meets sub-millisecond runtime performance.",
    siteName: "Nidhi Singh Portfolio",
    images: [
      {
        url: "/speaking-1.jpg",
        width: 1200,
        height: 630,
        alt: "Nidhi Singh — Creative UI Engineer & Frontend Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Singh — Creative UI Engineer & Frontend Architect",
    description: "Building fluid design systems and resilient web tools with sub-millisecond efficiency.",
    images: ["/speaking-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans bg-[#07080c] text-[#f3f4f6] selection:bg-[#d4ff00] selection:text-[#07080c] min-h-screen relative antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

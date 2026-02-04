import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Almarai } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const _almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Radio Prophets Events | Santa Barbara's Premier Wedding Band",
  description:
    "Award-winning Santa Barbara wedding band providing reception bands, jazz quartets, DJ/Sax duos for weddings, corporate and luxury events. 20+ years of professional experience.",
  keywords: [
    "Wedding Band",
    "Santa Barbara Wedding Band",
    "Wedding DJ",
    "Jazz Quartet",
    "DJ Sax Duo",
    "Live Music",
    "Corporate Events",
    "Luxury Events",
  ],
  openGraph: {
    title: "Radio Prophets Events | Santa Barbara's Premier Wedding Band",
    description:
      "Award-winning live entertainment for weddings, corporate and luxury events",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/465faf3b-8229-4550-b8c4-27401872984e/C85C1B4D-53A7-426D-8801-C613AD69D4FC.jpg?format=1500w",
    ],
  },
  icons: {
    icon: "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/1648978335225-4MZIIFF8FCSX27YGLRVT/favicon.ico?format=100w",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

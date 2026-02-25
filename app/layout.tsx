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
  metadataBase: new URL("https://www.radioprophets.com"),
  title: {
    default: "Radio Prophets Events | Santa Barbara's Premier Wedding Band",
    template: "%s | Radio Prophets Events",
  },
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
    "Santa Barbara Entertainment",
    "California Destination Wedding Band",
  ],
  authors: [{ name: "Radio Prophets Events" }],
  creator: "Radio Prophets Events",
  publisher: "Radio Prophets Events",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.radioprophets.com",
    siteName: "Radio Prophets Events",
    title: "Radio Prophets Events | Santa Barbara's Premier Wedding Band",
    description:
      "Award-winning live entertainment for weddings, corporate and luxury events in Santa Barbara and beyond.",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/465faf3b-8229-4550-b8c4-27401872984e/C85C1B4D-53A7-426D-8801-C613AD69D4FC.jpg?format=1500w",
        width: 1200,
        height: 630,
        alt: "Radio Prophets Events - Santa Barbara Wedding Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Prophets Events | Santa Barbara's Premier Wedding Band",
    description: "Award-winning live entertainment for weddings, corporate and luxury events.",
    images: ["https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/465faf3b-8229-4550-b8c4-27401872984e/C85C1B4D-53A7-426D-8801-C613AD69D4FC.jpg?format=1500w"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.radioprophets.com/#localbusiness",
      "name": "Radio Prophets Events",
      "image": "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/465faf3b-8229-4550-b8c4-27401872984e/C85C1B4D-53A7-426D-8801-C613AD69D4FC.jpg?format=1500w",
      "url": "https://www.radioprophets.com",
      "telephone": "+1-805-453-2900",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93101",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.4208,
        "longitude": -119.6982
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.instagram.com/radioprophets/",
        "https://www.facebook.com/radioprophets"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.radioprophets.com/#organization",
      "name": "Radio Prophets Events",
      "url": "https://www.radioprophets.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/1648978335225-4MZIIFF8FCSX27YGLRVT/favicon.ico?format=100w"
      },
      "description": "Award-winning Santa Barbara wedding band and event entertainment collective providing live music, DJs, and coordination services."
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

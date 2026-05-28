import "@/styles/globals.css";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://anandcharitabletrust.org"),

  title: {
    default: "Anand Charitable Trust",
    template: "%s | Anand Charitable Trust",
  },

  description:
    "Anand Charitable Trust supports education, training, women empowerment and community welfare initiatives.",

  keywords: [
    "NGO Odisha",
    "Charitable Trust Bhubaneswar",
    "NGO India",
    "Women Empowerment NGO",
    "Education NGO",
    "Community Welfare",
  ],

  authors: [
    {
      name: "Anand Charitable Trust",
    },
  ],

  creator: "Anand Charitable Trust",

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://anandcharitabletrust.org",

    siteName: "Anand Charitable Trust",

    title: "Anand Charitable Trust",

    description:
      "Supporting communities through education, training and social initiatives.",

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Anand Charitable Trust",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Anand Charitable Trust",

    description:
      "Supporting communities through education, training and social initiatives.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SiteNav />

        <main id="main" className="min-h-dvh">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Anand Charitable Trust — Empowering Communities Through Education & Social Welfare",

  description:
    "Anand Charitable Trust is a Bhubaneswar-based NGO empowering children, women, youth and communities through education, skill development, relief support and social initiatives.",

  openGraph: {
    title:
      "Anand Charitable Trust — Empowering Communities Through Education & Social Welfare",

    description:
      "Empowering children, women, youth and communities through education and social welfare initiatives.",

    url: "/",
  },

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "NGO",

            name: "Anand Charitable Trust",

            url: "https://anandcharitabletrust.org",

            logo: "https://anandcharitabletrust.org/logo.png",

            address: {
              "@type": "PostalAddress",

              addressLocality: "Bhubaneswar",

              addressRegion: "Odisha",

              addressCountry: "India",
            },
          }),
        }}
      />
      <HomeClient />
    </>
  );
}

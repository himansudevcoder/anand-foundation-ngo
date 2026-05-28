import type { Metadata } from "next";

import ImpactClient from "./ImpactClient";

export const metadata: Metadata = {
  title: "Impact & Success Stories — Anand Charitable Trust",

  description:
    "Discover the impact, community stories and social initiatives led by Anand Charitable Trust across Odisha.",

  openGraph: {
    title: "Impact & Success Stories — Anand Charitable Trust",

    description: "Real programmes, real communities and meaningful impact.",

    url: "/impact",
  },

  alternates: {
    canonical: "/impact",
  },
};

export default function ImpactPage() {
  return <ImpactClient />;
}

import type { Metadata } from "next";

import { Suspense } from "react";

import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate — Anand Charitable Trust",

  description:
    "Support education, training and community initiatives through secure donations to Anand Charitable Trust.",

  openGraph: {
    title: "Donate — Anand Charitable Trust",

    description: "Support meaningful community initiatives.",

    url: "/donate",
  },

  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonateClient />
    </Suspense>
  );
}

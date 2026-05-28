import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { FaqClient } from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "FAQ — Anand Charitable Trust",

  description:
    "Frequently asked questions about volunteering, donations, programmes and community support.",

  openGraph: {
    title: "FAQ — Anand Charitable Trust",

    description: "Common questions about our initiatives and involvement.",

    url: "/faq",
  },

  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="italic text-accent">answered</span>.
          </>
        }
        intro="
Find answers about our programmes, volunteering opportunities, donations and community initiatives.
"
      />

      <FaqClient />
    </>
  );
}

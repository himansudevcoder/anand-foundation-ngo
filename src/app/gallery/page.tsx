import type { Metadata } from "next";

import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Anand Charitable Trust",

  description:
    "Explore photographs, community programmes, training initiatives and moments from Anand Charitable Trust.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}

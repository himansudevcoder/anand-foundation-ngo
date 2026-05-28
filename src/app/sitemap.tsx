import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anandcharitabletrust.org";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/programmes`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/impact`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/volunteer`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/donate`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}

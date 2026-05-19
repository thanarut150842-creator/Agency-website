import type { MetadataRoute } from "next";

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://surfdigitalth.com").trim().replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all search engine crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",     // backend endpoints — ไม่ต้อง index
          "/_next/",   // Next.js internals
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}

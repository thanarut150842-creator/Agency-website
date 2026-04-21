import type { MetadataRoute } from "next";
import { articles } from "./blog/data/articles";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://app-src-alpha.vercel.app";

/** แปลงวันที่ไทย เช่น "15 เมษายน 2026" → Date */
const thaiMonths: Record<string, number> = {
  มกราคม: 1, กุมภาพันธ์: 2, มีนาคม: 3, เมษายน: 4,
  พฤษภาคม: 5, มิถุนายน: 6, กรกฎาคม: 7, สิงหาคม: 8,
  กันยายน: 9, ตุลาคม: 10, พฤศจิกายน: 11, ธันวาคม: 12,
};

function parseThaiDate(dateStr: string): Date {
  const parts = dateStr.trim().split(" ");
  if (parts.length !== 3) return new Date();
  const day = parseInt(parts[0], 10);
  const month = thaiMonths[parts[1]] ?? 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month - 1, day);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ── Static pages ─────────────────────────────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    /* ── Services ── */
    {
      url: `${base}/services/seo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/services/ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/services/ads/google-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/services/ads/meta-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/services/ads/tiktok-ads`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    /* ── Blog index ── */
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    /* ── Supporting pages ── */
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  /* ── Blog articles ────────────────────────────────────────────────── */
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: parseThaiDate(article.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

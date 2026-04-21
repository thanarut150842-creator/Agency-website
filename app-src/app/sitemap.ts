import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { articles } from "./blog/data/articles";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://app-src-alpha.vercel.app";

/* ─────────────────────────────────────────────────────────────────────
   Dynamic segment resolvers
   key  = directory name inside app/  (e.g. "[slug]")
   value = list of actual values to expand into
   → เพิ่ม dynamic route ใหม่แค่ใส่ record นี้
──────────────────────────────────────────────────────────────────────── */
const dynamicSegments: Record<string, string[]> = {
  "[slug]": articles.map((a) => a.slug),
};

/* ─────────────────────────────────────────────────────────────────────
   Priority + changeFrequency rules
──────────────────────────────────────────────────────────────────────── */
function getPriority(route: string): number {
  if (route === "/") return 1.0;
  if (route === "/services/seo") return 0.95;
  if (route.startsWith("/services/")) return 0.9;
  if (route === "/blog") return 0.8;
  if (route === "/contact") return 0.75;
  if (route === "/about") return 0.7;
  if (route.startsWith("/blog/")) return 0.7;
  return 0.6;
}

function getChangeFreq(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/" || route === "/blog") return "daily";
  if (route === "/about" || route === "/contact") return "monthly";
  return "weekly";
}

/* ─────────────────────────────────────────────────────────────────────
   lastModified — ใช้วันที่จาก article ถ้ามี ไม่งั้น now
──────────────────────────────────────────────────────────────────────── */
const thaiMonths: Record<string, number> = {
  มกราคม: 1, กุมภาพันธ์: 2, มีนาคม: 3, เมษายน: 4,
  พฤษภาคม: 5, มิถุนายน: 6, กรกฎาคม: 7, สิงหาคม: 8,
  กันยายน: 9, ตุลาคม: 10, พฤศจิกายน: 11, ธันวาคม: 12,
};

function parseThaiDate(dateStr: string): Date {
  const [d, m, y] = dateStr.trim().split(" ");
  const month = thaiMonths[m];
  if (!d || !month || !y) return new Date();
  return new Date(parseInt(y, 10), month - 1, parseInt(d, 10));
}

function getLastModified(route: string): Date {
  if (route.startsWith("/blog/")) {
    const slug = route.slice("/blog/".length);
    const article = articles.find((a) => a.slug === slug);
    if (article) return parseThaiDate(article.date);
  }
  return new Date();
}

/* ─────────────────────────────────────────────────────────────────────
   File-system scanner
   → อ่าน app/ directory recursively หา page.tsx ทุกไฟล์
   → expand [param] segments ด้วย dynamicSegments map
   → skip: _ prefix, api/, data/ และ directories ที่ไม่ใช่ route
──────────────────────────────────────────────────────────────────────── */
const SKIP_DIRS = new Set(["api", "data", "_components", "_lib", "_hooks"]);

function scanAppDir(dir: string, routePath = ""): string[] {
  const routes: string[] = [];

  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    // ถ้า directory นี้มี page.tsx → เป็น route
    const hasPage = entries.some(
      (e) => e.isFile() && (e.name === "page.tsx" || e.name === "page.ts")
    );
    if (hasPage) routes.push(routePath === "" ? "/" : routePath);

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const seg = entry.name;

      // Skip internal directories
      if (seg.startsWith("_") || SKIP_DIRS.has(seg)) continue;

      const childDir = join(dir, seg);

      if (seg.startsWith("[") && seg.endsWith("]")) {
        // Dynamic segment → expand ด้วย dynamicSegments map
        const values = dynamicSegments[seg] ?? [];
        for (const val of values) {
          routes.push(...scanAppDir(childDir, `${routePath}/${val}`));
        }
      } else {
        routes.push(...scanAppDir(childDir, `${routePath}/${seg}`));
      }
    }
  } catch {
    // directory อ่านไม่ได้ — ข้ามไป
  }

  return routes;
}

/* ─────────────────────────────────────────────────────────────────────
   Export
──────────────────────────────────────────────────────────────────────── */
export default function sitemap(): MetadataRoute.Sitemap {
  // process.cwd() = app-src/ ใน Vercel build context
  const appDir = join(process.cwd(), "app");
  const routes = scanAppDir(appDir);

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: getLastModified(route),
    changeFrequency: getChangeFreq(route),
    priority: getPriority(route),
  }));
}

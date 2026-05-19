/**
 * add-meta-titles.mjs
 * เพิ่ม metaTitle field ในบทความที่ title ยาวเกิน 50 chars
 * → meta title สั้น มี keyword + Surf Digital branding
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, "..", "app/blog/data/articles.ts");

// metaTitle สั้นๆ ที่จะ insert ก่อน title (ตาม slug)
const META_TITLES = {
  "why-hire-seo-agency": "จ้าง SEO Agency คุ้มไหม? เปรียบเทียบกับทำเอง | Surf Digital",
  "free-seo-tools": "เครื่องมือ SEO ฟรี 10+ ตัวที่ใช้ได้จริง 2026 | Surf Digital",
  "what-is-eeat": "E-E-A-T คืออะไร? คู่มือเพิ่ม Trust ให้เว็บ | Surf Digital",
  "google-search-console-guide": "วิธีใช้ Google Search Console ฉบับมือใหม่ | Surf Digital",
  "technical-seo-guide": "Technical SEO คืออะไร? คู่มือฉบับสมบูรณ์ | Surf Digital",
  "core-web-vitals-guide": "Core Web Vitals คืออะไร? ส่งผลต่อ Google ยังไง | Surf Digital",
  "what-is-backlink": "Backlink คืออะไร? วิธีสร้างให้ SEO ดีขึ้น | Surf Digital",
  "on-page-seo-checklist": "On-Page SEO คืออะไร? เช็กลิสต์ครบ 20 ข้อ | Surf Digital",
  "keyword-research-guide": "Keyword Research คืออะไร? วิธีหา Keyword | Surf Digital",
  "what-is-seo": "SEO คืออะไร? ทำไมธุรกิจต้องมี | Surf Digital",
  "google-ads-vs-meta-ads": "Google Ads vs Meta Ads เลือกอะไรดี? | Surf Digital",
  "local-seo-southern-thailand": "Local SEO ภาคใต้ ดันธุรกิจติด Google Maps | Surf Digital",
  "google-analytics-4-guide": "Google Analytics 4 คู่มือฉบับเจ้าของธุรกิจ | Surf Digital",
  "content-marketing-trust-leads": "Content Marketing สร้าง Trust ดึง Lead | Surf Digital",
  "seo-strategy-2026": "กลยุทธ์ SEO 2026 ที่ธุรกิจไทยต้องรู้ | Surf Digital",
};

let content = fs.readFileSync(FILE, "utf-8");
let count = 0;

for (const [slug, metaTitle] of Object.entries(META_TITLES)) {
  // Pattern: slug: "xxx",\n    title: "yyy",
  // เพิ่ม metaTitle ก่อน title
  const pattern = new RegExp(
    `(slug:\\s*"${slug}",\\s*\\n\\s*)(title:\\s*")`,
    "m"
  );
  if (pattern.test(content)) {
    content = content.replace(pattern, `$1metaTitle: "${metaTitle}",\n    $2`);
    console.log(`✅  ${slug}: ${metaTitle.length} chars`);
    count++;
  } else {
    console.log(`⚠️   ${slug}: pattern not found`);
  }
}

fs.writeFileSync(FILE, content, "utf-8");
console.log(`\n🎉  Added metaTitle to ${count} articles`);

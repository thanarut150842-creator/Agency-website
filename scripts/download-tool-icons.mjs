/**
 * download-tool-icons.mjs
 * โหลดไอคอนเครื่องมือทั้งหมดจาก SimpleIcons CDN และ favicon API
 * Save เป็น SVG/PNG ลงใน public/pic/tools/
 */

import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/pic/tools");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

// ── Tool definitions ─────────────────────────────────────────────────
// SimpleIcons-supported brands → SVG (best quality)
const SIMPLEICONS = [
  { file: "google-analytics.svg",       slug: "googleanalytics",      color: "E37400" },
  { file: "google-search-console.svg",  slug: "googlesearchconsole",  color: "458CF5" },
  { file: "google-tag-manager.svg",     slug: "googletagmanager",     color: "246FDB" },
  { file: "google-ads.svg",             slug: "googleads",            color: "4285F4" },
  { file: "meta.svg",                   slug: "meta",                 color: "0081FB" },
  { file: "hubspot.svg",                slug: "hubspot",              color: "FF7A59" },
  { file: "semrush.svg",                slug: "semrush",              color: "FF642D" },
  { file: "yoast.svg",                  slug: "yoast",                color: "A4286A" },
  { file: "cloudflare.svg",             slug: "cloudflare",           color: "F38020" },
  { file: "wappalyzer.svg",             slug: "wappalyzer",           color: "32B0C1" },
  { file: "ahrefs.svg",                 slug: "ahrefs",               color: "1F66D9" },
  { file: "pagespeedinsights.svg",      slug: "pagespeedinsights",    color: "4285F4" },
  { file: "googletrends.svg",           slug: "googletrends",         color: "4285F4" },
  { file: "lookerstudio.svg",           slug: "lookerstudio",         color: "4285F4" },
];

// Tools without SimpleIcons → use higher-res Google Favicon API (128px PNG)
const FAVICONS = [
  { file: "rich-results-test.png", domain: "search.google.com" },
  { file: "rank-math.png",         domain: "rankmath.com" },
  { file: "ubersuggest.png",       domain: "neilpatel.com" },
  { file: "se-ranking.png",        domain: "seranking.com" },
  { file: "screaming-frog.png",    domain: "screamingfrog.co.uk" },
];

// ── Helpers ───────────────────────────────────────────────────────────
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve(dest)));
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  console.log(`📥  Downloading ${SIMPLEICONS.length} SimpleIcons SVGs + ${FAVICONS.length} favicons...\n`);

  let success = 0;
  let failed = 0;

  for (const t of SIMPLEICONS) {
    const url = `https://cdn.simpleicons.org/${t.slug}/${t.color}`;
    const dest = path.join(OUT, t.file);
    try {
      await download(url, dest);
      console.log(`✅  ${t.file}`);
      success++;
    } catch (e) {
      console.error(`❌  ${t.file}: ${e.message}`);
      failed++;
    }
  }

  for (const t of FAVICONS) {
    const url = `https://www.google.com/s2/favicons?domain=${t.domain}&sz=128`;
    const dest = path.join(OUT, t.file);
    try {
      await download(url, dest);
      console.log(`✅  ${t.file}`);
      success++;
    } catch (e) {
      console.error(`❌  ${t.file}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n🎉  Done. ${success} ok, ${failed} failed.`);
  console.log(`📂  Saved to: public/pic/tools/`);
}

main().catch(console.error);

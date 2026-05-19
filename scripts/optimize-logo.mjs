/**
 * optimize-logo.mjs
 * Resize logo source PNG เป็นขนาดที่ Navbar ใช้จริง (600x180 รองรับ retina 3x)
 * + Generate WebP version
 */

import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const SRC = path.join(ROOT, "public/logo.png");
const OUT_PNG = path.join(ROOT, "public/logo.png");
const OUT_WEBP = path.join(ROOT, "public/logo.webp");

async function main() {
  const before = fs.statSync(SRC).size;
  console.log(`📥  Source: ${(before / 1024).toFixed(1)} KB`);

  const meta = await sharp(SRC).metadata();
  console.log(`🖼   Original: ${meta.width}×${meta.height}`);

  // Resize to 600x180 (display 200x60 with retina 3x)
  // ใช้ width 600 และ height auto เพื่อ preserve aspect ratio
  const optimized = await sharp(SRC)
    .resize({ width: 600, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 85 })
    .toBuffer();
  fs.writeFileSync(OUT_PNG, optimized);
  const afterPng = optimized.length;
  console.log(`✅  PNG optimized: ${(afterPng / 1024).toFixed(1)} KB (${Math.round((1-afterPng/before)*100)}% smaller)`);

  // WebP version (smaller still)
  const webp = await sharp(SRC)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toBuffer();
  fs.writeFileSync(OUT_WEBP, webp);
  console.log(`✅  WebP: ${(webp.length / 1024).toFixed(1)} KB`);

  console.log(`\n🎉  Done`);
}

main().catch((e) => { console.error("❌", e.message); process.exit(1); });

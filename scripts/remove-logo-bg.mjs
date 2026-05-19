/**
 * remove-logo-bg.mjs
 * อ่าน favicon ปัจจุบัน (icon.png) และ remove white background → transparent PNG
 * ผลลัพธ์: app/icon.png (transparent), public/favicon.ico (transparent)
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const SRC = path.join(ROOT, "public/pic/S.png"); // ใช้ S.png เป็นต้นฉบับ
const OUT_ICON = path.join(ROOT, "app/icon.png");
const OUT_FAV = path.join(ROOT, "public/favicon.ico");

const WHITE_THRESHOLD = 240; // pixel ที่ R,G,B > 240 จะถูกทำเป็น transparent

async function main() {
  console.log(`📥  Source: ${SRC}\n`);

  // Read raw pixel data
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`🖼   ${width}×${height}, ${channels} channels`);

  // Iterate pixels และทำ near-white → transparent
  let cleared = 0;
  let total = data.length / channels;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r > WHITE_THRESHOLD && g > WHITE_THRESHOLD && b > WHITE_THRESHOLD) {
      data[i + 3] = 0; // alpha = 0 (fully transparent)
      cleared++;
    } else if (r > 200 && g > 200 && b > 200) {
      // Edge anti-aliasing: ค่าใกล้ขาว → ลด alpha สัดส่วน
      const brightness = (r + g + b) / 3;
      const fade = (brightness - 200) / 40; // 0..1
      data[i + 3] = Math.round(255 * (1 - fade));
    }
  }
  console.log(`🗑   Removed ${cleared}/${total} (${((cleared/total)*100).toFixed(1)}%) white pixels`);

  // Write transparent PNG (square crop, trim transparent edges)
  const buffer = await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .trim() // ตัดขอบ transparent ออก
    .toBuffer();

  // Resize เป็น 512x512 สำหรับ favicon (square)
  const final = await sharp(buffer)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  // Save to app/icon.png
  await sharp(final).toFile(OUT_ICON);
  console.log(`✅  ${OUT_ICON}`);

  // Save to public/favicon.ico (PNG ในไฟล์ .ico ก็ใช้ได้บน browser modern)
  await sharp(final).toFile(OUT_FAV);
  console.log(`✅  ${OUT_FAV}`);

  console.log(`\n🚀  Done. รัน vercel --prod เพื่อ deploy`);
}

main().catch((err) => {
  console.error("❌  Error:", err.message);
  process.exit(1);
});

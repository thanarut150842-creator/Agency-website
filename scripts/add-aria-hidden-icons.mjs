/**
 * add-aria-hidden-icons.mjs
 * เพิ่ม aria-hidden="true" ให้ทุก <span className="material-symbols-outlined" ...>
 * เหตุผล: Icon names ('expand_more', 'arrow_forward') ปรากฏเป็น text ก่อนที่ font จะ load
 *         → Google นับเป็น text content (bad SEO)
 *         → Screen reader อ่าน "expand_more" เป็น text (bad a11y)
 * วิธีแก้: aria-hidden="true" → bot/AT ignore
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) files.push(full);
  }
  return files;
}

// Pattern: <span className="material-symbols-outlined"... (without aria-hidden already)
// ใช้ negative lookahead เพื่อไม่ duplicate
const PATTERN = /<span\s+(?![^>]*aria-hidden)(className="material-symbols-outlined"[^>]*)>/g;

let totalFixed = 0;
const files = walk(path.join(ROOT, "app")).concat(walk(path.join(ROOT, "components")));

for (const f of files) {
  const original = fs.readFileSync(f, "utf-8");
  const updated = original.replace(PATTERN, '<span aria-hidden="true" $1>');
  if (updated !== original) {
    const count = (original.match(PATTERN) || []).length;
    fs.writeFileSync(f, updated, "utf-8");
    console.log(`✅  ${path.relative(ROOT, f)}: +${count}`);
    totalFixed += count;
  }
}

console.log(`\n🎉  Added aria-hidden="true" to ${totalFixed} icon spans`);

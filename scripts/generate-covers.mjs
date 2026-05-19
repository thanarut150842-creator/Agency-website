/**
 * generate-covers.mjs
 * สร้าง Blog Cover Images ด้วย DALL-E 3
 *
 * Usage:
 *   npm run generate-covers              → สร้างทุกบทความที่ยังไม่มีรูปจริง
 *   npm run generate-covers what-is-seo  → สร้างเฉพาะ slug ที่ระบุ
 *   npm run generate-covers all          → สร้างใหม่ทั้งหมด (เขียนทับ)
 */

import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// ── Load articles (parse TypeScript ง่ายๆ ด้วย regex) ──────────────────
const articlesFile = fs.readFileSync(
  path.join(ROOT, "app/blog/data/articles.ts"),
  "utf-8"
);

// Extract slug, coverKeyword, coverKeyword2, category, image
const articleMatches = [...articlesFile.matchAll(
  /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"[\s\S]*?coverKeyword:\s*"([^"]+)"(?:[\s\S]*?coverKeyword2:\s*"([^"]*)")?/gm
)];

const articles = articleMatches.map((m) => ({
  slug: m[1],
  title: m[2],
  category: m[3],
  image: m[4],
  coverKeyword: m[5],
  coverKeyword2: m[6] || "",
}));

// ── Category → 3D illustration objects ─────────────────────────────────
const STYLE = {
  SEO: {
    objects: "search bar UI mockup, magnifying glass, ranking position #1 badge, ascending bar chart, browser window with search results, blue location pin",
    accentColor: "blue",
  },
  Ads: {
    objects: "smartphone mockup with social media feed, megaphone, advertisement creative cards, target with arrow, click cursor icon, $ coin, growth chart",
    accentColor: "blue with subtle purple",
  },
  Analytics: {
    objects: "analytics dashboard mockup with line graphs and KPI cards, donut chart showing traffic sources, data flow arrows, calendar widget, metric tiles",
    accentColor: "blue with orange Google Analytics accent",
  },
  Content: {
    objects: "browser window with article layout, megaphone, target with arrow, document icons, image placeholder, edit/text icons, growth chart bars",
    accentColor: "blue",
  },
  Strategy: {
    objects: "AI robot character with friendly face, search bar UI, brain icon, score gauge meter, top-pages list mockup, intent badges (informational/navigational/transactional)",
    accentColor: "blue",
  },
};

// ── Per-slug overrides — สำหรับบทความที่ต้องการ visual เฉพาะ ──────────
const SLUG_OVERRIDES = {
  "why-hire-seo-agency": {
    objects: "3D abstract handshake icon, briefcase with dollar sign, certificate/award medal with ribbon, 5-star rating badge, comparison split visual (single person silhouette vs team avatars represented as blue abstract figures without faces), checkmark verified shield, trust badge with thumbs up, growth arrow chart",
    accentColor: "blue with gold accent for trust badges",
  },
  "free-seo-tools": {
    objects: "3D toolbox open with various tools popping out (wrench, screwdriver), free price tag, browser windows showing different SEO tool dashboards (analytics graph, keyword list, backlink visualization), checkmark icons, dollar sign with strikethrough indicating free",
    accentColor: "blue with green accent for 'free' badges",
  },
  "what-is-eeat": {
    objects: "3D shield badge with checkmark labeled E-E-A-T, certificate scroll, star rating display, document with verified stamp, brain icon, balance scale of justice, magnifying glass focused on quality badge",
    accentColor: "blue with gold accent for verified/trust",
  },
  "google-search-console-guide": {
    objects: "3D Google Search Console dashboard mockup with performance line chart, coverage report donut, keyword list table, click metrics cards, settings gear icon",
    accentColor: "blue with red Google accent",
  },
  "technical-seo-guide": {
    objects: "3D website blueprint/wireframe layered structure, gear icons, code brackets symbol, server stack with glowing wires, sitemap tree diagram, robot icon for crawler, speed meter gauge",
    accentColor: "blue with subtle violet for technical",
  },
  "core-web-vitals-guide": {
    objects: "3D speed meter dial showing fast performance, stopwatch, three colored progress bars labeled LCP INP CLS, smartphone with loading bar reaching complete, lightning bolt icon",
    accentColor: "blue with green for performance pass",
  },
  "what-is-backlink": {
    objects: "3D chain links connecting multiple website thumbnail cards, network nodes with glowing connection lines, anchor icon, link strength meter, multiple website cards floating connected by light beams",
    accentColor: "blue with cyan for link energy",
  },
  "on-page-seo-checklist": {
    objects: "3D browser window with annotated SEO elements highlighted (title tag, H1, meta description), checklist with checkmarks, magnifying glass on page, ascending ranking position, document with structure outline",
    accentColor: "blue",
  },
  "keyword-research-guide": {
    objects: "3D magnifying glass over keyword list, search volume bar chart, target with bullseye and arrow, keyword cards floating with metrics, light bulb idea icon, branching keyword tree diagram",
    accentColor: "blue",
  },
  "what-is-seo": {
    objects: "3D Google search results page mockup with #1 ranking highlighted, ascending growth chart, magnifying glass, multiple website cards in ranking order, organic traffic flow arrows pointing to website",
    accentColor: "blue",
  },
};

function buildPrompt(article) {
  const s = SLUG_OVERRIDES[article.slug] ?? STYLE[article.category] ?? STYLE.SEO;
  return `Professional blog cover image for Thai digital marketing agency, 16:9 horizontal banner format.

STYLE: Modern light-theme 3D isometric tech illustration, bright clean magazine-cover aesthetic similar to premium SaaS marketing sites.

LAYOUT (CRITICAL — must follow exactly):
- LEFT 45% of canvas: Mostly empty space with very subtle gradient (white to very pale blue), reserved for text overlay to be added later. Keep this area mostly clean with only minimal decorative dots/lines.
- RIGHT 55% of canvas: Vibrant 3D rendered illustration cluster

BACKGROUND:
- Smooth horizontal gradient: pure white (#FFFFFF) on far left → soft blue (#E3F0FF) middle → vivid blue (#3B82F6) on right edge
- Subtle decorations: tiny dot grid pattern very faint, soft curving wave lines, small radial glow circles
- Premium clean look, NOT busy

RIGHT-SIDE 3D ILLUSTRATION CLUSTER (must include for "${article.title}"):
${s.objects}
Render as: glossy 3D isometric objects floating with soft drop shadows, ${s.accentColor} color palette with white highlights, blender/cinema 4D quality

COLOR PALETTE:
- Primary: royal blue (#0066CC) and bright cyan (#29B6F6) gradients
- Background: pure whites and pale blue gradients
- 3D objects: blue tones with white accents, subtle ${s.accentColor} accents
- Soft shadows, no harsh black

DECORATIVE ELEMENTS (subtle, throughout):
- Tiny scattered dots forming faint grid
- Curved abstract wave lines in background
- Small floating geometric shapes (cubes, spheres) in pale blue
- Soft radial glow blooms

DO NOT INCLUDE:
- People, faces, hands, body parts
- Real photos or stock photo aesthetic
- Dark or black backgrounds
- Heavy text labels (we add Thai text and SURF DIGITAL logo separately as overlay)
- Logos of any kind (we add ours separately)
- Cluttered or busy compositions

OUTPUT: Clean premium 3D illustration suitable for a Thai digital marketing blog cover, with empty left area for typography overlay.`;
}

// ── Download image ──────────────────────────────────────────────────────
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        file.close();
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve(destPath)));
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// ── Update articles.ts ──────────────────────────────────────────────────
function updateArticlesTs(slug, newImagePath) {
  let content = fs.readFileSync(
    path.join(ROOT, "app/blog/data/articles.ts"),
    "utf-8"
  );

  // Replace image field for this slug
  const slugPattern = new RegExp(
    `(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*)"([^"]+)"`,
    "m"
  );

  if (slugPattern.test(content)) {
    content = content.replace(slugPattern, `$1"${newImagePath}"`);
    fs.writeFileSync(
      path.join(ROOT, "app/blog/data/articles.ts"),
      content,
      "utf-8"
    );
    return true;
  }
  return false;
}

// ── Main ────────────────────────────────────────────────────────────────
async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("❌  OPENAI_API_KEY ไม่ได้ตั้งค่า\n   ใส่ใน .env.local แล้วรัน: npm run generate-covers");
    process.exit(1);
  }

  const openai = new OpenAI({ apiKey });
  const picDir = path.join(ROOT, "public/pic");
  if (!fs.existsSync(picDir)) fs.mkdirSync(picDir, { recursive: true });

  const targetSlug = process.argv[2]; // optional: specific slug or "all"

  let targets = articles;
  if (targetSlug && targetSlug !== "all") {
    targets = articles.filter((a) => a.slug === targetSlug);
    if (!targets.length) {
      console.error(`❌  ไม่พบ slug: "${targetSlug}"`);
      console.log("   Slugs ที่มี:", articles.map((a) => a.slug).join(", "));
      process.exit(1);
    }
  } else if (targetSlug !== "all") {
    // ไม่ระบุ slug → สร้างเฉพาะที่ยังไม่มีรูปจริง
    targets = articles.filter((a) => !a.image.startsWith("/"));
  }

  if (!targets.length) {
    console.log("✅  ทุกบทความมีรูปครบแล้ว ไม่ต้องสร้างเพิ่ม");
    return;
  }

  console.log(`\n🎨  จะสร้างรูปสำหรับ ${targets.length} บทความ:`);
  targets.forEach((a) => console.log(`   - ${a.slug} (${a.category})`));
  console.log(`\n💰  ค่าใช้จ่ายโดยประมาณ: ~$${(targets.length * 0.08).toFixed(2)}\n`);

  for (const article of targets) {
    console.log(`⏳  กำลังสร้าง: ${article.slug}...`);

    try {
      const prompt = buildPrompt(article);

      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        size: "1792x1024",
        quality: "standard",
        n: 1,
      });

      const imageUrl = response.data[0].url;
      const destPath = path.join(picDir, `${article.slug}.png`);
      const publicPath = `/pic/${article.slug}.png`;

      await downloadImage(imageUrl, destPath);
      updateArticlesTs(article.slug, publicPath);

      console.log(`✅  ${article.slug} → ${publicPath}`);
    } catch (err) {
      console.error(`❌  ${article.slug}: ${err.message}`);
    }

    // หน่วงนิดนึงเพื่อไม่ให้ rate limit
    if (targets.indexOf(article) < targets.length - 1) {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  console.log("\n🚀  เสร็จแล้ว! รัน deploy:\n   vercel --prod");
}

main().catch(console.error);

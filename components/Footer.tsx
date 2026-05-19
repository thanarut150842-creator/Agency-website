"use client";

import Link from "next/link";
import { useState } from "react";
import SurfLogo from "@/components/SurfLogo";

const NAV_LINKS = [
  { label: "บริการ SEO", href: "/services/seo" },
  { label: "บริการ Google Ads", href: "/services/ads/google-ads" },
  { label: "บริการ Meta Ads", href: "/services/ads/meta-ads" },
  { label: "บริการ TikTok Ads", href: "/services/ads/tiktok-ads" },
  { label: "เกี่ยวกับเรา", href: "/about" },
];

const BLOG_LINKS = [
  { label: "SEO คืออะไร", href: "/blog/what-is-seo" },
  { label: "Keyword Research คืออะไร", href: "/blog/keyword-research-guide" },
  { label: "Local SEO ภาคใต้", href: "/blog/local-seo-southern-thailand" },
  { label: "ดูบทความทั้งหมด", href: "/blog" },
];

const SOCIALS = [
  { icon: "chat", label: "LINE", href: "https://page.line.me/106bhqto" },
  { icon: "facebook", label: "Facebook", href: "#" },
  { icon: "photo_camera", label: "Instagram", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ backgroundColor: "#0b1728", color: "#ffffff" }}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-10">

        {/* ── Main Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1.4fr_1.4fr_1.6fr] gap-12 mb-14">

          {/* Col 1: Logo + desc + email */}
          <div>
            <div className="mb-5">
              <SurfLogo size="md" variant="light" />
            </div>
            <p className="text-sm leading-relaxed mb-8 thai-leading" style={{ color: "rgba(255,255,255,0.55)", fontWeight: 200, maxWidth: "22rem" }}>
              ดิจิทัลเอเจนซี่ภาคใต้ครบวงจร ให้บริการ SEO, Google Ads, Meta Ads
              และ TikTok Ads สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา และทั่วภาคใต้
            </p>
            {/* Email subscribe row */}
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ใส่เว็บไซต์หรือเพจธุรกิจ"
                className="flex-1 min-w-0 px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontWeight: 200,
                  fontFamily: "inherit",
                }}
              />
              <Link
                href="/contact"
                className="flex-shrink-0 px-4 py-3 rounded-xl text-sm text-white flex items-center gap-1 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#00658d", fontWeight: 300, textDecoration: "none", whiteSpace: "nowrap" }}
              >
                รับแผนฟรี
              </Link>
            </div>
          </div>

          {/* Col 2: สิ่งที่น่าสนใจ */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              สิ่งที่น่าสนใจ
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)", fontWeight: 200, textDecoration: "none" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: บทความ */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              บทความที่น่าสนใจ
            </h4>
            <ul className="flex flex-col gap-3">
              {BLOG_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)", fontWeight: 200, textDecoration: "none" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: ติดต่อ */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              ติดต่อ Surf Digital
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: 18, color: "#00aeef", marginTop: 1 }}>location_on</span>
                <span className="text-sm thai-leading" style={{ color: "rgba(255,255,255,0.65)", fontWeight: 200, lineHeight: 1.6 }}>
                  14/3 อำเภอเมือง กระบี่ 81000<br />
                  นัดลงพื้นที่ได้ทั่วภาคใต้
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: 18, color: "#00aeef" }}>mail</span>
                <a href="mailto:hello@surfdigitalth.com" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontWeight: 200, textDecoration: "none" }}>
                  hello@surfdigitalth.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: 18, color: "#00aeef" }}>call</span>
                <a href="tel:0952899881" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontWeight: 200, textDecoration: "none" }}>
                  095-289-9881
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)", fontWeight: 200 }}
        >
          <span>นโยบายความเป็นส่วนตัวและข้อมูล</span>
          <span>Copyright © 2026 Surf Digital Agency Co., Ltd. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

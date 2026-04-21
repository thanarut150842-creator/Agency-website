"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ SEO", href: "/services/seo" },
  { label: "บริการ Ads", href: "/services/ads" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.08)" }}
    >
      {/* ── Row 1: Logo + Nav links + CTA ─────────────────── */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs tracking-tight"
              style={{ background: "linear-gradient(135deg,#00658d,#00aeef)", fontWeight: 400 }}
            >
              AP
            </div>
            <span style={{ fontSize: "1.1rem", fontWeight: 400, color: "#005d90", letterSpacing: "-0.01em" }}>
              AP Digital
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm transition-colors"
                  style={{
                    color: active ? "#005d90" : "#3e4850",
                    fontWeight: active ? 300 : 200,
                    backgroundColor: active ? "rgba(0,93,144,0.07)" : "transparent",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA – desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full text-white text-sm transition-all hover:opacity-90 active:scale-95"
              style={{
                padding: "0.55rem 1.3rem",
                background: "linear-gradient(135deg,#00658d 0%,#00aeef 100%)",
                fontWeight: 300,
                textDecoration: "none",
                boxShadow: "0 6px 20px -4px rgba(0,174,239,0.45)",
              }}
            >
              รับแผนกลยุทธ์
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
            </Link>

            {/* Hamburger – mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setOpen(!open)}
              aria-label="เปิด/ปิดเมนู"
            >
              <span className={`block w-5 bg-[#191c1e] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px] h-px" : "h-px"}`} />
              <span className={`block w-5 h-px bg-[#191c1e] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 bg-[#191c1e] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px] h-px" : "h-px"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Row 2: Secondary info bar (desktop only) ────────── */}
      <div
        className="hidden md:block border-t"
        style={{ borderColor: "rgba(0,0,0,0.06)", backgroundColor: "rgba(247,249,251,0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-9">

          {/* Left: portfolio / award link */}
          <Link
            href="/about"
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-[#005d90] group"
            style={{ color: "#3e4850", fontWeight: 200, textDecoration: "none" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: "#00aeef" }}>emoji_events</span>
            ดูผลงานและรางวัลของเรา
            <span
              className="material-symbols-outlined transition-transform group-hover:translate-x-0.5"
              style={{ fontSize: 13 }}
            >
              arrow_forward
            </span>
          </Link>

          {/* Right: contact channels + brand */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0952899881"
              className="flex items-center gap-1.5 text-xs transition-colors hover:text-[#005d90]"
              style={{ color: "#3e4850", fontWeight: 200, textDecoration: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 13, color: "#3e4850" }}>call</span>
              095-289-9881
            </a>

            <span style={{ color: "rgba(0,0,0,0.13)", fontSize: "0.75rem" }}>|</span>

            <a
              href="https://line.me/ti/p/@apdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
              style={{ color: "#00b900", fontWeight: 200, textDecoration: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>chat</span>
              แชทผ่านไลน์
            </a>

            <span style={{ color: "rgba(0,0,0,0.13)", fontSize: "0.75rem" }}>|</span>

            {/* Mini brand mark */}
            <div className="flex items-center gap-1.5">
              <div
                className="w-4 h-4 rounded flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg,#00658d,#00aeef)", fontSize: "0.5rem", fontWeight: 400 }}
              >
                AP
              </div>
              <span className="text-xs" style={{ color: "#3e4850", fontWeight: 200 }}>
                AP <span style={{ fontWeight: 300, color: "#005d90" }}>DIGITAL</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm"
                style={{
                  color: active ? "#005d90" : "#181c20",
                  fontWeight: active ? 300 : 200,
                  textDecoration: "none",
                  borderBottom: active ? "2px solid #005d90" : "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-black/5">
            <a
              href="tel:0952899881"
              className="flex items-center gap-2 rounded-full text-sm"
              style={{ padding: "0.7rem 1.25rem", color: "#00658d", backgroundColor: "rgba(0,101,141,0.08)", fontWeight: 200, textDecoration: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>call</span>
              095-289-9881
            </a>
            <a
              href="https://line.me/ti/p/@apdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full text-sm"
              style={{ padding: "0.7rem 1.25rem", color: "#00b900", backgroundColor: "rgba(0,185,0,0.08)", fontWeight: 200, textDecoration: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>chat</span>
              แชทผ่านไลน์
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full text-white text-sm"
              style={{ padding: "0.75rem 1.5rem", background: "linear-gradient(135deg,#00658d,#00aeef)", fontWeight: 300, textDecoration: "none" }}
            >
              รับแผนกลยุทธ์
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

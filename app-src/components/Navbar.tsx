"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const serviceLinks = [
  {
    label: "บริการ SEO",
    href: "/services/seo",
    icon: "search",
    desc: "ติดอันดับ Google วัดผลได้จริง",
    color: "#00658d",
  },
  {
    label: "Google Ads",
    href: "/services/ads/google-ads",
    icon: "ads_click",
    desc: "Search, Display & YouTube Ads",
    color: "#4285F4",
  },
  {
    label: "Meta Ads",
    href: "/services/ads/meta-ads",
    icon: "thumb_up",
    desc: "Facebook & Instagram Ads",
    color: "#0081FB",
  },
  {
    label: "TikTok Ads",
    href: "/services/ads/tiktok-ads",
    icon: "music_video",
    desc: "Short-form Video Ads",
    color: "#fe2c55",
  },
];

const navLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServiceActive = pathname.startsWith("/services");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm transition-colors"
                style={{
                  color: isServiceActive ? "#005d90" : "#3e4850",
                  fontWeight: isServiceActive ? 300 : 200,
                  backgroundColor: isServiceActive ? "rgba(0,93,144,0.07)" : "transparent",
                  cursor: "pointer",
                  border: "none",
                  background: isServiceActive ? "rgba(0,93,144,0.07)" : "transparent",
                }}
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                บริการ
                <span
                  className="material-symbols-outlined transition-transform duration-200"
                  style={{ fontSize: 16, transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 py-2"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1rem",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {/* Overview link */}
                  <Link
                    href="/services/ads"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 mx-2 mb-1 rounded-lg text-xs transition-colors hover:bg-[#f2f4f6]"
                    style={{ color: "#6e7881", fontWeight: 200, textDecoration: "none" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>grid_view</span>
                    ภาพรวมบริการ Ads ทั้งหมด
                  </Link>
                  <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.06)", margin: "0.25rem 1rem 0.5rem" }} />

                  {serviceLinks.map((svc) => {
                    const active = pathname === svc.href || pathname.startsWith(svc.href + "/");
                    return (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-all hover:bg-[#f2f4f6]"
                        style={{ textDecoration: "none", backgroundColor: active ? "rgba(0,93,144,0.06)" : "transparent" }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${svc.color}15` }}
                        >
                          <span className="material-symbols-outlined" style={{ color: svc.color, fontSize: 18 }}>{svc.icon}</span>
                        </div>
                        <div>
                          <p className="text-sm" style={{ fontWeight: active ? 300 : 200, color: active ? "#005d90" : "#191c1e" }}>{svc.label}</p>
                          <p className="text-xs" style={{ fontWeight: 200, color: "#6e7881" }}>{svc.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other nav links */}
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
          {/* Services accordion */}
          <button
            className="flex items-center justify-between w-full py-3 text-sm text-left"
            style={{
              color: isServiceActive ? "#005d90" : "#181c20",
              fontWeight: isServiceActive ? 300 : 200,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            บริการ
            <span
              className="material-symbols-outlined transition-transform duration-200"
              style={{ fontSize: 18, transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              expand_more
            </span>
          </button>

          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 pl-2 mb-1">
              <Link
                href="/services/ads"
                onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                className="flex items-center gap-2 py-2 text-xs"
                style={{ color: "#6e7881", fontWeight: 200, textDecoration: "none" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>grid_view</span>
                ภาพรวม Paid Ads ทั้งหมด
              </Link>
              {serviceLinks.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                  className="flex items-center gap-3 py-2.5 rounded-xl px-3"
                  style={{ textDecoration: "none", backgroundColor: "rgba(0,0,0,0.025)" }}
                >
                  <span className="material-symbols-outlined" style={{ color: svc.color, fontSize: 18 }}>{svc.icon}</span>
                  <div>
                    <p className="text-sm" style={{ fontWeight: 200, color: "#191c1e" }}>{svc.label}</p>
                    <p className="text-xs" style={{ fontWeight: 200, color: "#6e7881" }}>{svc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

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

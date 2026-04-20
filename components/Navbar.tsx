"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ SEO", href: "/services/seo" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(247,249,255,0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 32px 64px -15px rgba(24,28,32,0.05)",
      }}
    >
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl no-underline"
          style={{ letterSpacing: "-0.02em", color: "#005d90", fontWeight: 400, textDecoration: "none" }}
        >
          AP Digital
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: active ? "#005d90" : "#181c20",
                  fontWeight: active ? 300 : 200,
                  opacity: active ? 1 : 0.8,
                  borderBottom: active ? "2px solid #005d90" : "none",
                  paddingBottom: active ? "4px" : 0,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA group – desktop only */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0952899881"
            className="flex items-center gap-1.5 rounded-full text-sm transition-colors"
            style={{ padding: "0.625rem 1.25rem", color: "#00658d", backgroundColor: "rgba(0,101,141,0.08)", fontWeight: 200, textDecoration: "none" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
            095-289-9881
          </a>
          <a
            href="https://line.me/ti/p/@apdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full text-sm transition-colors"
            style={{ padding: "0.625rem 1.25rem", color: "#00b900", backgroundColor: "rgba(0,185,0,0.08)", fontWeight: 200, textDecoration: "none" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
            Add Line
          </a>
          <Link
            href="/contact"
            className="rounded-full text-white transition-colors"
            style={{ padding: "0.625rem 1.5rem", backgroundColor: "#00aeef", fontWeight: 300, textDecoration: "none", boxShadow: "0 8px 24px -4px rgba(0,174,239,0.3)" }}
          >
            รับแผนกลยุทธ์
          </Link>
        </div>

        {/* Hamburger – mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 bg-[#191c1e] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px] h-px" : "h-px"}`} />
          <span className={`block w-6 h-px bg-[#191c1e] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 bg-[#191c1e] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px] h-px" : "h-px"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3"
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
              style={{ padding: "0.75rem 1.25rem", color: "#00658d", backgroundColor: "rgba(0,101,141,0.08)", fontWeight: 200, textDecoration: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
              095-289-9881
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-center rounded-full text-white"
              style={{ padding: "0.75rem 1.5rem", backgroundColor: "#00aeef", fontWeight: 300, textDecoration: "none" }}
            >
              รับแผนกลยุทธ์
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

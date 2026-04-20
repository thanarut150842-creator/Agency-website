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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(247,249,255,0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 32px 64px -15px rgba(24,28,32,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          maxWidth: "80rem",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            color: "#005d90",
            fontWeight: 400,
            textDecoration: "none",
          }}
        >
          AP Digital
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
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

        {/* CTA group */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Call */}
          <a
            href="tel:0952899881"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 200,
              textDecoration: "none",
              color: "#00658d",
              backgroundColor: "rgba(0,101,141,0.08)",
              fontSize: "0.9rem",
              transition: "background-color 0.2s",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
            095-289-9881
          </a>

          {/* Line */}
          <a
            href="https://line.me/ti/p/@apdigital"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 200,
              textDecoration: "none",
              color: "#00b900",
              backgroundColor: "rgba(0,185,0,0.08)",
              fontSize: "0.9rem",
              transition: "background-color 0.2s",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
            Add Line
          </a>

          {/* Quote CTA */}
          <Link
            href="/contact"
            style={{
              backgroundColor: "#00aeef",
              color: "#ffffff",
              padding: "0.625rem 1.5rem",
              borderRadius: "9999px",
              fontWeight: 300,
              textDecoration: "none",
              boxShadow: "0 8px 24px -4px rgba(0,174,239,0.3)",
              transition: "background-color 0.2s",
            }}
          >
            รับแผนกลยุทธ์
          </Link>
        </div>
      </div>
    </nav>
  );
}

import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ["200", "300", "400"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AP Digital | Advanced Performance Digital Agency",
  description:
    "พาร์ทเนอร์ด้านการเติบโตแบบดิจิทัลที่เข้าใจบริบทท้องถิ่น ให้บริการ SEO และการตลาดออนไลน์ครบวงจร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={kanit.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f7f9fb] text-[#191c1e] antialiased" style={{ fontFamily: "var(--font-kanit), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

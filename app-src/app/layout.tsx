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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://app-src-alpha.vercel.app"
  ),
  title: "รับทำ SEO ภาคใต้ | AP Digital Agency ภูเก็ต กระบี่ หาดใหญ่",
  description:
    "AP Digital Agency รับทำ SEO และการตลาดออนไลน์ครบวงจรสำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ ติดอันดับ Google ด้วยกลยุทธ์วัดผลได้จริง ปรึกษาฟรีไม่มีข้อผูกมัด",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "NWHTVRQUHWZ5Q_cJ7VmnJd4xSV2gg9zahj5FaWcEUlg",
  },
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

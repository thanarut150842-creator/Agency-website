import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 – ไม่พบหน้านี้ | Surf Digital Agency",
  description: "ขออภัย ไม่พบหน้าที่คุณกำลังมองหา กลับสู่หน้าแรกหรือเลือกบริการ SEO และ Digital Marketing ของเรา",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="pt-32 pb-20 min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#f7f9fb" }}
      >
        <div className="text-center px-4 max-w-xl mx-auto">
          {/* Big number */}
          <div
            className="text-center mb-6 select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 10rem)",
              fontWeight: 400,
              lineHeight: 1,
              background: "linear-gradient(135deg, #00658d 0%, #00aeef 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          <div
            className="w-16 h-1 rounded-full mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, #00658d, #00aeef)" }}
          />

          <h1 className="text-3xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
            ไม่พบหน้าที่คุณค้นหา
          </h1>
          <p className="text-[#3e4850] thai-leading mb-10" style={{ fontWeight: 200, lineHeight: 1.8 }}>
            หน้านี้อาจถูกย้าย ลบ หรือ URL ไม่ถูกต้อง
            ลองกลับไปที่หน้าแรกหรือเลือกหน้าที่ต้องการจากเมนูด้านบน
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #00658d, #00aeef)",
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>home</span>
              กลับหน้าแรก
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:shadow-md"
              style={{
                backgroundColor: "#ffffff",
                color: "#00658d",
                fontWeight: 300,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,33,71,0.06)",
              }}
            >
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>support_agent</span>
              ติดต่อเรา
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14">
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#00658d", fontWeight: 300 }}>
              หน้าที่มักเข้าชม
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "บริการ SEO", href: "/services/seo" },
                { label: "บทความ", href: "/blog" },
                { label: "เกี่ยวกับเรา", href: "/about" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full text-sm transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#3e4850",
                    fontWeight: 200,
                    textDecoration: "none",
                    boxShadow: "0 2px 12px rgba(0,33,71,0.06)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

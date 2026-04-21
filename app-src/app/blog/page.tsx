import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "./data/articles";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "บทความ SEO & Digital Marketing ภาคใต้ | AP Digital Agency",
  description: "อัปเดตเทรนด์และกลยุทธ์ SEO การตลาดดิจิทัลสำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ คลังความรู้จากทีมผู้เชี่ยวชาญ AP Digital Agency",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20" style={{ backgroundColor: "#f7f9fb" }}>
        <div className={wrap}>
          {/* ── Hero ───────────────────────────────────────── */}
          <header className="mb-16" style={{ maxWidth: "48rem" }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6"
              style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              KNOWLEDGE HUB
            </div>
            <h1 className="text-5xl text-[#191c1e] leading-tight mb-6 tracking-tight" style={{ fontWeight: 400 }}>
              คลังความรู้ SEO &{" "}
              <span style={{ color: "#00aeef" }}>Digital Marketing ภาคใต้</span>
            </h1>
            <p className="text-lg text-[#3e4850] leading-relaxed" style={{ fontWeight: 200 }}>
              อัปเดตเทรนด์และกลยุทธ์ SEO การตลาดออนไลน์สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่
              และทั่วภาคใต้ โดยทีมผู้เชี่ยวชาญ AP Digital Agency
            </p>
          </header>

          {/* ── Filters ─────────────────────────────────────── */}
          <section className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {["ทั้งหมด", "SEO", "Ads", "Strategy", "Content"].map((f, i) => (
                <button
                  key={f}
                  className="px-6 py-2 rounded-full transition-all"
                  style={{
                    backgroundColor: i === 0 ? "#00658d" : "#e0e3e5",
                    color: i === 0 ? "#ffffff" : "#3e4850",
                    fontWeight: 200,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-96">
              <span
                className="material-symbols-outlined absolute"
                style={{ left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#6e7881" }}
              >
                search
              </span>
              <input
                type="text"
                placeholder="ค้นหาบทความที่สนใจ..."
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none"
                style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
              />
            </div>
          </section>

          {/* ── Featured Article ────────────────────────────── */}
          <article
            className="group mb-16 overflow-hidden"
            style={{ backgroundColor: "#f2f4f6", borderRadius: "1.5rem" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full uppercase" style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}>
                    EDITOR&apos;S PICK
                  </span>
                  <span className="text-xs text-[#00658d]" style={{ fontWeight: 200 }}>{articles[0].category}</span>
                </div>
                <h2 className="text-3xl thai-leading mb-4" style={{ fontWeight: 400, lineHeight: 1.3 }}>
                  {articles[0].title}
                </h2>
                <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.7 }}>
                  {articles[0].metaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6e7881]" style={{ fontWeight: 200 }}>{articles[0].date} · {articles[0].readTime}</span>
                  <Link
                    href={`/blog/${articles[0].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm"
                    style={{ backgroundColor: "#00658d", fontWeight: 300, textDecoration: "none" }}
                  >
                    อ่านบทความ
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden" style={{ minHeight: "16rem" }}>
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </article>

          {/* ── Article Grid ────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 4px 24px rgba(0,33,71,0.06)" }}
                >
                  <div className="relative overflow-hidden" style={{ height: "13rem" }}>
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ backgroundColor: a.categoryColor, color: "#2d476f", fontWeight: 200 }}
                      >
                        {a.category}
                      </span>
                      <span className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{a.readTime}</span>
                    </div>
                    <h3 className="text-lg mb-3 thai-leading group-hover:text-[#00658d] transition-colors" style={{ fontWeight: 300, color: "#191c1e", lineHeight: 1.5 }}>
                      {a.title}
                    </h3>
                    <p className="text-sm text-[#3e4850] thai-leading mb-6 line-clamp-2" style={{ fontWeight: 200, lineHeight: 1.7 }}>
                      {a.metaDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{a.date}</span>
                      <span className="text-xs text-[#00658d]" style={{ fontWeight: 300 }}>อ่านต่อ →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Pagination ──────────────────────────────────── */}
          <div className="flex justify-center items-center gap-4 mb-24">
            {["chevron_left", "1", "2", "3", "chevron_right"].map((p, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{
                  backgroundColor: p === "1" ? "#00658d" : "#eceef0",
                  color: p === "1" ? "#ffffff" : "#3e4850",
                  fontWeight: 200,
                }}
              >
                {p === "chevron_left" || p === "chevron_right"
                  ? <span className="material-symbols-outlined">{p}</span>
                  : p}
              </button>
            ))}
          </div>

          {/* ── Lead Form ───────────────────────────────────── */}
          <section
            className="p-8 md:p-16 border"
            style={{
              backgroundColor: "#f2f4f6",
              borderRadius: "2.5rem",
              borderColor: "rgba(189,200,209,0.1)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <h2 className="text-4xl text-[#191c1e] mb-6 tracking-tight" style={{ fontWeight: 400 }}>
                  ปรึกษาผู้เชี่ยวชาญ<br />
                  <span style={{ color: "#00658d" }}>เพื่อยกระดับธุรกิจของคุณ</span>
                </h2>
                <p className="text-lg text-[#3e4850] leading-relaxed mb-8" style={{ fontWeight: 200 }}>
                  หากคุณต้องการทีมงานมืออาชีพมาช่วยวางกลยุทธ์การตลาดดิจิทัล
                  กรอกข้อมูลเพื่อให้เราติดต่อกลับโดยเร็วที่สุด
                </p>
                {["วิเคราะห์ธุรกิจเบื้องต้นฟรี", "วางแผนกลยุทธ์ตามเป้าหมาย (KPI)"].map((b) => (
                  <div key={b} className="flex items-center gap-4 text-[#3e4850] mb-4">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#c6e7ff" }}
                    >
                      <span className="material-symbols-outlined text-xl" style={{ color: "#00658d" }}>check_circle</span>
                    </span>
                    <span style={{ fontWeight: 200 }}>{b}</span>
                  </div>
                ))}
              </div>

              <div
                className="p-8 shadow-xl border"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "1.5rem",
                  borderColor: "rgba(189,200,209,0.2)",
                }}
              >
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { label: "ชื่อ-นามสกุล", id: "name", placeholder: "ระบุชื่อของคุณ", type: "text" },
                      { label: "เบอร์โทรศัพท์", id: "phone", placeholder: "08x-xxx-xxxx", type: "tel" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>{f.label}</label>
                        <input
                          type={f.type}
                          id={f.id}
                          placeholder={f.placeholder}
                          className="w-full px-5 py-3 rounded-xl outline-none"
                          style={{ backgroundColor: "#f7f9fb", border: "none", fontWeight: 200 }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>อีเมลติดต่อ</label>
                    <input
                      type="email"
                      placeholder="example@company.com"
                      className="w-full px-5 py-3 rounded-xl outline-none"
                      style={{ backgroundColor: "#f7f9fb", border: "none", fontWeight: 200 }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>ข้อความเพิ่มเติม</label>
                    <textarea
                      rows={4}
                      placeholder="บอกเราสั้นๆ ถึงสิ่งที่คุณต้องการปรึกษา..."
                      className="w-full px-5 py-3 rounded-xl outline-none resize-none"
                      style={{ backgroundColor: "#f7f9fb", border: "none", fontWeight: 200 }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white hover:brightness-110 active:scale-[0.98] transition-all shadow-lg"
                    style={{
                      fontWeight: 200,
                      backgroundColor: "#00658d",
                      boxShadow: "0 16px 32px -8px rgba(0,101,141,0.3)",
                    }}
                  >
                    ส่งข้อมูลเพื่อรับคำปรึกษา
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

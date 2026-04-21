import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ Google Ads ภาคใต้ ภูเก็ต กระบี่ หาดใหญ่ | AP Digital Agency",
  description:
    "รับทำ Google Ads สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ วางแผน Keyword เขียน Ad Copy ตั้ง Bidding Strategy และ Optimize แบบ Real-time เพื่อ ROAS สูงสุด ปรึกษาฟรีไม่มีข้อผูกมัด",
  alternates: {
    canonical: "/services/ads/google-ads",
  },
};

const color = "#4285F4";
const bgLight = "rgba(66,133,244,0.08)";

const features = [
  { icon: "search", title: "Search Ads", desc: "ปรากฏในหน้าแรก Google สำหรับ Keyword ที่ลูกค้าในภาคใต้กำลังค้นหาอยู่ขณะนั้น ตรงความต้องการ ตรงเวลา" },
  { icon: "track_changes", title: "Display & Remarketing", desc: "ติดตามลูกค้าที่เคยเยี่ยมชมเว็บไซต์ของคุณให้กลับมา Convert ด้วย Banner ที่ปรากฏทั่ว Google Display Network" },
  { icon: "shopping_cart", title: "Google Shopping Ads", desc: "แสดงสินค้าพร้อมราคาและรูปภาพโดยตรงในหน้าผลการค้นหา เหมาะสำหรับธุรกิจ E-Commerce ที่ต้องการ ROAS สูง" },
  { icon: "play_circle", title: "YouTube Ads", desc: "สร้าง Brand Awareness และ Storytelling ด้วยโฆษณาวิดีโอบน YouTube เข้าถึงกลุ่มเป้าหมายในภาคใต้อย่างกว้างขวาง" },
  { icon: "auto_awesome", title: "Performance Max", desc: "ให้ AI ของ Google กระจายโฆษณาอัตโนมัติทุก Placement — Search, Display, YouTube, Gmail, Maps — ด้วย Budget เดียว" },
  { icon: "map", title: "Google Maps / Local Ads", desc: "เหมาะสำหรับธุรกิจ Local ในภูเก็ต กระบี่ หาดใหญ่ ให้ลูกค้าในพื้นที่ค้นหาเจอธุรกิจของคุณบน Google Maps ก่อนคู่แข่ง" },
];

const process = [
  { step: "01", title: "Audit & Research", desc: "วิเคราะห์ Ad Account เดิม (ถ้ามี) ทำ Keyword Research เชิงลึกตลาดภาคใต้ และวิเคราะห์คู่แข่งก่อนเริ่ม" },
  { step: "02", title: "Campaign Structure", desc: "วางโครงสร้างแคมเปญ Ad Group และ Keyword อย่างละเอียด แยก Match Type ให้ตรง Search Intent ของกลุ่มเป้าหมาย" },
  { step: "03", title: "Creative & Copy", desc: "เขียน Headline + Description ที่ผ่าน A/B Testing ออกแบบ Display Banner และ YouTube Ad Concept" },
  { step: "04", title: "Launch & Track", desc: "ตั้ง Conversion Tracking ผ่าน Google Tag Manager ทุก Micro + Macro Conversion ก่อน Launch จริง" },
  { step: "05", title: "Optimize Weekly", desc: "Optimize Bid, Negative Keywords, Ad Rotation, Audience Segment ทุกสัปดาห์ พร้อม Report รายเดือน" },
];

const kpis = [
  { value: "3–8x", label: "ROAS เฉลี่ย", sub: "จากแคมเปญที่ผ่านมา" },
  { value: "-40%", label: "ลด CPC เฉลี่ย", sub: "หลัง Optimize ครบ 60 วัน" },
  { value: "72h", label: "เริ่มเห็นผล", sub: "ภายใน 72 ชั่วโมงหลัง Launch" },
  { value: "98%", label: "ต่ออายุสัญญา", sub: "ลูกค้า Google Ads ของเรา" },
];

const industries = [
  { icon: "hotel", label: "โรงแรม & Hospitality", city: "ภูเก็ต · กระบี่" },
  { icon: "villa", label: "อสังหาริมทรัพย์", city: "ภูเก็ต · หาดใหญ่" },
  { icon: "sailing", label: "Tour & Activity", city: "กระบี่ · พังงา" },
  { icon: "local_hospital", label: "คลินิก & Medical", city: "หาดใหญ่ · ภูเก็ต" },
  { icon: "restaurant", label: "ร้านอาหาร & F&B", city: "ทั่วภาคใต้" },
  { icon: "storefront", label: "E-Commerce & Retail", city: "ทั่วภาคใต้" },
];

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <header className="relative overflow-hidden pt-36 pb-24" style={{ backgroundColor: "#f7f9fb" }}>
          {/* BG decor */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute rounded-full blur-[140px]"
              style={{ top: "-8rem", right: "-4rem", width: "50rem", height: "50rem", background: "radial-gradient(circle, rgba(66,133,244,0.12) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(rgba(66,133,244,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.7 }}
            />
          </div>

          <div className={`${wrap} relative z-10`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#6e7881] mb-8" style={{ fontWeight: 200 }}>
              <Link href="/" style={{ textDecoration: "none", color: "#6e7881" }}>หน้าแรก</Link>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <Link href="/services/ads" style={{ textDecoration: "none", color: "#6e7881" }}>บริการ Ads</Link>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <span style={{ color: color }}>Google Ads</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: bgLight, border: `1px solid rgba(66,133,244,0.25)` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                Google Ads Agency · ภูเก็ต | กระบี่ | หาดใหญ่
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h1
                  className="text-display mb-6 thai-leading"
                  style={{ fontWeight: 400, fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "#191c1e" }}
                >
                  รับทำ{" "}
                  <span style={{ color }}>Google Ads</span>{" "}
                  ภาคใต้<br />
                  ให้ธุรกิจปรากฏ เมื่อลูกค้า<br />กำลังค้นหาอยู่
                </h1>
                <p className="text-lg text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}>
                  Google Ads คือช่องทางโฆษณาที่ทรงพลังที่สุดสำหรับธุรกิจที่ต้องการเข้าถึงลูกค้าที่มีความตั้งใจซื้อสูง
                  ไม่ว่าจะเป็นนักท่องเที่ยวที่ค้นหาโรงแรมในภูเก็ต นักลงทุนสนใจอสังหาฯ กระบี่
                  หรือลูกค้าในหาดใหญ่ที่ต้องการบริการของคุณในทันที
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: `linear-gradient(135deg,${color} 0%,#34a8ff 100%)`, boxShadow: `0 16px 40px -8px ${color}55` }}
                  >
                    รับ Free Google Ads Audit
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>ads_click</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base transition-all hover:bg-[#d4d7d9]"
                    style={{ fontWeight: 300, color: "#191c1e", backgroundColor: "#e0e3e5" }}
                  >
                    ปรึกษาฟรี
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat_bubble</span>
                  </Link>
                </div>

                {/* Ad type tags */}
                <div className="flex flex-wrap gap-2">
                  {["Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads", "Performance Max", "Local Ads"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: bgLight, color, fontWeight: 300 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: KPI cards */}
              <div className="grid grid-cols-2 gap-4">
                {kpis.map((k) => (
                  <div
                    key={k.label}
                    className="p-6 flex flex-col gap-2"
                    style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    <p className="text-3xl" style={{ fontWeight: 400, color }}>{k.value}</p>
                    <p className="text-sm text-[#191c1e]" style={{ fontWeight: 300 }}>{k.label}</p>
                    <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{k.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── What is Google Ads ────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>ทำไม Google Ads</p>
                <h2 className="text-4xl mb-6 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}>
                  เพราะ Google คือจุดเริ่มต้น<br />ของทุกการตัดสินใจซื้อ
                </h2>
                <p className="text-lg text-[#3e4850] mb-5 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  กว่า 92% ของผู้บริโภคไทยค้นหาสินค้าและบริการผ่าน Google ก่อนตัดสินใจซื้อ
                  Google Ads ทำให้ธุรกิจของคุณปรากฏในตำแหน่งบนสุดของหน้าค้นหา
                  ณ ช่วงเวลาที่ลูกค้ามีความตั้งใจซื้อสูงที่สุด ซึ่งไม่มีช่องทางโฆษณาอื่นใดทำได้แบบนี้
                </p>
                <p className="text-base text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  สำหรับธุรกิจในภาคใต้ ไม่ว่าจะเป็นโรงแรมในภูเก็ตที่ต้องการจองโดยตรง (Direct Booking)
                  บริษัท Tour ในกระบี่ที่ต้องการ Lead นักท่องเที่ยวต่างชาติ
                  หรือคลินิกในหาดใหญ่ที่ต้องการผู้ป่วยใหม่ Google Ads คือตัวเลือกที่ให้ ROI
                  วัดได้ชัดเจนและรวดเร็วที่สุด
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-4">
                  {[
                    "วัดผลได้ทุกบาท — เห็น Conversion, CPC, ROAS แบบ Real-time",
                    "ควบคุมงบประมาณได้ 100% — กำหนด Daily Budget และหยุดได้ทุกเมื่อ",
                    "เข้าถึงลูกค้าที่มีความตั้งใจซื้อสูงที่สุด — ไม่ใช่การ Interrupt",
                    "ปรับแต่งตาม Location ได้ละเอียด — เจาะจงถึงระดับจังหวัดและอำเภอ",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 flex-shrink-0" style={{ color, fontSize: 20 }}>check_circle</span>
                      <span className="text-[#191c1e] text-sm thai-leading" style={{ fontWeight: 300 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats panel */}
              <div
                className="p-10"
                style={{ backgroundColor: bgLight, borderRadius: "2rem", border: `1px solid rgba(66,133,244,0.15)` }}
              >
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color, fontWeight: 300 }}>ตัวเลขที่น่าสนใจ</p>
                <div className="flex flex-col gap-6">
                  {[
                    { num: "92%", desc: "ผู้บริโภคไทยค้นหาสินค้าผ่าน Google ก่อนซื้อ" },
                    { num: "8.5B", desc: "การค้นหาเกิดขึ้นบน Google ทุกวัน ทั่วโลก" },
                    { num: "200%", desc: "ROI เฉลี่ยที่ธุรกิจขนาดเล็กได้จาก Google Ads" },
                    { num: "3วิ", desc: "เวลาที่ผู้ใช้ตัดสินใจคลิกโฆษณาที่ปรากฏบนหน้าแรก" },
                  ].map((s) => (
                    <div key={s.desc} className="flex items-center gap-5">
                      <p className="text-3xl flex-shrink-0 w-24 text-right" style={{ fontWeight: 400, color }}>{s.num}</p>
                      <p className="text-sm text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Grid ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f2f4f6" }}>
          <div className={wrap}>
            <div className="text-center mb-16" style={{ maxWidth: "44rem", margin: "0 auto 4rem" }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>บริการ Google Ads ของเรา</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                ครบทุก Google Ads Format<br />เพื่อทุกเป้าหมายธุรกิจ
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                เราไม่ได้ทำแค่ Search Ads แต่วางแผนกลยุทธ์ Full-funnel ครอบคลุมทุก Touchpoint
                ตั้งแต่ Awareness จนถึง Conversion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: bgLight }}
                  >
                    <span className="material-symbols-outlined" style={{ color, fontSize: 24 }}>{f.icon}</span>
                  </div>
                  <h3 className="text-lg mb-3" style={{ fontWeight: 300, color: "#191c1e" }}>{f.title}</h3>
                  <p className="text-sm text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.75 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>ขั้นตอนการทำงาน</p>
                <h2 className="text-4xl mb-6 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}>
                  กระบวนการทำงาน Google Ads<br />ของ AP Digital
                </h2>
                <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  เราวางแผนโครงสร้างแคมเปญ Google Ads อย่างละเอียดตั้งแต่วันแรก
                  ด้วย Methodology ที่พิสูจน์แล้วจากประสบการณ์ดูแลธุรกิจในภาคใต้กว่า 50 ราย
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
                  style={{ fontWeight: 300, background: `linear-gradient(135deg,${color},#34a8ff)`, boxShadow: `0 12px 32px -8px ${color}55` }}
                >
                  เริ่มต้นวันนี้
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {process.map((p, i) => (
                  <div
                    key={p.step}
                    className="flex items-start gap-5 p-6"
                    style={{ backgroundColor: i % 2 === 0 ? bgLight : "#f2f4f6", borderRadius: "1rem", border: i % 2 === 0 ? `1px solid rgba(66,133,244,0.15)` : "none" }}
                  >
                    <span className="text-xl flex-shrink-0" style={{ fontWeight: 400, color, minWidth: "2.5rem" }}>{p.step}</span>
                    <div>
                      <p className="text-base mb-1" style={{ fontWeight: 300, color: "#191c1e" }}>{p.title}</p>
                      <p className="text-sm text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.75 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries ───────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="text-center mb-12" style={{ maxWidth: "40rem", margin: "0 auto 3rem" }}>
              <h2 className="text-3xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                อุตสาหกรรมที่เราเชี่ยวชาญ<br />ในตลาดภาคใต้
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="p-5 text-center hover:shadow-md transition-all"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1rem", border: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <span className="material-symbols-outlined mb-3 block" style={{ color, fontSize: 32 }}>{ind.icon}</span>
                  <p className="text-sm text-[#191c1e] mb-1" style={{ fontWeight: 300 }}>{ind.label}</p>
                  <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{ind.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Platforms ───────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <p className="text-center text-sm text-[#6e7881] mb-8" style={{ fontWeight: 200 }}>บริการ Paid Ads อื่นๆ ของเรา</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ads/meta-ads"
                className="flex items-center gap-3 px-8 py-5 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: "#f2f4f6", textDecoration: "none" }}
              >
                <span className="material-symbols-outlined" style={{ color: "#0081FB", fontSize: 28 }}>thumb_up</span>
                <div>
                  <p className="text-sm" style={{ fontWeight: 300, color: "#191c1e" }}>Meta Ads</p>
                  <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>Facebook & Instagram</p>
                </div>
                <span className="material-symbols-outlined ml-auto" style={{ color: "#6e7881", fontSize: 18 }}>arrow_forward</span>
              </Link>
              <Link
                href="/services/ads/tiktok-ads"
                className="flex items-center gap-3 px-8 py-5 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: "#f2f4f6", textDecoration: "none" }}
              >
                <span className="material-symbols-outlined" style={{ color: "#191c1e", fontSize: 28 }}>music_video</span>
                <div>
                  <p className="text-sm" style={{ fontWeight: 300, color: "#191c1e" }}>TikTok Ads</p>
                  <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>Short-form Video Ads</p>
                </div>
                <span className="material-symbols-outlined ml-auto" style={{ color: "#6e7881", fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20">
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white text-center px-6 py-20 md:py-24"
              style={{ background: `linear-gradient(135deg,#00658d 0%,${color} 100%)`, borderRadius: "2rem" }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />
              <div className="relative z-10" style={{ maxWidth: "44rem", margin: "0 auto" }}>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ fontWeight: 300, opacity: 0.8 }}>
                  Free Google Ads Audit — ไม่มีข้อผูกมัด
                </p>
                <h2 className="text-4xl md:text-5xl mb-6 thai-leading" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                  พร้อมให้ Google Ads<br />ทำงานให้คุ้มค่าขึ้น?
                </h2>
                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, opacity: 0.85 }}>
                  ให้ทีม Google Ads ของ AP Digital วิเคราะห์ Ad Account ของคุณฟรี
                  พร้อมแผนกลยุทธ์ที่ตอบโจทย์ธุรกิจในภาคใต้โดยเฉพาะ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[#00658d] text-lg hover:scale-105 transition-transform"
                    style={{ fontWeight: 300, backgroundColor: "#ffffff", boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                  >
                    รับ Free Audit ตอนนี้
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                  </Link>
                  <a
                    href="https://line.me/ti/p/@apdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-white text-lg hover:opacity-90 transition-opacity"
                    style={{ fontWeight: 300, backgroundColor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chat</span>
                    แชทผ่าน Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

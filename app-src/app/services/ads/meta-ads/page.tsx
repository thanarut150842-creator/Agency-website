import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ Meta Ads Facebook Instagram ภาคใต้ | AP Digital Agency ภูเก็ต กระบี่ หาดใหญ่",
  description:
    "รับทำ Meta Ads (Facebook Ads & Instagram Ads) สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ สร้าง Brand Awareness ปิดการขาย และ Generate Lead ด้วยโฆษณาที่วัดผลได้ ปรึกษาฟรีไม่มีข้อผูกมัด",
  alternates: {
    canonical: "/services/ads/meta-ads",
  },
};

const color = "#0081FB";
const bgLight = "rgba(0,129,251,0.08)";

const features = [
  { icon: "campaign", title: "Awareness & Reach", desc: "สร้างการจดจำแบรนด์ในกลุ่มเป้าหมายที่ใช่บน Facebook & Instagram เพิ่ม Brand Recall และ Top-of-mind ในตลาดภาคใต้" },
  { icon: "person_add", title: "Lead Generation Ads", desc: "เก็บ Lead โดยตรงบน Facebook ด้วย Instant Forms ไม่ต้องให้ผู้ใช้ออกจากแอป ลด Friction และเพิ่ม Conversion Rate" },
  { icon: "shopping_bag", title: "Conversion & Sales", desc: "ปิดการขายด้วยโฆษณาที่ตรงใจ ตรงเวลา ด้วย Catalogue Ads, Dynamic Product Ads และ Collection Ads บน Instagram" },
  { icon: "repeat", title: "Retargeting Campaigns", desc: "ดึงลูกค้าที่เคยเห็นโฆษณาหรือเยี่ยมชมเว็บไซต์กลับมา Convert ด้วย Custom Audience และ Pixel-based Retargeting" },
  { icon: "video_library", title: "Reels & Video Ads", desc: "สร้าง Brand Story ด้วยโฆษณา Reels บน Instagram และ Facebook Video ที่หยุดนิ้วหัวแม่มือได้ใน 3 วินาทีแรก" },
  { icon: "store", title: "Instagram Shopping", desc: "ขายสินค้าโดยตรงผ่าน Instagram Shop ด้วย Product Tags และ Shoppable Posts เหมาะสำหรับแบรนด์ที่ต้องการ Visual Commerce" },
];

const process = [
  { step: "01", title: "Pixel & CAPI Setup", desc: "ติดตั้ง Meta Pixel และ Conversions API (CAPI) อย่างถูกต้อง เพื่อ Track ทุก Event ได้แม้ใน iOS 14+ Environment" },
  { step: "02", title: "Audience Research", desc: "สร้าง Custom Audience จาก First-party Data, Lookalike Audience และ Interest Targeting ที่ตรงกับตลาดภาคใต้" },
  { step: "03", title: "Creative Strategy", desc: "ออกแบบ Creative ทั้ง Static Image, Carousel และ Video ที่เข้าใจ Platform และ Hook ผู้ดูได้จริง พร้อม A/B Testing" },
  { step: "04", title: "Campaign Launch", desc: "วางโครงสร้างแคมเปญ Campaign > Ad Set > Ad อย่างละเอียด ตั้ง Objective ที่ตรงกับ Funnel Stage ของธุรกิจ" },
  { step: "05", title: "Scale & Optimize", desc: "Monitor ผล Optimize Creative, Budget, Audience ทุกสัปดาห์ Scale แคมเปญที่ดีที่สุดและปิดที่ไม่ทำกำไร" },
];

const kpis = [
  { value: "5x", label: "Reach มากขึ้น", sub: "เทียบกับ Organic โพสต์" },
  { value: "-60%", label: "ลด CPL เฉลี่ย", sub: "หลัง Optimize 60 วัน" },
  { value: "2.4x", label: "ROAS วัดได้จริง", sub: "จากแคมเปญ Conversion" },
  { value: "3วิ", label: "Hook ที่ได้ผล", sub: "เวลาดักจับสายตาผู้ดู" },
];

const industries = [
  { icon: "hotel", label: "โรงแรม & Resort", city: "ภูเก็ต · กระบี่" },
  { icon: "spa", label: "Spa & Wellness", city: "ทั่วภาคใต้" },
  { icon: "sailing", label: "Tour & Activity", city: "กระบี่ · พังงา" },
  { icon: "restaurant", label: "ร้านอาหาร & Cafe", city: "ทั่วภาคใต้" },
  { icon: "checkroom", label: "Fashion & Lifestyle", city: "หาดใหญ่ · ภูเก็ต" },
  { icon: "villa", label: "อสังหาริมทรัพย์", city: "ภูเก็ต · หาดใหญ่" },
];

export default function MetaAdsPage() {
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
              style={{ top: "-8rem", right: "-4rem", width: "50rem", height: "50rem", background: "radial-gradient(circle, rgba(0,129,251,0.12) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(rgba(0,129,251,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.7 }}
            />
          </div>

          <div className={`${wrap} relative z-10`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#6e7881] mb-8" style={{ fontWeight: 200 }}>
              <Link href="/" style={{ textDecoration: "none", color: "#6e7881" }}>หน้าแรก</Link>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <Link href="/services/ads" style={{ textDecoration: "none", color: "#6e7881" }}>บริการ Ads</Link>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <span style={{ color }}>Meta Ads</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: bgLight, border: `1px solid rgba(0,129,251,0.25)` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                Meta Ads Agency · ภูเก็ต | กระบี่ | หาดใหญ่
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
                  <span style={{ color }}>Meta Ads</span>{" "}
                  ภาคใต้<br />
                  สร้าง Brand &amp; ปิดการขาย<br />
                  บน Facebook &amp; Instagram
                </h1>
                <p className="text-lg text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}>
                  คนภาคใต้ใช้เวลาบน Facebook และ Instagram มากกว่า 3 ชั่วโมงต่อวัน
                  Meta Ads คือโอกาสทองในการสร้าง Brand Awareness เข้าถึงกลุ่มเป้าหมายที่ใช่
                  และ Convert พวกเขาให้เป็นลูกค้าจริง ไม่ว่าธุรกิจของคุณจะอยู่ที่ภูเก็ต กระบี่ หรือหาดใหญ่
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: `linear-gradient(135deg,${color} 0%,#4facfe 100%)`, boxShadow: `0 16px 40px -8px ${color}55` }}
                  >
                    รับ Free Meta Ads Audit
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
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

                {/* Platform tags */}
                <div className="flex flex-wrap gap-2">
                  {["Facebook Ads", "Instagram Ads", "Lead Generation", "Retargeting", "Reels Ads", "IG Shopping"].map((t) => (
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

        {/* ── Why Meta Ads ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>ทำไม Meta Ads</p>
                <h2 className="text-4xl mb-6 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}>
                  เพราะกลุ่มเป้าหมายของคุณ<br />ใช้เวลาอยู่บน Meta ทุกวัน
                </h2>
                <p className="text-lg text-[#3e4850] mb-5 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  ด้วยข้อมูลผู้ใช้กว่า 3 พันล้านคนทั่วโลก Meta มีระบบ Targeting ที่ละเอียดและแม่นยำที่สุด
                  คุณสามารถเลือกกลุ่มเป้าหมายตาม Interest, Behavior, Demographic และ Location
                  ได้ถึงระดับจังหวัดและอำเภอในภาคใต้
                </p>
                <p className="text-base text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  ทีม Meta Ads ของ AP Digital เชี่ยวชาญการสร้าง Custom Audience จาก First-party Data
                  ควบคู่กับการออกแบบ Creative ที่หยุดนิ้วหัวแม่มือผู้ใช้ได้ใน 3 วินาทีแรก
                  พร้อม A/B Testing และระบบ Conversion Tracking ที่แม่นยำด้วย Meta Pixel และ CAPI
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    "Targeting ละเอียดสุด — Interest, Behavior, Custom & Lookalike Audience",
                    "Visual-first Platform — เหมาะกับแบรนด์ที่มี Story ที่น่าสนใจ",
                    "Meta Pixel + CAPI — Track ได้แม้ใน iOS Privacy Environment",
                    "Retargeting ทรงพลัง — ดึงคนที่เกือบซื้อกลับมา Convert ให้สำเร็จ",
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
                style={{ backgroundColor: bgLight, borderRadius: "2rem", border: `1px solid rgba(0,129,251,0.15)` }}
              >
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color, fontWeight: 300 }}>ตัวเลขที่น่าสนใจ</p>
                <div className="flex flex-col gap-6">
                  {[
                    { num: "3B+", desc: "ผู้ใช้งาน Facebook & Instagram ทั่วโลก" },
                    { num: "3ชม.", desc: "เวลาเฉลี่ยที่คนไทยใช้บน Social Media ต่อวัน" },
                    { num: "77%", desc: "นักช้อปออนไลน์ค้นพบสินค้าใหม่บน Instagram" },
                    { num: "9.21%", desc: "CTR เฉลี่ยของ Facebook Ads ที่ Optimize แล้ว" },
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
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>บริการ Meta Ads ของเรา</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                ครบทุก Meta Ads Format<br />ตั้งแต่ Awareness ถึง Conversion
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                เราวางกลยุทธ์ Full-funnel ครอบคลุมทุก Stage ของ Customer Journey
                ด้วย Creative ที่เข้าใจทั้ง Facebook และ Instagram Algorithm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                  กระบวนการทำ Meta Ads<br />ของ AP Digital
                </h2>
                <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  เราไม่ได้แค่ยิงโฆษณา แต่สร้าง Ecosystem ของ Meta Marketing ที่แข็งแกร่ง
                  ตั้งแต่ Pixel Setup จนถึง Creative Production และ Performance Scaling
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
                  style={{ fontWeight: 300, background: `linear-gradient(135deg,${color},#4facfe)`, boxShadow: `0 12px 32px -8px ${color}55` }}
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
                    style={{ backgroundColor: i % 2 === 0 ? bgLight : "#f2f4f6", borderRadius: "1rem", border: i % 2 === 0 ? `1px solid rgba(0,129,251,0.15)` : "none" }}
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
                href="/services/ads/google-ads"
                className="flex items-center gap-3 px-8 py-5 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: "#f2f4f6", textDecoration: "none" }}
              >
                <span className="material-symbols-outlined" style={{ color: "#4285F4", fontSize: 28 }}>ads_click</span>
                <div>
                  <p className="text-sm" style={{ fontWeight: 300, color: "#191c1e" }}>Google Ads</p>
                  <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>Search, Display & YouTube</p>
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
                  Free Meta Ads Audit — ไม่มีข้อผูกมัด
                </p>
                <h2 className="text-4xl md:text-5xl mb-6 thai-leading" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                  พร้อมให้ Meta Ads<br />ทำงานให้คุ้มค่าขึ้น?
                </h2>
                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, opacity: 0.85 }}>
                  ให้ทีม Meta Ads ของ AP Digital วิเคราะห์ Ad Account ของคุณฟรี
                  พร้อมแผน Creative และ Audience Strategy ที่ตอบโจทย์ธุรกิจในภาคใต้โดยเฉพาะ
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

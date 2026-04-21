import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ TikTok Ads ภาคใต้ ภูเก็ต กระบี่ หาดใหญ่ | AP Digital Agency",
  description:
    "รับทำ TikTok Ads สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ เจาะกลุ่ม Gen Z และ Millennials ด้วย Creative วิดีโอที่ Viral ได้จริง วัดผลได้ทุกบาท ปรึกษาฟรีไม่มีข้อผูกมัด",
  alternates: {
    canonical: "/services/ads/tiktok-ads",
  },
};

const color = "#191c1e";
const colorAccent = "#fe2c55";
const bgLight = "rgba(254,44,85,0.07)";

const features = [
  { icon: "play_circle", title: "In-Feed Ads", desc: "โฆษณาวิดีโอที่กลมกลืนกับ For You Feed เหมือน Content ปกติ ดักจับสายตาด้วย Hook ที่แข็งแกร่งใน 1 วินาทีแรก" },
  { icon: "star", title: "TopView Ads", desc: "ตำแหน่งโฆษณาพรีเมียมที่ปรากฏเป็นวิดีโอแรกเมื่อผู้ใช้เปิดแอป TikTok สร้าง Brand Impact สูงสุด" },
  { icon: "tag", title: "Branded Hashtag Challenge", desc: "สร้าง Viral Loop ให้ผู้ใช้สร้าง User Generated Content (UGC) ต่อยอด เพิ่ม Brand Engagement แบบ Organic" },
  { icon: "bolt", title: "Spark Ads", desc: "Boost โพสต์ออร์แกนิกของแบรนด์หรือ Creator ที่กำลัง Viral อยู่ให้เข้าถึงคนมากขึ้น โดยยังคงความ Authentic ไว้" },
  { icon: "shopping_cart", title: "TikTok Shopping Ads", desc: "ขายสินค้าได้โดยตรงบน TikTok Shop ด้วย Product Link Ads, LIVE Shopping และ Video Shopping Ads" },
  { icon: "people", title: "Creator Partnership Ads", desc: "จับคู่แบรนด์กับ TikTok Creator ที่เหมาะสมในภาคใต้ สร้าง Authentic Content ที่ผู้ชมเชื่อถือและ Engage" },
];

const process = [
  { step: "01", title: "TikTok Pixel Setup", desc: "ติดตั้ง TikTok Pixel และตั้ง Events ที่สำคัญ เพื่อ Track ทุก Conversion ได้อย่างแม่นยำก่อนเริ่มยิงโฆษณา" },
  { step: "02", title: "Content & Hook Strategy", desc: "วางแผน Hook Strategy ที่ดักจับสายตาใน 1 วินาทีแรก วิเคราะห์ Trend Sound และ Effect ที่กำลัง Viral บน TikTok" },
  { step: "03", title: "Creative Production", desc: "ผลิต Video Content ที่รู้สึก Native กับ TikTok — ไม่ใช่โฆษณาที่ถูก Repurpose มาจาก Platform อื่น" },
  { step: "04", title: "Campaign Launch", desc: "ตั้งค่า Campaign Objective, Audience Targeting และ Budget อย่างละเอียด พร้อม A/B Testing Creative หลายชิ้น" },
  { step: "05", title: "Scale Winners", desc: "Monitor ผล CPM, CTR, CVR ทุกสัปดาห์ Scale Creative ที่ชนะ ปิด Ad Set ที่ไม่ทำกำไร และ Refresh Creative สม่ำเสมอ" },
];

const kpis = [
  { value: "10x", label: "Reach ต่อบาท", sub: "เทียบกับ Platform อื่น" },
  { value: "4.2%", label: "CTR เฉลี่ย", sub: "จาก In-Feed Ads" },
  { value: "-35%", label: "ต่ำกว่า CPM", sub: "เทียบกับ Meta Ads" },
  { value: "40M", label: "ผู้ใช้ TikTok ในไทย", sub: "ต่อเดือน (2024)" },
];

const industries = [
  { icon: "hotel", label: "โรงแรม & Resort", city: "ภูเก็ต · กระบี่" },
  { icon: "restaurant", label: "ร้านอาหาร & Cafe", city: "ทั่วภาคใต้" },
  { icon: "sailing", label: "Tour & Activity", city: "กระบี่ · พังงา" },
  { icon: "checkroom", label: "Fashion & Lifestyle", city: "หาดใหญ่ · ภูเก็ต" },
  { icon: "spa", label: "Beauty & Wellness", city: "ทั่วภาคใต้" },
  { icon: "storefront", label: "E-Commerce & Retail", city: "ทั่วภาคใต้" },
];

export default function TikTokAdsPage() {
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
              style={{ top: "-8rem", right: "-4rem", width: "50rem", height: "50rem", background: "radial-gradient(circle, rgba(254,44,85,0.10) 0%, transparent 70%)" }}
            />
            <div
              className="absolute rounded-full blur-[100px]"
              style={{ bottom: "-6rem", left: "-6rem", width: "36rem", height: "36rem", background: "radial-gradient(circle, rgba(105,201,208,0.08) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(rgba(254,44,85,0.06) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.7 }}
            />
          </div>

          <div className={`${wrap} relative z-10`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#6e7881] mb-8" style={{ fontWeight: 200 }}>
              <Link href="/" style={{ textDecoration: "none", color: "#6e7881" }}>หน้าแรก</Link>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <Link href="/services/ads" style={{ textDecoration: "none", color: "#6e7881" }}>บริการ Ads</Link>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <span style={{ color: colorAccent }}>TikTok Ads</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: bgLight, border: `1px solid rgba(254,44,85,0.25)` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colorAccent }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                TikTok Ads Agency · ภูเก็ต | กระบี่ | หาดใหญ่
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
                  <span style={{ color: colorAccent }}>TikTok Ads</span>{" "}
                  ภาคใต้<br />
                  เจาะ Gen Z &amp; Millennials<br />
                  ด้วย Creative ที่ Viral ได้จริง
                </h1>
                <p className="text-lg text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}>
                  TikTok กลายเป็น Platform ที่เติบโตเร็วที่สุดในไทย ด้วยผู้ใช้กว่า 40 ล้านคนต่อเดือน
                  ธุรกิจในภูเก็ต กระบี่ และหาดใหญ่ที่ต้องการเข้าถึงกลุ่มอายุ 18–35 ปี
                  TikTok Ads คือช่องทางที่ให้ Reach ต่อบาทสูงที่สุดในตอนนี้
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: `linear-gradient(135deg,${colorAccent} 0%,#ff6b81 100%)`, boxShadow: `0 16px 40px -8px ${colorAccent}55` }}
                  >
                    รับ Free TikTok Audit
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>music_video</span>
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
                  {["In-Feed Ads", "TopView Ads", "Spark Ads", "Shopping Ads", "Hashtag Challenge", "Creator Ads"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: bgLight, color: colorAccent, fontWeight: 300 }}>
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
                    <p className="text-3xl" style={{ fontWeight: 400, color: colorAccent }}>{k.value}</p>
                    <p className="text-sm text-[#191c1e]" style={{ fontWeight: 300 }}>{k.label}</p>
                    <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{k.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── Why TikTok Ads ───────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: colorAccent, fontWeight: 300 }}>ทำไม TikTok Ads</p>
                <h2 className="text-4xl mb-6 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}>
                  เพราะ TikTok ไม่ใช่แค่<br />วิดีโอสั้น — มันคือ Search Engine ใหม่
                </h2>
                <p className="text-lg text-[#3e4850] mb-5 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  Gen Z ใช้ TikTok ค้นหาสถานที่ท่องเที่ยว ร้านอาหาร และสินค้ามากกว่า Google แล้ว
                  ธุรกิจในภูเก็ต กระบี่ และหาดใหญ่ที่ต้องการเข้าถึงคนรุ่นใหม่
                  จำเป็นต้องมีตัวตนบน TikTok และ TikTok Ads คือ Fast Track ที่เร็วที่สุด
                </p>
                <p className="text-base text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  เราไม่ได้แค่ "ยิงโฆษณา" บน TikTok แต่สร้าง Content Strategy ที่ผสมผสาน
                  ระหว่างความ Authentic ของ TikTok และเป้าหมายทางธุรกิจของคุณ
                  ทีม Creative ของเราเข้าใจ TikTok Algorithm อย่างลึกซึ้ง
                  ตั้งแต่การเลือก Hook ที่ดักจับสายตาใน 1 วินาทีแรก จนถึงการ Scale งบประมาณโฆษณา
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    "Cost-efficient — CPM ต่ำกว่า Meta Ads ถึง 35% ในหลายอุตสาหกรรม",
                    "Viral Potential — โฆษณาที่ดีสามารถ Organic Reach ต่อได้โดยไม่ต้องเพิ่มงบ",
                    "Gen Z First-mover — เข้าถึงกลุ่มที่มีกำลังซื้อสูงก่อนคู่แข่ง",
                    "Native Content — ผู้ใช้ Engage กับโฆษณาที่ดูเหมือน Content จริง",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 flex-shrink-0" style={{ color: colorAccent, fontSize: 20 }}>check_circle</span>
                      <span className="text-[#191c1e] text-sm thai-leading" style={{ fontWeight: 300 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats panel */}
              <div
                className="p-10"
                style={{ backgroundColor: bgLight, borderRadius: "2rem", border: `1px solid rgba(254,44,85,0.15)` }}
              >
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color: colorAccent, fontWeight: 300 }}>ตัวเลขที่น่าสนใจ</p>
                <div className="flex flex-col gap-6">
                  {[
                    { num: "40M", desc: "ผู้ใช้งาน TikTok ในประเทศไทยต่อเดือน" },
                    { num: "95นาที", desc: "เวลาเฉลี่ยที่ผู้ใช้ใช้บน TikTok ต่อวัน" },
                    { num: "69%", desc: "ผู้ใช้ TikTok ค้นหาสินค้าหลังเห็น TikTok เกี่ยวกับสินค้านั้น" },
                    { num: "150%", desc: "การเติบโตของ TikTok Shop ในไทยใน 1 ปี" },
                  ].map((s) => (
                    <div key={s.desc} className="flex items-center gap-5">
                      <p className="text-3xl flex-shrink-0 w-28 text-right" style={{ fontWeight: 400, color: colorAccent }}>{s.num}</p>
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
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: colorAccent, fontWeight: 300 }}>บริการ TikTok Ads ของเรา</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                ครบทุก TikTok Ads Format<br />เพื่อทุกเป้าหมายธุรกิจ
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                จาก In-Feed Ads ที่ดูเหมือน Content จริง ไปจนถึง Branded Hashtag Challenge
                ที่สร้าง Viral Moment ให้แบรนด์ เราครอบคลุมทุกรูปแบบ
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
                    <span className="material-symbols-outlined" style={{ color: colorAccent, fontSize: 24 }}>{f.icon}</span>
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
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: colorAccent, fontWeight: 300 }}>ขั้นตอนการทำงาน</p>
                <h2 className="text-4xl mb-6 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}>
                  กระบวนการทำ TikTok Ads<br />ของ AP Digital
                </h2>
                <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  TikTok ต้องการ Approach ที่แตกต่างจาก Platform อื่นโดยสิ้นเชิง
                  เราเชี่ยวชาญทั้ง Creative Production และ Media Buying บน TikTok
                  เพื่อให้แบรนด์ของคุณ Feel Native และ Convert ได้จริง
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
                  style={{ fontWeight: 300, background: `linear-gradient(135deg,${colorAccent},#ff6b81)`, boxShadow: `0 12px 32px -8px ${colorAccent}55` }}
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
                    style={{ backgroundColor: i % 2 === 0 ? bgLight : "#f2f4f6", borderRadius: "1rem", border: i % 2 === 0 ? `1px solid rgba(254,44,85,0.15)` : "none" }}
                  >
                    <span className="text-xl flex-shrink-0" style={{ fontWeight: 400, color: colorAccent, minWidth: "2.5rem" }}>{p.step}</span>
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
                  <span className="material-symbols-outlined mb-3 block" style={{ color: colorAccent, fontSize: 32 }}>{ind.icon}</span>
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
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20">
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white text-center px-6 py-20 md:py-24"
              style={{ background: `linear-gradient(135deg,#191c1e 0%,${colorAccent} 100%)`, borderRadius: "2rem" }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />
              <div className="relative z-10" style={{ maxWidth: "44rem", margin: "0 auto" }}>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ fontWeight: 300, opacity: 0.8 }}>
                  Free TikTok Ads Audit — ไม่มีข้อผูกมัด
                </p>
                <h2 className="text-4xl md:text-5xl mb-6 thai-leading" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                  พร้อมให้ TikTok Ads<br />ทำงานให้ธุรกิจของคุณ?
                </h2>
                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, opacity: 0.85 }}>
                  ให้ทีม TikTok Ads ของ AP Digital วิเคราะห์ Content Strategy และ Ad Account ของคุณฟรี
                  พร้อมแผน Creative ที่ตอบโจทย์กลุ่มเป้าหมายในภาคใต้โดยเฉพาะ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[#191c1e] text-lg hover:scale-105 transition-transform"
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

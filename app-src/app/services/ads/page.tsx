import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำโฆษณาออนไลน์ Google Meta TikTok Ads ภาคใต้ | AP Digital Agency",
  description:
    "รับทำโฆษณาออนไลน์ครบวงจร Google Ads, Meta Ads (Facebook & Instagram), TikTok Ads สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ วัดผลได้ทุกบาท ปรึกษาฟรีไม่มีข้อผูกมัด",
  alternates: {
    canonical: "/services/ads",
  },
};

const platforms = [
  {
    href: "/services/ads/google-ads",
    badge: "Google Ads",
    icon: "ads_click",
    color: "#4285F4",
    bgLight: "rgba(66,133,244,0.08)",
    borderColor: "rgba(66,133,244,0.20)",
    h2: "Google Ads",
    tagline: "เข้าถึงลูกค้าที่กำลังค้นหาธุรกิจของคุณอยู่ตอนนี้",
    desc: "Search Ads, Display, Shopping, YouTube และ Performance Max ครบวงจร สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ที่ต้องการ ROAS วัดได้จริง",
    kpis: [
      { value: "3–8x", label: "ROAS เฉลี่ย" },
      { value: "-40%", label: "ลด CPC" },
      { value: "72h", label: "เริ่มเห็นผล" },
    ],
    types: ["Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads", "Performance Max"],
  },
  {
    href: "/services/ads/meta-ads",
    badge: "Meta Ads",
    icon: "thumb_up",
    color: "#0081FB",
    bgLight: "rgba(0,129,251,0.08)",
    borderColor: "rgba(0,129,251,0.20)",
    h2: "Meta Ads",
    tagline: "สร้าง Brand และปิดการขายบน Facebook & Instagram",
    desc: "Lead Generation, Conversion Campaigns, Retargeting และ Reels Ads ด้วย Creative ที่หยุดนิ้วหัวแม่มือและ Meta Pixel + CAPI ที่แม่นยำ",
    kpis: [
      { value: "5x", label: "Reach มากขึ้น" },
      { value: "-60%", label: "ลด CPL" },
      { value: "2.4x", label: "ROAS วัดได้" },
    ],
    types: ["Facebook Ads", "Instagram Ads", "Lead Gen", "Retargeting", "Reels Ads"],
  },
  {
    href: "/services/ads/tiktok-ads",
    badge: "TikTok Ads",
    icon: "music_video",
    color: "#fe2c55",
    bgLight: "rgba(254,44,85,0.07)",
    borderColor: "rgba(254,44,85,0.20)",
    h2: "TikTok Ads",
    tagline: "เจาะ Gen Z & Millennials ด้วย Creative ที่ Viral ได้จริง",
    desc: "In-Feed Ads, TopView, Spark Ads และ TikTok Shopping สำหรับแบรนด์ที่ต้องการเข้าถึงกลุ่มอายุ 18–35 ปีในภาคใต้ด้วย Cost ที่ต่ำที่สุด",
    kpis: [
      { value: "10x", label: "Reach ต่อบาท" },
      { value: "4.2%", label: "CTR เฉลี่ย" },
      { value: "-35%", label: "CPM ต่ำกว่า Meta" },
    ],
    types: ["In-Feed Ads", "TopView Ads", "Spark Ads", "Shopping Ads", "Hashtag Challenge"],
  },
];

const whyItems = [
  { icon: "track_changes", title: "วัดผลทุกบาทที่ลงทุน", desc: "ตั้ง Conversion Tracking ครบถ้วน ทั้ง Google Tag Manager, Meta Pixel และ TikTok Pixel เพื่อให้คุณเห็น ROAS จริงทุกแคมเปญ" },
  { icon: "location_on", title: "เชี่ยวชาญตลาดภาคใต้", desc: "เราเข้าใจพฤติกรรมผู้บริโภคในภูเก็ต กระบี่ หาดใหญ่ และตลาดนักท่องเที่ยวทั้ง Inbound และ Domestic ทำให้ Targeting แม่นกว่า" },
  { icon: "bolt", title: "Creative ที่หยุดนิ้วได้จริง", desc: "ออกแบบ Visual และเขียน Copy ที่เข้าใจแต่ละ Platform ลึกซึ้ง ไม่ว่าจะเป็น Google, Facebook, Instagram หรือ TikTok" },
  { icon: "show_chart", title: "Optimize รายสัปดาห์", desc: "ทีมเรา Optimize แคมเปญรายสัปดาห์ ปรับ Bid, เปลี่ยน Creative, ขยาย Audience พร้อมประชุม Performance Review รายเดือน" },
  { icon: "handshake", title: "Transparent ไม่มีค่าซ่อนเร้น", desc: "ค่าบริการและงบโฆษณาแยกกันชัดเจน คุณเห็นทุก Transaction ที่เข้า Ad Account ผ่าน Dashboard Real-time" },
  { icon: "support_agent", title: "ดูแลหลังขาย 7 วัน", desc: "แคมเปญโฆษณาไม่หยุดพักวันเสาร์-อาทิตย์ ทีมเรา Monitor และแก้ปัญหาเร่งด่วนตลอด 7 วัน โดยเฉพาะ High Season ภาคใต้" },
];

export default function AdsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <header
          className="relative overflow-hidden pt-36 pb-24"
          style={{ backgroundColor: "#f7f9fb" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute rounded-full blur-[140px]"
              style={{ top: "-8rem", right: "-8rem", width: "50rem", height: "50rem", background: "radial-gradient(circle, rgba(66,133,244,0.10) 0%, transparent 70%)" }}
            />
            <div
              className="absolute rounded-full blur-[100px]"
              style={{ bottom: "-6rem", left: "-6rem", width: "36rem", height: "36rem", background: "radial-gradient(circle, rgba(254,44,85,0.07) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.6 }}
            />
          </div>

          <div className={`${wrap} relative z-10`}>
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: "rgba(66,133,244,0.09)", border: "1px solid rgba(66,133,244,0.22)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4285F4" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                Paid Ads Agency · ภูเก็ต | กระบี่ | หาดใหญ่
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="text-display mb-6"
                  style={{ fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 3.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#191c1e" }}
                >
                  รับทำโฆษณาออนไลน์
                  <br />
                  <span style={{ background: "linear-gradient(120deg,#4285F4 0%,#0081FB 50%,#fe2c55 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Google · Meta · TikTok
                  </span>
                  <br />
                  <span style={{ color: "#00658d" }}>ภาคใต้</span> วัดผลได้ทุกบาท
                </h1>
                <p className="text-lg text-[#3e4850] mb-10 thai-leading" style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}>
                  ไม่ว่าธุรกิจของคุณในภูเก็ต กระบี่ หรือหาดใหญ่จะอยู่ในอุตสาหกรรมใด
                  เรามีกลยุทธ์โฆษณาออนไลน์ที่เหมาะกับเป้าหมายและงบประมาณของคุณโดยเฉพาะ
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: "linear-gradient(135deg,#00658d 0%,#00aeef 100%)", boxShadow: "0 16px 40px -8px rgba(0,174,239,0.40)" }}
                  >
                    รับ Free Ads Audit
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>ads_click</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base transition-all hover:bg-[#d4d7d9]"
                    style={{ fontWeight: 300, color: "#191c1e", backgroundColor: "#e0e3e5" }}
                  >
                    ปรึกษาทีมงานฟรี
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat_bubble</span>
                  </Link>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "฿50M+", label: "งบโฆษณาที่จัดการทั้งปี", icon: "payments", color: "#00658d" },
                  { value: "3–8x", label: "ROAS เฉลี่ยที่ลูกค้าได้รับ", icon: "trending_up", color: "#4285F4" },
                  { value: "50+", label: "แบรนด์ภาคใต้ที่เชื่อใจเรา", icon: "verified", color: "#0081FB" },
                  { value: "98%", label: "ลูกค้าต่อสัญญาต่อเนื่อง", icon: "handshake", color: "#fe2c55" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-6 flex flex-col gap-3"
                    style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    <span className="material-symbols-outlined" style={{ color: s.color, fontSize: 28 }}>{s.icon}</span>
                    <div>
                      <p className="text-3xl" style={{ fontWeight: 400, color: "#191c1e" }}>{s.value}</p>
                      <p className="text-xs text-[#3e4850] mt-1 thai-leading" style={{ fontWeight: 200 }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── Platform Cards ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="text-center mb-16" style={{ maxWidth: "44rem", margin: "0 auto 4rem" }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00658d", fontWeight: 300 }}>เลือก Platform ที่ใช่</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                3 Platform · 1 เอเจนซี่<br />ที่เชี่ยวชาญตลาดภาคใต้
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                แต่ละ Platform มีจุดแข็งต่างกัน เราช่วยวางกลยุทธ์ว่าควรเริ่มที่ไหน
                และ Budget เท่าไหร่ให้ได้ผลตอบแทนสูงสุดสำหรับธุรกิจของคุณโดยเฉพาะ
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {platforms.map((p, idx) => (
                <div
                  key={p.href}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#f7f9fb" : "#ffffff",
                    borderRadius: "2rem",
                    border: `1px solid ${p.borderColor}`,
                  }}
                >
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: p.bgLight }}
                      >
                        <span className="material-symbols-outlined" style={{ color: p.color, fontSize: 26 }}>{p.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase" style={{ color: p.color, fontWeight: 300 }}>{p.badge}</p>
                        <h3 className="text-2xl" style={{ fontWeight: 400, color: "#191c1e" }}>{p.h2}</h3>
                      </div>
                    </div>

                    <p className="text-base font-medium text-[#191c1e] mb-3 thai-leading" style={{ fontWeight: 300 }}>{p.tagline}</p>
                    <p className="text-sm text-[#3e4850] mb-6 thai-leading" style={{ fontWeight: 200, lineHeight: 1.8 }}>{p.desc}</p>

                    {/* Types */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.types.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: p.bgLight, color: p.color, fontWeight: 300 }}>{t}</span>
                      ))}
                    </div>

                    {/* KPIs */}
                    <div className="flex gap-6 flex-wrap">
                      {p.kpis.map((k) => (
                        <div key={k.label}>
                          <p className="text-2xl" style={{ fontWeight: 400, color: p.color }}>{k.value}</p>
                          <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{k.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex flex-col justify-center items-end gap-3 flex-shrink-0">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm transition-all hover:scale-105 whitespace-nowrap"
                      style={{ fontWeight: 300, background: `linear-gradient(135deg,${p.color},${p.color}cc)`, boxShadow: `0 12px 32px -8px ${p.color}44` }}
                    >
                      ดูรายละเอียด {p.badge}
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs underline-offset-2 hover:underline whitespace-nowrap"
                      style={{ color: p.color, fontWeight: 200, textDecoration: "none" }}
                    >
                      ปรึกษาฟรีสำหรับ {p.badge} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why AP Digital ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#191c1e" }}>
          <div className={wrap}>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00aeef", fontWeight: 300 }}>ทำไมต้องเลือกเรา</p>
              <h2 className="text-4xl text-white mb-4" style={{ fontWeight: 400 }}>
                6 เหตุผลที่ธุรกิจภาคใต้<br />ไว้วางใจ AP Digital
              </h2>
              <p className="text-[#9ca8b4] thai-leading" style={{ fontWeight: 200, maxWidth: "36rem", margin: "0 auto" }}>
                เราไม่ใช่แค่เอเจนซี่ที่ยิงโฆษณา แต่คือพาร์ทเนอร์ที่เติบโตไปพร้อมกับธุรกิจของคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="p-8 hover:scale-[1.02] transition-transform duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(0,174,239,0.15)" }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#00aeef", fontSize: 24 }}>{item.icon}</span>
                  </div>
                  <h3 className="text-lg text-white mb-3" style={{ fontWeight: 300 }}>{item.title}</h3>
                  <p className="text-[#9ca8b4] text-sm thai-leading" style={{ fontWeight: 200, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20">
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white text-center px-6 py-20 md:py-24"
              style={{ background: "linear-gradient(135deg,#00658d 0%,#00aeef 60%,#4285F4 100%)", borderRadius: "2rem" }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />
              <div className="relative z-10" style={{ maxWidth: "44rem", margin: "0 auto" }}>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ fontWeight: 300, opacity: 0.8 }}>
                  Free Ads Audit — ไม่มีข้อผูกมัด
                </p>
                <h2 className="text-4xl md:text-5xl mb-6 thai-leading" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                  พร้อมให้โฆษณาของคุณ<br />ทำเงินได้มากขึ้นแล้วหรือยัง?
                </h2>
                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, opacity: 0.85 }}>
                  ให้ทีมผู้เชี่ยวชาญ Ads ของ AP Digital วิเคราะห์ Ad Account ของคุณฟรี
                  พร้อมแนะนำแผนกลยุทธ์ที่ตอบโจทย์ธุรกิจในภาคใต้ของคุณโดยเฉพาะ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[#00658d] text-lg hover:scale-105 transition-transform"
                    style={{ fontWeight: 300, backgroundColor: "#ffffff", boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                  >
                    รับ Free Ads Audit ตอนนี้
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

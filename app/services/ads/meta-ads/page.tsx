import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

const metaAdsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "บริการรับทำ Meta Ads (Facebook & Instagram) ภาคใต้",
  serviceType: "Meta Ads (Facebook, Instagram, Messenger)",
  provider: { "@type": "Organization", name: "Surf Digital Agency", url: "https://surfdigitalth.com" },
  areaServed: [
    { "@type": "City", name: "ภูเก็ต" },
    { "@type": "City", name: "กระบี่" },
    { "@type": "City", name: "สงขลา" },
  ],
  description: "รับทำโฆษณา Facebook Ads และ Instagram Ads สำหรับธุรกิจ E-Commerce, Service และ Lead Gen",
};

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ Meta Ads (FB+IG) ภาคใต้ | Surf Digital",
  description:
    "รับทำ Meta Ads (Facebook & Instagram) ภูเก็ต กระบี่ สงขลา สร้าง Brand + ปิดการขาย + ดึง Lead วัดผลได้จริง",
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
  { icon: "checkroom", label: "Fashion & Lifestyle", city: "สงขลา · ภูเก็ต" },
  { icon: "villa", label: "อสังหาริมทรัพย์", city: "ภูเก็ต · สงขลา" },
];

export default function MetaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metaAdsSchema) }} />
      <SchemaBreadcrumb items={[
        { name: "หน้าแรก", url: "/" },
        { name: "บริการ", url: "/services" },
        { name: "โฆษณาออนไลน์", url: "/services/ads" },
        { name: "Meta Ads", url: "/services/ads/meta-ads" },
      ]} />
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
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <Link href="/services/ads" style={{ textDecoration: "none", color: "#6e7881" }}>บริการ Ads</Link>
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <span style={{ color }}>Meta Ads</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: bgLight, border: `1px solid rgba(0,129,251,0.25)` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                Meta Ads Agency · ภูเก็ต | กระบี่ | สงขลา
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
                  และ Convert พวกเขาให้เป็นลูกค้าจริง ไม่ว่าธุรกิจของคุณจะอยู่ที่ภูเก็ต กระบี่ หรือสงขลา
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: `linear-gradient(135deg,${color} 0%,#4facfe 100%)`, boxShadow: `0 16px 40px -8px ${color}55` }}
                  >
                    รับ Free Meta Ads Audit
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base transition-all hover:bg-[#d4d7d9]"
                    style={{ fontWeight: 300, color: "#191c1e", backgroundColor: "#e0e3e5" }}
                  >
                    ปรึกษาฟรี
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>chat_bubble</span>
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

              {/* Right: Meta Ads visual */}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                <style>{`
                  @keyframes ig-heart-pop { 0% { transform:scale(0); opacity:0; } 40% { transform:scale(1.35); opacity:1; } 100% { transform:scale(1); opacity:1; } }
                  @keyframes ig-float-heart { 0% { opacity:1; transform:translateY(0) scale(1); } 100% { opacity:0; transform:translateY(-55px) scale(0.4); } }
                  @keyframes ig-like-blink { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
                  @keyframes ig-badge-glow { 0%,100% { box-shadow:0 8px 24px rgba(225,48,108,0.35); } 50% { box-shadow:0 14px 40px rgba(225,48,108,0.70); } }
                  @keyframes ig-float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-6px); } }
                  @keyframes ig-gradient-shift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
                  @keyframes ig-story-in { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
                  @keyframes fb-reaction-float { 0% { opacity:1; transform:translateY(0) scale(1); } 100% { opacity:0; transform:translateY(-60px) scale(0.3); } }
                  @keyframes fb-like-pop { 0%,100% { transform:scale(1); } 40% { transform:scale(1.4); } 70% { transform:scale(0.9); } }
                  @keyframes fb-notif-pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.3); } }
                  @keyframes fb-counter-blink { 0%,100% { opacity:1; } 50% { opacity:0.45; } }
                  @keyframes fb-badge-glow { 0%,100% { box-shadow:0 8px 24px rgba(24,119,242,0.35); } 50% { box-shadow:0 14px 40px rgba(24,119,242,0.70); } }
                  @keyframes fb-float-left { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
                `}</style>

                {/* Ambient glow */}
                <div style={{ position: "absolute", inset: "-28px", background: "radial-gradient(ellipse at 55% 40%, rgba(225,48,108,0.13) 0%, transparent 65%)", pointerEvents: "none", borderRadius: "2rem" }} />

                {/* Platform logos */}
                <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 14px", borderRadius: 24, backgroundColor: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                    <Image src="/pic/Facebook_Logo_(2019).png" alt="Facebook" width={22} height={22} style={{ objectFit: "contain" }} />
                    <span style={{ fontSize: 12, fontWeight: 300, color: "#1877F2" }}>Facebook</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 14px", borderRadius: 24, backgroundColor: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                    <Image src="/pic/Instagram_icon.png" alt="Instagram" width={22} height={22} style={{ objectFit: "contain" }} />
                    <span style={{ fontSize: 12, fontWeight: 300, color: "#E1306C" }}>Instagram</span>
                  </div>
                </div>

                {/* FB + IG Mockups side by side */}
                <div style={{ position: "relative", display: "flex", gap: 12, alignItems: "flex-end" }}>

                  {/* ── Facebook Phone Mockup ── */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    {/* Phone frame – silver/white */}
                    <div style={{
                      width: 192, height: 374,
                      borderRadius: 32,
                      backgroundColor: "#f0f0f0",
                      border: "6px solid #d4d4d4",
                      overflow: "hidden",
                      boxShadow: "0 28px 64px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.9)",
                      position: "relative",
                      display: "flex", flexDirection: "column",
                    }}>
                      {/* Status bar */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 14px 4px", backgroundColor: "#fff", flexShrink: 0 }}>
                        <span style={{ fontSize: 9, color: "#1c1e21", fontWeight: 600 }}>9:41</span>
                        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                          <span style={{ fontSize: 8, color: "#1c1e21" }}>●●●</span>
                          <span style={{ fontSize: 8, color: "#1c1e21" }}>▐▌</span>
                        </div>
                      </div>

                      {/* Facebook top nav */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 10px 6px", backgroundColor: "#fff", flexShrink: 0 }}>
                        <span style={{ fontSize: 18, color: "#1877F2", fontWeight: 900, letterSpacing: "-1px" }}>facebook</span>
                        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                          {/* Search */}
                          <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontSize: 12 }}>🔍</span>
                          </div>
                          {/* Messenger with notification */}
                          <div style={{ position: "relative", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontSize: 12 }}>💬</span>
                            <div style={{
                              position: "absolute", top: -2, right: -2,
                              width: 11, height: 11, borderRadius: "50%",
                              backgroundColor: "#f02849",
                              border: "1.5px solid #fff",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              animation: "fb-notif-pulse 1.8s ease infinite",
                            }}>
                              <span style={{ fontSize: 6, color: "#fff", fontWeight: 700 }}>3</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stories row */}
                      <div style={{ display: "flex", gap: 5, padding: "6px 8px 8px", backgroundColor: "#fff", borderBottom: "0.5px solid #e4e6eb", flexShrink: 0 }}>
                        {[
                          { label: "เพิ่มสตอรี่", isAdd: true },
                          { label: "apdigital", bg: "linear-gradient(135deg,#1877F2,#42a5f5)" },
                          { label: "hotel_pkt", bg: "linear-gradient(135deg,#f09433,#dc2743)" },
                          { label: "spa_krabi", bg: "linear-gradient(135deg,#405DE6,#C13584)" },
                        ].map((s, i) => (
                          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                            <div style={{
                              width: 38, height: 56, borderRadius: 10,
                              background: s.isAdd ? "#f0f2f5" : s.bg,
                              display: "flex", flexDirection: "column",
                              alignItems: "center", justifyContent: s.isAdd ? "flex-end" : "flex-start",
                              overflow: "hidden", padding: s.isAdd ? "0 0 4px" : "4px",
                              border: s.isAdd ? "none" : "2px solid #1877F2",
                              position: "relative",
                            }}>
                              {s.isAdd ? (
                                <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <span style={{ color: "#fff", fontSize: 13, lineHeight: 1, fontWeight: 700 }}>+</span>
                                </div>
                              ) : (
                                <div style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "#fff", border: "2px solid #1877F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <span style={{ fontSize: 7, color: "#1877F2", fontWeight: 700 }}>AP</span>
                                </div>
                              )}
                            </div>
                            <span style={{ fontSize: 6.5, color: "#65676b", maxWidth: 36, textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{s.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Feed post */}
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#fff" }}>
                        {/* Post header */}
                        <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 10px 5px" }}>
                          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#1877F2,#0a5dc2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ color: "#fff", fontSize: 8, fontWeight: 700 }}>AP</span>
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 10, color: "#1c1e21", fontWeight: 600, lineHeight: 1.3 }}>Surf Digital Agency</p>
                            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                              <span style={{ fontSize: 8, color: "#65676b" }}>Sponsored ·</span>
                              <span style={{ fontSize: 8 }}>🌐</span>
                            </div>
                          </div>
                          <span style={{ color: "#65676b", fontSize: 14 }}>⋯</span>
                        </div>

                        {/* Post copy */}
                        <p style={{ fontSize: 9, color: "#1c1e21", padding: "0 10px 6px", fontWeight: 300, lineHeight: 1.55 }}>
                          📈 ยอดขายเพิ่ม <strong>+350%</strong> ด้วย Meta Ads ✅
                        </p>

                        {/* Ad image – animated gradient */}
                        <div style={{
                          flex: 1,
                          background: "linear-gradient(135deg,#1877F2 0%,#0081FB 45%,#42a5f5 80%,#1877F2 100%)",
                          backgroundSize: "200% 200%",
                          animation: "ig-gradient-shift 4s ease infinite",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexDirection: "column", gap: 4,
                          minHeight: 90,
                        }}>
                          <p style={{ color: "#fff", fontSize: 20, fontWeight: 800, textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>ROI +350%</p>
                          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 8, letterSpacing: "0.05em" }}>Surf Digital · Meta Ads</p>
                        </div>

                        {/* Reaction summary */}
                        <div style={{ padding: "5px 10px 3px", borderBottom: "0.5px solid #e4e6eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <span style={{ fontSize: 11 }}>👍</span>
                            <span style={{ fontSize: 11 }}>❤️</span>
                            <span style={{ fontSize: 11 }}>😮</span>
                            <span style={{ fontSize: 8.5, color: "#65676b", animation: "fb-counter-blink 2.8s ease infinite" }}>3,147</span>
                          </div>
                          <div style={{ display: "flex", gap: 6 }}>
                            <span style={{ fontSize: 8.5, color: "#65676b" }}>💬 512</span>
                            <span style={{ fontSize: 8.5, color: "#65676b" }}>↗ 241</span>
                          </div>
                        </div>

                        {/* Action bar */}
                        <div style={{ display: "flex", justifyContent: "space-around", padding: "5px 6px", borderBottom: "0.5px solid #e4e6eb" }}>
                          {[
                            { icon: "👍", label: "ถูกใจ", active: true },
                            { icon: "💬", label: "แสดงความเห็น", active: false },
                            { icon: "↗", label: "แชร์", active: false },
                          ].map((a, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 3, padding: "2px 5px", borderRadius: 6 }}>
                              <span style={{
                                fontSize: 13,
                                animation: a.active ? "fb-like-pop 2.2s ease 0.4s infinite" : "none",
                                display: "inline-block",
                              }}>{a.icon}</span>
                              <span style={{ fontSize: 8, color: a.active ? "#1877F2" : "#65676b", fontWeight: a.active ? 600 : 300 }}>{a.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA button */}
                        <div style={{ padding: "6px 10px 8px" }}>
                          <div style={{ backgroundColor: "#1877F2", borderRadius: 7, padding: "7px 0", textAlign: "center" }}>
                            <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>ปรึกษาฟรีตอนนี้ →</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom nav */}
                      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "5px 0 9px", backgroundColor: "#fff", borderTop: "0.5px solid #e4e6eb", flexShrink: 0 }}>
                        {["🏠", "👥", "▶️", "🛒", "🔔"].map((icon, i) => (
                          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, position: "relative" }}>
                            <span style={{ fontSize: i === 0 ? 15 : 12, opacity: i === 0 ? 1 : 0.4 }}>{icon}</span>
                            {i === 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#1877F2", marginTop: 1 }} />}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating reactions rising from left */}
                    {[
                      { emoji: "👍", delay: "0s", dur: "2.4s", bot: 80 },
                      { emoji: "❤️", delay: "0.8s", dur: "2.8s", bot: 100 },
                      { emoji: "😮", delay: "1.6s", dur: "2.2s", bot: 60 },
                    ].map((r, i) => (
                      <div key={i} style={{
                        position: "absolute", bottom: r.bot, left: -10,
                        fontSize: 14, pointerEvents: "none",
                        animation: `fb-reaction-float ${r.dur} ease ${r.delay} infinite`,
                      }}>{r.emoji}</div>
                    ))}

                    {/* Floating "-60% CPL" badge */}
                    <div style={{
                      position: "absolute", top: 70, left: -22,
                      background: "linear-gradient(135deg,#1877F2,#0a5dc2)",
                      color: "#fff", borderRadius: 16, padding: "7px 13px",
                      fontSize: 11, fontWeight: 700,
                      animation: "fb-badge-glow 2s ease infinite",
                    }}>
                      📉 -60% CPL
                    </div>

                    {/* Floating reach badge bottom-right */}
                    <div style={{
                      position: "absolute", bottom: 48, right: -22,
                      backgroundColor: "#fff", borderRadius: 16, padding: "7px 13px",
                      fontSize: 11, fontWeight: 600, color: "#1877F2",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                      animation: "fb-float-left 3.2s ease infinite",
                    }}>
                      👥 3,147 Reach
                    </div>
                  </div>

                  {/* ── Instagram Phone Mockup ── */}
                  <div style={{ position: "relative" }}>
                  {/* Phone frame */}
                  <div style={{
                    width: 210, height: 390,
                    borderRadius: 34,
                    backgroundColor: "#0f0f0f",
                    border: "6px solid #1e1e1e",
                    overflow: "hidden",
                    boxShadow: "0 28px 64px rgba(0,0,0,0.38), inset 0 0 0 1px rgba(255,255,255,0.06)",
                    position: "relative",
                    display: "flex", flexDirection: "column",
                  }}>
                    {/* Status bar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 14px 4px", backgroundColor: "#0f0f0f", flexShrink: 0 }}>
                      <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>9:41</span>
                      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <span style={{ fontSize: 8, color: "#fff" }}>●●●</span>
                        <span style={{ fontSize: 8, color: "#fff" }}>▐▌</span>
                      </div>
                    </div>

                    {/* Instagram top nav */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 14px 8px", backgroundColor: "#0f0f0f", flexShrink: 0 }}>
                      <span style={{ fontSize: 15, color: "#fff", fontWeight: 700, fontFamily: "Georgia, serif" }}>Instagram</span>
                      <div style={{ display: "flex", gap: 14 }}>
                        <span style={{ fontSize: 17, color: "#fff" }}>♡</span>
                        <span style={{ fontSize: 15, color: "#fff" }}>✉</span>
                      </div>
                    </div>

                    {/* Stories row */}
                    <div style={{ display: "flex", gap: 8, padding: "6px 10px 8px", backgroundColor: "#0f0f0f", borderBottom: "0.5px solid #2a2a2a", flexShrink: 0 }}>
                      {[
                        { label: "Your Story", isAdd: true },
                        { label: "apdigital", gradient: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)" },
                        { label: "hotel_bkk", gradient: "linear-gradient(45deg,#f09433,#e6683c,#cc2366)" },
                        { label: "spa_krabi", gradient: "linear-gradient(45deg,#405DE6,#833AB4,#C13584)" },
                      ].map((s, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, animation: `ig-story-in 0.4s ease ${i * 0.1}s both` }}>
                          <div style={{ width: 36, height: 36, borderRadius: "50%", padding: 2, background: s.isAdd ? "#1e1e1e" : s.gradient }}>
                            <div style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#111", border: "2px solid #0f0f0f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {s.isAdd
                                ? <span style={{ color: "#0095f6", fontSize: 15, lineHeight: 1 }}>+</span>
                                : <span style={{ color: "#fff", fontSize: 8, fontWeight: 700 }}>AP</span>
                              }
                            </div>
                          </div>
                          <span style={{ fontSize: 7, color: "#888", overflow: "hidden", maxWidth: 34, textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Feed post */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                      {/* Post header */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px 6px" }}>
                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ color: "#fff", fontSize: 8, fontWeight: 700 }}>AP</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 10, color: "#fff", fontWeight: 600 }}>apdigital_th</p>
                          <p style={{ fontSize: 8, color: "#888" }}>Sponsored</p>
                        </div>
                        <span style={{ color: "#fff", fontSize: 14 }}>⋯</span>
                      </div>

                      {/* Post image – animated gradient */}
                      <div style={{
                        flex: 1,
                        background: "linear-gradient(135deg,#833AB4 0%,#C13584 30%,#E1306C 55%,#F77737 80%,#FCAF45 100%)",
                        backgroundSize: "200% 200%",
                        animation: "ig-gradient-shift 4s ease infinite",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column", gap: 5,
                        minHeight: 120,
                      }}>
                        <p style={{ color: "#fff", fontSize: 20, fontWeight: 800, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>ROI +350%</p>
                        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 9, letterSpacing: "0.05em" }}>Surf Digital · Meta Ads</p>
                      </div>

                      {/* Actions */}
                      <div style={{ padding: "8px 10px 6px", backgroundColor: "#0f0f0f" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                          <div style={{ display: "flex", gap: 12 }}>
                            <span style={{ fontSize: 18, color: "#E1306C", animation: "ig-heart-pop 2s ease 0.5s both" }}>♥</span>
                            <span style={{ fontSize: 15, color: "#fff" }}>💬</span>
                            <span style={{ fontSize: 14, color: "#fff" }}>↗</span>
                          </div>
                          <span style={{ fontSize: 14, color: "#fff" }}>🔖</span>
                        </div>
                        <p style={{ fontSize: 10, color: "#fff", fontWeight: 600, marginBottom: 2, animation: "ig-like-blink 2.5s ease infinite" }}>2,481 likes</p>
                        <p style={{ fontSize: 8, color: "#888" }}>View all 384 comments</p>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "7px 0 10px", backgroundColor: "#0f0f0f", borderTop: "0.5px solid #2a2a2a", flexShrink: 0 }}>
                      {["🏠", "🔍", "➕", "🎬", "👤"].map((icon, i) => (
                        <span key={i} style={{ fontSize: i === 2 ? 17 : 14, opacity: i === 0 ? 1 : 0.45 }}>{icon}</span>
                      ))}
                    </div>
                  </div>

                  {/* Floating hearts */}
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      position: "absolute", bottom: 64 + (i * 18), right: -8,
                      fontSize: 14, pointerEvents: "none",
                      animation: `ig-float-heart ${2.2 + i * 0.6}s ease ${i * 0.9}s infinite`,
                    }}>❤️</div>
                  ))}

                  {/* Floating Reach badge */}
                  <div style={{
                    position: "absolute", top: 72, right: -22,
                    background: "linear-gradient(135deg,#E1306C,#C13584)",
                    color: "#fff", borderRadius: 16, padding: "7px 13px",
                    fontSize: 11, fontWeight: 700,
                    animation: "ig-badge-glow 2s ease infinite",
                  }}>
                    5x Reach 🚀
                  </div>

                  {/* Floating bottom badge */}
                  <div style={{
                    position: "absolute", bottom: 46, left: -22,
                    backgroundColor: "#fff", borderRadius: 16, padding: "7px 13px",
                    fontSize: 11, fontWeight: 600, color: "#0081FB",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                    animation: "ig-float 3s ease infinite",
                  }}>
                    👁 1.2M Reach
                  </div>
                  </div>{/* end IG wrapper */}
                </div>{/* end FB+IG row */}

                {/* 2 KPI cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%" }}>
                  {kpis.slice(0, 2).map((k) => (
                    <div key={k.label} style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 5, backgroundColor: "#ffffff", borderRadius: "1.25rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                      <p style={{ fontSize: "1.25rem", fontWeight: 400, color }}>{k.value}</p>
                      <p style={{ fontSize: "0.8rem", color: "#191c1e", fontWeight: 300 }}>{k.label}</p>
                      <p style={{ fontSize: "0.7rem", color: "#6e7881", fontWeight: 200 }}>{k.sub}</p>
                    </div>
                  ))}
                </div>
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
                  ทีม Meta Ads ของ Surf Digital เชี่ยวชาญการสร้าง Custom Audience จาก First-party Data
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
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ color, fontSize: 24 }}>{f.icon}</span>
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
                  กระบวนการทำ Meta Ads<br />ของ Surf Digital
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
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
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
                <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#4285F4", fontSize: 28 }}>ads_click</span>
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
                <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#191c1e", fontSize: 28 }}>music_video</span>
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
                  ให้ทีม Meta Ads ของ Surf Digital วิเคราะห์ Ad Account ของคุณฟรี
                  พร้อมแผน Creative และ Audience Strategy ที่ตอบโจทย์ธุรกิจในภาคใต้โดยเฉพาะ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[#00658d] text-lg hover:scale-105 transition-transform"
                    style={{ fontWeight: 300, backgroundColor: "#ffffff", boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                  >
                    รับ Free Audit ตอนนี้
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                  </Link>
                  <a
                    href="https://page.line.me/106bhqto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-white text-lg hover:opacity-90 transition-opacity"
                    style={{ fontWeight: 300, backgroundColor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)" }}
                  >
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 20 }}>chat</span>
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

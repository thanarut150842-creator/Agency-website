import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurfLogo from "@/components/SurfLogo";

// Stable Unsplash URLs (replaced ephemeral Google Stitch URLs)
const IMG_HERO_BG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80";
const IMG_HERO_DASHBOARD =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80";
const IMG_CASE_VILLA =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80";
const IMG_CASE_ECOM =
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80";
const IMG_CASE_TOURISM =
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80";

const caseStudies = [
  {
    img: IMG_CASE_VILLA,
    alt: "Case Study SEO โครงการบ้านพักตากอากาศ Luxury ภูเก็ต",
    tag: "REAL ESTATE · ภูเก็ต",
    kpi: "ROI +350%",
    title: "SEO และ Ads ยกระดับโครงการบ้านพักตากอากาศ High-end ภูเก็ต",
    desc: "กลยุทธ์ SEO ภาคใต้ และ FB Ads เจาะกลุ่มลูกค้ากำลังซื้อสูงจากกรุงเทพฯ และต่างประเทศ ติดอันดับ 1 สำหรับ keyword ที่เกี่ยวข้อง",
  },
  {
    img: IMG_CASE_ECOM,
    alt: "Case Study E-Commerce ทรานส์ฟอร์มร้านค้าออนไลน์",
    tag: "E-COMMERCE",
    kpi: "Growth 2x",
    title: "การทรานส์ฟอร์มร้านค้าดั้งเดิมสู่ระบบขายออนไลน์เต็มรูปแบบ",
    desc: "สร้างระบบจัดการสต็อกและช่องทางขาย Social Commerce ที่ทำเงินได้ตลอด 24 ชม.",
  },
  {
    img: IMG_CASE_TOURISM,
    alt: "Case Study Local SEO ทัวร์กระบี่ พังงา",
    tag: "TOURISM · กระบี่",
    kpi: "Lead +120%",
    title: "Local SEO กระบี่ ดันแบรนด์ทัวร์ท้องถิ่นสู่แพลตฟอร์มจองระดับสากล",
    desc: "ใช้ Local SEO และ Content Marketing สร้างการมองเห็นใน Google Maps และ Search สำหรับนักท่องเที่ยวต่างชาติ",
  },
];

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "Surf Digital | Digital Agency ภาคใต้ ภูเก็ต กระบี่ สงขลา",
  description: "ดิจิทัลเอเจนซี่ภาคใต้ครบวงจร SEO, Google Ads, Meta Ads, TikTok Ads ที่ขับเคลื่อนด้วยผลลัพธ์จริง ปรึกษาฟรีไม่มีข้อผูกมัด",
  alternates: { canonical: "/" },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Surf Digital Agency ให้บริการ Digital Marketing อะไรบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surf Digital Agency ให้บริการครบวงจรด้าน Digital Marketing ได้แก่ SEO (Search Engine Optimization), Google Ads, Meta Ads (Facebook & Instagram), TikTok Ads, Content Marketing และ Web Analytics Setup สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา และทั่วภาคใต้",
      },
    },
    {
      "@type": "Question",
      name: "Surf Digital Agency ต่างจากเอเจนซี่ทั่วไปอย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เราผสมผสานประสบการณ์จากเอเจนซี่ชั้นนำในกรุงเทพฯ เข้ากับความเข้าใจตลาดภาคใต้อย่างลึกซึ้ง ทุกการตัดสินใจขับเคลื่อนด้วยข้อมูล (Data-Driven) และเราทำงานในฐานะพาร์ทเนอร์ ไม่ใช่แค่ vendor ที่รับจ้างทำตามสั่ง",
      },
    },
    {
      "@type": "Question",
      name: "Surf Digital Agency ดูแลธุรกิจในพื้นที่ไหนบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เราเชี่ยวชาญตลาดภาคใต้เป็นพิเศษ ครอบคลุมภูเก็ต กระบี่ สงขลา พังงา สุราษฎร์ธานี และทั่วภาคใต้ รวมถึงรับดูแลธุรกิจทั่วประเทศไทย",
      },
    },
    {
      "@type": "Question",
      name: "สามารถปรึกษาก่อนตัดสินใจได้ไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ได้เลยครับ เราให้คำปรึกษาฟรีไม่มีข้อผูกมัด พร้อมวิเคราะห์สถานการณ์ธุรกิจและวางแผนกลยุทธ์เบื้องต้นให้โดยไม่มีค่าใช้จ่าย ติดต่อได้ที่ 095-289-9881 หรือ Line @106bhqto",
      },
    },
    {
      "@type": "Question",
      name: "ค่าบริการ Digital Marketing เริ่มต้นที่เท่าไหร่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ค่าบริการขึ้นอยู่กับขอบเขตงานและ service ที่เลือก เราออกแบบ package เฉพาะสำหรับแต่ละธุรกิจ ติดต่อเพื่อรับใบเสนอราคาที่เหมาะกับงบประมาณของคุณ โดยไม่มีค่าใช้จ่ายในการประเมิน",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Navbar />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <header
          className="relative overflow-hidden"
          style={{ paddingTop: "9rem", paddingBottom: "4rem", background: "#f7f9fb" }}
        >
          {/* Background: mesh gradient blobs — blur reduced for mobile perf */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute rounded-full blur-[60px]" style={{ top: "-8rem", right: "-6rem", width: "45rem", height: "45rem", background: "radial-gradient(circle, rgba(0,174,239,0.13) 0%, transparent 70%)" }} />
            <div className="absolute rounded-full blur-[50px]" style={{ bottom: "-10rem", left: "-8rem", width: "40rem", height: "40rem", background: "radial-gradient(circle, rgba(63,88,129,0.10) 0%, transparent 70%)" }} />
            {/* Subtle dot grid */}
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.5 }} />
          </div>

          {/* Content */}
          <div className={`${wrap} relative z-10`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── Left: copy ── */}
              <div>
                {/* Live badge */}
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
                  style={{ background: "rgba(0,174,239,0.09)", border: "1px solid rgba(0,174,239,0.22)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#00aeef] animate-pulse" />
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#00658d", fontWeight: 300 }}>
                    Digital Marketing Agency · ภาคใต้
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-display mb-6"
                  style={{ fontWeight: 400, fontSize: "clamp(2.4rem, 4.8vw, 3.75rem)", lineHeight: 1.2, color: "#191c1e", letterSpacing: "-0.02em" }}
                >
                  ดิจิทัลเอเจนซี่<span style={{ color: "#00658d" }}>ภาคใต้</span><br />
                  <span
                    style={{
                      background: "linear-gradient(120deg, #00658d 20%, #00aeef 80%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ที่ขับเคลื่อนด้วยผลลัพธ์จริง
                  </span>
                </h1>

                <p
                  className="text-lg text-[#3e4850] mb-10 thai-leading"
                  style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}
                >
                  ให้บริการ SEO, Google Ads, Meta Ads และ TikTok Ads ครบวงจร
                  สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา และทั่วภาคใต้ ด้วยทีมที่ผ่านประสบการณ์จากเอเจนซี่ชั้นนำกรุงเทพฯ พร้อม Local Roots ที่คู่แข่งไม่มี
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{
                      fontWeight: 300,
                      background: "linear-gradient(135deg, #00658d 0%, #00aeef 100%)",
                      boxShadow: "0 16px 40px -8px rgba(0,174,239,0.45)",
                    }}
                  >
                    รับแผนกลยุทธ์ฟรี
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
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

                {/* Stats strip */}
                <div className="flex flex-wrap gap-8 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                  {[
                    { value: "50+", label: "แบรนด์ที่ไว้วางใจ" },
                    { value: "4+", label: "ปีในวงการ" },
                    { value: "98%", label: "ลูกค้าพึงพอใจ" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl text-[#00658d]" style={{ fontWeight: 400 }}>{s.value}</p>
                      <p className="text-sm text-[#3e4850] mt-0.5" style={{ fontWeight: 200 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: floating metric cards ── */}
              <div className="hidden lg:block relative" style={{ height: "520px" }}>

                {/* Glow ring */}
                <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,174,239,0.10) 0%, transparent 70%)" }} />
                <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "420px", height: "420px", borderRadius: "50%", border: "1px dashed rgba(0,101,141,0.15)" }} />
                <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "520px", height: "520px", borderRadius: "50%", border: "1px dashed rgba(0,101,141,0.07)" }} />

                {/* Center: Traffic chart card */}
                <div
                  className="absolute"
                  style={{
                    top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                    width: "230px", background: "#ffffff", borderRadius: "1.5rem",
                    padding: "1.5rem", boxShadow: "0 32px 64px -16px rgba(0,33,71,0.14)", zIndex: 3
                  }}
                >
                  <p className="text-xs text-[#3e4850] mb-3 uppercase tracking-wider" style={{ fontWeight: 200 }}>Organic Traffic</p>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-1.5 mb-4" style={{ height: "60px" }}>
                    {[30, 50, 38, 62, 45, 78, 58, 95, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: i === 7
                            ? "linear-gradient(to top, #00658d, #00aeef)"
                            : "rgba(0,101,141,0.10)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl text-[#191c1e]" style={{ fontWeight: 400 }}>24,580</p>
                      <p className="text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>visits / month</p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,174,239,0.10)", color: "#00658d", fontWeight: 300 }}
                    >
                      +240%
                    </span>
                  </div>
                </div>

                {/* Top-left: Search rank */}
                <div
                  className="absolute"
                  style={{
                    top: "4%", left: "0%",
                    background: "#3f5881", borderRadius: "1.25rem",
                    padding: "1.25rem 1.5rem", color: "white",
                    boxShadow: "0 20px 48px -8px rgba(63,88,129,0.35)", zIndex: 4,
                  }}
                >
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#00aeef", fontSize: 22, display: "block", marginBottom: "0.5rem" }}>search</span>
                  <p className="text-3xl" style={{ fontWeight: 400 }}>
                    #<span style={{ color: "#00aeef" }}>1</span>
                  </p>
                  <p className="text-xs mt-0.5" style={{ fontWeight: 200, opacity: 0.75 }}>Search Ranking</p>
                </div>

                {/* Top-right: Clients */}
                <div
                  className="absolute"
                  style={{
                    top: "6%", right: "0%",
                    background: "#ffffff", borderRadius: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    boxShadow: "0 20px 40px -8px rgba(0,33,71,0.10)", zIndex: 4,
                  }}
                >
                  <div className="flex -space-x-2 mb-3">
                    {["#c6e7ff", "#d6e3ff", "#b0d8f0", "#9cf0ff"].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <p className="text-2xl text-[#191c1e]" style={{ fontWeight: 400 }}>50+</p>
                  <p className="text-xs text-[#3e4850] mt-0.5" style={{ fontWeight: 200 }}>Happy Clients</p>
                </div>

                {/* Bottom-left: ROI */}
                <div
                  className="absolute"
                  style={{
                    bottom: "6%", left: "2%",
                    background: "linear-gradient(135deg, #00658d 0%, #00aeef 100%)",
                    borderRadius: "1.25rem", padding: "1.25rem 1.5rem",
                    color: "white", boxShadow: "0 20px 48px -8px rgba(0,174,239,0.40)", zIndex: 4,
                  }}
                >
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 22, display: "block", marginBottom: "0.5rem" }}>trending_up</span>
                  <p className="text-3xl" style={{ fontWeight: 400 }}>350%</p>
                  <p className="text-xs mt-0.5" style={{ fontWeight: 200, opacity: 0.85 }}>Average ROI</p>
                </div>

                {/* Bottom-right: Satisfaction */}
                <div
                  className="absolute"
                  style={{
                    bottom: "8%", right: "1%",
                    background: "#f2f4f6", borderRadius: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    boxShadow: "0 12px 32px rgba(0,33,71,0.07)", zIndex: 4,
                  }}
                >
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map((i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontSize: 14, color: "#FFB800" }}>star</span>
                    ))}
                  </div>
                  <p className="text-2xl text-[#191c1e]" style={{ fontWeight: 400 }}>98%</p>
                  <p className="text-xs text-[#3e4850] mt-0.5" style={{ fontWeight: 200 }}>Satisfaction Rate</p>
                </div>

                {/* Mid-right: years */}
                <div
                  className="absolute"
                  style={{
                    top: "42%", right: "-2%",
                    background: "#ffffff", borderRadius: "1rem",
                    padding: "1rem 1.25rem", textAlign: "center",
                    boxShadow: "0 12px 32px rgba(0,33,71,0.09)", zIndex: 4, border: "1px solid rgba(0,101,141,0.08)"
                  }}
                >
                  <p className="text-3xl text-[#00658d]" style={{ fontWeight: 400 }}>4+</p>
                  <p className="text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>ปีในวงการ</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Stats bar ────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div className={wrap}>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { val: "50+",  lbl: "แบรนด์ที่ไว้วางใจ",  sub: "ภูเก็ต · กระบี่ · สงขลา และทั่วไทย" },
                { val: "240%", lbl: "Traffic เพิ่มเฉลี่ย", sub: "ภายใน 6 เดือนแรก" },
                { val: "4+",   lbl: "ปีในวงการ",            sub: "ประสบการณ์ Digital Marketing" },
                { val: "98%",  lbl: "ลูกค้าพึงพอใจ",       sub: "รีวิวจากลูกค้าจริง" },
              ].map((s, i) => (
                <div
                  key={s.lbl}
                  className="flex flex-col items-center text-center py-10 px-6"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "clamp(2.4rem, 4vw, 3.25rem)",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      background: "linear-gradient(135deg, #00658d 20%, #00aeef 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.val}
                  </p>
                  <p className="text-sm text-[#191c1e] mb-1" style={{ fontWeight: 300 }}>{s.lbl}</p>
                  <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Grid ─────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>

            {/* Section header */}
            <div className="text-center mb-16" style={{ maxWidth: "46rem", margin: "0 auto 4rem" }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-5"
                style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}>
                บริการของเรา
              </span>
              <h2 style={{ fontWeight: 400, color: "#191c1e", fontSize: "clamp(1.85rem,3.5vw,2.75rem)", lineHeight: 1.25 }}>
                ทุกแพลตฟอร์ม ทุกกลยุทธ์<br />
                <span style={{ background: "linear-gradient(135deg,#00658d 20%,#00aeef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  ผลลัพธ์วัดได้ทุกบาท
                </span>
              </h2>
              <p className="mt-4 thai-leading mx-auto" style={{ color: "#6e7881", fontWeight: 200, maxWidth: "36rem", lineHeight: 1.8 }}>
                ตั้งแต่ SEO ระยะยาว ไปถึง Paid Ads ที่เห็นผลทันที — เราออกแบบ Media Mix ที่เหมาะกับธุรกิจคุณโดยเฉพาะ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* ── SEO Card ── */}
              <Link href="/services/seo" className="group block" style={{ textDecoration: "none" }}>
                <div className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_64px_-8px_rgba(0,101,141,0.30)]"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.75rem", border: "1.5px solid rgba(0,101,141,0.12)", boxShadow: "0 2px 16px -4px rgba(0,101,141,0.08)" }}>
                  {/* Visual */}
                  <div className="relative overflow-hidden" style={{ height: 240, background: "linear-gradient(145deg,#004e6e 0%,#0088c2 60%,#00aeef 100%)" }}>
                    {/* Decorative circles */}
                    <div style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"rgba(255,255,255,0.06)" }} />
                    <div style={{ position:"absolute", bottom:-30, left:-30, width:120, height:120, borderRadius:"50%", background:"rgba(255,255,255,0.04)" }} />
                    {/* Phone mockup */}
                    <div style={{ position:"absolute", right:16, top:"50%", transform:"translateY(-50%) rotate(6deg)", width:100, height:178, borderRadius:18, border:"3px solid rgba(255,255,255,0.45)", background:"white", overflow:"hidden", boxShadow:"0 16px 40px rgba(0,0,0,0.28)" }}>
                      <div style={{ background:"#f1f3f4", height:6, borderRadius:"0 0 4px 4px", margin:"0 14px 6px" }} />
                      <div style={{ padding:"0 7px", display:"flex", flexDirection:"column", gap:5 }}>
                        <div style={{ background:"#f8f9fa", borderRadius:12, padding:"4px 8px", display:"flex", alignItems:"center", gap:4 }}>
                          <span style={{ fontSize:8, color:"#4285F4" }}>🔍</span>
                          <span style={{ fontSize:7, color:"#5f6368" }}>SEO ภาคใต้</span>
                        </div>
                        <div style={{ background:"rgba(0,101,141,0.07)", border:"1px solid rgba(0,101,141,0.18)", borderRadius:8, padding:"6px 7px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:3 }}>
                            <span style={{ background:"#00aeef", color:"white", fontSize:7, fontWeight:700, padding:"0 4px 1px", borderRadius:3 }}>#1</span>
                            <span style={{ fontSize:7, color:"#188038" }}>surfdigitalth.com</span>
                          </div>
                          <p style={{ fontSize:8, color:"#1a0dab", fontWeight:600, lineHeight:1.3 }}>Surf Digital – SEO ภาคใต้</p>
                          <p style={{ fontSize:6.5, color:"#5f6368", marginTop:2 }}>⭐⭐⭐⭐⭐ ปรึกษาฟรี</p>
                        </div>
                        {["#2 คู่แข่ง A...", "#3 คู่แข่ง B..."].map((r,i) => (
                          <div key={i} style={{ background:"#f8f9fa", borderRadius:6, padding:"4px 7px", opacity:0.45 }}>
                            <p style={{ fontSize:7, color:"#aaa" }}>{r}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Stat badge */}
                    <div style={{ position:"absolute", top:20, left:18, background:"rgba(255,255,255,0.95)", borderRadius:14, padding:"10px 14px", boxShadow:"0 8px 24px rgba(0,0,0,0.18)" }}>
                      <p style={{ fontSize:"1.75rem", fontWeight:700, color:"#00658d", lineHeight:1, letterSpacing:"-0.03em" }}>+240%</p>
                      <p style={{ fontSize:8.5, color:"#3e4850", fontWeight:300, marginTop:3 }}>Organic Traffic</p>
                    </div>
                    {/* Bottom pill */}
                    <div style={{ position:"absolute", bottom:16, left:18, background:"rgba(255,255,255,0.15)", borderRadius:999, padding:"4px 12px", border:"1px solid rgba(255,255,255,0.28)" }}>
                      <span style={{ fontSize:9, color:"white", fontWeight:300 }}>ติดหน้าแรก · ภายใน 90 วัน</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 19, color: "#00658d" }}>search</span>
                      <h3 style={{ fontWeight: 400, color: "#191c1e", fontSize: "1.1rem" }}>SEO</h3>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}>Most Popular</span>
                    </div>
                    <p style={{ fontWeight: 200, color: "#3e4850", lineHeight: 1.75, fontSize: "0.83rem", flex: 1 }}>
                      ติดหน้าแรก Google อย่างยั่งยืน ครอบคลุม Technical, Local SEO และ Content Strategy ที่วัดผลได้
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {["Technical SEO", "Local SEO", "Content"].map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "rgba(0,101,141,0.07)", color: "#00658d", fontWeight: 300 }}>{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 py-3 rounded-full text-sm transition-all group-hover:opacity-90"
                      style={{ background: "linear-gradient(135deg,#00658d,#00aeef)", color: "#fff", fontWeight: 300 }}>
                      ดูรายละเอียด <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ── Google Ads Card ── */}
              <Link href="/services/ads/google-ads" className="group block" style={{ textDecoration: "none" }}>
                <div className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_64px_-8px_rgba(66,133,244,0.30)]"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.75rem", border: "1.5px solid rgba(66,133,244,0.15)", boxShadow: "0 2px 16px -4px rgba(66,133,244,0.08)" }}>
                  {/* Visual */}
                  <div className="relative overflow-hidden" style={{ height: 240, background: "linear-gradient(145deg,#1a3fa8 0%,#3b6ff5 60%,#6ea6ff 100%)" }}>
                    <div style={{ position:"absolute", top:-50, left:-50, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
                    <div style={{ position:"absolute", bottom:-20, right:-20, width:100, height:100, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
                    {/* Dashboard card mockup */}
                    <div style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-52%) rotate(5deg)", width:112, height:162, borderRadius:14, background:"white", overflow:"hidden", boxShadow:"0 16px 40px rgba(0,0,0,0.28)" }}>
                      <div style={{ background:"linear-gradient(90deg,#4285F4,#34a853)", height:4 }} />
                      <div style={{ padding:"8px 8px 6px" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                          <span style={{ fontSize:7.5, fontWeight:600, color:"#4285F4" }}>Google Ads</span>
                          <span style={{ fontSize:7, background:"#34a853", color:"white", borderRadius:999, padding:"1px 5px" }}>● Live</span>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4, marginBottom:6 }}>
                          {[{l:"ROAS",v:"6.4x",c:"#4285F4"},{l:"Conv.",v:"248",c:"#34a853"}].map(k=>(
                            <div key={k.l} style={{ background:"#f8f9fa", borderRadius:6, padding:"4px 5px", textAlign:"center" }}>
                              <p style={{ fontSize:12, fontWeight:700, color:k.c, lineHeight:1 }}>{k.v}</p>
                              <p style={{ fontSize:6.5, color:"#888" }}>{k.l}</p>
                            </div>
                          ))}
                        </div>
                        {/* Mini bar chart */}
                        <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:40 }}>
                          {[18,26,22,40,30,55,48,72,60,90].map((h,i)=>(
                            <div key={i} style={{ flex:1, height:`${h}%`, background:i>=7?"linear-gradient(to top,#4285F4,#6ea6ff)":"rgba(66,133,244,0.2)", borderRadius:"2px 2px 0 0" }} />
                          ))}
                        </div>
                        <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                          <span style={{ fontSize:6.5, color:"#aaa" }}>Jan</span>
                          <span style={{ fontSize:6.5, color:"#4285F4", fontWeight:700 }}>+34%</span>
                        </div>
                      </div>
                    </div>
                    {/* Stat badge */}
                    <div style={{ position:"absolute", top:20, left:18, background:"rgba(255,255,255,0.95)", borderRadius:14, padding:"10px 14px", boxShadow:"0 8px 24px rgba(0,0,0,0.18)" }}>
                      <p style={{ fontSize:"1.75rem", fontWeight:700, color:"#4285F4", lineHeight:1, letterSpacing:"-0.03em" }}>6.4x</p>
                      <p style={{ fontSize:8.5, color:"#3e4850", fontWeight:300, marginTop:3 }}>ROAS เฉลี่ย</p>
                    </div>
                    {/* Bottom pill */}
                    <div style={{ position:"absolute", bottom:16, left:18, background:"rgba(255,255,255,0.15)", borderRadius:999, padding:"4px 12px", border:"1px solid rgba(255,255,255,0.28)" }}>
                      <span style={{ fontSize:9, color:"white", fontWeight:300 }}>84,502 Impressions / สัปดาห์</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span style={{ fontSize: 19, fontWeight: 700, color: "#4285F4", lineHeight: 1 }}>G</span>
                      <h3 style={{ fontWeight: 400, color: "#191c1e", fontSize: "1.1rem" }}>Google Ads</h3>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#e8f0fe", color: "#1a56db", fontWeight: 300 }}>Quick Results</span>
                    </div>
                    <p style={{ fontWeight: 200, color: "#3e4850", lineHeight: 1.75, fontSize: "0.83rem", flex: 1 }}>
                      เข้าถึงลูกค้าที่พร้อมซื้อตอนนี้ด้วย Search, Display และ YouTube Ads ที่วัด ROI ได้ทันที
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {["Search Ads", "Display", "YouTube"].map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "rgba(66,133,244,0.08)", color: "#4285F4", fontWeight: 300 }}>{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 py-3 rounded-full text-sm transition-all group-hover:opacity-90"
                      style={{ background: "linear-gradient(135deg,#4285F4,#34a853)", color: "#fff", fontWeight: 300 }}>
                      ดูรายละเอียด <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ── Meta Ads Card ── */}
              <Link href="/services/ads/meta-ads" className="group block" style={{ textDecoration: "none" }}>
                <div className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_64px_-8px_rgba(0,129,251,0.30)]"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.75rem", border: "1.5px solid rgba(0,129,251,0.15)", boxShadow: "0 2px 16px -4px rgba(0,129,251,0.08)" }}>
                  {/* Visual */}
                  <div className="relative overflow-hidden" style={{ height: 240, background: "linear-gradient(145deg,#0042a8 0%,#0081FB 60%,#33aaff 100%)" }}>
                    <div style={{ position:"absolute", top:-40, right:-40, width:150, height:150, borderRadius:"50%", background:"rgba(255,255,255,0.06)" }} />
                    {/* Phone mockup - FB post */}
                    <div style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%) rotate(5deg)", width:100, height:174, borderRadius:18, border:"3px solid rgba(255,255,255,0.45)", background:"white", overflow:"hidden", boxShadow:"0 16px 40px rgba(0,0,0,0.28)" }}>
                      <div style={{ background:"#f0f2f5", height:5 }} />
                      {/* Post header */}
                      <div style={{ padding:"5px 7px", display:"flex", alignItems:"center", gap:5 }}>
                        <div style={{ width:22, height:22, borderRadius:"50%", background:"linear-gradient(135deg,#00658d,#00aeef)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <span style={{ fontSize:8, color:"white", fontWeight:700 }}>S</span>
                        </div>
                        <div>
                          <p style={{ fontSize:7.5, fontWeight:700, color:"#1c1e21" }}>Surf Digital</p>
                          <p style={{ fontSize:6.5, color:"#8a8d91" }}>Sponsored · 🌏</p>
                        </div>
                      </div>
                      {/* Image area */}
                      <div style={{ margin:"0 5px", borderRadius:8, background:"linear-gradient(135deg,rgba(0,101,141,0.12),rgba(0,174,239,0.18))", height:68, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                        <p style={{ fontSize:14, fontWeight:800, color:"#0064c8", letterSpacing:"-0.02em" }}>ROI +350%</p>
                        <p style={{ fontSize:7, color:"#3e4850" }}>ผลลัพธ์เฉลี่ยลูกค้า</p>
                      </div>
                      {/* Engagement */}
                      <div style={{ padding:"4px 7px", borderTop:"1px solid #f0f2f5", display:"flex", justifyContent:"space-between", marginTop:3 }}>
                        <div style={{ display:"flex", gap:2 }}>
                          <span style={{ fontSize:10 }}>👍</span><span style={{ fontSize:10 }}>❤️</span>
                          <span style={{ fontSize:7, color:"#8a8d91", alignSelf:"center" }}>2.4K</span>
                        </div>
                        <span style={{ fontSize:7, color:"#8a8d91" }}>120 shares</span>
                      </div>
                      {/* CTA */}
                      <div style={{ margin:"4px 7px 6px", background:"#0081FB", borderRadius:6, padding:"4px 0", textAlign:"center" }}>
                        <span style={{ fontSize:8, color:"white", fontWeight:700 }}>ปรึกษาฟรี</span>
                      </div>
                    </div>
                    {/* Stat badge */}
                    <div style={{ position:"absolute", top:20, left:18, background:"rgba(255,255,255,0.95)", borderRadius:14, padding:"10px 14px", boxShadow:"0 8px 24px rgba(0,0,0,0.18)" }}>
                      <p style={{ fontSize:"1.5rem", fontWeight:700, color:"#0064c8", lineHeight:1, letterSpacing:"-0.03em" }}>ROI+350%</p>
                      <p style={{ fontSize:8.5, color:"#3e4850", fontWeight:300, marginTop:3 }}>ผลลัพธ์เฉลี่ยของลูกค้า</p>
                    </div>
                    {/* Bottom pill */}
                    <div style={{ position:"absolute", bottom:16, left:18, background:"rgba(255,255,255,0.15)", borderRadius:999, padding:"4px 12px", border:"1px solid rgba(255,255,255,0.28)" }}>
                      <span style={{ fontSize:9, color:"white", fontWeight:300 }}>Facebook · Instagram · Reels</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#0081FB,#00b4ff)" }}>
                        <span style={{ fontSize: 10, color: "white", fontWeight: 700 }}>f</span>
                      </div>
                      <h3 style={{ fontWeight: 400, color: "#191c1e", fontSize: "1.1rem" }}>Meta Ads</h3>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#e7f3ff", color: "#0064c8", fontWeight: 300 }}>Brand Building</span>
                    </div>
                    <p style={{ fontWeight: 200, color: "#3e4850", lineHeight: 1.75, fontSize: "0.83rem", flex: 1 }}>
                      ปิดการขายบน Facebook & Instagram ด้วย Creative Ads ที่เจาะกลุ่มเป้าหมายแม่นยำที่สุด
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {["Facebook Ads", "Instagram", "Retargeting"].map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "rgba(0,129,251,0.08)", color: "#0064c8", fontWeight: 300 }}>{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 py-3 rounded-full text-sm transition-all group-hover:opacity-90"
                      style={{ background: "linear-gradient(135deg,#0081FB,#00b4ff)", color: "#fff", fontWeight: 300 }}>
                      ดูรายละเอียด <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ── TikTok Ads Card ── */}
              <Link href="/services/ads/tiktok-ads" className="group block" style={{ textDecoration: "none" }}>
                <div className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_64px_-8px_rgba(254,44,85,0.30)]"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.75rem", border: "1.5px solid rgba(254,44,85,0.15)", boxShadow: "0 2px 16px -4px rgba(254,44,85,0.08)" }}>
                  {/* Visual - dark */}
                  <div className="relative overflow-hidden" style={{ height: 240, background: "linear-gradient(145deg,#0d0a14 0%,#1e1535 60%,#2d1a5e 100%)" }}>
                    <div style={{ position:"absolute", top:-40, right:-40, width:150, height:150, borderRadius:"50%", background:"rgba(254,44,85,0.12)" }} />
                    <div style={{ position:"absolute", bottom:-30, left:-30, width:110, height:110, borderRadius:"50%", background:"rgba(105,201,208,0.08)" }} />
                    {/* TikTok phone mockup */}
                    <div style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%) rotate(5deg)", width:95, height:172, borderRadius:18, border:"3px solid rgba(255,255,255,0.3)", background:"linear-gradient(160deg,#1a1030 0%,#0d1520 100%)", overflow:"hidden", boxShadow:"0 16px 40px rgba(0,0,0,0.5)" }}>
                      {/* Top notch */}
                      <div style={{ display:"flex", justifyContent:"center", paddingTop:4 }}>
                        <div style={{ width:28, height:4, borderRadius:4, background:"rgba(255,255,255,0.15)" }} />
                      </div>
                      {/* Video bg */}
                      <div style={{ margin:"4px 5px", borderRadius:10, height:100, background:"linear-gradient(160deg,#2d1b69 0%,#11998e 100%)", position:"relative", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize:16, color:"white" }}>play_arrow</span>
                        </div>
                        <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"4px 6px", background:"linear-gradient(to top,rgba(0,0,0,0.7),transparent)" }}>
                          <p style={{ fontSize:7, color:"white", fontWeight:600 }}>@surfdigital_th</p>
                          <p style={{ fontSize:6, color:"rgba(255,255,255,0.75)" }}>ROI x5 🔥 #Ads</p>
                        </div>
                        <div style={{ position:"absolute", top:4, right:4, background:"#fe2c55", borderRadius:999, padding:"1px 4px" }}>
                          <span style={{ fontSize:6, color:"white", fontWeight:700 }}>♪</span>
                        </div>
                      </div>
                      {/* Stats sidebar */}
                      <div style={{ padding:"4px 8px", display:"flex", flexDirection:"column", gap:5 }}>
                        {[{icon:"favorite",val:"48.2K",c:"#fe2c55"},{icon:"chat_bubble",val:"3.1K",c:"white"},{icon:"share",val:"8.4K",c:"white"}].map(s=>(
                          <div key={s.icon} style={{ display:"flex", alignItems:"center", gap:5 }}>
                            <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize:12, color:s.c }}>{s.icon}</span>
                            <span style={{ fontSize:8, color:"rgba(255,255,255,0.85)", fontWeight:600 }}>{s.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Stat badge */}
                    <div style={{ position:"absolute", top:20, left:18, background:"rgba(255,255,255,0.95)", borderRadius:14, padding:"10px 14px", boxShadow:"0 8px 24px rgba(0,0,0,0.35)" }}>
                      <p style={{ fontSize:"1.75rem", fontWeight:700, color:"#fe2c55", lineHeight:1, letterSpacing:"-0.03em" }}>48.2K</p>
                      <p style={{ fontSize:8.5, color:"#3e4850", fontWeight:300, marginTop:3 }}>Likes · Viral Video Ads</p>
                    </div>
                    {/* Bottom pill */}
                    <div style={{ position:"absolute", bottom:16, left:18, background:"rgba(254,44,85,0.18)", borderRadius:999, padding:"4px 12px", border:"1px solid rgba(254,44,85,0.35)" }}>
                      <span style={{ fontSize:9, color:"#ffb3c0", fontWeight:300 }}>CTR 3.2% · In-Feed · TopView</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span style={{ fontSize: 18, lineHeight: 1 }}>🎵</span>
                      <h3 style={{ fontWeight: 400, color: "#191c1e", fontSize: "1.1rem" }}>TikTok Ads</h3>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#ffe8ec", color: "#c4193d", fontWeight: 300 }}>Viral</span>
                    </div>
                    <p style={{ fontWeight: 200, color: "#3e4850", lineHeight: 1.75, fontSize: "0.83rem", flex: 1 }}>
                      เจาะ Gen Z ด้วย Short-form Video Ads ที่ Viral ได้จริง Engagement สูงสุดในทุกแพลตฟอร์ม
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {["In-Feed Ads", "TopView", "Branded"].map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "rgba(254,44,85,0.07)", color: "#c4193d", fontWeight: 300 }}>{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 py-3 rounded-full text-sm transition-all group-hover:opacity-90"
                      style={{ background: "linear-gradient(135deg,#fe2c55,#ff6b35)", color: "#fff", fontWeight: 300 }}>
                      ดูรายละเอียด <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ── Comparison: Surf Digital vs Others ───────────────── */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#f7f9fb" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.055) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className={`${wrap} relative z-10`}>

            {/* Heading */}
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00658d", fontWeight: 300 }}>ทำไมต้องเลือกเรา</p>
              <h2 style={{ fontWeight: 400, color: "#191c1e", fontSize: "clamp(2rem,4vw,2.75rem)", lineHeight: 1.25 }}>
                ทีมจากเอเจนซี่ชั้นนำกรุงเทพฯ<br />
                <span style={{ background: "linear-gradient(135deg,#00658d 20%,#00aeef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  ที่เข้าใจตลาดภาคใต้ลึกที่สุด
                </span>
              </h2>
              <p className="mt-4 thai-leading" style={{ color: "#6e7881", fontWeight: 200, maxWidth: "34rem", margin: "1rem auto 0", lineHeight: 1.8 }}>
                ผสมกลยุทธ์ระดับสากลเข้ากับ Local Roots ภาคใต้ที่คู่แข่งไม่มี
              </p>
            </div>

            {/* ── Mobile layout (stacked cards) ── */}
            {(() => {
              const rows = [
                {
                  label: "ที่มาของทีม",
                  us: "ผ่านประสบการณ์จากเอเจนซี่ชั้นนำในกรุงเทพฯ นำ framework ระดับสากลมาปรับให้เหมาะกับตลาดภาคใต้โดยตรง",
                  them: "มักเป็นทีมท้องถิ่นที่ขาดการฝึกจากเอเจนซี่มาตรฐานสูง หรือทีมกรุงเทพฯ ที่ไม่รู้จักตลาดภาคใต้",
                },
                {
                  label: "ความเข้าใจตลาด",
                  us: "Local Roots ภูเก็ต–กระบี่–สงขลา เข้าใจพฤติกรรมผู้บริโภค ฤดูกาล และการแข่งขันเฉพาะภาคใต้อย่างลึกซึ้ง",
                  them: "อาจขาดบริบทท้องถิ่น ทำให้กลยุทธ์ไม่ตรงกับพฤติกรรมลูกค้าหรือช่วงเวลาที่เหมาะสมของตลาด",
                },
                {
                  label: "วิธีตัดสินใจ",
                  us: "Data-Driven ทุกการตัดสินใจ — วิเคราะห์ Keyword, Traffic และ ROI ก่อนเสมอ ไม่ใช้ความรู้สึก",
                  them: "อาจพึ่งประสบการณ์เชิงความรู้สึกหรือ template เดิม โดยไม่มีการพิสูจน์จากตัวเลขจริง",
                },
                {
                  label: "รูปแบบการทำงาน",
                  us: "Human Touch — ไม่ใช่แค่ vendor แต่เป็นพาร์ทเนอร์ที่เข้าใจธุรกิจ พร้อมรับฟังและปรับกลยุทธ์ทุกรอบ",
                  them: "อาจเปลี่ยนผู้ดูแลบัญชีบ่อย ทำให้เสียความต่อเนื่อง หรือสื่อสารผ่านระบบ ticket เท่านั้น",
                },
                {
                  label: "ความโปร่งใส",
                  us: "รายงาน Ranking, Traffic และ ROI ทุกเดือน ตรวจสอบได้ Real-time พร้อม Dashboard ที่เข้าใจง่าย",
                  them: "อาจรายงานเฉพาะตัวเลขที่ดูดี โดยไม่เปิดเผย methodology หรือผลลัพธ์ที่ยังต่ำกว่าเป้า",
                },
              ];
              return (
                <div className="md:hidden flex flex-col gap-4">
                  {rows.map((row, i) => (
                    <div key={i} style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                      {/* Label */}
                      <div style={{ padding: "0.875rem 1.25rem", backgroundColor: "#f7f9fb", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                        <p style={{ fontWeight: 400, color: "#191c1e", fontSize: "0.875rem" }}>{row.label}</p>
                      </div>
                      {/* Us row */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem 1.25rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "#00658d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 12, color: "#fff" }}>check</span>
                        </div>
                        <div>
                          <p style={{ fontSize: "0.7rem", color: "#00658d", fontWeight: 300, marginBottom: "0.25rem" }}>Surf Digital</p>
                          <p style={{ fontWeight: 200, color: "#3e4850", fontSize: "0.8rem", lineHeight: 1.7 }}>{row.us}</p>
                        </div>
                      </div>
                      {/* Them row */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem 1.25rem" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "rgba(196,25,61,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          <span style={{ fontSize: 10, color: "#c4193d", fontWeight: 700 }}>✕</span>
                        </div>
                        <div>
                          <p style={{ fontSize: "0.7rem", color: "#8a9bb0", fontWeight: 300, marginBottom: "0.25rem" }}>เอเจนซี่ทั่วไป</p>
                          <p style={{ fontWeight: 200, color: "#8a9bb0", fontSize: "0.8rem", lineHeight: 1.7 }}>{row.them}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* ── Desktop 3-col layout ── */}
            {(() => {
              const ROW_MIN = "5.5rem";
              const rows = [
                {
                  label: "ที่มาของทีม",
                  us: "ผ่านประสบการณ์จากเอเจนซี่ชั้นนำในกรุงเทพฯ นำ framework ระดับสากลมาปรับให้เหมาะกับตลาดภาคใต้โดยตรง",
                  them: "มักเป็นทีมท้องถิ่นที่ขาดการฝึกจากเอเจนซี่มาตรฐานสูง หรือทีมกรุงเทพฯ ที่ไม่รู้จักตลาดภาคใต้",
                },
                {
                  label: "ความเข้าใจตลาด",
                  us: "Local Roots ภูเก็ต–กระบี่–สงขลา เข้าใจพฤติกรรมผู้บริโภค ฤดูกาล และการแข่งขันเฉพาะภาคใต้อย่างลึกซึ้ง",
                  them: "อาจขาดบริบทท้องถิ่น ทำให้กลยุทธ์ไม่ตรงกับพฤติกรรมลูกค้าหรือช่วงเวลาที่เหมาะสมของตลาด",
                },
                {
                  label: "วิธีตัดสินใจ",
                  us: "Data-Driven ทุกการตัดสินใจ — วิเคราะห์ Keyword, Traffic และ ROI ก่อนเสมอ ไม่ใช้ความรู้สึก",
                  them: "อาจพึ่งประสบการณ์เชิงความรู้สึกหรือ template เดิม โดยไม่มีการพิสูจน์จากตัวเลขจริง",
                },
                {
                  label: "รูปแบบการทำงาน",
                  us: "Human Touch — ไม่ใช่แค่ vendor แต่เป็นพาร์ทเนอร์ที่เข้าใจธุรกิจ พร้อมรับฟังและปรับกลยุทธ์ทุกรอบ",
                  them: "อาจเปลี่ยนผู้ดูแลบัญชีบ่อย ทำให้เสียความต่อเนื่อง หรือสื่อสารผ่านระบบ ticket เท่านั้น",
                },
                {
                  label: "ความโปร่งใส",
                  us: "รายงาน Ranking, Traffic และ ROI ทุกเดือน ตรวจสอบได้ Real-time พร้อม Dashboard ที่เข้าใจง่าย",
                  them: "อาจรายงานเฉพาะตัวเลขที่ดูดี โดยไม่เปิดเผย methodology หรือผลลัพธ์ที่ยังต่ำกว่าเป้า",
                },
              ];

              const HDR_H = "9rem";

              return (
                <div className="hidden md:block overflow-x-auto">
                  <div style={{ minWidth: 560, display: "flex", gap: "1rem", alignItems: "flex-start" }}>

                    {/* ── Label column ── */}
                    <div style={{ width: 164, flexShrink: 0, paddingTop: HDR_H }}>
                      {rows.map((row, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", minHeight: ROW_MIN, paddingRight: "0.75rem", borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                          <p style={{ fontWeight: 400, color: "#191c1e", fontSize: "0.875rem", lineHeight: 1.5 }}>{row.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* ── Us: white card ── */}
                    <div style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "2rem", boxShadow: "0 24px 72px -12px rgba(0,101,141,0.18), 0 0 0 1.5px rgba(0,101,141,0.13)", overflow: "hidden" }}>
                      {/* Logo header */}
                      <div style={{ height: HDR_H, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.625rem", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "0 2rem", background: "linear-gradient(160deg, rgba(0,101,141,0.04) 0%, rgba(0,174,239,0.04) 100%)" }}>
                        {/* แนะนำ badge — อยู่บน */}
                        <div style={{ backgroundColor: "rgba(0,101,141,0.10)", borderRadius: 999, padding: "0.18rem 0.875rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#00aeef", display: "inline-block", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.65rem", color: "#00658d", fontWeight: 300, letterSpacing: "0.04em" }}>แนะนำ</span>
                        </div>
                        {/* Logo — อยู่ล่าง ใหญ่ขึ้น */}
                        <SurfLogo size="lg" />
                      </div>
                      {/* Rows */}
                      {rows.map((row, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", padding: "1.25rem 1.75rem", minHeight: ROW_MIN, borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                          <div style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "#00658d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3 }}>
                            <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 13, color: "#fff" }}>check</span>
                          </div>
                          <p style={{ fontWeight: 200, color: "#3e4850", fontSize: "0.875rem", lineHeight: 1.8 }}>{row.us}</p>
                        </div>
                      ))}
                    </div>

                    {/* ── Them column ── */}
                    <div style={{ flex: 1 }}>
                      {/* Header */}
                      <div style={{ height: HDR_H, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: 400, color: "#191c1e", fontSize: "1.6rem", letterSpacing: "-0.01em" }}>เอเจนซี่ทั่วไป</p>
                      </div>
                      {/* Rows */}
                      {rows.map((row, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.25rem 0.5rem 1.25rem 0.75rem", minHeight: ROW_MIN, borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                          <div style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: "rgba(196,25,61,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3 }}>
                            <span style={{ fontSize: 11, color: "#c4193d", fontWeight: 700, lineHeight: 1 }}>✕</span>
                          </div>
                          <p style={{ fontWeight: 200, color: "#8a9bb0", fontSize: "0.875rem", lineHeight: 1.8 }}>{row.them}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })()}

            <p className="text-center mt-10 text-xs" style={{ color: "#aab4be", fontWeight: 200 }}>
              * อิงจากประสบการณ์ลูกค้าที่เคยย้ายมาจากเอเจนซี่อื่น
            </p>

          </div>
        </section>

        {/* ── Case Studies ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div style={{ maxWidth: "36rem" }}>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-5"
                  style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}
                >
                  ผลงานจริง
                </span>
                <h2 className="text-4xl mb-3" style={{ fontWeight: 400, color: "#191c1e" }}>
                  ตัวเลขจริง จากธุรกิจจริง
                </h2>
                <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                  ผลลัพธ์ที่ได้รับจากลูกค้าที่ไว้วางใจ Surf Digital ในภูเก็ต กระบี่ และทั่วภาคใต้
                </p>
              </div>
              <Link href="/about" className="flex items-center gap-2 text-sm group whitespace-nowrap" style={{ color: "#00658d", fontWeight: 300, textDecoration: "none" }}>
                ดูทั้งหมด
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>

            {/* Horizontal case study cards */}
            <div className="flex flex-col gap-5">
              {caseStudies.map((c) => (
                <div
                  key={c.tag}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr]">
                    {/* Image with KPI overlay */}
                    <div className="relative overflow-hidden" style={{ minHeight: "220px" }}>
                      <Image
                        src={c.img}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,33,71,0.55) 0%, transparent 60%)" }} />
                      {/* KPI badge */}
                      <div className="absolute top-5 left-5">
                        <div className="px-4 py-2 rounded-xl backdrop-blur-sm" style={{ backgroundColor: "rgba(0,174,239,0.20)", border: "1px solid rgba(0,174,239,0.35)" }}>
                          <p className="text-2xl text-white" style={{ fontWeight: 400 }}>{c.kpi}</p>
                          <p className="text-xs" style={{ fontWeight: 200, color: "rgba(255,255,255,0.75)" }}>ผลลัพธ์ที่ได้</p>
                        </div>
                      </div>
                      {/* Category tag bottom */}
                      <div className="absolute bottom-5 left-5">
                        <span className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.90)", fontWeight: 200, backdropFilter: "blur(8px)" }}>
                          {c.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <h3
                        className="text-xl mb-3 group-hover:text-[#00658d] transition-colors thai-leading"
                        style={{ fontWeight: 300, color: "#191c1e", lineHeight: 1.5 }}
                      >
                        {c.title}
                      </h3>
                      <p className="text-[#3e4850] thai-leading text-sm mb-6" style={{ fontWeight: 200, lineHeight: 1.75 }}>
                        {c.desc}
                      </p>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#00658d", fontWeight: 300 }}>
                        อ่านรายละเอียด
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontSize: 16 }}>arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process Flow ──────────────────────────────────────── */}
        <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#191c1e" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute rounded-full blur-[120px]" style={{ top: "-6rem", right: "-6rem", width: "36rem", height: "36rem", background: "radial-gradient(circle, rgba(0,174,239,0.08) 0%, transparent 70%)" }} />
            <div className="absolute rounded-full blur-[100px]" style={{ bottom: "-5rem", left: "-5rem", width: "30rem", height: "30rem", background: "radial-gradient(circle, rgba(63,88,129,0.15) 0%, transparent 70%)" }} />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          </div>

          <div className={`${wrap} relative z-10`}>
            <div className="text-center mb-16">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-5"
                style={{ backgroundColor: "rgba(0,174,239,0.12)", color: "#00aeef", fontWeight: 300, border: "1px solid rgba(0,174,239,0.2)" }}
              >
                วิธีการทำงาน
              </span>
              <h2 className="text-4xl mb-4 text-white thai-leading" style={{ fontWeight: 400 }}>
                4 ขั้นตอนสู่ความสำเร็จ<br />
                <span style={{ color: "#00aeef" }}>ที่วัดผลได้จริง</span>
              </h2>
              <p className="thai-leading" style={{ fontWeight: 200, color: "rgba(255,255,255,0.50)", maxWidth: "36rem", margin: "0 auto" }}>
                กระบวนการที่ผ่านการพิสูจน์จากลูกค้ากว่า 50 ราย ตั้งแต่วันแรกจนถึงผลลัพธ์ที่จับต้องได้
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  num: "01", icon: "analytics", color: "#00aeef", bg: "rgba(0,174,239,0.10)",
                  title: "Audit & วิเคราะห์",
                  desc: "ตรวจสอบเว็บไซต์และคู่แข่งอย่างละเอียด หาโอกาสและ Gap ด้วยเครื่องมือระดับสากล",
                  items: ["Technical Audit", "Keyword Research", "Competitor Analysis"],
                },
                {
                  num: "02", icon: "lightbulb", color: "#FFB800", bg: "rgba(255,184,0,0.10)",
                  title: "วางกลยุทธ์",
                  desc: "ออกแบบ Roadmap ที่ชัดเจน กำหนด KPI และวาง Budget ให้คุ้มค่าสูงสุดสำหรับธุรกิจของคุณ",
                  items: ["Custom Roadmap", "KPI Setting", "Budget Planning"],
                },
                {
                  num: "03", icon: "rocket_launch", color: "#00aeef", bg: "rgba(0,174,239,0.10)",
                  title: "ลงมือปฏิบัติ",
                  desc: "ทีมผู้เชี่ยวชาญดำเนินการตาม Plan อย่างเป็นระบบ พร้อม Update ความคืบหน้าทุกสัปดาห์",
                  items: ["Content Creation", "Technical Fixes", "Campaign Launch"],
                },
                {
                  num: "04", icon: "trending_up", color: "#4ade80", bg: "rgba(74,222,128,0.10)",
                  title: "วัดผล & ขยาย",
                  desc: "ติดตาม Ranking และ ROI แบบ Real-time วิเคราะห์ข้อมูลเพื่อ Scale ผลลัพธ์ให้เติบโตต่อเนื่อง",
                  items: ["Monthly Reports", "ROI Tracking", "Scale & Optimize"],
                },
              ].map((step, idx) => (
                <div key={step.num} className="relative">
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-[3.25rem] right-0 translate-x-1/2 z-10 items-center justify-center w-5 h-5 rounded-full" style={{ backgroundColor: "#191c1e", border: "1px solid rgba(255,255,255,0.10)" }}>
                      <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>chevron_right</span>
                    </div>
                  )}
                  <div className="p-7 h-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: step.bg }}>
                        <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 28, color: step.color }}>{step.icon}</span>
                      </div>
                      <span className="text-4xl" style={{ fontWeight: 400, color: "rgba(255,255,255,0.12)", letterSpacing: "-0.02em" }}>{step.num}</span>
                    </div>
                    <h3 className="text-xl mb-3 text-white" style={{ fontWeight: 300 }}>{step.title}</h3>
                    <p className="thai-leading mb-5 text-sm" style={{ fontWeight: 200, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{step.desc}</p>
                    <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      {step.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                          <span className="text-xs" style={{ fontWeight: 200, color: "rgba(255,255,255,0.40)" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14 pt-14" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-sm" style={{ fontWeight: 200, color: "rgba(255,255,255,0.45)" }}>พร้อมเริ่มต้นแล้วใช่ไหม?</p>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00658d, #00aeef)", fontWeight: 300, textDecoration: "none", boxShadow: "0 16px 40px -8px rgba(0,174,239,0.30)" }}
              >
                รับแผนกลยุทธ์ฟรีวันนี้
                <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ───────────────────────────────────────── */}
        <section className="py-16 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <h2 className="text-center text-3xl mb-10" style={{ color: "#191c1e", fontWeight: 400 }}>
              เครื่องมือและเทคโนโลยีที่เราใช้
            </h2>
          </div>

          {(() => {
            type Tool = { name: string; src: string };

            // ทุก icon โหลดจาก /pic/tools/ ใน local เพื่อ stable + fast
            const row1: Tool[] = [
              { name: "Google Analytics",  src: "/pic/tools/google-analytics.svg" },
              { name: "Search Console",    src: "/pic/tools/google-search-console.svg" },
              { name: "Tag Manager",       src: "/pic/tools/google-tag-manager.svg" },
              { name: "Google Ads",        src: "/pic/tools/google-ads.svg" },
              { name: "Meta Ads",          src: "/pic/tools/meta.svg" },
              { name: "HubSpot",           src: "/pic/tools/hubspot.svg" },
              { name: "SEMRush",           src: "/pic/tools/semrush.svg" },
              { name: "Yoast SEO",         src: "/pic/tools/yoast.svg" },
              { name: "Cloudflare",        src: "/pic/tools/cloudflare.svg" },
              { name: "Wappalyzer",        src: "/pic/tools/wappalyzer.svg" },
            ];

            const row2: Tool[] = [
              { name: "Ahrefs",             src: "/pic/tools/ahrefs.png" },
              { name: "Looker Studio",      src: "/pic/tools/looker-studio.png" },
              { name: "PageSpeed Insights", src: "/pic/tools/pagespeedinsights.svg" },
              { name: "Rich Results Test",  src: "/pic/tools/rich-results-test.png" },
              { name: "Rank Math",          src: "/pic/tools/rank-math.png" },
              { name: "Ubersuggest",        src: "/pic/tools/ubersuggest.png" },
              { name: "SE Ranking",         src: "/pic/tools/se-ranking.png" },
              { name: "Screaming Frog",     src: "/pic/tools/screaming-frog.png" },
              { name: "Google Trends",      src: "/pic/tools/google-trends.png" },
            ];

            const mask = { maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" };

            // isFirstSet → card แรก (set 0) มี alt จริง + label visible
            // duplicates (set 1-3) → aria-hidden + alt="" เพื่อ Google ไม่เห็นซ้ำ และ screen reader ไม่อ่านซ้ำ
            const card = (tool: Tool, i: number, isDuplicate: boolean) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2.5 mx-5 shrink-0 group"
                aria-hidden={isDuplicate || undefined}
              >
                <div
                  className="w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden"
                  style={{
                    backgroundColor: "#f2f4f6",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={tool.src}
                    alt={isDuplicate ? "" : `โลโก้ ${tool.name}`}
                    width={40}
                    height={40}
                    loading="lazy"
                    style={{ objectFit: "contain", width: 40, height: 40 }}
                  />
                </div>
                <span className="text-xs text-[#3e4850] text-center leading-tight" style={{ fontWeight: 200, maxWidth: "5rem" }}>
                  {tool.name}
                </span>
              </div>
            );

            const renderRow = (tools: Tool[]) =>
              [0, 1, 2, 3].flatMap((setIdx) =>
                tools.map((t, i) => card(t, setIdx * tools.length + i, setIdx > 0))
              );

            return (
              <>
                {/* Row 1 – scrolls right */}
                <div className="relative mb-8" style={mask}>
                  <div className="flex marquee-right py-2" style={{ width: "max-content" }}>
                    {renderRow(row1)}
                  </div>
                </div>

                {/* Row 2 – scrolls left */}
                <div className="relative" style={mask}>
                  <div className="flex marquee-left py-2" style={{ width: "max-content" }}>
                    {renderRow(row2)}
                  </div>
                </div>
              </>
            );
          })()}
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white"
              style={{ backgroundColor: "#3f5881", borderRadius: "2rem", padding: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {/* Decorative blobs */}
              <div className="absolute pointer-events-none" style={{ top: "-4rem", right: "-4rem", width: "28rem", height: "28rem", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,174,239,0.18) 0%, transparent 65%)" }} />
              <div className="absolute pointer-events-none" style={{ bottom: "-3rem", left: "20%", width: "18rem", height: "18rem", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,101,141,0.15) 0%, transparent 65%)" }} />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div style={{ maxWidth: "38rem" }}>
                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-3 mb-7">
                    {["✓ ฟรี SEO Audit", "✓ ไม่มีข้อผูกมัด", "✓ ตอบกลับใน 24h"].map((b) => (
                      <span key={b} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.10)", fontWeight: 200 }}>{b}</span>
                    ))}
                  </div>
                  <h2 className="text-display mb-5 thai-leading" style={{ fontWeight: 400, fontSize: "2.5rem", lineHeight: 1.25 }}>
                    พร้อมให้ธุรกิจของคุณเติบโต<br />กับ Digital Agency ภาคใต้ที่รู้ใจ?
                  </h2>
                  <p className="text-lg thai-leading" style={{ fontWeight: 200, opacity: 0.72, lineHeight: 1.8 }}>
                    ทีม Surf Digital Agency พร้อมวิเคราะห์ธุรกิจและวางแผนกลยุทธ์ Digital Marketing ให้ฟรี ไม่มีข้อผูกมัด สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา และทั่วภาคใต้
                  </p>
                </div>

                {/* CTA card */}
                <div className="flex flex-col gap-4 flex-shrink-0 w-full lg:w-auto" style={{ minWidth: "260px", maxWidth: "320px" }}>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-sm text-white hover:scale-105 transition-transform whitespace-nowrap"
                    style={{ background: "linear-gradient(135deg, #00658d, #00aeef)", fontWeight: 300, textDecoration: "none", boxShadow: "0 20px 48px -8px rgba(0,174,239,0.45)" }}
                  >
                    จองเวลาปรึกษาฟรี
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 17 }}>calendar_month</span>
                  </Link>
                  <a
                    href="tel:0952899881"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-sm transition-all hover:bg-white/20 whitespace-nowrap"
                    style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "white", fontWeight: 200, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 17 }}>call</span>
                    095-289-9881
                  </a>
                  <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 200 }}>
                    จันทร์–ศุกร์ 09:00–18:00 น.
                  </p>
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

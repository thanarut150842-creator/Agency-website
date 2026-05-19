import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ SEO ภาคใต้ ภูเก็ต กระบี่ สงขลา | Surf Digital Agency",
  description:
    "รับทำ SEO ภาคใต้ครบวงจร ติดอันดับ Google ภูเก็ต กระบี่ สงขลา Technical SEO · Local SEO · Link Building วัดผลได้ทุกขั้นตอน",
  alternates: {
    canonical: "/services/seo",
  },
};

const color = "#00658d";
const bgLight = "rgba(0,101,141,0.07)";

const features = [
  {
    icon: "code",
    title: "Technical SEO",
    desc: "ตรวจสอบและแก้ไขโครงสร้างเว็บไซต์ทั้งหมด — Page Speed, Core Web Vitals, Mobile-First Indexing, Schema Markup, XML Sitemap, Robots.txt เพื่อให้ Google Crawl และ Index ได้อย่างสมบูรณ์",
  },
  {
    icon: "location_on",
    title: "Local SEO ภาคใต้",
    desc: "ติดอันดับ Google Maps และ Local Pack สำหรับ Keyword ท้องถิ่นในภูเก็ต กระบี่ สงขลา ด้วย Google Business Profile Optimization และ Hyper-local Keyword Strategy",
  },
  {
    icon: "article",
    title: "On-Page SEO & Content",
    desc: "ปรับ Title Tag, Meta Description, Heading Structure, Internal Linking และเขียน SEO Content ที่ตอบ Search Intent ของลูกค้าในแต่ละจังหวัดภาคใต้ได้ตรงจุด",
  },
  {
    icon: "link",
    title: "Link Building",
    desc: "สร้าง Backlink คุณภาพสูงจากเว็บไซต์ที่เชื่อถือได้ในอุตสาหกรรมที่เกี่ยวข้อง เพื่อเพิ่ม Domain Authority และความน่าเชื่อถือในสายตา Google อย่างยั่งยืน",
  },
  {
    icon: "analytics",
    title: "Analytics & Reporting",
    desc: "ตั้ง Google Analytics 4, Search Console, Looker Studio Dashboard แบบ Real-time เพื่อให้คุณเห็น Organic Traffic, Keyword Ranking และ ROI ได้ทุกเมื่อ",
  },
  {
    icon: "travel_explore",
    title: "International SEO",
    desc: "เหมาะสำหรับธุรกิจท่องเที่ยวในภูเก็ตและกระบี่ที่ต้องการลูกค้าต่างชาติ ด้วย Hreflang Setup, Multilingual Content Strategy และ International Keyword Research",
  },
];

const process = [
  {
    step: "01",
    title: "SEO Audit เชิงลึก",
    desc: "วิเคราะห์เว็บไซต์ปัจจุบันทั้งหมด ตรวจหา Technical Issues, Keyword Gap, Backlink Profile และ Competitor Analysis เพื่อสร้าง Roadmap ที่ชัดเจน",
  },
  {
    step: "02",
    title: "Keyword Strategy",
    desc: "ทำ Keyword Research เจาะตลาดภาคใต้ — ทั้ง Branded, Non-branded, Local และ Long-tail Keywords พร้อม Search Intent Mapping รายหน้า",
  },
  {
    step: "03",
    title: "Technical Fix & On-Page",
    desc: "แก้ไข Technical Issues ทั้งหมด ปรับ On-Page Elements ทุกหน้า และวางโครงสร้าง Internal Linking ที่ช่วยให้ Google เข้าใจ Website Architecture",
  },
  {
    step: "04",
    title: "Content Production",
    desc: "ผลิต SEO Content ที่ตอบ Search Intent — ตั้งแต่ Landing Page สำหรับ Service Keywords ไปจนถึง Blog Content ที่ดึง Traffic ระยะยาว",
  },
  {
    step: "05",
    title: "Link Building & Authority",
    desc: "สร้าง Backlink คุณภาพสูงจาก Relevant Websites ในอุตสาหกรรมท่องเที่ยว อสังหาฯ และธุรกิจบริการในภาคใต้",
  },
  {
    step: "06",
    title: "Monitor & Report รายเดือน",
    desc: "รายงาน Keyword Ranking, Organic Traffic และ Conversion ผ่าน Dashboard Real-time พร้อมประชุม Review และวางแผนเดือนถัดไปทุกเดือน",
  },
];

const kpis = [
  { value: "240%", label: "เพิ่ม Organic Traffic", sub: "เฉลี่ยใน 6 เดือนแรก" },
  { value: "15k+", label: "Keywords หน้าแรก Google", sub: "สะสมจากลูกค้าทุกราย" },
  { value: "50+", label: "ธุรกิจภาคใต้ไว้วางใจ", sub: "ภูเก็ต · กระบี่ · สงขลา" },
  { value: "98%", label: "Core Web Vitals Pass", sub: "มาตรฐาน Google 2024" },
];

const industries = [
  { icon: "hotel", label: "โรงแรม & Hospitality", city: "ภูเก็ต · กระบี่" },
  { icon: "villa", label: "อสังหาริมทรัพย์", city: "ภูเก็ต · สงขลา" },
  { icon: "sailing", label: "Tourism & Tour", city: "กระบี่ · พังงา" },
  { icon: "local_hospital", label: "คลินิก & Medical", city: "สงขลา · ภูเก็ต" },
  { icon: "restaurant", label: "ร้านอาหาร & F&B", city: "ทั่วภาคใต้" },
  { icon: "storefront", label: "E-Commerce & Retail", city: "ทั่วภาคใต้" },
];

const whyItems = [
  {
    icon: "location_on",
    title: "เชี่ยวชาญตลาดภาคใต้โดยเฉพาะ",
    desc: "เราเข้าใจ Search Behavior ของทั้งนักท่องเที่ยวต่างชาติที่ค้นหาโรงแรมในภูเก็ต และลูกค้าในพื้นที่ที่ค้นหาบริการในกระบี่ สงขลา ทำให้ Keyword Strategy แม่นยำกว่าเอเจนซี่ทั่วไป",
  },
  {
    icon: "bar_chart",
    title: "วัดผลได้จริงทุกเดือน",
    desc: "เราไม่รายงานแค่ Traffic แต่เชื่อม SEO เข้ากับ Business Outcome จริง — Lead, Form Submit, Phone Call, Revenue ผ่าน Dashboard ที่คุณเข้าถึงได้ตลอดเวลา",
  },
  {
    icon: "shield",
    title: "White-Hat เท่านั้น ไม่มีความเสี่ยง",
    desc: "เราทำ SEO ตาม Google Webmaster Guidelines 100% ไม่มี Black-Hat Technique ที่เสี่ยงโดนลงโทษ ผลลัพธ์ที่ได้จึงมั่นคงและยาวนาน",
  },
  {
    icon: "group",
    title: "ทีมผู้เชี่ยวชาญเฉพาะทาง",
    desc: "แต่ละโปรเจกต์ดูแลโดยทีมที่ประกอบด้วย SEO Strategist, Technical SEO Specialist, Content Writer และ Data Analyst ไม่ใช่คนเดียวทำทุกอย่าง",
  },
  {
    icon: "update",
    title: "อัปเดตตาม Google Algorithm",
    desc: "เราติดตาม Google Algorithm Update ทุก Update และปรับกลยุทธ์ทันที เพื่อให้เว็บไซต์ของคุณไม่ได้รับผลกระทบ และแข็งแกร่งขึ้นหลังทุก Core Update",
  },
  {
    icon: "handshake",
    title: "Transparent ทุกขั้นตอน",
    desc: "คุณเห็น Roadmap, Timeline และ Progress ที่ชัดเจนตั้งแต่วันแรก ไม่มีภาษา Tech ที่ซับซ้อน ทุกรายงานอธิบายด้วยภาษาที่เข้าใจง่ายและผูกกับเป้าหมายธุรกิจ",
  },
];

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "บริการรับทำ SEO ภาคใต้",
  serviceType: "SEO (Search Engine Optimization)",
  provider: {
    "@type": "Organization",
    name: "Surf Digital Agency",
    url: "https://surfdigitalth.com",
  },
  areaServed: [
    { "@type": "City", name: "ภูเก็ต" },
    { "@type": "City", name: "กระบี่" },
    { "@type": "City", name: "สงขลา" },
    { "@type": "City", name: "พังงา" },
    { "@type": "City", name: "สุราษฎร์ธานี" },
  ],
  description: "บริการ SEO ครบวงจรสำหรับธุรกิจในภาคใต้ ครอบคลุม Technical SEO, Local SEO, On-Page, Link Building และ Analytics",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "THB",
    lowPrice: "15000",
    highPrice: "80000",
    offerCount: "3",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Page SEO & Content" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Link Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Reporting" } },
    ],
  },
};

const seoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "บริการ SEO ของ Surf Digital ราคาเท่าไหร่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ราคาเริ่มต้น 15,000 บาทต่อเดือน สำหรับ Starter Plan เหมาะกับ SME ที่เพิ่งเริ่มทำ SEO ส่วนแพ็กเกจ Growth (30,000-80,000) เหมาะกับธุรกิจที่แข่งขันสูง สอบถามใบเสนอราคาฟรีได้ที่หน้าติดต่อ",
      },
    },
    {
      "@type": "Question",
      name: "SEO เห็นผลภายในกี่เดือน?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โดยทั่วไปจะเริ่มเห็นความเปลี่ยนแปลงใน 3-6 เดือน และเห็นผลชัดเจนใน 6-12 เดือน สำหรับ Local SEO ในจังหวัดภูเก็ต กระบี่ มักเห็นผลเร็วกว่าคือภายใน 1-3 เดือน",
      },
    },
    {
      "@type": "Question",
      name: "Surf Digital ทำ SEO ให้ธุรกิจประเภทไหนได้บ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เรามีประสบการณ์กับธุรกิจหลากหลาย โดยเฉพาะ โรงแรม ที่พัก อสังหาริมทรัพย์ Tourism คลินิก ร้านอาหาร และ E-Commerce ในภาคใต้",
      },
    },
    {
      "@type": "Question",
      name: "ทำงานกับลูกค้าต่างจังหวัดได้ไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ได้แน่นอน ทีมเราทำงานออนไลน์ผ่าน Zoom/Meet และ LINE OA สามารถนัดประชุมรายเดือนได้ทุกที่ และนัดลงพื้นที่ได้ทั่วภาคใต้",
      },
    },
  ],
};

const seoBreadcrumb = [
  { name: "หน้าแรก", url: "/" },
  { name: "บริการ", url: "/services" },
  { name: "SEO", url: "/services/seo" },
];

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoFaqSchema) }}
      />
      <SchemaBreadcrumb items={seoBreadcrumb} />
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <header className="relative overflow-hidden pt-36 pb-24" style={{ backgroundColor: "#f7f9fb" }}>
          {/* BG decor */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute rounded-full blur-[140px]"
              style={{ top: "-8rem", right: "-4rem", width: "50rem", height: "50rem", background: "radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)" }}
            />
            <div
              className="absolute rounded-full blur-[100px]"
              style={{ bottom: "-6rem", left: "-6rem", width: "36rem", height: "36rem", background: "radial-gradient(circle, rgba(0,101,141,0.08) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.7 }}
            />
          </div>

          <div className={`${wrap} relative z-10`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#6e7881] mb-8" style={{ fontWeight: 200 }}>
              <Link href="/" style={{ textDecoration: "none", color: "#6e7881" }}>หน้าแรก</Link>
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              <span style={{ color }}>บริการ SEO</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: bgLight, border: "1px solid rgba(0,101,141,0.22)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                SEO Agency · ภูเก็ต | กระบี่ | สงขลา
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
                  <span style={{ background: "linear-gradient(135deg,#00658d,#00aeef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    SEO ภาคใต้
                  </span>
                  <br />
                  ติดอันดับ Google<br />
                  วัดผลได้จริงทุกบาท
                </h1>
                <p className="text-lg text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}>
                  บริษัทรับทำ SEO ภาคใต้ที่เชี่ยวชาญตลาดภูเก็ต กระบี่ สงขลา
                  ด้วยกลยุทธ์ครบวงจรตั้งแต่ Technical SEO, Local SEO, Content Strategy
                  จนถึง Link Building — ทุกขั้นตอนวัดผลได้และโปร่งใส 100%
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: "linear-gradient(135deg,#00658d 0%,#00aeef 100%)", boxShadow: "0 16px 40px -8px rgba(0,174,239,0.40)" }}
                  >
                    รับการวิเคราะห์ SEO ฟรี
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>search</span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base transition-all hover:bg-[#d4d7d9]"
                    style={{ fontWeight: 300, color: "#191c1e", backgroundColor: "#e0e3e5" }}
                  >
                    ดูผลงานของเรา
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </Link>
                </div>

                {/* Service type tags */}
                <div className="flex flex-wrap gap-2">
                  {["Technical SEO", "Local SEO", "On-Page SEO", "Link Building", "Content SEO", "International SEO"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: bgLight, color, fontWeight: 300 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: SEO Rankings Dashboard */}
              <div style={{ position: "relative" }}>
                <style>{`
                  @keyframes seo-bar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
                  @keyframes seo-slide { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
                  @keyframes seo-badge { 0%,100% { box-shadow: 0 8px 24px rgba(52,168,83,0.35); } 50% { box-shadow: 0 14px 40px rgba(52,168,83,0.70); } }
                  @keyframes seo-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                  @keyframes seo-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
                `}</style>

                {/* Ambient glow */}
                <div style={{ position: "absolute", inset: "-28px", background: "radial-gradient(ellipse at 60% 40%, rgba(0,174,239,0.16) 0%, transparent 65%)", pointerEvents: "none", borderRadius: "2rem" }} />

                {/* Browser frame */}
                <div style={{ position: "relative", backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 24px 64px rgba(0,0,0,0.11)", overflow: "hidden" }}>
                  {/* Chrome bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", backgroundColor: "#f1f3f4" }}>
                    <div style={{ display: "flex", gap: 5 }}>
                      {["#ff5f57", "#ffbd2e", "#28c940"].map(c => (
                        <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: c }} />
                      ))}
                    </div>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 5, backgroundColor: "#fff", borderRadius: 20, padding: "4px 10px" }}>
                      <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 11, color: "#34a853" }}>lock</span>
                      <span style={{ fontSize: 10, color: "#5f6368" }}>search.google.com/search-console</span>
                    </div>
                  </div>

                  <div style={{ padding: "14px 16px" }}>
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#191c1e" }}>📊 Keyword Rankings · ภาคใต้</span>
                      <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 20, backgroundColor: "rgba(52,168,83,0.12)", color: "#34a853", fontWeight: 600, animation: "seo-dot 2s ease infinite" }}>● LIVE</span>
                    </div>

                    {/* Keyword rows */}
                    {[
                      { kw: "โรงแรมภูเก็ต ราคาดี ใกล้ทะเล", from: 18, to: 1, delay: "0s" },
                      { kw: "ทัวร์กระบี่ 1 วัน ราคาถูก", from: 11, to: 2, delay: "0.12s" },
                      { kw: "SEO Agency สงขลา ภาคใต้", from: 22, to: 3, delay: "0.24s" },
                      { kw: "digital marketing ภาคใต้", from: 14, to: 4, delay: "0.36s" },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, animation: `seo-slide 0.5s ease ${item.delay} both` }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "rgba(0,101,141,0.10)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontSize: 9, fontWeight: 700, color: "#00658d" }}>{i + 1}</span>
                        </div>
                        <div style={{ flex: 1, overflow: "hidden" }}>
                          <p style={{ fontSize: 11, color: "#191c1e", fontWeight: 300, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.kw}</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                          <span style={{ fontSize: 9, color: "#c0c0c0", textDecoration: "line-through" }}>#{item.from}</span>
                          <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 14, color: "#34a853" }}>trending_up</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#00658d" }}>#{item.to}</span>
                        </div>
                      </div>
                    ))}

                    {/* Bar chart */}
                    <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid #f0f2f5" }}>
                      <p style={{ fontSize: 9, color: "#8a8d91", marginBottom: 6 }}>Organic Clicks / Month</p>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 42 }}>
                        {[16, 24, 19, 31, 39, 49, 57, 67, 74, 85, 93, 100].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1, height: `${h}%`,
                              borderRadius: "3px 3px 0 0",
                              background: "linear-gradient(to top,#00658d,#00aeef)",
                              opacity: 0.28 + (i * 0.062),
                              transformOrigin: "bottom",
                              animation: `seo-bar 0.7s ease ${i * 0.05}s both`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating: Page 1 */}
                <div style={{
                  position: "absolute", top: -16, right: -16,
                  background: "linear-gradient(135deg,#34a853,#1a7a37)",
                  color: "#fff", borderRadius: 20, padding: "7px 14px",
                  fontSize: 11, fontWeight: 700,
                  animation: "seo-badge 2s ease infinite",
                }}>
                  🏆 Page 1 Google
                </div>

                {/* Floating: +240% */}
                <div style={{
                  position: "absolute", bottom: 28, left: -20,
                  backgroundColor: "#fff", borderRadius: 16, padding: "7px 13px",
                  fontSize: 11, fontWeight: 600, color: "#00658d",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  animation: "seo-float 3s ease infinite",
                }}>
                  📈 +240% Organic Traffic
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Why SEO ──────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>ทำไมต้องทำ SEO</p>
                <h2 className="text-4xl mb-6 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}>
                  เพราะ Organic Traffic คือ<br />สินทรัพย์ที่เติบโตไม่หยุด
                </h2>
                <p className="text-lg text-[#3e4850] mb-5 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  ต่างจากโฆษณาที่หยุดเมื่อหมดงบ SEO สร้าง Organic Traffic ที่เพิ่มขึ้นเรื่อยๆ
                  และยังคงอยู่แม้คุณจะไม่ได้จ่ายเงินเพิ่ม
                  สำหรับธุรกิจในภาคใต้ที่มีฤดูกาล การมี Organic Traffic ที่แข็งแกร่ง
                  คือการประกันรายได้ตลอดทั้งปี ไม่ว่าจะ High Season หรือ Low Season
                </p>
                <p className="text-base text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  ลูกค้าที่มาจาก Organic Search มี Intent สูงกว่าลูกค้าจากโฆษณา
                  เพราะพวกเขากำลังค้นหาสิ่งที่ต้องการอยู่แล้ว
                  และในตลาดการท่องเที่ยวภาคใต้ที่ลูกค้าวางแผนล่วงหน้า SEO คือช่องทางที่ให้ ROI
                  สูงที่สุดในระยะยาว
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "ROI ระยะยาว — ลงทุนครั้งเดียว ได้ Traffic ต่อเนื่องหลายปี",
                    "High-Intent Traffic — คนที่กำลังค้นหาบริการของคุณอยู่แล้ว",
                    "Brand Authority — ติดหน้าแรก Google = ความน่าเชื่อถือในสายตาลูกค้า",
                    "Compound Growth — ยิ่งทำนาน ผลลัพธ์ยิ่งทบทวีขึ้นเรื่อยๆ",
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
                style={{ backgroundColor: bgLight, borderRadius: "2rem", border: "1px solid rgba(0,101,141,0.15)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color, fontWeight: 300 }}>ตัวเลขที่น่าสนใจ</p>
                <div className="flex flex-col gap-6">
                  {[
                    { num: "68%", desc: "ของทุก Online Experience เริ่มต้นจาก Search Engine" },
                    { num: "53%", desc: "ของ Website Traffic ทั้งหมดมาจาก Organic Search" },
                    { num: "0.63%", desc: "CTR เฉลี่ยของผลลัพธ์ในหน้า 2 — vs 27.6% ในอันดับ 1" },
                    { num: "14.6%", desc: "Conversion Rate ของ SEO Lead เทียบกับ 1.7% ของ Outbound" },
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
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color, fontWeight: 300 }}>บริการ SEO ของเรา</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                ครบทุก SEO Dimension<br />เพื่อทุกเป้าหมายธุรกิจ
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                เราไม่ได้ทำแค่ On-Page SEO แต่วางกลยุทธ์ Full-spectrum SEO
                ที่ครอบคลุมทั้ง Technical, Content และ Off-page เพื่อผลลัพธ์ที่ยั่งยืน
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
                  กระบวนการทำ SEO<br />ของ Surf Digital ภาคใต้
                </h2>
                <p className="text-[#3e4850] thai-leading mb-6" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  เราวางแผน SEO อย่างเป็นระบบตั้งแต่วันแรก ด้วย Methodology ที่พิสูจน์แล้ว
                  จากประสบการณ์ดูแลธุรกิจในภาคใต้กว่า 50 ราย ตั้งแต่โรงแรมบูติกในกระบี่
                  ไปจนถึง E-Commerce ในสงขลา
                </p>
                <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                  ทุกขั้นตอนมีการรายงานผลที่ชัดเจน คุณรู้เสมอว่าเรากำลังทำอะไรอยู่
                  และทำไม — ไม่มี Black Box ในกระบวนการของเรา
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
                  style={{ fontWeight: 300, background: "linear-gradient(135deg,#00658d,#00aeef)", boxShadow: "0 12px 32px -8px rgba(0,101,141,0.40)" }}
                >
                  เริ่มต้นวันนี้
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {process.map((p, i) => (
                  <div
                    key={p.step}
                    className="p-6"
                    style={{
                      backgroundColor: i % 2 === 0 ? bgLight : "#f2f4f6",
                      borderRadius: "1rem",
                      border: i % 2 === 0 ? "1px solid rgba(0,101,141,0.15)" : "none",
                    }}
                  >
                    <span className="text-sm block mb-2" style={{ fontWeight: 400, color }}>{p.step}</span>
                    <p className="text-base mb-2" style={{ fontWeight: 300, color: "#191c1e" }}>{p.title}</p>
                    <p className="text-sm text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.75 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Surf Digital ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#191c1e" }}>
          <div className={wrap}>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00aeef", fontWeight: 300 }}>ทำไมต้องเลือกเรา</p>
              <h2 className="text-4xl text-white mb-4" style={{ fontWeight: 400 }}>
                6 เหตุผลที่ธุรกิจภาคใต้<br />เลือก Surf Digital เป็นพาร์ทเนอร์ SEO
              </h2>
              <p className="text-[#9ca8b4] thai-leading" style={{ fontWeight: 200, maxWidth: "36rem", margin: "0 auto" }}>
                เราไม่ใช่แค่เอเจนซี่ที่ทำ SEO แต่คือพาร์ทเนอร์ที่เข้าใจตลาดภาคใต้
                และเติบโตไปพร้อมกับธุรกิจของคุณ
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
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#00aeef", fontSize: 24 }}>{item.icon}</span>
                  </div>
                  <h3 className="text-lg text-white mb-3" style={{ fontWeight: 300 }}>{item.title}</h3>
                  <p className="text-[#9ca8b4] text-sm thai-leading" style={{ fontWeight: 200, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
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
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                ประสบการณ์หลากหลายอุตสาหกรรมทำให้เราเข้าใจ Search Intent
                และ Buyer Journey ที่แตกต่างกันในแต่ละธุรกิจ
              </p>
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

        {/* ── Pair with Ads ─────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="text-center mb-8">
              <p className="text-sm text-[#6e7881]" style={{ fontWeight: 200 }}>
                เพิ่มประสิทธิภาพสูงสุดด้วยการจับคู่ SEO กับ Paid Ads
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                { href: "/services/ads/google-ads", icon: "ads_click", color: "#4285F4", label: "Google Ads", desc: "Search, Display & YouTube" },
                { href: "/services/ads/meta-ads", icon: "thumb_up", color: "#0081FB", label: "Meta Ads", desc: "Facebook & Instagram" },
                { href: "/services/ads/tiktok-ads", icon: "music_video", color: "#fe2c55", label: "TikTok Ads", desc: "Short-form Video Ads" },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 px-8 py-5 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ backgroundColor: "#f2f4f6", textDecoration: "none" }}
                >
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ color: p.color, fontSize: 28 }}>{p.icon}</span>
                  <div>
                    <p className="text-sm" style={{ fontWeight: 300, color: "#191c1e" }}>{p.label}</p>
                    <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{p.desc}</p>
                  </div>
                  <span className="material-symbols-outlined ml-auto" style={{ color: "#6e7881", fontSize: 18 }}>arrow_forward</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20">
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white text-center px-6 py-20 md:py-24"
              style={{ background: "linear-gradient(135deg,#00658d 0%,#00aeef 100%)", borderRadius: "2rem" }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />
              <div className="relative z-10" style={{ maxWidth: "44rem", margin: "0 auto" }}>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ fontWeight: 300, opacity: 0.8 }}>
                  Free SEO Audit — ไม่มีข้อผูกมัด
                </p>
                <h2 className="text-4xl md:text-5xl mb-6 thai-leading" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                  พร้อมให้เว็บไซต์ของคุณ<br />ติดอันดับ 1 บน Google ภาคใต้?
                </h2>
                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, opacity: 0.85 }}>
                  ให้ทีม SEO ภาคใต้ของ Surf Digital วิเคราะห์เว็บไซต์ของคุณฟรี
                  พร้อม Keyword Opportunity Report และแผน SEO ที่วัดผลได้จริง
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[#00658d] text-lg hover:scale-105 transition-transform"
                    style={{ fontWeight: 300, backgroundColor: "#ffffff", boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                  >
                    รับ Free SEO Audit ตอนนี้
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

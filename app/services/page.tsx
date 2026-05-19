import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata = {
  title: "บริการ Digital Marketing ครบวงจร | Surf Digital Agency ภาคใต้",
  description:
    "รับทำ SEO, Google Ads, Meta Ads, TikTok Ads ครบวงจรสำหรับธุรกิจในภูเก็ต กระบี่ สงขลา และทั่วภาคใต้ ปรึกษาฟรี",
  alternates: { canonical: "/services" },
};

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

/* ── Data ───────────────────────────────────── */

const services = [
  {
    href: "/services/seo",
    badge: "SEO",
    icon: "travel_explore",
    color: "#00658d",
    bg: "rgba(0,101,141,0.08)",
    border: "rgba(0,101,141,0.18)",
    title: "Search Engine Optimization",
    subtitle: "ติดอันดับ Google อย่างยั่งยืน",
    desc: "Technical SEO, Local SEO, Content Strategy และ Link Building ครบวงจร เพิ่ม Organic Traffic ที่วัดผลได้จริงทุกเดือน",
    tags: ["Technical SEO", "Local SEO", "Link Building", "Content SEO"],
    stat: "240%",
    statLabel: "เพิ่ม Organic Traffic",
    flagship: true,
  },
  {
    href: "/services/ads/google-ads",
    badge: "Google Ads",
    icon: "ads_click",
    color: "#4285F4",
    bg: "rgba(66,133,244,0.08)",
    border: "rgba(66,133,244,0.18)",
    title: "Google Ads",
    subtitle: "เข้าถึงลูกค้าที่กำลังค้นหาคุณอยู่ตอนนี้",
    desc: "Search, Display, Shopping, YouTube และ Performance Max วัด ROAS ได้ทุกแคมเปญ",
    tags: ["Search Ads", "Shopping", "YouTube Ads", "Performance Max"],
    stat: "3–8x",
    statLabel: "ROAS เฉลี่ย",
    flagship: false,
  },
  {
    href: "/services/ads/meta-ads",
    badge: "Meta Ads",
    icon: "thumb_up",
    color: "#0081FB",
    bg: "rgba(0,129,251,0.08)",
    border: "rgba(0,129,251,0.18)",
    title: "Meta Ads",
    subtitle: "สร้าง Brand และปิดการขายบน Facebook & Instagram",
    desc: "Lead Gen, Conversion, Retargeting และ Reels Ads ด้วย Creative ที่หยุดนิ้วและ Meta Pixel + CAPI ที่แม่นยำ",
    tags: ["Facebook Ads", "Instagram", "Lead Gen", "Retargeting"],
    stat: "-60%",
    statLabel: "ลด Cost per Lead",
    flagship: false,
  },
  {
    href: "/services/ads/tiktok-ads",
    badge: "TikTok Ads",
    icon: "music_video",
    color: "#fe2c55",
    bg: "rgba(254,44,85,0.07)",
    border: "rgba(254,44,85,0.18)",
    title: "TikTok Ads",
    subtitle: "เจาะ Gen Z & Millennials ด้วย Creative ที่ Viral ได้จริง",
    desc: "In-Feed, TopView, Spark Ads และ TikTok Shopping เพื่อเข้าถึงกลุ่มอายุ 18–35 ด้วย CPM ที่ต่ำที่สุด",
    tags: ["In-Feed Ads", "TopView", "Spark Ads", "Shopping"],
    stat: "10x",
    statLabel: "Reach ต่อบาท",
    flagship: false,
  },
  {
    href: "/contact",
    badge: "Content",
    icon: "article",
    color: "#7c5cbf",
    bg: "rgba(124,92,191,0.08)",
    border: "rgba(124,92,191,0.18)",
    title: "Content Marketing",
    subtitle: "สร้าง Trust และดึง Lead จาก Content",
    desc: "ผลิต Blog, Infographic, Video Script และ Social Content ที่ตอบ Search Intent และสร้างความน่าเชื่อถือให้แบรนด์",
    tags: ["Blog SEO", "Social Content", "Video Script", "Infographic"],
    stat: "3x",
    statLabel: "Lead จาก Content",
    flagship: false,
  },
  {
    href: "/contact",
    badge: "Analytics",
    icon: "analytics",
    color: "#00a67e",
    bg: "rgba(0,166,126,0.08)",
    border: "rgba(0,166,126,0.18)",
    title: "Analytics & Tracking",
    subtitle: "เห็นทุก Data — ตัดสินใจได้ชัดเจน",
    desc: "ตั้ง GA4, GTM, Search Console, Looker Studio Dashboard Real-time และ Conversion Tracking ครบทุก Touch-point",
    tags: ["GA4 Setup", "GTM", "Looker Studio", "Attribution"],
    stat: "100%",
    statLabel: "Transparent Reporting",
    flagship: false,
  },
];

const seoFeatures = [
  { icon: "code", title: "Technical SEO", desc: "Core Web Vitals, Schema Markup, XML Sitemap, Mobile-First Indexing" },
  { icon: "location_on", title: "Local SEO ภาคใต้", desc: "Google Business Profile, Local Pack, Hyper-local Keywords" },
  { icon: "article", title: "On-Page & Content", desc: "Title, Meta, Heading, Internal Linking, SEO Content ที่ตอบ Intent" },
  { icon: "link", title: "Link Building", desc: "Backlink คุณภาพสูงจาก Relevant Sites เพิ่ม Domain Authority" },
  { icon: "analytics", title: "Analytics & Report", desc: "GA4 + Search Console + Looker Studio Dashboard Real-time" },
  { icon: "travel_explore", title: "International SEO", desc: "Hreflang, Multilingual Content สำหรับท่องเที่ยวระดับ Global" },
];

const adsPlatforms = [
  {
    href: "/services/ads/google-ads",
    badge: "Google Ads",
    icon: "ads_click",
    color: "#4285F4",
    bg: "rgba(66,133,244,0.06)",
    border: "rgba(66,133,244,0.20)",
    headline: "Google Ads",
    sub: "เข้าถึงลูกค้าที่กำลังค้นหาอยู่ตอนนี้",
    kpis: [{ v: "3–8x", l: "ROAS" }, { v: "-40%", l: "CPC" }, { v: "72h", l: "เริ่มเห็นผล" }],
    types: ["Search Ads", "Display", "Shopping", "YouTube", "Performance Max"],
  },
  {
    href: "/services/ads/meta-ads",
    badge: "Meta Ads",
    icon: "thumb_up",
    color: "#0081FB",
    bg: "rgba(0,129,251,0.06)",
    border: "rgba(0,129,251,0.20)",
    headline: "Meta Ads",
    sub: "Brand + Conversion บน Facebook & Instagram",
    kpis: [{ v: "5x", l: "Reach" }, { v: "-60%", l: "CPL" }, { v: "2.4x", l: "ROAS" }],
    types: ["Facebook Ads", "Instagram", "Lead Gen", "Retargeting", "Reels"],
  },
  {
    href: "/services/ads/tiktok-ads",
    badge: "TikTok Ads",
    icon: "music_video",
    color: "#fe2c55",
    bg: "rgba(254,44,85,0.06)",
    border: "rgba(254,44,85,0.20)",
    headline: "TikTok Ads",
    sub: "Viral Creative เจาะ Gen Z & Millennials",
    kpis: [{ v: "10x", l: "Reach/บาท" }, { v: "4.2%", l: "CTR" }, { v: "-35%", l: "CPM" }],
    types: ["In-Feed Ads", "TopView", "Spark Ads", "Shopping", "Hashtag"],
  },
];

const whyItems = [
  { icon: "location_on", title: "เชี่ยวชาญตลาดภาคใต้โดยเฉพาะ", desc: "เข้าใจ Search Behavior ทั้งนักท่องเที่ยวต่างชาติในภูเก็ต และลูกค้าท้องถิ่นในกระบี่ สงขลา ทำให้ Targeting แม่นยำกว่าเอเจนซี่กรุงเทพ" },
  { icon: "show_chart", title: "วัดผลได้จริงทุกบาท", desc: "Conversion Tracking ครบถ้วนทุก Touch-point — Lead, Call, Sale เชื่อมกับ Business Outcome จริง ไม่รายงานแค่ Vanity Metric" },
  { icon: "shield", title: "Transparent ไม่มีค่าซ่อนเร้น", desc: "ค่าบริการและงบโฆษณาแยกกันชัดเจน คุณเห็นทุก Transaction ใน Ad Account และ Real-time Dashboard ตลอดเวลา" },
  { icon: "group", title: "ทีมผู้เชี่ยวชาญเฉพาะทาง", desc: "แต่ละโปรเจกต์มี SEO Strategist, Ads Specialist, Content Writer และ Data Analyst ดูแลร่วมกัน ไม่ใช่คนเดียวทำทุกอย่าง" },
  { icon: "update", title: "Optimize ต่อเนื่องทุกสัปดาห์", desc: "ปรับ Bid, เปลี่ยน Creative, ขยาย Audience ทุกสัปดาห์ พร้อม Performance Review รายเดือนที่เจาะลึกทุก KPI" },
  { icon: "support_agent", title: "พาร์ทเนอร์ระยะยาว 7 วัน", desc: "ไม่ใช่แค่ Service Provider แต่คือพาร์ทเนอร์ที่ Monitor แคมเปญ 7 วัน โดยเฉพาะช่วง High Season ภาคใต้ที่สำคัญที่สุด" },
];

const industries = [
  { icon: "hotel", label: "โรงแรม & Hospitality" },
  { icon: "sailing", label: "Tourism & Tour" },
  { icon: "villa", label: "อสังหาริมทรัพย์" },
  { icon: "local_hospital", label: "คลินิก & Medical" },
  { icon: "restaurant", label: "ร้านอาหาร & F&B" },
  { icon: "storefront", label: "E-Commerce & Retail" },
  { icon: "directions_boat", label: "Diving & Marine" },
  { icon: "spa", label: "Spa & Wellness" },
];

const stats = [
  { value: "50+", label: "ธุรกิจภาคใต้ไว้วางใจ", icon: "emoji_events" },
  { value: "240%", label: "Organic Traffic เฉลี่ย", icon: "trending_up" },
  { value: "3–8x", label: "ROAS จากโฆษณา", icon: "ads_click" },
  { value: "98%", label: "ลูกค้าต่อสัญญาต่อเนื่อง", icon: "handshake" },
];

/* ── Page ────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <SchemaBreadcrumb items={[
        { name: "หน้าแรก", url: "/" },
        { name: "บริการ", url: "/services" },
      ]} />
      <Navbar />
      <main>

        {/* ── Hero ──────────────────────────────────── */}
        <header className="relative overflow-hidden pt-36 pb-24" style={{ backgroundColor: "#f7f9fb" }}>
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute rounded-full blur-[180px]" style={{ top: "-10rem", right: "-10rem", width: "60rem", height: "60rem", background: "radial-gradient(circle, rgba(0,174,239,0.10) 0%, transparent 70%)" }} />
            <div className="absolute rounded-full blur-[120px]" style={{ bottom: "-8rem", left: "-8rem", width: "44rem", height: "44rem", background: "radial-gradient(circle, rgba(0,101,141,0.08) 0%, transparent 70%)" }} />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className={`${wrap} relative z-10`}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(0,101,141,0.08)", border: "1px solid rgba(0,101,141,0.18)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#00658d" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#2d476f", fontWeight: 300 }}>
                Full-Service Digital Agency · ภูเก็ต | กระบี่ | สงขลา
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-12 items-center mb-16">
              <div>
                <h1 className="text-display mb-6 thai-leading" style={{ fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 3.75rem)", lineHeight: 1.15, color: "#191c1e" }}>
                  บริการ Digital Marketing
                  <br />
                  <span style={{ background: "linear-gradient(120deg, #00658d 0%, #00aeef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    ครบวงจรสำหรับภาคใต้
                  </span>
                </h1>
                <p className="text-lg text-[#3e4850] mb-10 thai-leading" style={{ fontWeight: 200, maxWidth: "36rem", lineHeight: 1.85 }}>
                  ตั้งแต่ SEO ที่ติดอันดับระยะยาว ไปจนถึงโฆษณาที่วัดผลได้ทุกบาท
                  เราคือพาร์ทเนอร์ดิจิทัลที่เข้าใจตลาดภาคใต้ลึกที่สุด
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl"
                    style={{ fontWeight: 300, background: "linear-gradient(135deg, #00658d 0%, #00aeef 100%)", boxShadow: "0 16px 40px -8px rgba(0,174,239,0.40)" }}
                  >
                    ปรึกษาฟรี — ไม่มีข้อผูกมัด
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </Link>
                  <a
                    href="https://page.line.me/106bhqto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base transition-all hover:bg-[#d4d7d9]"
                    style={{ fontWeight: 300, color: "#191c1e", backgroundColor: "#e0e3e5" }}
                  >
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                    แชทผ่าน Line
                  </a>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="p-6 flex flex-col gap-3" style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 4px 24px rgba(0,33,71,0.06)" }}>
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#00658d", fontSize: 28 }}>{s.icon}</span>
                    <div>
                      <p className="text-3xl" style={{ fontWeight: 400, color: "#191c1e" }}>{s.value}</p>
                      <p className="text-xs text-[#3e4850] mt-1 thai-leading" style={{ fontWeight: 200 }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry chips */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-xs text-[#3e4850] mr-2" style={{ fontWeight: 200 }}>อุตสาหกรรมที่เชี่ยวชาญ:</span>
              {industries.map((ind) => (
                <span
                  key={ind.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{ backgroundColor: "#ffffff", color: "#3e4850", fontWeight: 200, boxShadow: "0 2px 8px rgba(0,33,71,0.06)" }}
                >
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 13 }}>{ind.icon}</span>
                  {ind.label}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ── Services Grid ─────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="text-center mb-16" style={{ maxWidth: "44rem", margin: "0 auto 4rem" }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00658d", fontWeight: 300 }}>บริการของเรา</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                Digital Marketing ครบทุกมิติ
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.8 }}>
                เราไม่ใช่แค่เอเจนซี่ที่ยิงโฆษณา แต่ดูแลทั้ง Ecosystem ดิจิทัลของธุรกิจคุณ
                ตั้งแต่ให้คนค้นหาเจอ จนถึงปิดการขายได้จริง
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.href + s.badge}
                  href={s.href}
                  className="group block"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="h-full p-8 flex flex-col gap-5 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                    style={{
                      backgroundColor: "#f7f9fb",
                      borderRadius: "1.75rem",
                      border: `1px solid ${s.border}`,
                    }}
                  >
                    {/* Icon + badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.bg }}>
                        <span aria-hidden="true" className="material-symbols-outlined" style={{ color: s.color, fontSize: 28 }}>{s.icon}</span>
                      </div>
                      <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full" style={{ backgroundColor: s.bg, color: s.color, fontWeight: 300 }}>
                        {s.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl mb-1 group-hover:text-[#00658d] transition-colors" style={{ fontWeight: 400, color: "#191c1e" }}>
                        {s.subtitle}
                      </h3>
                      <p className="text-xs" style={{ color: s.color, fontWeight: 200 }}>{s.title}</p>
                    </div>

                    {/* Desc */}
                    <p className="text-sm text-[#3e4850] thai-leading flex-1" style={{ fontWeight: 200, lineHeight: 1.8 }}>
                      {s.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-xs" style={{ backgroundColor: s.bg, color: s.color, fontWeight: 200 }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Stat + arrow */}
                    <div className="flex items-end justify-between pt-4" style={{ borderTop: `1px solid ${s.border}` }}>
                      <div>
                        <p className="text-2xl" style={{ fontWeight: 400, color: s.color }}>{s.stat}</p>
                        <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{s.statLabel}</p>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ backgroundColor: s.bg }}
                      >
                        <span aria-hidden="true" className="material-symbols-outlined" style={{ color: s.color, fontSize: 18 }}>arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Flagship Section ───────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(0,101,141,0.08)", border: "1px solid rgba(0,101,141,0.18)" }}>
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16, color: "#00658d" }}>travel_explore</span>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#00658d", fontWeight: 300 }}>Flagship Service</span>
                </div>
                <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.25 }}>
                  SEO ที่ทำให้<br />
                  <span style={{ color: "#00658d" }}>ลูกค้าค้นหาเจอคุณก่อน</span><br />
                  คู่แข่งทุกราย
                </h2>
                <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.85, maxWidth: "32rem" }}>
                  SEO คือ Channel ที่ให้ ROI ระยะยาวสูงสุด เราดูแลทุกมิติตั้งแต่ Technical, On-Page,
                  Local SEO จนถึง Link Building ด้วยทีมเฉพาะทางที่เข้าใจตลาดภาคใต้โดยเฉพาะ
                </p>

                {/* KPIs */}
                <div className="flex gap-8 mb-10">
                  {[
                    { v: "240%", l: "Organic Traffic" },
                    { v: "15k+", l: "Keywords หน้าแรก" },
                    { v: "6 เดือน", l: "เห็นผลชัดเจน" },
                  ].map((k) => (
                    <div key={k.l}>
                      <p className="text-3xl" style={{ fontWeight: 400, color: "#00658d" }}>{k.v}</p>
                      <p className="text-xs text-[#6e7881] mt-1" style={{ fontWeight: 200 }}>{k.l}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link
                    href="/services/seo"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all hover:scale-105"
                    style={{ fontWeight: 300, background: "linear-gradient(135deg, #00658d, #00aeef)", boxShadow: "0 16px 40px -8px rgba(0,101,141,0.35)", textDecoration: "none" }}
                  >
                    ดูรายละเอียด SEO
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all"
                    style={{ fontWeight: 300, color: "#00658d", backgroundColor: "#ffffff", boxShadow: "0 4px 24px rgba(0,33,71,0.08)", textDecoration: "none" }}
                  >
                    รับ Free SEO Audit
                  </Link>
                </div>
              </div>

              {/* Right: feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seoFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="p-6"
                    style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", boxShadow: "0 4px 20px rgba(0,33,71,0.06)", borderLeft: "3px solid rgba(0,101,141,0.25)" }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0,101,141,0.08)" }}>
                      <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#00658d", fontSize: 20 }}>{f.icon}</span>
                    </div>
                    <h4 className="text-sm mb-2" style={{ fontWeight: 300, color: "#191c1e" }}>{f.title}</h4>
                    <p className="text-xs text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Paid Ads Section ──────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <div className="text-center mb-16" style={{ maxWidth: "44rem", margin: "0 auto 4rem" }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00658d", fontWeight: 300 }}>Paid Advertising</p>
              <h2 className="text-4xl mb-4 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                3 Platform · 1 เอเจนซี่<br />ที่เชี่ยวชาญตลาดภาคใต้
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                แต่ละ Platform มีจุดแข็งต่างกัน เราช่วยวางกลยุทธ์ว่าควรเริ่มที่ไหน
                และงบประมาณเท่าไหร่ให้ได้ผลตอบแทนสูงสุดสำหรับธุรกิจของคุณโดยเฉพาะ
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {adsPlatforms.map((p, idx) => (
                <div
                  key={p.badge}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#f7f9fb" : "#ffffff",
                    borderRadius: "2rem",
                    border: `1px solid ${p.border}`,
                  }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: p.bg }}>
                        <span aria-hidden="true" className="material-symbols-outlined" style={{ color: p.color, fontSize: 26 }}>{p.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase" style={{ color: p.color, fontWeight: 300 }}>{p.badge}</p>
                        <h3 className="text-2xl" style={{ fontWeight: 400, color: "#191c1e" }}>{p.headline}</h3>
                      </div>
                    </div>

                    <p className="text-base text-[#3e4850] mb-5 thai-leading" style={{ fontWeight: 300 }}>{p.sub}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.types.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: p.bg, color: p.color, fontWeight: 300 }}>{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-8 flex-wrap">
                      {p.kpis.map((k) => (
                        <div key={k.l}>
                          <p className="text-2xl" style={{ fontWeight: 400, color: p.color }}>{k.v}</p>
                          <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{k.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-end gap-3 flex-shrink-0">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm transition-all hover:scale-105 whitespace-nowrap"
                      style={{ fontWeight: 300, background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, boxShadow: `0 12px 32px -8px ${p.color}44`, textDecoration: "none" }}
                    >
                      ดูรายละเอียด {p.badge}
                      <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs whitespace-nowrap hover:underline"
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

        {/* ── Why Surf Digital ────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#191c1e" }}>
          <div className={wrap}>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00aeef", fontWeight: 300 }}>ทำไมต้องเลือก Surf Digital</p>
              <h2 className="text-4xl text-white mb-4 thai-leading" style={{ fontWeight: 400 }}>
                6 เหตุผลที่ธุรกิจภาคใต้<br />ไว้วางใจเราเป็นพาร์ทเนอร์
              </h2>
              <p className="text-[#9ca8b4] thai-leading" style={{ fontWeight: 200, maxWidth: "36rem", margin: "0 auto" }}>
                เราไม่ใช่แค่เอเจนซี่ที่รับงานแล้วหายไป แต่คือทีมที่เติบโตไปพร้อมกับผลลัพธ์ธุรกิจของคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="p-8 transition-transform duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(0,174,239,0.15)" }}>
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#00aeef", fontSize: 24 }}>{item.icon}</span>
                  </div>
                  <h3 className="text-lg text-white mb-3 thai-leading" style={{ fontWeight: 300 }}>{item.title}</h3>
                  <p className="text-[#9ca8b4] text-sm thai-leading" style={{ fontWeight: 200, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#00658d", fontWeight: 300 }}>อุตสาหกรรมที่เชี่ยวชาญ</p>
              <h2 className="text-3xl mb-4" style={{ fontWeight: 400, color: "#191c1e" }}>
                เราเข้าใจธุรกิจของคุณ<br />ไม่ใช่แค่รู้จัก Digital Marketing
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="flex flex-col items-center gap-3 p-6 text-center transition-all hover:shadow-md hover:-translate-y-0.5 duration-300"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1.25rem", boxShadow: "0 2px 12px rgba(0,33,71,0.05)" }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,101,141,0.08)" }}>
                    <span aria-hidden="true" className="material-symbols-outlined" style={{ color: "#00658d", fontSize: 24 }}>{ind.icon}</span>
                  </div>
                  <p className="text-sm text-[#191c1e] thai-leading" style={{ fontWeight: 300 }}>{ind.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white text-center px-6 py-20 md:py-24"
              style={{ background: "linear-gradient(135deg, #00658d 0%, #00aeef 60%, #3f5881 100%)", borderRadius: "2.5rem" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              <div className="absolute rounded-full blur-[100px] pointer-events-none" style={{ top: "-4rem", right: "10%", width: "20rem", height: "20rem", backgroundColor: "rgba(255,255,255,0.08)" }} />

              <div className="relative z-10" style={{ maxWidth: "44rem", margin: "0 auto" }}>
                <p className="text-xs tracking-widest uppercase mb-5" style={{ fontWeight: 300, opacity: 0.75 }}>
                  Free Consultation · ไม่มีข้อผูกมัด
                </p>
                <h2 className="text-4xl md:text-5xl mb-6 thai-leading" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                  พร้อมให้ธุรกิจของคุณ<br />เติบโตในโลกดิจิทัลแล้วหรือยัง?
                </h2>
                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, opacity: 0.85, maxWidth: "32rem", margin: "0 auto 2.5rem" }}>
                  ให้ทีม Surf Digital วิเคราะห์ธุรกิจของคุณฟรี พร้อมแนะนำ Digital Strategy
                  ที่เหมาะสมที่สุดสำหรับตลาดภาคใต้ของคุณโดยเฉพาะ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-[#00658d] text-lg hover:scale-105 transition-transform"
                    style={{ fontWeight: 300, backgroundColor: "#ffffff", boxShadow: "0 16px 40px rgba(0,0,0,0.15)", textDecoration: "none" }}
                  >
                    ปรึกษาฟรีตอนนี้
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

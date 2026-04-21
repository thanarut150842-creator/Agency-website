import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ Google Ads Meta Ads TikTok Ads ภาคใต้ | AP Digital Agency ภูเก็ต กระบี่ หาดใหญ่",
  description:
    "รับทำโฆษณาออนไลน์ครบวงจร Google Ads, Meta Ads (Facebook & Instagram), TikTok Ads สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ วัดผลได้ทุกบาท ปรึกษาฟรีไม่มีข้อผูกมัด",
};

const adServices = [
  {
    id: "google-ads",
    badge: "Google Ads ภาคใต้",
    icon: "ads_click",
    color: "#4285F4",
    bgLight: "rgba(66,133,244,0.07)",
    h2: "รับทำ Google Ads ภาคใต้ ให้ธุรกิจของคุณปรากฏ เมื่อลูกค้ากำลังค้นหาอยู่",
    intro:
      "Google Ads คือช่องทางโฆษณาที่ทรงพลังที่สุดสำหรับธุรกิจที่ต้องการ \"ยิงตรง\" หาลูกค้าที่มีความตั้งใจซื้อสูง ไม่ว่าจะเป็นนักท่องเที่ยวที่กำลังค้นหาโรงแรมในภูเก็ต นักลงทุนที่สนใจอสังหาฯ กระบี่ หรือลูกค้าในหาดใหญ่ที่ต้องการสินค้าหรือบริการของคุณในทันที",
    body: "เราวางแผนโครงสร้างแคมเปญ Google Ads อย่างละเอียด ตั้งแต่การทำ Keyword Research เชิงลึกที่เน้นตลาดภาคใต้ การเขียน Ad Copy ที่ดึงดูดและตรง Search Intent การตั้ง Bidding Strategy ที่ให้ ROAS สูงสุด ไปจนถึงการ Optimize แบบ Real-time เพื่อลด Cost-per-Conversion อย่างต่อเนื่อง",
    features: [
      "Search Ads — ปรากฏในหน้าแรก Google สำหรับ Keyword ที่ลูกค้ากำลังค้นหา",
      "Display & Remarketing — ติดตามลูกค้าที่เคยเยี่ยมชมเว็บไซต์ให้กลับมา Convert",
      "Google Shopping Ads — เหมาะสำหรับธุรกิจ E-Commerce ที่ต้องการขายสินค้าโดยตรง",
      "YouTube Ads — สร้าง Awareness และ Storytelling ให้แบรนด์ในภาคใต้",
      "Performance Max — ให้ AI ของ Google ช่วยกระจายโฆษณาทุก Placement อัตโนมัติ",
    ],
    kpis: [
      { value: "3–8x", label: "ROAS เฉลี่ย" },
      { value: "-40%", label: "ลด Cost-per-Click" },
      { value: "72h", label: "เริ่มเห็นผลภายใน" },
    ],
  },
  {
    id: "meta-ads",
    badge: "Meta Ads ภาคใต้",
    icon: "thumb_up",
    color: "#0081FB",
    bgLight: "rgba(0,129,251,0.07)",
    h2: "รับทำ Meta Ads ภาคใต้ สร้าง Brand และปิดการขาย บน Facebook & Instagram",
    intro:
      "Facebook และ Instagram คือพื้นที่ที่คนภาคใต้ใช้เวลามากกว่า 3 ชั่วโมงต่อวัน Meta Ads คือโอกาสทองในการสร้าง Brand Awareness เข้าถึงกลุ่มเป้าหมายที่ใช่ และ Convert พวกเขาให้เป็นลูกค้าจริง ไม่ว่าธุรกิจของคุณจะเป็นโรงแรมในภูเก็ต ร้านอาหารในกระบี่ หรือบริษัทอสังหาฯ ในหาดใหญ่",
    body: "ทีม Meta Ads ของ AP Digital เชี่ยวชาญการสร้าง Custom Audience และ Lookalike Audience จาก First-party Data ของธุรกิจคุณ ควบคู่กับการออกแบบ Creative (ภาพและวิดีโอ) ที่หยุดนิ้วหัวแม่มือผู้ใช้ได้ใน 3 วินาทีแรก พร้อม A/B Testing ระบบ Conversion ให้แม่นยำด้วย Meta Pixel และ CAPI",
    features: [
      "Awareness & Reach Campaigns — สร้างการจดจำแบรนด์ให้กลุ่มเป้าหมายในภาคใต้",
      "Lead Generation Ads — เก็บ Lead โดยตรงบน Facebook ไม่ต้องออกไปยังเว็บไซต์",
      "Conversion & Sales Campaigns — ปิดการขายด้วยโฆษณาที่ตรงใจ ตรงเวลา",
      "Retargeting — ดึงลูกค้าที่เคยเห็นโฆษณาหรือเยี่ยมชมเว็บกลับมา",
      "Instagram Shopping & Reels Ads — เหมาะสำหรับแบรนด์ที่ต้องการ Visual Storytelling",
    ],
    kpis: [
      { value: "5x", label: "Reach มากขึ้น" },
      { value: "60%", label: "ลด CPL เฉลี่ย" },
      { value: "2.4x", label: "ROAS ที่วัดได้" },
    ],
  },
  {
    id: "tiktok-ads",
    badge: "TikTok Ads ภาคใต้",
    icon: "music_video",
    color: "#010101",
    bgLight: "rgba(0,0,0,0.05)",
    h2: "รับทำ TikTok Ads ภาคใต้ เจาะ Gen Z และ Millennials ด้วย Creative ที่ Viral ได้จริง",
    intro:
      "TikTok กลายเป็น Platform ที่เติบโตเร็วที่สุดในไทย ด้วยผู้ใช้งานกว่า 40 ล้านคนต่อเดือน ธุรกิจในภูเก็ต กระบี่ และหาดใหญ่ที่ต้องการเข้าถึงกลุ่มอายุ 18-35 ปี ซึ่งเป็นกลุ่มที่มีกำลังซื้อสูงและตัดสินใจซื้อไวผ่านการดูวิดีโอ TikTok Ads คือช่องทางที่ไม่ควรมองข้าม",
    body: "เราไม่ได้แค่ \"ยิงโฆษณา\" บน TikTok แต่เราสร้าง Content Strategy ที่ผสมผสานระหว่างความ Authentic ของ TikTok และเป้าหมายทางธุรกิจของคุณ ทีม Creative ของเราเข้าใจ TikTok Algorithm อย่างลึกซึ้ง ตั้งแต่การเลือก Hook ที่ดักจับสายตาใน 1 วินาทีแรก การใช้ Trend Sound และ Effect อย่างชาญฉลาด ไปจนถึงการ Scale งบประมาณโฆษณาที่ให้ผลลัพธ์คุ้มค่า",
    features: [
      "In-Feed Ads — โฆษณาวิดีโอที่กลมกลืนกับ Feed เหมือน Content ปกติ",
      "TopView Ads — โฆษณาตำแหน่งพรีเมียม ปรากฏเป็นอันดับแรกเมื่อเปิดแอป",
      "Branded Hashtag Challenge — สร้าง Viral Loop ให้ผู้ใช้สร้าง Content ต่อยอด",
      "Spark Ads — Boost โพสต์ออร์แกนิกที่ Viral อยู่แล้วให้เข้าถึงคนมากขึ้น",
      "TikTok Shopping Ads — ขายสินค้าได้โดยตรงบน TikTok Shop",
    ],
    kpis: [
      { value: "10x", label: "Reach ต่อบาท" },
      { value: "4.2%", label: "CTR เฉลี่ย" },
      { value: "35%", label: "ต่ำกว่า CPM เทียบ Meta" },
    ],
  },
];

const whyItems = [
  {
    icon: "track_changes",
    title: "วัดผลทุกบาทที่ลงทุน",
    desc: "เราตั้ง Conversion Tracking ครบถ้วน ทั้ง Google Tag Manager, Meta Pixel, และ TikTok Pixel เพื่อให้คุณเห็น ROAS จริงทุกแคมเปญ ไม่มีตัวเลขที่คลุมเครือ",
  },
  {
    icon: "location_on",
    title: "เชี่ยวชาญตลาดภาคใต้โดยเฉพาะ",
    desc: "เราเข้าใจพฤติกรรมผู้บริโภคในภูเก็ต กระบี่ หาดใหญ่ และตลาดนักท่องเที่ยว ทั้ง Inbound และ Domestic ทำให้ Targeting แม่นกว่าเอเจนซี่ทั่วไป",
  },
  {
    icon: "bolt",
    title: "Creative ที่หยุดนิ้วได้จริง",
    desc: "ทีม Creative ของเราออกแบบ Visual และเขียน Copy ที่เข้าใจ Platform ลึกซึ้ง ไม่ว่าจะเป็น Google, Facebook, Instagram หรือ TikTok ต่างก็มีสูตรที่ใช่",
  },
  {
    icon: "show_chart",
    title: "Optimize รายสัปดาห์ ไม่ Set-and-Forget",
    desc: "เราประชุม Performance Review กับลูกค้าทุกเดือน และทีมเรา Optimize แคมเปญเป็นรายสัปดาห์ ปรับ Bid, เปลี่ยน Creative, ขยาย Audience อย่างต่อเนื่อง",
  },
  {
    icon: "handshake",
    title: "Transparent ไม่มีค่าใช้จ่ายซ่อนเร้น",
    desc: "ค่าบริการและงบโฆษณาแยกกันชัดเจน คุณเห็นทุก Transaction ที่เข้า Ad Account ผ่าน Dashboard ที่เราจัดทำให้แบบ Real-time",
  },
  {
    icon: "support_agent",
    title: "ดูแลหลังขาย 7 วัน/สัปดาห์",
    desc: "แคมเปญโฆษณาไม่ได้หยุดพักวันเสาร์-อาทิตย์ ทีมงานของเรารับ Monitor แคมเปญและแก้ปัญหาเร่งด่วนตลอด 7 วัน โดยเฉพาะช่วง High Season ภาคใต้",
  },
];

export default function AdsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header
          className="relative overflow-hidden pt-36 pb-24"
          style={{ backgroundColor: "#f7f9fb" }}
        >
          {/* BG blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute rounded-full blur-[140px]"
              style={{ top: "-8rem", right: "-8rem", width: "50rem", height: "50rem", background: "radial-gradient(circle, rgba(66,133,244,0.10) 0%, transparent 70%)" }}
            />
            <div
              className="absolute rounded-full blur-[100px]"
              style={{ bottom: "-6rem", left: "-6rem", width: "36rem", height: "36rem", background: "radial-gradient(circle, rgba(0,129,251,0.08) 0%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.08) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.6 }}
            />
          </div>

          <div className={`${wrap} relative z-10`}>
            {/* Badge */}
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
              {/* Left */}
              <div>
                <h1
                  className="text-display mb-6"
                  style={{ fontWeight: 400, fontSize: "clamp(2.4rem, 5vw, 3.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
                >
                  รับทำโฆษณาออนไลน์
                  <br />
                  <span style={{ background: "linear-gradient(120deg,#4285F4 0%,#0081FB 50%,#010101 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Google · Meta · TikTok
                  </span>
                  <br />
                  <span style={{ color: "#00658d" }}>ภาคใต้</span> วัดผลได้ทุกบาท
                </h1>
                <p className="text-lg text-[#3e4850] mb-10 thai-leading" style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}>
                  ไม่ว่าธุรกิจของคุณในภูเก็ต กระบี่ หรือหาดใหญ่จะอยู่ในอุตสาหกรรมใด
                  เรามีกลยุทธ์โฆษณาออนไลน์ที่เหมาะกับเป้าหมายและงบประมาณของคุณโดยเฉพาะ
                  พร้อม Conversion Tracking ที่โปร่งใสทุก Baht ที่ลงทุน
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
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

                {/* Platform logos strip */}
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { label: "Google Ads", color: "#4285F4", bg: "rgba(66,133,244,0.10)" },
                    { label: "Meta Ads", color: "#0081FB", bg: "rgba(0,129,251,0.10)" },
                    { label: "TikTok Ads", color: "#191c1e", bg: "rgba(0,0,0,0.07)" },
                    { label: "YouTube Ads", color: "#FF0000", bg: "rgba(255,0,0,0.08)" },
                    { label: "IG Ads", color: "#C13584", bg: "rgba(193,53,132,0.08)" },
                  ].map((p) => (
                    <span
                      key={p.label}
                      className="px-3 py-1.5 rounded-full text-xs"
                      style={{ backgroundColor: p.bg, color: p.color, fontWeight: 300 }}
                    >
                      {p.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "฿50M+", label: "งบโฆษณาที่จัดการทั้งปี", icon: "payments", color: "#00658d" },
                  { value: "3–8x", label: "ROAS เฉลี่ยที่ลูกค้าได้รับ", icon: "trending_up", color: "#4285F4" },
                  { value: "50+", label: "แบรนด์ภาคใต้ที่เชื่อใจเรา", icon: "verified", color: "#0081FB" },
                  { value: "98%", label: "ลูกค้าต่อสัญญาต่อเนื่อง", icon: "handshake", color: "#00b900" },
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

        {/* ── Ad Services (3 sections) ───────────────────────────────────── */}
        {adServices.map((svc, idx) => (
          <section
            key={svc.id}
            id={svc.id}
            className="py-24"
            style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f2f4f6" }}
          >
            <div className={wrap}>
              <div className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-start`}>

                {/* Left: Content */}
                <div className="flex-1">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-6"
                    style={{ backgroundColor: svc.bgLight, color: svc.color, fontWeight: 300 }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>{svc.icon}</span>
                    {svc.badge}
                  </div>

                  <h2
                    className="text-3xl md:text-4xl mb-6 thai-leading"
                    style={{ fontWeight: 400, color: "#191c1e", lineHeight: 1.3 }}
                  >
                    {svc.h2}
                  </h2>

                  <p className="text-lg text-[#3e4850] mb-5 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                    {svc.intro}
                  </p>
                  <p className="text-base text-[#3e4850] mb-8 thai-leading" style={{ fontWeight: 200, lineHeight: 1.85 }}>
                    {svc.body}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3 mb-10">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 flex-shrink-0" style={{ color: svc.color, fontSize: 20 }}>check_circle</span>
                        <span className="text-[#191c1e] text-sm thai-leading" style={{ fontWeight: 300 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
                    style={{ fontWeight: 300, background: `linear-gradient(135deg,${svc.color},${svc.color}cc)`, boxShadow: `0 12px 32px -8px ${svc.color}55` }}
                  >
                    สอบถามบริการ {svc.badge}
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                </div>

                {/* Right: KPI cards + visual */}
                <div className="flex-1 flex flex-col gap-5">
                  {/* KPI strip */}
                  <div className="grid grid-cols-3 gap-4">
                    {svc.kpis.map((k) => (
                      <div
                        key={k.label}
                        className="p-5 text-center"
                        style={{ backgroundColor: svc.bgLight, borderRadius: "1rem", border: `1px solid ${svc.color}22` }}
                      >
                        <p className="text-2xl mb-1" style={{ fontWeight: 400, color: svc.color }}>{k.value}</p>
                        <p className="text-xs text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>{k.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* What you get card */}
                  <div
                    className="p-8"
                    style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
                  >
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ fontWeight: 300, color: "#6e7881" }}>สิ่งที่คุณได้รับ</p>
                    <div className="flex flex-col gap-4">
                      {[
                        { icon: "analytics", label: "Dashboard รายงานผล Real-time" },
                        { icon: "event_note", label: "ประชุม Performance Review รายเดือน" },
                        { icon: "build", label: "Optimize แคมเปญรายสัปดาห์" },
                        { icon: "image", label: "Creative Design + Copywriting" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: svc.bgLight }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 18, color: svc.color }}>{item.icon}</span>
                          </div>
                          <span className="text-sm text-[#191c1e]" style={{ fontWeight: 300 }}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── Why AP Digital ────────────────────────────────────────────── */}
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
                  className="p-8 group hover:scale-[1.02] transition-transform duration-300"
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

        {/* ── Industry Use Cases ────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="text-center mb-14" style={{ maxWidth: "44rem", margin: "0 auto 3.5rem" }}>
              <h2 className="text-4xl mb-4" style={{ fontWeight: 400, color: "#191c1e" }}>
                เราเคยดูแลโฆษณาให้ธุรกิจหลากหลายอุตสาหกรรมในภาคใต้
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                ประสบการณ์ที่หลากหลายทำให้เราเข้าใจ Buyer Journey ของแต่ละอุตสาหกรรม และวางกลยุทธ์ได้ตรงจุด
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: "hotel", label: "Hospitality & Hotel", city: "ภูเก็ต · กระบี่" },
                { icon: "villa", label: "อสังหาริมทรัพย์", city: "ภูเก็ต · หาดใหญ่" },
                { icon: "sailing", label: "Tourism & Tour", city: "กระบี่ · พังงา" },
                { icon: "restaurant", label: "F&B & Restaurant", city: "ทั่วภาคใต้" },
                { icon: "local_hospital", label: "Clinic & Medical", city: "หาดใหญ่ · ภูเก็ต" },
                { icon: "storefront", label: "E-Commerce & Retail", city: "ทั่วภาคใต้" },
              ].map((ind) => (
                <div
                  key={ind.label}
                  className="p-5 text-center hover:shadow-md transition-all"
                  style={{ backgroundColor: "#ffffff", borderRadius: "1rem", border: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <span className="material-symbols-outlined mb-3 block" style={{ color: "#00658d", fontSize: 32 }}>{ind.icon}</span>
                  <p className="text-sm text-[#191c1e] mb-1" style={{ fontWeight: 300 }}>{ind.label}</p>
                  <p className="text-xs text-[#6e7881]" style={{ fontWeight: 200 }}>{ind.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white text-center px-6 py-20 md:py-24"
              style={{ background: "linear-gradient(135deg,#00658d 0%,#00aeef 60%,#4285F4 100%)", borderRadius: "2rem" }}
            >
              {/* Dot grid overlay */}
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

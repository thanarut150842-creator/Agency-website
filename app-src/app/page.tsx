import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG_HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVzxFsFH-9A_Qe_fQrdB0-f0OW-1sV1H666mIWiOFyZJ5Ue2Intskxe3SEW--f7roos7zW6v5zIhColWw_QpVOMuU-pwPbf1Na0Z_O9NY7dIFhSC7QgsCtBtj8CA_e_yjEoJvJ40bqHPq4dHk5dmt0b58XGfHg_GuyiMT1wVYa_Vzh7NIbPl2_SzH3auWj_j3mSoXI806AMrTIJm6J_MGH0G92kI6q139FdLz4C6zLfqbFR4YzpASOWWKuyi5QJeuOaHjnzB6-HiA";
const IMG_HERO_DASHBOARD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUHURy6XjhtkeJmed4LYUCj22BDrh7vBa_siq4LwdZyG6LAdcInEW5sc8C-VnZAjZsaJy2WC8Cxb7qBIk2epXiM697c8KRx0_3aKfv7_ADw2VNdLjLqGYS5UfvwSycdKjBE7VvLoLZzOwqBy1uXlXiPlV5hZ1u1s59RIXWsHT_5oLXfaFj2cJ32tMHeWZWu_xXKNx33uFOXtLIkmlF2dSf2rngKMer1mOcwWhmBdg72U9SUgESiQd3eVUV-JtLlSR13lcU0LEE9SA";
const IMG_BENTO_OCEAN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5IWYZVmMzTp-bB5xKfvXp87pjAFsrcxLdxcGi93gckNr-LPQsZCqzwiwFo21l_46EVmG6qS9YYj6nOqDze-2wJYCRFPQv_6K0SVu8GtycLlmpZ8-VBqk-C0JRsk9EMyNB_6H3tqeWJtxJFfW_CitQ91FaOzpf1VlIBy0ujo3Y1WLR1pBQu6Q2z-kHSclUf1xaTP8p6az-9qOxANtLvq_0dELg2X-ITNstv7XVQijgh_juu0rUfyOOmJlkDWgxrKH-4itCxExnTdk";
const IMG_CASE_VILLA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3GgrvoHtB_uhBh3C3Mxboa1RKU7_Gy6wnOHAZXwH1dVmKlrJ241-dJFOwX6SzX7PjMTJeRN7-NNBM48B9d_cwSPRWftjxeK-zbzdXC8XckxfSeMYua9FoUtE2oThcLi6N83pPBzt_n48cJEMwG5QKAAQ-7KvsG0p5JJBTfaceqDd3Sii_AWBoHK0OgvDu7oR7RoIVhNkrDsXo6fc_AmLPIQpYPJ82qEp9tWEQyJ4SJqrMKYgfhFoaU5oY671rpUl_lByS-MRafsI";
const IMG_CASE_ECOM =
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80";
const IMG_CASE_TOURISM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzY1X2VQNqwo85ks_PNPMb9d2ekhI8Ji_RZKO9i69VHprKORfZk1CXBG0xI-xcLupAGIEz8lBMiuxr7lem8F8DagEdWPZXM-CQnYNv8C7et06rZB7_SMdUzPNRh3kz-A5fJfaS3R2prXRBrAENcCbrUDo2Q2jTSYvqz2vyrmO6k8kcT5LaiJTF8WU7ZA6KsE6K6JPqpRqLfV5Yg_4k2pByZ0H9_B3Wda_aV-Me-SfwzMEcKjpeiBT9iPK_-j1R6tkQR4YeKCQU9w0";
const IMG_CTA_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAm_bpcrn6G04oBaI3223Y0_p7UfHu8aBvbQDaHajQNLKd2wjN7QIaBefwhfee6hDczQA396GSQTeli3vsbXTJeVN7HH9ZXQd1Pp9dBejVfvxUWMYUNvr3YuecyCagG-ek-vz4lrJqBwoP59EfZNYjzqaKjwD2aPUvw-Bd4AEvJIcp_2NsDypT3mp2Ei_lxy4Rb96CeX8qNLTKLITrKajxV4amre2Pmeh-6CnuXFd3cjFxR3CO3aaYIyDR8lMWk3-62qmKL-Zn2TSA";

const caseStudies = [
  {
    img: IMG_CASE_VILLA,
    alt: "luxury beachfront villa",
    tag: "REAL ESTATE",
    kpi: "ROI +350%",
    title: "แคมเปญกระตุ้นยอดขายโครงการบ้านพักตากอากาศระดับ High-end",
    desc: "กลยุทธ์ SEO และ FB Ads เจาะกลุ่มลูกค้ากำลังซื้อสูงจากกรุงเทพฯ และต่างประเทศ",
  },
  {
    img: IMG_CASE_ECOM,
    alt: "boutique brand packaging",
    tag: "E-COMMERCE",
    kpi: "Growth 2x",
    title: "การทรานส์ฟอร์มร้านค้าดั้งเดิมสู่ระบบขายออนไลน์เต็มรูปแบบ",
    desc: "สร้างระบบจัดการสต็อกและช่องทางขาย Social Commerce ที่ทำเงินได้ตลอด 24 ชม.",
  },
  {
    img: IMG_CASE_TOURISM,
    alt: "tropical tourism long-tail boat",
    tag: "TOURISM",
    kpi: "Lead +120%",
    title: "ยกระดับแบรนด์ทัวร์ท้องถิ่นสู่แพลตฟอร์มการจองระดับสากล",
    desc: "ใช้ Content Marketing สื่อสารคุณค่าที่เป็นเอกลักษณ์ผ่านภาพลักษณ์พรีเมียม",
  },
];

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <header
          className="relative overflow-hidden"
          style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "7.5rem", paddingBottom: "4rem", background: "#f7f9fb" }}
        >
          {/* Background: mesh gradient blobs */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute rounded-full blur-[120px]" style={{ top: "-8rem", right: "-6rem", width: "45rem", height: "45rem", background: "radial-gradient(circle, rgba(0,174,239,0.13) 0%, transparent 70%)" }} />
            <div className="absolute rounded-full blur-[100px]" style={{ bottom: "-10rem", left: "-8rem", width: "40rem", height: "40rem", background: "radial-gradient(circle, rgba(63,88,129,0.10) 0%, transparent 70%)" }} />
            <div className="absolute rounded-full blur-[80px]" style={{ top: "30%", left: "30%", width: "20rem", height: "20rem", background: "radial-gradient(circle, rgba(0,101,141,0.06) 0%, transparent 70%)" }} />
            {/* Subtle dot grid */}
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(0,101,141,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.5 }} />
          </div>

          {/* Content */}
          <div className={`${wrap} relative z-10`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* ── Left: copy ── */}
              <div>
                {/* Live badge */}
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
                  style={{ background: "rgba(0,174,239,0.09)", border: "1px solid rgba(0,174,239,0.22)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#00aeef] animate-pulse" />
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#00658d", fontWeight: 300 }}>
                    Digital Agency · ภาคใต้
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-display mb-6 thai-leading"
                  style={{ fontWeight: 400, fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)", lineHeight: 1.15, color: "#191c1e", letterSpacing: "-0.02em" }}
                >
                  พาธุรกิจของคุณ<br />
                  <span
                    style={{
                      background: "linear-gradient(120deg, #00658d 20%, #00aeef 80%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ทะยานขึ้น
                  </span>
                  {" "}ด้วยดิจิทัล
                </h1>

                <p
                  className="text-lg text-[#3e4850] mb-10 thai-leading"
                  style={{ fontWeight: 200, maxWidth: "34rem", lineHeight: 1.85 }}
                >
                  เราคือพาร์ทเนอร์ดิจิทัลที่เข้าใจบริบทท้องถิ่นภาคใต้อย่างลึกซึ้ง
                  และใช้มาตรฐานระดับสากลเพื่อขับเคลื่อนการเติบโตที่วัดผลได้จริง
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
                    รับ Free Audit
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>analytics</span>
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
                  <span className="material-symbols-outlined" style={{ color: "#00aeef", fontSize: 22, display: "block", marginBottom: "0.5rem" }}>search</span>
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
                  <span className="material-symbols-outlined" style={{ fontSize: 22, display: "block", marginBottom: "0.5rem" }}>trending_up</span>
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

        {/* ── Tech Stack ───────────────────────────────────────── */}
        <section className="py-16 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
          <div className={wrap}>
            <h2 className="text-center text-3xl mb-10" style={{ color: "#191c1e", fontWeight: 400 }}>
              เครื่องมือและเทคโนโลยีที่เราใช้
            </h2>
          </div>

          {(() => {
            type Tool = { name: string; slug?: string; color?: string; img?: string };

            const row1: Tool[] = [
              { name: "Google Analytics",  slug: "googleanalytics",      color: "E37400" },
              { name: "Search Console",    slug: "googlesearchconsole",   color: "458CF5" },
              { name: "Tag Manager",       slug: "googletagmanager",      color: "246FDB" },
              { name: "Google Ads",        slug: "googleads",             color: "4285F4" },
              { name: "Meta Ads",          slug: "meta",                  color: "0081FB" },
              { name: "HubSpot",           slug: "hubspot",               color: "FF7A59" },
              { name: "SEMRush",           slug: "semrush",               color: "FF642D" },
              { name: "Yoast SEO",         slug: "yoast",                 color: "A4286A" },
              { name: "Cloudflare",        slug: "cloudflare",            color: "F38020" },
              { name: "Wappalyzer",        slug: "wappalyzer",            color: "32B0C1" },
            ];

            const row2: Tool[] = [
              { name: "Ahrefs",             img: "/pic/Ahrefs-Logo-Color-Blue (1).png" },
              { name: "Looker Studio",      img: "/pic/65cb4fbae37ed272a2f53e1e_looker_studio_icon.png" },
              { name: "PageSpeed Insights", slug: "pagespeedinsights", color: "4285F4" },
              { name: "Rich Results Test",  img: "https://www.google.com/s2/favicons?domain=search.google.com&sz=64" },
              { name: "Rank Math",          img: "https://www.google.com/s2/favicons?domain=rankmath.com&sz=64" },
              { name: "Ubersuggest",        img: "https://www.google.com/s2/favicons?domain=neilpatel.com&sz=64" },
              { name: "SE Ranking",         img: "https://www.google.com/s2/favicons?domain=seranking.com&sz=64" },
              { name: "Screaming Frog",     img: "https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=64" },
              { name: "Google Trends",      img: "https://www.google.com/s2/favicons?domain=trends.google.com&sz=64" },
            ];

            const mask = { maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" };

            const card = (tool: Tool, i: number) => (
              <div key={i} className="flex flex-col items-center gap-2.5 mx-5 shrink-0 group">
                <div
                  className="w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden"
                  style={{
                    backgroundColor: "#f2f4f6",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {tool.slug ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`} alt={tool.name} width={38} height={38} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={tool.img!} alt={tool.name} width={40} height={40} style={{ objectFit: "contain", borderRadius: "6px" }} />
                  )}
                </div>
                <span className="text-xs text-[#3e4850] text-center leading-tight" style={{ fontWeight: 200, maxWidth: "5rem" }}>
                  {tool.name}
                </span>
              </div>
            );

            return (
              <>
                {/* Row 1 – scrolls right */}
                <div className="relative mb-8" style={mask}>
                  <div className="flex marquee-right py-2" style={{ width: "max-content" }}>
                    {[...row1, ...row1, ...row1, ...row1].map((t, i) => card(t, i))}
                  </div>
                </div>

                {/* Row 2 – scrolls left */}
                <div className="relative" style={mask}>
                  <div className="flex marquee-left py-2" style={{ width: "max-content" }}>
                    {[...row2, ...row2, ...row2, ...row2].map((t, i) => card(t, i))}
                  </div>
                </div>
              </>
            );
          })()}
        </section>

        {/* ── Vision & Values: Bento Grid ──────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f2f4f6" }}>
          <div className={wrap}>
            {/* Section header */}
            <div className="text-center mb-16" style={{ maxWidth: "48rem", margin: "0 auto 4rem" }}>
              <h2 className="text-display text-4xl mb-4" style={{ fontWeight: 400 }}>
                วิสัยทัศน์และการขับเคลื่อน
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                เราไม่ได้แค่ทำโฆษณา แต่เราสร้างโครงสร้างพื้นฐานดิจิทัลที่ยั่งยืนสำหรับธุรกิจภาคใต้
              </p>
            </div>

            {/* Bento grid – row 1 */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Andaman Pulse – 2/3 width */}
              <div
                className="flex flex-col justify-between p-10 hover:scale-[1.01] transition-all"
                style={{
                  flex: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: "1rem",
                }}
              >
                <div>
                  <p className="text-3xl mb-4" style={{ fontWeight: 300 }}>
                    Andaman Pulse Strategy
                  </p>
                  <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, maxWidth: "28rem" }}>
                    ยุทธศาสตร์ที่ไหลลื่นเหมือนคลื่นอันดามัน ปรับตัวตามตลาดและข้อมูลแบบ Real-time
                    เพื่อนำหน้าคู่แข่งในทุกจังหวะ
                  </p>
                </div>
                <div
                  className="relative mt-8 overflow-hidden"
                  style={{ height: "12rem", borderRadius: "0.75rem" }}
                >
                  <Image
                    src={IMG_BENTO_OCEAN}
                    alt="turquoise ocean aerial view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 100% Performance – 1/3 width */}
              <div
                className="flex flex-col justify-center items-center text-center p-10 text-white"
                style={{ flex: 1, backgroundColor: "#00658d", borderRadius: "1rem" }}
              >
                <div className="text-6xl mb-4" style={{ fontWeight: 400 }}>
                  100%
                </div>
                <p className="text-xl mb-4" style={{ fontWeight: 300, opacity: 0.8 }}>
                  Performance Focus
                </p>
                <p className="text-sm thai-leading" style={{ fontWeight: 200, opacity: 0.6 }}>
                  ทุกบาทที่คุณลงทุนต้องวัดผลได้และนำไปสู่ผลกำไรที่แท้จริง
                </p>
              </div>
            </div>

            {/* Bento grid – row 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Local expertise – 1/3 */}
              <div
                className="flex flex-col justify-between p-10 text-white"
                style={{ flex: 1, backgroundColor: "#3f5881", borderRadius: "1rem" }}
              >
                <span className="material-symbols-outlined text-4xl">local_activity</span>
                <div>
                  <h4 className="text-2xl mb-3" style={{ fontWeight: 300 }}>
                    ความเชี่ยวชาญท้องถิ่น
                  </h4>
                  <p className="thai-leading" style={{ fontWeight: 200, opacity: 0.7 }}>
                    เข้าถึง Insights ของคนใต้ เข้าใจพฤติกรรมการซื้อที่แตกต่าง
                  </p>
                </div>
              </div>

              {/* National standard – 2/3 */}
              <div
                className="flex items-center gap-8 p-10 overflow-hidden"
                style={{ flex: 2, backgroundColor: "#e0e3e5", borderRadius: "1rem" }}
              >
                <div style={{ flex: 1 }}>
                  <h4 className="text-2xl mb-2" style={{ fontWeight: 300 }}>
                    มาตรฐานระดับประเทศ
                  </h4>
                  <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                    ประสบการณ์ดูแลแบรนด์ชั้นนำในกรุงเทพฯ ถูกนำมาปรับใช้เพื่อยกระดับธุรกิจในท้องถิ่น
                  </p>
                </div>
                <div className="hidden md:flex gap-4" style={{ flex: 1 }}>
                  {[0, 75, 150].map((delay) => (
                    <div
                      key={delay}
                      className="w-20 h-20 animate-pulse rounded-xl"
                      style={{ backgroundColor: "rgba(255,255,255,0.5)", animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Case Studies ─────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
              <div style={{ maxWidth: "40rem" }}>
                <h2 className="text-display text-4xl mb-4" style={{ fontWeight: 400 }}>
                  ความไว้วางใจที่วัดผลได้
                </h2>
                <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                  เราภาคภูมิใจที่เป็นส่วนหนึ่งของการเติบโตของธุรกิจหลากหลายอุตสาหกรรม
                  ตลอด 4 ปีที่ผ่านมา
                </p>
              </div>
              <Link
                href="/about"
                className="flex items-center gap-2 text-[#00658d] whitespace-nowrap group"
                style={{ fontWeight: 300 }}
              >
                ดูเคสความสำเร็จทั้งหมด
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* 3-column cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((c) => (
                <div key={c.tag} className="group cursor-pointer">
                  <div
                    className="relative overflow-hidden mb-6"
                    style={{
                      backgroundColor: "#eceef0",
                      borderRadius: "1rem",
                      aspectRatio: "16/9",
                    }}
                  >
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        fontWeight: 300,
                        backgroundColor: "#d6e3ff",
                        color: "#001b3d",
                      }}
                    >
                      {c.tag}
                    </span>
                    <span className="text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>
                      {c.kpi}
                    </span>
                  </div>
                  <h4
                    className="text-xl mb-2 group-hover:text-[#00658d] transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {c.title}
                  </h4>
                  <p className="text-[#3e4850] text-sm thai-leading" style={{ fontWeight: 200 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20">
          <div className={wrap}>
            <div
              className="relative overflow-hidden text-white"
              style={{
                backgroundColor: "#3f5881",
                borderRadius: "1.5rem",
                padding: "clamp(2rem, 5vw, 5rem)",
              }}
            >
              {/* Background image */}
              <div
                className="absolute top-0 right-0 h-full"
                style={{ width: "50%", opacity: 0.1 }}
              >
                <Image src={IMG_CTA_BG} alt="" fill className="object-cover" />
              </div>

              <div className="relative z-10" style={{ maxWidth: "40rem" }}>
                <h2
                  className="text-display mb-6 thai-leading"
                  style={{ fontWeight: 400, fontSize: "2.75rem" }}
                >
                  พร้อมจะพาทะยานไปข้างหน้า<br />
                  กับพาร์ทเนอร์ที่รู้ใจหรือยัง?
                </h2>
                <p
                  className="text-xl mb-10 thai-leading"
                  style={{ fontWeight: 200, opacity: 0.8 }}
                >
                  ให้ทีมผู้เชี่ยวชาญของเราวิเคราะห์ธุรกิจของคุณฟรี
                  โดยไม่มีค่าใช้จ่ายและข้อผูกมัดใดๆ
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link
                    href="/contact"
                    className="text-white px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform"
                    style={{ fontWeight: 300, backgroundColor: "#00aeef" }}
                  >
                    จองเวลาปรึกษาตอนนี้
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {["bg-slate-300", "bg-slate-400", "bg-slate-500"].map((c, i) => (
                        <div
                          key={i}
                          className={`w-10 h-10 rounded-full border-2 ${c}`}
                          style={{ borderColor: "#3f5881" }}
                        />
                      ))}
                    </div>
                    <span className="text-sm" style={{ fontWeight: 200 }}>
                      คุยกับทีมผู้เชี่ยวชาญ 24/7
                    </span>
                  </div>
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

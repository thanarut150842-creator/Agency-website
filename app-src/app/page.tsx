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
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDF9vMf2T7TwUPhXhCcLw9-zDkRrunBRgEXEBKLxNpkeO1pibGI734KaEPacNWR3QNMkcO7DFSt5uO-poWmexulR1GEOYYRooqH3c6dZAXla1VeOv4nJ6uwMS79koWi5o04jruZdhX_i8zbFJYVjavKH9cugAJ8YDkPNmf4pOSI1F_j-15d_LseYOev--wo";
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

const wrap = "w-full max-w-7xl mx-auto px-8";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <header
          className="relative overflow-hidden bg-[#f7f9fb]"
          style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "9rem", paddingBottom: "7rem" }}
        >
          {/* BG image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMG_HERO_BG}
              alt="abstract fluid wave background"
              fill
              className="object-cover opacity-15"
              priority
            />
          </div>

          {/* Content */}
          <div className={`${wrap} relative z-10`}>
            <div
              className="grid gap-12 items-center"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {/* Left */}
              <div>
                <span
                  className="inline-block bg-[#d6e3ff] text-[#2d476f] px-4 py-1.5 rounded-full text-sm tracking-wider mb-6 uppercase"
                  style={{ fontWeight: 300 }}
                >
                  Advanced Performance Agency
                </span>

                <h1
                  className="text-display text-6xl text-[#191c1e] mb-6 thai-leading"
                  style={{ fontWeight: 400 }}
                >
                  ดิจิตอลเอเจนซี่<br />
                  การตลาดออนไลน์
                  <span style={{ color: "#00aeef" }}>ภาคใต้</span>
                </h1>

                <p
                  className="text-lg text-[#3e4850] mb-10 thai-leading"
                  style={{ fontWeight: 200, maxWidth: "36rem" }}
                >
                  เราคือพาร์ทเนอร์ด้านการเติบโตแบบดิจิทัลที่เข้าใจบริบทท้องถิ่น
                  แต่ใช้มาตรฐานระดับสากล เพื่อปลดล็อกศักยภาพธุรกิจของคุณสู่ระดับประเทศ
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-lg transition-all"
                    style={{
                      fontWeight: 300,
                      backgroundColor: "#00aeef",
                      boxShadow: "0 20px 40px -10px rgba(0,174,239,0.3)",
                    }}
                  >
                    <span>Free Audit</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                      analytics
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-[#191c1e] px-8 py-4 rounded-full text-lg transition-all"
                    style={{ fontWeight: 300, backgroundColor: "#e0e3e5" }}
                  >
                    <span>ปรึกษาฟรี</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                      chat_bubble
                    </span>
                  </Link>
                </div>

                {/* Stats strip */}
                <div className="flex gap-8 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  {[
                    { value: "50+", label: "แบรนด์ที่ไว้วางใจ" },
                    { value: "4+", label: "ปีในวงการ" },
                    { value: "98%", label: "ลูกค้าพึงพอใจ" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl text-[#00658d]" style={{ fontWeight: 400 }}>{s.value}</p>
                      <p className="text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Dashboard image */}
              <div className="relative">
                <div
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl"
                  style={{ backgroundColor: "#00b3c8", opacity: 0.3 }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "1rem",
                    padding: "8px",
                    boxShadow: "0 32px 64px -16px rgba(0,33,71,0.12)",
                  }}
                >
                  <Image
                    src={IMG_HERO_DASHBOARD}
                    alt="data visualization dashboard"
                    width={640}
                    height={400}
                    className="w-full"
                    style={{ borderRadius: "0.75rem" }}
                  />
                </div>
                {/* Floating badge bottom-right */}
                <div
                  className="absolute -bottom-6 -right-6 flex items-center gap-4 text-white p-6 rounded-xl"
                  style={{ backgroundColor: "#00658d", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                >
                  <div className="text-4xl" style={{ fontWeight: 400 }}>4+</div>
                  <div className="text-sm thai-leading" style={{ fontWeight: 200 }}>
                    ปีแห่งความสำเร็จ<br />ในระดับประเทศ
                  </div>
                </div>

                {/* Floating card top-left */}
                <div
                  className="absolute -top-4 -left-6 flex items-center gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 12px 32px rgba(0,33,71,0.12)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,174,239,0.12)", color: "#00aeef" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>trending_up</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>Organic Traffic</p>
                    <p className="text-lg text-[#191c1e]" style={{ fontWeight: 400 }}>+240%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Tech Stack ───────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#ffffff", fontFamily: "var(--font-kanit), sans-serif" }}>
          <div className={wrap}>
            <h2 className="text-center text-3xl mb-10" style={{ color: "#191c1e", fontWeight: 400, fontFamily: "var(--font-kanit), sans-serif" }}>
              เครื่องมือและเทคโนโลยีที่เราใช้
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {/* Icon-based logos */}
              {[
                { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
                { name: "Google Tag Manager", slug: "googletagmanager", color: "246FDB" },
                { name: "Google Search Console", slug: "googlesearchconsole", color: "458CF5" },
                { name: "Google Ads", slug: "googleads", color: "4285F4" },
                { name: "Meta Ads", slug: "meta", color: "0081FB" },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3 group">
                  <div
                    className="w-24 h-24 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#f2f4f6" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                      alt={tool.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="text-xs text-[#3e4850] text-center" style={{ fontWeight: 200, maxWidth: "6rem", fontFamily: "var(--font-kanit), sans-serif" }}>
                    {tool.name}
                  </span>
                </div>
              ))}

              {/* Text-based badges for tools not on Simple Icons */}
              {[
                { name: "Ahrefs", abbr: "Ah", bg: "#FF612A", text: "#ffffff", img: "/pic/Ahrefs-Logo-Color-Blue (1).png" },
                { name: "Looker Studio", abbr: "LS", bg: "#4285F4", text: "#ffffff", img: "/pic/65cb4fbae37ed272a2f53e1e_looker_studio_icon.png" },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3 group">
                  <div
                    className="w-24 h-24 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 text-lg overflow-hidden"
                    style={{ backgroundColor: tool.img ? "#f2f4f6" : tool.bg, color: tool.text, fontWeight: 400, letterSpacing: "-0.02em" }}
                  >
                    {tool.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={tool.img} alt={tool.name} width={52} height={52} style={{ objectFit: "contain" }} />
                    ) : tool.abbr}
                  </div>
                  <span className="text-xs text-[#3e4850] text-center" style={{ fontWeight: 200, maxWidth: "6rem", fontFamily: "var(--font-kanit), sans-serif" }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
            <div className="flex gap-6 mb-6">
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
            <div className="flex gap-6">
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
            <div className="flex justify-between items-end mb-16">
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
            <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
                padding: "5rem",
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

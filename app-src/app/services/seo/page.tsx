import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkQHUpMiiYzttHUGf9caQAwxph8eBGDpRXn4JJO4o1CrFlvAt8_xx6cpWFn3FtMKW-rZNYu6WK_PraS_H4av-pn32zzFP9ntlIIPKkCi1vQiHlLPdPbWe87XfUFcNzeRI6ErjsPkpcIJDlnG4wJ3d-dSbpvNmUdtuu-PEWG3BchIOVRmCFd6tGacDcsi0tH9A5uEV84VqGlik_PJdPRgQUzqWl0GOhO68_xWPCXaf8nI5rvUKZqp1opNpMigDy4UNP9s7MpfLGLVc";
const IMG_TECH_SEO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs51q0JshhV-sW2QH26R_7pht5jQxqPM7MmloBOPau7oYvEetdmY4qJA1NE_SGeb5WM9W5ygKT4VOhj4dE-M-_4XOf41Tay8xU8rBCGaNdagpcilfym2CGqcO5boItMxx0B2C3h6rVNPyxV3W7SdBbg-LHXauMjDays9X8UFZIC4xIuvf-LhygQrPtQy4_wN1-xPCS68V9qp5WLYD0T8ic-BGjEG9fZTTmsIDh1gtNAY67GzKyVLgIzBGL35i-JcF-9nImpTJGopg";
const IMG_LOCAL_SEO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDeTqrssu82xuHylGiVYxZAZF9HmZi0pzd_pSArp89pmd2SlWDairt8gk0DIYx-WdV12oqvhhWULNQ37oeHkE4EQ3Y-sOYtgNdiNuvF_pf4lzMJVF7k-DReOXScq6bNHAZtKS-WrexIew0uhxDh9nUO4vWGSfYAKi7rVAIIWlFZV6EkWb5fy66An-gi1ZukmskDt7j5m1mdk1nSGf99Zu0xcf-u_a-SsOHOgIivlpy7mRsVBDoIQHQEWzI3YQKW3urFLoLRNRLwR_w";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "รับทำ SEO ภาคใต้ ภูเก็ต กระบี่ หาดใหญ่ | AP Digital Agency",
  description: "รับทำ SEO ภาคใต้ ครบวงจร ติดอันดับ Google สำหรับธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้ Technical SEO · Local SEO · Content Strategy วิเคราะห์ฟรีไม่มีข้อผูกมัด",
};

export default function SEOPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <header className="relative overflow-hidden pt-32 pb-32" style={{ backgroundColor: "#f7f9fb" }}>
          {/* BG decorations */}
          <div
            className="absolute top-0 right-0 h-full rounded-bl-[10rem]"
            style={{ width: "66%", backgroundColor: "rgba(0,174,239,0.08)", zIndex: 0 }}
          />
          <div
            className="absolute rounded-full blur-[120px]"
            style={{
              top: "-6rem", left: "-6rem",
              width: "24rem", height: "24rem",
              backgroundColor: "rgba(182,208,255,0.2)",
            }}
          />

          <div className={`${wrap} relative`} style={{ zIndex: 10 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wider mb-8"
                  style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>trending_up</span>
                  รับทำ SEO ภูเก็ต · กระบี่ · หาดใหญ่ · ทั่วภาคใต้
                </div>

                <h1
                  className="text-display leading-tight mb-6 text-3xl md:text-[3.75rem]"
                  style={{ fontWeight: 400, color: "#191c1e" }}
                >
                  รับทำ{" "}
                  <span style={{ background: "linear-gradient(135deg,#00658d,#00aeef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    SEO ภาคใต้
                  </span>
                  <br />ติดอันดับ Google วัดผลได้จริง
                </h1>

                <p className="text-xl mb-10 thai-leading" style={{ fontWeight: 200, color: "#3e4850", maxWidth: "36rem" }}>
                  บริษัทรับทำ SEO ภาคใต้ ที่สร้างผลลัพธ์จริงให้ธุรกิจในภูเก็ต กระบี่ หาดใหญ่
                  ด้วยกลยุทธ์ที่แม่นยำและวัดผลได้ในทุกขั้นตอน
                </p>

                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="text-white px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                    style={{
                      fontWeight: 300,
                      background: "linear-gradient(135deg,#00658d,#00aeef)",
                      boxShadow: "0 20px 40px -10px rgba(0,101,141,0.3)",
                    }}
                  >
                    เริ่มวางแผนกลยุทธ์
                  </Link>
                  <Link
                    href="/about"
                    className="text-[#191c1e] px-8 py-4 rounded-full text-lg transition-colors hover:bg-[#d8dadc]"
                    style={{ fontWeight: 300, backgroundColor: "#e0e3e5" }}
                  >
                    ดูผลงานของเรา
                  </Link>
                </div>
              </div>

              {/* Right: hero image */}
              <div className="relative">
                <div
                  className="overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "4/5", borderRadius: "2.5rem", transform: "rotate(2deg)" }}
                >
                  <Image src={IMG_HERO} alt="Modern office interior" fill className="object-cover" />
                </div>
                {/* Floating stat card */}
                <div
                  className="absolute flex items-center gap-4 p-8"
                  style={{
                    bottom: "-2.5rem", left: "-2.5rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "1.5rem",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                    maxWidth: "17rem",
                    transform: "rotate(-3deg)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: "#00aeef" }}
                  >
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <div className="text-2xl text-[#191c1e]" style={{ fontWeight: 400 }}>240%</div>
                    <div className="text-xs text-[#3e4850] uppercase tracking-wide" style={{ fontWeight: 300 }}>Traffic Increase</div>
                    <p className="text-sm text-[#3e4850] mt-1 thai-leading" style={{ fontWeight: 200 }}>
                      ผลลัพธ์เฉลี่ยที่เราสร้างให้ลูกค้า
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Stats Bento ────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#f2f4f6" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Big stat */}
              <div
                className="flex flex-col justify-between p-12 text-white"
                style={{ backgroundColor: "#3f5881", borderRadius: "2rem" }}
              >
                <span className="material-symbols-outlined text-5xl" style={{ color: "#00aeef" }}>database</span>
                <div>
                  <h3 className="text-5xl mb-2" style={{ fontWeight: 400 }}>15k+</h3>
                  <p className="text-lg thai-leading" style={{ fontWeight: 200, opacity: 0.8 }}>
                    Keywords ที่ติดอันดับหน้าแรกให้ธุรกิจในภูเก็ต กระบี่ หาดใหญ่ และทั่วภาคใต้
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div
                className="flex flex-col justify-between p-10 bg-white"
                style={{ borderRadius: "2rem", borderBottom: "4px solid #00aeef" }}
              >
                <span className="material-symbols-outlined text-4xl" style={{ color: "#00658d" }}>speed</span>
                <div>
                  <h3 className="text-4xl text-[#191c1e]" style={{ fontWeight: 400 }}>98%</h3>
                  <p className="text-sm text-[#3e4850] mt-2" style={{ fontWeight: 200 }}>Core Web Vitals Pass Rate</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div
                className="flex flex-col justify-between p-10 bg-white"
                style={{ borderRadius: "2rem", borderBottom: "4px solid #00b3c8" }}
              >
                <span className="material-symbols-outlined text-4xl" style={{ color: "#006875" }}>group</span>
                <div>
                  <h3 className="text-4xl text-[#191c1e]" style={{ fontWeight: 400 }}>50+</h3>
                  <p className="text-sm text-[#3e4850] mt-2" style={{ fontWeight: 200 }}>พาร์ทเนอร์ธุรกิจในภูเก็ต กระบี่ หาดใหญ่ พังงา และทั่วภาคใต้</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Services ──────────────────────────────────── */}
        <section className="py-32" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="mb-20" style={{ maxWidth: "40rem" }}>
              <h2 className="text-4xl mb-6" style={{ fontWeight: 400, color: "#191c1e" }}>
                บริการ SEO ภาคใต้ ครบทุก Dimension
              </h2>
              <p className="text-lg text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                เราผสานเทคโนโลยี SEO ระดับสากลเข้ากับความเข้าใจตลาดภูเก็ต กระบี่ และหาดใหญ่
                เพื่อสร้างการมองเห็นบน Google ที่ตอบโจทย์ทั้งนักท่องเที่ยวและลูกค้าในพื้นที่
              </p>
            </div>

            <div className="flex flex-col gap-32">
              {/* Service 1: Technical SEO */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                <div className="w-full md:w-1/2 relative">
                  <div
                    className="p-4"
                    style={{ backgroundColor: "#e0e3e5", borderRadius: "3rem", transform: "rotate(1deg)" }}
                  >
                    <Image
                      src={IMG_TECH_SEO}
                      alt="Data dashboard"
                      width={600}
                      height={450}
                      className="w-full shadow-lg"
                      style={{ borderRadius: "2.5rem" }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-[#00658d] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 300 }}>
                    Technical SEO
                  </span>
                  <h3 className="text-3xl text-[#191c1e] leading-tight mb-4" style={{ fontWeight: 400 }}>
                    โครงสร้างพื้นฐานที่แข็งแกร่ง ดุจเสาเข็มของวิลล่าหรู
                  </h3>
                  <p className="text-[#3e4850] leading-relaxed mb-6 thai-leading" style={{ fontWeight: 200 }}>
                    เราจัดการเบื้องหลังเว็บไซต์ของคุณให้ Google รัก ตั้งแต่ Page Speed Optimization,
                    Schema Markup ไปจนถึงการจัดการ Mobile-First Indexing
                  </p>
                  {[
                    "XML Sitemap & Robots.txt Optimization",
                    "Advanced Schema Implementation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined" style={{ color: "#00658d" }}>check_circle</span>
                      <span className="text-[#191c1e]" style={{ fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service 2: Local SEO */}
              <div className="flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-20 items-center">
                <div className="w-full md:w-1/2 relative">
                  <div
                    className="p-4"
                    style={{ backgroundColor: "rgba(0,174,239,0.08)", borderRadius: "3rem", transform: "rotate(-1deg)" }}
                  >
                    <Image
                      src={IMG_LOCAL_SEO}
                      alt="Southern Thailand"
                      width={600}
                      height={450}
                      className="w-full shadow-lg"
                      style={{ borderRadius: "2.5rem" }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-[#00658d] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 300 }}>
                    Local SEO ภาคใต้
                  </span>
                  <h3 className="text-3xl text-[#191c1e] leading-tight mb-4" style={{ fontWeight: 400 }}>
                    Local SEO ภูเก็ต กระบี่ หาดใหญ่ ติดอันดับใน Google Maps & Search
                  </h3>
                  <p className="text-[#3e4850] leading-relaxed mb-6 thai-leading" style={{ fontWeight: 200 }}>
                    เจาะกลุ่มลูกค้าในภูเก็ต กระบี่ และหาดใหญ่ ด้วย Google Business Profile Optimization
                    และ Hyper-local Keyword Strategy ที่ตอบโจทย์ Search Intent ของนักท่องเที่ยวและคนในพื้นที่ภาคใต้
                  </p>
                  {[
                    "Multi-location GMB Management (ภูเก็ต · กระบี่ · หาดใหญ่)",
                    "Hyper-local Keyword Mapping ภาษาไทย & English",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined" style={{ color: "#00658d" }}>check_circle</span>
                      <span className="text-[#191c1e]" style={{ fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff", position: "relative" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,101,141,0.04)", zIndex: 0 }} />
          <div className={`${wrap} relative`} style={{ zIndex: 10 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Left: contact info */}
              <div>
                <h2 className="text-5xl text-[#191c1e] mb-8 leading-tight" style={{ fontWeight: 400 }}>
                  พร้อมติดอันดับ 1<br />
                  บน Google <span style={{ color: "#00658d" }}>ภาคใต้?</span>
                </h2>
                <p className="text-xl text-[#3e4850] mb-12 thai-leading" style={{ fontWeight: 200 }}>
                  ให้ผู้เชี่ยวชาญรับทำ SEO ภาคใต้ของเรา วิเคราะห์เว็บไซต์และวางแผน Keyword ให้ฟรี ไม่มีข้อผูกมัด
                </p>
                {[
                  { icon: "call", title: "Hotline ปรึกษาฟรี", detail: "076-XXX-XXXX (สาขาภูเก็ต)" },
                  { icon: "mail", title: "อีเมลสอบถาม", detail: "hello@apdigital.agency" },
                ].map((c) => (
                  <div key={c.icon} className="flex items-start gap-6 mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#e0e3e5" }}
                    >
                      <span className="material-symbols-outlined" style={{ color: "#00658d" }}>{c.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-[#191c1e] mb-1" style={{ fontWeight: 300 }}>{c.title}</h4>
                      <p className="text-[#3e4850]" style={{ fontWeight: 200 }}>{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: form */}
              <div
                className="p-12"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "2.5rem",
                  boxShadow: "0 40px 80px -20px rgba(0,101,141,0.1)",
                  border: "1px solid rgba(189,200,209,0.2)",
                }}
              >
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "ชื่อ-นามสกุล", placeholder: "จิรายุ สมบัติ", type: "text" },
                      { label: "ชื่อบริษัท", placeholder: "Andaman Resort Group", type: "text" },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="block text-xs text-[#3e4850] uppercase tracking-wider mb-2" style={{ fontWeight: 300 }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          className="w-full px-5 py-4 rounded-xl outline-none"
                          style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs text-[#3e4850] uppercase tracking-wider mb-2" style={{ fontWeight: 300 }}>
                      เว็บไซต์ของคุณ
                    </label>
                    <input
                      type="url"
                      placeholder="https://www.yourbusiness.com"
                      className="w-full px-5 py-4 rounded-xl outline-none"
                      style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#3e4850] uppercase tracking-wider mb-2" style={{ fontWeight: 300 }}>
                      ความต้องการเพิ่มเติม
                    </label>
                    <textarea
                      rows={4}
                      placeholder="เล่าให้เราฟังคร่าวๆ เกี่ยวกับเป้าหมายของคุณ..."
                      className="w-full px-5 py-4 rounded-xl outline-none resize-none"
                      style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 rounded-full text-white text-lg hover:opacity-90 transition-opacity"
                    style={{
                      fontWeight: 300,
                      background: "linear-gradient(135deg,#00658d,#00aeef)",
                      boxShadow: "0 20px 40px -10px rgba(0,101,141,0.3)",
                    }}
                  >
                    ส่งข้อมูลเพื่อรับการวิเคราะห์ฟรี
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG_MAP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuADEM_pUjYiuQrImYxT0hl7WSDhSS8bo0M8pMuZLLl58cTVhlRwVnz9N3fil8DGiTj21d9VtE3dBA_EzUdcxzLned9Rg3JS7-jTb5iUa82z6peM6sKLB1Zb_NlelFEYQhmXr7hSaAHSuDgv6meyE2hEeayZaWkwNvNfQKarMjrDxwfx6X1vBgiDndEBWUOTougLBcPPllDPirkNTrIXRIQJYpBAQ8ydnMMUGQXP7fD7ras8G3oLt19CQlukPl2Y3pUIia3_Wo61kXY";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = { title: "ติดต่อเรา - AP Digital Agency" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20" style={{ backgroundColor: "#f7f9fb" }}>
        <div className={wrap}>
          {/* ── Hero + Form ────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 md:gap-16 items-start mb-20 md:mb-32">
            {/* Left: content + channels */}
            <div>
              <div className="mb-12">
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
                  style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}
                >
                  Contact Us
                </span>
                <h1
                  className="text-display mb-6 thai-leading"
                  style={{ fontWeight: 400, fontSize: "3.5rem", color: "#191c1e" }}
                >
                  มาสร้าง{" "}
                  <span style={{ color: "#00658d" }}>Digital Tide</span>{" "}
                  ไปพร้อมกับเรา
                </h1>
                <p className="text-lg text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                  ปลดล็อกศักยภาพทางธุรกิจของคุณด้วยกลยุทธ์ดิจิทัลที่แม่นยำ
                  ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและช่วยคุณเติบโตอย่างยั่งยืน
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-6" style={{ fontWeight: 300 }}>ช่องทางติดต่อด่วน</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "call", label: "Phone", value: "02-XXX-XXXX" },
                    { icon: "chat", label: "Line Official", value: "@apdigital" },
                    { icon: "mail", label: "Facebook Inbox", value: "AP Digital Agency" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center p-6 transition-all duration-300"
                      style={{ backgroundColor: "#f2f4f6", borderRadius: "1.5rem" }}
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-2xl mr-4 flex-shrink-0"
                        style={{ backgroundColor: "rgba(0,101,141,0.1)", color: "#00658d" }}
                      >
                        <span className="material-symbols-outlined">{c.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>{c.label}</p>
                        <p className="text-lg text-[#191c1e]" style={{ fontWeight: 300 }}>{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: quote form */}
            <div
              className="p-12 relative overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "2.5rem",
                boxShadow: "0 40px 80px rgba(0,33,71,0.08)",
              }}
            >
              <div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{
                  top: "-3rem", right: "-3rem",
                  width: "12rem", height: "12rem",
                  backgroundColor: "rgba(0,101,141,0.05)",
                }}
              />
              <h2 className="text-3xl mb-8 flex items-center" style={{ fontWeight: 400 }}>
                <span className="w-2 h-8 rounded-full mr-4 inline-block" style={{ backgroundColor: "#00658d" }} />
                ขอใบเสนอราคา
              </h2>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "ชื่อ-นามสกุล", placeholder: "ระบุชื่อของคุณ", type: "text" },
                    { label: "อีเมลติดต่องาน", placeholder: "example@company.com", type: "email" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 200 }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full px-6 py-4 rounded-xl outline-none"
                        style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 200 }}>
                    งบประมาณที่คาดการณ์
                  </label>
                  <select
                    className="w-full px-6 py-4 rounded-xl outline-none appearance-none"
                    style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
                  >
                    <option>เลือกช่วงงบประมาณ</option>
                    <option>50,000 - 100,000 บาท</option>
                    <option>100,000 - 300,000 บาท</option>
                    <option>300,000 บาทขึ้นไป</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 200 }}>
                    รายละเอียดโปรเจกต์
                  </label>
                  <textarea
                    rows={5}
                    placeholder="เล่าถึงธุรกิจและความต้องการของคุณ..."
                    className="w-full px-6 py-4 rounded-xl outline-none resize-none"
                    style={{ backgroundColor: "#f2f4f6", border: "none", fontWeight: 200 }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-full text-white text-lg flex items-center justify-center gap-3 group hover:opacity-90 transition-opacity"
                  style={{
                    fontWeight: 300,
                    background: "linear-gradient(90deg, #00658d, #00aeef)",
                    boxShadow: "0 20px 40px -10px rgba(0,101,141,0.3)",
                  }}
                >
                  ส่งข้อมูลเพื่อประเมินราคา
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <p className="text-center text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>
                  เราจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ
                </p>
              </form>
            </div>
          </div>

          {/* ── Visit Our Studio ───────────────────────────── */}
          <section className="mb-12">
            <div className="text-center mb-12" style={{ maxWidth: "40rem", margin: "0 auto 3rem" }}>
              <h2 className="text-4xl mb-4" style={{ fontWeight: 400 }}>Visit our Studio</h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                แวะมาจิบกาแฟและพูดคุยเรื่องโปรเจกต์ของคุณได้ที่ออฟฟิศของเรา
                บรรยากาศที่เป็นกันเองช่วยสร้างไอเดียใหม่ๆ ได้เสมอ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ minHeight: "20rem" }}>
              {/* Info card */}
              <div
                className="flex flex-col justify-center p-12 text-white"
                style={{ backgroundColor: "#3f5881", borderRadius: "2.5rem" }}
              >
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="material-symbols-outlined flex-shrink-0" style={{ color: "#00aeef" }}>
                      location_on
                    </span>
                    <p className="text-lg thai-leading" style={{ fontWeight: 200 }}>
                      14/3 อำเภอเมือง จังหวัดกระบี่ 81000
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined flex-shrink-0" style={{ color: "#00aeef" }}>schedule</span>
                    <p className="text-lg" style={{ fontWeight: 200 }}>จันทร์ - ศุกร์: 09:00 - 18:00 น.</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm uppercase tracking-wider text-white/60 mb-2" style={{ fontWeight: 200 }}>
                    How to get here
                  </p>
                  <p className="text-white/90" style={{ fontWeight: 200 }}>
                    อำเภอเมืองกระบี่ จังหวัดกระบี่
                  </p>
                </div>
              </div>

              {/* Map image */}
              <div className="relative overflow-hidden group" style={{ borderRadius: "2.5rem", minHeight: "20rem" }}>
                <Image
                  src={IMG_MAP}
                  alt="Office location map Bangkok"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(70,95,136,0.8), transparent)" }}
                />
                <div className="absolute bottom-10 left-10">
                  <div
                    className="flex items-center gap-3 p-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", borderRadius: "1rem" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: "#00658d" }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>directions</span>
                    </div>
                    <div>
                      <p className="text-xs text-[#00658d] uppercase" style={{ fontWeight: 200 }}>Open in</p>
                      <p className="text-sm text-[#191c1e]" style={{ fontWeight: 300 }}>Google Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

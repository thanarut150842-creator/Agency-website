import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

const IMG_MAP =
  "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&q=80";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "ติดต่อ Surf Digital | รับทำ SEO ภาคใต้ ภูเก็ต กระบี่ สงขลา",
  description: "ติดต่อ Surf Digital รับทำ SEO และ Digital Marketing สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา ปรึกษาฟรี ตอบกลับใน 2 ชั่วโมง",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaBreadcrumb items={[
        { name: "หน้าแรก", url: "/" },
        { name: "ติดต่อเรา", url: "/contact" },
      ]} />
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
                  รับทำ SEO & Digital Marketing · ภาคใต้
                </span>
                <h1
                  className="text-display mb-6 thai-leading"
                  style={{ fontWeight: 400, fontSize: "3.5rem", color: "#191c1e" }}
                >
                  ติดต่อ{" "}
                  <span style={{ color: "#00658d" }}>ผู้เชี่ยวชาญ SEO</span>{" "}
                  ภาคใต้ของเรา
                </h1>
                <p className="text-lg text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                  ให้ทีมผู้เชี่ยวชาญ SEO ภาคใต้ของเราวิเคราะห์เว็บไซต์และวางแผน Keyword ฟรี
                  สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา พังงา สุราษฎร์ธานี และทั่วภาคใต้
                </p>
              </div>

              {/* Contact info cards */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: "mail", label: "อีเมล", value: "hello@surfdigitalth.com", href: "mailto:hello@surfdigitalth.com" },
                  { icon: "chat", label: "LINE Official", value: "@106bhqto", href: "https://page.line.me/106bhqto" },
                  { icon: "call", label: "โทร (9:00—18:00)", value: "095-289-9881", href: "tel:0952899881" },
                  { icon: "location_on", label: "ออฟฟิศ", value: "เมืองกระบี่ · นัดลงพื้นที่ได้ทั่วภาคใต้", href: undefined },
                ].map((c) => {
                  const inner = (
                    <div className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 flex items-center justify-center rounded-2xl flex-shrink-0"
                        style={{ backgroundColor: "#e4f0ff", color: "#00658d" }}
                      >
                        <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 20 }}>{c.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs text-[#6e7881] mb-0.5" style={{ fontWeight: 200 }}>{c.label}</p>
                        <p className="text-[#191c1e]" style={{ fontWeight: 300, fontSize: "0.95rem" }}>{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block px-5 py-4 transition-all duration-200 hover:shadow-md"
                      style={{ backgroundColor: "#f2f4f6", borderRadius: "1.25rem", textDecoration: "none" }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label} className="px-5 py-4" style={{ backgroundColor: "#f2f4f6", borderRadius: "1.25rem" }}>
                      {inner}
                    </div>
                  );
                })}

                {/* Response time card */}
                <div className="px-5 py-4" style={{ backgroundColor: "#f2f4f6", borderRadius: "1.25rem" }}>
                  <p className="text-xs text-[#6e7881] mb-1" style={{ fontWeight: 200 }}>ตอบกลับภายใน</p>
                  <div className="flex items-baseline gap-2">
                    <span style={{ fontSize: "2.5rem", fontWeight: 400, color: "#00658d", lineHeight: 1 }}>2</span>
                    <span className="text-[#3e4850]" style={{ fontWeight: 200 }}>ชั่วโมงในวันทำการ</span>
                  </div>
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
              <h2 className="text-2xl mb-8 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                เล่าเรื่องธุรกิจคุณให้ฟังหน่อย
              </h2>

              <ContactForm />
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
                  alt="แผนที่ออฟฟิศ Surf Digital Agency จังหวัดกระบี่"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                      <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>directions</span>
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

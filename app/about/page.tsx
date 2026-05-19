import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

const IMG_HERO_MAIN =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80";
const IMG_HERO_INSET =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80";

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "เกี่ยวกับ Surf Digital | Digital Agency ภาคใต้ ภูเก็ต กระบี่ สงขลา",
  description: "Surf Digital ดิจิทัลเอเจนซี่ภาคใต้ ทีมที่มาจากเอเจนซี่ชั้นนำ สร้างผลลัพธ์จริงให้ธุรกิจในภูเก็ต กระบี่ สงขลา ด้วย SEO ครบวงจร",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaBreadcrumb items={[
        { name: "หน้าแรก", url: "/" },
        { name: "เกี่ยวกับเรา", url: "/about" },
      ]} />
      <Navbar />
      <main>
        {/* ── Hero: Origin Story ───────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-32" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left */}
              <div style={{ zIndex: 10 }}>
                <span className="text-[#00658d] tracking-[0.2em] text-xs mb-4 block uppercase" style={{ fontWeight: 300 }}>
                  DIGITAL AGENCY · ภูเก็ต | กระบี่ | สงขลา
                </span>
                <h1
                  className="text-display mb-8 leading-tight text-3xl md:text-[3.5rem]"
                  style={{ fontWeight: 400, color: "#191c1e" }}
                >
                  Digital Agency{" "}
                  <span style={{ color: "#00658d" }}>ภาคใต้</span> ที่เข้าใจตลาดมากกว่าใคร
                </h1>
                <p className="text-lg text-[#3e4850] mb-10 thai-leading" style={{ fontWeight: 200, maxWidth: "36rem" }}>
                  Surf Digital คือ Digital Agency ภาคใต้ ที่ก่อตั้งโดยทีมงานผู้เชี่ยวชาญ SEO
                  จากเอเจนซี่ชั้นนำในกรุงเทพฯ เพื่อนำกลยุทธ์ระดับสากลมาสร้างผลลัพธ์จริง
                  ให้ธุรกิจในภูเก็ต กระบี่ สงขลา พังงา และทั่วภาคใต้
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5" style={{ backgroundColor: "#00658d" }} />
                  <em className="text-[#191c1e]" style={{ fontWeight: 300 }}>
                    "เพราะเราเชื่อว่าธุรกิจภาคใต้มีศักยภาพที่ไร้ขีดจำกัด เพียงแค่ต้องการพาร์ทเนอร์ที่ถูกต้อง"
                  </em>
                </div>
              </div>

              {/* Right: images */}
              <div className="relative">
                <div
                  className="overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500"
                  style={{ aspectRatio: "4/5", borderRadius: "1.5rem", transform: "rotate(2deg)" }}
                >
                  <Image src={IMG_HERO_MAIN} alt="ทีม Surf Digital Agency ภาคใต้ ออฟฟิศบรรยากาศเขตร้อน" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div
                  className="absolute overflow-hidden border-8 border-white shadow-xl hidden md:block"
                  style={{ bottom: "-2.5rem", left: "-2.5rem", width: "16rem", aspectRatio: "1/1", borderRadius: "1.5rem" }}
                >
                  <Image src={IMG_HERO_INSET} alt="ทีมงาน Digital Marketing ทำงาน Remote ในภาคใต้" fill sizes="256px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ──────────────────────────────────────── */}
        <section className="py-32" style={{ backgroundColor: "#f2f4f6" }}>
          <div className={wrap}>
            <div className="text-center mb-20" style={{ maxWidth: "40rem", margin: "0 auto 5rem" }}>
              <h2 className="text-4xl mb-4 tracking-tight" style={{ fontWeight: 400 }}>
                The Tide We Ride By
              </h2>
              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 300, fontStyle: "italic" }}>
                ปรัชญาการทำงานที่ขับเคลื่อนเราไปข้างหน้าอย่างมั่นคงและสง่างาม
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Data-Driven */}
              <div
                className="p-10 hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "#ffffff", borderRadius: "2rem" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: "#c6e7ff" }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#00658d" }}>insights</span>
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400 }}>Data-Driven</h3>
                <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                  เราไม่ตัดสินใจจากความรู้สึก แต่ใช้ข้อมูลที่แม่นยำเป็นเข็มทิศนำทาง
                  เพื่อให้ทุกบาทที่คุณลงทุนไปเห็นผลลัพธ์ที่จับต้องได้จริง
                </p>
              </div>

              {/* Local Roots – elevated */}
              <div
                className="p-10 shadow-xl text-white"
                style={{ backgroundColor: "#00658d", borderRadius: "2rem", transform: "translateY(-1.5rem)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <span className="material-symbols-outlined text-3xl text-white">location_on</span>
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400 }}>Local Roots</h3>
                <p className="thai-leading" style={{ fontWeight: 200, opacity: 0.8 }}>
                  ความเข้าใจในบริบทและวัฒนธรรมท้องถิ่นคือหัวใจสำคัญ
                  เราสื่อสารและเชื่อมโยงธุรกิจของคุณเข้ากับกลุ่มเป้าหมายในพื้นที่ได้อย่างลึกซึ้ง
                </p>
              </div>

              {/* Human Touch */}
              <div
                className="p-10 hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "#ffffff", borderRadius: "2rem" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: "#9cf0ff" }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#006875" }}>volunteer_activism</span>
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 400 }}>Human Touch</h3>
                <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200 }}>
                  ท่ามกลางเทคโนโลยีที่ล้ำสมัย เรายังคงให้ความสำคัญกับความสัมพันธ์ของมนุษย์
                  เราคือพาร์ทเนอร์ที่พร้อมรับฟังและเคียงข้างคุณ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="py-8">
          <div className={wrap}>
            <div
              className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 p-16 text-white"
              style={{ backgroundColor: "#465f88", borderRadius: "3rem" }}
            >
              <div
                className="absolute rounded-full blur-3xl"
                style={{
                  top: 0, right: 0, width: "24rem", height: "24rem",
                  backgroundColor: "rgba(0,174,239,0.2)",
                  transform: "translate(25%,-25%)",
                }}
              />
              <div style={{ zIndex: 10, maxWidth: "36rem" }}>
                <h2 className="text-4xl mb-4" style={{ fontWeight: 400 }}>
                  มาร่วมสร้างการเติบโตไปพร้อมกับเรา
                </h2>
                <p className="text-lg thai-leading" style={{ fontWeight: 200, opacity: 0.7 }}>
                  ไม่ว่าธุรกิจของคุณจะเล็กหรือใหญ่ เราพร้อมเป็นส่วนหนึ่งในการขับเคลื่อนความสำเร็จด้วยดิจิทัล
                </p>
              </div>
              <Link
                href="/contact"
                className="relative text-[#465f88] px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
                style={{ fontWeight: 300, backgroundColor: "#ffffff", zIndex: 10, whiteSpace: "nowrap" }}
              >
                พูดคุยกับผู้เชี่ยวชาญ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

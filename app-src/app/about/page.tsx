import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG_HERO_MAIN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD69xfiRaa6XWpU7UhhCiRhUEAd8jwzsaSDY0Z8FNZlOaK5_j80XiiyR-K_-PbUkgMjqmXkRxuXJ8SuoPIxwpsGyVETkr7PqsP8S2zAd-6fJxFLwW03ZJLQYuHpOZw8I0aSnZA1ZJpivaRgz1O_JkIORpmEfhjQD8_Ff7kxDzeEbvsKKMZvkXaUVDRPQLhf70kp6QJ7Xl531hDoJ2uXX_ok9Cy_W-J_QkDIe_G2BEcmVpS7BG2m31Ie8Ku7antWqQEiqzGjBO_7VMw";
const IMG_HERO_INSET =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Xwkpz3XTeWDi9MIsUPIeSm_TCC0JJFjgiKWn6BOJf0weigmV6S1Hz6ikIXB3eBcqpeyDJxm-dseWUo7SxkUgq3zjsOPISWsz9PQ_J7RG-Z7-mjdM-aYowbUVY6QtvWUWlJ-wRs-AO88kS_QPw2DC95Tpu0U1py-ul8dYY_OOIpTgezYzXxg7Jop9t9C4qdRNsFfH1Sr5MzsWnFTdekThzfgwx2vAzVn3XGBa7wYOCKiPzx1wEXF64bJBH_25vFcICwgJq4iQFNY";

const teamMembers = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDskq_I4tlEVn4ZbwYFCDJ2CiDR_WMBlAqXjte3W35dB0I1c4f67Z4W_vHQu7LpHZGn3bwo09Bt923LmKFjmaewiP4-6FqQmaVY2lJTEjQAjJexTFU9c3bFKIKqbI33xzCAj4PTSISt9AND92yZbBuhtvZi7U44JSIf6NOJRuZDlqvRgxDM3oTIMejWBnv0_Xw55GEXYUMmxJnId7LKbXDD-njzUcKvBkS0uD8qXTzh51sB4BTSt8-BKBNCaB0YtN92ka9U9RkngBU",
    name: "คุณภวัต (พีท)", role: "Founder & Strategy Director",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNu1whL1XYmy5nDJJ1m23XpeCzri4HV8_29EfOMkUM0X85sg1rF9AK5PtKNDW7o7gkU45GAU2DBv9uN2obn5Rq0MBq1SzDNF_dbUFwGgjMmRz_aszdJDiMILCXLkJ4zdia8RerzDjSVMV7RpQHmV18r7yfWof2ghP8FTOQrq9moTuh-pk40jtqBkDHOXsCe4dznSK7-awQwi34lWaSitJtbl_bK30L9PxS-I30H9BSfxsEMNxXd9HtZBNZVKSyZm5rTKapZksAYvM",
    name: "คุณรินรดา (ริน)", role: "Creative Design Lead",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjk5GOTdBCP34pKvmORoIAUXoWbNh-rYAwxawzsrPRzI8oH2HgPfTR26n4kD4iYkCeRUCP1CfF2Hp6Xd3VkidNgNabbfLTvjI8nb3F-on54KU7UNYjPG1KhONYKwzLEz_Qd0JhTsc6ybSqJIDulMzPIbjK9wCwZCMczfUlC9ulTVaY0EdHASTuKvWleqY-8jWv33-_2kj9iPUzrS2k8aJKWNf6WRKMAgxvE8ei7qe036JYBoqhaZMy4aI1lLfQoERHopWwFY-gyDA",
    name: "คุณอัครพล (พล)", role: "Head of SEO & Data",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoO5oc6Km03TkU-g3r2zY9I9QQHKCXup3GVQDLP5l_jBdiv03twh38Q55wmRmBswL5w48u88U8HMrvrfqA2eK6G4toFlthCOY19EncX21iDHHXSoAFVUeC5Ak3hEZanwsBA3dIQ4vvoPUwJ8poGkZezHt3AbXB7Z8S8pHz9X3Rpd2DSH2R5hfCsu4vaDXzjvqW9fi3I2sOifGnSYlEvDRSeEMdQcrs5YaA_Oh2uZNyMzZE0w_RSL83mdGVzxRxJvphODs_1UCscdM",
    name: "คุณวริศรา (ก้อย)", role: "Content Marketing Specialist",
  },
];

const wrap = "w-full max-w-7xl mx-auto px-4 md:px-8";

export const metadata = {
  title: "เกี่ยวกับ AP Digital | Digital Agency ภาคใต้ ภูเก็ต กระบี่ หาดใหญ่",
  description: "AP Digital คือ Digital Agency ภาคใต้ ที่นำประสบการณ์จากเอเจนซี่ชั้นนำมาสร้างผลลัพธ์จริงให้ธุรกิจในภูเก็ต กระบี่ หาดใหญ่ ด้วยทีมผู้เชี่ยวชาญ SEO และการตลาดดิจิทัลครบวงจร",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero: Origin Story ───────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-32" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left */}
              <div style={{ zIndex: 10 }}>
                <span className="text-[#00658d] tracking-[0.2em] text-xs mb-4 block uppercase" style={{ fontWeight: 300 }}>
                  DIGITAL AGENCY · ภูเก็ต | กระบี่ | หาดใหญ่
                </span>
                <h1
                  className="text-display mb-8 leading-tight text-3xl md:text-[3.5rem]"
                  style={{ fontWeight: 400, color: "#191c1e" }}
                >
                  Digital Agency{" "}
                  <span style={{ color: "#00658d" }}>ภาคใต้</span> ที่เข้าใจตลาดมากกว่าใคร
                </h1>
                <p className="text-lg text-[#3e4850] mb-10 thai-leading" style={{ fontWeight: 200, maxWidth: "36rem" }}>
                  AP Digital คือ Digital Agency ภาคใต้ ที่ก่อตั้งโดยทีมงานผู้เชี่ยวชาญ SEO
                  จากเอเจนซี่ชั้นนำในกรุงเทพฯ เพื่อนำกลยุทธ์ระดับสากลมาสร้างผลลัพธ์จริง
                  ให้ธุรกิจในภูเก็ต กระบี่ หาดใหญ่ พังงา และทั่วภาคใต้
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
                  <Image src={IMG_HERO_MAIN} alt="Office with tropical view" fill className="object-cover" />
                </div>
                <div
                  className="absolute overflow-hidden border-8 border-white shadow-xl hidden md:block"
                  style={{ bottom: "-2.5rem", left: "-2.5rem", width: "16rem", aspectRatio: "1/1", borderRadius: "1.5rem" }}
                >
                  <Image src={IMG_HERO_INSET} alt="Laptop with ocean view" fill className="object-cover" />
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

        {/* ── Team ────────────────────────────────────────── */}
        <section className="py-32 overflow-hidden" style={{ backgroundColor: "#f7f9fb" }}>
          <div className={wrap}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-16">
              <div style={{ maxWidth: "40rem" }}>
                <h2 className="text-4xl mb-6" style={{ fontWeight: 400 }}>
                  Guided by Experts,<br />
                  <span style={{ color: "#00aeef" }}>Grounded by Community</span>
                </h2>
                <p className="text-[#3e4850] text-lg thai-leading" style={{ fontWeight: 200 }}>
                  ทีมงานของเราคือการรวมตัวกันของคนรุ่นใหม่ที่มีไฟและประสบการณ์จากเอเจนซี่ชั้นนำ
                  พร้อมที่จะนำความรู้มาส่งต่อเพื่อขับเคลื่อนเศรษฐกิจในท้องถิ่น
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((m) => (
                <div
                  key={m.name}
                  className="group relative overflow-hidden"
                  style={{ aspectRatio: "3/4", borderRadius: "1.5rem", backgroundColor: "#eceef0" }}
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    style={{ background: "linear-gradient(to top, rgba(70,95,136,0.8), transparent)" }}
                  >
                    <h4 className="text-white text-xl" style={{ fontWeight: 400 }}>{m.name}</h4>
                    <p className="text-white/80 text-sm" style={{ fontWeight: 200 }}>{m.role}</p>
                  </div>
                </div>
              ))}
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

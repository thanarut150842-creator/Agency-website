import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | Surf Digital Agency",
  description:
    "นโยบายความเป็นส่วนตัวของ Surf Digital Agency ตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA)",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    id: "introduction",
    heading: "1. บทนำ",
    body: `Surf Digital Agency ("เรา", "บริษัท") ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของท่าน นโยบายความเป็นส่วนตัวนี้อธิบายวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย และปกป้องข้อมูลส่วนบุคคลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)`,
  },
  {
    id: "data-collected",
    heading: "2. ข้อมูลที่เราเก็บรวบรวม",
    body: `เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของท่านในหมวดหมู่ดังต่อไปนี้:`,
    bullets: [
      "ข้อมูลระบุตัวตน: ชื่อ-นามสกุล อีเมล เบอร์โทรศัพท์",
      "ข้อมูลธุรกิจ: ชื่อบริษัท ประเภทธุรกิจ งบประมาณที่คาดการณ์",
      "ข้อมูลการใช้งานเว็บไซต์: หน้าที่เข้าชม เวลาที่ใช้งาน แหล่งที่มา",
      "ข้อมูลทางเทคนิค: ที่อยู่ IP ประเภทเบราว์เซอร์ ระบบปฏิบัติการ",
      "คุกกี้และข้อมูลการติดตาม (ดูรายละเอียดในหัวข้อคุกกี้)",
    ],
  },
  {
    id: "purpose",
    heading: "3. วัตถุประสงค์ในการใช้ข้อมูล",
    body: `เราใช้ข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์ดังต่อไปนี้:`,
    bullets: [
      "ติดต่อกลับและให้บริการตามที่ท่านร้องขอผ่านแบบฟอร์มติดต่อ",
      "วิเคราะห์และปรับปรุงเว็บไซต์เพื่อประสบการณ์ที่ดีขึ้น",
      "ส่งข้อมูลและข่าวสารด้านการตลาดดิจิทัล (เฉพาะกรณีที่ท่านยินยอม)",
      "ปฏิบัติตามข้อกำหนดทางกฎหมายและข้อบังคับที่เกี่ยวข้อง",
      "ปกป้องสิทธิ ทรัพย์สิน และความปลอดภัยของบริษัทและผู้ใช้",
    ],
  },
  {
    id: "legal-basis",
    heading: "4. ฐานทางกฎหมายในการประมวลผล",
    body: `เราประมวลผลข้อมูลส่วนบุคคลของท่านบนพื้นฐานดังต่อไปนี้:`,
    bullets: [
      "ความยินยอม (Consent): เมื่อท่านกรอกแบบฟอร์มและให้ข้อมูลแก่เรา",
      "ประโยชน์โดยชอบด้วยกฎหมาย (Legitimate Interest): การวิเคราะห์การใช้งานเว็บไซต์เพื่อปรับปรุงบริการ",
      "การปฏิบัติตามสัญญา (Contractual Necessity): การให้บริการแก่ลูกค้า",
      "การปฏิบัติตามกฎหมาย (Legal Obligation): เมื่อกฎหมายกำหนด",
    ],
  },
  {
    id: "cookies",
    heading: "5. คุกกี้และการติดตาม",
    body: `เว็บไซต์ของเราใช้คุกกี้และเทคโนโลยีการติดตามดังต่อไปนี้:`,
    bullets: [
      "คุกกี้ที่จำเป็น (Essential Cookies): สำหรับการทำงานพื้นฐานของเว็บไซต์",
      "Google Analytics 4: เก็บข้อมูลสถิติการเข้าชมเพื่อปรับปรุงเว็บไซต์ (ข้อมูลเป็นแบบนิรนาม)",
      "Google Ads / Meta Pixel: สำหรับวัดผลโฆษณาและรีมาร์เก็ตติ้ง (เฉพาะกรณีที่ท่านยินยอม)",
    ],
    note: "ท่านสามารถปิดการใช้งานคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ อย่างไรก็ตามบางส่วนของเว็บไซต์อาจไม่ทำงานอย่างถูกต้อง",
  },
  {
    id: "sharing",
    heading: "6. การเปิดเผยข้อมูลแก่บุคคลที่สาม",
    body: `เราไม่จำหน่าย ขาย หรือแบ่งปันข้อมูลส่วนบุคคลของท่านแก่บุคคลภายนอกเพื่อวัตถุประสงค์เชิงพาณิชย์ เว้นแต่:`,
    bullets: [
      "ผู้ให้บริการที่เราว่าจ้าง (เช่น Resend สำหรับอีเมล, Google Analytics) ซึ่งมีหน้าที่รักษาความลับข้อมูล",
      "เมื่อกฎหมายกำหนดหรือมีคำสั่งศาล",
      "เพื่อปกป้องสิทธิหรือความปลอดภัยของเรา ลูกค้า หรือบุคคลอื่น",
    ],
  },
  {
    id: "retention",
    heading: "7. ระยะเวลาการเก็บข้อมูล",
    body: `เราจะเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้เท่าที่จำเป็นเพื่อวัตถุประสงค์ที่ระบุในนโยบายนี้ โดยทั่วไปไม่เกิน 3 ปีนับจากวันที่เก็บรวบรวม เว้นแต่กฎหมายกำหนดให้เก็บนานกว่านั้น`,
  },
  {
    id: "rights",
    heading: "8. สิทธิของเจ้าของข้อมูลตาม PDPA",
    body: `ท่านมีสิทธิดังต่อไปนี้ภายใต้พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล:`,
    bullets: [
      "สิทธิในการเข้าถึง: ขอสำเนาข้อมูลส่วนบุคคลของท่านที่เราเก็บรักษาไว้",
      "สิทธิในการแก้ไข: ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วน",
      "สิทธิในการลบ: ขอให้ลบข้อมูลส่วนบุคคลของท่านในบางกรณี",
      "สิทธิในการระงับ: ขอระงับการประมวลผลข้อมูลชั่วคราว",
      "สิทธิในการโอนย้าย: ขอรับข้อมูลในรูปแบบที่สามารถใช้งานได้ทั่วไป",
      "สิทธิในการคัดค้าน: คัดค้านการประมวลผลบนพื้นฐานประโยชน์โดยชอบด้วยกฎหมาย",
      "สิทธิในการถอนความยินยอม: ถอนความยินยอมได้ทุกเมื่อโดยไม่กระทบสิทธิที่ได้ดำเนินการไปแล้ว",
    ],
  },
  {
    id: "security",
    heading: "9. ความปลอดภัยของข้อมูล",
    body: `เราใช้มาตรการรักษาความปลอดภัยทางเทคนิคและองค์กรที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของท่าน รวมถึงการเข้ารหัส SSL/TLS การควบคุมการเข้าถึง และการตรวจสอบความปลอดภัยเป็นประจำ`,
  },
  {
    id: "contact",
    heading: "10. ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล",
    body: `หากท่านมีคำถาม ข้อร้องเรียน หรือต้องการใช้สิทธิของท่าน กรุณาติดต่อเรา:`,
    bullets: [
      "บริษัท Surf Digital Agency",
      "ที่อยู่: 14/3 อำเภอเมือง จังหวัดกระบี่ 81000",
      "โทรศัพท์: 095-289-9881",
      "อีเมล: privacy@surfdigital.agency",
      "เวลาทำการ: จันทร์ – ศุกร์ 09:00 – 18:00 น.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20" style={{ backgroundColor: "#f7f9fb" }}>
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">

          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm mb-8"
              style={{ color: "#00658d", fontWeight: 200, textDecoration: "none" }}
            >
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
              กลับหน้าแรก
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs tracking-widest uppercase"
                style={{ backgroundColor: "#d6e3ff", color: "#2d476f", fontWeight: 300 }}
              >
                PDPA Compliant
              </span>
              <span className="text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>
                มีผลบังคับใช้: 1 มกราคม 2568
              </span>
            </div>

            <h1
              className="text-display thai-leading mb-4"
              style={{ fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#191c1e" }}
            >
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, maxWidth: "36rem" }}>
              Surf Digital Agency ให้ความสำคัญกับความเป็นส่วนตัวของท่าน
              นโยบายนี้อธิบายวิธีที่เราจัดการข้อมูลของท่านอย่างโปร่งใส
            </p>
          </div>

          {/* Content card */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "2rem",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              boxShadow: "0 4px 40px rgba(0,33,71,0.06)",
            }}
          >
            {/* TOC */}
            <nav
              className="mb-10 p-6"
              style={{ backgroundColor: "#f7f9fb", borderRadius: "1rem", borderLeft: "3px solid #00658d" }}
            >
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#00658d", fontWeight: 300 }}>
                สารบัญ
              </p>
              <div className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm py-1"
                    style={{ color: "#3e4850", fontWeight: 200, textDecoration: "none" }}
                  >
                    {s.heading}
                  </a>
                ))}
              </div>
            </nav>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2 className="text-xl mb-3 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                    {s.heading}
                  </h2>
                  <p className="text-[#3e4850] thai-leading mb-4" style={{ fontWeight: 200, lineHeight: 1.8 }}>
                    {s.body}
                  </p>
                  {s.bullets && (
                    <ul className="flex flex-col gap-2 mb-4">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: "rgba(0,101,141,0.1)", color: "#00658d" }}
                          >
                            <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 12 }}>check</span>
                          </span>
                          <span className="text-[#3e4850] thai-leading text-sm" style={{ fontWeight: 200, lineHeight: 1.7 }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {"note" in s && s.note && (
                    <p
                      className="text-sm thai-leading p-4 rounded-xl"
                      style={{ backgroundColor: "#fff8e1", color: "#7a5f00", fontWeight: 200, lineHeight: 1.7 }}
                    >
                      ⚠️ {s.note}
                    </p>
                  )}
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div
              className="mt-12 pt-8 text-sm text-center text-[#3e4850]"
              style={{ borderTop: "1px solid #e8ecef", fontWeight: 200 }}
            >
              เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงสำคัญจะแจ้งให้ทราบบนเว็บไซต์
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#3e4850] mb-6 thai-leading" style={{ fontWeight: 200 }}>
              มีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #00658d, #00aeef)",
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
              ติดต่อเจ้าหน้าที่
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

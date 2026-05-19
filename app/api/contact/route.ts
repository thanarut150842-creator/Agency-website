import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, contact, businessType, services, budget, message } = body as {
    name: string;
    contact: string;
    businessType: string;
    services: string[];
    budget: string;
    message: string;
  };

  if (!name?.trim() || !contact?.trim()) {
    return NextResponse.json(
      { error: "กรุณากรอกชื่อและช่องทางติดต่อ" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[contact] No RESEND_API_KEY — logging submission:", { name, businessType, services, budget, message });
    return NextResponse.json({ success: true });
  }

  const servicesList = Array.isArray(services) && services.length > 0
    ? services.join(", ")
    : "ไม่ระบุ";

  const htmlBody = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
      <h2 style="color:#00658d;margin-bottom:24px">📩 Lead ใหม่ – Surf Digital Agency</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:160px">ชื่อ · ธุรกิจ</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">📞 ติดต่อกลับ</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#00658d">${contact}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">ธุรกิจเกี่ยวกับ</td><td style="padding:10px 0;border-bottom:1px solid #eee">${businessType || "ไม่ระบุ"}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">บริการที่สนใจ</td><td style="padding:10px 0;border-bottom:1px solid #eee">${servicesList}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">งบประมาณ/เดือน</td><td style="padding:10px 0;border-bottom:1px solid #eee">${budget || "ไม่ระบุ"}</td></tr>
      </table>
      ${message ? `<div style="margin-top:24px"><p style="color:#666;margin-bottom:8px">เล่าเพิ่มเติม:</p><div style="background:#f7f9fb;border-left:3px solid #00658d;padding:16px;border-radius:4px;white-space:pre-wrap">${message}</div></div>` : ""}
      <hr style="margin:32px 0;border:none;border-top:1px solid #eee">
      <p style="color:#aaa;font-size:12px">ส่งจากแบบฟอร์ม surfdigitalth.com/contact</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Surf Digital <onboarding@resend.dev>",
        to: ["thanarut150842@gmail.com"],
        subject: `[Surf Digital] Lead ใหม่ จาก ${name}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[contact] Resend error:", text);
      return NextResponse.json(
        { error: "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้งหรือติดต่อเราทาง Line" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดทางเครือข่าย กรุณาลองใหม่" },
      { status: 500 }
    );
  }
}

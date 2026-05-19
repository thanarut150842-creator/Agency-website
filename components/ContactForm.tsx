"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const SERVICES = ["SEO", "Google Ads", "Meta Ads", "TikTok Ads", "ยังไม่แน่ใจ"];
const BUDGETS = [
  { label: "< ฿20,000", value: "ต่ำกว่า 20,000 บาท" },
  { label: "฿20,000—50,000", value: "20,000–50,000 บาท" },
  { label: "฿50,000—100,000", value: "50,000–100,000 บาท" },
  { label: "฿100,000+", value: "100,000 บาทขึ้นไป" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    businessType: "",
    services: [] as string[],
    budget: "",
    message: "",
  });

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "เกิดข้อผิดพลาด กรุณาลองใหม่");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("ไม่สามารถเชื่อมต่อได้ กรุณาลองใหม่อีกครั้ง");
      setStatus("error");
    }
  };

  /* ── Success ── */
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(0,101,141,0.08)" }}
        >
          <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 44, color: "#00658d" }}>
            check_circle
          </span>
        </div>
        <h3 className="text-2xl mb-3" style={{ fontWeight: 400, color: "#191c1e" }}>
          ได้รับข้อมูลแล้ว!
        </h3>
        <p className="text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, lineHeight: 1.8, maxWidth: "24rem" }}>
          ทีมงานจะติดต่อกลับภายใน&nbsp;2&nbsp;ชั่วโมงในวันทำการ
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", contact: "", businessType: "", services: [], budget: "", message: "" }); }}
          className="text-sm px-6 py-2 rounded-full transition-opacity hover:opacity-70"
          style={{ color: "#00658d", fontWeight: 200, border: "1px solid #00658d" }}
        >
          ส่งแบบฟอร์มอีกครั้ง
        </button>
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: "#f2f4f6",
    border: "none",
    fontWeight: 200 as const,
    fontFamily: "inherit",
    outline: "none",
  };

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>

      {/* ชื่อ · ชื่อธุรกิจ */}
      <div>
        <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>
          ชื่อ · ชื่อธุรกิจ
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="ชื่อคุณ — ชื่อร้าน/บริษัท"
          className="w-full px-5 py-3.5 rounded-xl"
          style={inputStyle}
        />
      </div>

      {/* เบอร์โทร / LINE ID */}
      <div>
        <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>
          เบอร์โทร / LINE ID{" "}
          <span style={{ color: "#e53e3e", fontSize: "0.75rem" }}>*</span>
        </label>
        <input
          type="text"
          required
          value={form.contact}
          onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
          placeholder="08x-xxx-xxxx หรือ LINE ID ของคุณ"
          className="w-full px-5 py-3.5 rounded-xl"
          style={inputStyle}
        />
      </div>

      {/* ธุรกิจเกี่ยวกับอะไร */}
      <div>
        <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>
          ธุรกิจของคุณเกี่ยวกับอะไร
        </label>
        <input
          type="text"
          value={form.businessType}
          onChange={(e) => setForm((p) => ({ ...p, businessType: e.target.value }))}
          placeholder="เช่น คลินิกทันตกรรมในหาดใหญ่, ร้านอาหารทะเลกระบี่"
          className="w-full px-5 py-3.5 rounded-xl"
          style={inputStyle}
        />
      </div>

      {/* สนใจบริการไหน */}
      <div>
        <label className="block text-sm text-[#3e4850] mb-3 ml-1" style={{ fontWeight: 300 }}>
          สนใจบริการไหน{" "}
          <span style={{ color: "#9eaab5" }}>(เลือกได้หลายอัน)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = form.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className="px-4 py-2 rounded-full text-sm transition-all"
                style={{
                  backgroundColor: active ? "#00658d" : "#f2f4f6",
                  color: active ? "#ffffff" : "#3e4850",
                  fontWeight: active ? 300 : 200,
                  border: `1.5px solid ${active ? "#00658d" : "transparent"}`,
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* งบโดยประมาณ */}
      <div>
        <label className="block text-sm text-[#3e4850] mb-3 ml-1" style={{ fontWeight: 300 }}>
          งบโดยประมาณ / เดือน
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {BUDGETS.map((b) => {
            const active = form.budget === b.value;
            return (
              <button
                key={b.value}
                type="button"
                onClick={() => setForm((p) => ({ ...p, budget: b.value }))}
                className="py-3 px-2 rounded-xl text-sm text-center transition-all"
                style={{
                  backgroundColor: active ? "#00658d" : "#f2f4f6",
                  color: active ? "#ffffff" : "#3e4850",
                  fontWeight: active ? 300 : 200,
                  border: `1.5px solid ${active ? "#00658d" : "transparent"}`,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  lineHeight: 1.4,
                }}
              >
                {b.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* เล่าเพิ่มเติม */}
      <div>
        <label className="block text-sm text-[#3e4850] mb-2 ml-1" style={{ fontWeight: 300 }}>
          เล่าเพิ่มเติม{" "}
          <span style={{ color: "#9eaab5" }}>(ไม่จำเป็น)</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          rows={4}
          placeholder="ตอนนี้ทำการตลาดยังไง เจอปัญหาอะไรอยู่ อยากได้อะไร"
          className="w-full px-5 py-3.5 rounded-xl resize-none"
          style={inputStyle}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="p-4 rounded-xl text-sm thai-leading" style={{ backgroundColor: "rgba(220,38,38,0.07)", color: "#b91c1c", fontWeight: 200, lineHeight: 1.6 }}>
          ⚠️ {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-full text-white text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:cursor-not-allowed"
        style={{
          fontWeight: 300,
          background: "linear-gradient(90deg, #00658d, #00aeef)",
          boxShadow: "0 16px 32px -8px rgba(0,101,141,0.3)",
          opacity: status === "loading" ? 0.75 : 1,
          fontFamily: "inherit",
        }}
      >
        {status === "loading" ? "กำลังส่งข้อมูล..." : (
          <>
            ส่งข้อความ · รับคำปรึกษาฟรี
            <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
          </>
        )}
      </button>
    </form>
  );
}

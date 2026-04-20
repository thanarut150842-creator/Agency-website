import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f1f4f9] w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-8 text-sm">
        <div className="flex flex-col md:items-start items-center gap-4">
          <div className="text-xl text-[#005d90]" style={{ fontWeight: 300 }}>
            AP Digital Agency
          </div>
          <p className="text-[#181c20] opacity-60 text-center md:text-left max-w-xs" style={{ fontWeight: 200 }}>
            © 2026 AP Digital Agency. The Fluid Archive.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Instagram", href: "#" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[#181c20] opacity-60 hover:opacity-100 hover:text-[#005d90] transition-opacity"
              style={{ fontWeight: 200 }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="px-8 pb-8 text-center text-[#181c20] opacity-40 text-xs border-t border-slate-200 pt-8 max-w-7xl mx-auto" style={{ fontWeight: 200 }}>
        มุ่งมั่นสร้างการเติบโตด้วยนวัตกรรมดิจิทัลในแบบฉบับพาร์ทเนอร์ที่รู้ใจ
      </div>
    </footer>
  );
}

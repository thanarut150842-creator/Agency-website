import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug } from "../data/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "ไม่พบบทความ" };
  return {
    title: `${article.title} - AP Digital Agency`,
    description: article.metaDescription,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20" style={{ backgroundColor: "#f7f9fb" }}>

        {/* ── Article Header ───────────────────────── */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-16">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: "#00658d", fontWeight: 200, textDecoration: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
              กลับสู่บทความทั้งหมด
            </Link>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="px-3 py-1 rounded-full text-xs tracking-widest uppercase"
                style={{ backgroundColor: article.categoryColor, color: "#2d476f", fontWeight: 300 }}
              >
                {article.category}
              </span>
              <span className="text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>{article.date}</span>
              <span className="text-sm text-[#3e4850]" style={{ fontWeight: 200 }}>· {article.readTime}</span>
            </div>

            <h1
              className="text-display thai-leading mb-6"
              style={{ fontWeight: 400, fontSize: "2.75rem", color: "#191c1e", lineHeight: 1.25, maxWidth: "52rem" }}
            >
              {article.title}
            </h1>

            <p className="text-lg text-[#3e4850] thai-leading mb-8" style={{ fontWeight: 200, maxWidth: "52rem" }}>
              {article.metaDescription}
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#d6e3ff", color: "#2d476f" }}
              >
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="text-sm text-[#191c1e]" style={{ fontWeight: 300 }}>{article.author}</p>
                <p className="text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>{article.authorRole}, AP Digital</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden" style={{ borderRadius: "2rem", height: "clamp(14rem, 35vw, 28rem)" }}>
            <Image src={article.image} alt={article.title} fill className="object-cover" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(0,33,71,0.15))" }} />
          </div>
        </div>

        {/* ── Main Content Grid ─────────────────────── */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-[2fr_7fr_3fr]">

            {/* Left Sidebar: TOC – hidden on mobile */}
            <aside className="hidden lg:block">
              <div
                className="sticky"
                style={{ top: "6rem", backgroundColor: "#ffffff", borderRadius: "1.5rem", padding: "1.5rem", boxShadow: "0 4px 24px rgba(0,33,71,0.06)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#00658d", fontWeight: 300 }}>
                  On This Page
                </p>
                <nav className="flex flex-col gap-1">
                  {article.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm py-2 px-3 rounded-lg transition-colors"
                      style={{ color: "#3e4850", fontWeight: 200, textDecoration: "none", borderLeft: "2px solid transparent" }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Body */}
            <article>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "2rem", padding: "clamp(1.25rem, 4vw, 3rem)", boxShadow: "0 4px 40px rgba(0,33,71,0.06)" }}>

                {/* Intro */}
                <p className="text-lg text-[#3e4850] thai-leading mb-10" style={{ fontWeight: 200, lineHeight: 1.8, borderLeft: "4px solid #00aeef", paddingLeft: "1.5rem" }}>
                  {article.intro}
                </p>

                {/* Sections */}
                {article.sections.map((section) => (
                  <section key={section.id} id={section.id} className="mb-12">
                    <h2 className="text-2xl mb-5 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                      {section.heading}
                    </h2>

                    {section.content.map((para, i) => (
                      <p key={i} className="text-[#3e4850] thai-leading mb-4" style={{ fontWeight: 200, lineHeight: 1.8 }}>
                        {para}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="flex flex-col gap-3 my-6">
                        {section.bullets.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: "rgba(0,101,141,0.1)", color: "#00658d" }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check</span>
                            </span>
                            <span className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.7 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subsections && (
                      <div className="flex flex-col gap-6 mt-6">
                        {section.subsections.map((sub, i) => (
                          <div key={i} className="p-6" style={{ backgroundColor: "#f7f9fb", borderRadius: "1rem", borderLeft: "3px solid #00658d" }}>
                            <h3 className="text-lg mb-2" style={{ fontWeight: 300, color: "#191c1e" }}>{sub.heading}</h3>
                            <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.7 }}>{sub.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                {/* FAQ */}
                <section id="faq" className="mb-10">
                  <h2 className="text-2xl mb-6" style={{ fontWeight: 400, color: "#191c1e" }}>
                    คำถามที่พบบ่อย (FAQ)
                  </h2>
                  <div className="flex flex-col gap-4">
                    {article.faq.map((item, i) => (
                      <div key={i} className="p-6" style={{ backgroundColor: "#f7f9fb", borderRadius: "1rem" }}>
                        <p className="mb-2" style={{ fontWeight: 300, color: "#191c1e" }}>
                          Q: {item.question}
                        </p>
                        <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.7 }}>
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-8" style={{ borderTop: "1px solid #e8ecef" }}>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: "#eceef0", color: "#3e4850", fontWeight: 200 }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6">
              <div className="p-8 text-white" style={{ backgroundColor: "#3f5881", borderRadius: "1.5rem" }}>
                <span className="material-symbols-outlined mb-4" style={{ color: "#00aeef", fontSize: 32 }}>rocket_launch</span>
                <h3 className="text-xl mb-3" style={{ fontWeight: 400 }}>พร้อมเริ่มต้นกับเรา?</h3>
                <p className="text-sm text-white/80 mb-6 thai-leading" style={{ fontWeight: 200, lineHeight: 1.7 }}>
                  ให้ทีมผู้เชี่ยวชาญวิเคราะห์ธุรกิจของคุณและวางแผนกลยุทธ์ที่เหมาะสม
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #00658d, #00aeef)", color: "#ffffff", fontWeight: 300, textDecoration: "none" }}
                >
                  ปรึกษาฟรี
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </Link>
              </div>

              <div className="p-6" style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 4px 24px rgba(0,33,71,0.06)" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#00658d", fontWeight: 300 }}>บทความอื่นๆ</p>
                <div className="flex flex-col gap-4">
                  {related.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col gap-1 group" style={{ textDecoration: "none" }}>
                      <span className="text-xs px-2 py-0.5 rounded-full inline-block w-fit" style={{ backgroundColor: post.categoryColor, color: "#2d476f", fontWeight: 200 }}>
                        {post.category}
                      </span>
                      <p className="text-sm text-[#191c1e] thai-leading group-hover:text-[#00658d] transition-colors" style={{ fontWeight: 300, lineHeight: 1.5 }}>
                        {post.title}
                      </p>
                      <p className="text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>{post.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* ── Related Posts ─────────────────────────── */}
          <section className="mt-20">
            <h2 className="text-3xl mb-10" style={{ fontWeight: 400, color: "#191c1e" }}>บทความที่เกี่ยวข้อง</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className="overflow-hidden" style={{ backgroundColor: "#ffffff", borderRadius: "1.5rem", boxShadow: "0 4px 24px rgba(0,33,71,0.06)" }}>
                    <div className="p-6">
                      <span className="text-xs px-3 py-1 rounded-full inline-block mb-3" style={{ backgroundColor: post.categoryColor, color: "#2d476f", fontWeight: 200 }}>
                        {post.category}
                      </span>
                      <h3 className="text-base thai-leading mb-3 group-hover:text-[#00658d] transition-colors" style={{ fontWeight: 300, color: "#191c1e", lineHeight: 1.5 }}>
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ───────────────────────────── */}
          <section className="mt-20 text-white text-center" style={{ backgroundColor: "#3f5881", borderRadius: "2.5rem", padding: "clamp(2rem, 5vw, 4rem)" }}>
            <h2 className="text-4xl mb-4" style={{ fontWeight: 400 }}>พร้อมให้ Digital Tide ทำงานเพื่อคุณ?</h2>
            <p className="text-white/80 text-lg mb-10 thai-leading" style={{ fontWeight: 200, maxWidth: "32rem", margin: "0 auto 2.5rem" }}>
              ปรึกษาฟรีกับผู้เชี่ยวชาญของเราวันนี้ ไม่มีข้อผูกมัด
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #00658d, #00aeef)", color: "#ffffff", fontWeight: 300, textDecoration: "none" }}
            >
              เริ่มต้นวันนี้
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

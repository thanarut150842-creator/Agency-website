import Image from "next/image";
import Link from "next/link";
import BlogCoverImage from "@/components/BlogCoverImage";
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
  // metaTitle (shorter, SEO-optimized) > title fallback
  const seoTitle = article.metaTitle ?? article.title;
  return {
    title: seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "th_TH",
      url: `/blog/${slug}`,
      siteName: "Surf Digital Agency",
      title: seoTitle,
      description: article.metaDescription,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://surfdigitalth.com";

/** Renders a content string with [[anchor text|/href]] inline link syntax */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\[\[([^\]]+)\|([^\]]+)\]\]/g);
  if (parts.length === 1) return <>{text}</>;
  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 3 === 0) {
      if (parts[i]) nodes.push(parts[i]);
    } else if (i % 3 === 1) {
      const linkText = parts[i];
      const href = parts[i + 1];
      nodes.push(
        <Link
          key={i}
          href={href}
          style={{ color: "#00658d", fontWeight: 300, textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          {linkText}
        </Link>
      );
      i++; // skip href part
    }
  }
  return <>{nodes}</>;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${slug}#article`,
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "th",
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Surf Digital Agency",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Surf Digital Agency",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.jpg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    keywords: article.tags.join(", "),
  };

  const faqSchema = article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  // HowTo Schema for tutorial-style articles (sections become steps)
  const howToSchema = article.isHowTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.title,
        description: article.metaDescription,
        image: article.image,
        totalTime: `PT${parseInt(article.readTime) || 7}M`,
        step: article.sections.map((section, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: section.heading,
          text: section.content.join(" "),
          url: `${SITE_URL}/blog/${slug}#${section.id}`,
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "บทความ", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
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
                <span aria-hidden="true" className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p className="text-sm text-[#191c1e]" style={{ fontWeight: 300 }}>{article.author}</p>
                <p className="text-xs text-[#3e4850]" style={{ fontWeight: 200 }}>{article.authorRole}</p>
              </div>
            </div>

          </div>

          {/* Hero Cover */}
          <div className="relative overflow-hidden" style={{ borderRadius: "2rem", height: "clamp(14rem, 35vw, 28rem)" }}>
            {article.image.startsWith("/") ? (
              <Image src={article.image} alt={article.title} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority />
            ) : (
              <BlogCoverImage title={article.title} category={article.category} coverKeyword={article.coverKeyword} coverKeyword2={article.coverKeyword2} slug={article.slug} className="absolute inset-0" />
            )}
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
                <p className="text-lg text-[#3e4850] thai-leading mb-6" style={{ fontWeight: 200, lineHeight: 1.8, borderLeft: "4px solid #00aeef", paddingLeft: "1.5rem" }}>
                  {article.intro}
                </p>

                {/* Inline Service CTA — after intro */}
                {article.serviceCta && (
                  <div
                    className="mb-10 flex items-center gap-4 px-5 py-4"
                    style={{ backgroundColor: "#f0f7ff", borderRadius: "0.875rem", border: "1px solid #c6dff7" }}
                  >
                    <span className="material-symbols-outlined flex-shrink-0" style={{ color: "#00658d", fontSize: 22 }}>arrow_circle_right</span>
                    <p className="text-sm flex-1" style={{ color: "#3e4850", fontWeight: 200 }}>
                      {article.serviceCta.text}
                    </p>
                    <Link
                      href={article.serviceCta.href}
                      className="flex-shrink-0 text-sm px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#00658d", fontWeight: 300, textDecoration: "none", whiteSpace: "nowrap" }}
                    >
                      {article.serviceCta.buttonText}
                    </Link>
                  </div>
                )}

                {/* Sections */}
                {article.sections.map((section, sectionIdx) => (
                  <div key={section.id}>
                    <section id={section.id} className="mb-12">
                      <h2 className="text-2xl mb-5 thai-leading" style={{ fontWeight: 400, color: "#191c1e" }}>
                        {section.heading}
                      </h2>

                      {section.content.map((para, i) => (
                        <p key={i} className="text-[#3e4850] thai-leading mb-4" style={{ fontWeight: 200, lineHeight: 1.8 }}>
                          <RichText text={para} />
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
                                <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 14 }}>check</span>
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
                              <p className="text-[#3e4850] thai-leading" style={{ fontWeight: 200, lineHeight: 1.7 }}><RichText text={sub.content} /></p>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>

                    {/* Inline images — after section index 1 and 3 */}
                    {(sectionIdx === 1 || sectionIdx === 3) && article.inlineImages && (
                      <figure style={{ margin: "-0.5rem 0 3rem", borderRadius: "1.25rem", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,33,71,0.09)" }}>
                        <div style={{ position: "relative", height: "clamp(13rem, 28vw, 20rem)" }}>
                          <Image
                            src={article.inlineImages[sectionIdx === 1 ? 0 : 1].url}
                            alt={article.inlineImages[sectionIdx === 1 ? 0 : 1].alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 720px"
                            className="object-cover"
                          />
                        </div>
                        <figcaption style={{
                          padding: "0.75rem 1.25rem",
                          backgroundColor: "#f2f4f6",
                          display: "flex", alignItems: "flex-start", gap: "0.5rem",
                        }}>
                          <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: 16, color: "#00658d", marginTop: 1 }}>photo_camera</span>
                          <span style={{ fontSize: "0.8rem", color: "#6e7881", fontWeight: 200, fontStyle: "italic", lineHeight: 1.6 }}>
                            {article.inlineImages[sectionIdx === 1 ? 0 : 1].caption}
                          </span>
                        </figcaption>
                      </figure>
                    )}
                  </div>
                ))}

                {/* Service CTA Block */}
                {article.serviceCta && (
                  <div
                    className="my-10 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    style={{ background: "linear-gradient(135deg, #eaf4ff 0%, #dbeeff 100%)", borderRadius: "1.25rem", border: "1px solid #b8d9f8" }}
                  >
                    <span className="material-symbols-outlined flex-shrink-0" style={{ color: "#00658d", fontSize: 36 }}>
                      verified
                    </span>
                    <div className="flex-1">
                      <p className="mb-3 thai-leading" style={{ fontWeight: 300, color: "#191c1e", fontSize: "1.05rem" }}>
                        {article.serviceCta.text}
                      </p>
                      <Link
                        href={article.serviceCta.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#00658d", fontWeight: 300, textDecoration: "none" }}
                      >
                        {article.serviceCta.buttonText}
                        <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                )}

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
                  <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
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
              <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

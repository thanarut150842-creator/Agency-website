import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kanit = localFont({
  src: [
    {
      path: "../public/fonts/Kanit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Kanit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Kanit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kanit",
  display: "swap",
  preload: true,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://surfdigitalth.com";

const OG_TITLE = "Surf Digital Agency | Digital Marketing ครบวงจร ภูเก็ต กระบี่ สงขลา";
const OG_DESC =
  "Surf Digital Agency ดิจิทัลเอเจนซี่ภาคใต้ครบวงจร ให้บริการ SEO, Google Ads, Meta Ads และ TikTok Ads สำหรับธุรกิจในภูเก็ต กระบี่ สงขลา ด้วยทีมที่มีประสบการณ์จากเอเจนซี่ชั้นนำ ปรึกษาฟรีไม่มีข้อผูกมัด";

// noindex on all non-production deployments (preview URLs, vercel.app, etc.)
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: OG_TITLE,
  description: OG_DESC,
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "pPiYnwA85X4q2vJjOA6dstQue08Nh78X1ZMtKvp0vN4",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: "Surf Digital Agency",
    title: OG_TITLE,
    description: OG_DESC,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surf Digital Agency – รับทำ SEO ภาคใต้",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Surf Digital Agency",
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.jpg`,
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "รับทำ SEO และการตลาดออนไลน์ครบวงจรสำหรับธุรกิจในภูเก็ต กระบี่ สงขลา และทั่วภาคใต้",
      telephone: "+66952899881",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14/3 อำเภอเมือง",
        addressLocality: "กระบี่",
        postalCode: "81000",
        addressCountry: "TH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 8.0863,
        longitude: 98.9063,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      areaServed: [
        { "@type": "City", name: "ภูเก็ต" },
        { "@type": "City", name: "กระบี่" },
        { "@type": "City", name: "สงขลา" },
        { "@type": "City", name: "พังงา" },
        { "@type": "City", name: "สุราษฎร์ธานี" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Google Ads" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Meta Ads" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Marketing",
            },
          },
        ],
      },
      sameAs: [
        "https://page.line.me/106bhqto",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Surf Digital Agency",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "th",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={kanit.variable}>
      <head>
        <meta name="theme-color" content="#00658d" />
        {/* Preload icon font → ป้องกัน icon names แสดงเป็น text ตอน Googlebot render */}
        <link
          rel="preload"
          href="/fonts/MaterialSymbolsOutlined-icons.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className="bg-[#f7f9fb] text-[#191c1e] antialiased"
        style={{
          fontFamily: "var(--font-kanit), 'Kanit-fallback', sans-serif",
        }}
      >
        {children}

      </body>
    </html>
  );
}

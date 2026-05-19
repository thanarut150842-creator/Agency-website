/**
 * SchemaBreadcrumb — render BreadcrumbList JSON-LD
 * Usage: <SchemaBreadcrumb items={[{name:"หน้าแรก",url:"/"},...]} />
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://surfdigitalth.com";

export interface BreadcrumbItem {
  name: string;
  /** Path starts with "/" — will be prefixed with SITE_URL */
  url: string;
}

export default function SchemaBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

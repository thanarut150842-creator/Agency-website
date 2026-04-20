# AP Digital Agency – Project Rules

## Project Location
All Next.js source code lives in `app-src/`.
Run `npm run dev` / `npm run build` from inside `app-src/`.

## Design System (from Stitch)

### Theme
Light theme. Background `#f7f9fb`. Text `#191c1e`.

### Color Tokens (Material Design 3)
| Token | Value |
|---|---|
| primary | #00658d |
| primary-container | #00aeef |
| on-secondary-container | #3f5881 |
| secondary-fixed | #d6e3ff |
| surface | #f7f9fb |
| surface-container-low | #f2f4f6 |
| surface-container | #eceef0 |
| surface-container-highest | #e0e3e5 |
| on-surface | #191c1e |
| on-surface-variant | #3e4850 |

### Typography – Kanit (Google Fonts)
- Weights loaded: 200, 300, 400
- `body`, `p`, `span`, `a`, `li` → weight 200
- `h3`, `h4` → weight 300
- `h1`, `h2` → weight 400
- Thai line-height class: `.thai-leading { line-height: 1.6 }`
- Display class: `.text-display { letter-spacing: -0.01em; line-height: 1.25 }`

### Icons
Material Symbols Outlined loaded via Google Fonts CDN in `layout.tsx`.
Usage: `<span className="material-symbols-outlined">icon_name</span>`

### Border Radius
Cards use `rounded-[2rem]` or `rounded-[3rem]` for CTA sections.
Buttons use `rounded-full`.

### Navbar
Glassmorphism: `rgba(247,249,255,0.80)` bg + `backdrop-blur-[20px]`.
Logo: "AP Digital" in `text-[#005d90]` font-weight 400.
Active link: underline `border-b-2 border-[#005d90]`.
CTA button: `bg-[#00aeef]` rounded-full.

### Footer
Background `#f1f4f9`. Light, simple two-row layout.

## Pages (all Desktop-first)
1. `/` – หน้าแรก (Home)
2. `/services/seo` – บริการ SEO
3. `/about` – เกี่ยวกับเรา
4. `/contact` – ติดต่อเรา
5. `/blog` – บทความ (with CTA & Leadform)
6. `/blog/[slug]` – เนื้อหาบทความ

## Stitch Source Files
Located at: `../stitch-designs/stitch_ap_digital_agency_mvp/`
- `desktop_kanit_font_400_300_200_3/` → Home page
- `seo_desktop_kanit_font_400_300_200/` → SEO Service page
- `desktop_kanit_font_400_300_200_2/` → About Us page
- `desktop_kanit_font_400_300_200_1/` → Contact page
- `desktop_with_cta_leadform/` → Blog list page
- `updated_structure_kanit_400_300_200/` → Article content page

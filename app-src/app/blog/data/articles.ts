export interface FAQ {
  question: string;
  answer: string;
}

export interface Section {
  id: string;
  heading: string;
  content: string[];
  bullets?: string[];
  subsections?: { heading: string; content: string }[];
}

export interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  intro: string;
  toc: { id: string; label: string }[];
  sections: Section[];
  faq: FAQ[];
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "seo-strategy-2026",
    title: "กลยุทธ์ SEO ปี 2026 ที่ธุรกิจไทยต้องรู้ก่อนคู่แข่ง",
    metaDescription:
      "รวมกลยุทธ์ SEO ปี 2026 ที่ใช้ได้จริงสำหรับธุรกิจไทย ตั้งแต่ Technical SEO, E-E-A-T, AI Search จนถึง Local SEO พร้อม FAQ ครบจบในบทความเดียว",
    category: "SEO",
    categoryColor: "#d6e3ff",
    date: "15 เมษายน 2026",
    readTime: "8 นาที",
    author: "พิชิต วงศ์ดี",
    authorRole: "Head of SEO Strategy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd_Fkf_jIMx6ORQcyveT0k8_lxd8rEejnwgZWU1xBE2WgOc3HIWXmLn3FziFeoxKZi23ZOMr811xjrNljkPRj3MsgABahU6fFxQ1SW1Ss2T-Nr5SucMK5q7CIwUD7T0EbGRkYJX4tPfeJy2t9Q4KR6xM---rHeOztN--X7JEFHEOngSjzQPEQuAcTUlk76m3VB3VdK7Bl592mSnWAYpKmdg2C8MId2Ap7E84NrW8G4eqPJW6txov-mi-t3oL_nXlXoexdfbl0zfPY",
    intro:
      "ในยุคที่ Google อัปเดต Algorithm แทบทุกเดือน และ AI เริ่มเข้ามามีบทบาทในหน้าผลการค้นหา การทำ SEO แบบเดิมๆ ไม่เพียงพออีกต่อไป บทความนี้รวมทุกสิ่งที่นักการตลาดและเจ้าของธุรกิจไทยต้องรู้เพื่อให้ติดหน้าแรก Google ในปี 2026",
    toc: [
      { id: "why-seo-2026", label: "ทำไม SEO ยังสำคัญในปี 2026" },
      { id: "ai-search", label: "AI Search และผลกระทบต่อ Traffic" },
      { id: "eeat", label: "E-E-A-T คืออะไรและทำยังไง" },
      { id: "technical", label: "Technical SEO ที่ต้องทำ" },
      { id: "content-strategy", label: "Content Strategy ที่ชนะ" },
      { id: "faq", label: "FAQ" },
    ],
    sections: [
      {
        id: "why-seo-2026",
        heading: "ทำไม SEO ยังเป็นการลงทุนที่คุ้มค่าที่สุดในปี 2026",
        content: [
          "แม้ว่า Paid Advertising จะให้ผลเร็วกว่า แต่ Organic Search ยังคงสร้าง Traffic คุณภาพสูงในระยะยาวโดยไม่ต้องจ่ายต่อ Click ข้อมูลจาก BrightEdge ชี้ว่า 53% ของ Traffic ทั้งหมดบนเว็บไซต์มาจาก Organic Search",
          "สำหรับธุรกิจ SME ไทยที่มีงบจำกัด SEO คือช่องทางที่ให้ ROI ดีที่สุดเมื่อเทียบกับ Budget ที่ใช้ เพราะทุก Baht ที่ลงทุนใน SEO สะสมเป็น Asset ของธุรกิจ ไม่ใช่ค่าใช้จ่ายที่หมดไปเมื่อหยุดจ่าย",
        ],
        bullets: [
          "Organic Traffic มี Conversion Rate สูงกว่า Paid Traffic 2–3 เท่า",
          "ต้นทุนระยะยาวต่ำกว่าการซื้อโฆษณาอย่างมีนัยสำคัญ",
          "สร้าง Brand Authority และความไว้วางใจในระยะยาว",
          "ผลลัพธ์สะสมและเติบโตต่อเนื่อง ไม่หายไปเมื่อหยุดงบ",
        ],
      },
      {
        id: "ai-search",
        heading: "AI Search Overview และผลกระทบที่ธุรกิจไทยต้องรับมือ",
        content: [
          "Google AI Overviews (เดิมชื่อ SGE) เริ่ม Roll Out อย่างเต็มรูปแบบในไทยปี 2026 ทำให้ผู้ใช้ได้รับคำตอบโดยตรงจาก AI โดยไม่ต้องคลิกเข้าเว็บ นั่นหมายความว่า Traffic จาก Informational Keywords บางส่วนจะลดลง",
          "แต่นี่คือโอกาสสำหรับธุรกิจที่ทำ Content ดี เพราะ Google ดึงข้อมูลสำหรับ AI Overview มาจากเว็บไซต์ที่มี E-E-A-T สูง การติดใน AI Overview คือ Brand Exposure ระดับใหม่",
        ],
        bullets: [
          "เน้น Transactional และ Commercial Keywords ที่ AI ตอบแทนได้ยากกว่า",
          "สร้าง Structured Data (Schema Markup) ให้ Google เข้าใจเนื้อหาง่ายขึ้น",
          "ทำ Content เชิงลึกที่แสดง First-hand Experience จริง",
        ],
      },
      {
        id: "eeat",
        heading: "E-E-A-T: มาตรฐานที่ Google ใช้วัดคุณภาพเว็บไซต์ของคุณ",
        content: [
          "E-E-A-T ย่อมาจาก Experience, Expertise, Authoritativeness และ Trustworthiness ซึ่งเป็นกรอบที่ Google ใช้ประเมินคุณภาพของ Content และเว็บไซต์ โดยเฉพาะในกลุ่ม YMYL (Your Money or Your Life) เช่น สุขภาพ การเงิน และกฎหมาย",
          "สำหรับธุรกิจทั่วไป การเพิ่ม E-E-A-T ทำได้โดยการแสดงตัวตนของผู้เขียน อ้างอิงแหล่งข้อมูลที่น่าเชื่อถือ สร้าง Backlink จากเว็บไซต์ที่มีอำนาจสูง และสะสม Review จากลูกค้าจริง",
        ],
        subsections: [
          {
            heading: "Experience — แสดงประสบการณ์จริงใน Content",
            content:
              "เพิ่ม Case Study, ตัวเลขผลลัพธ์จริง, และภาพถ่าย Behind-the-Scenes เพื่อพิสูจน์ว่าคุณมีประสบการณ์ตรงในเรื่องที่เขียน",
          },
          {
            heading: "Authoritativeness — สร้าง Backlink จากแหล่งที่น่าเชื่อถือ",
            content:
              "เน้นได้รับ Mention จากสื่อออนไลน์ชั้นนำ, Industry Association, และ Partner ที่มีชื่อเสียงในวงการ",
          },
        ],
      },
      {
        id: "technical",
        heading: "Technical SEO ที่ต้องทำให้เสร็จก่อนทำอย่างอื่น",
        content: [
          "Technical SEO คือรากฐานของทุกกลยุทธ์ หาก Google ไม่สามารถ Crawl และ Index เว็บไซต์ได้อย่างถูกต้อง เนื้อหาดีแค่ไหนก็ไม่มีประโยชน์",
        ],
        bullets: [
          "Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1",
          "Mobile-First Indexing: เว็บต้องใช้งานได้ดีบนมือถือก่อนเสมอ",
          "HTTPS: ต้องมี SSL Certificate ที่ถูกต้อง",
          "Sitemap XML และ Robots.txt ที่ตั้งค่าถูกต้อง",
          "Internal Linking Structure ที่ชัดเจนและสม่ำเสมอ",
          "Structured Data / Schema Markup สำหรับ Rich Results",
        ],
      },
      {
        id: "content-strategy",
        heading: "Content Strategy ที่ชนะ Algorithm ปี 2026",
        content: [
          "Topic Cluster คือโครงสร้าง Content ที่ Google ชอบที่สุด โดยสร้าง Pillar Page ที่ครอบคลุม Topic หลักอย่างครบถ้วน แล้วเชื่อมกับ Cluster Pages ที่เจาะ Subtopic ย่อยๆ",
          "สำหรับธุรกิจไทย การทำ Content ที่ผสมทั้งภาษาไทยและคำค้นหาภาษาอังกฤษจะช่วยขยาย Reach ได้มากขึ้น เพราะผู้ใช้ไทยจำนวนมากค้นหาด้วยคำภาษาอังกฤษในสาย Tech และ Business",
        ],
        bullets: [
          "สร้าง Pillar Page ครอบคลุม Topic หลัก 1 หน้าต่อ 1 Theme",
          "เชื่อม Cluster Pages ด้วย Internal Link ทุกครั้ง",
          "อัปเดต Content เก่าให้ทันสมัยอย่างน้อยปีละครั้ง",
          "ใช้ Long-tail Keywords ที่มี Search Intent ชัดเจน",
        ],
      },
    ],
    faq: [
      {
        question: "SEO เห็นผลภายในกี่เดือน?",
        answer:
          "โดยทั่วไปจะเริ่มเห็นความเปลี่ยนแปลงใน 3–6 เดือน และเห็นผลชัดเจนใน 6–12 เดือน ขึ้นอยู่กับความสามารถในการแข่งขันของ Keyword และสถานะปัจจุบันของเว็บไซต์",
      },
      {
        question: "ทำ SEO เองได้ไหม หรือต้องจ้างผู้เชี่ยวชาญ?",
        answer:
          "ทำเองได้สำหรับงานพื้นฐาน เช่น การเขียน Content และปรับ On-page แต่งาน Technical SEO และ Link Building มักต้องการผู้เชี่ยวชาญที่มีเครื่องมือและประสบการณ์เฉพาะ",
      },
      {
        question: "SEO กับ Google Ads ต่างกันอย่างไร?",
        answer:
          "Google Ads จ่ายเงินเพื่อให้ปรากฏทันที แต่หยุดจ่ายก็หายไป SEO ใช้เวลาสร้างแต่ให้ผลระยะยาวโดยไม่ต้องจ่ายต่อ Click ธุรกิจส่วนใหญ่ควรทำควบคู่กันเพื่อผลลัพธ์ที่ดีที่สุด",
      },
      {
        question: "ต้องใช้งบเท่าไหร่ในการทำ SEO?",
        answer:
          "สำหรับ SME ไทย งบ SEO ที่เหมาะสมอยู่ที่ 15,000–50,000 บาทต่อเดือน ขึ้นอยู่กับความซับซ้อนของเว็บไซต์และความสามารถในการแข่งขันของตลาด",
      },
    ],
    tags: ["SEO", "Digital Marketing", "Google", "กลยุทธ์ดิจิทัล"],
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads เลือกอะไรดีสำหรับธุรกิจ SME ไทย",
    metaDescription:
      "เปรียบเทียบ Google Ads และ Meta Ads อย่างละเอียด ข้อดีข้อเสีย ต้นทุน และวิธีเลือกช่องทางโฆษณาที่เหมาะกับธุรกิจของคุณ พร้อม FAQ",
    category: "Ads",
    categoryColor: "#ffd6e7",
    date: "10 เมษายน 2026",
    readTime: "7 นาที",
    author: "สิริพร มณีรัตน์",
    authorRole: "Performance Marketing Manager",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgY-wE4oKhEkMW4e23zwMJx6IXZX8_Rah5XxJISDMpLaxHkjGJMCjUH73gCxtQFs4dth3X0FqH-TQCX03RM7vpn0iFd_9u5AUQGMqyjMSAZmVCj3jx-ly67UY0Oi3SmKq36cCtZ0q2k_-vP3WOqe0MsDTKatVzOKkxbYtBf1BnoCUJL9wCbhvH-ZuV1NqCrn2gynfP3GZ5ILoUKxC3cQYS1gfx1QhIXulHnJt8P9AlNuBiLdig58EWA3EODkDqVCcKcghg_NOwrIg",
    intro:
      "หนึ่งในคำถามที่ลูกค้าถามบ่อยที่สุดคือ 'ควรทำ Google Ads หรือ Meta Ads ดี?' คำตอบไม่ใช่อันไหนดีกว่า แต่คืออันไหนเหมาะกับธุรกิจและเป้าหมายของคุณมากกว่า บทความนี้จะช่วยให้คุณตัดสินใจได้อย่างมีข้อมูล",
    toc: [
      { id: "how-it-works", label: "หลักการทำงานของแต่ละแพลตฟอร์ม" },
      { id: "google-ads-pros", label: "จุดแข็งของ Google Ads" },
      { id: "meta-ads-pros", label: "จุดแข็งของ Meta Ads" },
      { id: "cost-comparison", label: "เปรียบเทียบต้นทุนและ ROI" },
      { id: "how-to-choose", label: "เลือกแพลตฟอร์มไหนดี?" },
      { id: "faq", label: "FAQ" },
    ],
    sections: [
      {
        id: "how-it-works",
        heading: "หลักการทำงานของ Google Ads และ Meta Ads ต่างกันอย่างไร",
        content: [
          "Google Ads ทำงานบนหลักการ 'Pull Marketing' — โฆษณาจะแสดงเมื่อผู้ใช้ค้นหา Keyword ที่เกี่ยวข้องกับสินค้าหรือบริการของคุณ นั่นหมายความว่าคนที่เห็นโฆษณาคือคนที่กำลัง 'ตามหา' สิ่งที่คุณขายอยู่แล้ว",
          "Meta Ads (Facebook + Instagram) ทำงานบนหลักการ 'Push Marketing' — โฆษณาจะแทรกเข้าไปใน Feed ของกลุ่มเป้าหมายที่คุณกำหนด แม้พวกเขาจะยังไม่รู้ว่าตัวเองต้องการสินค้านั้น ทำให้เหมาะกับการสร้าง Awareness และกระตุ้นความต้องการใหม่",
        ],
      },
      {
        id: "google-ads-pros",
        heading: "จุดแข็งของ Google Ads ที่ทำให้เหนือกว่าในบางสถานการณ์",
        content: [
          "Google Ads เหนือกว่าเมื่อลูกค้าของคุณรู้ว่าตัวเองต้องการอะไรและกำลังค้นหาอยู่ เช่น 'บริษัท SEO ราคาถูก' หรือ 'ซ่อม AC กรุงเทพ' Search Intent ชัดเจนมาก อัตรา Conversion จึงสูงกว่า",
        ],
        bullets: [
          "Intent-Based Targeting: จับคนที่พร้อมซื้อได้ตรงจุด",
          "Search Network + Display Network: ครอบคลุมทุก Touchpoint",
          "Google Shopping: เหมาะกับ E-Commerce ที่ต้องการแสดงสินค้าพร้อมราคา",
          "Local Campaigns: ดึง Traffic เข้าร้านค้าได้อย่างมีประสิทธิภาพ",
          "Performance Max: ใช้ AI จัดสรร Budget ข้ามทุก Channel อัตโนมัติ",
        ],
      },
      {
        id: "meta-ads-pros",
        heading: "จุดแข็งของ Meta Ads ที่ Google Ads ทำไม่ได้",
        content: [
          "Meta มีข้อมูลพฤติกรรมและ Interest ของผู้ใช้ละเอียดกว่าที่ไหนๆ ทำให้สามารถเจาะกลุ่มเป้าหมายได้แม่นยำมากในแง่ Demographic, Interest และ Behavior",
        ],
        bullets: [
          "Lookalike Audience: ขยายกลุ่มเป้าหมายจากฐานลูกค้าเดิม",
          "Creative Flexibility: รองรับภาพ, วิดีโอ, Carousel, Collection",
          "Instagram Shopping: เชื่อม E-Commerce โดยตรงใน Feed",
          "Retargeting ที่ทรงพลัง: ติดตาม Prospect ข้ามทุก Platform",
          "Cost Per Impression ต่ำกว่า: เหมาะสำหรับ Awareness Campaign",
        ],
      },
      {
        id: "cost-comparison",
        heading: "เปรียบเทียบต้นทุนและ ROI ระหว่าง Google Ads กับ Meta Ads",
        content: [
          "ต้นทุนต่อ Click (CPC) ของ Google Ads ในตลาดไทยอยู่ที่ประมาณ 5–50 บาท ขึ้นอยู่กับ Industry ส่วน Meta Ads มักมี CPM (ต่อ 1,000 Impression) ต่ำกว่า ทำให้เหมาะกับ Brand Awareness มากกว่า",
          "แต่การวัด ROI ที่แท้จริงต้องดูที่ Cost Per Acquisition (CPA) ไม่ใช่แค่ CPC ธุรกิจบริการมักได้ CPA ดีกว่าจาก Google Ads ส่วนสินค้า Lifestyle และแฟชั่นมักได้ CPA ดีกว่าจาก Meta Ads",
        ],
      },
      {
        id: "how-to-choose",
        heading: "สรุป: เลือกแพลตฟอร์มไหนดีสำหรับธุรกิจของคุณ",
        content: [
          "ไม่มีคำตอบตายตัว แต่มีหลักง่ายๆ คือ ถ้าลูกค้ารู้ว่าต้องการอะไรและค้นหาอยู่ → Google Ads ถ้าต้องสร้าง Awareness หรือขายสินค้าที่คนยังไม่รู้ว่าต้องการ → Meta Ads",
        ],
        bullets: [
          "ธุรกิจ B2B, บริการ, คลินิก → เริ่มที่ Google Ads",
          "แฟชั่น, ของตกแต่ง, อาหาร, Lifestyle → เริ่มที่ Meta Ads",
          "E-Commerce → ทำทั้งคู่ควบคู่กัน",
          "งบน้อยกว่า 20,000 บาท → เลือก 1 แพลตฟอร์มก่อนแล้วขยาย",
        ],
      },
    ],
    faq: [
      {
        question: "เริ่มต้นทำโฆษณา ควรใช้งบเท่าไหร่?",
        answer:
          "สำหรับการทดสอบตลาด งบขั้นต่ำที่แนะนำคือ 10,000–15,000 บาทต่อเดือนต่อแพลตฟอร์ม เพื่อให้ Algorithm มีข้อมูลเพียงพอในการ Optimize",
      },
      {
        question: "Google Ads กับ Meta Ads ทำพร้อมกันได้ไหม?",
        answer:
          "ได้ และแนะนำให้ทำพร้อมกันเพราะทั้งสองแพลตฟอร์มเสริมกัน Google จับ Demand ที่มีอยู่ Meta สร้าง Demand ใหม่",
      },
      {
        question: "ทำโฆษณาเองโดยไม่มีความรู้ได้ไหม?",
        answer:
          "ได้ในระดับพื้นฐาน แต่มักทำให้สูญเสีย Budget โดยไม่จำเป็น การจ้างผู้เชี่ยวชาญมักคุ้มกว่าในระยะยาวเพราะลด Learning Curve และ Wasted Spend",
      },
      {
        question: "วัดผลโฆษณาต้องดูตัวเลขอะไร?",
        answer:
          "ตัวเลขหลักที่ต้องติดตามคือ ROAS (Return on Ad Spend), CPA (Cost per Acquisition), CTR (Click-Through Rate) และ Conversion Rate ไม่ควรโฟกัสแค่ Reach หรือ Impression",
      },
    ],
    tags: ["Google Ads", "Meta Ads", "Facebook Ads", "Paid Advertising", "SME"],
  },
  {
    slug: "local-seo-southern-thailand",
    title: "Local SEO คืออะไร และทำไมธุรกิจท้องถิ่นภาคใต้ต้องทำตอนนี้",
    metaDescription:
      "Local SEO ช่วยให้ธุรกิจท้องถิ่นติดอันดับการค้นหาในพื้นที่ บทความนี้อธิบาย Local SEO ตั้งแต่พื้นฐาน วิธีทำ Google Business Profile และกลยุทธ์สำหรับธุรกิจภาคใต้ไทย",
    category: "SEO",
    categoryColor: "#d6e3ff",
    date: "5 เมษายน 2026",
    readTime: "6 นาที",
    author: "พิชิต วงศ์ดี",
    authorRole: "Head of SEO Strategy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzY1X2VQNqwo85ks_PNPMb9d2ekhI8Ji_RZKO9i69VHprKORfZk1CXBG0xI-xcLupAGIEz8lBMiuxr7lem8F8DagEdWPZXM-CQnYNv8C7et06rZB7_SMdUzPNRh3kz-A5fJfaS3R2prXRBrAENcCbrUDo2Q2jTSYvqz2vyrmO6k8kcT5LaiJTF8WU7ZA6KsE6K6JPqpRqLfV5Yg_4k2pByZ0H9_B3Wda_aV-Me-SfwzMEcKjpeiBT9iPK_-j1R6tkQR4YeKCQU9w0",
    intro:
      "เมื่อลูกค้าค้นหา 'ร้านอาหารใกล้ฉัน' หรือ 'ช่างแอร์ภูเก็ต' บน Google ธุรกิจของคุณปรากฏขึ้นมาไหม? ถ้ายังไม่ใช่ คุณกำลังเสียลูกค้าให้คู่แข่งทุกวัน Local SEO คือกุญแจที่จะเปลี่ยนสิ่งนั้น",
    toc: [
      { id: "what-is-local-seo", label: "Local SEO คืออะไร" },
      { id: "google-business", label: "Google Business Profile" },
      { id: "local-citations", label: "Local Citations และ NAP" },
      { id: "reviews", label: "รีวิวและการจัดการ Reputation" },
      { id: "local-content", label: "Content สำหรับ Local SEO" },
      { id: "faq", label: "FAQ" },
    ],
    sections: [
      {
        id: "what-is-local-seo",
        heading: "Local SEO คืออะไร และทำไมถึงต่างจาก SEO ทั่วไป",
        content: [
          "Local SEO คือการ Optimize เว็บไซต์และ Online Presence เพื่อให้ปรากฏในผลการค้นหาที่มีบริบทท้องถิ่น เช่น การค้นหาที่มีชื่อเมือง หรือการค้นหาด้วย Intent ที่ชัดเจนว่าต้องการบริการ 'ใกล้ฉัน'",
          "สิ่งที่ทำให้ Local SEO พิเศษคือ Google Local Pack — กล่อง 3 ร้านค้าที่ขึ้นพร้อม Map ซึ่งได้รับ Click มากกว่า Organic Result ธรรมดาถึง 2 เท่า ธุรกิจที่ติด Local Pack จะได้ลูกค้าใหม่โดยตรงโดยแทบไม่ต้องเสียค่าโฆษณา",
        ],
      },
      {
        id: "google-business",
        heading: "Google Business Profile: จุดเริ่มต้นของ Local SEO ที่ห้ามข้าม",
        content: [
          "Google Business Profile (GBP) หรือเดิมชื่อ Google My Business คือสิ่งแรกที่ต้องทำก่อนทุกอย่าง เพราะเป็นแหล่งข้อมูลหลักที่ Google ใช้แสดงธุรกิจของคุณใน Local Pack และ Google Maps",
        ],
        bullets: [
          "กรอกข้อมูลให้ครบ 100%: ชื่อ, ที่อยู่, เบอร์โทร, เวลาทำการ, เว็บไซต์",
          "เลือก Category ที่ตรงกับธุรกิจมากที่สุด และเพิ่ม Secondary Category",
          "อัปโหลดรูปภาพสถานที่ สินค้า และทีมงานอย่างน้อย 10 ภาพ",
          "ตั้งค่า Service Area ให้ครอบคลุมพื้นที่ที่ให้บริการ",
          "โพสต์ Update บน GBP อย่างสม่ำเสมอเดือนละ 2–4 ครั้ง",
        ],
      },
      {
        id: "local-citations",
        heading: "Local Citations และความสำคัญของ NAP Consistency",
        content: [
          "Local Citation คือการที่ชื่อ ที่อยู่ และเบอร์โทรศัพท์ (NAP: Name, Address, Phone) ของธุรกิจปรากฏในเว็บไซต์ Directory ต่างๆ เช่น Wongnai, Yelp, TripAdvisor หรือเว็บ Chamber of Commerce ท้องถิ่น",
          "สิ่งสำคัญคือข้อมูล NAP ต้องตรงกันทุก Platform ถ้า GBP บอกว่าร้านชื่อ 'ร้านอาหารภูเก็ต' แต่ Wongnai ใช้ชื่อ 'ภูเก็ตซีฟู้ด' Google จะสับสนและให้ความน่าเชื่อถือน้อยลง",
        ],
      },
      {
        id: "reviews",
        heading: "รีวิวจากลูกค้า: สัญญาณที่ Google ให้น้ำหนักมากที่สุด",
        content: [
          "รีวิวเป็น Ranking Factor ที่สำคัญที่สุดอันดับต้นๆ ของ Local SEO ธุรกิจที่มีรีวิวมากและคะแนนสูงจะได้เปรียบในการแข่งขัน Local Pack อย่างมาก",
        ],
        bullets: [
          "ขอรีวิวจากลูกค้าที่พึงพอใจทันทีหลังให้บริการ",
          "ตอบรีวิวทุกข้อ ทั้งบวกและลบ ภายใน 24 ชั่วโมง",
          "ใช้ภาษาที่เป็นธรรมชาติ ไม่ใช้ Script ตายตัวในการตอบ",
          "ไม่ซื้อรีวิวปลอม เสี่ยงต่อการถูก Suspend GBP",
        ],
      },
      {
        id: "local-content",
        heading: "Local Content Strategy สำหรับธุรกิจภาคใต้ไทย",
        content: [
          "การสร้าง Content ที่มีบริบทท้องถิ่นชัดเจนช่วย Boost Local SEO ได้มาก เช่น บทความที่กล่าวถึงชื่อจังหวัด อำเภอ หรือ Landmark ท้องถิ่น จะช่วยให้ Google เชื่อมโยงเว็บไซต์ของคุณกับพื้นที่นั้น",
          "สำหรับธุรกิจในภาคใต้ ลองสร้าง Landing Page แยกสำหรับแต่ละจังหวัดที่ให้บริการ เช่น 'บริการ SEO ภูเก็ต', 'บริการ SEO สุราษฎร์ธานี' เพื่อจับ Local Search แต่ละพื้นที่โดยเฉพาะ",
        ],
      },
    ],
    faq: [
      {
        question: "ทำ Local SEO ใช้เวลานานแค่ไหนถึงจะเห็นผล?",
        answer:
          "Local SEO มักเห็นผลเร็วกว่า National SEO โดยทั่วไปจะเริ่มเห็นใน 1–3 เดือนสำหรับ Keyword ที่ไม่มีการแข่งขันสูง",
      },
      {
        question: "ธุรกิจที่ไม่มีหน้าร้านทำ Local SEO ได้ไหม?",
        answer:
          "ได้ สามารถตั้งค่า GBP แบบ Service Area Business ที่ระบุพื้นที่ให้บริการโดยไม่ต้องแสดงที่อยู่จริง",
      },
      {
        question: "GBP ต้องจ่ายเงินไหม?",
        answer:
          "ไม่ต้อง Google Business Profile ใช้งานฟรี แต่ต้องยืนยันตัวตนผ่านไปรษณีย์, โทรศัพท์ หรือวิดีโอ",
      },
      {
        question: "ถ้าคู่แข่งซื้อรีวิวปลอม เราต้องทำตามไหม?",
        answer:
          "ไม่ควรเด็ดขาด การซื้อรีวิวปลอมผิด Terms of Service ของ Google และอาจทำให้ GBP ถูก Suspend ซึ่งหมายความว่าธุรกิจของคุณจะหายออกจาก Google Maps ทันที",
      },
    ],
    tags: ["Local SEO", "Google Business Profile", "ภาคใต้", "SME", "Google Maps"],
  },
  {
    slug: "google-analytics-4-guide",
    title: "Google Analytics 4 สำหรับเจ้าของธุรกิจ: อ่านข้อมูลยังไงให้เพิ่ม ROI",
    metaDescription:
      "คู่มือ Google Analytics 4 ฉบับภาษาไทยสำหรับเจ้าของธุรกิจ เรียนรู้วิธีอ่าน Report สำคัญ ตั้ง Conversion Goal และใช้ข้อมูลเพื่อตัดสินใจทางธุรกิจที่ดีขึ้น",
    category: "Analytics",
    categoryColor: "#d6ffe3",
    date: "1 เมษายน 2026",
    readTime: "9 นาที",
    author: "ธนาวุฒิ เจริญสุข",
    authorRole: "Data Analytics Specialist",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCPe5e95t6gD0rfYPS1QBAGDFAPUKD70FkZ8MPbHhlKR1BYKcZOIeVEOLfzgL9N4JQszQk9UzsQ6-Yl8tPasZtQUoKOvu_VxkhBZc3SE7V4APH2x0JUv5_PBL7FuDmDYBvV6A9PX0uqrGAvs4flvFPcWtTQ45FeygS6AMJSzg7vaZUdyWSCiU9wyTtV8w5h6itLE0tlX0m41pAFK1JKBxuiun44TBUEcc0T6DM5ldY99hMOlNMF88JyxFtwTTghh-PZRW1ecJQMPE",
    intro:
      "Google Analytics 4 (GA4) ไม่ใช่แค่เครื่องมือเก็บสถิติ แต่คือสมองที่บอกคุณว่าลูกค้าทำอะไรบนเว็บไซต์ ทำไมบางคนซื้อแต่บางคนหนี และอะไรคือ Bottleneck ที่ทำให้ธุรกิจเสียรายได้",
    toc: [
      { id: "ga4-vs-ua", label: "GA4 ต่างจากเวอร์ชันเก่าอย่างไร" },
      { id: "key-reports", label: "Report ที่ต้องดูเป็นประจำ" },
      { id: "conversion-setup", label: "ตั้ง Conversion Goal" },
      { id: "audience-insights", label: "เข้าใจ Audience ของคุณ" },
      { id: "use-data", label: "นำข้อมูลไปใช้จริง" },
      { id: "faq", label: "FAQ" },
    ],
    sections: [
      {
        id: "ga4-vs-ua",
        heading: "GA4 ต่างจาก Universal Analytics อย่างไร และต้องปรับตัวอะไรบ้าง",
        content: [
          "GA4 เปลี่ยนแนวคิดหลักจาก Session-based เป็น Event-based ทุกการกระทำบนเว็บไซต์ (คลิก, เลื่อน, กรอกฟอร์ม) ถูกเก็บเป็น Event แทนที่จะนับเป็น Pageview ซึ่งทำให้ข้อมูลละเอียดกว่าเดิมมาก",
          "ข้อแตกต่างสำคัญอีกอย่างคือ GA4 รองรับ Cross-Platform Tracking ทั้ง Web และ App ใน Property เดียว และมี Machine Learning ในตัวที่ช่วย Predict พฤติกรรมผู้ใช้",
        ],
      },
      {
        id: "key-reports",
        heading: "Report ใน GA4 ที่เจ้าของธุรกิจต้องเปิดดูทุกสัปดาห์",
        content: [
          "ไม่จำเป็นต้องดูทุก Report เพียงโฟกัสที่ Report ที่ตอบคำถามสำคัญของธุรกิจได้",
        ],
        bullets: [
          "Acquisition Report: Traffic มาจากช่องทางไหน (Organic, Paid, Social, Direct)",
          "Engagement Report: คนใช้เวลาบนหน้าไหนนานที่สุด หน้าไหนคนออกเร็ว",
          "Conversion Report: ใครซื้อ/ทำ Goal สำเร็จบ้าง",
          "Retention Report: ลูกค้ากลับมาซื้อซ้ำกี่เปอร์เซ็นต์",
          "Funnel Exploration: ผู้ใช้หลุดออกจาก Funnel ตรงขั้นตอนไหน",
        ],
      },
      {
        id: "conversion-setup",
        heading: "ตั้ง Conversion Goal ให้ถูกต้องตั้งแต่แรก เพื่อข้อมูลที่เชื่อถือได้",
        content: [
          "Conversion คือการกระทำที่มีคุณค่าต่อธุรกิจ เช่น การซื้อสินค้า, กรอกฟอร์มติดต่อ, โทรหาร้าน, หรือดาวน์โหลด Brochure การตั้ง Goal ให้ถูกต้องจะทำให้ทุก Report มีความหมาย",
        ],
        bullets: [
          "ระบุ Conversion Events ที่สำคัญสำหรับธุรกิจ (purchase, lead_form_submit, etc.)",
          "ใช้ Google Tag Manager ร่วมกับ GA4 เพื่อความยืดหยุ่นในการติด Tag",
          "ทดสอบ Goal ด้วย Debug View ก่อน Launch จริง",
          "กำหนด Conversion Value ถ้าเป็นไปได้ เพื่อคำนวณ ROAS ได้แม่นยำ",
        ],
      },
      {
        id: "audience-insights",
        heading: "เข้าใจ Audience: ใครคือลูกค้าจริงๆ และพวกเขามาจากไหน",
        content: [
          "GA4 Audience Report บอกคุณได้ว่าลูกค้าส่วนใหญ่อายุเท่าไหร่ เพศอะไร ใช้ Device อะไร อยู่จังหวัดไหน และสนใจเรื่องอะไร ข้อมูลเหล่านี้มีค่ามากสำหรับการปรับ Targeting ใน Paid Ads",
          "ลองเปรียบเทียบ Audience ที่ Convert กับ Audience ที่ไม่ Convert เพื่อหาความแตกต่าง แล้วนำ Pattern นั้นไปใช้ในการสร้าง Lookalike Audience สำหรับ Meta Ads",
        ],
      },
      {
        id: "use-data",
        heading: "นำข้อมูลจาก GA4 ไปใช้ตัดสินใจทางธุรกิจอย่างเป็นระบบ",
        content: [
          "Data ที่ไม่ถูกนำไปใช้ไม่มีคุณค่า วิธีที่ดีคือตั้ง Review Meeting ทุก 2 สัปดาห์เพื่อดู Report ร่วมกับทีม แล้วตั้งคำถามว่า 'เดือนนี้ Traffic เพิ่มหรือลด เพราะอะไร? หน้าไหนมี Bounce Rate สูงและเราทำอะไรได้บ้าง?'",
        ],
        bullets: [
          "ตั้ง Data Studio (Looker Studio) Dashboard ให้ดูข้อมูลได้ง่ายขึ้น",
          "ส่ง Weekly Report อัตโนมัติผ่าน Email ให้ทีม",
          "ใช้ GA4 Insight เพื่อตรวจจับความผิดปกติอัตโนมัติ",
          "ทำ A/B Testing บนหน้าที่มี Traffic สูงเพื่อเพิ่ม Conversion Rate",
        ],
      },
    ],
    faq: [
      {
        question: "GA4 ใช้ยากไหมสำหรับคนที่ไม่มีพื้นฐาน Data?",
        answer:
          "ยากกว่า Universal Analytics เล็กน้อย แต่ Google มี Tutorial ฟรีใน Skillshop ที่เรียนได้ภายใน 1–2 วัน สำหรับเจ้าของธุรกิจควรเรียนรู้ Report หลักก่อน ไม่ต้องรู้ทุกอย่าง",
      },
      {
        question: "ข้อมูลใน GA4 แม่นยำ 100% ไหม?",
        answer:
          "ไม่ 100% เพราะปัจจัยอย่าง Ad Blocker, Cookie Consent และ iOS Privacy อาจทำให้ข้อมูลหายไป 10–30% แต่ยังมีประโยชน์มากในการเห็น Trend และ Pattern",
      },
      {
        question: "ต้องเก็บ Data ไว้นานแค่ไหน?",
        answer:
          "GA4 เก็บข้อมูล Event ได้สูงสุด 14 เดือนในแผนฟรี ถ้าต้องการเก็บนานกว่านั้นควรส่งข้อมูลไปยัง BigQuery ซึ่งเชื่อมต่อได้ฟรีสำหรับ GA4",
      },
      {
        question: "GA4 กับ Google Ads เชื่อมต่อกันได้ไหม?",
        answer:
          "ได้ และควรเชื่อมต่อทันที การ Link GA4 กับ Google Ads ทำให้เห็น Conversion Data ที่แม่นยำกว่าในแดชบอร์ด Ads และสามารถใช้ Audience จาก GA4 สำหรับ Remarketing ได้",
      },
    ],
    tags: ["Google Analytics 4", "GA4", "Data Analytics", "Digital Marketing", "ROI"],
  },
  {
    slug: "content-marketing-trust-leads",
    title: "Content Marketing สร้าง Trust และดึง Lead ให้ธุรกิจไทยอย่างยั่งยืน",
    metaDescription:
      "เรียนรู้วิธีใช้ Content Marketing สร้างความน่าเชื่อถือและดึงดูด Lead คุณภาพสูงสำหรับธุรกิจไทย พร้อม Framework และตัวอย่างที่ใช้ได้จริง",
    category: "Content",
    categoryColor: "#fff3d6",
    date: "28 มีนาคม 2026",
    readTime: "8 นาที",
    author: "สิริพร มณีรัตน์",
    authorRole: "Content Strategy Lead",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwOBRm8UuWb0ti9rDKDN2ZS0sB6BX2WiAlKO4MpG0v8GpPOgyb0xYv3gV2UUratOYxe1z98JH1X7b362rmg5h_DYp6J29lWurL_fFe1-L4ywvC7vZkuby4wmUp-oBbvoWdh_xV1nPih7GKosvQGnaiv0jQ3b1rrodD8ODnFtrP-onOs8VlA3MTvCaEMa53ujAOIFbXAEKa8DnqmjiXjW0tZOnEOq9ns16I53wvvODonJJ6iABg0Eoe-qVlv6GfTXM1xp1jp1ftZQ8",
    intro:
      "ในยุคที่ผู้บริโภคไทยฉลาดขึ้นและข้ามโฆษณาเป็นนิสัย Content ที่มีคุณค่าคือสิ่งเดียวที่ยังหยุดเขาได้ Content Marketing ไม่ใช่แค่การเขียนบล็อก แต่คือกลยุทธ์ที่สร้าง Trust ก่อน แล้ว Lead จะตามมาเอง",
    toc: [
      { id: "what-is-content-marketing", label: "Content Marketing คืออะไร" },
      { id: "content-funnel", label: "Content Funnel: เนื้อหาสำหรับทุกขั้น" },
      { id: "content-types", label: "ประเภท Content ที่ได้ผลในไทย" },
      { id: "content-calendar", label: "วางแผน Content Calendar" },
      { id: "measure-results", label: "วัดผล Content Marketing" },
      { id: "faq", label: "FAQ" },
    ],
    sections: [
      {
        id: "what-is-content-marketing",
        heading: "Content Marketing คืออะไร และต่างจากการโฆษณาอย่างไร",
        content: [
          "Content Marketing คือการสร้างและแจกจ่ายเนื้อหาที่มีประโยชน์ต่อกลุ่มเป้าหมาย เพื่อดึงดูดและรักษาความสัมพันธ์กับพวกเขา แทนที่จะบอกให้คนซื้อตรงๆ คุณช่วยพวกเขาแก้ปัญหาก่อน แล้วพวกเขาจะเลือกคุณเองเมื่อพร้อมซื้อ",
          "ความแตกต่างจากการโฆษณาคือ Content Marketing เป็น Long-term Investment ที่สะสม Authority ให้แบรนด์ ขณะที่โฆษณาจ่ายเงินแล้วได้ผลทันทีแต่หายไปเมื่อหยุดจ่าย",
        ],
      },
      {
        id: "content-funnel",
        heading: "Content Funnel: สร้างเนื้อหาให้ตรงกับทุกขั้นตอนการตัดสินใจ",
        content: [
          "ผู้บริโภคไม่ได้ซื้อสินค้าทันทีที่เห็นโฆษณา พวกเขาผ่าน Journey ที่มี 3 ขั้นตอน: Awareness (รู้จัก) → Consideration (พิจารณา) → Decision (ตัดสินใจ) Content ที่ดีต้องครอบคลุมทั้ง 3 ขั้น",
        ],
        subsections: [
          {
            heading: "Top of Funnel (TOFU): สร้าง Awareness",
            content:
              "เนื้อหาที่ให้ความรู้กว้างๆ ไม่ขายของ เช่น บทความ 'SEO คืออะไร' หรือ 'วิธีเพิ่ม Follower Instagram' เป้าหมายคือให้คนค้นพบแบรนด์ผ่าน Google หรือ Social Media",
          },
          {
            heading: "Middle of Funnel (MOFU): สร้าง Consideration",
            content:
              "เนื้อหาที่เปรียบเทียบตัวเลือก เช่น 'SEO vs Google Ads เลือกอะไรดี?' หรือ Case Study ที่แสดงผลลัพธ์จริง เป้าหมายคือให้เขาเห็นว่าคุณเข้าใจปัญหาของเขาจริง",
          },
          {
            heading: "Bottom of Funnel (BOFU): กระตุ้น Decision",
            content:
              "เนื้อหาที่ผลักดันให้ตัดสินใจ เช่น Free Audit Offer, Testimonial จากลูกค้า หรือ Pricing Guide ที่ช่วยให้เขาคำนวณ ROI ที่จะได้รับ",
          },
        ],
      },
      {
        id: "content-types",
        heading: "ประเภท Content ที่ได้ผลดีที่สุดสำหรับตลาดไทยในปี 2026",
        content: [
          "ผู้บริโภคไทยชอบ Content ที่เข้าใจง่าย มีภาพประกอบ และให้ประโยชน์จริง ต่อไปนี้คือ Format ที่ทีม AP Digital พบว่าได้ผลดีที่สุดในตลาดไทย",
        ],
        bullets: [
          "Long-form Blog Post (1,500+ คำ): ดีที่สุดสำหรับ SEO และสร้าง Authority",
          "Infographic: Share สูง เหมาะกับข้อมูลที่ซับซ้อน",
          "Video Tutorial: Engagement สูงบน YouTube และ Facebook",
          "Case Study: พิสูจน์ผลลัพธ์และสร้างความน่าเชื่อถือ",
          "Free Template/Tool: Lead Magnet ที่ดึง Email ได้ดีมาก",
          "FAQ Content: จับ Long-tail Keyword และตอบ Search Intent ตรงจุด",
        ],
      },
      {
        id: "content-calendar",
        heading: "วางแผน Content Calendar อย่างมีระบบเพื่อความสม่ำเสมอ",
        content: [
          "ความสม่ำเสมอคือกุญแจของ Content Marketing การโพสต์บทความดีๆ สัปดาห์ละครั้งดีกว่าโพสต์ 10 บทความในเดือนเดียวแล้วหยุดไป 3 เดือน",
          "เริ่มต้น Content Calendar ด้วยการกำหนด Theme รายเดือนให้สอดคล้องกับ Seasonal Trend, วันสำคัญ, และ Business Goal ของแต่ละไตรมาส",
        ],
        bullets: [
          "กำหนด Publication Frequency ที่ทีมทำได้จริงและยั่งยืน",
          "วาง Topic ล่วงหน้า 3 เดือนเพื่อหลีกเลี่ยงการขาด Idea",
          "สร้าง Content Pillar 3–5 หัวข้อหลักแล้วสร้าง Subtopic รอบๆ",
          "Repurpose Content หนึ่งชิ้นให้ใช้ได้หลาย Format เพื่อประหยัดเวลา",
        ],
      },
      {
        id: "measure-results",
        heading: "วัดผล Content Marketing ให้ถูกวิธี ไม่ใช่แค่ดู Pageview",
        content: [
          "หลายธุรกิจผิดหวังกับ Content Marketing เพราะวัดผลผิดตัวชี้วัด Pageview ที่สูงไม่ได้แปลว่า Content นั้นดี สิ่งที่ควรวัดคือ Engagement, Lead Generation, และ Revenue ที่ Content นั้นสร้างได้",
        ],
        bullets: [
          "Organic Traffic Growth: Traffic จาก Google เพิ่มขึ้นไหมในระยะ 6 เดือน",
          "Time on Page: คนอ่านบทความนานเท่าไหร่ ถ้าน้อยกว่า 2 นาทีอาจต้องปรับ",
          "Lead Generation Rate: Content สร้าง Lead กี่ราย",
          "Keyword Rankings: Keyword เป้าหมายติดอันดับที่เท่าไหร่",
          "Revenue Attribution: ลูกค้าที่ปิดดีล อ่าน Content อะไรก่อนตัดสินใจ",
        ],
      },
    ],
    faq: [
      {
        question: "ต้องมีทีม Content เฉพาะถึงจะทำ Content Marketing ได้ไหม?",
        answer:
          "ไม่จำเป็น ธุรกิจ SME สามารถเริ่มต้นด้วยทีม 1–2 คนได้ สิ่งสำคัญคือ Consistency ไม่ใช่ปริมาณ เริ่มจาก 1 บทความต่อสัปดาห์แล้วค่อยๆ เพิ่ม",
      },
      {
        question: "Content ควรเขียนภาษาไทยหรืออังกฤษ?",
        answer:
          "ขึ้นอยู่กับกลุ่มเป้าหมาย ธุรกิจที่ให้บริการคนไทยควรเขียนภาษาไทยเป็นหลัก แต่สามารถใช้ Keyword ภาษาอังกฤษที่คนไทยค้นหาบ่อยประกอบได้",
      },
      {
        question: "Content Marketing กับ Social Media Marketing ต่างกันไหม?",
        answer:
          "ต่างกัน Content Marketing มักหมายถึง Long-form Content อย่างบล็อกและวิดีโอ YouTube ที่มุ่ง SEO ส่วน Social Media Marketing เน้น Short-form Content เพื่อ Engagement ทั้งสองควรทำควบคู่กัน",
      },
      {
        question: "จ้างคนเขียน Content ดีกว่าเขียนเองไหม?",
        answer:
          "ขึ้นอยู่กับ Industry ถ้าเป็น Content ที่ต้องการ First-hand Experience เช่น Medical หรือ Legal เจ้าของธุรกิจควรมีส่วนร่วมในการเขียน แต่จ้าง Copywriter มาช่วย Structure และ Edit ได้",
      },
    ],
    tags: ["Content Marketing", "Lead Generation", "Digital Marketing", "SEO Content", "Brand Building"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

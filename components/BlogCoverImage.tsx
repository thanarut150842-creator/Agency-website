/**
 * BlogCoverImage – Dark tech editorial cover (no external images)
 * Inspired by YouTube thumbnail / modern tech blog aesthetic:
 * • Near-black base with per-category colored glow
 * • Large bold keyword text as the visual hero
 * • Decorative dots grid + geometric shapes
 * • Category badge + brand mark
 */

interface BlogCoverImageProps {
  title: string;
  category: string;
  coverKeyword?: string;
  coverKeyword2?: string;
  slug?: string;
  className?: string;
}

type Theme = {
  /** radial glow color (css color) */
  glow: string;
  /** bright accent for keyword2 / badges */
  accent: string;
  /** category label */
  label: string;
  /** material symbol name */
  icon: string;
  /** large ghost word in background */
  ghost: string;
};

const THEMES: Record<string, Theme> = {
  SEO: {
    glow: "rgba(0,174,239,0.55)",
    accent: "#29d4ff",
    label: "SEO",
    icon: "search",
    ghost: "SEO",
  },
  Ads: {
    glow: "rgba(251,146,60,0.50)",
    accent: "#fb923c",
    label: "Paid Ads",
    icon: "campaign",
    ghost: "ADS",
  },
  Analytics: {
    glow: "rgba(52,211,153,0.50)",
    accent: "#34d399",
    label: "Analytics",
    icon: "analytics",
    ghost: "DATA",
  },
  Content: {
    glow: "rgba(251,191,36,0.45)",
    accent: "#fbbf24",
    label: "Content",
    icon: "edit_note",
    ghost: "CONTENT",
  },
  Strategy: {
    glow: "rgba(167,139,250,0.50)",
    accent: "#a78bfa",
    label: "Strategy",
    icon: "psychology",
    ghost: "STRATEGY",
  },
};

const DEFAULT_THEME = THEMES.SEO;

/** Dot grid positions — fixed so SSR matches client */
const DOTS = [
  [82,12],[88,28],[94,12],[88,44],[82,28],[94,28],
  [82,44],[94,44],[82,60],[88,60],[94,60],
  [82,76],[88,76],[94,76],[88,92],
];

export default function BlogCoverImage({
  title,
  category,
  coverKeyword,
  coverKeyword2,
  slug,
  className = "",
}: BlogCoverImageProps) {
  const theme = THEMES[category] ?? DEFAULT_THEME;

  // fallback keywords from title
  const words = title.split(" ");
  const kw1 = coverKeyword ?? words.slice(0, 3).join(" ");
  const kw2 = coverKeyword2 ?? words.slice(3, 6).join(" ");

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(145deg, #060a12 0%, #0c1220 50%, #080e1a 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem 1.1rem 0.9rem",
      }}
    >
      {/* ── Radial glow blob ── */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "70%",
          height: "80%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${theme.glow} 0%, transparent 68%)`,
          filter: "blur(28px)",
          pointerEvents: "none",
        }}
      />
      {/* Secondary glow (opposite corner) */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-5%",
          width: "50%",
          height: "60%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${theme.glow.replace("0.5","0.18").replace("0.55","0.18").replace("0.45","0.18")} 0%, transparent 70%)`,
          filter: "blur(22px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Dot grid (top-right) ── */}
      <svg
        aria-hidden
        style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {DOTS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={0.8} fill={theme.accent} opacity={0.22} />
        ))}
      </svg>

      {/* ── Ghost word ── */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          bottom: -10,
          right: -6,
          fontSize: "5.5rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.035)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        {theme.ghost}
      </span>

      {/* ── TOP ROW: badge + brand ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
        {/* Category badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            background: `${theme.accent}22`,
            border: `1px solid ${theme.accent}55`,
            borderRadius: 999,
            padding: "0.18rem 0.65rem",
          }}
        >
          <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 11, color: theme.accent }}>{theme.icon}</span>
          <span style={{ fontSize: "0.6rem", color: theme.accent, fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {theme.label}
          </span>
        </div>
        {/* Brand */}
        <span style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", fontWeight: 300, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          SURF DIGITAL
        </span>
      </div>

      {/* ── HERO TEXT ── */}
      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "0.5rem", paddingBottom: "0.25rem" }}>
        {/* Keyword line 1 — white, large */}
        <p
          style={{
            fontSize: "clamp(1.1rem, 4vw, 1.45rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "0.2rem",
            textShadow: `0 0 24px ${theme.glow}`,
          }}
        >
          {kw1}
        </p>

        {/* Keyword line 2 — accent color */}
        {kw2 && (
          <p
            style={{
              fontSize: "clamp(0.85rem, 3vw, 1.1rem)",
              fontWeight: 600,
              color: theme.accent,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              textShadow: `0 0 16px ${theme.glow}`,
            }}
          >
            {kw2}
          </p>
        )}

        {/* Thin accent bar */}
        <div
          style={{
            marginTop: "0.6rem",
            height: 2,
            width: "3rem",
            borderRadius: 4,
            background: `linear-gradient(to right, ${theme.accent}, transparent)`,
          }}
        />
      </div>

      {/* ── BOTTOM ROW: read time pill ── */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "0.15rem 0.6rem",
          }}
        >
          <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>article</span>
          <span style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.4)", fontWeight: 200, letterSpacing: "0.05em" }}>
            {category.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

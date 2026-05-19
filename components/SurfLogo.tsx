/**
 * SurfLogo – wordmark component matching the brand identity
 *
 * "S"            → gradient  #29B6F6 → #0057CC  (bright-to-deep blue)
 * "URF"          → dark navy #0d1b2a
 * "DIGITAL AGENCY" → spaced  #8a9bb0  (light slate)
 */

interface SurfLogoProps {
  /** Controls overall scale */
  size?: "sm" | "md" | "lg";
  /** Hide the "DIGITAL AGENCY" tagline – useful for tight spaces */
  hideTagline?: boolean;
  /** "dark" (default) = navy text on light bg | "light" = white text on dark bg */
  variant?: "dark" | "light";
}

export default function SurfLogo({
  size = "md",
  hideTagline = false,
  variant = "dark",
}: SurfLogoProps) {
  const scale = { sm: 0.92, md: 1, lg: 1.45 }[size];

  const mainPx  = `${1.75 * scale}rem`;   // SURF letters
  const subPx   = `${0.48 * scale}rem`;   // DIGITAL AGENCY

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 1,
        userSelect: "none",
        gap: hideTagline ? 0 : `${0.28 * scale}rem`,
      }}
    >
      {/* ── SURF wordmark row ─────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          letterSpacing: "-0.01em",
        }}
      >
        {/* S – gradient lettermark (fontSize ~4% larger to compensate gradient visual thinning) */}
        <span
          aria-hidden="true"
          style={{
            fontSize: `calc(${mainPx} * 1.04)`,
            fontWeight: 400,
            background: "linear-gradient(155deg, #29B6F6 0%, #0066CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
            lineHeight: 1,
          }}
        >
          S
        </span>

        {/* URF */}
        <span
          style={{
            fontSize: mainPx,
            fontWeight: 400,
            color: variant === "light" ? "#ffffff" : "#0d1b2a",
            display: "inline-block",
            lineHeight: 1,
          }}
        >
          URF
        </span>
      </div>

      {/* ── tagline ─────────────────────────────────────── */}
      {!hideTagline && (
        <span
          style={{
            fontSize: subPx,
            fontWeight: 200,
            color: variant === "light" ? "rgba(255,255,255,0.5)" : "#8a9bb0",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Digital Agency
        </span>
      )}
    </div>
  );
}

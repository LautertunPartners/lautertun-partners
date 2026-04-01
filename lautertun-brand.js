/**
 * LAUTERTUN PARTNERS — Brand Identity System
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all brand tokens.
 * Use in Node/docx generation, React components, or any JS environment.
 *
 * Tagline: Restructuring · Advisory · Financial Leadership & Management
 */

// ── COLOR PALETTE ────────────────────────────────────────────────────────────

export const COLORS = {
  /** Primary navy — headlines, body text, dark backgrounds */
  inkNavy:       "#1A2535",
  /** Primary gold — accents, rules, highlights, wordmark second half */
  burnishedGold: "#B8934A",
  /** Mid blue-grey — body copy, secondary text */
  steel:         "#3A5472",
  /** Muted green — tertiary accent (use sparingly) */
  sage:          "#4A7868",
  /** Warm off-white — section backgrounds, highlight boxes */
  parchment:     "#F6F2EB",
  /** Near-white — page/card backgrounds */
  cream:         "#FAF8F4",
  /** Light rule — table borders, dividers */
  lightRule:     "#E8E4DC",
  /** Pure white */
  white:         "#FFFFFF",
  /** Pure black — legal document body text */
  black:         "#000000",
};

// Aliases for direct use in docx-generation scripts
export const INK       = COLORS.inkNavy;
export const GOLD      = COLORS.burnishedGold;
export const STEEL     = COLORS.steel;
export const SAGE      = COLORS.sage;
export const PARCHMENT = COLORS.parchment;
export const CREAM     = COLORS.cream;
export const LIGHT_RULE = COLORS.lightRule;
export const WHITE     = COLORS.white;
export const BLACK     = COLORS.black;


// ── TYPOGRAPHY ───────────────────────────────────────────────────────────────

export const FONTS = {
  /** Display / headings — Cormorant Garamond (Google Fonts) */
  serif: "Cormorant Garamond",
  /** UI / body / captions — DM Sans (Google Fonts) */
  sans:  "DM Sans",
  /** Legal document body — Times New Roman */
  legal: "Times New Roman",
};

export const TYPE_SCALE = {
  /** Proposal title */
  displayLg:  72,   // half-points (36pt)
  /** Section display heading */
  displaySm:  36,   // (18pt)
  /** Wordmark */
  wordmark:   36,   // (18pt)
  /** Section tagline / overline */
  tagline:    13,   // (6.5pt)
  /** Body copy — proposals / docs */
  body:       20,   // (10pt)
  /** Legal body */
  bodyLegal:  24,   // (12pt)
  /** Small / captions */
  small:      18,   // (9pt)
  /** Footnote / footer */
  footnote:   16,   // (8pt)
};

export const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap";


// ── SPACING (base-8, in DXA for docx / px for web) ──────────────────────────

export const SPACING = {
  xs:   80,    // ~4px / 1.5mm
  sm:   120,   // ~6px / 2mm
  md:   240,   // ~12px / 4mm
  lg:   360,   // ~18px / 6mm
  xl:   480,   // ~24px / 8mm
  xxl:  720,   // ~36px / 12mm
};


// ── PAGE / DOCUMENT LAYOUT (DXA units — 1 inch = 1440 DXA) ─────────────────

export const PAGE = {
  width:        12240,   // US Letter 8.5"
  height:       15840,   // US Letter 11"
  marginTop:    900,     // 0.625"
  marginBottom: 1080,    // 0.75"
  marginLeft:   1440,    // 1.0"  (proposal)
  marginRight:  1440,
  marginLeftLegal:  1800,  // 1.25" (legal documents)
  marginRightLegal: 1800,
};

export const PAGE_CONTENT_W       = PAGE.width - PAGE.marginLeft  - PAGE.marginRight;       // 9360
export const PAGE_CONTENT_W_LEGAL = PAGE.width - PAGE.marginLeftLegal - PAGE.marginRightLegal; // 8640


// ── IDENTITY STRINGS ────────────────────────────────────────────────────────

export const BRAND = {
  nameA:   "LAUTERTUN",                      // Ink Navy — wordmark part 1
  nameB:   "PARTNERS",                       // Burnished Gold — wordmark part 2
  tagline: "Restructuring  ·  Advisory  ·  Financial Leadership & Management",
  website: "",                               // placeholder
  email:   "",                               // placeholder
  phone:   "",                               // placeholder
  city:    "",                               // placeholder
};


// ── LOGOMARK (SVG + base64) ──────────────────────────────────────────────────
//
// Abstract lauter tun: false-bottom horizontal lines (gold), vertical
// drain arrow (navy), and drain spigot line — all within a gold circle.
// Designed for 32×32 display; scale freely (vector).

export const LOGOMARK_SVG = `<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14.5" stroke="#B8934A" stroke-width="1"/><clipPath id="si1"><circle cx="16" cy="16" r="14"/></clipPath><g clip-path="url(#si1)"><line x1="2" y1="23" x2="30" y2="23" stroke="#B8934A" stroke-width="0.9" opacity="0.9"/><line x1="2" y1="19.5" x2="30" y2="19.5" stroke="#B8934A" stroke-width="0.8" opacity="0.7"/><line x1="2" y1="16" x2="30" y2="16" stroke="#B8934A" stroke-width="0.7" opacity="0.5"/><line x1="2" y1="12" x2="30" y2="12" stroke="#B8934A" stroke-width="0.6" opacity="0.35"/></g><line x1="16" y1="19" x2="16" y2="8" stroke="#1A2535" stroke-width="1.2"/><polyline points="12.5,12 16,7.5 19.5,12" stroke="#1A2535" stroke-width="1.2" fill="none"/><line x1="11" y1="19" x2="21" y2="19" stroke="#1A2535" stroke-width="1.2"/></svg>`;

export const LOGOMARK_BASE64 = "PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE0LjUiIHN0cm9rZT0iI0I4OTM0QSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNsaXBQYXRoIGlkPSJzaTEiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjc2kxKSI+PGxpbmUgeDE9IjIiIHkxPSIyMyIgeDI9IjMwIiB5Mj0iMjMiIHN0cm9rZT0iI0I4OTM0QSIgc3Ryb2tlLXdpZHRoPSIwLjkiIG9wYWNpdHk9IjAuOSIvPjxsaW5lIHgxPSIyIiB5MT0iMTkuNSIgeDI9IjMwIiB5Mj0iMTkuNSIgc3Ryb2tlPSIjQjg5MzRBIiBzdHJva2Utd2lkdGg9IjAuOCIgb3BhY2l0eT0iMC43Ii8+PGxpbmUgeDE9IjIiIHkxPSIxNiIgeDI9IjMwIiB5Mj0iMTYiIHN0cm9rZT0iI0I4OTM0QSIgc3Ryb2tlLXdpZHRoPSIwLjciIG9wYWNpdHk9IjAuNSIvPjxsaW5lIHgxPSIyIiB5MT0iMTIiIHgyPSIzMCIgeTI9IjEyIiBzdHJva2U9IiNCODkzNEEiIHN0cm9rZS13aWR0aD0iMC42IiBvcGFjaXR5PSIwLjM1Ii8+PC9nPjxsaW5lIHgxPSIxNiIgeTE9IjE5IiB4Mj0iMTYiIHkyPSI4IiBzdHJva2U9IiMxQTI1MzUiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHBvbHlsaW5lIHBvaW50cz0iMTIuNSwxMiAxNiw3LjUgMTkuNSwxMiIgc3Ryb2tlPSIjMUEyNTM1IiBzdHJva2Utd2lkdGg9IjEuMiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIxMSIgeTE9IjE5IiB4Mj0iMjEiIHkyPSIxOSIgc3Ryb2tlPSIjMUEyNTM1IiBzdHJva2Utd2lkdGg9IjEuMiIvPjwvc3ZnPg==";

/** For use in HTML/CSS: data URI for <img src> or background-image */
export const LOGOMARK_DATA_URI = `data:image/svg+xml;base64,${LOGOMARK_BASE64}`;


// ── DOCX BORDER HELPERS ──────────────────────────────────────────────────────
// Convenience objects for docx-js border definitions

export const BORDERS = {
  none:    () => ({ style: "none",   size: 0,  color: "FFFFFF" }),
  hairline:(color = LIGHT_RULE) => ({ style: "single", size: 4,  color: color.replace("#",""), space: 0 }),
  goldRule:() => ({ style: "single", size: 12, color: GOLD.replace("#",""), space: 1 }),
  thinRule:(color = LIGHT_RULE) => ({ style: "single", size: 4,  color: color.replace("#",""), space: 1 }),
};

export const NO_BORDERS = {
  top:    BORDERS.none(),
  bottom: BORDERS.none(),
  left:   BORDERS.none(),
  right:  BORDERS.none(),
};

import defaultTheme from "tailwindcss/defaultTheme"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "base-bg": "#0d0f12",
        "card-bg": "#1e2328",
        "on-secondary-fixed-variant": "#004c6e",
        "secondary-fixed-dim": "#89ceff",
        "tertiary": "#63fbe5",
        "surface-container-highest": "#333538",
        "surface-container-high": "#282a2d",
        "on-secondary-container": "#00344e",
        "on-tertiary-fixed-variant": "#005047",
        "on-error": "#690005",
        "on-tertiary-fixed": "#00201c",
        "on-surface": "#e2e2e6",
        "surface-tint": "#63dbb3",
        "surface-container": "#1e2023",
        "secondary-fixed": "#c9e6ff",
        "inverse-on-surface": "#2f3034",
        "primary-container": "#64dcb4",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#005f48",
        "on-secondary": "#00344d",
        "primary-fixed": "#81f8ce",
        "primary-fixed-dim": "#63dbb3",
        "on-tertiary-container": "#005e54",
        "on-primary-fixed-variant": "#00513d",
        "outline": "#86948d",
        "tertiary-fixed-dim": "#3cddc7",
        "on-background": "#e2e2e6",
        "on-surface-variant": "#bccac2",
        "on-primary": "#003829",
        "surface": "#111317",
        "outline-variant": "#3d4944",
        "surface-dim": "#111317",
        "tertiary-container": "#3edec9",
        "secondary": "#89ceff",
        "error": "#ffb4ab",
        "secondary-container": "#00a2e6",
        "background": "#111317",
        "surface-container-lowest": "#0c0e11",
        "on-primary-fixed": "#002117",
        "inverse-surface": "#e2e2e6",
        "on-tertiary": "#003731",
        "surface-container-low": "#1a1c1f",
        "on-secondary-fixed": "#001e2f",
        "inverse-primary": "#006c52",
        "primary": "#82f9cf",
        "surface-variant": "#333538",
        "error-container": "#93000a",
        "surface-bright": "#37393d",
        "tertiary-fixed": "#62fae3"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "display-hero": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "body-main": ["Inter", ...defaultTheme.fontFamily.sans],
        "eyebrow-mono": ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        "label-caps": ["Inter", ...defaultTheme.fontFamily.sans],
        "heading-section": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "sans": ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        "serif": ["Newsreader", ...defaultTheme.fontFamily.serif],
        "technical-sm": ["Space Grotesk", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        "display-hero": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "300"}],
        "body-main": ["16px", {"lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400"}],
        "eyebrow-mono": ["11px", {"lineHeight": "16px", "letterSpacing": "0.14em", "fontWeight": "500"}],
        "label-caps": ["10px", {"lineHeight": "12px", "letterSpacing": "0.12em", "fontWeight": "600"}],
        "heading-section": ["32px", {"lineHeight": "1.2", "fontWeight": "400"}],
        "technical-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" }]
      },
      spacing: {
        "unit": "4px",
        "gutter": "24px",
        "container-max": "1440px",
        "grid-line-opacity": "0.05",
        "margin": "64px"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
    },
  },
  plugins: [typography],
}

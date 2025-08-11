import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ibm: ["var(--font-ibm)", "sans-serif"],
        chiron: ["var(--font-chiron)"],
        kanit: ["Kanit", "sans-serif"],
        museo: ["MuseoModerno", "sans-serif"],
        noticia: ["NoticiaText", "serif"],
        beatrice: ["BeatriceTRIAL", "sans-serif"],
      },
      screens: {
        xxl: "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",

        // ✅ max-width 기준 커스텀 브레이크포인트
        "max-xs": { raw: "(max-width: 639px)" },
        "max-sm": { raw: "(max-width: 767px)" },
        "max-md": { raw: "(max-width: 1023px)" },
        "max-lg": { raw: "(max-width: 1279px)" },
        "max-xl": { raw: "(max-width: 1535px)" },
        "max-2xl": { raw: "(max-width: 1999px)" }, // 예: 듀얼 모니터보다 작은 화면
        "max-xxxl": { raw: "(max-width: 1999px)" }, // 네가 말한 부분!
      },

      opacity: {
        "70": ".7",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
    },
  },
  plugins: [],
};
export default config;

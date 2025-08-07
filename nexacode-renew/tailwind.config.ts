import type { Config } from "tailwindcss";

const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },
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
        primary: "#C9F31D", // 원하는 색상 코드로 변경
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
        xxl: "1920px",
        xl: "1400px",
        lg: "1200px",
        md: "992px",
        sm: "768px",
        xs: "576px",

        "max-xxxl": { raw: "(max-width: 1999px)" },
        "max-xxl": { raw: "(max-width: 1919px)" },
        "max-xl": { raw: "(max-width: 1399px)" },
        "max-lg": { raw: "(max-width: 1199px)" },
        "max-md": { raw: "(max-width: 991px)" },
        "max-sm": { raw: "(max-width: 767px)" },
        "max-xs": { raw: "(max-width: 575px)" },
      },
      transitionDuration: {
        "450": "450ms", // 450ms를 커스텀 duration으로 추가
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

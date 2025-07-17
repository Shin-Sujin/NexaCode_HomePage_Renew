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
      screens: {
        xxl: "1920px",
        xl: "1400px",
        lg: "1200px",
        md: "992px",
        sm: "768px",
        xs: "576px",
        pf_xxl: "1920px",
        pf_xl: "1400px",
        pf_lg: "1100px",
        pf_md: "800px",
        pf_sm: "640px",
        pf_xs: "576px",
        "max-xl": { raw: "(max-width: 1399px)" },
        "max-lg": { raw: "(max-width: 1199px)" },
        "max-md": { raw: "(max-width: 991px)" },
        "max-sm": { raw: "(max-width: 767px)" },
        "max-xs": { raw: "(max-width: 575px)" },
        "max-pf_md": { raw: "(max-width: 799px)" },
        "max-pf_sm": { raw: "(max-width: 639px)" },
        "max-pf_xs": { raw: "(max-width: 575px)" },
        "max-pf_xxl": { raw: "(max-width: 1919px)" },
        "max-pf_xl": { raw: "(max-width: 1399px)" },
        "max-pf_lg": { raw: "(max-width: 1099px)" },
      },
      transitionDuration: {
        "450": "450ms", // 450ms를 커스텀 duration으로 추가
      },
      opacity: {
        "70": ".7",
      },
      fontWeight: {
        100: "100",
        150: "150",
        200: "200",
        250: "250",
        300: "300",
        350: "350",
        400: "400",
        450: "450",
        500: "500",
        550: "550",
        600: "600",
        650: "650",
        700: "700",
        750: "750",
        800: "800",
        850: "850",
        900: "900",
      },
    },
  },
  plugins: [],
};
export default config;

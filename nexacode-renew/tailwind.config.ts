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
      },
      screens: {
        xxl: "1920px",
        xl: "1400px",
        lg: "1200px",
        md: "992px",
        sm: "768px",
        xs: "576px",
        "max-xl": { raw: "(max-width: 1399px)" },
        "max-lg": { raw: "(max-width: 1199px)" },
        "max-md": { raw: "(max-width: 991px)" },
        "max-sm": { raw: "(max-width: 767px)" },
        "max-xs": { raw: "(max-width: 575px)" },
      },
    },
  },
  plugins: [],
};
export default config;

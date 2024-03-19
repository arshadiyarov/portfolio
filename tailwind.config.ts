import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firaCode: "Fira Code, sans-serif",
      },
      colors: {
        primary: "#C778DD",
        secondary: "#ABB2BF",
        error: "#E06B74",
        success: "#98C379",
        warning: "#E5C07A",
      },
      backgroundColor: {
        main: "#282C33",
      },
    },
  },
  plugins: [],
};
export default config;

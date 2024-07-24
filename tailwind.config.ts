import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: "#00A2FF",
      grey: "#828282",
      dark_grey: "#4A4A4A",
      light_grey: "rgba(130, 130, 130, 0.5)",
      white: "#FFFFFF",
      black: "#111111",
}
  },
  plugins: [require('daisyui')],
};
export default config;

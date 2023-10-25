import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpunk: "#3CDB27",
      },
      boxShadow: {
        "glow-sm": "0 0 10px 0 #3CDB27",
        "glow-lg": "0 0 20px 0 #3CDB27",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
export default config;

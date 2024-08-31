import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "12px",
      },
      colors: {
        primary: "#0B0C10",
        secondary: "#1F2833",
        accent: "#66FCF1",
        text: "#C5C6C7",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-gradient-primary": {
          background:
            "radial-gradient(circle at top left, rgba(75, 88, 107, 0.4) 0%, rgba(11, 12, 16, 0.2) 100%)",
        },
        ".bg-gradient-secondary": {
          background:
            "linear-gradient(to right, rgba(11, 12, 16, 0.2) 0%, rgba(11, 12, 16, 0.45) 60%, rgba(75, 88, 107, 0.2) 100%)",
        },
      });
    }),
  ],
};

export default config;

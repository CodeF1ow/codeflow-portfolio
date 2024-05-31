import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FDDA0D",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(10.21deg, rgba(253, 218, 10, 0.5) -15.91%, rgba(2, 48, 32, 2) 60.58%)",
      },
    },
  },
  plugins: [],
};

export default config;

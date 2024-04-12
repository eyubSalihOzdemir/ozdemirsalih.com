/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        button: "8px",
      },
      animation: {
        "bounce-slow": "bounce 4s ease-in-out infinite",
      },
      colors: {
        accent: "#f26e59",
        secondary: "#B2B2B268",
        background: "#EDEDED",
        divider: "#d1d1d18",
        dark: {
          background: "#191919",
          secondary: "#262626",
          text: "#D1D1D1",
        },
      },
    },
  },
  plugins: [],
};

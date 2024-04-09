/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

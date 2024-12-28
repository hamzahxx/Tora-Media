/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffbf0",
        primary: "#fcb827",
        secondary: "#faf4db",
        accent: "#ceadff",
        text: "#0e0c0d",
      },
    },
  },
  plugins: [],
};

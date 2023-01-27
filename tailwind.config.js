/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: "var(--font-titillium)",
        oxygen: "var(--font-oxygen)",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { 'background-position': '0 50%' },
          "50%": { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-move': "gradient 5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};

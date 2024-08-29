/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#D9D9D9",
        "gray-darkCalendar": "#353535",
        "btn": "#57886C",
      },
      boxShadow: {
        container: 'rgba(0, 0, 0, 0.15) 0px 0px 3px'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#D9D9D9",
        "gray-darkCalendar": "#353535"
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

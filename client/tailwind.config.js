/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        "primary": "#4a90e2",
        "gray-light": "#D9D9D9",
        "gray-darkCalendar": "#353535",
        "btn": "#4a90e2",
        "principal-text": "#333333",
        "secondary-text": "#9b9b9b",
        "text-error": "#e94e77",
        "page-background": "#ffffff",
        // "page-background": "#f5f5f5",
      },
      boxShadow: {
        container: 'rgba(0, 0, 0, 0.15) 0px 0px 3px'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

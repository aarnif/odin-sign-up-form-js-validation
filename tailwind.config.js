/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/images/hero.webp')",
      },
      textShadow: {
        default: "1px 1px 1px #000000",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

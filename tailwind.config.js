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
      keyframes: {
        rotateAndScale: {
          "0%": { opacity: "0", transform: "rotate(0) scale(1)" },
          "100%": { opacity: "1", transform: "rotate(360deg) scale(1.5)" },
        },
      },
      animation: {
        "rotate-and-scale": "rotateAndScale 500ms ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

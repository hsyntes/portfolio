/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          darker: "rgb(97, 50, 178)",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          darker: "rgb(189, 66, 141)",
        },

        dark: {
          DEFAULT: "rgb(var(--color-dark))",
          darker: "rgb(32, 32, 32)",
        },

        black: "rgb(var(--color-black))",
        light: "rgb(var(--color-light))",
        white: "rgb(var(--color-white))",
      },

      borderRadius: {
        DEFAULT: "1rem",
      },

      transitionDuration: {
        DEFAULT: ".2s",
      },

      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

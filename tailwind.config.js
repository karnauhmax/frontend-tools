/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "sidebar-layout": "300px 1fr",
        "performance-items-layout": "1fr 20px"
      },
      transitionProperty: {
        "grid-rows": "grid-template-rows"
      },
      colors: {
        primary: "#42b883",
        dark: "#020420",
        "text-secondary": "rgba(235, 235, 235, .6)",
        "text-primary": "rgba(255, 255, 255, .87)"
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" }
      },
      transitionDuration: {
        400: "400ms"
      },
      fontFamily: {
        main: ["DM Sans", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

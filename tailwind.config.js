/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "sidebar-layout": "300px 1fr"
      },
      colors: {
        primary: "#42b883",
        dark: "#1a1a1a",
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

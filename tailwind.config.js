/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "!./node_modules"],
  theme: {
    container: {
      center: true,
      padding: "48px",
    },
    extend: {
      colors: {
        foreground: "#000000",
        primary: "#F4F4F4",
        primaryDarker: "#CCCCCC",
        secondary: "#1F1F1F",
        border: "#242424",
        dark: "#0A0A0A",
        text: "#838383",
      },
    },
  },
  plugins: [],
};

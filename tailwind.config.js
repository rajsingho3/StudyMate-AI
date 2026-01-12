/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B061A",
        card: "#120A24",
        glass: "#1A1033",
        primary: "#6D4AFF",
        text: "#FFFFFF",
        subtext: "#B6B2C8",
        muted: "#8A86A3",
      },
    },
  },
  plugins: [],
};

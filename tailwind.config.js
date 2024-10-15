/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne"],
      },
      colors: {
        dustyPink: "#EED3D7",
        panelBlue: "#5C7E9B",
        darkBlue: "#003057",
        lightBlack: "#3F3F3F",
      },
    },
  },
  plugins: [],
};

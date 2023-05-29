/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #006FC4 0%, #011524 100%)",
      },
      fontFamily: {
        grotesk: ["Schibsted Grotesk", "san-serif"],
      },
    },
  },
  plugins: [],
};

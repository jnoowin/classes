module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-cadet": "#2b3253",
        liberty: "#545c99",
        bone: "#e6dfd5",
        rajah: "#ffad69",
        "dark-orange": "#f58f29",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [],
};

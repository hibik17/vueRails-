/** @type {import('tailwindcss').Config} */

const customColors = {
  header: "#343a40",
};

const header = (module.exports = {
  content: ["./app/javascript/**/*.vue"],
  theme: {
    extend: {
      colors: {
        header: customColors.header,
      },
    },
  },
  plugins: [],
});

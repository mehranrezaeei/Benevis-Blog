/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "deep-mindnight-blue": "#001f3f",
        "medium-steel-blue": {
          800: "#4f6480",
          700: "#4682b4",
        },
      },
    },
  },
  plugins: [],
};

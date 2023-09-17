/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: false,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}


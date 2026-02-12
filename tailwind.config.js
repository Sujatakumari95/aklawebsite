// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← this is important
  ],
 theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
